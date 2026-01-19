import { eShaders } from "../Common/eNums"
import mandleShaders from "./mandleShaders"
import noiseShaders from "./noiseShaders"
import standardParameters from "./standardParameters"

export default class ShaderUtility {

  static getShader(eShader) {
    let shader = null
    switch (eShader) {
      case eShaders.mandle:
        shader = mandleShaders.mandle
        break
      case eShaders.julia:
        shader = mandleShaders.julia
        break
      case eShaders.phoenix:
        shader = mandleShaders.phoenix
        break
      case eShaders.doubleJulia:
        shader = mandleShaders.doubleJulia
        break
      case eShaders.neuton:
        shader = mandleShaders.neuton
        break
      case eShaders.burningShip:
        shader = mandleShaders.burningShip
        break
      case eShaders.noise:
        shader = noiseShaders.noise
        break
      case eShaders.circularWaves:
        shader = noiseShaders.circularWaves
        break
      case eShaders.linearWaves:
        shader = noiseShaders.linearWaves
        break
      case eShaders.fibonacci:
        shader = noiseShaders.fibonacci
        break
      case eShaders.sphinx:
        shader = mandleShaders.sphinx
        break
      default:
        break
    }

    this.addStandardParameters(shader)
    return shader.clone()
  }

  static addStandardParameters(shader) {
    shader.addGroup("Mirror", standardParameters.Mirror)
    shader.addGroup("Color", standardParameters.Color)
  }
}
