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

    this.defaultDuration = 60
    this.tl = this.getTimeline()
    
    this.tl.pause()

    this.snapshot = this.getBlankSnapshot()
    
  }

  getBlankSnapshot()
  {
    return {
      "fromTo" : [],
      "to" : []
    }
  }

  getTimeline()
  {
    return gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { duration: this.defaultDuration, 
                  ease: "power1", 
                }
    })
  }

  setDuration(duration)
  {
    this.tl.duration = duration
  }

  progress(value)
  {
    this.tl.progress(value)
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
      this.snapshot.to.push({
        localId : item.localId,
        pars : [{...params}, start, access],
      })
    }
  }

  fromTo(item, fromPars, toPars, start = 0, access = [])
  {
    const target = this.getTargetFromAccess(item, access)
    console.log("tween target:", target);
    
    if (item.localId)
    {
      this.snapshot.fromTo.push({
        localId : item.localId,
        pars : [{...fromPars}, {...toPars}, start, access],
      })
    }
    else {
      console.log("error: No Local Id", item);
      
    }

    this.tl.fromTo(target, {...fromPars, immediateRender:false}, toPars, start)
    
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
    this.tl.pause()
  }

  play()
  {
    this.tl.play()
  }

  clear()
  {
    this.tl.clear()
  }

  renew()
  {
    this.tl = this.getTimeline()
  }

  getSnapshot()
  {
    //console.log("snapshot during get", this.snapshot);
    
    return this.snapshot
  }

  setFromSnapshot(snapshot)
  {
    console.log("setting from snapshot", snapshot);
    
    this.snapshot = this.getBlankSnapshot()
    this.tl = this.getTimeline()
    
    snapshot.to.forEach(tweenSnapshot => {
      
      const item = this.experience.getItemById(tweenSnapshot.localId)
      this.to(item, ...tweenSnapshot.pars)
    });

    snapshot.fromTo.forEach(tweenSnapshot => {
      
      const item = this.experience.getItemById(tweenSnapshot.localId)
      console.log(tweenSnapshot);
      
      this.fromTo(item, ...tweenSnapshot.pars)
    });
  }


}