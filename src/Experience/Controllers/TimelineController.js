import BaseController from './BaseController'

/**
 * TimelineController - Manages timeline playback and seek operations
 * Handles play/pause, seek start/end, keyboard integration
 */
export default class TimelineController extends BaseController {
  constructor() {
    super()
    this.initState()
    this.getElements()
    this.linkTimeline()
    this.linkKeyboardEvents()
  }

  initState() {
    this.globalPlay = false
    this.numberOfChannels = 5
  }

  getElements() {
    this.playTimelineButton = document.getElementById('play-timeline-button')
    this.pauseTimelineButton = document.getElementById('pause-timeline-button')
    this.seekStartTimelineButton = document.getElementById('seek-start-timeline-button')
    this.seekEndTimelineButton = document.getElementById('seek-end-timeline-button')
    this.timelineSelectSlider = document.getElementById('timeline-select-slider')
  }

  linkKeyboardEvents() {
    this.keyboard.on('togglePlay', () => {
      const timelineSelections = this.getTimelineSelection()
      if (this.globalPlay) {
        this.timeline.pauseTimelinesSelect(timelineSelections)
      } else {
        this.timeline.playTimelinesSelect(timelineSelections)
        this.trigger('playStarted')
      }
      this.globalPlay = !this.globalPlay
    })

    this.keyboard.on('seekStart', () => {
      this.seekStartOnSelectTimelines()
    })

    this.keyboard.on('seekEnd', () => {
      this.seekEndOnSelectTimelines()
    })
  }

  linkTimeline() {
    this.playTimelineButton.addEventListener('click', (event) => {
      this.globalPlay = true
      const timelineSelections = this.getTimelineSelection()
      this.timeline.playTimelinesSelect(timelineSelections)
      this.trigger('playStarted')
    })

    this.pauseTimelineButton.addEventListener('click', (event) => {
      this.globalPlay = false
      const timelineSelections = this.getTimelineSelection()
      this.timeline.pauseTimelinesSelect(timelineSelections)
    })

    this.seekStartTimelineButton.addEventListener('click', (event) => {
      this.seekStartOnSelectTimelines()
    })

    this.seekEndTimelineButton.addEventListener('click', (event) => {
      this.seekEndOnSelectTimelines()
    })
  }

  /**
   * Get timeline selection state from channels
   * @returns {boolean[]} Array of channel on states
   */
  getTimelineSelection() {
    return this.channels.map(channel => (channel.on))
  }

  /**
   * Set all timelines from shader inputs
   */
  setAllTimelines() {
    for (let i = 0; i < this.channels.length; i++) {
      this.setTimeline(i)
    }
  }

  /**
   * Set timeline for a specific channel
   * @param {number} index - Channel index
   */
  setTimeline(index) {
    if (!this.shader || index < 0) {
      return
    }
    this.trigger('timelineSet', [index])
  }

  /**
   * Seek to start on selected timelines
   */
  seekStartOnSelectTimelines() {
    const timelineSelections = this.getTimelineSelection()
    for (let i = 0; i < timelineSelections.length; i++) {
      if (timelineSelections[i]) {
        this.timeline.seekStart(i)
      }
    }
    this.trigger('seekCompleted')
  }

  /**
   * Seek to end on selected timelines
   */
  seekEndOnSelectTimelines() {
    const timelineSelections = this.getTimelineSelection()
    for (let i = 0; i < timelineSelections.length; i++) {
      if (timelineSelections[i]) {
        this.timeline.seekEnd(i)
      }
    }
    this.trigger('seekCompleted')
  }
}
