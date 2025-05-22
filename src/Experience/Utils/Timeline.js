import gsap from 'gsap'
import EventEmitter from './EventEmitter.js'
import Experience from '../Experience.js'

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
      yoyo: true,
      repeatDelay: 0.5,
      paused: true,
      duration: 0, 
      defaults: { 
        duration: 15, 
        ease: "power1.inOut"
      }
    }
    this.snapshot = this.getBlankSnapshot()

    this.proxyCounter = 0
    this.proxy = {}

    this.segmentCount
    this.segmentIndex = 0

    this.currentProgress = 0

    /** 
     * @type {Array<gsap.core.Timeline>} 
    */
    this.segmentTLs = []

    this.setTimelines()

    console.log("init snapshot",this.snapshot);

    /**
     * @type {gsap.core.Timeline}
     */
    this.tl = this.segmentTLs[this.segmentIndex]

    this.buildMaster()

  }

  getBlankSnapshot()
  {
    return {
      segments : [],
      tlParams : this.tlParams
    }
  }

  setTimelines()
  {
    const currInd = this.segmentIndex
    for (let i = 0; i < 6; i++) {
      if (this.segmentTLs[i]) this.segmentTLs[i].kill()
      this.addTimeline(i)
    }
    this.segmentIndex = currInd
  }

  getNewTimeline(params)
  {
    return gsap.timeline(params)
  }

  addTimeline(index)
  {
    const tl = this.getNewTimeline({...this.tlParams, data : "sec-" + index, onComplete: () => {
      const newInd = index + 1
      if (this.segmentTLs.length > newInd && this.segmentTLs[newInd].duration() > 0){
        this.segmentIndex = index + 1
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
  }

  setDuration(duration)
  {
    this.tl.duration(duration)
    this.snapshot.segments[this.segmentIndex].duration = duration
  }

  progress(value = null)
  {
    if (value){
      this.masterTL.progress(value)
      this.currentProgress = value
    }
    else
    {
      return this.masterTL.progress()
    }

    console.log("set prog for timeline ",this.tl.data,": ",this.tl.progress());
    
  }

  to(item, params, start = 0, access = [])
  {
    let target = item
    access.forEach(elem => {
      target = target[elem]
    });    
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
    
    if (item.localId)
    {
      this.snapshot.segments[this.segmentIndex].fromTo.push({
        localId : item.localId,
        pars : [{...fromPars}, {...toPars}, start, access],
      })
    }
    else {
      console.log("error: No Local Id", item);
    }
    
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
    if (this.masterTL){
      this.masterTL.pause()
      this.currentProgress = this.masterTL.progress()
    }
  }

  play()
  {
    console.log("playing timeline", this.tl);
    
    this.buildMaster()
    this.setMasterTime()
    this.masterTL.play()
    this.masterTL.progress(this.currentProgress)
    console.log("playing at master progress: ",this.masterTL.progress());
    
  }

  togglePlay()
  {
    if (this.tl.isActive()){
      this.pause()
    }
    else {
      this.play()
    }
  }

  clear()
  {
    this.tl.clear()
    //this.proxyCounter = 0
  }

  renew()
  {
    this.clear()
    this.snapshot.segments[this.segmentIndex].to.length = 0
    this.snapshot.segments[this.segmentIndex].fromTo.length = 0
  }

  seekEnd()
  {
    this.seekFromChild(0.999)
  }

  seekStart()
  {
    this.seekFromChild(0)
  }

  seekFromChild(seekAmount)
  {
    let time = 0
    for (let i = 0; i <= this.segmentIndex; i++) {
      const element = this.segmentTLs[i]
      if (i == this.segmentIndex)
      {
        time += element.duration()*seekAmount
      }
      else
      {
        time += element.duration()
      }
    }
    this.masterTL.time(time)
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
      console.log(segment);
      
      this.tl.duration(duration)
      this.tl.paused(false)
    }
    
    this.masterTL.seek(0,false)
    this.segmentIndex = 0
    this.tl = this.segmentTLs[0]
    this.play()
    this.pause()
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
    });

    let position = 0;
    for (let i = 0; i < this.segmentTLs.length; i++) {
      const seg = this.segmentTLs[i]
      seg.paused(false)
      this.masterTL.add(seg, position)
      position += seg.duration()
    }
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
    console.log("tl", this.tl.data, "progress:", this.tl.progress());
    console.log("setting master time to: ", elapsed);
    console.log("master duration", this.masterTL.duration())
    
    this.masterTL.time(elapsed);
  }

  addOnUpdate(callback)
  {
    this.tl.onUpdate = callback
  }
}