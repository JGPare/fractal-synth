import EventEmitter from './EventEmitter.js'

export default class Mouse extends EventEmitter {
  constructor() 
  {
    super()

    this.clickHeld = false
    this.lastClick = Date.now()
    this.x = 0
    this.y = 0
    this.deltaX = 0
    this.deltaY = 0
    this.scrollDeltaY = 0
    this.touchPointDistance = null
    this.doubleClickDelta = 400
    this.target = null

    this.touchOnly = false
    const canvasOverlayElement = document.getElementById('viewer')
    const canvas = document.getElementById('main-canvas')

    this.addHandlesToElement(canvas)
    this.addHandlesToElement(canvasOverlayElement)

  }

  addHandlesToElement(element)
  {
    // mouse events
    element.addEventListener('mousedown', (event) => 
      {
        this.target = event.target
        if (event.button === 0) 
        {
          this.clickHeld = true
        }
        const clickTime = Date.now()
        if (clickTime - this.lastClick < this.doubleClickDelta)
        {
          this.trigger('doubleClick')
          this.clickHeld = false
        }
        this.lastClick = clickTime
      })

      element.addEventListener('mouseup', (event) => 
      {
        this.target = event.target
        if (event.button === 0) 
        {
          this.clickHeld = false
        }
      })

      element.addEventListener('mousemove', (event) => 
      {
        if (!this.touchOnly)
        {
          this.deltaX = this.x - event.x
          this.deltaY = this.y - event.y
          this.x = event.x
          this.y = event.y
          this.trigger('mousemove')
        }
      })
      
      element.addEventListener('wheel', (event) => 
      {
        this.scrollDeltaY = event.deltaY
        this.trigger('scroll')
      })

      // touch events

      element.addEventListener('touchstart', (event) =>
      {
        this.touchOnly = true
        this.clickHeld = true
        this.target = event.target
        if (event.touches.length == 1)
        {
          this.x = event.touches[0].clientX
          this.y = event.touches[0].clientY
        }
      })
      
      element.addEventListener('touchend', (event) =>
      {
        this.clickHeld = false
        this.touchPointDistance = null
      })

      element.addEventListener('touchmove',(event) =>
      {
        if (event.touches.length > 1)
        {
          const touch1 = event.touches[0]
          const touch2 = event.touches[1]
          const xDistance = touch1.clientX - touch2.clientX
          const yDistance = touch1.clientY - touch2.clientY
          const newDistance = xDistance**2 + yDistance**2
          const newX = (touch1.clientX + touch2.clientX)/2
          const newY = (touch1.clientY + touch2.clientY)/2
          this.deltaX = this.x - newX
          this.deltaY = this.y - newY
          this.x = newX
          this.y = newY
          if (this.touchPointDistance != null){
            this.scrollDeltaY = -(newDistance - this.touchPointDistance)/20
            this.trigger('scroll')
            this.trigger('touchmove')
          }
          this.touchPointDistance = newDistance
        }
        else
        {
          this.deltaX = this.x - event.touches[0].clientX
          this.deltaY = this.y - event.touches[0].clientY
          this.x = event.touches[0].clientX
          this.y = event.touches[0].clientY
          this.trigger('touchmove')
          this.touchPointDistance = null
        }
      })
  }
}