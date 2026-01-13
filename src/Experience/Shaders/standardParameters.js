import { eNumInput } from "../Common/eNums"
import NumberInput from "../Inputs/NumberInput"

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


const colorOffset = new NumberInput({
  eId : eNumInput.colorOffset,
  name: "Color Offset",
  value: 0,
  min: 0,
  max: 10,
  step: 0.01,
  channelIndex: -1
});

const hueRotation = new NumberInput({
  eId : eNumInput.hueRotation,
  name: "Hue Rotation",
  value: 0,
  min: -4,
  max: 4,
  step: 0.01,
  channelIndex: -1
});


const colorScale = new NumberInput({
  eId : eNumInput.colorScale,
  name: "Color Scale",
  value: 1,
  min: 0.1,
  max: 5,
  step: 0.01,
  channelIndex: -1
});


export default {
    Mirror : [mirrorFoldsX, mirrorFoldsY, mirrorOffsetX, mirrorOffsetY],
    Color : [colorOffset, hueRotation, colorScale],
}