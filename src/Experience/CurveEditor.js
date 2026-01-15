import paper from 'paper'
import Experience from './Experience'

/**
 * 
 * @param {Experience} experience 
 */
export default class CurveEditor {
  constructor(canvasId, outputId, experience) {

    this.experience = experience
    this.timeline = experience.timeline

    this.canvasId = canvasId
    this.outputId = outputId
    this.curve = null
    this.segments = []
    this.controlPoints = []
    this.gridGroup = null
    this.canvasHeight = 300
    this.yScale = 1

    paper.setup(canvasId)

    // Get the canvas element and its parent
    this.canvas = document.getElementById(canvasId)
    this.parentContainer = this.canvas.parentElement
    this.resizeCanvas()

    // Set up coordinate system for easing curves (0-1)
    this.margin = {
      x: 5,
      y: 40
    }
    this.width = paper.view.size.width - 2 * this.margin.x
    this.height = paper.view.size.height - 2 * this.margin.y

    this.init()
  }

  resizeCanvas() {
    // Get parent container dimensions
    const parentWidth = this.parentContainer.clientWidth

    // Set canvas dimensions to match parent
    this.canvas.width = parentWidth
    this.canvas.height = this.canvasHeight

    // Update Paper.js view size if already initialized
    if (paper.view) {
      paper.view.viewSize = new paper.Size(parentWidth, this.canvasHeight)
    }
  }

  // Convert between screen coordinates and easing coordinates (0-1)
  toScreen(point) {
    return new paper.Point(
      this.margin.x + point.x * this.width,
      this.margin.y + this.height - point.y * this.height  // Flip Y axis
    )
  }

  toEasing(point) {
    return new paper.Point(
      (point.x - this.margin.x) / this.width,
      1 - (point.y * this.yScale - this.margin.y) / this.height  // Flip Y axis
    )
  }

  drawGrid() {
    if (this.gridGroup) {
      this.gridGroup.remove()
    }

    this.gridGroup = new paper.Group()

    // Grid lines
    for (let i = 0; i <= 10; i++) {
      const x = this.margin.x + (i / 10) * this.width
      const y = this.margin.y + (i / 10) * this.height

      // Vertical lines
      const vLine = new paper.Path.Line(new paper.Point(x, this.margin.y), new paper.Point(x, this.margin.y + this.height))
      vLine.strokeColor = i === 0 || i === 10 ? '#666' : '#eee'
      vLine.strokeWidth = i === 0 || i === 10 ? 2 : 0.5
      this.gridGroup.addChild(vLine)

      // Horizontal lines
      const hLine = new paper.Path.Line(new paper.Point(this.margin.x, y), new paper.Point(this.margin.x + this.width, y))
      hLine.strokeColor = i === 0 || i === 10 ? '#666' : '#eee'
      hLine.strokeWidth = i === 0 || i === 10 ? 2 : 0.5
      this.gridGroup.addChild(hLine)
    }

    this.gridGroup.sendToBack()
  }

  createControlPoint(position, isAnchor = false, isXlock = false) {
    const circle = new paper.Path.Circle(position, isAnchor ? 5 : 4)
    circle.fillColor = isAnchor ? '#d3d3d3' : '#d3d3d3'
    circle.strokeColor = isAnchor ? '#d3d3d355' : '#d3d3d355'
    circle.strokeWidth = 2

    // Bind this context for the drag handler
    const self = this
    circle.onMouseDrag = function (event) {
      if (isXlock) {
        this.position.y = event.point.y
      }
      else {
        this.position = event.point
      }
      self.updateCurve()
    }

    return circle
  }

  initializeCurve() {
    // Clear existing elements
    if (this.curve) this.curve.remove()
    this.controlPoints.forEach(cp => cp.remove())
    this.controlPoints = []

    // Create initial bezier curve (simple S-curve)
    const start = this.toScreen(new paper.Point(0, 0.0))
    const cp1 = this.toScreen(new paper.Point(0.15, 0.0))
    const cp2 = this.toScreen(new paper.Point(0.35, 1.0))
    const center = this.toScreen(new paper.Point(0.5, 1.0))
    const cp3 = this.toScreen(new paper.Point(0.65, 1.0))
    const cp4 = this.toScreen(new paper.Point(0.85, 0.0))
    const end = this.toScreen(new paper.Point(1, 0))

    // Create control points
    this.controlPoints.push(this.createControlPoint(start, true, true))
    this.controlPoints.push(this.createControlPoint(cp1))
    this.controlPoints.push(this.createControlPoint(cp2))
    this.controlPoints.push(this.createControlPoint(center, true, false))
    this.controlPoints.push(this.createControlPoint(cp3))
    this.controlPoints.push(this.createControlPoint(cp4))
    this.controlPoints.push(this.createControlPoint(end, true, true))

    this.segments = [{
      anchor1: start,
      control1: cp1,
      control2: cp2,
      anchor2: center
    }, {
      anchor1: center,
      control1: cp3,
      control2: cp4,
      anchor2: end
    }]

    this.updateCurve()
  }

