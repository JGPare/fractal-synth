import Experience from './Experience/Experience'

const experience = new Experience(document.querySelector('canvas'))

window.onbeforeunload = () =>
{
  experience.onBeforeUnload()
}