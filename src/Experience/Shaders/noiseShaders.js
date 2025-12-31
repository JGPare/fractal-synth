import { eNumInput, eShaders } from "../Common/eNums"
import NumberInput from "../Inputs/NumberInput"
import Shader from "./Shader"
import ShaderUtility from "./ShaderUtility"

// ALL MANDLE AND MANDLE LIKE SHADERS HERE

// MANDLEBROT

const noise = new Shader("Noise", eShaders.noise)
const circularWaves = new Shader("Circle Waves", eShaders.circularWaves)
const linearWaves = new Shader("Circle Waves", eShaders.linearWaves)

// noise
const iters = new NumberInput({
  eId : eNumInput.iters,
  name : "Color Step Size", 
  value : 10, 
  min : -100, 
  max : 100, 
  step : 0.01, 
  channelIndex : -1
})

const power = new NumberInput({
  eId : eNumInput.power,
  name : "Density", 
  value : 2, 
  min : -50, 
  max : 50, 
  step : 0.01, 
  channelIndex : -1
})

// wave

const scale1 = new NumberInput({
  eId : eNumInput.iters,
  name : "Scale 1", 
  value : 0.025, 
  min : -3, 
  max : 3, 
  step : 0.0001, 
  channelIndex : -1
})

const scale2 = new NumberInput({
  eId : eNumInput.power,
  name : "Scale 2", 
  value : 0.05, 
  min : -3, 
  max : 3, 
  step : 0.0001, 
  channelIndex : -1
})


const posX = new NumberInput({
  eId : eNumInput.posX,
  name : "Position X", 
  value : 0.1, 
  min : -1, 
  max : 1, 
  step : 0.00001, 
  channelIndex : -1
})

const posY = new NumberInput({
  eId : eNumInput.posY,
  name : "Position Y", 
  value : 0.5, 
  min : -2, 
  max : 2, 
  step : 0.0001, 
  channelIndex : -1
})

const zoom = new NumberInput({
  eId : eNumInput.zoom,
  name : "Zoom", 
  value : 0.2, 
  min : 0, 
  max : 1, 
  step : 0.01, 
  channelIndex : -1
})

noise.addGroup("Core", [iters, power, posX, posY, zoom])
circularWaves.addGroup("Core", [scale1, scale2, posX, posY, zoom])
linearWaves.addGroup("Core", [scale1, scale2, posX, posY, zoom])

const cPosX = new NumberInput({
  eId : eNumInput.cPosX,
  name : "Const Position X", 
  value : 1, 
  min : -2, 
  max : 3, 
  step : 0.0001, 
  channelIndex : -1
})

const cPosY = new NumberInput({
  eId : eNumInput.cPosY,
  name : "Const Position Y", 
  value : 0.5, 
  min : -2, 
  max : 2, 
  step : 0.0001, 
  channelIndex : -1
})

noise.addGroup("Point", [cPosX, cPosY])
circularWaves.addGroup("Point", [cPosX, cPosY])
linearWaves.addGroup("Point", [cPosX, cPosY])

const velocityDistortionDirection = new NumberInput({
  eId : eNumInput.velDistortionDir,
  name: "UV scale",
  value: 0,
  min: -5,
  max: 5,
  step: 0.0001,
  channelIndex: -1
});

const velocityDistortionAmount = new NumberInput({
  eId : eNumInput.velDistortionMag,
  name: "Mix UV",
  value: -1,
  min: 0,
  max: 1,
  step: 0.001,
  channelIndex: -1
});

noise.addGroup("Velocity Distortion", [velocityDistortionDirection, velocityDistortionAmount])

const sinXCoeff = new NumberInput({
  eId : eNumInput.sinMagX,
  name: "Sin X Amount",
  value: 0,
  min: -5,
  max: 5,
  step: 0.001,
  channelIndex: -1
});

const sinYCoeff = new NumberInput({
  eId : eNumInput.sinMagY,
  name: "Sin y Amount",
  value: 0,
  min: -5,
  max: 5,
  step: 0.001,
  channelIndex: -1
});

noise.addGroup("Sin", [sinXCoeff, sinYCoeff])
circularWaves.addGroup("Sin", [sinXCoeff, sinYCoeff])
linearWaves.addGroup("Sin", [sinXCoeff, sinYCoeff])

export default {
  noise : noise,
  circularWaves : circularWaves,
  linearWaves : linearWaves,
}