  updateCurve() {
    if (this.curve) this.curve.remove()

    this.curve = new paper.Path()
    this.curve.strokeColor = '#768daa'
    this.curve.strokeWidth = 3
    this.curve.strokeCap = 'round'

    // Make the curve clickable for adding segments
    const self = this
    this.curve.onClick = function (event) {
      self.addSegmentAtPoint(event.point)
    }

    // Start at first anchor
    this.curve.moveTo(this.controlPoints[0].position)

    // Add bezier segments
    for (let i = 0; i < this.segments.length; i++) {
      const cp1 = this.controlPoints[i * 3 + 1].position
      const cp2 = this.controlPoints[i * 3 + 2].position
      const anchor2 = this.controlPoints[i * 3 + 3].position

      this.curve.cubicCurveTo(cp1, cp2, anchor2)
      this.curve.sendToBack()
    }

    // Draw control lines
    this.drawControlLines()

    this.timeline.setEase("custom", this.getPathData(), 0)

    // Update output
    //this.updateOutput()
  }

  addSegmentAtPoint(clickPoint) {
    // Find the closest point on the curve to where user clicked
    const offset = this.curve.getNearestPoint(clickPoint)
    const location = this.curve.getNearestLocation(clickPoint)

    // Convert the offset (parameter t) to determine which segment was clicked
    let segmentIndex = Math.floor(location.offset / this.curve.length * this.segments.length)
    segmentIndex = Math.max(0, Math.min(segmentIndex, this.segments.length - 1))

    // Get the point where we want to split
    const splitPoint = offset
    const easingSplitPoint = this.toEasing(splitPoint)

    // Create new control points around the split point
    const cp1Offset = 0.1
    const cp2Offset = 0.1

    const newCP1 = this.toScreen(new paper.Point(
      Math.max(0, Math.min(1, easingSplitPoint.x - cp1Offset)),
      Math.max(0, Math.min(1, easingSplitPoint.y - cp1Offset))
    ))
    const newCP2 = this.toScreen(new paper.Point(
      Math.max(0, Math.min(1, easingSplitPoint.x + cp2Offset)),
      Math.max(0, Math.min(1, easingSplitPoint.y + cp2Offset))
    ))

    // Insert the new control points and anchor at the right position in the array
    const insertIndex = (segmentIndex + 1) * 3 - 1

    // Create new control points
    const newAnchor = this.createControlPoint(splitPoint, true)
    const newControl1 = this.createControlPoint(newCP1)
    const newControl2 = this.createControlPoint(newCP2)

    // Insert into controlPoints array
    this.controlPoints.splice(insertIndex, 0, newControl1, newAnchor, newControl2)

    // Update segments array
    const newSegment = {
      anchor1: splitPoint,
      control1: newCP1,
      control2: newCP2,
      anchor2: this.controlPoints[insertIndex + 3] ? this.controlPoints[insertIndex + 3].position : splitPoint
    }

    this.segments.splice(segmentIndex + 1, 0, newSegment)

    // Rebuild the curve
    this.updateCurve()
  }

  drawControlLines() {
    // Remove existing control lines
    paper.project.activeLayer.children.forEach(child => {
      if (child.data && child.data.isControlLine) {
        child.remove()
      }
    })

    // Draw new control lines
    for (let i = 0; i < this.segments.length; i++) {
      const anchor1 = this.controlPoints[i * 3].position
      const cp1 = this.controlPoints[i * 3 + 1].position
      const cp2 = this.controlPoints[i * 3 + 2].position
      const anchor2 = this.controlPoints[i * 3 + 3].position

      // Line from anchor1 to cp1
      const line1 = new paper.Path.Line(anchor1, cp1)
      line1.strokeColor = '#ccc'
      line1.strokeWidth = 1
      line1.dashArray = [4, 4]
      line1.data = { isControlLine: true }
      line1.sendToBack()

      // Line from anchor2 to cp2
      const line2 = new paper.Path.Line(anchor2, cp2)
      line2.strokeColor = '#ccc'
      line2.strokeWidth = 1
      line2.dashArray = [4, 4]
      line2.data = { isControlLine: true }
      line2.sendToBack()
    }
  }

  reset() {
    this.initializeCurve()
  }

  getPathData() {
    // Return just the path data string for programmatic use
    const easingPoints = this.controlPoints.map(cp => this.toEasing(cp.position))
    let pathData = `M${easingPoints[0].x.toFixed(3)},${easingPoints[0].y.toFixed(3)}`

    for (let i = 0; i < this.segments.length; i++) {
      const cp1 = easingPoints[i * 3 + 1]
      const cp2 = easingPoints[i * 3 + 2]
      const anchor2 = easingPoints[i * 3 + 3]

      pathData += ` C${cp1.x.toFixed(3)},${cp1.y.toFixed(3)} ${cp2.x.toFixed(3)},${cp2.y.toFixed(3)} ${anchor2.x.toFixed(3)},${anchor2.y.toFixed(3)}`
    }

    return pathData
  }

  // not working yet
  onResize() {
    this.resizeCanvas()
    this.width = paper.view.size.width - 2 * this.margin.x
    this.height = paper.view.size.height - 2 * this.margin.y
    this.drawGrid()
    this.initializeCurve()
  }

  init() {
    this.drawGrid()
    this.initializeCurve()

    // Set up resize handler
    const self = this
    paper.view.onResize = function () {
      self.onResize()
    }
  }
}