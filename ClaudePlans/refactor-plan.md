# Fractal Synth — Refactor Plan

> Generated 2026-06-14. Scope: the `src/` codebase (excluding `node_modules/` and
> `dist/`). This plan catalogs refactor opportunities found by reviewing every
> source file. Each item lists the file/lines, the problem, why it matters, and a
> concrete fix. Items are grouped by theme and tagged by priority.
>
> **Suggested order of work:** Phase 1 (correctness bugs) → Phase 2 (dead code) →
> Phase 3 (duplication) → Phase 4 (consistency/architecture) → Phase 5 (CSS).
> Bugs are first because some are silent runtime crashes that the rest of the
> codebase happens to route around.

---

## Phase 1 — Correctness bugs (do these first) 🔴

These are not style issues; they are latent or active bugs. All verified by reading
the actual source.

### 1.1 `Palette.getSnapshot()` references undefined `palette` — crashes on save
**File:** `src/Experience/Utils/Palette.js:178-186` · **Priority: HIGH**

```js
getSnapshot() {
  const paletteSnapshot = {}
  paletteSnapshot.name = palette.name          // `palette` is not in scope → ReferenceError
  paletteSnapshot.length = palette.displayLength
  ...
  for (const color of palette.palette) { ... }
}
```
The method should use `this`, not `palette`. Every call throws `ReferenceError`.
This path is reached by `PaletteRepo.savePalettes` and `URLShare.encode`, so saving
or sharing custom palettes is broken.
**Fix:** replace `palette.` with `this.` on all three lines.

### 1.2 `Palettes.getSnapshot()` references undefined `palettes`
**File:** `src/Experience/Utils/Palettes.js:112-119` · **Priority: HIGH**

```js
for (const palette of palettes) {   // should be this.palettes
```
Throws on every page exit (called via `Experience.onBeforeUnload`), silently eaten
by the `beforeunload` handler.
**Fix:** `for (const palette of this.palettes)`.

### 1.3 `Palettes.save()` calls undefined `Storage.setPalettes()`
**File:** `src/Experience/Utils/Palettes.js:104` · **Priority: HIGH**

```js
save() { Storage.setPalettes(this.palettes) }  // `Storage` is never imported
```
Dead stub. The real save path is `PaletteRepo.savePalettes(...)`. Palette saves on
exit are silently broken (compounds with 1.2).
**Fix:** import `PaletteRepo` and call `PaletteRepo.savePalettes(this)` (or remove
the method and call the repo directly from the one caller).

### 1.4 `Palette.removeColor()` uses `Array.pop(index)` — ignores the argument
**File:** `src/Experience/Utils/Palette.js:171` · **Priority: HIGH**

```js
removeColor(index = this.palette.length - 1) {
  this.palette.pop(index)   // pop() takes no arg; always removes the LAST element
}
```
Deleting a non-last color removes the wrong color.
**Fix:** `this.palette.splice(index, 1)`.

### 1.5 `setUniformValues()` `typeof value == Object` is always false
**File:** `src/Experience/Controllers/UtilityController.js:31` · **Priority: HIGH**

```js
if (typeof value == Object) {   // "object" == Object → always false; body never runs
```
The public `ControlsManager.setUniformValues` API is a no-op.
**Fix:** `if (value !== null && typeof value === 'object')`.

### 1.6 Duplicate `id` attribute on the palette-name input
**File:** `src/index.html:102` · **Priority: MEDIUM**

```html
<input class="control-text" id="palette-input" type="text" id="name" ...>
```
Two `id`s on one element (invalid HTML; browser keeps the first).
**Fix:** delete the vestigial `id="name"`.

### 1.7 Wrong display names for two wave shaders
**File:** `src/Experience/Shaders/noiseShaders.js:12-13` · **Priority: MEDIUM**

```js
const linearWaves = new Shader("Circle Waves", eShaders.linearWaves)  // copy-paste
const fibonacci   = new Shader("Circle Waves", eShaders.fibonacci)    // copy-paste
```
Both show "Circle Waves" in any UI bound to `shader.name`.
**Fix:** `"Linear Waves"` and `"Fibonacci"`.

### 1.8 `Camera.resize()` sets `.aspect` on an OrthographicCamera (no effect)
**File:** `src/Experience/Camera.js:32-34` · **Priority: LOW**

`OrthographicCamera` has no `aspect`; the assignment creates a dead custom property.
Aspect correction is actually handled by `Screen.resize()` via `uAspect`.
**Fix:** remove `Camera.resize()` (and its caller) or correctly update
`left/right/top/bottom` + `updateProjectionMatrix()`.

### 1.9 Settings are never persisted
**File:** `src/Experience/Utils/Settings.js` · **Priority: MEDIUM**

