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
    this._laneEls = new Map() // eId -> { lane, inner, svg, range } for expanded lanes
    this.getElements()
    this.linkTransport()
    this.linkTimelineArea()
    this.linkPropsPanel()
    this.linkKeyboardEvents()
    this.updateMusicUI()
    this.select(null)
  }

  getElements() {
    this.playPauseBtn = document.getElementById('play-pause-timeline-button')
    this.seekStartBtn = document.getElementById('seek-start-timeline-button')
    this.seekEndBtn = document.getElementById('seek-end-timeline-button')
    this.loopModeBtn = document.getElementById('loop-mode-btn')
    this.durationInput = document.getElementById('timeline-duration')
    this.timeReadout = document.getElementById('timeline-time-readout')

    this.musicModeBtn = document.getElementById('music-mode-btn')
    this.durationControls = document.getElementById('duration-controls')
    this.musicControls = document.getElementById('music-controls')
    this.bpmInput = document.getElementById('music-bpm')
    this.barsInput = document.getElementById('music-bars')
    this.sigInput = document.getElementById('music-sig')
    this.gridSelect = document.getElementById('music-grid')

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

    this.musicModeBtn.addEventListener('click', () => {
      this.animation.setMusicMode(!this.animation.musicMode)
      this.musicModeBtn.blur()
    })

    this.bpmInput.addEventListener('change', () => {
      this.animation.setBpm(this.bpmInput.value)
      this.bpmInput.value = this.animation.bpm
    })

    this.barsInput.addEventListener('change', () => {
      this.animation.setBars(this.barsInput.value)
      this.barsInput.value = this.animation.bars
    })

    this.sigInput.addEventListener('change', () => {
      this.animation.setBeatsPerBar(this.sigInput.value)
      this.sigInput.value = this.animation.beatsPerBar
    })

    this.gridSelect.addEventListener('change', () => {
      this.animation.setGridDivision(this.gridSelect.value)
    })
  }

  /**
   * Sync the music-mode toolbar (button state, input values, visibility)
   * to the animation state, and refresh the ruler.
   */
  updateMusicUI() {
    const on = this.animation.musicMode
    this.musicModeBtn.classList.toggle('active', on)
    this.durationControls.style.display = on ? 'none' : ''
    this.musicControls.style.display = on ? '' : 'none'
    this.bpmInput.value = this.animation.bpm
    this.barsInput.value = this.animation.bars
    this.sigInput.value = this.animation.beatsPerBar
    this.gridSelect.value = this.animation.gridDivision
    this.durationInput.value = this.animation.duration
    this.updateRuler()
    this.updatePlayhead()
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
    const t = Math.min(Math.max(0, frac), 1) * this.animation.duration
    // Snap to the tempo grid in music mode (no-op otherwise)
    return this.animation.snapTime(t)
  }

  updateRuler() {
    if (this.animation.musicMode) {
      this.updateRulerMusic()
      return
    }
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

  /**
   * Tempo-aware ruler: labelled ticks at each bar plus minor ticks at the
   * current snap-grid resolution (bar / 1/2 / 1/4 / 1/16), so the visible grid
   * matches where keyframes will snap. Grid ticks are thinned out when they
   * would be closer than ~5px.
   */
  updateRulerMusic() {
    const anim = this.animation
    const duration = anim.duration
    const width = this.ruler.getBoundingClientRect().width || 800
    const pxPerSec = width / duration
    const secPerBar = anim.secondsPerBeat * anim.beatsPerBar

    this.ruler.innerHTML = ''

    // Labelled bar lines
    const totalBars = Math.ceil(anim.bars)
    for (let bar = 0; bar < totalBars; bar++) {
      const tBar = bar * secPerBar
      if (tBar > duration + 1e-6) break
      const tick = document.createElement('span')
      tick.className = 'tp-tick'
      tick.style.left = (tBar / duration * 100) + '%'
      tick.textContent = String(bar + 1)
      this.ruler.appendChild(tick)
    }

    // Minor grid lines at the snap-grid division, skipping ones on a bar line
    const gridStep = anim.gridStepSeconds()
    if (gridStep > 0 && gridStep * pxPerSec >= 5) {
      for (let t = gridStep; t < duration - 1e-6; t += gridStep) {
        const r = t / secPerBar
        if (Math.abs(r - Math.round(r)) < 1e-6) continue // coincides with a bar
        const minor = document.createElement('span')
        minor.className = 'tp-tick tp-tick-minor'
        minor.style.left = (t / duration * 100) + '%'
        this.ruler.appendChild(minor)
      }
    }
  }

  updatePlayhead() {
    const frac = this.animation.duration > 0
      ? this.animation.playhead / this.animation.duration
      : 0
    this.playhead.style.left =
      `calc(var(--tp-label-w) + ${frac} * (100% - var(--tp-label-w)))`
    this.timeReadout.textContent = this.formatTime(this.animation.playhead)
  }

  /**
   * @param {number} t seconds
   * @returns {string} "bar.beat" in music mode, "X.XXs" otherwise
   */
  formatTime(t) {
    if (!this.animation.musicMode) return t.toFixed(2) + 's'
    // Nudge by a tiny epsilon so float drift at a bar boundary (e.g. 3.9999)
    // doesn't read as "bar.4" instead of the next bar
    const beats = this.animation.beatsAt(t) + 1e-6
    const bar = Math.floor(beats / this.animation.beatsPerBar) + 1
    const beat = Math.floor(beats % this.animation.beatsPerBar) + 1
    return `${bar}.${beat}`
  }

  // ============================================================
  // TRACK ROWS & KEYFRAMES
  // ============================================================

  /**
   * @param {number} eId
   * @returns {string}
   */
  /**
   * @param {number|string} eId
   * @returns {boolean} true if this is a modulator track with no live
   * modulator or whose target parameter is absent from the current shader
   */
  isOrphanModulatorTrack(eId) {
    if (typeof eId !== 'string' || !eId.startsWith('mod:')) return false
    const mod = this.experience.modulatorManager?.get(Number(eId.split(':')[1]))
    if (!mod) return true
    return !this.experience.shader?.getInput(mod.targetEId)
  }

  getTrackName(eId) {
    // Modulator center/range tracks: 'mod:<id>:center' -> "LFO·Zoom center"
    if (typeof eId === 'string' && eId.startsWith('mod:')) {
      const [, idStr, prop] = eId.split(':')
      const mod = this.experience.modulatorManager?.get(Number(idStr))
      if (!mod) return `Mod ${prop}`
      const target = this.experience.shader?.getInput(mod.targetEId)
      const targetName = target ? String(target.name) : `Param ${mod.targetEId}`
      const typeLabel = mod.type === 'lfo' ? 'LFO' : 'dB'
      return `${typeLabel}·${targetName} ${prop}`
    }
    const input = this.experience.shader?.getInput(eId)
    return input ? String(input.name) : (eIdNames[eId] ?? `Param ${eId}`)
  }

  /**
   * Full re-render of track rows and keyframes from animation state
   */
  rebuild() {
    this.rows.innerHTML = ''
    // Per-expanded-lane registry (eId -> { lane, inner, svg, range }) so
    // drags can redraw a single curve without a full rebuild
    this._laneEls = new Map()
    // Hide modulator lanes whose modulator/target no longer exists in the
    // current shader (e.g. after a fractal-mode switch) - the keyframes are
    // kept in the data so the lane reappears when the target is back.
    const tracks = Array.from(this.animation.tracks.values())
      .filter(track => !this.isOrphanModulatorTrack(track.eId))
    // Remember the rendered order so select() can map an eId to its lane index
    // (rendered tracks are a subset of animation.tracks once orphans are hidden)
    this._laneOrder = tracks.map(track => track.eId)
    this.emptyHint.hidden = tracks.length > 0

    tracks.forEach((track, order) => {
      const row = document.createElement('div')
      row.className = 'tp-track-row'
      row.setAttribute('data-channel', (order % 5) + 1)

      const label = document.createElement('div')
      label.className = 'tp-track-label'
      label.title = this.getTrackName(track.eId)
      if (track.muted) row.classList.add('muted')

      const expandBtn = document.createElement('button')
      expandBtn.className = 'tp-expand-btn'
      expandBtn.textContent = track.expanded ? '▾' : '▸'
      expandBtn.title = track.expanded ? 'Collapse lane' : 'Expand to automation lane'
      expandBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        this.animation.toggleExpanded(track.eId)
      })

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

      label.appendChild(expandBtn)
      label.appendChild(muteBtn)
      label.appendChild(labelText)

      const lane = document.createElement('div')
      lane.className = 'tp-track'
      this.linkLane(lane, track)

      if (track.expanded) {
        row.classList.add('expanded')
        this.buildExpandedLane(lane, track)
      } else {
        for (const key of track.keys) {
          lane.appendChild(this.buildKeyElement(track, key))
        }
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
   * @param {{min: number, max: number}|null} range - set for expanded lanes;
   * positions the key vertically by value and enables Y-dragging
   * @returns {HTMLElement}
   */
  buildKeyElement(track, key, range = null) {
    const elem = document.createElement('div')
    elem.className = 'tp-key'
    elem.style.left = this.keyLeftPercent(key)
    if (range) {
      elem.style.top = this.keyTopPercent(key, range)
    }
    if (this.selected && this.selected.key === key) {
      elem.classList.add('selected')
    }

    elem.addEventListener('pointerdown', (event) => {
      event.stopPropagation()
      // Ctrl/Cmd-drag duplicates the keyframe and drags the copy, leaving the
      // original in place (standard editor gesture)
      if (event.ctrlKey || event.metaKey) {
        const copy = { t: key.t, v: key.v, s: key.s }
        track.keys.push(copy)
        track.sortKeys()
        const copyElem = this.buildKeyElement(track, copy, range)
        elem.parentElement.appendChild(copyElem)
        this.select(track.eId, copy)
        this.startKeyDrag(copyElem, track, copy, event, true, range)
        return
      }
      this.select(track.eId, key)
      this.startKeyDrag(elem, track, key, event, false, range)
    })

    elem.addEventListener('contextmenu', (event) => {
      event.preventDefault()
      event.stopPropagation()
      const index = track.keys.indexOf(key)
      if (index >= 0) {
        if (this.selected && this.selected.key === key) {
          this.select(null)
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

  // ============================================================
  // AUTOMATION LANES (expanded tracks)
  // ============================================================

  /**
   * Value range for a track's automation lane.
   * Numeric params use their NumberInput min/max; 'mod:<id>:center' tracks
   * live in the target parameter's space so they use its range; anything
   * without an input (mod range tracks, orphaned params) falls back to the
   * extent of the key values, padded.
   * @param {import('../Animation/KeyframeTrack.js').default} track
   * @returns {{min: number, max: number}}
   */
  getTrackRange(track) {
    let min, max
    const eId = track.eId
    if (typeof eId === 'string' && eId.startsWith('mod:')) {
      const [, idStr, prop] = eId.split(':')
      if (prop === 'center') {
        const mod = this.experience.modulatorManager?.get(Number(idStr))
        const input = mod ? this.experience.shader?.getInput(mod.targetEId) : null
        if (input) {
          min = input.min
          max = input.max
        }
      }
    } else {
      const input = this.experience.shader?.getInput(eId)
      if (input) {
        min = input.min
        max = input.max
      }
    }

    if (min === undefined) {
      // No input to ask - fit the lane around the keys themselves
      const values = track.keys.map(k => k.v)
      if (values.length > 0) {
        min = Math.min(...values)
        max = Math.max(...values)
        const pad = Math.max(0.5, (max - min) * 0.1)
        min -= pad
        max += pad
      } else {
        min = -1
        max = 1
      }
    }

    if (!(max > min)) {
      // Degenerate (min === max, or NaN) - widen so the mapping stays finite
      const mid = Number.isFinite(min) ? min : 0
      min = mid - 0.5
      max = mid + 0.5
    }
    return { min, max }
  }

  /**
   * @param {Object} key
   * @param {{min: number, max: number}} range
   * @returns {string} css top percentage (high values at the top)
   */
  keyTopPercent(key, range) {
    const frac = (key.v - range.min) / (range.max - range.min)
    return ((1 - Math.min(Math.max(frac, 0), 1)) * 100) + '%'
  }

  /**
   * @param {number} clientY
   * @param {HTMLElement} inner - the .tp-lane-inner element
   * @param {{min: number, max: number}} range
   * @returns {number} value at that pointer height, clamped to the range
   */
  valueFromClientY(clientY, inner, range) {
    const rect = inner.getBoundingClientRect()
    const frac = rect.height > 0 ? (clientY - rect.top) / rect.height : 0.5
    const v = range.max - Math.min(Math.max(frac, 0), 1) * (range.max - range.min)
    return Math.min(Math.max(v, range.min), range.max)
  }

  /**
   * Build the automation-lane contents: value curve SVG + breakpoints
   * @param {HTMLElement} lane
   * @param {import('../Animation/KeyframeTrack.js').default} track
   */
  buildExpandedLane(lane, track) {
    const range = this.getTrackRange(track)

    const inner = document.createElement('div')
    inner.className = 'tp-lane-inner'

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('class', 'tp-curve')
    svg.setAttribute('viewBox', '0 0 1000 100')
    svg.setAttribute('preserveAspectRatio', 'none')
    // Delegated so redrawCurve can replace the hit paths mid-drag without
    // orphaning a listener
    svg.addEventListener('pointerdown', (event) => {
      const seg = event.target.dataset?.seg
      if (seg === undefined) return
      event.stopPropagation()
      this.startSegmentDrag(svg, track, Number(seg), event)
    })
    inner.appendChild(svg)

    for (const key of track.keys) {
      inner.appendChild(this.buildKeyElement(track, key, range))
    }

    lane.appendChild(inner)
    this._laneEls.set(track.eId, { lane, inner, svg, range })
    this.redrawCurve(track.eId)
  }

  /**
   * Regenerate one expanded lane's curve + segment hit paths. Cheap enough
   * to call on every drag move; no-op for collapsed tracks.
   * @param {number|string} eId
   */
  redrawCurve(eId) {
    const laneInfo = this._laneEls.get(eId)
    const track = this.animation.getTrack(eId)
    if (!laneInfo || !track || track.keys.length === 0) return
    const duration = this.animation.duration
    if (!(duration > 0)) return

    const { svg, range } = laneInfo
    const span = range.max - range.min
    const toX = (t) => Math.min(Math.max(t / duration, 0), 1) * 1000
    const toY = (v) => {
      const clamped = Math.min(Math.max(v, range.min), range.max)
      return (1 - (clamped - range.min) / span) * 100
    }

    // Sample uniformly, plus every exact key time so sharp corners stay crisp
    const times = []
    const samples = 240
    for (let i = 0; i <= samples; i++) {
      times.push(duration * i / samples)
    }
    for (const key of track.keys) {
      if (key.t <= duration) times.push(key.t)
    }
    times.sort((a, b) => a - b)

    const points = times.map(t => `${toX(t)},${toY(track.evaluate(t))}`)
    const els = []

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    line.setAttribute('class', 'tp-curve-line')
    line.setAttribute('d', 'M' + points.join(' L'))
    els.push(line)

    // One invisible wide stroke per inter-key segment for vertical dragging
    for (let i = 0; i < track.keys.length - 1; i++) {
      const t0 = track.keys[i].t
      const t1 = track.keys[i + 1].t
      const segPoints = []
      for (let j = 0; j < times.length; j++) {
        if (times[j] >= t0 && times[j] <= t1) segPoints.push(points[j])
      }
      if (segPoints.length < 2) continue
      const hit = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      hit.setAttribute('class', 'tp-curve-hit')
      hit.setAttribute('d', 'M' + segPoints.join(' L'))
      hit.dataset.seg = i
      els.push(hit)
    }

    svg.replaceChildren(...els)
  }

  /**
   * Drag a curve segment vertically, shifting both endpoint values together.
   * The delta is clamped so neither endpoint leaves the range - the segment
   * keeps its shape and stops at the lane edge.
   * @param {SVGElement} svg
   * @param {import('../Animation/KeyframeTrack.js').default} track
   * @param {number} segIndex
   * @param {PointerEvent} event
   */
  startSegmentDrag(svg, track, segIndex, event) {
    const laneInfo = this._laneEls.get(track.eId)
    const k0 = track.keys[segIndex]
    const k1 = track.keys[segIndex + 1]
    if (!laneInfo || !k0 || !k1) return

    // Capture on the svg, not the hit path - redrawCurve replaces the paths
    // mid-drag
    svg.setPointerCapture(event.pointerId)
    const { min, max } = laneInfo.range
    const v0 = k0.v
    const v1 = k1.v
    const startY = event.clientY
    const innerH = laneInfo.inner.getBoundingClientRect().height || 1
    let moved = false

    const onMove = (moveEvent) => {
      moved = true
      let dv = -(moveEvent.clientY - startY) / innerH * (max - min)
      dv = Math.min(Math.max(dv, min - Math.min(v0, v1)), max - Math.max(v0, v1))
      k0.v = v0 + dv
      k1.v = v1 + dv
      const keyEls = laneInfo.inner.querySelectorAll('.tp-key')
      if (keyEls[segIndex]) keyEls[segIndex].style.top = this.keyTopPercent(k0, laneInfo.range)
      if (keyEls[segIndex + 1]) keyEls[segIndex + 1].style.top = this.keyTopPercent(k1, laneInfo.range)
      this.redrawCurve(track.eId)
      this.animation.apply()
      this.refreshPropsPanel()
    }

    const onUp = () => {
      svg.removeEventListener('pointermove', onMove)
      svg.removeEventListener('pointerup', onUp)
      svg.removeEventListener('pointercancel', onUp)
      if (moved) {
        this.animation.trigger('tracksChanged')
      }
    }

    svg.addEventListener('pointermove', onMove)
    svg.addEventListener('pointerup', onUp)
    svg.addEventListener('pointercancel', onUp)
  }

  /**
   * Drag a keyframe to retime it - and, in an expanded lane (`range` set),
   * revalue it vertically. When `isCopy` is set, the key is a freshly-duplicated
   * copy: if the pointer never moves, discard it so a bare Ctrl-click doesn't
   * leave a stray duplicate.
   */
  startKeyDrag(elem, track, key, event, isCopy = false, range = null) {
    elem.setPointerCapture(event.pointerId)
    let moved = false

    const onMove = (moveEvent) => {
      moved = true
      const newT = this.timeFromClientX(moveEvent.clientX)
      track.moveKeyframe(track.keys.indexOf(key), newT)
      elem.style.left = this.keyLeftPercent(key)
      if (range) {
        const laneInfo = this._laneEls.get(track.eId)
        if (laneInfo) {
          key.v = this.valueFromClientY(moveEvent.clientY, laneInfo.inner, range)
          elem.style.top = this.keyTopPercent(key, range)
        }
        this.redrawCurve(track.eId)
      }
      this.animation.apply()
      this.refreshPropsPanel()
    }

    const onUp = () => {
      elem.removeEventListener('pointermove', onMove)
      elem.removeEventListener('pointerup', onUp)
      elem.removeEventListener('pointercancel', onUp)
      if (!moved && isCopy) {
        // Ctrl-clicked without dragging - drop the unmoved duplicate
        const idx = track.keys.indexOf(key)
        if (idx >= 0) track.removeKeyframe(idx)
      }
      if (moved || isCopy) {
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
      let v
      if (track.expanded) {
        // Insert at the cursor's height in the lane, not on the curve
        const laneInfo = this._laneEls.get(track.eId)
        const range = laneInfo?.range ?? this.getTrackRange(track)
        v = this.valueFromClientY(event.clientY, laneInfo?.inner ?? lane, range)
      } else {
        v = track.evaluate(t)
      }
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
    // eId may be numeric (shader param) or a string (modulator track) - keep
    // its type so it matches the Map keys in animation.tracks
    this.selected = (eId == null || !key) ? null : { eId, key }

    for (const elem of this.rows.querySelectorAll('.tp-key.selected')) {
      elem.classList.remove('selected')
    }
    if (this.selected) {
      // Re-mark the matching element (cheap full scan, few keys)
      const track = this.animation.getTrack(this.selected.eId)
      if (track) {
        const lanes = this.rows.querySelectorAll('.tp-track')
        const order = this._laneOrder || Array.from(this.animation.tracks.keys())
        const trackOrder = order.indexOf(this.selected.eId)
        const lane = lanes[trackOrder]
        const index = track.keys.indexOf(this.selected.key)
        // querySelectorAll rather than children: expanded lanes nest keys
        // inside .tp-lane-inner after the curve SVG
        const keyEls = lane ? lane.querySelectorAll('.tp-key') : []
        if (keyEls[index]) {
          keyEls[index].classList.add('selected')
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
      track.moveKeyframe(index, this.animation.snapTime(Number(this.propTime.value)))
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
      // Live curve update when the track is an expanded lane (no-op otherwise)
      this.redrawCurve(this.selected.eId)
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
