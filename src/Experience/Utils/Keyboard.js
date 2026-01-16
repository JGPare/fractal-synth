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
        const fullKey = this.buildKeyString(event)
        const eventKey = `keydown:${fullKey}`
        this.trigger(eventKey)
        if (this.keyMap[eventKey]) {
          this.trigger(this.keyMap[eventKey])
        }
      }
    })

    parentElement.addEventListener('keyup', (event) => {
      this.heldKeys.delete(event.code)
      const fullKey = this.buildKeyString(event)
      const eventKey = `keyup:${fullKey}`
      this.trigger(eventKey)
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

  /**
   * @param {KeyboardEvent} event
   * @returns {string}
   */
  buildKeyString(event) {
    let key = ''
    if (event.ctrlKey || event.metaKey) key += 'Ctrl+'
    if (event.shiftKey) key += 'Shift+'
    if (event.altKey) key += 'Alt+'
    key += event.code
    return key
  }
}
