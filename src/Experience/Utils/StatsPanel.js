import Stats from "three/examples/jsm/libs/stats.module.js"

export default class StatsPanel {
  constructor() {
    this.stats = new Stats()
    this.stats.showPanel(0) // 0: fps, 1: ms, 2: mb

    const viewerElem = document.getElementById("viewer")
    const dom = this.stats.dom
    dom.style.position = 'absolute'
    dom.style.top = '0'
    dom.style.left = '0'

    dom.style.zIndex = '1000'
    viewerElem.appendChild(dom)
  }

  begin() {
    this.stats.begin()
  }

  end() {
    this.stats.end()
  }

  update() {
    this.stats.update()
  }
}