import BaseController from './BaseController'
import { eNumInput } from '../Common/eNums'

// Reverse map of eNumInput so tracks for parameters absent from the
// current shader's UI still get a readable label
const eIdNames = Object.fromEntries(
  Object.entries(eNumInput).map(([name, eId]) => [eId, name])
)

/**
 * KeyframeTimelineController - Video-editor style bottom timeline panel
 * Renders one track row per animated parameter with draggable keyframe
 * diamonds, a scrubbing playhead, transport controls and a properties
 * panel for the selected keyframe (time / value / sharpness)
 */
export default class KeyframeTimelineController extends BaseController {
  constructor() {
    super()
    this.selected = null // { eId, key } - key is the keyframe object reference
    this.getElements()
    this.linkTransport()
    this.linkTimelineArea()
    this.linkPropsPanel()
    this.linkKeyboardEvents()
    this.updateRuler()
    this.updatePlayhead()
    this.select(null)
  }

  getElements() {
    this.playPauseBtn = document.getElementById('play-pause-timeline-button')
    this.seekStartBtn = document.getElementById('seek-start-timeline-button')
    this.seekEndBtn = document.getElementById('seek-end-timeline-button')
    this.loopModeBtn = document.getElementById('loop-mode-btn')
    this.durationInput = document.getElementById('timeline-duration')
    this.timeReadout = document.getElementById('timeline-time-readout')

    this.scroll = document.getElementById('tp-scroll')
    this.scrollContent = document.getElementById('tp-scroll-content')
    this.ruler = document.getElementById('tp-ruler')
    this.rows = document.getElementById('tp-rows')
    this.emptyHint = document.getElementById('tp-empty-hint')
    this.playhead = document.getElementById('tp-playhead')

    this.propName = document.getElementById('tp-prop-name')
    this.propsBody = document.getElementById('tp-props-body')
    this.propsEmpty = document.getElementById('tp-props-empty')
    this.propTime = document.getElementById('tp-prop-time')
    this.propValue = document.getElementById('tp-prop-value')
    this.propSharpness = document.getElementById('tp-prop-sharpness')
    this.propDelete = document.getElementById('tp-prop-delete')
  }

  // ============================================================
  // TRANSPORT
  // ============================================================

  linkTransport() {
    // Buttons blur after click so Space (play/pause hotkey) doesn't also
    // re-activate the focused button
    this.playPauseBtn.addEventListener('click', () => {
      this.animation.togglePlay()
      this.playPauseBtn.blur()
    })

    this.seekStartBtn.addEventListener('click', () => {
      this.animation.setTime(0)
      this.seekStartBtn.blur()
    })

    this.seekEndBtn.addEventListener('click', () => {
      this.animation.setTime(this.animation.duration)
      this.seekEndBtn.blur()
    })

    this.loopModeBtn.addEventListener('click', () => {
      const mode = this.animation.mode === 'loop' ? 'pingpong' : 'loop'
      this.animation.setMode(mode)
      this.updateModeButton(mode)
      this.loopModeBtn.blur()
    })

    this.durationInput.addEventListener('change', () => {
      this.animation.setDuration(this.durationInput.value)
      this.durationInput.value = this.animation.duration
    })
  }

  linkKeyboardEvents() {
    this.keyboard.on('togglePlay', () => {
      this.animation.togglePlay()
    })

    this.keyboard.on('seekStart', () => {
      this.animation.setTime(0)
    })

    this.keyboard.on('seekEnd', () => {
      this.animation.setTime(this.animation.duration)
    })

    window.addEventListener('keydown', (event) => {
      if (event.code !== 'Delete' && event.code !== 'Backspace') return
      const tag = document.activeElement?.tagName
      if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return
      if (!this.selected) return
      event.preventDefault()
      this.deleteSelectedKeyframe()
    })
  }

  /**
   * @param {boolean} playing
   */
  updatePlayButton(playing) {
    this.playPauseBtn.textContent = playing ? '⏸' : '▶'
  }

  /**
   * @param {string} mode
   */
  updateModeButton(mode) {
    this.loopModeBtn.textContent = mode === 'pingpong' ? '⇄' : '⟳'
    this.loopModeBtn.setAttribute('data-tooltip',
      mode === 'pingpong' ? 'Ping-Pong (click for Loop)' : 'Loop (click for Ping-Pong)')
  }

  updateDurationInput() {
    this.durationInput.value = this.animation.duration
  }

  // ============================================================
  // RULER & PLAYHEAD
  // ============================================================

  /**
   * Map a pointer x position to a timeline time
   * @param {number} clientX
   * @returns {number} seconds, clamped to [0, duration]
   */
  timeFromClientX(clientX) {
    const rect = this.ruler.getBoundingClientRect()
    if (rect.width <= 0) return 0
    const frac = (clientX - rect.left) / rect.width
    return Math.min(Math.max(0, frac), 1) * this.animation.duration
  }

