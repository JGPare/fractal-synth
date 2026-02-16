import BaseController from './BaseController'

/**
 * ChannelController - Manages channel state and input synchronization
 * Handles channel activation, checkboxes, duration/ease inputs, clear operations
 */
export default class ChannelController extends BaseController {
  constructor() {
    super()
    this.initState()
    this.getElements()
    this.linkChannels()
    this.linkKeyboardEvents()
  }

  initState() {
    this.numberOfChannels = 5
  }

  getElements() {
    this.channelCheckboxes = document.querySelectorAll('input.channel-checkbox')
    this.channelDurations = document.querySelectorAll('input.channel-duration')
    const channelsContainer = document.querySelector('#channels')
    this.channelNumberContainers = channelsContainer.querySelectorAll('div.channel-number-container')
    this.channelEases = document.querySelectorAll('select.channel-ease')
    this.channelProgressSliders = document.querySelectorAll('input.timeline-slider')
    this.channelClearBtns = document.querySelectorAll('button.channel-clear-btn')
  }

  linkKeyboardEvents() {
    for (let i = 0; i < this.numberOfChannels; i++) {
      this.keyboard.on(`toggleArm${i + 1}`, () => this.toggleChannelArm(i))
    }
  }

  linkChannels() {
    for (let i = 0; i < this.channels.length; i++) {
      const channel = this.channels[i]
      const channelCheckbox = this.channelCheckboxes[i]
      const channelDuration = this.channelDurations[i]
      const channelEase = this.channelEases[i]
      const channelProgressSlider = this.channelProgressSliders[i]
      const channelClearBtn = this.channelClearBtns[i]

      channelDuration.addEventListener('change', (event) => {
        channel.duration = channelDuration.value
        this.timeline.setDuration(channel.duration, i)
      })

      channelEase.addEventListener('change', (event) => {
        channel.ease = channelEase.value
        this.timeline.setEase(channel.ease, "inOut", i)
      })

      channelCheckbox.addEventListener('change', (event) => {
        channel.on = channelCheckbox.checked
      })

      channelProgressSlider.addEventListener('input', (event) => {
        this.timeline.progress(event.target.value, i)
      })

      channelClearBtn.addEventListener('click', (event) => {
        this.timeline.renew(i)
        this.clearChannelInputs(i)
        this.setChannelAsInactive(i)
      })
    }
  }

  /**
   * Turn on active channels from shader data
   */
  turnOnActiveChannels() {
    for (let i = 0; i < this.channels.length; i++) {
      const channel = this.channels[i]
      if (channel.active) {
        channel.on = true
        this.channelCheckboxes[i].checked = true
      }
    }
  }

  /**
   * Toggle channel arm state
   * @param {number} index - Channel index
   */
  toggleChannelArm(index) {
    this.channels[index].on = !this.channels[index].on
    this.channelCheckboxes[index].checked = this.channels[index].on
  }

  /**
   * Set channel UI from shader data
   */
  setChannelUIFromShader() {
    for (let i = 0; i < this.channels.length; i++) {
      const channel = this.channels[i]
      const channelCheckbox = this.channelCheckboxes[i]
      const channelDuration = this.channelDurations[i]
      const channelEase = this.channelEases[i]

      channelCheckbox.checked = channel.on
      channelDuration.value = channel.duration
      channelEase.value = channel.ease
    }
  }

  /**
   * Set channel as active with visual feedback
   * @param {number} i - Channel index
   */
  setChannelAsActive(i) {
    this.channels[i].active = true
    this.channelProgressSliders[i].classList.add("timeline-slider-has-content")
    this.channelProgressSliders[i].classList.remove("timeline-slider-default")
    this.channelNumberContainers[i].classList.add("channel-color-active")
    this.channelNumberContainers[i].classList.remove("channel-color")
  }

  /**
   * Set channel as inactive with visual feedback
   * @param {number} i - Channel index
   */
  setChannelAsInactive(i) {
    this.channels[i].active = false
    this.channelProgressSliders[i].classList.remove("timeline-slider-has-content")
    this.channelProgressSliders[i].classList.add("timeline-slider-default")
    this.channelNumberContainers[i].classList.remove("channel-color-active")
    this.channelNumberContainers[i].classList.add("channel-color")
  }

  /**
   * Clear all inputs for a channel
   * @param {number} index - Channel index
   */
  clearChannelInputs(index) {
    this.trigger('clearChannelInputsRequested', [index])
  }

  /**
   * Clear all animations on all channels
   */
  clearAllChannelAnimations() {
    for (let i = 0; i < this.channels.length; i++) {
      this.timeline.renew(i)
      this.clearChannelInputs(i)
      this.setChannelAsInactive(i)
    }
  }

  /**
   * Get channel progress slider element
   * @param {number} index - Channel index
   * @returns {HTMLElement}
   */
  getChannelProgressSlider(index) {
    return this.channelProgressSliders[index]
  }
}
