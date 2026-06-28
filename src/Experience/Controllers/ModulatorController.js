import BaseController from './BaseController'

// LFO rate choices, expressed in beats (quarter-note = 1 beat). Labels assume
// a 4/4 feel for the "bars" entries.
const RATE_OPTIONS = [
  { beats: 16, label: '4 bars' },
  { beats: 8, label: '2 bars' },
  { beats: 4, label: '1 bar' },
  { beats: 2, label: '1/2' },
  { beats: 1, label: '1/4' },
  { beats: 0.5, label: '1/8' },
  { beats: 0.25, label: '1/16' },
]

const WAVEFORMS = ['sine', 'triangle', 'saw', 'square']

/**
 * ModulatorController - Right-column panel under the palette.
 *
 *  - Audio: upload + analysis (decode, BPM detect, band envelopes).
 *  - Modulators: addable LFO / dB-follower cards that drive a shader param.
 *    Each modulator's Center and Range are keyframeable (◇), so they appear
 *    as lanes in the timeline like any animated parameter.
 */
export default class ModulatorController extends BaseController {
  constructor() {
    super()
    this.audioEngine = this.experience.audioEngine
    this.manager = this.experience.modulatorManager
    this.getElements()
    this.linkAudioControls()
    this.buildAddButtons()
    this.rebuild()
  }

  getElements() {
    this.uploadBtn = document.getElementById('audio-upload-btn')
    this.fileNameEl = document.getElementById('audio-file-name')
    this.bpmRow = document.getElementById('audio-bpm-row')
    this.detectedBpmEl = document.getElementById('audio-detected-bpm')
    this.applyBpmBtn = document.getElementById('audio-apply-bpm')
    this.addRow = document.getElementById('modulator-add-row')
    this.list = document.getElementById('modulator-list')
  }

  // ============================================================
  // AUDIO
  // ============================================================

  linkAudioControls() {
    this.uploadBtn.addEventListener('click', () => this.promptAudioUpload())

    this.applyBpmBtn.addEventListener('click', () => {
      const ae = this.audioEngine
      if (!ae.bpm || !ae.buffer) return
      // Adopting a track's tempo implies working in music mode
      this.animation.setMusicMode(true)
      this.animation.setBpm(ae.bpm)
      // Fit the bar count to the track length so the loop window matches the
      // audio (timeline duration ≈ track duration)
      const secPerBar = this.animation.secondsPerBeat * this.animation.beatsPerBar
      const bars = Math.max(1, Math.round(ae.buffer.duration / secPerBar))
      this.animation.setBars(bars)
    })
  }

  promptAudioUpload() {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'audio/*'
    input.onchange = async (e) => {
      const file = e.target.files && e.target.files[0]
      if (!file) return
      await this.loadAudioFile(file)
    }
    input.click()
  }

  async loadAudioFile(file) {
    // Claim a load token so an in-flight project-restore can't overwrite this
    // manual upload (and vice-versa)
    const token = this.audioEngine.beginLoad()
    this.fileNameEl.textContent = `Analyzing ${file.name}…`
    this.uploadBtn.disabled = true
    try {
      const { bpm, duration } = await this.audioEngine.load(file)
      if (this.audioEngine.isStale(token)) return
      this.fileNameEl.textContent =
        `${file.name} (${this.formatDuration(duration)})`
      this.detectedBpmEl.textContent = String(bpm)
      this.bpmRow.style.display = ''
      // dB-follower modulators come alive once audio exists
      this.rebuild()
    } catch (err) {
      console.error('Audio load failed:', err)
      this.fileNameEl.textContent = `Failed to load ${file.name}`
    } finally {
      this.uploadBtn.disabled = false
    }
  }

  formatDuration(sec) {
    const m = Math.floor(sec / 60)
    const s = Math.round(sec % 60).toString().padStart(2, '0')
    return `${m}:${s}`
  }

  /** Refresh the audio UI after a persisted track is restored on project load */
  onAudioRestored() {
    const ae = this.audioEngine
    if (ae.hasAudio()) {
      this.fileNameEl.textContent =
        `${ae.fileName} (${this.formatDuration(ae.buffer.duration)})`
      this.detectedBpmEl.textContent = String(ae.bpm)
      this.bpmRow.style.display = ''
    } else {
      this.fileNameEl.textContent = 'No track loaded'
      this.bpmRow.style.display = 'none'
    }
    this.rebuild()
  }

  // ============================================================
  // MODULATORS
  // ============================================================