`exportFps`, `exportResolution`, `scrollZoomSpeed` reset to defaults every reload
even though projects/palettes persist. Likely an oversight.
**Fix:** add `Settings.save()/load()` to localStorage and call from `Experience`
init / `onBeforeUnload` (or save on each mutation in `ViewModalController`).

---

## Phase 2 — Dead code removal 🟡

Confirmed-unused code. Deleting it shrinks the surface area and removes misleading
references. (Remember: `node_modules/` and `dist/` are committed — these JS/CSS
deletions are in `src/` only and safe.)

### 2.1 Dead `numColors` uniform slot
**Files:** `eNums.js:32`, `glsl/fragment.glsl:31`, `ShaderMaterial.js:20`,
`PaletteController.js:18` · **Priority: MEDIUM**

`eNumInput.numColors` (slot 13) and `#define uNumColors uFloatPar[13]` exist, but
`uNumColors` is never read in the shader — `uPaletteLen` does the real work.
Meanwhile `ShaderMaterial.numberOfColors = 6` and `PaletteController.numberOfColors
= 5` are inconsistent and bypass the float array.
**Fix:** remove `numColors` from `eNumInput` and the GLSL define; reconcile the two
JS color-count constants to one shared source.

### 2.2 Dead DOM-binding methods on `NumberInput`
**File:** `src/Experience/Inputs/NumberInput.js:108-137` · **Priority: MEDIUM**

`linkInput()`, `linkOutput()`, `clearOutput()`, `setInputElement()`,
`setElementFromInput()` have zero callers (leftover from an old binding pattern).
**Fix:** delete all five plus the `this.output`/`this.inputElem` initializers.

### 2.3 Identical dead getters `getValue()` / `getShaderValue()`
**File:** `src/Experience/Inputs/NumberInput.js:74-83` · **Priority: MEDIUM**

Both return `this.uFloatPar[this.eId]`; neither is called externally.
**Fix:** delete both (or keep one if a caller is added later).

### 2.4 Unused imports
**Priority: LOW**
- `mandleShaders.js:4`, `noiseShaders.js:4` — `import ShaderUtility` never used.
- `Experience.js:18` — `import Project` never used.
**Fix:** remove the three imports.

### 2.5 Redundant `Render.onLoad()` re-assignment
**File:** `src/Experience/Render.js:35-37` · **Priority: MEDIUM**

`onLoad()` re-sets `this.mouse = this.experience.mouse`, already done in the
constructor (Mouse is constructed first).
**Fix:** remove `Render.onLoad()` and its call in `Experience.onLoad()`.

### 2.6 No-op `clearControls()` call
**File:** `src/Experience/Controllers/ShaderControlsController.js:24` · **Priority: MEDIUM**

`updateFromShader()` calls `this.clearControls()` with no arg, which the
`if (parentElement)` guard turns into a no-op; the real clear happens later in
`setControls()`.
**Fix:** remove the line at :24.

### 2.7 Dead `this.leftInputsContainer` + duplicate query
**File:** `src/Experience/Controllers/ShaderControlsController.js:15, 36` · **Priority: HIGH**

`getElements()` caches `#left-inputs` into a field that's never read; `setControls()`
re-queries the same element.
**Fix:** delete the unused field (or use it and drop the second query).

### 2.8 Trivial pass-through wrappers
**Files:** `ProjectRepo.js:138-141` (`getShaderSnapshot`), `PaletteRepo.js:44-47`
(`getPalettesSnapshot`) · **Priority: LOW**

One-line wrappers around `shader.getSnapshot()` / `palettes.getSnapshot()`.
**Fix:** inline at the two call sites, delete the methods.

### 2.9 Commented-out debug call + misleading debug flag
**Priority: LOW**
- `ProjectRepo.js:108` — `// this.deleteAllStorage()` noise; remove.
- `PaletteRepo.js:5` — `const debug = true` is never read; remove.

### 2.10 Dead CSS (see also Phase 5)
**Priority: MEDIUM/LOW**
- `style.css:1597-1651` — `[data-design="1..5"]` variants; `data-design` is never
  set by JS. Delete.
- `style.css:198-202` — `.header-text` (self-labeled `/* unused rn */`) + the
  `--font-height2` var that only it uses. Delete both.
- `style.css:1103-1105` — `#fractal-select` selector orphaned (real id is
  `#mode-select`). Delete or rename.
- `style.css:1379-1421` — `.tutorial-tooltip` / arrow-pointer `.tooltip-number`
  variant unused.

---

## Phase 3 — Duplication / extraction 🟢

### 3.1 Modal open/close pattern repeated 4× (8 methods)
**File:** `src/Experience/Controllers/ViewModalController.js:146-258` · **Priority: HIGH**

