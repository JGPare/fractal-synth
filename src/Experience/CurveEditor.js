import paper from 'paper'

export default class CurveEditor {
  constructor(canvasId, outputId) {
    this.canvasId = canvasId
    this.outputId = outputId
    this.curve = null
    this.segments = []
    this.controlPoints = []
    this.gridGroup = null

    paper.setup(canvasId)

    // Set up coordinate system for easing curves (0-1)
    this.margin = 10
    this.width = paper.view.size.width - 2 * this.margin
    this.height = paper.view.size.height - 2 * this.margin

    this.init()
  }

  // Convert between screen coordinates and easing coordinates (0-1)
  toScreen(point) {
    return new paper.Point(
      this.margin + point.x * this.width,
      this.margin + this.height - point.y * this.height  // Flip Y axis
    )
  }

  toEasing(point) {
    return new paper.Point(
      (point.x - this.margin) / this.width,
      1 - (point.y - this.margin) / this.height  // Flip Y axis
    )
  }

  drawGrid() {
    if (this.gridGroup) {
      this.gridGroup.remove()
    }

    this.gridGroup = new paper.Group()

    // Grid lines
    for (let i = 0; i <= 10; i++) {
      const x = this.margin + (i / 10) * this.width
      const y = this.margin + (i / 10) * this.height

      // Vertical lines
      const vLine = new paper.Path.Line(new paper.Point(x, this.margin), new paper.Point(x, this.margin + this.height))
      vLine.strokeColor = i === 0 || i === 10 ? '#666' : '#eee'
      vLine.strokeWidth = i === 0 || i === 10 ? 2 : 0.5
      this.gridGroup.addChild(vLine)

      // Horizontal lines
      const hLine = new paper.Path.Line(new paper.Point(this.margin, y), new paper.Point(this.margin + this.width, y))
      hLine.strokeColor = i === 0 || i === 10 ? '#666' : '#eee'
      hLine.strokeWidth = i === 0 || i === 10 ? 2 : 0.5
      this.gridGroup.addChild(hLine)
    }

    this.gridGroup.sendToBack()
  }

  createControlPoint(position, isAnchor = false) {
    const circle = new paper.Path.Circle(position, isAnchor ? 5 : 4)
    circle.fillColor = isAnchor ? '#d3d3d3' : '#768daa'
    circle.strokeColor = isAnchor ? '#d3d3d355' : '#768daa55'
    circle.strokeWidth = 2

    // Bind this context for the drag handler
    const self = this
    circle.onMouseDrag = function (event) {
      this.position = event.point
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
    const start = this.toScreen(new paper.Point(0, 0))
    const cp1 = this.toScreen(new paper.Point(0.25, 0.1))
    const cp2 = this.toScreen(new paper.Point(0.75, 0.9))
    const end = this.toScreen(new paper.Point(1, 1))

    // Create control points
    this.controlPoints.push(this.createControlPoint(start, true))  // start anchor
    this.controlPoints.push(this.createControlPoint(cp1))          // control point 1
    this.controlPoints.push(this.createControlPoint(cp2))          // control point 2
    this.controlPoints.push(this.createControlPoint(end, true))    // end anchor

    this.segments = [{
      anchor1: start,
      control1: cp1,
      control2: cp2,
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
    this.curve.onClick = function(event) {
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
    console.log(this.controlPoints[insertIndex + 3]);
    
    
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

  updateOutput() {
    const output = document.getElementById(this.outputId)

    // Convert to easing coordinates and create GSAP-compatible data
    const easingPoints = this.controlPoints.map(cp => this.toEasing(cp.position))

    // Create SVG path data
    let pathData = `M${easingPoints[0].x.toFixed(3)},${easingPoints[0].y.toFixed(3)}`

    for (let i = 0; i < this.segments.length; i++) {
      const cp1 = easingPoints[i * 3 + 1]
      const cp2 = easingPoints[i * 3 + 2]
      const anchor2 = easingPoints[i * 3 + 3]

      pathData += ` C${cp1.x.toFixed(3)},${cp1.y.toFixed(3)} ${cp2.x.toFixed(3)},${cp2.y.toFixed(3)} ${anchor2.x.toFixed(3)},${anchor2.y.toFixed(3)}`
    }

    output.innerHTML = `
                    <strong>GSAP CustomEase:</strong><br>
                    CustomEase.create("myEase", "${pathData}")
                    <br><br>
                    <strong>Raw Path Data:</strong><br>
                    ${pathData}
                `
  }

  exportCurve() {
    this.updateOutput()

    // Copy to clipboard if possible
    const output = document.getElementById(this.outputId)
    const pathData = output.textContent.match(/M[^"]+/)[0]

    if (navigator.clipboard) {
      navigator.clipboard.writeText(`CustomEase.create("myEase", "${pathData}")`)
      alert('CustomEase code copied to clipboard!')
    } else {
      alert('Export data is shown in the output box below.')
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

  onResize() {
    this.width = paper.view.size.width - 2 * this.margin
    this.height = paper.view.size.height - 2 * this.margin
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