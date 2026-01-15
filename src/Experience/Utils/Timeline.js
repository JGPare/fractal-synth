import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import EventEmitter from './EventEmitter.js'
import Experience from '../Experience.js'
import { eNumInput } from '../Common/eNums.js'
import NumberInput from '../Inputs/NumberInput.js'
import Channel from '../Channel.js'

// Register the plugin
gsap.registerPlugin(CustomEase)

let debug = true

export default class Timeline extends EventEmitter {
  /**
   * 
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

    this.playing = false
    this.playingArray = [false, false, false, false, false]

    /** 
     * @type {Array<gsap.core.Timeline>} 
    */
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

    /**
     * @type {gsap.core.Timeline}
     */
    this.tl = this.tls[0]
  }

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
    // Change ease for all tweens in the timeline
    this.tls[i].getChildren().forEach(tween => {
      if (tween.vars) {
        tween.vars.ease = ease
        // Invalidate and restart to apply new ease
        tween.invalidate()
      }
    })
  }

  setRepeat(isRepeat, tlSelections) {
    this.tlParams.repeat = isRepeat ? -1 : 0
    for (let i = 0; i < tls.length; i++) {
      const tl = tls[i]
      if (tlSelections[i]) {
        tl.repeat(isRepeat ? -1 : 0)
      }
    }
  }

  setYoyo(isYoyo, tlSelections) {
    this.tlParams.yoyo = isYoyo
    for (let i = 0; i < tls.length; i++) {
      const tl = tls[i]
      if (tlSelections[i]) {
        tl.yoyo(isYoyo)
      }
    }
  }


  getBlankSnapshot() {
    return {
      channels: [],
      tlParams: this.tlParams
    }
  }

  getNewTimeline(params, data = {}) {
    const tl = gsap.timeline(params)
    tl.data = data
    return tl
  }

  setTimeline(index) {
    if (index < this.tls.length) {
      this.tl = this.tls[index]
      this.currInd = index
    }
    else {
      console.log("tl index error")
    }
  }

  setTimelineCount(count) {

  }

  setDuration(duration, index) {
    this.tls[index].duration(duration)
    if (debug) {
      console.log("setting duration for tl:", index, this.tls[index])

    }
  }

  progress(value = null, index = -1) {
    if (index > -1) {
      this.tls[index].progress(value)
    }
    else {
      return this.tls[index].progress(value)
    }
  }

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
   * 
   * @param {object} timelineSlider 
   * @param {Channel} channel 
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
   * 
   * @param {NumberInput} numInput 
   */
  setFromToFromNumInput(numInput, timelineIndex) {
    this.fromTo(numInput.uFloatPar,
      { "value": numInput.startVal },
      { "value": numInput.endVal },
      0,
      numInput.eId,
      timelineIndex
    )
  }

  getProxyNameFromEid(eId) {
    for (const [key, value] of Object.entries(eNumInput)) {
      if (eId == value) {
        return key
      }
    }
  }

  pause(index) {
    if (this.tls[index]) {
      this.playingArray[index] = false
      this.tls[index].pause()
      if (debug) {
        console.log("pausing index:", index)
      }
    }
  }

  pauseTimelinesSelect(timelineSelections) {

    for (let i = 0; i < this.tls.length; i++) {
      const tl = this.tls[i]
      if (timelineSelections[i]) {
        tl.pause()
      }
    }
  }

  play(index) {
    this.tls[index].play()
    if (debug) {
      console.log("playing tl:", index)
    }
  }

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

  seekStart(index) {
    const tl = this.tls[index]
    tl.time(0)
  }

  seekEnd(index) {
    const tl = this.tls[index]
    tl.time(tl.duration())
  }

  getSnapshot() {
    return this.snapshot
  }

  setFromSnapshot(snapshot) {
    this.snapshot = this.getBlankSnapshot()
    this.setTimelines()

    if (debug) {
      console.log("loaded snap", snapshot)
    }

    for (let i = 0; i < snapshot.segments.length; i++) {
      const segment = snapshot.segments[i]
      this.addTimeline(i)
      this.tl = this.segmentTLs[i]
      segment.to.forEach(tweenSnapshot => {
        const item = this.experience.getItemById(tweenSnapshot.localId)
        this.to(item, ...tweenSnapshot.pars)
      })
      segment.fromTo.forEach(tweenSnapshot => {
        const item = this.experience.getItemById(tweenSnapshot.localId)
        this.fromTo(item, ...tweenSnapshot.pars)
      })
      const duration = segment.duration ?? this.tlParams.defaults.duration
      if (debug) {

        console.log("set from snap seg and dur", segment, duration)
      }

      this.tl.duration(duration)
      this.tl.paused(false)
    }

    this.masterTL.seek(0, false)
    this.tl = this.segmentTLs[0]
    this.play()
    this.pause()
  }
}