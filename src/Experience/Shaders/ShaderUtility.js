import { eShaders } from "../Common/eNums"
import mandleShaders from "./mandleShaders"
import noiseShaders from "./noiseShaders"

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
      case eShaders.sinJulia:
        shader = mandleShaders.sinJulia
        break
      case eShaders.noise:
        shader = noiseShaders.noise
        break;
      case eShaders.circularWaves:
        shader = noiseShaders.circularWaves
        break;
      case eShaders.linearWaves:
        shader = noiseShaders.linearWaves
        break;
      default:
        break
    }
    return shader
  }
}
