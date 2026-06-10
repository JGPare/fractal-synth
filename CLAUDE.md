# Fractal Synth

Browser-based fractal visualization and animation tool (Three.js + WebGL, Vite, vanilla DOM UI).

## Branches

- `timeline-2`: keyframe timeline animation system (video-editor style bottom panel,
  replaces the old 5-channel GSAP system). **Pending merge back into `main`** once tested.

## Architecture notes

- `Experience.js` is a singleton orchestrator; `ControlsManager.js` wires UI controllers via events.
- EventEmitter uses `trigger(event, [args])`, not `emit()`; listeners receive the args spread.
- Animation engine lives in `src/Experience/Animation/` (`AnimationTimeline` + `KeyframeTrack`);
  it writes evaluated keyframe values into `shader.uFloatPars` each tick.
- Always read `experience.shader` fresh — cached shader references go stale on mode switches.
- `node_modules/` and `dist/` are tracked in git, so dependency changes produce large diffs.