  buildAddButtons() {
    const lfoBtn = document.createElement('button')
    lfoBtn.className = 'control-button default-button'
    lfoBtn.textContent = '+ LFO'
    lfoBtn.addEventListener('click', () => this.addModulator('lfo'))

    const dbBtn = document.createElement('button')
    dbBtn.className = 'control-button default-button'
    dbBtn.textContent = '+ dB Follower'
    dbBtn.addEventListener('click', () => this.addModulator('dbFollower'))

    this.addRow.appendChild(lfoBtn)
    this.addRow.appendChild(dbBtn)
  }

  addModulator(type) {
    const inputs = this.shaderInputs()
    if (inputs.length === 0) return
    const target = inputs[0]
    const span = target.max - target.min
    this.manager.add(type, {
      targetEId: target.eId,
      center: target.getValue ? target.getValue() : target.value,
      range: span * 0.25,
    })
    this.rebuild()
    this.animation.apply()
  }

  /** @returns {import('../Inputs/NumberInput.js').default[]} */
  shaderInputs() {
    const shader = this.experience.shader
    return shader ? shader.getNumInputs() : []
  }

  /**
   * Full re-render of modulator cards. Called on add/remove, audio load,
   * and shader (mode) changes so target options stay valid.
   */
  rebuild() {
    if (!this.list) return
    this.list.innerHTML = ''
    // Track Center/Range inputs so syncCards() can follow keyframed values
    this._amountInputs = []
    const inputs = this.shaderInputs()
    for (const mod of this.manager.list()) {
      // Drop modulators whose target no longer exists in this shader
      if (!inputs.some(i => i.eId === mod.targetEId)) continue
      this.list.appendChild(this.buildCard(mod, inputs))
    }
  }

  buildCard(mod, inputs) {
    const target = inputs.find(i => i.eId === mod.targetEId)
    const card = document.createElement('div')
    card.className = 'mod-card'
    card.dataset.id = mod.id

    // Header: title, target select, remove
    const head = document.createElement('div')
    head.className = 'mod-card-head'

    const title = document.createElement('span')
    title.className = 'mod-card-title'
    title.textContent = mod.type === 'lfo' ? 'LFO' : 'dB'

    const targetSel = this.buildSelect(
      inputs.map(i => ({ value: i.eId, label: String(i.name) })),
      mod.targetEId,
      (val) => {
        mod.targetEId = Number(val)
        this.rebuild()
        this.animation.apply()
      }
    )
    targetSel.classList.add('mod-target')

    const enableBtn = document.createElement('button')
    enableBtn.className = 'mod-enable'
    enableBtn.textContent = mod.enabled ? '●' : '○'
    enableBtn.title = mod.enabled ? 'Enabled' : 'Disabled'
    enableBtn.addEventListener('click', () => {
      mod.enabled = !mod.enabled
      enableBtn.textContent = mod.enabled ? '●' : '○'
      this.animation.apply()
    })

    const removeBtn = document.createElement('button')
    removeBtn.className = 'mod-remove'
    removeBtn.textContent = '×'
    removeBtn.title = 'Remove modulator'
    removeBtn.addEventListener('click', () => {
      this.manager.remove(mod.id)
      this.rebuild()
      this.animation.trigger('tracksChanged')
      this.animation.apply()
    })

    head.append(title, targetSel, enableBtn, removeBtn)
    card.appendChild(head)

    // Type-specific row
    if (mod.type === 'lfo') {
      card.appendChild(this.buildLfoRow(mod))
    } else {
      card.appendChild(this.buildDbRow(mod))
    }

    // Center + Range (keyframeable)
    card.appendChild(this.buildAmountRow(mod, target, 'center'))
    card.appendChild(this.buildAmountRow(mod, target, 'range'))

    return card
  }

  buildLfoRow(mod) {
    const row = document.createElement('div')
    row.className = 'mod-row'

    const wave = this.buildSelect(
      WAVEFORMS.map(w => ({ value: w, label: w })),
      mod.waveform,
      (val) => { mod.waveform = val; this.animation.apply() }
    )
    const rate = this.buildSelect(
      RATE_OPTIONS.map(o => ({ value: o.beats, label: o.label })),
      mod.rateBeats,
      (val) => { mod.rateBeats = Number(val); this.animation.apply() }
    )

    row.append(this.labelled('Wave', wave), this.labelled('Rate', rate))
    return row
  }

