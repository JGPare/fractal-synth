import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import EventEmitter from './EventEmitter.js'
import { eNumInput } from '../Common/eNums.js'

gsap.registerPlugin(CustomEase)

const debug = false

export default class Timeline extends EventEmitter {
  // ============================================================
  // INITIALIZATION
  // ============================================================

  /**
   * @param {Experience} experience
   */
  constructor(experience) {
    super()

    this.experience = experience

    this.tlParams = {
      repeat: -1,
      yoyo: true,
      repeatDelay: 0,
      paused: true,
      defaults: {
        duration: 5,
        ease: "sine.inOut",
      }
    }

    this.snapshot = this.getBlankSnapshot()

    this.proxyCounter = 0
    this.proxy = {}

    this.globalPlay = false
    this.playingArray = [false, false, false, false, false]

    /** @type {gsap.core.Timeline[]} */
    this.tls = [
      this.getNewTimeline(this.tlParams, { index: 0 }),
      this.getNewTimeline(this.tlParams, { index: 1 }),
      this.getNewTimeline(this.tlParams, { index: 2 }),
      this.getNewTimeline(this.tlParams, { index: 3 }),
      this.getNewTimeline(this.tlParams, { index: 4 })
    ]

    this.currInd = 0

    if (debug) {
      console.log("init snapshot", this.snapshot)
    }

    /** @type {gsap.core.Timeline} */
    this.tl = this.tls[0]
  }

  /**
   * @param {Object} params
   * @param {Object} data
   * @returns {gsap.core.Timeline}
   */
  getNewTimeline(params, data = {}) {
    const tl = gsap.timeline(params)
    tl.data = data
    return tl
  }

  // ============================================================
  // TIMELINE CONFIGURATION
  // ============================================================

  /**
   * @param {string} easeType
   * @param {string} easeString
   * @param {number} i
   */
  setEase(easeType, easeString, i) {
    let ease
    switch (easeType) {
      case "custom":
        ease = CustomEase.create("custom", easeString)
        break
      default:
        ease = easeType + "." + easeString
    }
    this.tlParams.defaults.ease = ease
    this.tls[i].getChildren().forEach(tween => {
      if (tween.vars) {        
        tween.vars.ease = ease
        tween.invalidate()
      }
    })
  }

  /**
   * @param {boolean} isRepeat
   * @param {boolean[]} tlSelections
   */
  setRepeat(isRepeat, tlSelections) {
    this.tlParams.repeat = isRepeat ? -1 : 0
    for (let i = 0; i < this.tls.length; i++) {
      const tl = this.tls[i]
      if (tlSelections[i]) {
        tl.repeat(isRepeat ? -1 : 0)
      }
    }
  }

  /**
   * @param {boolean} isYoyo
   * @param {boolean[]} tlSelections
   */
  setYoyo(isYoyo, tlSelections) {
    this.tlParams.yoyo = isYoyo
    for (let i = 0; i < this.tls.length; i++) {
      const tl = this.tls[i]
      if (tlSelections[i]) {
        tl.yoyo(isYoyo)
      }
    }
  }

  /**
   * @param {number} duration
   * @param {number} index
   */
  setDuration(duration, index) {
    this.tls[index].duration(duration)
    if (debug) {
      console.log("setting duration for tl:", index, this.tls[index])
    }
  }

  // ============================================================
  // TIMELINE SELECTION
  // ============================================================

  /**
   * @param {number} index
   */
  setTimeline(index) {
    if (index < this.tls.length) {
      this.tl = this.tls[index]
      this.currInd = index
    }
    else {
      console.log("tl index error")
    }
  }

  // ============================================================
  // PLAYBACK CONTROL
  // ============================================================

  /**
   * @param {number} index
   */
  play(index) {
    this.tls[index].play()
    if (debug) {
      console.log("playing tl:", index)
    }
  }

