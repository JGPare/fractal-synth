import * as THREE from 'three'
import Palette from '../Utils/Palette.js'

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
    const animation = experience.animation
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
      input.value
    ])

    // Keyframe timeline: a: { d: duration, m: 0 loop | 1 pingpong, k: [[eId, [[t,v,s],...]], ...] }
    // plus music settings (mm/bpm/bars/bpb/g) in v3. Tracks may include
    // modulator center/range lanes (string ids) - they serialize fine.
    const timelineSnap = animation.getSnapshot()
    const a = {
      d: timelineSnap.duration,
      m: timelineSnap.mode === 'pingpong' ? 1 : 0,
      mm: timelineSnap.musicMode ? 1 : 0,
      bpm: timelineSnap.bpm,
      bars: timelineSnap.bars,
      bpb: timelineSnap.beatsPerBar,
      g: timelineSnap.gridDivision,
      k: timelineSnap.tracks.map(track => [track.eId, track.keys])
    }

    // Modulators (the audio track itself is not shareable via URL)
    const mo = experience.modulatorManager.getSnapshot()

    const payload = { v: 3, s: shader.eShader, p, i: inputs, a, mo }
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

      // v1 links restore shader/inputs/palette only (channel animation
      // data from the old system is ignored); v2 restores the timeline;
      // v3 adds music settings + modulators
      if (![1, 2, 3].includes(payload.v)) return false

      experience.setShader(payload.s)
      const shader = experience.shader

      // Restore input values
      const inputByEId = {}
      for (const tuple of payload.i) {
        inputByEId[tuple[0]] = {
          value: tuple[1]
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

      // Restore keyframe timeline (v2+; v1 links get an empty timeline)
      if (payload.v >= 2 && payload.a) {
        const a = payload.a
        experience.animation.setFromSnapshot({
          duration: a.d,
          mode: a.m === 1 ? 'pingpong' : 'loop',
          musicMode: a.mm === 1,
          bpm: a.bpm,
          bars: a.bars,
          beatsPerBar: a.bpb,
          gridDivision: a.g,
          tracks: (a.k ?? []).map(entry => ({ eId: entry[0], keys: entry[1] }))
        })
      } else {
        experience.animation.setFromSnapshot(null)
      }

      // Restore modulators (v3); audio is never embedded in a share link
      experience.modulatorManager.setFromSnapshot(payload.mo ?? null)
      experience.audioEngine.clear()
      if (experience.controls?.modulators) {
        experience.controls.modulators.onAudioRestored()
      }

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
