import * as THREE from 'three'
import Palette from '../Utils/Palette.js'
import ProjectRepo from './ProjectRepo.js'

export default class URLShare {
  // ============================================================
  // ENCODING / DECODING
  // ============================================================

  /**
   * Encode the current fractal state into the URL hash.
   * @param {import('../Experience.js').default} experience
   */
  static encode(experience) {
    const shader = experience.shader
    const channels = experience.channels
    const paletteIndex = shader.paletteIndex
    const palette = experience.palettes.getPaletteByIndex(paletteIndex)

    let p, pc
    if (palette.locked) {
      p = paletteIndex
      pc = undefined
    } else {
      p = -1
      const hexes = palette.palette.map(color => color.getHex())
      pc = { n: palette.name, l: palette.displayLength, h: hexes }
    }

    const inputs = shader.getNumInputs().map(input => [
      input.eId,
      input.value,
      input.channelIndex,
      input.startVal,
      input.endVal
    ])

    const channelSnap = channels.map(ch => [ch.duration, ch.ease, ch.offset])

    const payload = { v: 1, s: shader.eShader, p, i: inputs, c: channelSnap }
    if (pc) payload.pc = pc

    window.location.hash = 'share=' + URLShare._toBase64url(JSON.stringify(payload))
  }

  /**
   * Decode the URL hash and restore fractal state.
   * @param {import('../Experience.js').default} experience
   * @returns {boolean} true if decoded successfully
   */
  static decode(experience) {
    try {
      if (!URLShare.hasShareHash()) return false

      const b64 = window.location.hash.slice('#share='.length)
      const payload = JSON.parse(URLShare._fromBase64url(b64))

      if (payload.v !== 1) return false

      experience.setShader(payload.s)
      const shader = experience.shader

      // Restore input values
      const inputByEId = {}
      for (const tuple of payload.i) {
        inputByEId[tuple[0]] = {
          value: tuple[1],
          channelIndex: tuple[2],
          startVal: tuple[3],
          endVal: tuple[4]
        }
      }
      shader.setFromSnapshotByEId(inputByEId)

      // Restore palette
      if (payload.p >= 0) {
        shader.paletteIndex = payload.p
      } else if (payload.pc) {
        const pc = payload.pc
        const colors = pc.h.map(hex => {
          const c = new THREE.Color()
          c.setHex(hex)
          return c
        })
        const pal = new Palette(colors, pc.n, pc.l)
        experience.palettes.addPalette(pal)
        shader.paletteIndex = experience.palettes.palettes.length - 1
      }

      experience.updateFromShader()

      // Restore channel settings
      const channelSnapshot = payload.c.map(ch => ({
        duration: ch[0],
        ease: ch[1],
        offset: ch[2]
      }))
      ProjectRepo.setChannelsFromSnapshot(experience, channelSnapshot)

      return true
    } catch (e) {
      console.warn('URLShare.decode failed:', e)
      return false
    }
  }

  // ============================================================
  // URL HELPERS
  // ============================================================

  /**
   * @returns {boolean}
   */
  static hasShareHash() {
    return window.location.hash.startsWith('#share=')
  }

  /**
   * Copy the current URL (with share hash) to the clipboard.
   */
  static async copyShareURL() {
    await navigator.clipboard.writeText(window.location.href)
  }

  // ============================================================
  // BASE64URL HELPERS (unicode-safe)
  // ============================================================

  static _toBase64url(str) {
    return btoa(unescape(encodeURIComponent(str)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '')
  }

  static _fromBase64url(b64) {
    const padded = b64 + '='.repeat((4 - (b64.length % 4)) % 4)
    return decodeURIComponent(escape(atob(padded.replace(/-/g, '+').replace(/_/g, '/'))))
  }
}
