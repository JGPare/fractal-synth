

// GENUARY
// LETTERS


bool inRect(vec2 pt, vec2 bl, vec2 tr)
{
  return (pt.x > bl.x &&
          pt.x < tr.x &&
          pt.y > bl.y &&
          pt.y < tr.y);
}

float letterG(vec2 uv, vec2 p0, float letterWid, float letterHei, float letterLen)
{

  float val = 0.;

  val = inRect(uv, p0, p0+vec2(letterWid,letterHei)) ? 1. : 0.;

  vec2 p1 = p0 + vec2(letterWid, letterHei-letterWid);
  val += inRect(uv, p1, p1+vec2(letterLen,letterWid)) ? 1. : 0.;

  vec2 p2 = p0 + vec2(letterWid, 0.);
  val += inRect(uv, p2, p2+vec2(letterLen,letterWid)) ? 1. : 0.;

  vec2 p3 = p2+vec2(letterLen-letterWid, letterWid);
  val += inRect(uv, p3, p3+vec2(letterWid,letterLen/2.)) ? 1. : 0.;

  vec2 p4 = p3+vec2(0, letterLen/2.);
  val += inRect(uv, p4-vec2(letterLen/4.,letterWid), p4) ? 1. : 0.;

  return val;
}

float letterE(vec2 uv, vec2 p0, float letterWid, float letterHei, float letterLen)
{

  float val = 0.;

  val = inRect(uv, p0, p0+vec2(letterWid,letterHei)) ? 1. : 0.;

  vec2 p1 = p0 + vec2(letterWid, 0);
  val += inRect(uv, p1, p1+vec2(letterLen/2.,letterWid)) ? 1. : 0.;

  vec2 p2 = p0 + vec2(letterWid, letterHei/2.-letterWid/2.);
  val += inRect(uv, p2, p2+vec2(letterLen/2.,letterWid)) ? 1. : 0.;

  vec2 p3 = p0 + vec2(letterWid, letterHei-letterWid);
  val += inRect(uv, p3, p3+vec2(letterLen/2.,letterWid)) ? 1. : 0.;

  return val;
}
float letterN(vec2 uv, vec2 p0, float letterWid, float letterHei, float letterLen)
{
  float val = 0.;
  
  // Left vertical bar
  val = inRect(uv, p0, p0+vec2(letterWid, letterHei)) ? 1. : 0.;
  
  // Right vertical bar
  vec2 p1 = p0 + vec2(letterLen - letterWid, 0.);
  val += inRect(uv, p1, p1+vec2(letterWid, letterHei)) ? 1. : 0.;
  
  // Horizontal top
  vec2 p2 = p0 + vec2(letterWid, letterHei - letterWid);
  val += inRect(uv, p2, p2+vec2(letterLen - 2.*letterWid, letterWid)) ? 1. : 0.;
  
  return val;
}

float letterU(vec2 uv, vec2 p0, float letterWid, float letterHei, float letterLen)
{
  float val = 0.;
  
  // Left vertical bar
  val = inRect(uv, p0, p0+vec2(letterWid, letterHei)) ? 1. : 0.;
  
  // Right vertical bar
  vec2 p1 = p0 + vec2(letterLen - letterWid, 0.);
  val += inRect(uv, p1, p1+vec2(letterWid, letterHei)) ? 1. : 0.;
  
  // Bottom horizontal bar
  vec2 p2 = p0 + vec2(letterWid, 0.);
  val += inRect(uv, p2, p2+vec2(letterLen - 2.*letterWid, letterWid)) ? 1. : 0.;
  
  return val;
}

float letterA(vec2 uv, vec2 p0, float letterWid, float letterHei, float letterLen)
{
  float val = 0.;
  
  // Left vertical bar
  val = inRect(uv, p0, p0+vec2(letterWid, letterHei)) ? 1. : 0.;
  
  // Right vertical bar
  vec2 p1 = p0 + vec2(letterLen - letterWid, 0.);
  val += inRect(uv, p1, p1+vec2(letterWid, letterHei)) ? 1. : 0.;
  
  // Top horizontal bar
  vec2 p2 = p0 + vec2(letterWid, letterHei - letterWid);
  val += inRect(uv, p2, p2+vec2(letterLen - 2.*letterWid, letterWid)) ? 1. : 0.;
  
  // Middle horizontal bar (crossbar)
  vec2 p3 = p0 + vec2(letterWid, letterHei/2. - letterWid/2.);
  val += inRect(uv, p3, p3+vec2(letterLen - 2.*letterWid, letterWid)) ? 1. : 0.;
  
  return val;
}