  /**
   * @param {boolean[]} timelineSelections
   */
  playTimelinesSelect(timelineSelections) {
    for (let i = 0; i < this.tls.length; i++) {
      const tl = this.tls[i]
      if (timelineSelections[i]) {
        tl.play()
        if (debug) {
          console.log("playing tl:", i)
        }
      }
    }
  }

  /**
   * @param {number} index
   */
  pause(index) {
    if (this.tls[index]) {
      this.playingArray[index] = false
      this.tls[index].pause()
      if (debug) {
        console.log("pausing index:", index)
      }
    }
  }

  /**
   * @param {boolean[]} timelineSelections
   */
  pauseTimelinesSelect(timelineSelections) {
    for (let i = 0; i < this.tls.length; i++) {
      const tl = this.tls[i]
      if (timelineSelections[i]) {
        tl.pause()
      }
    }
  }

  /**
   * @param {number} index
   */
  seekStart(index) {
    const tl = this.tls[index]
    tl.time(0)
  }

  /**
   * @param {number} index
   */
  seekEnd(index) {
    const tl = this.tls[index]
    tl.time(tl.duration())
  }

  /**
   * @param {number|null} value
   * @param {number} index
   * @returns {number|undefined}
   */
  progress(value = null, index) {
    if (value !== null) {
      this.tls[index].progress(value)
    }
    else {
      return this.tls[index].progress()
    }
  }

  /**
   * @param {number} index
   */
  renew(index) {
    const tl = this.tls[index]
    
    tl.clear()
    tl.pause()
  }

  renewAll() {
    for (let i = 0; i < this.tls.length; i++) {
      this.renew(i)
    }
  }

  // ============================================================
  // TWEENS
  // ============================================================

  /**
   * @param {Float32Array} item
   * @param {Object} fromPars
   * @param {Object} toPars
   * @param {number} start
   * @param {number} eId
   * @param {number} timelineIndex
   */
  fromTo(item, fromPars, toPars, start, eId, timelineIndex) {
    const scaleFactor = 100000
    const target = item
    const proxyName = this.getProxyNameFromEid(eId)

    const tl = this.tls[timelineIndex]

    const newFromPars = { ...fromPars }
    const newToPars = {
      ...toPars,
      immediateRender: false,
      data: eId,
      onUpdate: () => {
        target[eId] = this.proxy[proxyName].value / scaleFactor
      }
    }

    this.proxy[proxyName] = { value: fromPars.value * scaleFactor }

    newFromPars.value *= scaleFactor
    newToPars.value *= scaleFactor

    tl.fromTo(this.proxy[proxyName],
      newFromPars,
      newToPars,
      start,
    )
  }

  /**
   * @param {Object} timelineSlider
   * @param {number} timelineIndex
   */
  fromToTimeline(timelineSlider, timelineIndex) {
    const fromPars = { "value": 0 }
    const toPars = {
      "value": 1,
      "ease": "none",
      "yoyo": true
    }

    this.tls[timelineIndex].fromTo(timelineSlider, fromPars, toPars, 0)
  }

  /**
   * @param {NumberInput} numInput
   * @param {number} timelineIndex
   * @param {number} offset - Channel offset in seconds
   */
  setFromToFromNumInput(numInput, timelineIndex, offset = 0) {
    this.fromTo(numInput.uFloatPar,
      { "value": numInput.startVal },
      { "value": numInput.endVal },
      offset,
      numInput.eId,
      timelineIndex
    )
  }

  // ============================================================
  // SNAPSHOT
  // ============================================================

  /**
   * @returns {Object}
   */
  getBlankSnapshot() {
    return {
      channels: [],
      tlParams: this.tlParams
    }
  }

  /**
   * @returns {Object}
   */
  getSnapshot() {
    return this.snapshot
  }

  // ============================================================
  // UTILITIES
  // ============================================================

  /**
   * @param {number} eId
   * @returns {string|undefined}
   */
  getProxyNameFromEid(eId) {
    for (const [key, value] of Object.entries(eNumInput)) {
      if (eId == value) {
        return key
      }
    }
  }
}
