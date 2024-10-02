
#define PI 3.1415926535897932384626433832795

uniform float uAspect;
uniform float uFocusX;
uniform float uFocusY;
uniform float uTime;
uniform float uZoom;
uniform float uIterVar;
uniform float uIterRate;
uniform float uIterBase;
uniform float uPower;
uniform int uMode;

uniform float uCx;
uniform float uCy;
uniform float uCRadius;
uniform float uCRate;
uniform float uVelocityDistortionDirection;
uniform float uVelocityDistortionAmount;

uniform float uSinJuliaXCoeff;
uniform float uSinJuliaYCoeff;

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

vec2 complexPow(vec2 z, float n){
    float theta = atan(z.y, z.x);
    float r = length( z );
    return pow(r, n) * vec2(cos(theta * n), sin(theta * n));
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
    return float(i) 
      + (mZ-4.0)*uVelocityDistortionDirection*uVelocityDistortionAmount;
}

float julia(vec2 uv, int maxIters)
{
    vec2 c = vec2(uCx, uCy) + pow(uCRadius,3.0)*vec2(cos(uTime*uCRate),sin(uTime*uCRate));

    int i;

    vec2 zn = vec2(uv.x,uv.y);
    vec2 z0 = zn;
    float mZ = dot(zn,zn);

    for (i = 0; mZ < 4.0 && i<maxIters; i++)
    {
        zn = complexPow(zn,uPower) + c;
        mZ = dot(zn,zn);
    }
    return float(i) 
      + (mZ-4.0)*uVelocityDistortionDirection*uVelocityDistortionAmount*sin(zn.y)*cos(zn.y);
}

float sinJulia(vec2 uv, int maxIters)
{
    vec2 c = vec2(uCx, uCy) + pow(uCRadius,3.0)*vec2(cos(uTime*uCRate),sin(uTime*uCRate));

    int i;

    vec2 zn = vec2(uv.x,uv.y);
    vec2 z0 = zn;
    float mZ = dot(zn,zn);

    for (i = 0; mZ < 4.0 && i<maxIters; i++)
    {
        zn.x = sin(uSinJuliaXCoeff*zn.x);
        zn.y = sin(uSinJuliaYCoeff*zn.y);
        zn = complexPow(zn,uPower) + c;
        mZ = dot(zn,zn);
    }
    return float(i) 
      + (mZ-4.0)*uVelocityDistortionDirection*uVelocityDistortionAmount;
}

void main()
{
    int iterations = int(exp(6.8*uIterBase - abs(uIterVar*3.5*cos(uTime/5.0*uIterRate))));

    vec2 focus = vec2(uFocusX,uFocusY);
    vec2 scale = vec2(uZoom); 
    float escape;   

    vec2 centerUv = vUv - vec2(0.5)*vec2(uAspect,1.0);
    vec2 scaledUv = centerUv*scale + focus;

    switch (uMode) 
    {
    case 0:
      escape = mandle(scaledUv, iterations);
      break;
    case 1:
      escape = julia(scaledUv, iterations);
      break;
    case 2:
      escape = sinJulia(scaledUv, iterations);
      break;
    }
    float arraySize =  float(uPaletteLen);
    float fMaxIters = float(iterations);
    float escapeSquish = escape/fMaxIters*(arraySize-1.0);
    int clrIndex1 = int(escapeSquish)%uPaletteLen;
    int clrIndex2 = (clrIndex1+1)%uPaletteLen;
    vec3 color1 = uPalette[clrIndex1]; 
    vec3 color2 = uPalette[clrIndex2]; 
    float mixAmount = fract(escapeSquish);
    vec3 mixedColor = mix(color1,color2,mixAmount); 

    gl_FragColor = vec4(mixedColor,1.0);

}