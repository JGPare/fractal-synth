
#define PI 3.1415926535897932384626433832795

uniform float uAspect;
uniform float uFocusX;
uniform float uFocusY;
uniform float uTime;
uniform float uZoom;
uniform float uIterBase;
uniform float uPower;
uniform float uRotation;
uniform float uColorOffset;

uniform float uCx;
uniform float uCy;
uniform float uVelocityDistortionDirection;
uniform float uVelocityDistortionAmount;

uniform float uSinJuliaXCoeff;
uniform float uSinJuliaYCoeff;

uniform float uAreaModX;
uniform float uAreaModY;
uniform float uAreaModXOffset;
uniform float uAreaModYOffset;

uniform int uMode;

uniform bool uAreaModOn;

uniform vec3 uPalette[10]; // note that 10 is the max number of colors
uniform int uPaletteLen;

varying vec2 vUv;


vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 437858.123449);
}

vec2 rotate(vec2 uv, float rotation, vec2 mid) 
{
    return vec2(
        cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
        cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}

//https://cdn.jsdelivr.net/npm/three@<version>/build/three.module.js
//https://cdnjs.cloudflare.com/ajax/libs/three.js/r71/three.js

vec2 complexPow(vec2 z, float n){
    float theta = atan(z.y, z.x);
    float r = length( z );
    return pow(r, n) * vec2(cos(theta * n), sin(theta * n));
}

float velocityDistort(float velocity)
{
  velocity = min(velocity,float(uPaletteLen*10));
  return velocity*uVelocityDistortionDirection*uVelocityDistortionAmount;
}

float mandle(vec2 uv, int maxIters)
{   
    int i;
    vec2 zn = vec2(uv.x,uv.y);
    vec2 z0 = zn;
    float mZ = dot(zn,zn);
    float mZprev;
    for (i = 0; mZ < 4.0 && i<maxIters; i++)
    {
        zn = complexPow(zn,uPower) + z0;
        mZprev = mZ;
        mZ = dot(zn,zn);
    }
    
    return float(i) + velocityDistort(mZ-4.0);
}

float julia(vec2 uv, int maxIters)
{
    vec2 c = vec2(uCx, uCy);

    int i;

    vec2 zn = vec2(uv.x,uv.y);
    float mZ = dot(zn,zn);

    for (i = 0; mZ < 4.0 && i<maxIters; i++)
    {
        zn = complexPow(zn,uPower) + c;
        mZ = dot(zn,zn);
    }
    return float(i) + velocityDistort(mZ-4.0);
}

float sinJulia(vec2 uv, int maxIters)
{
    vec2 c = vec2(uCx, uCy);
    int i;
    vec2 zn = vec2(uv.x,uv.y);
    vec2 z0 = zn;
    float mZ = dot(zn,zn);

    for (i = 0; mZ < 4.0 && i<maxIters; i++)
    {
        zn.x = sin(zn.x + uSinJuliaXCoeff);
        zn.y = cos(zn.y + uSinJuliaYCoeff);
        zn = complexPow(zn,uPower) + c;
        mZ = dot(zn,zn);
    }
    return float(i) + velocityDistort(mZ-4.0);
}

float burningShip(vec2 uv, int maxIters)
{   
    int i;
    vec2 zn = vec2(uv.x,uv.y);
    vec2 z0 = zn;
    float mZ = dot(zn,zn);
    float mZprev;
    for (i = 0; mZ < 4.0 && i<maxIters; i++)
    {
        zn = complexPow(abs(vec2(zn.x, -zn.y)), uPower) + z0;
        mZprev = mZ;
        mZ = dot(zn,zn);
    }
    return float(i) + velocityDistort(mZ-4.0);
}

float newton(vec2 uv, int maxIters)
{
    int i;
    vec2 c = vec2(uCx, uCy);

    vec2 zn = vec2(uv.x,uv.y);
    vec2 z0 = zn;
    float mZ = dot(zn,zn);

    for (i = 0; mZ < 4.0 && i<maxIters; i++)
    {
        zn = zn - (complexPow(zn, uPower) - vec2(1.0, 0.0)) / (3.0 * complexPow(zn, uPower - 1.0)) + c;
        mZ = dot(zn,zn);
    }
    return float(i) + velocityDistort(mZ-4.0);
}

float phoenix(vec2 uv, int maxIters)
{
    vec2 c = vec2(uCx, uCy);
    vec2 p = vec2(uSinJuliaXCoeff, uSinJuliaYCoeff);
    int i;
    vec2 zn = vec2(uv.x,uv.y);
    vec2 z1 = vec2(0.0, 0.0);
    vec2 z0 = zn;
    float mZ = dot(zn,zn);

    for (i = 0; mZ < 4.0 && i<maxIters; i++)
    {
        zn = complexPow(zn,uPower) + c + p*z1;
        z1 = zn;
        mZ = dot(zn,zn);
    }
    return float(i) + velocityDistort(mZ-4.0);
}

vec2 areaModUv(vec2 uv)
{
  float xOffsetDir = float(1 - 2*(int(floor(uv.x/(1.0/uAreaModX*uAspect)))%2));
  float yOffsetDir = float(1 - 2*(int(floor(uv.y/(1.0/uAreaModY)))%2));
  uv.x = mod(uv.x,1.0/uAreaModX*uAspect);
  uv.y = mod(uv.y,1.0/uAreaModY);
  uv.y += uAreaModYOffset*xOffsetDir;
  uv.x += uAreaModXOffset*yOffsetDir;
  return uv;
}

vec2 rotate(vec2 uv)
{
  uv.x /= uAspect; // normalize
  float s = sin(PI * uRotation);
  float c = cos(PI * uRotation);
  uv = vec2(
      uv.x * c - uv.y * s,
      uv.x * s + uv.y * c
  );
  uv.x *= uAspect; // de-normalize
  return uv;
}

float getEscape(vec2 uv, int iterations)
{
  float escape;
  switch (uMode) 
  {
    case 0:
      escape = mandle(uv, iterations);
      break;
    case 1:
      escape = julia(uv, iterations);
      break;
    case 2:
      escape = sinJulia(uv, iterations);
      break;
    case 3:
      escape = burningShip(uv, iterations);
      break;
    case 4:
      escape = newton(uv, iterations);
      break;
    case 5:
      escape = phoenix(uv, iterations);
      break;
  }
  return escape;
}

vec3 getColor(float escape, int iterations)
{
  float arraySize =  float(uPaletteLen);
  float fMaxIters = float(iterations);
  float squishNorm = escape / fMaxIters;
  float escapeNorm = squishNorm * (arraySize - 1.0);
  int clrIndex1 = int(escapeNorm+uColorOffset)%uPaletteLen;
  int clrIndex2 = (clrIndex1+1)%uPaletteLen;
  int clrIndexPrev = (clrIndex1-1)%uPaletteLen;
  vec3 color1 = uPalette[clrIndex1]; 
  vec3 color2 = uPalette[clrIndex2]; 
  vec3 colorPrev = uPalette[clrIndexPrev]; 
  float mixAmount = fract(escapeNorm);
  vec3 mixedColor = mix(color1,color2,mixAmount);
  return mixedColor;
}

void main()
{
    float iterFloat = exp(6.8*uIterBase);
    int iterations = int(iterFloat);

    int iterFloor = int(iterFloat);
    float iterFrac = fract(iterFloat);

// was having issues with jerky animation in gsap when uFocusX 
// was very small, scaling larger on the JS side seems to help
    vec2 focus = vec2(uFocusX, uFocusY);
    vec2 scale = vec2(uZoom); 

    vec2 uv = vUv;

    if (uAreaModOn)
    {
      uv = areaModUv(uv);
    }
    vec2 centerUv = uv - vec2(0.5)*vec2(uAspect,1.0);
    vec2 scaledUv = centerUv*scale + focus;

    scaledUv = rotate(scaledUv);

    float escape = getEscape(scaledUv, iterations);
    vec3 mixedColor = getColor(escape, iterations);

    if (iterations < 50)
    {
      float escapeCeil = getEscape(scaledUv, iterations+1);
      vec3 mixedColorCeil = getColor(escapeCeil, iterations+1);
      mixedColor = mix(mixedColor, mixedColorCeil, iterFrac);
    }


    gl_FragColor = vec4(mixedColor,1.0);

}