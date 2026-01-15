

export default class Channel {
  constructor(params) {
    this.name = params.name
    // ease string passed to gsap
    this.ease = params.ease
    this.duration = params.duration
    this.on = params.on
    // active is has animated pars
    this.active = false
    this.onSetDuration = null
  }

  setDuration(duration) {
    this.duration = duration
    if (this.onSetDuration) {
      this.onSetDuration(duration)
    }
  }

  setEase(ease, params = {}) {
    this.ease = ease
  }
}