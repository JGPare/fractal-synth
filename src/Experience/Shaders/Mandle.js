import NumberInput from "../Inputs/NumberInput"
import Shader from "./Shader"

// ALL MANDLE AND MANDLE LIKE SHADERS HERE


// MANDLEBROT

const mandle = new Shader()
const julia = new Shader()

const iters = new NumberInput({
  name : "Iterations", 
  value : 0.75, 
  min : 0.1, 
  max : 1, 
  step : 0.001, 
  channel : 0
})

const power = new NumberInput({
  name : "Power", 
  value : 2, 
  min : -30, 
  max : 30, 
  step : 1, 
  channel : 0
})

mandle.addGroup("Core", [iters, power])
julia.addGroup("Core", [iters, power])

const posX = new NumberInput({
  name : "Position X", 
  value : 1, 
  min : -2, 
  max : 2, 
  step : 0.0001, 
  channel : 0
})

const posY = new NumberInput({
  name : "Position Y", 
  value : 0.5, 
  min : -2, 
  max : 2, 
  step : 0.0001, 
  channel : 0
})

julia.addGroup("Point", [posX, posY])

const velocityDistortionDirection = new NumberInput({
  name: "Velocity Distortion Direction",
  value: 0,
  min: -1,
  max: 1,
  step: 1,
  channel: 0
});

const velocityDistortionAmount = new NumberInput({
  name: "Velocity Distortion Amount",
  value: 0.5,
  min: 0,
  max: 5,
  step: 0.001,
  channel: 0
});

mandle.addGroup("Velocity Distortion", [velocityDistortionDirection, velocityDistortionAmount])
julia.addGroup("Velocity Distortion", [velocityDistortionDirection, velocityDistortionAmount])

const subdivisionX = new NumberInput({
  name: "Area Mod X Amount",
  value: 1,
  min: 1,
  max: 16,
  step: 1,
  channel: 0
});

const subdivisionY = new NumberInput({
  name: "Area Mod Y Amount",
  value: 1,
  min: 1,
  max: 16,
  step: 1,
  channel: 0  
});

const subdivisionXOffset = new NumberInput({
  name: "Area Mod X Offset",
  value: 0,
  min: -1,
  max: 1,
  step: 0.001,
  channel: 0
});

const subdivisionYOffset = new NumberInput({
  name: "Area Mod Y Offset",
  value: 0,
  min: -1,
  max: 1,
  step: 0.001,
  channel: 0
});

mandle.addGroup("Subdivision", [subdivisionX, subdivisionY, subdivisionXOffset, subdivisionYOffset])
julia.addGroup("Subdivision", [subdivisionX, subdivisionY, subdivisionXOffset, subdivisionYOffset])

const numberOfColors = new NumberInput({
  name: "Number of Colors",
  value: 6,
  min: 2,
  max: 10,
  step: 1,
  channel: 0
});

const colorOffset = new NumberInput({
  name: "Color Offset",
  value: 0,
  min: 0,
  max: 10,
  step: 0.01,
  channel: 0
});

mandle.addGroup("Colors", [numberOfColors, colorOffset])
julia.addGroup("Colors", [numberOfColors, colorOffset])

const sinJuliaXCoeff = new NumberInput({
  name: "Sin X Amount",
  value: 0,
  min: 0,
  max: 1,
  step: 0.001,
  channel: 0
});

const sinJuliaYCoeff = new NumberInput({
  name: "Sin y Amount",
  value: 0,
  min: 0.001,
  max: 1,
  step: 0.001,
  channel: 0
});

export default mandleShaders = {
  julia : julia,
  mandle : mandle
}