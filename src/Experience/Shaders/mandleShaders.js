import { eNumInput, eShaders } from "../Common/eNums"
import NumberInput from "../Inputs/NumberInput"
import Shader from "./Shader"
import ShaderUtility from "./ShaderUtility"

// ALL MANDLE AND MANDLE LIKE SHADERS HERE

// MANDLEBROT

const mandle = new Shader("Mandle", eShaders.mandle)
const julia = new Shader("Julia", eShaders.julia)
const doubleJulia = new Shader("Sin Julia", eShaders.doubleJulia)
const phoenix = new Shader("Phoenix", eShaders.phoenix)
const sphinx = new Shader("Sphinx", eShaders.sphinx)
const neuton = new Shader("Neuton", eShaders.neuton)
const burningShip = new Shader("Burning Ship", eShaders.burningShip)

const iters = new NumberInput({
  eId: eNumInput.iters,
  name: "Iterations",
  value: 0.6,
  min: 0.1,
  max: 1,
  step: 0.001,
  channelIndex: -1
})

const iters2 = new NumberInput({
  eId: eNumInput.iters2,
  name: "Iterations 2",
  value: 0.5,
  min: 0.1,
  max: 1,
  step: 0.001,
  channelIndex: -1
})

const power = new NumberInput({
  eId: eNumInput.power,
  name: "Power",
  value: 2,
  min: -30,
  max: 30,
  step: 1,
  channelIndex: -1
})

const power2 = new NumberInput({
  eId: eNumInput.power2,
  name: "Power 2",
  value: 2,
  min: -30,
  max: 30,
  step: 1,
  channelIndex: -1
})

const posX = new NumberInput({
  eId: eNumInput.posX,
  name: "Position X",
  value: -0.5,
  min: -2,
  max: 2,
  step: 0.0001,
  channelIndex: -1
})

const posY = new NumberInput({
  eId: eNumInput.posY,
  name: "Position Y",
  value: 0,
  min: -2,
  max: 2,
  step: 0.0001,
  channelIndex: -1
})

const zoom = new NumberInput({
  eId: eNumInput.zoom,
  name: "Zoom",
  value: 2.2,
  min: 0,
  max: 1,
  step: 0.01,
  channelIndex: -1
})

const rotation = new NumberInput({
  eId: eNumInput.rotation,
  name: "Rotation",
  value: 0,
  min: -Math.PI * 2,
  max: Math.PI * 2,
  step: 0.001,
  channelIndex: -1
})

// SPHINX

const itersSphinx = new NumberInput({
  eId: eNumInput.iters,
  name: "Iterations",
  value: 0.2,
  min: 0.1,
  max: 1,
  step: 0.001,
  channelIndex: -1
})

const powerSphinx = new NumberInput({
  eId: eNumInput.power,
  name: "Power",
  value: 2,
  min: -30,
  max: 30,
  step: 1,
  channelIndex: -1
})

const power2Sphinx = new NumberInput({
  eId: eNumInput.power2,
  name: "Power 2",
  value: -5,
  min: -30,
  max: 30,
  step: 1,
  channelIndex: -1
})

mandle.addGroup("Core", [iters, power, posX, posY, zoom, rotation])
julia.addGroup("Core", [iters, power, posX, posY, zoom, rotation])
doubleJulia.addGroup("Core", [iters, iters2, power, power2, posX, posY, zoom, rotation])
phoenix.addGroup("Core", [iters, power, posX, posY, zoom, rotation])
sphinx.addGroup("Core", [itersSphinx, powerSphinx, power2Sphinx, posX, posY, zoom, rotation])
neuton.addGroup("Core", [iters, power, posX, posY, zoom, rotation])
burningShip.addGroup("Core", [iters, power, posX, posY, zoom, rotation])

const cPosX = new NumberInput({
  eId: eNumInput.cPosX,
  name: "Const Position X",
  value: -0.75,
  min: -2,
  max: 2,
  step: 0.0001,
  channelIndex: -1
})

const cPosY = new NumberInput({
  eId: eNumInput.cPosY,
  name: "Const Position Y",
  value: 0.25,
  min: -2,
  max: 2,
  step: 0.0001,
  channelIndex: -1
})

const cPosX2 = new NumberInput({
  eId: eNumInput.cPosX2,
  name: "Const Position X 2",
  value: -0.75,
  min: -2,
  max: 2,
  step: 0.0001,
  channelIndex: -1
})