  updateRuler() {
    const duration = this.animation.duration
    const width = this.ruler.getBoundingClientRect().width || 800

    // Pick the smallest tick step that keeps ticks ~60px apart
    const steps = [0.1, 0.25, 0.5, 1, 2, 5, 10, 30, 60]
    const pxPerSec = width / duration
    let step = steps[steps.length - 1]
    for (const candidate of steps) {
      if (candidate * pxPerSec >= 60) {
        step = candidate
        break
      }
    }

    this.ruler.innerHTML = ''
    for (let t = 0; t < duration - step * 0.25; t += step) {
      const tick = document.createElement('span')
      tick.className = 'tp-tick'
      tick.style.left = (t / duration * 100) + '%'
      tick.textContent = (Math.round(t * 100) / 100) + 's'
      this.ruler.appendChild(tick)
    }
  }

  updatePlayhead() {
    const frac = this.animation.duration > 0
      ? this.animation.playhead / this.animation.duration
      : 0
    this.playhead.style.left =
      `calc(var(--tp-label-w) + ${frac} * (100% - var(--tp-label-w)))`
    this.timeReadout.textContent = this.animation.playhead.toFixed(2) + 's'
  }

  // ============================================================
  // TRACK ROWS & KEYFRAMES
  // ============================================================

  /**
   * @param {number} eId
   * @returns {string}
   */
  getTrackName(eId) {
    const input = this.experience.shader?.getInput(eId)
    return input ? String(input.name) : (eIdNames[eId] ?? `Param ${eId}`)
  }

