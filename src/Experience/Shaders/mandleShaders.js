import { eNumInput, eShaders } from "../Common/eNums"
import NumberInput from "../Inputs/NumberInput"
import Shader from "./Shader"
import ShaderUtility from "./ShaderUtility"

// ALL MANDLE AND MANDLE LIKE SHADERS HERE

// MANDLEBROT

const mandle = new Shader("Mandle", eShaders.mandle)
const julia = new Shader("Julia", eShaders.julia)
const sinJulia = new Shader("Sin Julia", eShaders.sinJulia)
const phoenix = new Shader("Phoenix", eShaders.phoenix)
const neuton = new Shader("Neuton", eShaders.neuton)

const iters = new NumberInput({
  eId : eNumInput.iters,
  name : "Iterations", 
  value : 0.6, 
  min : 0.1, 
  max : 1, 
  step : 0.001, 
  channelIndex : -1
})

const iters2 = new NumberInput({
  eId : eNumInput.iters2,
  name : "Iterations 2", 
  value : 0.5, 
  min : 0.1, 
  max : 1, 
  step : 0.001, 
  channelIndex : -1
})

const power = new NumberInput({
  eId : eNumInput.power,
  name : "Power", 
  value : 2, 
  min : -30, 
  max : 30, 
  step : 1, 
  channelIndex : -1
})

const posX = new NumberInput({
  eId : eNumInput.posX,
  name : "Position X", 
  value : -0.5, 
  min : -2, 
  max : 2, 
  step : 0.0001, 
  channelIndex : -1
})

const posY = new NumberInput({
  eId : eNumInput.posY,
  name : "Position Y", 
  value : 0, 
  min : -2, 
  max : 2, 
  step : 0.0001, 
  channelIndex : -1
})

const zoom = new NumberInput({
  eId : eNumInput.zoom,
  name : "Zoom", 
  value : 2.2, 
  min : 0, 
  max : 1, 
  step : 0.01, 
  channelIndex : -1
})

const rotation = new NumberInput({
  eId : eNumInput.rotation,
  name : "Rotation", 
  value : 0, 
  min : -Math.PI*2, 
  max : Math.PI*2, 
  step : 0.001, 
  channelIndex : -1
})

mandle.addGroup("Core", [iters, power, posX, posY, zoom, rotation])
julia.addGroup("Core", [iters, power, posX, posY, zoom, rotation])
sinJulia.addGroup("Core", [iters, power, posX, posY, zoom, rotation])
phoenix.addGroup("Core", [iters, power, posX, posY, zoom, rotation])
neuton.addGroup("Core", [iters, iters2, power, posX, posY, zoom, rotation])

const cPosX = new NumberInput({
  eId : eNumInput.cPosX,
  name : "Const Position X", 
  value : -0.75, 
  min : -2, 
  max : 2, 
  step : 0.0001, 
  channelIndex : -1
})

const cPosY = new NumberInput({
  eId : eNumInput.cPosY,
  name : "Const Position Y", 
  value : 0.25, 
  min : -2, 
  max : 2, 
  step : 0.0001, 
  channelIndex : -1
})

julia.addGroup("Point", [cPosX, cPosY])
sinJulia.addGroup("Point", [cPosX, cPosY])
phoenix.addGroup("Point", [cPosX, cPosY])
neuton.addGroup("Point", [cPosX, cPosY])

const velocityDistortionDirection = new NumberInput({
  eId : eNumInput.velDistortionDir,
  name: "Velocity Distortion Direction",
  value: 0,
  min: -1,
  max: 1,
  step: 1,
  channelIndex: -1
});

const velocityDistortionAmount = new NumberInput({
  eId : eNumInput.velDistortionMag,
  name: "Velocity Distortion Amount",
  value: 0.5,
  min: 0,
  max: 5,
  step: 0.001,
  channelIndex: -1
});

mandle.addGroup("Velocity Distortion", [velocityDistortionDirection, velocityDistortionAmount])
julia.addGroup("Velocity Distortion", [velocityDistortionDirection, velocityDistortionAmount])
sinJulia.addGroup("Velocity Distortion", [velocityDistortionDirection, velocityDistortionAmount])
phoenix.addGroup("Velocity Distortion", [velocityDistortionDirection, velocityDistortionAmount])
neuton.addGroup("Velocity Distortion", [velocityDistortionDirection, velocityDistortionAmount])


const sinMag = new NumberInput({
  eId : eNumInput.uSinMag,
  name: "Sin Mag",
  value: 0,
  min: 0,
  max: 1,
  step: 0.001,
  channelIndex: -1
});

const sinJuliaXCoeff = new NumberInput({
  eId : eNumInput.sinFreqX,
  name: "Sin X Frequency",
  value: 0,
  min: 0,
  max: 1,
  step: 0.001,
  channelIndex: -1
});

const sinJuliaYCoeff = new NumberInput({
  eId : eNumInput.sinFreqY,
  name: "Sin y Frequency",
  value: 0,
  min: 0.001,
  max: 1,
  step: 0.001,
  channelIndex: -1
});

sinJulia.addGroup("Sin Offsets", [sinMag, sinJuliaXCoeff, sinJuliaYCoeff])
phoenix.addGroup("Sin Offsets", [sinMag, sinJuliaXCoeff, sinJuliaYCoeff])
neuton.addGroup("Sin Offsets", [sinMag, sinJuliaXCoeff, sinJuliaYCoeff])

export default {
  julia : julia,
  mandle : mandle,
  sinJulia : sinJulia,
  phoenix : phoenix,
  neuton : neuton
}