Settings/loader/tutorial/hotkeys all repeat the same three-line show/hide of
`viewerElement`, the modal, and `canvas`.
**Fix:** extract `_openModal(el)` / `_closeModal(el)` and track `_activeModal`; the
escape handler (`:127-140`) then collapses to one branch.

### 3.2 Pointer-drag boilerplate duplicated
**File:** `src/Experience/Controllers/KeyframeTimelineController.js:302-381`
· **Priority: MEDIUM**

`startKeyDrag` and `startScrub` repeat `setPointerCapture` + add/remove of
`pointermove`/`pointerup`/`pointercancel`.
**Fix:** extract `_startDrag(elem, event, onMove)` that owns capture and the
listener lifecycle; callers pass only the move closure.

### 3.3 Download-link pattern triplicated
**File:** `src/Experience/Repo/ProjectRepo.js:179-184, 224-228, 363-367` · **Priority: MEDIUM**

The "create `<a>`, set href/download, click, revokeObjectURL" block appears 3×
(JSON, PNG, MP4).
**Fix:** extract `static _triggerDownload(url, filename)`.

### 3.4 PaletteController DOM-rebuild & post-mutation duplication
**File:** `src/Experience/Controllers/PaletteController.js` · **Priority: MEDIUM**
- `:172-173` — `setPalette()` rebuilds the color DOM twice (`setNumberOfColors()`
  already does `remove+create`, then `refreshPaletteElements()` does it again).
  Remove the second call.
- `:98-128` — the triple `setPaletteSelectOptions()/setPaletteInputFromSelect()/
  unlockPaletteInput()` cluster repeats in 3 handlers. Extract
  `_afterPaletteMutation()`.

### 3.5 Scrollbar CSS repeated 4× (~60 lines)
**File:** `src/style.css:420-436, 500-517, 620-636, 751-761` · **Priority: MEDIUM**

Identical `-webkit-scrollbar*` blocks for `#ui-grid-l`, `.modal`, `#ui-grid-r`,
`.tp-scroll`.
**Fix:** combine into shared selector lists; promote `#1a1a1a` to a
`--clr-bg-scrollbar-track` var.

---

## Phase 4 — Consistency & architecture 🔵

### 4.1 Stop caching `this.shader` on `BaseController`
**File:** `src/Experience/Controllers/BaseController.js:27` · **Priority: HIGH**

