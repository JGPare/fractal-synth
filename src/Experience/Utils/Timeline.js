import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import EventEmitter from './EventEmitter.js'
import Experience from '../Experience.js'
import { eNumInput } from '../Common/eNums.js'
import NumberInput from '../Inputs/NumberInput.js'
import Channel from '../Channel.js'

// Register the plugin
gsap.registerPlugin(CustomEase)

let debug = true;

export default class Timeline extends EventEmitter { 
  /**
   * 
   * @param {Experience} experience 
   */
  constructor(experience) 
  {
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

    this.segmentCount = 5
    this.segmentIndex = 0

    this.currentProgress = 0

    this.playing = false
    this.playingArray = [false, false, false, false, false]

    /** 
     * @type {Array<gsap.core.Timeline>} 
    */
    this.tls = [
      this.getNewTimeline(this.tlParams, {index: 0}),
      this.getNewTimeline(this.tlParams, {index: 1}),
      this.getNewTimeline(this.tlParams, {index: 2}),
      this.getNewTimeline(this.tlParams, {index: 3}),
      this.getNewTimeline(this.tlParams, {index: 4})
    ]

    this.currInd = 0

    if (debug){
      console.log("init snapshot",this.snapshot);
    }

    /**
     * @type {gsap.core.Timeline}
     */
    this.tl = this.tls[0]
  }

