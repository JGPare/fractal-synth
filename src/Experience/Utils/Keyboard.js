import EventEmitter from './EventEmitter.js'

export default class Keyboard extends EventEmitter {
  // ============================================================
  // INITIALIZATION
  // ============================================================

  /**
   * @param {HTMLElement|Window} parentElement
   */
  constructor(parentElement = window) {
    super()

    this.heldKeys = new Set()
    this.keyMap = {}

    parentElement.addEventListener('keydown', (event) => {
      if (!this.heldKeys.has(event.code)) {
        this.heldKeys.add(event.code)
        const eventKey = `keydown:${event.code}`
        this.trigger(eventKey)
        if (this.keyMap[eventKey]) {
          this.trigger(this.keyMap[eventKey])
        }
      }
    })

    parentElement.addEventListener('keyup', (event) => {
      this.heldKeys.delete(event.code)
      const eventKey = `keydown:${event.code}`
      this.trigger(`keyup:${event.code}`)
      if (this.keyMap[eventKey]) {
        this.trigger(this.keyMap[eventKey])
      }
    })
  }

  // ============================================================
  // KEY MAPPING
  // ============================================================

  /**
   * @param {string} key
   * @param {string} eventName
   * @param {string} type
   */
  addMapping(key, eventName, type = "keydown") {
    this.keyMap[type + ":" + key] = eventName
  }

  /**
   * @param {string} keyCode
   * @returns {boolean}
   */
  isDown(keyCode) {
    return this.heldKeys.has(keyCode)
  }
}
