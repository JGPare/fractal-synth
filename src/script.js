import Experience from './Experience/Experience'
import { inject } from '@vercel/analytics'

const experience = new Experience(document.querySelector('canvas'))

// Initialize Vercel Analytics
inject()

window.onbeforeunload = () => {
  experience.onBeforeUnload()
}