  setEase(easeType, easeString, i)
  {
    let ease;
    switch (easeType){
      case "custom":
        ease = CustomEase.create("custom", easeString)
        break;
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

  setRepeat(isRepeat, tlSelections)
  {    
    this.tlParams.repeat = isRepeat ?  -1 : 0
    for (let i  = 0; i < tls.length; i++) {
      const tl = tls[i];
      if (tlSelections[i]){
        tl.repeat(isRepeat ?  -1 : 0)
      }
    }
  }

  setYoyo(isYoyo, tlSelections) {
    this.tlParams.yoyo = isYoyo
    for (let i  = 0; i < tls.length; i++) {
      const tl = tls[i];
      if (tlSelections[i]){
        tl.yoyo(isYoyo)
      }
    }
  }


  getBlankSnapshot()
  {
    return {
      channels : [],
      tlParams : this.tlParams
    }
  }

  getNewTimeline(params, data = {})
  {
    const tl = gsap.timeline(params)
    tl.data = data
    return tl
  }

  setTimeline(index)
  {    
    if (index < this.tls.length){
      this.tl = this.tls[index]
      this.currInd = index
    }
    else {
      console.log("tl index error");
    }
  }

  setTimelineCount(count)
  {

  }

 
  clearAll()
  {
    for (let i  = 0; i < tls.length; i++) {
      const tl = tls[i];
      this.tl.clear()
    }
  }

  setDuration(duration, index)
  {
    this.tls[index].duration(duration)
    if (debug){
      console.log("setting duration for tl:", index, this.tls[index]);
      
    }
  }

  progress(value = null, index = -1)
  {
    if (index > -1){
      this.tls[index].progress(value)
    }
    else {
      return this.tls[index].progress(value)
    }
  }

  to(item, params, start = 0, access = [])
  {
    let target = item
    access.forEach(elem => {
      target = target[elem]
    })
    this.tl.to(target, params, start)

    if (item.localId)
    {
      this.snapshot.segments[this.segmentIndex].to.push({
        localId : item.localId,
        pars : [{...params}, start, access],
      })
    }
  }

  fromTo(item, fromPars, toPars, start, eId, timelineIndex)
  {
    const scaleFactor = 100000
    const target = item
    const proxyName = this.getProxyNameFromEid(eId)
    
    const tl = this.tls[timelineIndex]

    const newFromPars = {...fromPars}
    const newToPars = {...toPars, 
      immediateRender: false,
      data: eId,
      onUpdate: () => {
        target[eId] = this.proxy[proxyName].value/scaleFactor
    }}

    this.proxy[proxyName] = {value : fromPars.value*scaleFactor}
    
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
  fromToTimeline(timelineSlider, timelineIndex)
  {
    const fromPars = {"value" : 0}
    const toPars = {"value" : 1,
                    "ease" : "none",
                    "yoyo" : true
     }
     
    
    this.tls[timelineIndex].fromTo(timelineSlider, fromPars, toPars, 0)
  }

  /**
   * 
   * @param {NumberInput} numInput 
   */
  setFromToFromNumInput(numInput, timelineIndex)
  {
    this.fromTo(numInput.uFloatPar, 
          {"value" : numInput.startVal},
          {"value" : numInput.endVal},
          0,
          numInput.eId, 
          timelineIndex
        )
  }

  getTargetFromEid(item, eId)
  {
    return item[eId]
  }

  getProxyNameFromEid(eId)
  {
    for (const [key, value] of Object.entries(eNumInput)){
     if(eId == value){
      return key
     }
    }
  }

  getTargetFromAccess(item, access)
  {
    let target = item
    access.forEach(elem => {
      target = target[elem]
    });

    return target
  }

  pause(index) 
  {
    if (this.tls[index]) {
      this.playingArray[index] = false
      this.tls[index].pause()
      if (debug){
        console.log("pausing index:", index);
      }
    }
  }

  pauseTimelinesSelect(timelineSelections)
  {

    for (let i = 0; i < this.tls.length; i++) {
      const tl = this.tls[i];
      if (timelineSelections[i]){
        tl.pause()
      }
    }
  }

  canPlay()
  {
    let canPlay = true
    // for (let i = 0; i < this.segmentCount; i++) {
    //   const seg = this.segmentTLs[i]
    //   if (seg.duration() > 0){
    //     canPlay = true
    //   }
    // }
    return canPlay
  }

  play()
  {
    if (this.canPlay()){
      if (debug){
        console.log("playing timeline", this.tl);
      }
      this.playing = true
      this.tl.play(0)
    }
  }

  playTimelinesSelect(timelineSelections)
  {
    for (let i = 0; i < this.tls.length; i++) {
      const tl = this.tls[i];
      if (timelineSelections[i]){
        tl.play()
        if (debug){
          console.log("playing tl:", i);
        }        
      }
    }
  }

  togglePlay()
  {
    if (this.tl.isActive()){
      this.tl.pause()
    }
    else {
      this.tl.play()
    }
  }

  clear(tl)
  {
    if (tl){
      tl.clear()
    }
  }


  renew(index)
  {
    const tl = this.tls[index]
    this.clear(tl)
    tl.pause()
  }


  seekStart(index)
  {
    const tl = this.tls[index]
    tl.time(0)
    console.log("seeking start");
  }

  seekEnd(index)
  {
    const tl = this.tls[index]
    tl.time(tl.duration())
    // tl.progress(1)
  }
  
  getSnapshot()
  {
    return this.snapshot
  }

  setFromSnapshot(snapshot)
  {
    this.snapshot = this.getBlankSnapshot()
    this.setTimelines()

    if (debug){
      console.log("loaded snap", snapshot);
    }

    for (let i = 0; i < snapshot.segments.length; i++) {
      const segment = snapshot.segments[i];
      this.addTimeline(i)
      this.tl = this.segmentTLs[i]
      this.segmentIndex = i
      segment.to.forEach(tweenSnapshot => {
        const item = this.experience.getItemById(tweenSnapshot.localId)
        this.to(item, ...tweenSnapshot.pars)
      })
      segment.fromTo.forEach(tweenSnapshot => {
        const item = this.experience.getItemById(tweenSnapshot.localId)      
        this.fromTo(item, ...tweenSnapshot.pars) 
      })
      const duration = segment.duration ?? this.tlParams.defaults.duration
      if (debug){

        console.log("set from snap seg and dur", segment, duration);
      }
      
      this.tl.duration(duration)
      this.tl.paused(false)
    }
    
    this.masterTL.seek(0,false)
    this.segmentIndex = 0
    this.tl = this.segmentTLs[0]
    this.play()
    this.pause()
  }


  // not used

  setTimelines()
  {
    const currInd = this.segmentIndex
    for (let i = 0; i < this.segmentCount; i++) {
      if (this.segmentTLs[i]) this.segmentTLs[i].kill()
      this.addTimeline(i)
    }
    this.segmentIndex = currInd
  }

  seekFromChild(seekAmount)
  {
    let time = 0
    for (let i = 0; i <= this.segmentIndex; i++) {
      const element = this.segmentTLs[i]
      if (i == this.segmentIndex)
      {
        time += element.duration()*seekAmount
        if (debug){
          console.log(this.segmentIndex,seekAmount,time);
        }        
      }
      else
      {
        time += element.duration()
      }
    }
    if (debug){
      console.log(this.tl.progress());
      console.log("seeking form child");
    }
    
    this.masterTL.time(time)
  }

  setSegmentCount(segmentCount)
  {
    this.segmentCount = segmentCount
    for (let i = 0; i < this.segmentTLs.length; i++) {
      const timeline = this.segmentTLs[i];
      if (i > this.segmentCount)
      {
        timeline.kill()
      }
    }
    for (let i = 0; i < this.segmentCount; i++) {
      if (i > this.segmentTLs.length)
      {
        this.addTimeline(i)
      }
    }
    this.segmentTLs.length = segmentCount
  }

  goToSegment(index) {
    if (debug) {
      console.log("prev segment", this.tl.data)
    }
    this.segmentIndex = index
    this.tl = this.segmentTLs[index]
    if (debug){
      console.log("new segment", this.tl.data)
    }

    let time = 0
    for (let i = 0; i < index; i++) {
      time += this.segmentTLs[i].duration()
    }
    this.masterTL.time(time)
    this.currentProgress = this.masterTL.progress()
    if (debug) {
      console.log(this.currentProgress)
    }
  }

  buildMaster()
  {
    console.log("building master");

    if (this.masterTL){
      this.masterTL.kill(); 
    }
    this.masterTL = gsap.timeline({
      paused: true,
      smoothChildTiming: true 
    });

    let position = 0;
    for (let i = 0; i < this.segmentTLs.length; i++) {
      const seg = this.segmentTLs[i]
      if (seg && seg.duration() > 0){
        console.log("added seg", seg, position);
        seg.paused(false)
        seg.totalTime(0, false); // Reset playhead to 0
        this.masterTL.add(seg, position)
        position += seg.duration()
      }
    }
    console.log("master", this.masterTL);
    console.log("master duration", this.masterTL.duration());
    
    this.trigger("masterBuilt");
  }

  
  setMasterTime() {
    let elapsed = 0;
    console.log("curr ind",this.segmentIndex);
    
    for (let i = 0; i < this.segmentTLs.length; i++) {
      if (this.segmentIndex > i){
        elapsed += this.segmentTLs[i].duration();
      }
    }
    //console.log("tl", this.tl.data, "progress:", this.tl.progress());
    console.log("setting master time to: ", elapsed);
    console.log("master duration", this.masterTL.duration())
    
    this.masterTL.time(elapsed);
  }


  addTimeline(index)
  {
    const tl = this.getNewTimeline(
      {...this.tlParams, 
      data : "sec-" + index, 
      onComplete: () => {
      const newInd = index + 1
      if (this.segmentTLs.length > newInd && this.segmentTLs[newInd].duration() > 0){
        this.segmentIndex = index + 1
        this.tl = this.segmentTLs[index]
        this.trigger('setSegment')
      }
    }})
    this.segmentTLs[index] = tl
    
    console.log("added tl", tl);
    
    this.snapshot.segments[index] = {
      duration : tl.duration(),
      fromTo : [],
      to : []
    }
  }

  removeTimeline(index)
  {
    console.log("killing tl at index:", index);
    
    const tl = this.segmentTLs[index]
    tl.kill()
    this.segmentTLs[index] = null
  }

  removeAllTimelines()
  {
    for (let i = 0; i < this.segmentCount; i++) {
      this.removeTimeline(i)
    }
  }


}