float letterR(vec2 uv, vec2 p0, float letterWid, float letterHei, float letterLen)
{
  float val = 0.;
  
  // Left vertical bar
  val = inRect(uv, p0, p0+vec2(letterWid, letterHei)) ? 1. : 0.;
  
  // Top horizontal bar
  vec2 p1 = p0 + vec2(letterWid, letterHei - letterWid);
  val += inRect(uv, p1, p1+vec2(letterLen/2., letterWid)) ? 1. : 0.;
  
  // Right vertical bar (top half)
  vec2 p2 = p1 + vec2(letterLen/2. - letterWid, 0.);
  val += inRect(uv, p2, p2+vec2(letterWid, -(letterHei/2. - letterWid))) ? 1. : 0.;
  
  // Middle horizontal bar
  vec2 p3 = p0 + vec2(letterWid, letterHei/2.);
  val += inRect(uv, p3, p3+vec2(letterLen/2., letterWid)) ? 1. : 0.;

  // Middle vertical bar
  vec2 p4 = p3 + vec2(letterLen/2., 0.);
  val += inRect(uv, p4, p4+vec2(letterWid, letterHei/2.)) ? 1. : 0.;
  
  // Diagonal leg (approximate with vertical going down-right)
  vec2 p5 = p3 + vec2(0., -letterWid);
  val += inRect(uv, p5, p5+vec2(letterWid, letterWid)) ? 1. : 0.;
  p5 += vec2(letterWid/2., -letterWid/2.);
  val += inRect(uv, p5, p5+vec2(letterWid, letterWid)) ? 1. : 0.;
  p5 += vec2(letterWid/2., -letterWid/2.);
  val += inRect(uv, p5, p5+vec2(letterWid, letterWid)) ? 1. : 0.;
  p5 += vec2(letterWid/2., -letterWid/2.);
  val += inRect(uv, p5, p5+vec2(letterWid, letterWid)) ? 1. : 0.;
  
  return val;
}

float letterY(vec2 uv, vec2 p0, float letterWid, float letterHei, float letterLen)
{
  float val = 0.;
  
  // Center vertical bar (bottom half)
  vec2 p1 = p0 + vec2((letterLen - letterWid)/2., 0.);
  val = inRect(uv, p1, p1+vec2(letterWid, letterHei/2.)) ? 1. : 0.;
  
  // Left arm (top half)
  vec2 p2 = p0 + vec2(0., letterHei/2.);
  val += inRect(uv, p2, p2+vec2(letterWid, letterHei/2.)) ? 1. : 0.;
  
  // Right arm (top half)
  vec2 p3 = p0 + vec2(letterLen - letterWid, letterHei/2.);
  val += inRect(uv, p3, p3+vec2(letterWid, letterHei/2.)) ? 1. : 0.;
  
  // Left horizontal connector to center
  vec2 p4 = p0 + vec2(letterWid, letterHei/2.);
  val += inRect(uv, p4, p4+vec2((letterLen - letterWid)/2. - letterWid, letterWid)) ? 1. : 0.;
  
  // Right horizontal connector to center
  vec2 p5 = p0 + vec2((letterLen + letterWid)/2., letterHei/2.);
  val += inRect(uv, p5, p5+vec2((letterLen - letterWid)/2. - letterWid, letterWid)) ? 1. : 0.;
  
  return val;
}


vec3 getGenuaryWord(vec2 uv)
{
  uv = warpUv(uv);

  float val = 0.;

  float letterWid = 0.05;
  float letterHei = 0.25;
  float letterLen = 0.15;
  float letterLenGap = letterLen + letterWid + 0.05;
  float letterHeiGap = letterHei + letterWid;

  for (int i = 0; i < int(uIters*20.); i++){
    val += float(i)*letterG(uv, vec2(0.1+letterLenGap*float(i), 0.1+letterHeiGap*float(i)), letterWid, letterHei, letterLen);
    val += float(i)*letterE(uv, vec2(0.1+letterLenGap+letterLenGap*float(i), 0.1+letterHeiGap*float(i)), letterWid, letterHei, letterLen);
    val += float(i)*letterN(uv, vec2(0.05+letterLenGap*2.+letterLenGap*float(i), 0.1+letterHeiGap*float(i)), letterWid, letterHei, letterLen);
    val += float(i)*letterU(uv, vec2(0.025+letterLenGap*3.+letterLenGap*float(i), 0.1+letterHeiGap*float(i)), letterWid, letterHei, letterLen);
    val += float(i)*letterA(uv, vec2(-0.02+letterLenGap*4.+letterLenGap*float(i), 0.1+letterHeiGap*float(i)), letterWid, letterHei, letterLen);
    val += float(i)*letterR(uv, vec2(-0.05+letterLenGap*5.+letterLenGap*float(i), 0.1+letterHeiGap*float(i)), letterWid, letterHei, letterLen);
    val += float(i)*letterY(uv, vec2(-0.05+letterLenGap*6.+letterLenGap*float(i), 0.1+letterHeiGap*float(i)), letterWid, letterHei, letterLen);
  }

  
  float mag = clamp(cnoise(uv*10.),0.,1.);
  mag = mag*5.*sinFreqX;
  vec3 mixedColor2 = getMixedColor(mag,2);
  vec3 mixedColor = getMixedColor(val,5);

  mixedColor = mix(mixedColor,mixedColor2,0.2);

  return mixedColor;
}