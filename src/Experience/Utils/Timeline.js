import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import EventEmitter from './EventEmitter.js'
import Experience from '../Experience.js'

// Register the plugin
gsap.registerPlugin(CustomEase)

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
      repeat: 0,
      yoyo: false,
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

    this.segmentCount = 6
    this.segmentIndex = 0

    this.currentProgress = 0

    this.playing = false

    /** 
     * @type {Array<gsap.core.Timeline>} 
    */
    this.tlList = [
      this.getNewTimeline(this.tlParams),
      this.getNewTimeline(this.tlParams)
    ]

    this.currInd = 0

    console.log("init snapshot",this.snapshot);

    /**
     * @type {gsap.core.Timeline}
     */
    this.tl = this.tlList[0]
  }

  setEase(easeType, easeString)
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
    this.tl.getChildren().forEach(tween => {
      if (tween.vars) {
        tween.vars.ease = ease
        // Invalidate and restart to apply new ease
        tween.invalidate()
      }
    })
  }

  setRepeat(isRepeat)
  {    
    this.tlParams.repeat = isRepeat ?  -1 : 0
    this.tl.repeat(isRepeat ?  -1 : 0)
     
  }

  setYoyo(isYoyo) {
    this.tlParams.yoyo = isYoyo
    this.timeline.yoyo(isYoyo)
  }


  getBlankSnapshot()
  {
    return {
      segments : [],
      tlParams : this.tlParams
    }
  }

  getNewTimeline(params)
  {
    return gsap.timeline(params)
  }

  setTimeline(index)
  {
    console.log("tl index: ", index);
    
    if (index < this.tlList.length){
      this.tl = this.tlList[index]
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
    this.tl.clear()
    // this.removeAllTimelines()
    // this.setTimelines()
  }

  setDuration(duration)
  {
    this.tl.duration(duration)
    // this.snapshot.segments[this.segmentIndex].duration = duration
    
  }

  progress(value = null)
  {
    return this.tl.progress(value)
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

  fromTo(item, fromPars, toPars, start = 0, access = [])
  {
    const scaleFactor = 100000
    const target = this.getTargetFromAccess(item, access)
    const proxyName = this.getProxyNameFromAccess(access)

    const newFromPars = {...fromPars}
    const newToPars = {...toPars, 
      immediateRender: false,
      data: access,
      onUpdate: () => {
        target.value = this.proxy[proxyName].value/scaleFactor
    }}

    this.proxy[proxyName] = {value : fromPars.value*scaleFactor}
    
    newFromPars.value *= scaleFactor
    newToPars.value *= scaleFactor
    
    // if (item.localId)
    // {
    //   this.snapshot.segments[this.segmentIndex].fromTo.push({
    //     localId : item.localId,
    //     pars : [{...fromPars}, {...toPars}, start, access],
    //   })
    // }
    // else {
    //   console.log("error: No Local Id", item);
    // }
    
    this.tl.fromTo(this.proxy[proxyName], 
      newFromPars, 
      newToPars, 
      start,
    )
  }

  getProxyNameFromAccess(access)
  {
    let proxy = ""
    access.forEach(elem => {
      proxy += elem
    });
    proxy += '_' + this.proxyCounter
    this.proxyCounter++
    return proxy
  }

  getTargetFromAccess(item, access)
  {
    let target = item
    access.forEach(elem => {
      target = target[elem]
    });

    return target
  }

  pause()
  {
    if (this.tl){
      this.playing = false
      this.tl.pause()
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
      console.log("playing timeline", this.tl);
      this.playing = true
      this.tl.play(0)
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

  renew()
  {
    this.clear(this.tl)
    this.tl.pause()
    // this.snapshot.segments[this.segmentIndex].to.length = 0
    // this.snapshot.segments[this.segmentIndex].fromTo.length = 0
  }
  
  seekStart()
  {
    this.tl.time(0)
  }

  seekEnd()
  {
    this.tl.time(this.tl.duration())
  }
  
  getSnapshot()
  {
    return this.snapshot
  }

  setFromSnapshot(snapshot)
  {
    this.snapshot = this.getBlankSnapshot()
    this.setTimelines()

    console.log("loaded snap", snapshot);

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
      console.log("set from snap seg and dur", segment, duration);
      
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
        console.log(this.segmentIndex,seekAmount,time);
        
      }
      else
      {
        time += element.duration()
      }
    }
    console.log(this.tl.progress());
    console.log("seeking form child");
    
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

  goToSegment(index)
  {
    console.log("prev segment", this.tl.data);
    this.segmentIndex = index
    this.tl = this.segmentTLs[index]
    console.log("new segment", this.tl.data);
    
    let time = 0
    for (let i = 0; i < index; i++) {
      time += this.segmentTLs[i].duration()
    }
    this.masterTL.time(time)
    this.currentProgress = this.masterTL.progress()
    console.log(this.currentProgress);
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