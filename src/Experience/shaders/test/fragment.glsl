
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
uniform bool uJulia;

uniform float uCx;
uniform float uCy;
uniform float uCRadius;
uniform float uCRate;
uniform float uVelocityDistortionDirection;
uniform float uVelocityDistortionAmount;

uniform vec3 uPalette[10]; // note that 10 is the max number of colors
uniform int uPaletteLen;

varying vec2 vUv;

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

float mandle(vec2 uv, int maxIters, vec2 inputScale, vec2 focus)
{
    vec2 centerUv = uv - vec2(0.5)*vec2(uAspect,1.0);
    vec2 scale = vec2(inputScale);
    vec2 scaledUv = centerUv*scale + focus; 
    
    int i;
    vec2 zn = vec2(scaledUv.x,scaledUv.y);
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

float julia(vec2 uv, int maxIters, vec2 inputScale, vec2 focus)
{
    vec2 centerUv = uv - vec2(0.5)*vec2(uAspect,1.0);
    vec2 scale = vec2(inputScale);
    vec2 scaledUv = centerUv*scale + focus;

    vec2 c = vec2(uCx, uCy) + pow(uCRadius,3.0)*vec2(cos(uTime*uCRate),sin(uTime*uCRate));

    int i;

    vec2 zn = vec2(scaledUv.x,scaledUv.y);
    vec2 z0 = zn;
    float mZ = dot(zn,zn);

    for (i = 0; mZ < 4.0 && i<maxIters; i++)
    {
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
    vec2 rUv = vUv;
    vec2 scale = vec2(uZoom); 
    float escape;    
    if (uJulia) 
    {
        escape = julia(rUv, iterations, scale, focus);
    }   
    else
    {
        escape = mandle(rUv, iterations, scale, focus);
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