const cPosY2 = new NumberInput({
  eId: eNumInput.cPosY2,
  name: "Const Position Y 2",
  value: 0.25,
  min: -2,
  max: 2,
  step: 0.0001,
  channelIndex: -1
})

// Sphinx

const cPosXSphinx = new NumberInput({
  eId: eNumInput.cPosX,
  name: "Const Position X",
  value: 0.21,
  min: -4,
  max: 4,
  step: 0.0001,
  channelIndex: -1
})

const cPosYSphinx = new NumberInput({
  eId: eNumInput.cPosY,
  name: "Const Position Y",
  value: 1.05,
  min: -4,
  max: 4,
  step: 0.0001,
  channelIndex: -1
})

const cPosX2Sphinx = new NumberInput({
  eId: eNumInput.cPosX2,
  name: "Const Position X 2",
  value: -1.6,
  min: -4,
  max: 4,
  step: 0.0001,
  channelIndex: -1
})

const cPosY2Sphinx = new NumberInput({
  eId: eNumInput.cPosY2,
  name: "Const Position Y 2",
  value: -1.7,
  min: -4,
  max: 4,
  step: 0.0001,
  channelIndex: -1
})

julia.addGroup("Point", [cPosX, cPosY])
doubleJulia.addGroup("Point", [cPosX, cPosY, cPosX2, cPosY2])
phoenix.addGroup("Point", [cPosX, cPosY])
sphinx.addGroup("Point", [cPosXSphinx, cPosYSphinx, cPosX2Sphinx, cPosY2Sphinx])
neuton.addGroup("Point", [cPosX, cPosY])

const velocityDirection = new NumberInput({
  eId: eNumInput.velDir,
  name: "Velocity Direction",
  value: 0,
  min: -1,
  max: 1,
  step: 1,
  channelIndex: -1
})

const velocityAmount = new NumberInput({
  eId: eNumInput.velMag,
  name: "Velocity Amount",
  value: 0.5,
  min: 0,
  max: 5,
  step: 0.001,
  channelIndex: -1
})

mandle.addGroup("Velocity", [velocityDirection, velocityAmount])
julia.addGroup("Velocity", [velocityDirection, velocityAmount])
doubleJulia.addGroup("Velocity", [velocityDirection, velocityAmount])
phoenix.addGroup("Velocity", [velocityDirection, velocityAmount])
sphinx.addGroup("Velocity", [velocityDirection, velocityAmount])
neuton.addGroup("Velocity", [velocityDirection, velocityAmount])
burningShip.addGroup("Velocity", [velocityDirection, velocityAmount])

const sinMag = new NumberInput({
  eId: eNumInput.uSinMag,
  name: "Sin Mag",
  value: 0,
  min: 0,
  max: 1,
  step: 0.001,
  channelIndex: -1
})

const sinJuliaXCoeff = new NumberInput({
  eId: eNumInput.sinFreqX,
  name: "Sin X Frequency",
  value: 0,
  min: 0,
  max: 1,
  step: 0.001,
  channelIndex: -1
})

const sinJuliaYCoeff = new NumberInput({
  eId: eNumInput.sinFreqY,
  name: "Sin y Frequency",
  value: 0,
  min: 0.001,
  max: 1,
  step: 0.001,
  channelIndex: -1
})

julia.addGroup("Sin Offsets", [sinMag, sinJuliaXCoeff, sinJuliaYCoeff])
doubleJulia.addGroup("Sin Offsets", [sinMag, sinJuliaXCoeff, sinJuliaYCoeff])
phoenix.addGroup("Sin Offsets", [sinMag, sinJuliaXCoeff, sinJuliaYCoeff])
sphinx.addGroup("Sin Offsets", [sinMag, sinJuliaXCoeff, sinJuliaYCoeff])
neuton.addGroup("Sin Offsets", [sinMag, sinJuliaXCoeff, sinJuliaYCoeff])
burningShip.addGroup("Sin Offsets", [sinMag, sinJuliaXCoeff, sinJuliaYCoeff])

export default {
  julia: julia,
  mandle: mandle,
  doubleJulia: doubleJulia,
  phoenix: phoenix,
  neuton: neuton,
  burningShip: burningShip,
  sphinx: sphinx,
}