The project convention is "always read `this.experience.shader` fresh — cached refs
go stale on mode switch," yet `BaseController` caches `this.shader`. Some controllers
then read the stale field (e.g. `ShaderControlsController.setUIfromShader`).
**Fix:** remove the cached `this.shader`; force all access through
`this.experience.shader`. (Note: `this.shaderUniforms` is a stable material
reference and is safe to keep — add a clarifying comment on why one is cached and
the other isn't.)

### 4.2 Shader lookup switch → Map
**File:** `src/Experience/Shaders/ShaderUtility.js:8-50` · **Priority: HIGH**

An 11-arm `switch` maps `eShader` int → shader object; adding a mode touches 3
files and a missing case fails silently.
**Fix:** replace with a `SHADER_MAP` object keyed by `eShaders` value; throw on
unknown id.

### 4.3 Snapshot restore by eId, not name
**File:** `src/Experience/Shaders/Shader.js:158-196` · **Priority: HIGH**

`setFromSnapshot` restores via name-string linear scan (works only because
`this.name` is a `String` object compared with `==`). Renaming any param's display
label silently breaks old saved projects. `eId` is already saved and
`setFromSnapshotByEId` already exists.
**Fix:** drive restore through `eId`; delete the name-lookup path.

### 4.4 `clone()` shares a mutable `Float32Array`
**File:** `src/Experience/Shaders/Shader.js:226` · **Priority: HIGH**

```js
newShader.uFloatPars = this.uFloatPars  // shared reference, then setInputs() writes into it
```
Only safe because `ShaderMaterial.setShader()` immediately repoints the array to the
WebGL buffer. Fragile to any call-order change.
**Fix:** `clone()` allocates a fresh `Float32Array`, copies values, then
`setInputs()`.

### 4.5 `new String(name)` wrapper object
**File:** `src/Experience/Inputs/NumberInput.js:17, 37` · **Priority: MEDIUM**

`this.name = new String(name)` creates a String *object*; `===` against primitives
fails (masked today by `==` in Shader). Ties into 4.3.
**Fix:** use the primitive `name` (or `String(name)`).

### 4.6 Centralize localStorage keys & access
**Files:** `ProjectRepo.js`, `PaletteRepo.js`, `ProjectList.js` · **Priority: MEDIUM**

Keys (`projects`, `project{id}`, `lastProject`, `palettes`) are raw literals across
two files; the projects list is written with `setItem` but read via
`localStorage.projects` property access; key strings built with inconsistent spacing.
**Fix:** a single `STORAGE_KEYS` constants object (with `project: id => 'project'+id`)
and consistent `getItem/setItem`. Normalize ids to numbers and use `===` in
`ProjectList` comparisons (`:50,67,91`).

### 4.7 Modernize base64url helpers
**File:** `src/Experience/Repo/URLShare.js:134, 142` · **Priority: MEDIUM**

`escape()`/`unescape()` are deprecated.
**Fix:** use `TextEncoder`/`TextDecoder` + `Uint8Array` for UTF-8-safe base64url.

### 4.8 Decouple ViewModal ↔ VideoExport
**Files:** `ViewModalController.js:123`, `ControlsManager.js:143` · **Priority: MEDIUM**

`ViewModalController` gets a direct `videoExportController` reference injected
post-construction, bypassing the event bus used everywhere else.
**Fix:** `ViewModalController` emits `'escapePressed'`; `ControlsManager` wires it to
`videoExport.cancelVideoExport()`.

### 4.9 Auto-pad default palettes
**File:** `src/Experience/Common/defaultPalettes.js` · **Priority: LOW**

~34 manual `new THREE.Color(0,0,0)` padding entries leak the shader's fixed slot
count into the data layer.
**Fix:** pad to `defaultPaletteLength` in `Palettes.readDefaultPalettes()` / the
`Palette` constructor.

### 4.10 Smaller consistency items
**Priority: LOW**
- `Experience.js:82,147` — `stats.update()` called twice per frame; keep the one in
  `update()`.
- `ShaderMaterial.js:36` + `glsl/fragment.glsl:44` — magic `25` duplicated;
  `Shader.js` already derives it from `Object.keys(eNumInput).length`. Use that in
  `ShaderMaterial`; cross-reference comment in GLSL (must stay a literal).
- `AnimationTimeline.js:192-206` — orphaned JSDoc: the "evaluate all tracks" doc
  sits above `toggleMute` instead of `apply()`. Re-attach.
- `ControlsManager.js:105` — `durationChanged` calls full `rebuild()`; a duration
  change doesn't alter keys, only their pixel positions. Use a targeted
  `updateKeyPositions()` instead of an O(tracks×keys) DOM teardown.
- `Mouse.js:27-28` — hardcoded `#viewer`/`#main-canvas` ids in a "utility"; accept
  them as constructor params like `Keyboard` does.
- `ProjectList.js:63-83` — confusing max-id scan; compute `Math.max` over all ids
  once before deciding to insert.
- `Palettes.js:29` — `this.length` cached but never updated after add/delete;
  replace with a `get length()` getter or use `this.palettes.length`.

---

## Phase 5 — CSS cleanup 🎨

(Dead-CSS deletions are listed in 2.10; the items below are organization.)

### 5.1 Hardcoded colors → custom properties
**File:** `src/style.css` (e.g. :424,472,505,539-542,556-557,567-570,625,756,1327)
· **Priority: LOW**

`#1a1a1a`, `rgba(0,0,0,0.4/0.6)`, `rgba(255,255,255,0.2/0.7)` recur. Promote to
`:root` vars (the codebase already leans heavily on custom properties).

### 5.2 Undefined CSS vars in tutorial styles
**File:** `src/style.css:1392-1453` · **Priority: LOW**

`var(--accent-color)` and `var(--bg-color)` are never defined in `:root`; tutorial
elements fall back to browser defaults and render wrong.
**Fix:** define them (e.g. map to `--clr-selected-input` / `--clr-bg-main`) or
inline concrete values.

### 5.3 Fragile adjacent-sibling selector (note only)
**File:** `src/style.css:382` — `#main-grid.expanded + #timeline-panel` relies on
`#timeline-panel` being the immediate next sibling. Fine today; will silently break
if anything is inserted between them. Consider a class toggled on a shared parent
instead.

## Quick-reference priority index

| Priority | Items |
|----------|-------|
| 🔴 HIGH (bugs/correctness) | 1.1, 1.2, 1.3, 1.4, 1.5 |
| 🔴 HIGH (structure) | 2.7, 3.1, 4.1, 4.2, 4.3, 4.4 |
| 🟠 MEDIUM | 1.6, 1.7, 1.9, 2.1, 2.2, 2.3, 2.5, 2.6, 2.8(low), 2.10, 3.2, 3.3, 3.4, 3.5, 4.5, 4.6, 4.7, 4.8 |
| 🟡 LOW | 1.8, 2.4, 2.9, 4.9, 4.10, 5.1, 5.2, 5.3, 6.1 |

**Recommended first PR (low-risk, high-value):** Phase 1 bugs (1.1–1.5) + the
unambiguous dead-code deletions (2.2, 2.3, 2.4, 2.7) + label fix (6.1 first bullet).
These are isolated, verifiable by inspection, and unblock correct palette save/share.
