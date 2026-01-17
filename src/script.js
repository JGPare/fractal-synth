import Experience from './Experience/Experience'

const experience = new Experience(document.querySelector('canvas'))

window.onbeforeunload = () => {
  experience.onBeforeUnload()
}

// Expand view toggle (hide sidebars)
const fullscreenBtn = document.getElementById('fullscreen-btn')
const mainGrid = document.getElementById('main-grid')

fullscreenBtn.addEventListener('click', () => {
  mainGrid.classList.toggle('expanded')
})

// Show button when hovering bottom-right corner in expanded mode
document.addEventListener('mousemove', (e) => {
  if (!mainGrid.classList.contains('expanded')) return

  const cornerSize = 100
  const inCorner = (window.innerWidth - e.clientX < cornerSize) && (window.innerHeight - e.clientY < cornerSize)

  fullscreenBtn.classList.toggle('visible', inCorner)
})