  /**
   * Full re-render of track rows and keyframes from animation state
   */
  rebuild() {
    this.rows.innerHTML = ''
    const tracks = Array.from(this.animation.tracks.values())
    this.emptyHint.hidden = tracks.length > 0

    tracks.forEach((track, order) => {
      const row = document.createElement('div')
      row.className = 'tp-track-row'
      row.setAttribute('data-channel', (order % 5) + 1)

      const label = document.createElement('div')
      label.className = 'tp-track-label'
      label.title = this.getTrackName(track.eId)
      if (track.muted) row.classList.add('muted')

      const muteBtn = document.createElement('button')
      muteBtn.className = 'tp-mute-btn'
      muteBtn.textContent = track.muted ? '○' : '●'
      muteBtn.title = track.muted ? 'Unmute track' : 'Mute track'
      muteBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        this.animation.toggleMute(track.eId)
      })

      const labelText = document.createElement('span')
      labelText.className = 'tp-track-name'
      labelText.textContent = this.getTrackName(track.eId)

      label.appendChild(muteBtn)
      label.appendChild(labelText)

      const lane = document.createElement('div')
      lane.className = 'tp-track'
      this.linkLane(lane, track)

      for (const key of track.keys) {
        lane.appendChild(this.buildKeyElement(track, key))
      }

      row.appendChild(label)
      row.appendChild(lane)
      this.rows.appendChild(row)
    })

    // Drop selection if its keyframe no longer exists
    if (this.selected) {
      const track = this.animation.getTrack(this.selected.eId)
      if (!track || !track.keys.includes(this.selected.key)) {
        this.select(null)
      } else {
        this.refreshPropsPanel()
      }
    }
  }

  /**
   * @param {import('../Animation/KeyframeTrack.js').default} track
   * @param {Object} key
   * @returns {HTMLElement}
   */
  buildKeyElement(track, key) {
    const elem = document.createElement('div')
    elem.className = 'tp-key'
    elem.style.left = this.keyLeftPercent(key)
    if (this.selected && this.selected.key === key) {
      elem.classList.add('selected')
    }

    elem.addEventListener('pointerdown', (event) => {
      event.stopPropagation()
      this.select(track.eId, key)
      this.startKeyDrag(elem, track, key, event)
    })

    elem.addEventListener('contextmenu', (event) => {
      event.preventDefault()
      event.stopPropagation()
      const index = track.keys.indexOf(key)
      if (index >= 0) {
        if (this.selected && this.selected.key === key) {
          this.selected = null
        }
        this.animation.removeKeyframe(track.eId, index)
        this.animation.apply()
      }
    })

    return elem
  }

  /**
   * @param {Object} key
   * @returns {string} css left percentage
   */
  keyLeftPercent(key) {
    const duration = this.animation.duration
    const frac = duration > 0 ? Math.min(key.t / duration, 1) : 0
    return (frac * 100) + '%'
  }

  /**
   * Drag a keyframe horizontally to retime it
   */
  startKeyDrag(elem, track, key, event) {
    elem.setPointerCapture(event.pointerId)
    let moved = false

    const onMove = (moveEvent) => {
      moved = true
      const newT = this.timeFromClientX(moveEvent.clientX)
      track.moveKeyframe(track.keys.indexOf(key), newT)
      elem.style.left = this.keyLeftPercent(key)
      this.animation.apply()
      this.refreshPropsPanel()
    }

    const onUp = () => {
      elem.removeEventListener('pointermove', onMove)
      elem.removeEventListener('pointerup', onUp)
      elem.removeEventListener('pointercancel', onUp)
      if (moved) {
        // Full rebuild after the drag so key ordering and the key
        // button states stay in sync
        this.animation.trigger('tracksChanged')
      }
    }

    elem.addEventListener('pointermove', onMove)
    elem.addEventListener('pointerup', onUp)
    elem.addEventListener('pointercancel', onUp)
  }

  /**
   * Lane interactions: drag to scrub, double-click to add a keyframe
   */
  linkLane(lane, track) {
    lane.addEventListener('pointerdown', (event) => {
      this.select(null)
      this.startScrub(lane, event)
    })

    lane.addEventListener('dblclick', (event) => {
      const t = this.timeFromClientX(event.clientX)
      const v = track.evaluate(t)
      this.animation.addOrUpdateKeyframe(track.eId, t, v)
      const index = track.indexOfKeyAt(t, this.animation.keyEpsilon)
      if (index >= 0) {
        this.select(track.eId, track.keys[index])
        this.rebuild()
      }
    })
  }

  linkTimelineArea() {
    this.ruler.addEventListener('pointerdown', (event) => {
      this.startScrub(this.ruler, event)
    })

    this.sizes.on('resize', () => {
      this.updateRuler()
    })
  }

  /**
   * Drag-scrub the playhead
   */
  startScrub(elem, event) {
    elem.setPointerCapture(event.pointerId)
    this.animation.setTime(this.timeFromClientX(event.clientX))

    const onMove = (moveEvent) => {
      this.animation.setTime(this.timeFromClientX(moveEvent.clientX))
    }

    const onUp = () => {
      elem.removeEventListener('pointermove', onMove)
      elem.removeEventListener('pointerup', onUp)
      elem.removeEventListener('pointercancel', onUp)
    }

    elem.addEventListener('pointermove', onMove)
    elem.addEventListener('pointerup', onUp)
    elem.addEventListener('pointercancel', onUp)
  }

  // ============================================================
  // SELECTION & PROPERTIES PANEL
  // ============================================================

  /**
   * @param {number|null} eId
   * @param {Object|null} key
   */
  select(eId, key = null) {
    this.selected = (eId === null || !key) ? null : { eId: Number(eId), key }

    for (const elem of this.rows.querySelectorAll('.tp-key.selected')) {
      elem.classList.remove('selected')
    }
    if (this.selected) {
      // Re-mark the matching element (cheap full scan, few keys)
      const track = this.animation.getTrack(this.selected.eId)
      if (track) {
        const lanes = this.rows.querySelectorAll('.tp-track')
        const trackOrder = Array.from(this.animation.tracks.keys()).indexOf(this.selected.eId)
        const lane = lanes[trackOrder]
        const index = track.keys.indexOf(this.selected.key)
        if (lane && lane.children[index]) {
          lane.children[index].classList.add('selected')
        }
      }
    }

    this.refreshPropsPanel()
  }

  refreshPropsPanel() {
    if (!this.selected) {
      this.propName.textContent = 'Keyframe'
      this.propsBody.hidden = true
      this.propsEmpty.hidden = false
      return
    }

    const { eId, key } = this.selected
    this.propName.textContent = this.getTrackName(eId)
    this.propsBody.hidden = false
    this.propsEmpty.hidden = true

    if (document.activeElement !== this.propTime) {
      this.propTime.value = Math.round(key.t * 100) / 100
    }
    if (document.activeElement !== this.propValue) {
      this.propValue.value = Math.round(key.v * 10000) / 10000
    }
    this.propSharpness.value = key.s
  }

  linkPropsPanel() {
    this.propTime.addEventListener('change', () => {
      if (!this.selected) return
      const track = this.animation.getTrack(this.selected.eId)
      if (!track) return
      const index = track.keys.indexOf(this.selected.key)
      if (index < 0) return
      track.moveKeyframe(index, Number(this.propTime.value))
      this.animation.apply()
      this.animation.trigger('tracksChanged')
    })

    this.propValue.addEventListener('change', () => {
      if (!this.selected) return
      this.selected.key.v = Number(this.propValue.value)
      this.animation.apply()
      this.animation.trigger('tracksChanged')
    })

    this.propSharpness.addEventListener('input', () => {
      if (!this.selected) return
      this.selected.key.s = Number(this.propSharpness.value)
      this.animation.apply()
    })

    this.propDelete.addEventListener('click', () => {
      this.deleteSelectedKeyframe()
    })
  }

  deleteSelectedKeyframe() {
    if (!this.selected) return
    const { eId, key } = this.selected
    const track = this.animation.getTrack(eId)
    this.selected = null
    if (track) {
      const index = track.keys.indexOf(key)
      if (index >= 0) {
        this.animation.removeKeyframe(eId, index)
        this.animation.apply()
      }
    }
    this.refreshPropsPanel()
  }
}
