import { eNumInput, eShaders } from "../Common/eNums"
import NumberInput from "../Inputs/NumberInput"
import Shader from "./Shader"

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
  value : 0.75, 
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
  value : -.38, 
  min : -2, 
  max : 2, 
  step : 0.0001, 
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

mandle.addGroup("Core", [iters, power, posX, posY, zoom])
julia.addGroup("Core", [iters, power, posX, posY, zoom])
sinJulia.addGroup("Core", [iters, power, posX, posY, zoom])
phoenix.addGroup("Core", [iters, power, posX, posY, zoom])
neuton.addGroup("Core", [iters, power, posX, posY, zoom])

const cPosX = new NumberInput({
  eId : eNumInput.cPosX,
  name : "Const Position X", 
  value : 1, 
  min : -2, 
  max : 2, 
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

const mirrorFoldsX = new NumberInput({
  eId : eNumInput.mirrorFoldsX,
  name: "Mirror Folds X",
  value: 1,
  min: 1,
  max: 16,
  step: 1,
  channelIndex: -1
});

const mirrorFoldsY = new NumberInput({
  eId : eNumInput.mirrorFoldsY,
  name: "Mirror Folds Y",
  value: 1,
  min: 1,
  max: 16,
  step: 1,
  channelIndex: -1 
});

const mirrorOffsetX = new NumberInput({
  eId : eNumInput.mirrorOffsetX,
  name: "Mirror Offset X",
  value: 0,
  min: -1,
  max: 1,
  step: 0.001,
  channelIndex: -1
});

const mirrorOffsetY = new NumberInput({
  eId : eNumInput.mirrorOffsetY,
  name: "Mirror Offset Y",
  value: 0,
  min: -1,
  max: 1,
  step: 0.001,
  channelIndex: -1
});

mandle.addGroup("Mirror", [mirrorFoldsX, mirrorFoldsY, mirrorOffsetX, mirrorOffsetY])
julia.addGroup("Mirror", [mirrorFoldsX, mirrorFoldsY, mirrorOffsetX, mirrorOffsetY])
sinJulia.addGroup("Mirror", [mirrorFoldsX, mirrorFoldsY, mirrorOffsetX, mirrorOffsetY])
phoenix.addGroup("Mirror", [mirrorFoldsX, mirrorFoldsY, mirrorOffsetX, mirrorOffsetY])
neuton.addGroup("Mirror", [mirrorFoldsX, mirrorFoldsY, mirrorOffsetX, mirrorOffsetY])

const numberOfColors = new NumberInput({
  eId : eNumInput.numColors,
  name: "Number of Colors",
  value: 6,
  min: 2,
  max: 10,
  step: 1,
  channelIndex: -1
});

const colorOffset = new NumberInput({
  eId : eNumInput.colorOffset,
  name: "Color Offset",
  value: 0,
  min: 0,
  max: 10,
  step: 0.01,
  channelIndex: -1
});

mandle.addGroup("Colors", [numberOfColors, colorOffset])
julia.addGroup("Colors", [numberOfColors, colorOffset])
sinJulia.addGroup("Colors", [numberOfColors, colorOffset])
phoenix.addGroup("Colors", [numberOfColors, colorOffset])
neuton.addGroup("Colors", [numberOfColors, colorOffset])

const sinJuliaXCoeff = new NumberInput({
  eId : eNumInput.sinMagX,
  name: "Sin X Amount",
  value: 0,
  min: 0,
  max: 1,
  step: 0.001,
  channelIndex: -1
});

const sinJuliaYCoeff = new NumberInput({
  eId : eNumInput.sinMagY,
  name: "Sin y Amount",
  value: 0,
  min: 0.001,
  max: 1,
  step: 0.001,
  channelIndex: -1
});

sinJulia.addGroup("Sin Offsets", [sinJuliaXCoeff, sinJuliaYCoeff])
phoenix.addGroup("Sin Offsets", [sinJuliaXCoeff, sinJuliaYCoeff])
neuton.addGroup("Sin Offsets", [sinJuliaXCoeff, sinJuliaYCoeff])

export default {
  julia : julia,
  mandle : mandle,
  sinJulia : sinJulia,
  phoenix : phoenix,
  neuton : neuton
}