  buildDbRow(mod) {
    const row = document.createElement('div')
    row.className = 'mod-row'

    const band = this.buildSelect(
      [{ value: 'low', label: 'Low' }, { value: 'mid', label: 'Mid' }, { value: 'high', label: 'High' }],
      mod.band,
      (val) => { mod.band = val; this.animation.apply() }
    )

    const damp = document.createElement('input')
    damp.type = 'range'
    damp.className = 'control-slider'
    damp.min = '0'; damp.max = '0.95'; damp.step = '0.05'
    damp.value = mod.damping
    damp.addEventListener('input', () => { mod.damping = Number(damp.value); this.animation.apply() })

    row.append(this.labelled('Band', band), this.labelled('Damp', damp))

    if (!this.audioEngine.hasAudio()) {
      const hint = document.createElement('p')
      hint.className = 'label-text mod-hint'
      hint.textContent = 'Upload a track to drive this.'
      row.appendChild(hint)
    }
    return row
  }

  /**
   * A Center or Range row: slider + number + ◇ keyframe button. The value is
   * mirrored to the modulator and (when keyframed) to a timeline track.
   * @param {'center'|'range'} which
   */
  buildAmountRow(mod, target, which) {
    const row = document.createElement('div')
    row.className = 'mod-row mod-amount-row'

    const span = target ? (target.max - target.min) : 1
    const min = which === 'center' ? (target ? target.min : 0) : 0
    const max = which === 'center' ? (target ? target.max : 1) : span
    const step = target ? target.step : 0.01
    const trackId = which === 'center' ? mod.centerTrackId : mod.rangeTrackId

    const label = document.createElement('span')
    label.className = 'label-text mod-amount-label'
    label.textContent = which === 'center' ? 'Center' : 'Range'

    const slider = document.createElement('input')
    slider.type = 'range'
    slider.className = 'control-slider'
    slider.min = min; slider.max = max; slider.step = step
    slider.value = mod[which]

    const num = document.createElement('input')
    num.type = 'number'
    num.className = 'control-number'
    num.min = min; num.max = max; num.step = step
    num.value = mod[which]

    const keyBtn = document.createElement('button')
    keyBtn.className = 'keyframe-btn'
    keyBtn.textContent = '◇'
    keyBtn.title = 'Add / update keyframe at playhead'

    const setValue = (v) => {
      mod[which] = Math.min(max, Math.max(min, Number(v)))
      slider.value = mod[which]
      num.value = mod[which]
      this.autoKey(trackId, mod[which])
      this.animation.apply()
    }

    slider.addEventListener('input', () => setValue(slider.value))
    num.addEventListener('change', () => setValue(num.value))

    keyBtn.addEventListener('click', () => {
      this.animation.addOrUpdateKeyframe(trackId, this.animation.playhead, mod[which])
    })

    this._amountInputs.push({ mod, which, slider, num, trackId })

    row.append(label, slider, num, keyBtn)
    return row
  }

  /**
   * Keep keyframed Center/Range inputs in step with their animated value
   * during playback/scrub (skips inputs the user is actively editing).
   */
  syncCards() {
    if (!this._amountInputs) return
    for (const e of this._amountInputs) {
      const track = this.animation.getTrack(e.trackId)
      if (!track || track.length === 0) continue // static value - nothing to follow
      const v = track.evaluate(this.animation.playhead)
      if (document.activeElement !== e.slider) e.slider.value = v
      if (document.activeElement !== e.num) e.num.value = Math.round(v * 10000) / 10000
    }
  }

  /**
   * Auto-key: while paused, dragging a Center/Range slider updates an existing
   * keyframe at the playhead (mirrors the shader-slider auto-key behaviour).
   */
  autoKey(trackId, value) {
    if (this.animation.playing) return
    const track = this.animation.getTrack(trackId)
    if (!track) return
    const index = track.indexOfKeyAt(this.animation.playhead, this.animation.keyEpsilon)
    if (index >= 0) {
      track.keys[index].v = value
      this.animation.trigger('tracksChanged')
    }
  }

  // ============================================================
  // SMALL DOM HELPERS
  // ============================================================

  buildSelect(options, value, onChange) {
    const sel = document.createElement('select')
    sel.className = 'control-select'
    for (const opt of options) {
      const o = document.createElement('option')
      o.value = opt.value
      o.textContent = opt.label
      if (String(opt.value) === String(value)) o.selected = true
      sel.appendChild(o)
    }
    sel.addEventListener('change', () => onChange(sel.value))
    return sel
  }

  labelled(text, el) {
    const wrap = document.createElement('span')
    wrap.className = 'mod-field'
    const lbl = document.createElement('span')
    lbl.className = 'label-text mod-field-label'
    lbl.textContent = text
    wrap.append(lbl, el)
    return wrap
  }
}
