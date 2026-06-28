/**
 * AudioStore - tiny IndexedDB wrapper for persisting uploaded audio tracks
 * per project. localStorage is too small for audio, so the original encoded
 * blob is stored here keyed by project id and re-decoded on load.
 */
const DB_NAME = 'fractal-synth-audio'
const STORE = 'tracks'

function openDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE)
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

export default class AudioStore {
  /**
   * @param {number|string} projectId
   * @param {Blob} blob
   * @param {string} name
   */
  static async put(projectId, blob, name) {
    if (!blob) return
    const db = await openDb()
    await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite')
      tx.objectStore(STORE).put({ blob, name }, String(projectId))
      tx.oncomplete = () => resolve()
      tx.onerror = () => reject(tx.error)
    })
    db.close()
  }

  /**
   * @param {number|string} projectId
   * @returns {Promise<{blob: Blob, name: string}|null>}
   */
  static async get(projectId) {
    const db = await openDb()
    const rec = await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readonly')
      const req = tx.objectStore(STORE).get(String(projectId))
      req.onsuccess = () => resolve(req.result || null)
      req.onerror = () => reject(req.error)
    })
    db.close()
    return rec
  }

  /**
   * @param {number|string} projectId
   */
  static async remove(projectId) {
    const db = await openDb()
    await new Promise((resolve) => {
      const tx = db.transaction(STORE, 'readwrite')
      tx.objectStore(STORE).delete(String(projectId))
      tx.oncomplete = () => resolve()
      tx.onerror = () => resolve()
    })
    db.close()
  }
}
