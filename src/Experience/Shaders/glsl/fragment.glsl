
#define PI 3.1415926535897932384626433832795

// Modes
#define MANDLE 0
#define JULIA 1
#define DOUBLE_JULIA 2
#define BURNING_SHIP 3
#define NEUTON 4
#define PHOENIX 5
#define NOISE 6
#define CIRCULAR_WAVES 7
#define LINEAR_WAVES 8
#define FIBONACCI 9
#define SPHINX 10

// Must match uNumInput eNum!
#define uIters uFloatPar[0]
#define uPower uFloatPar[1]
#define uPosX uFloatPar[2]
#define uPosY uFloatPar[3]
#define uZoom uFloatPar[4]
#define uCposX uFloatPar[5]
#define uCposY uFloatPar[6]
#define uVelDir uFloatPar[7]
#define uVelMag uFloatPar[8]
#define uMirrorFoldsX uFloatPar[9]
#define uMirrorFoldsY uFloatPar[10]
#define uMirrorOffsetX uFloatPar[11]
#define uMirrorOffsetY uFloatPar[12]
#define uNumColors uFloatPar[13]
#define uColorOffset uFloatPar[14]
#define uSinFreqX uFloatPar[15]
#define uSinFreqY uFloatPar[16]
#define uRotation uFloatPar[17]
#define uHueRotation uFloatPar[18]
#define uSinMag uFloatPar[19]
#define uIters2 uFloatPar[20]
#define uColorScale uFloatPar[21]
#define spare2 uFloatPar[22]
#define spare3 uFloatPar[23]
#define spare4 uFloatPar[24]

uniform float uFloatPar[25];

uniform float uTime;
uniform float uAspect;

uniform int uMode;

uniform vec3 uPalette[10]; // Note that 10 is the max number of colors
uniform int uPaletteLen;

varying vec2 vUv;

vec2 fade(vec2 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 437858.123449);
}

vec2 rotate(vec2 uv, float rotation, vec2 mid) {
  return vec2(
    cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
    cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
  );
}

vec2 warpUv(vec2 uv, float mag, vec2 freq, vec2 offset) {
  uv += mag * vec2(sin(uv.x * freq.x + offset.x), sin(uv.y * freq.y + offset.y));
  return uv;
}

vec2 complexPow(vec2 z, float n) {
  float theta = atan(z.y, z.x);
  float r = length(z);
  return pow(r, n) * vec2(cos(theta * n), sin(theta * n));
}

