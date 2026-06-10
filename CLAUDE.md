# Fractal Synth

Browser-based fractal visualization and animation tool. Explore fractal patterns
(Mandelbrot, Julia, noise, waves — 11 modes total) with real-time parameter control,
keyframe animation, palette customization, and PNG/MP4 export.

## Stack

- **Rendering**: Three.js — a single fullscreen plane whose fragment shader
  (`src/Experience/Shaders/glsl/fragment.glsl`) does all the fractal math.
  Preprocessor defines select the fractal mode; 25 float params arrive via a
  `uFloatPar` Float32Array uniform plus `uTime`, `uMode`, `uAspect`, `uPalette`.
- **UI**: vanilla DOM + CSS (no framework). Lil-GUI only for debug.
- **Animation**: custom keyframe engine in `src/Experience/Animation/` (no GSAP).
- **Video export**: WebCodecs + Mediabunny, streams MP4 to disk.
- **Build**: Vite with `vite-plugin-glsl`. ES modules throughout. No tests, no TS, no linter.

## Commands

- `npm run dev` — Vite dev server (HMR works for JS/CSS/GLSL)
- `npm run build` — production build to `dist/`
- `npm run deploy` — `vercel --prod`

## Layout

3-column grid (`#main-grid`): parameter sliders | WebGL viewer | palette controls,
with a full-width keyframe timeline panel (`#timeline-panel`) docked underneath.
Double-click the viewer for fullscreen (`.expanded` hides sidebars and the panel).

## Architecture

- `src/Experience/Experience.js` — **singleton** orchestrator. Owns Sizes, Time,
  Keyboard, AnimationTimeline, Render, Screen, ControlsManager, etc. `new Experience()`
  anywhere returns the same instance; also exposed as `window.experience` for console debugging.
- `src/Experience/ControlsManager.js` — root UI orchestrator. Instantiates the
  controllers in `src/Experience/Controllers/` (all extend `BaseController`, which
  caches Experience references) and wires them together via events.
- Render loop: `Time` ticks → `Experience.update()` → `animation.update(delta)`
  evaluates keyframe tracks into `shader.uFloatPars` → `renderer.update()`.
- Shaders: `Shader.js` holds named groups of `NumberInput`s (eId, name, value,
  min/max/step). Param identity is the `eNumInput` enum in `src/Experience/Common/eNums.js` —
  the eId indexes directly into the `uFloatPar` uniform array.
- Animation: `AnimationTimeline` (playhead, duration, loop|pingpong, Map<eId, KeyframeTrack>);
  `KeyframeTrack` holds sorted `{t, v, s}` keys, evaluated with cubic Hermite /
  Catmull-Rom tangents where per-key sharpness `s` blends toward linear (s=1 is exact linear).
  Evaluated values are clamped to the input's min/max (Hermite overshoots).
- UI for animation: `KeyframeTimelineController` (bottom panel: tracks, diamond keys,
  scrubbing, props panel) + the ◇ keyframe buttons in `ShaderControlsController`.

## Conventions & gotchas

- **EventEmitter is `trigger(name, [args])`, not `emit()`** — args are wrapped in an
  array and spread into listeners (`src/Experience/Utils/EventEmitter.js`).
- **Always read `this.experience.shader` fresh** inside handlers — cached shader
  references go stale when the mode switches (each mode is a different Shader instance).
- `NumberInput.setValue()` writes both `this.value` and the uniform; the DOM slider is
  separate and only synced explicitly (`syncSlidersToShader` during playback/scrub).
- Keyboard shortcuts (`Space` play/pause, `,`/`.` seek) are registered in
  `Experience.setKeyMappings()`; the `Keyboard` util skips them while typing in
  INPUT/SELECT/TEXTAREA. Transport buttons `blur()` after click so Space doesn't
  double-activate a focused button.
- **`node_modules/` and `dist/` are tracked in git** — dependency or build changes
  create huge diffs; keep that in mind when reviewing/committing.
- CSS uses custom properties heavily (`src/style.css` `:root`): panel sizes
  (`--timeline-panel-h`, `--tp-*`) and the channel color palette
  (`--clr-channel-1..5`, reused for timeline track colors via `data-channel` attrs).

## Persistence

- localStorage keys: `projects` (list), `project{id}` (snapshot), `lastProject`, `palettes`.
- Project snapshot: `{ name, id, shader: {eShader, paletteIndex, groups}, timeline:
  {duration, mode, tracks: [{eId, keys: [[t,v,s],...]}]} }`. Old snapshots without
  `timeline` still load their shader values (timeline just clears).
- Share URLs: state base64url-encoded into the `#share=` hash (`URLShare.js`).
  Current version `v: 2` (values + timeline); `v: 1` links restore statics only.
- JSON import/export of projects via the File menu (`ProjectRepo.js`).

## Export

- 📷 exports the current frame as PNG.
- ⏺ arms video export; the next play renders exactly **one timeline cycle**
  (duration, or 2× for ping-pong) frame-by-frame to MP4 so the video loops seamlessly.
  FPS/resolution come from Settings; Escape or ✕ cancels.

## Branches

- `timeline-2`: keyframe timeline animation system (video-editor style bottom panel,
  replaces the old 5-channel GSAP system). **Pending merge back into `main`** once tested.
