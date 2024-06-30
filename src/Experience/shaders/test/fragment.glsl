
#define PI 3.1415926535897932384626433832795

uniform float uAspect;
uniform float uFocusX;
uniform float uFocusY;
uniform float uTime;
uniform float uZoom;
uniform float uIterVar;
uniform float uIterBase;
uniform float uPower;
uniform bool uJulia;

uniform float uCx;
uniform float uCy;

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
    for (i = 0; mZ < 4.0 && i<maxIters; i++)
    {
        zn = complexPow(zn,uPower) + z0;
        mZ = dot(zn,zn);
    }
    return float(i);
}

float julia(vec2 uv, int maxIters, vec2 inputScale, vec2 focus)
{
    vec2 centerUv = uv - vec2(0.5)*vec2(uAspect,1.0);
    vec2 scale = vec2(inputScale);
    vec2 scaledUv = centerUv*scale + focus;

    vec2 c = vec2(uCx, uCy); 

    int i;

    vec2 zn = vec2(scaledUv.x,scaledUv.y);
    vec2 z0 = zn;
    float mZ = dot(zn,zn);

    for (i = 0; mZ < 4.0 && i<maxIters; i++)
    {
        zn = complexPow(zn,uPower) + c;
        mZ = dot(zn,zn);
    }
    return float(i);
}

void main()
{
    // int iterations = int((exp(6.8*abs(sin(uTime/5.0))*uIterVar+1.0)+15.0*uIterBase));
    int iterations = int(exp(6.8*uIterBase - abs(uIterVar*3.5*cos(uTime/5.0))));

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

    const float arraySize = 12.0;
    vec3 colors[int(arraySize)] = vec3[int(arraySize)](
        vec3(0.1,0.1,0.35),
        vec3(0.7,0.2,0.3),
        vec3(0.3,0.4,0.9),
        vec3(0.7,0.4,0.7),
        vec3(0.2,0.7,0.6),
        vec3(0.6,0.4,0.8),
        vec3(0.8,0.2,0.3),
        vec3(0.8,0.6,0.6),
        vec3(0.5,0.6,0.7),
        vec3(0.2,0.6,0.9),
        vec3(0.7,0.7,0.9),
        vec3(0.1,0.1,0.35) // 10
        );
    
    // const float arraySize = 4.0;
    // vec3 colors[int(arraySize)] = vec3[int(arraySize)](
    //     vec3(0.0,0.0,0.0),
    //     vec3(0.4,0.4,0.4),
    //     vec3(0.9,0.9,0.9),
    //     vec3(0.0,0.0,0.0) // 4
    //     );

    float fMaxIters = float(iterations);
    float escapeSquish = escape/fMaxIters*(arraySize);
    int clrIndex1 = int(escapeSquish);
    int clrIndex2 = int(mod(escapeSquish+1.0,arraySize));
    vec3 color1 = colors[clrIndex1]; 
    vec3 color2 = colors[clrIndex2]; 
    float mixAmount = fract(escapeSquish);
    vec3 mixedColor = mix(color1,color2,mixAmount); 

    gl_FragColor = vec4(mixedColor,1.0);

}