vec4 permute(vec4 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float velocityDistort(float velocity) {
  float minVel = min(velocity, float(uPaletteLen * 10));
  return minVel * uVelDir * uVelMag;
}

float cnoise(vec2 P) {
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x, gy.x);
  vec2 g10 = vec2(gx.y, gy.y);
  vec2 g01 = vec2(gx.z, gy.z);
  vec2 g11 = vec2(gx.w, gy.w);
  vec4 norm = 1.79284291400159 - 0.85373472095314 *
    vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 *= norm.x;
  g01 *= norm.y;
  g10 *= norm.z;
  g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

float mandle(vec2 uv, int maxIters) {
  int i;
  vec2 zn = vec2(uv.x, uv.y);
  vec2 z0 = zn;
  float mZ = dot(zn, zn);
  float mZprev;
  for (i = 0; mZ < 4.0 && i < maxIters; i++) {
    zn = complexPow(zn, uPower) + z0;
    mZprev = mZ;
    mZ = dot(zn, zn);
  }
  return float(i) + velocityDistort(mZ - 4.0);
}

float julia(vec2 uv, int maxIters) {
  vec2 c = vec2(uCposX, uCposY);
  int i;
  vec2 zn = warpUv(uv, 0.001 * uSinMag, vec2(uSinFreqY * 10000., uSinFreqX * 10000.), vec2(0., 0.));
  float mZ = dot(zn, zn);
  for (i = 0; mZ < 4.0 && i < maxIters; i++) {
    zn = complexPow(zn, uPower) + c;
    mZ = dot(zn, zn);
  }
  return float(i) + velocityDistort(mZ - 4.0);
}

float doubleJulia(vec2 uv, int maxIters) {
  vec2 c = vec2(uCposX, uCposY);
  int i;
  vec2 zn = warpUv(uv, 0.1 * uSinMag, vec2(uSinFreqY * 10000., uSinFreqX * 10000.), vec2(0., 0.));
  vec2 z0 = zn;
  float mZ = dot(zn, zn);
  for (i = 0; mZ < 4.0 && i < maxIters; i++) {
    zn = complexPow(zn, uPower) + c;
    mZ = dot(zn, zn);
  }
  vec2 newUv = uv * zn;
  zn = newUv;
  mZ = dot(zn, zn);
  float iter2Float = exp(6.8 * uIters2);
  int maxIters2 = int(iter2Float);
  for (i = 0; mZ < 4.0 && i < maxIters2; i++) {
    zn = complexPow(zn, uPower) + c;
    mZ = dot(zn, zn);
  }
  return float(i) + velocityDistort(mZ - 4.0);
}

float burningShip(vec2 uv, int maxIters) {
  int i;
  vec2 zn = warpUv(uv, 0.1 * uSinMag, vec2(uSinFreqY * 10000., uSinFreqX * 10000.), vec2(0., 0.));
  vec2 z0 = zn;
  float mZ = dot(zn, zn);
  float mZprev;
  for (i = 0; mZ < 4.0 && i < maxIters; i++) {
    zn = complexPow(abs(vec2(zn.x, -zn.y)), uPower) + z0;
    mZprev = mZ;
    mZ = dot(zn, zn);
  }
  return float(i) + velocityDistort(mZ - 4.0);
}


float neuton(vec2 uv, int maxIters) {
  int i;
  vec2 zn = warpUv(uv, 0.1 * uSinMag, vec2(uSinFreqY * 10000., uSinFreqX * 10000.), vec2(0., 0.));
  float n = uPower;
  float tolerance = 0.000001;

  for (i = 0; i < maxIters; i++) {
    // Newton's method: z = z - f(z) / f'(z)
    // For f(z) = z^n - 1, f'(z) = n * z^(n-1)
    vec2 zn_pow = complexPow(zn, n);           // z^n
    vec2 zn_pow_m1 = complexPow(zn, n - 1.0);  // z^(n-1)

    // f(z) = z^n - c (using c parameter for offset)
    vec2 c = vec2(uCposX, uCposY);
    vec2 f = zn_pow - c;

    // f'(z) = n * z^(n-1)
    vec2 fp = n * zn_pow_m1;

    // Complex division: f / fp
    float denom = dot(fp, fp);
    if (denom < 0.0000001) break;

    vec2 quotient = vec2(
      (f.x * fp.x + f.y * fp.y) / denom,
      (f.y * fp.x - f.x * fp.y) / denom
    );

    vec2 znew = zn - quotient;

    // Check for convergence
    float diff = length(znew - zn);
    if (diff < tolerance) break;

    zn = znew;
  }

  // Color based on angle to determine which root and iteration count
  float angle = atan(zn.y, zn.x);
  return float(i) + velocityDistort(abs(angle));
}

float phoenix(vec2 uv, int maxIters) {
  vec2 c = vec2(uCposX, uCposY);
  vec2 p = vec2(uSinFreqX, uSinFreqY);
  int i;
  vec2 z1 = vec2(uv.x, uv.y);
  vec2 z2 = vec2(0.0, 0.0);
  vec2 d = vec2(0., 0.);
  vec2 d1 = vec2(1., 0.);
  vec2 d2 = vec2(0., 0.);
  float mZ = dot(z1, z1);
  for (i = 0; mZ < 4.0 && i < maxIters; i++) {
    z2 = z1;
    z1 = complexPow(z1, uPower) + c + p * z2;
    d = 2.0 * d1 * z1 + p * d2;
    d2 = d1;
    d1 = d;
    mZ = dot(z1, z1);
  }
  return float(log(abs(dot(d1, d1)))) + velocityDistort(dot(d - d2, d - d2));
}

float sphinx(vec2 uv, int maxIters) {

 vec2 c = vec2(uCposX, uCposY);
  int i;
  vec2 zn = warpUv(uv, 0.1 * uSinMag, vec2(uSinFreqY * 10000., uSinFreqX * 10000.), vec2(0., 0.));
  vec2 z0 = zn;
  float mZ = dot(zn, zn);

  for (i = 0; mZ < 4.0 && i < maxIters; i++) {
    zn = complexPow(zn, uPower) + c;
    mZ = dot(zn, zn);
  }

  vec2 newUv = uv * zn;
  float iter2Float = exp(6.8 * uIters2);
  int maxIters2 = int(iter2Float);

  zn = newUv;
  mZ = dot(zn, zn);

  for (i = 0; mZ < 4.0 && i < maxIters2; i++) {
    zn = complexPow(zn, uPower) + c;
    mZ = dot(zn, zn);
  }
  return float(i) + velocityDistort(mZ - 4.0);
}

float myNoise(vec2 uv) {
  vec2 p = vec2(uSinFreqX, uSinFreqY);
  return cnoise(uv * uCposX) + cnoise(uv * uCposY) + cnoise(p);
}

vec2 mirrorUv(vec2 uv) {
  float xOffsetDir = float(1 - 2 * (int(floor(uv.x / (1.0 / uMirrorFoldsX * uAspect))) % 2));
  float yOffsetDir = float(1 - 2 * (int(floor(uv.y / (1.0 / uMirrorFoldsY))) % 2));
  float factorX = 2. * uAspect / uMirrorFoldsX;
  float factorY = 2. / uMirrorFoldsY;
  uv.x = abs(mod(uv.x, factorX) - factorX / 2.);
  uv.x += uMirrorOffsetX * yOffsetDir;
  uv.y = abs(mod(uv.y, factorY) - factorY / 2.);
  uv.y += uMirrorOffsetY * xOffsetDir;
  return uv;
}

float getEscape(vec2 uv, int iterations) {
  float escape;
  switch (uMode) {
    case MANDLE:
      escape = mandle(uv, iterations);
      break;
    case JULIA:
      escape = julia(uv, iterations);
      break;
    case DOUBLE_JULIA:
      escape = doubleJulia(uv, iterations);
      break;
    case BURNING_SHIP:
      escape = burningShip(uv, iterations);
      break;
    case NEUTON:
      escape = neuton(uv, iterations);
      break;
    case PHOENIX:
      escape = phoenix(uv, iterations);
      break;
    case SPHINX:
      escape = sphinx(uv, iterations);
      break;
  }
  return escape;
}

float getNoiseMag(vec2 uv) {
  float mag;
  switch (uMode) {
    case NOISE:
      mag = myNoise(uv);
      break;
  }
  return mag;
}

vec3 getMixedColor(float escape, int iterations) {
  float arraySize = float(uPaletteLen);
  float fMaxIters = float(iterations);
  float squishNorm = escape / fMaxIters;
  float escapeNorm = uColorScale * squishNorm * (arraySize - 1.0);
  int clrIndex1 = int(escapeNorm + uColorOffset) % uPaletteLen;
  int clrIndex2 = (clrIndex1 + 1) % uPaletteLen;
  vec3 color1 = uPalette[clrIndex1];
  vec3 color2 = uPalette[clrIndex2];
  float mixAmount = fract(escapeNorm);
  vec3 mixedColor = mix(color1, color2, mixAmount);
  return mixedColor;
}

vec2 getScaledUV(vec2 uv, vec2 focus) {
  vec2 scale = vec2(uZoom);
  vec2 centerUv = uv - vec2(0.5 * uAspect, 0.5);
  vec2 scaledUv = centerUv * scale + focus;
  return scaledUv;
}

vec3 getEscapeFractalColor(vec2 uv) {
  float iterFloat = exp(6.8 * uIters);
  int iterations = int(iterFloat);
  float iterFrac = fract(iterFloat);
  float escape = getEscape(uv, iterations);
  vec3 mixedColor = getMixedColor(escape, iterations);
  if (iterations < 50) {
    float escapeCeil = getEscape(uv, iterations + 1);
    vec3 mixedColorCeil = getMixedColor(escapeCeil, iterations + 1);
    mixedColor = mix(mixedColor, mixedColorCeil, iterFrac);
  }
  return mixedColor;
}

vec3 getNoiseFractalColor(vec2 uv) {
  float mag = getNoiseMag(uv) * uIters * uPower;
  vec3 mixedColor = getMixedColor(mag, 100);
  return mixedColor;
}

float waveMag(vec2 uv, float freq) {
  vec2 uvFloor1 = floor(uv * freq);
  vec2 uvFloor2 = vec2(uvFloor1.x + 1., uvFloor1.y);
  vec2 uvFloor3 = vec2(uvFloor1.x, uvFloor1.y + 1.);
  vec2 uvFloor4 = vec2(uvFloor1.x + 1., uvFloor1.y + 1.);
  return distance(uv, uvFloor1 / freq) +
    distance(uv, uvFloor2 / freq) +
    distance(uv, uvFloor3 / freq) +
    distance(uv, uvFloor4 / freq);
}

vec2 toPolar(vec2 uv) {
  // Convert to polar coordinates
  float angle = atan(uv.y, uv.x);
  float radius = length(uv);
  return vec2(angle, radius);
}

vec3 getCircularWavesColor(vec2 uv) {
  uv = warpUv(uv, uSinMag, vec2(uSinFreqX, uSinFreqY), vec2(0., 0.));
  float val1 = waveMag(uv, uIters);
  float val2 = waveMag(uv, uPower);
  float val3 = waveMag(uv, uCposX);
  vec3 mixedColor = getMixedColor(sin(val1 * 0.1) + sin(val2 * 0.5) + sin(val3) + uCposY, 1);
  return mixedColor;
}

vec3 getLinearWavesColor(vec2 uv) {
  uv = warpUv(uv, uSinMag*10., vec2(uSinFreqX, uSinFreqY), vec2(0., 0.));
  float par1 = uIters*10.;
  float par2 = uPower*10.;
  float val1 = abs(sin(uv.x * par1) + sin(uv.x * par1 * 0.6 + PI / 2.) + sin(uv.x * par1 * 0.1 + 3. * PI / 2.));
  float val2 = abs(sin(uv.y * par2) + sin(uv.y * par2 * 0.6 + PI / 2.) + sin(uv.y * par2 * 0.1 + 3. * PI / 2.));
  float val3 = abs(uCposX);
  vec3 mixedColor = getMixedColor(val1 + val2 + val3, int(10. * uCposY));
  return mixedColor;
}

vec3 getFibonacciColor(vec2 uv) {
   
  float iterFloat = exp(6.8 * uIters);
  int iterations = int(iterFloat);
  float iterFrac = fract(iterFloat);

  float escape1 = phoenix(uv, iterations);
  float escape2 = doubleJulia(uv, iterations);

  float escape = mix(escape1, escape2, 0.5);

  vec3 mixedColor = getMixedColor(escape, iterations);
  if (iterations < 50) {
    float escapeCeil = getEscape(uv, iterations + 1);
    vec3 mixedColorCeil = getMixedColor(escapeCeil, iterations + 1);
    mixedColor = mix(mixedColor, mixedColorCeil, iterFrac);
  }

  return mixedColor;

}

vec3 getWavesFractalColor(vec2 uv) {
  vec3 mixedColor;
  switch (uMode) {
    case CIRCULAR_WAVES:
      mixedColor = getCircularWavesColor(uv);
      break;
    case LINEAR_WAVES:
      mixedColor = getLinearWavesColor(uv);
      break;
  }
  return mixedColor;
}

// RGB to HSV
vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

// HSV to RGB
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

// Rotate hue
vec3 rotateHue(vec3 color, float rotation) {
  vec3 hsv = rgb2hsv(color);
  hsv.x = fract(hsv.x + rotation);
  return hsv2rgb(hsv);
}

vec3 getColor(vec2 uv) {
  vec3 mixedColor;
  switch (uMode) {
    case MANDLE:
    case JULIA:
    case DOUBLE_JULIA:
    case BURNING_SHIP:
    case NEUTON:
    case PHOENIX:
    case SPHINX:
      mixedColor = getEscapeFractalColor(uv);
      break;
    case NOISE:
      mixedColor = getNoiseFractalColor(uv);
      break;
    case CIRCULAR_WAVES:
    case LINEAR_WAVES:
      mixedColor = getWavesFractalColor(uv);
      break;
    case FIBONACCI:
      mixedColor = getFibonacciColor(uv);
      break;
  }
  return mixedColor;
}

void main() {
  vec2 uv = vUv;

  if (uMirrorFoldsX > 1. || uMirrorFoldsY > 1.) {
    uv = mirrorUv(uv);
  }

  vec2 focus = vec2(uPosX, uPosY);
  uv = rotate(uv, uRotation, focus);
  vec2 scaledUv = getScaledUV(uv, focus);

  vec3 color = getColor(scaledUv);

  if (uHueRotation != 0.) {
    color = rotateHue(color, uHueRotation);
  }

  gl_FragColor = vec4(color, 1.0);
}
