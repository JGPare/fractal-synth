(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const To="158",Hc=0,Ko=1,Wc=2,Fl=1,Xc=2,mn=3,Fn=0,Lt=1,sn=2,Rn=0,Ci=1,Zo=2,Jo=3,Qo=4,qc=5,qn=100,jc=101,Yc=102,ea=103,ta=104,$c=200,Kc=201,Zc=202,Jc=203,po=204,mo=205,Qc=206,eu=207,tu=208,nu=209,iu=210,su=211,ru=212,ou=213,au=214,lu=0,cu=1,uu=2,qs=3,hu=4,du=5,fu=6,pu=7,Dl=0,mu=1,gu=2,Ln=0,_u=1,vu=2,xu=3,Su=4,yu=5,Nl=300,Ri=301,Li=302,go=303,_o=304,nr=306,vo=1e3,Kt=1001,xo=1002,Ct=1003,na=1004,Ar=1005,Gt=1006,Eu=1007,es=1008,In=1009,Mu=1010,bu=1011,Ao=1012,Bl=1013,Cn=1014,Pn=1015,ts=1016,Ol=1017,kl=1018,$n=1020,wu=1021,Zt=1023,Tu=1024,Au=1025,Kn=1026,Ii=1027,Cu=1028,zl=1029,Pu=1030,Vl=1031,Gl=1033,Cr=33776,Pr=33777,Rr=33778,Lr=33779,ia=35840,sa=35841,ra=35842,oa=35843,Ru=36196,aa=37492,la=37496,ca=37808,ua=37809,ha=37810,da=37811,fa=37812,pa=37813,ma=37814,ga=37815,_a=37816,va=37817,xa=37818,Sa=37819,ya=37820,Ea=37821,Ir=36492,Ma=36494,ba=36495,Lu=36283,wa=36284,Ta=36285,Aa=36286,Hl=3e3,Zn=3001,Iu=3200,Uu=3201,Fu=0,Du=1,Ht="",_t="srgb",Sn="srgb-linear",Co="display-p3",ir="display-p3-linear",js="linear",tt="srgb",Ys="rec709",$s="p3",hi=7680,Ca=519,Nu=512,Bu=513,Ou=514,ku=515,zu=516,Vu=517,Gu=518,Hu=519,Pa=35044,Ra="300 es",So=1035,_n=2e3,Ks=2001;class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ur=Math.PI/180,yo=180/Math.PI;function os(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function Wu(n,e){return(n%e+e)%e}function Fr(n,e,t){return(1-t)*n+t*e}function La(n){return(n&n-1)===0&&n!==0}function Eo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,s,r,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],m=i[5],_=i[8],g=s[0],p=s[3],h=s[6],M=s[1],y=s[4],w=s[7],T=s[2],P=s[5],A=s[8];return r[0]=o*g+a*M+l*T,r[3]=o*p+a*y+l*P,r[6]=o*h+a*w+l*A,r[1]=c*g+u*M+d*T,r[4]=c*p+u*y+d*P,r[7]=c*h+u*w+d*A,r[2]=f*g+m*M+_*T,r[5]=f*p+m*y+_*P,r[8]=f*h+m*w+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,m=c*r-o*l,_=t*d+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(s*c-u*i)*g,e[2]=(a*i-s*o)*g,e[3]=f*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Dr.makeScale(e,t)),this}rotate(e){return this.premultiply(Dr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dr=new Ge;function Wl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xu(){const n=Zs("canvas");return n.style.display="block",n}const Ia={};function Ji(n){n in Ia||(Ia[n]=!0,console.warn(n))}const Ua=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fa=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ss={[Sn]:{transfer:js,primaries:Ys,toReference:n=>n,fromReference:n=>n},[_t]:{transfer:tt,primaries:Ys,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ir]:{transfer:js,primaries:$s,toReference:n=>n.applyMatrix3(Fa),fromReference:n=>n.applyMatrix3(Ua)},[Co]:{transfer:tt,primaries:$s,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Fa),fromReference:n=>n.applyMatrix3(Ua).convertLinearToSRGB()}},qu=new Set([Sn,ir]),Ke={enabled:!0,_workingColorSpace:Sn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!qu.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ss[e].toReference,s=Ss[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ss[n].primaries},getTransfer:function(n){return n===Ht?js:Ss[n].transfer}};function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let di;class Xl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{di===void 0&&(di=Zs("canvas")),di.width=e.width,di.height=e.height;const i=di.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ju=0;class ql{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=os(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Br(s[o].image)):r.push(Br(s[o]))}else r=Br(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Br(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yu=0;class Bt extends Bi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=Kt,s=Kt,r=Gt,o=es,a=Zt,l=In,c=Bt.DEFAULT_ANISOTROPY,u=Ht){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=os(),this.name="",this.source=new ql(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Zn?_t:Ht),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vo:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vo:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_t?Zn:Hl}set encoding(e){Ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Zn?_t:Ht}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Nl;Bt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,s=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],_=l[9],g=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,w=(m+1)/2,T=(h+1)/2,P=(u+f)/4,A=(d+g)/4,G=(_+p)/4;return y>w&&y>T?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=P/i,r=A/i):w>T?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=P/s,r=G/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=A/r,s=G/r),this.set(i,s,r,t),this}let M=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(d-g)/M,this.z=(f-u)/M,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $u extends Bi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(Ji("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Zn?_t:Ht),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Bt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ql(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends $u{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class jl extends Bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ku extends Bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class as{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==f||c!==m||u!==_){let p=1-a;const h=l*f+c*m+u*_+d*g,M=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const T=Math.sqrt(y),P=Math.atan2(T,h*M);p=Math.sin(p*P)/T,a=Math.sin(a*P)/T}const w=a*M;if(l=l*p+f*w,c=c*p+m*w,u=u*p+_*w,d=d*p+g*w,p===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*d+l*m-c*f,e[t+1]=l*_+u*f+c*d-a*m,e[t+2]=c*_+u*m+a*f-l*d,e[t+3]=u*_-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d-f*m*_;break;case"YXZ":this._x=f*u*d+c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d+f*m*_;break;case"ZXY":this._x=f*u*d-c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d-f*m*_;break;case"ZYX":this._x=f*u*d-c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d+f*m*_;break;case"YZX":this._x=f*u*d+c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d-f*m*_;break;case"XZY":this._x=f*u*d-c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Da.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Da.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Or.copy(this).projectOnVector(e),this.sub(Or)}reflect(e){return this.sub(Or.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Or=new O,Da=new as;class ls{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wt):Wt.fromBufferAttribute(r,o),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ys.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ys.copy(i.boundingBox)),ys.applyMatrix4(e.matrixWorld),this.union(ys)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qi),Es.subVectors(this.max,qi),fi.subVectors(e.a,qi),pi.subVectors(e.b,qi),mi.subVectors(e.c,qi),yn.subVectors(pi,fi),En.subVectors(mi,pi),kn.subVectors(fi,mi);let t=[0,-yn.z,yn.y,0,-En.z,En.y,0,-kn.z,kn.y,yn.z,0,-yn.x,En.z,0,-En.x,kn.z,0,-kn.x,-yn.y,yn.x,0,-En.y,En.x,0,-kn.y,kn.x,0];return!kr(t,fi,pi,mi,Es)||(t=[1,0,0,0,1,0,0,0,1],!kr(t,fi,pi,mi,Es))?!1:(Ms.crossVectors(yn,En),t=[Ms.x,Ms.y,Ms.z],kr(t,fi,pi,mi,Es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const un=[new O,new O,new O,new O,new O,new O,new O,new O],Wt=new O,ys=new ls,fi=new O,pi=new O,mi=new O,yn=new O,En=new O,kn=new O,qi=new O,Es=new O,Ms=new O,zn=new O;function kr(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){zn.fromArray(n,r);const a=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),l=e.dot(zn),c=t.dot(zn),u=i.dot(zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Zu=new ls,ji=new O,zr=new O;class Po{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zu.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ji.subVectors(e,this.center);const t=ji.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ji,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ji.copy(e.center).add(zr)),this.expandByPoint(ji.copy(e.center).sub(zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new O,Vr=new O,bs=new O,Mn=new O,Gr=new O,ws=new O,Hr=new O;class Ju{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Vr.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(Vr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(bs),a=Mn.dot(this.direction),l=-Mn.dot(bs),c=Mn.lengthSq(),u=Math.abs(1-o*o);let d,f,m,_;if(u>0)if(d=o*l-a,f=o*a-l,_=r*u,d>=0)if(f>=-_)if(f<=_){const g=1/u;d*=g,f*=g,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Vr).addScaledVector(bs,f),m}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const i=hn.dot(this.direction),s=hn.dot(hn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,i,s,r){Gr.subVectors(t,e),ws.subVectors(i,e),Hr.crossVectors(Gr,ws);let o=this.direction.dot(Hr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,e);const l=a*this.direction.dot(ws.crossVectors(Mn,ws));if(l<0)return null;const c=a*this.direction.dot(Gr.cross(Mn));if(c<0||l+c>o)return null;const u=-a*Mn.dot(Hr);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,s,r,o,a,l,c,u,d,f,m,_,g,p){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,f,m,_,g,p)}set(e,t,i,s,r,o,a,l,c,u,d,f,m,_,g,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=_,h[11]=g,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/gi.setFromMatrixColumn(e,0).length(),r=1/gi.setFromMatrixColumn(e,1).length(),o=1/gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*d,_=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,_=c*u,g=c*d;t[0]=f+g*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,_=c*u,g=c*d;t[0]=f-g*a,t[4]=-o*d,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*d,_=a*u,g=a*d;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*d,t[8]=_*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=o*u,t[9]=m*d-_,t[2]=_*d-m,t[6]=a*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qu,e,eh)}lookAt(e,t,i){const s=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),bn.crossVectors(i,Dt),bn.lengthSq()===0&&(Math.abs(i.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),bn.crossVectors(i,Dt)),bn.normalize(),Ts.crossVectors(Dt,bn),s[0]=bn.x,s[4]=Ts.x,s[8]=Dt.x,s[1]=bn.y,s[5]=Ts.y,s[9]=Dt.y,s[2]=bn.z,s[6]=Ts.z,s[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],m=i[13],_=i[2],g=i[6],p=i[10],h=i[14],M=i[3],y=i[7],w=i[11],T=i[15],P=s[0],A=s[4],G=s[8],S=s[12],b=s[1],B=s[5],q=s[9],$=s[13],R=s[2],F=s[6],X=s[10],H=s[14],J=s[3],K=s[7],Y=s[11],L=s[15];return r[0]=o*P+a*b+l*R+c*J,r[4]=o*A+a*B+l*F+c*K,r[8]=o*G+a*q+l*X+c*Y,r[12]=o*S+a*$+l*H+c*L,r[1]=u*P+d*b+f*R+m*J,r[5]=u*A+d*B+f*F+m*K,r[9]=u*G+d*q+f*X+m*Y,r[13]=u*S+d*$+f*H+m*L,r[2]=_*P+g*b+p*R+h*J,r[6]=_*A+g*B+p*F+h*K,r[10]=_*G+g*q+p*X+h*Y,r[14]=_*S+g*$+p*H+h*L,r[3]=M*P+y*b+w*R+T*J,r[7]=M*A+y*B+w*F+T*K,r[11]=M*G+y*q+w*X+T*Y,r[15]=M*S+y*$+w*H+T*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],_=e[3],g=e[7],p=e[11],h=e[15];return _*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*m-i*l*m)+g*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+p*(+t*c*d-t*a*m-r*o*d+i*o*m+r*a*u-i*c*u)+h*(-s*a*u-t*l*d+t*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],_=e[12],g=e[13],p=e[14],h=e[15],M=d*p*c-g*f*c+g*l*m-a*p*m-d*l*h+a*f*h,y=_*f*c-u*p*c-_*l*m+o*p*m+u*l*h-o*f*h,w=u*g*c-_*d*c+_*a*m-o*g*m-u*a*h+o*d*h,T=_*d*l-u*g*l-_*a*f+o*g*f+u*a*p-o*d*p,P=t*M+i*y+s*w+r*T;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return e[0]=M*A,e[1]=(g*f*r-d*p*r-g*s*m+i*p*m+d*s*h-i*f*h)*A,e[2]=(a*p*r-g*l*r+g*s*c-i*p*c-a*s*h+i*l*h)*A,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*m-i*l*m)*A,e[4]=y*A,e[5]=(u*p*r-_*f*r+_*s*m-t*p*m-u*s*h+t*f*h)*A,e[6]=(_*l*r-o*p*r-_*s*c+t*p*c+o*s*h-t*l*h)*A,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*m+t*l*m)*A,e[8]=w*A,e[9]=(_*d*r-u*g*r-_*i*m+t*g*m+u*i*h-t*d*h)*A,e[10]=(o*g*r-_*a*r+_*i*c-t*g*c-o*i*h+t*a*h)*A,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*m-t*a*m)*A,e[12]=T*A,e[13]=(u*g*s-_*d*s+_*i*f-t*g*f-u*i*p+t*d*p)*A,e[14]=(_*a*s-o*g*s-_*i*l+t*g*l+o*i*p-t*a*p)*A,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,m=r*u,_=r*d,g=o*u,p=o*d,h=a*d,M=l*c,y=l*u,w=l*d,T=i.x,P=i.y,A=i.z;return s[0]=(1-(g+h))*T,s[1]=(m+w)*T,s[2]=(_-y)*T,s[3]=0,s[4]=(m-w)*P,s[5]=(1-(f+h))*P,s[6]=(p+M)*P,s[7]=0,s[8]=(_+y)*A,s[9]=(p-M)*A,s[10]=(1-(f+g))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=gi.set(s[0],s[1],s[2]).length();const o=gi.set(s[4],s[5],s[6]).length(),a=gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xt.copy(this);const c=1/r,u=1/o,d=1/a;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=u,Xt.elements[5]*=u,Xt.elements[6]*=u,Xt.elements[8]*=d,Xt.elements[9]*=d,Xt.elements[10]*=d,t.setFromRotationMatrix(Xt),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=_n){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let m,_;if(a===_n)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ks)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=_n){const l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(o-r),f=(t+e)*c,m=(i+s)*u;let _,g;if(a===_n)_=(o+r)*d,g=-2*d;else if(a===Ks)_=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const gi=new O,Xt=new xt,Qu=new O(0,0,0),eh=new O(1,1,1),bn=new O,Ts=new O,Dt=new O,Na=new xt,Ba=new as;class sr{constructor(e=0,t=0,i=0,s=sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Na.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Na,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ba.setFromEuler(this),this.setFromQuaternion(Ba,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sr.DEFAULT_ORDER="XYZ";class Yl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let th=0;const Oa=new O,_i=new as,dn=new xt,As=new O,Yi=new O,nh=new O,ih=new as,ka=new O(1,0,0),za=new O(0,1,0),Va=new O(0,0,1),sh={type:"added"},rh={type:"removed"};class Ot extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new O,t=new sr,i=new as,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ge}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(ka,e)}rotateY(e){return this.rotateOnAxis(za,e)}rotateZ(e){return this.rotateOnAxis(Va,e)}translateOnAxis(e,t){return Oa.copy(e).applyQuaternion(this.quaternion),this.position.add(Oa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ka,e)}translateY(e){return this.translateOnAxis(za,e)}translateZ(e){return this.translateOnAxis(Va,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?As.copy(e):As.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Yi,As,this.up):dn.lookAt(As,Yi,this.up),this.quaternion.setFromRotationMatrix(dn),s&&(dn.extractRotation(s.matrixWorld),_i.setFromRotationMatrix(dn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,nh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,ih,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ot.DEFAULT_UP=new O(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new O,fn=new O,Wr=new O,pn=new O,vi=new O,xi=new O,Ga=new O,Xr=new O,qr=new O,jr=new O;let Cs=!1;class Yt{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),qt.subVectors(e,t),s.cross(qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){qt.subVectors(s,t),fn.subVectors(i,t),Wr.subVectors(e,t);const o=qt.dot(qt),a=qt.dot(fn),l=qt.dot(Wr),c=fn.dot(fn),u=fn.dot(Wr),d=o*c-a*a;if(d===0)return r.set(-2,-1,-1);const f=1/d,m=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,pn),pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getUV(e,t,i,s,r,o,a,l){return Cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cs=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,pn),l.setScalar(0),l.addScaledVector(r,pn.x),l.addScaledVector(o,pn.y),l.addScaledVector(a,pn.z),l}static isFrontFacing(e,t,i,s){return qt.subVectors(i,t),fn.subVectors(e,t),qt.cross(fn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),qt.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cs=!0),Yt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return Yt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;vi.subVectors(s,i),xi.subVectors(r,i),Xr.subVectors(e,i);const l=vi.dot(Xr),c=xi.dot(Xr);if(l<=0&&c<=0)return t.copy(i);qr.subVectors(e,s);const u=vi.dot(qr),d=xi.dot(qr);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(vi,o);jr.subVectors(e,r);const m=vi.dot(jr),_=xi.dot(jr);if(_>=0&&m<=_)return t.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(xi,a);const p=u*_-m*d;if(p<=0&&d-u>=0&&m-_>=0)return Ga.subVectors(r,s),a=(d-u)/(d-u+(m-_)),t.copy(s).addScaledVector(Ga,a);const h=1/(p+g+f);return o=g*h,a=f*h,t.copy(i).addScaledVector(vi,o).addScaledVector(xi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function Yr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class j{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=Wu(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Yr(o,r,e+1/3),this.g=Yr(o,r,e),this.b=Yr(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=_t){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const i=$l[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return Ke.fromWorkingColorSpace(Et.copy(this),e),Math.round(Rt(Et.r*255,0,255))*65536+Math.round(Rt(Et.g*255,0,255))*256+Math.round(Rt(Et.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Et.copy(this),t);const i=Et.r,s=Et.g,r=Et.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=_t){Ke.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,i=Et.g,s=Et.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(Ps);const i=Fr(wn.h,Ps.h,t),s=Fr(wn.s,Ps.s,t),r=Fr(wn.l,Ps.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new j;j.NAMES=$l;let oh=0;class rr extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=os(),this.name="",this.type="Material",this.blending=Ci,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=po,this.blendDst=mo,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ca,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(i.blending=this.blending),this.side!==Fn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==po&&(i.blendSrc=this.blendSrc),this.blendDst!==mo&&(i.blendDst=this.blendDst),this.blendEquation!==qn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ca&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kl extends rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new O,Rs=new Qe;class on{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pa,this.updateRange={offset:0,count:-1},this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix3(e),this.setXY(t,Rs.x,Rs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Zl extends on{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Jl extends on{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Jn extends on{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ah=0;const Vt=new xt,$r=new Ot,Si=new O,Nt=new ls,$i=new ls,mt=new O;class ti extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wl(e)?Jl:Zl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,i){return Vt.makeTranslation(e,t,i),this.applyMatrix4(Vt),this}scale(e,t,i){return Vt.makeScale(e,t,i),this.applyMatrix4(Vt),this}lookAt(e){return $r.lookAt(e),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Jn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];$i.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Nt.min,$i.min),Nt.expandByPoint(mt),mt.addVectors(Nt.max,$i.max),Nt.expandByPoint(mt)):(Nt.expandByPoint($i.min),Nt.expandByPoint($i.max))}Nt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)mt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(mt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&(Si.fromBufferAttribute(e,c),mt.add(Si)),s=Math.max(s,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new O,u[b]=new O;const d=new O,f=new O,m=new O,_=new Qe,g=new Qe,p=new Qe,h=new O,M=new O;function y(b,B,q){d.fromArray(s,b*3),f.fromArray(s,B*3),m.fromArray(s,q*3),_.fromArray(o,b*2),g.fromArray(o,B*2),p.fromArray(o,q*2),f.sub(d),m.sub(d),g.sub(_),p.sub(_);const $=1/(g.x*p.y-p.x*g.y);isFinite($)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar($),M.copy(m).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar($),c[b].add(h),c[B].add(h),c[q].add(h),u[b].add(M),u[B].add(M),u[q].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let b=0,B=w.length;b<B;++b){const q=w[b],$=q.start,R=q.count;for(let F=$,X=$+R;F<X;F+=3)y(i[F+0],i[F+1],i[F+2])}const T=new O,P=new O,A=new O,G=new O;function S(b){A.fromArray(r,b*3),G.copy(A);const B=c[b];T.copy(B),T.sub(A.multiplyScalar(A.dot(B))).normalize(),P.crossVectors(G,B);const $=P.dot(u[b])<0?-1:1;l[b*4]=T.x,l[b*4+1]=T.y,l[b*4+2]=T.z,l[b*4+3]=$}for(let b=0,B=w.length;b<B;++b){const q=w[b],$=q.start,R=q.count;for(let F=$,X=$+R;F<X;F+=3)S(i[F+0]),S(i[F+1]),S(i[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let h=0;h<u;h++)f[_++]=c[m++]}return new on(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ti,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ha=new xt,Vn=new Ju,Ls=new Po,Wa=new O,yi=new O,Ei=new O,Mi=new O,Kr=new O,Is=new O,Us=new Qe,Fs=new Qe,Ds=new Qe,Xa=new O,qa=new O,ja=new O,Ns=new O,Bs=new O;class vn extends Ot{constructor(e=new ti,t=new Kl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Is.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Kr.fromBufferAttribute(d,e),o?Is.addScaledVector(Kr,u):Is.addScaledVector(Kr.sub(t),u))}t.add(Is)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(r),Vn.copy(e.ray).recast(e.near),!(Ls.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Ls,Wa)===null||Vn.origin.distanceToSquared(Wa)>(e.far-e.near)**2))&&(Ha.copy(r).invert(),Vn.copy(e.ray).applyMatrix4(Ha),!(i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],h=o[p.materialIndex],M=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let w=M,T=y;w<T;w+=3){const P=a.getX(w),A=a.getX(w+1),G=a.getX(w+2);s=Os(this,h,e,i,c,u,d,P,A,G),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const M=a.getX(p),y=a.getX(p+1),w=a.getX(p+2);s=Os(this,o,e,i,c,u,d,M,y,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],h=o[p.materialIndex],M=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=M,T=y;w<T;w+=3){const P=w,A=w+1,G=w+2;s=Os(this,h,e,i,c,u,d,P,A,G),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const M=p,y=p+1,w=p+2;s=Os(this,o,e,i,c,u,d,M,y,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function lh(n,e,t,i,s,r,o,a){let l;if(e.side===Lt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Fn,a),l===null)return null;Bs.copy(a),Bs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Bs);return c<t.near||c>t.far?null:{distance:c,point:Bs.clone(),object:n}}function Os(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,yi),n.getVertexPosition(l,Ei),n.getVertexPosition(c,Mi);const u=lh(n,e,t,i,yi,Ei,Mi,Ns);if(u){s&&(Us.fromBufferAttribute(s,a),Fs.fromBufferAttribute(s,l),Ds.fromBufferAttribute(s,c),u.uv=Yt.getInterpolation(Ns,yi,Ei,Mi,Us,Fs,Ds,new Qe)),r&&(Us.fromBufferAttribute(r,a),Fs.fromBufferAttribute(r,l),Ds.fromBufferAttribute(r,c),u.uv1=Yt.getInterpolation(Ns,yi,Ei,Mi,Us,Fs,Ds,new Qe),u.uv2=u.uv1),o&&(Xa.fromBufferAttribute(o,a),qa.fromBufferAttribute(o,l),ja.fromBufferAttribute(o,c),u.normal=Yt.getInterpolation(Ns,yi,Ei,Mi,Xa,qa,ja,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};Yt.getNormal(yi,Ei,Mi,d.normal),u.face=d}return u}class cs extends ti{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Jn(c,3)),this.setAttribute("normal",new Jn(u,3)),this.setAttribute("uv",new Jn(d,2));function _(g,p,h,M,y,w,T,P,A,G,S){const b=w/A,B=T/G,q=w/2,$=T/2,R=P/2,F=A+1,X=G+1;let H=0,J=0;const K=new O;for(let Y=0;Y<X;Y++){const L=Y*B-$;for(let V=0;V<F;V++){const ce=V*b-q;K[g]=ce*M,K[p]=L*y,K[h]=R,c.push(K.x,K.y,K.z),K[g]=0,K[p]=0,K[h]=P>0?1:-1,u.push(K.x,K.y,K.z),d.push(V/A),d.push(1-Y/G),H+=1}}for(let Y=0;Y<G;Y++)for(let L=0;L<A;L++){const V=f+L+F*Y,ce=f+L+F*(Y+1),de=f+(L+1)+F*(Y+1),me=f+(L+1)+F*Y;l.push(V,ce,me),l.push(ce,de,me),J+=6}a.addGroup(m,J,S),m+=J,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ui(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Tt(n){const e={};for(let t=0;t<n.length;t++){const i=Ui(n[t]);for(const s in i)e[s]=i[s]}return e}function ch(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ql(n){return n.getRenderTarget()===null?n.outputColorSpace:Ke.workingColorSpace}const uh={clone:Ui,merge:Tt};var hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;let Dn=class extends rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hh,this.fragmentShader=dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=ch(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ec=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=_n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class $t extends ec{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bi=-90,wi=1;class fh extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $t(bi,wi,e,t);s.layers=this.layers,this.add(s);const r=new $t(bi,wi,e,t);r.layers=this.layers,this.add(r);const o=new $t(bi,wi,e,t);o.layers=this.layers,this.add(o);const a=new $t(bi,wi,e,t);a.layers=this.layers,this.add(a);const l=new $t(bi,wi,e,t);l.layers=this.layers,this.add(l);const c=new $t(bi,wi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===_n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class tc extends Bt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ri,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ph extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Ji("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Zn?_t:Ht),this.texture=new tc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new cs(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:Ui(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Lt,blending:Rn});r.uniforms.tEquirect.value=t;const o=new vn(s,r),a=t.minFilter;return t.minFilter===es&&(t.minFilter=Gt),new fh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Zr=new O,mh=new O,gh=new Ge;class Wn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Zr.subVectors(i,t).cross(mh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Zr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||gh.getNormalMatrix(e),s=this.coplanarPoint(Zr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new Po,ks=new O;class nc{constructor(e=new Wn,t=new Wn,i=new Wn,s=new Wn,r=new Wn,o=new Wn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_n){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],m=s[8],_=s[9],g=s[10],p=s[11],h=s[12],M=s[13],y=s[14],w=s[15];if(i[0].setComponents(l-r,f-c,p-m,w-h).normalize(),i[1].setComponents(l+r,f+c,p+m,w+h).normalize(),i[2].setComponents(l+o,f+u,p+_,w+M).normalize(),i[3].setComponents(l-o,f-u,p-_,w-M).normalize(),i[4].setComponents(l-a,f-d,p-g,w-y).normalize(),t===_n)i[5].setComponents(l+a,f+d,p+g,w+y).normalize();else if(t===Ks)i[5].setComponents(a,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ks.x=s.normal.x>0?e.max.x:e.min.x,ks.y=s.normal.y>0?e.max.y:e.min.y,ks.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ic(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function _h(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const d=c.array,f=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,d){const f=u.array,m=u.updateRange;n.bindBuffer(d,c),m.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,s(c,u)):d.version<c.version&&(r(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class or extends ti{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,m=[],_=[],g=[],p=[];for(let h=0;h<u;h++){const M=h*f-o;for(let y=0;y<c;y++){const w=y*d-r;_.push(w,-M,0),g.push(0,0,1),p.push(y/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let M=0;M<a;M++){const y=M+c*h,w=M+c*(h+1),T=M+1+c*(h+1),P=M+1+c*h;m.push(y,w,P),m.push(w,T,P)}this.setIndex(m),this.setAttribute("position",new Jn(_,3)),this.setAttribute("normal",new Jn(g,3)),this.setAttribute("uv",new Jn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.width,e.height,e.widthSegments,e.heightSegments)}}var vh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Th=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ah=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ch=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ph=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,kh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",jh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Yh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$h=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,id=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ld=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ud=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,md=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ed=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Td=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ld=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Id=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Od=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ef=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,of=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,af=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_f=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,bf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rf=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Df=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Of=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:vh,alphahash_pars_fragment:xh,alphamap_fragment:Sh,alphamap_pars_fragment:yh,alphatest_fragment:Eh,alphatest_pars_fragment:Mh,aomap_fragment:bh,aomap_pars_fragment:wh,begin_vertex:Th,beginnormal_vertex:Ah,bsdfs:Ch,iridescence_fragment:Ph,bumpmap_pars_fragment:Rh,clipping_planes_fragment:Lh,clipping_planes_pars_fragment:Ih,clipping_planes_pars_vertex:Uh,clipping_planes_vertex:Fh,color_fragment:Dh,color_pars_fragment:Nh,color_pars_vertex:Bh,color_vertex:Oh,common:kh,cube_uv_reflection_fragment:zh,defaultnormal_vertex:Vh,displacementmap_pars_vertex:Gh,displacementmap_vertex:Hh,emissivemap_fragment:Wh,emissivemap_pars_fragment:Xh,colorspace_fragment:qh,colorspace_pars_fragment:jh,envmap_fragment:Yh,envmap_common_pars_fragment:$h,envmap_pars_fragment:Kh,envmap_pars_vertex:Zh,envmap_physical_pars_fragment:cd,envmap_vertex:Jh,fog_vertex:Qh,fog_pars_vertex:ed,fog_fragment:td,fog_pars_fragment:nd,gradientmap_pars_fragment:id,lightmap_fragment:sd,lightmap_pars_fragment:rd,lights_lambert_fragment:od,lights_lambert_pars_fragment:ad,lights_pars_begin:ld,lights_toon_fragment:ud,lights_toon_pars_fragment:hd,lights_phong_fragment:dd,lights_phong_pars_fragment:fd,lights_physical_fragment:pd,lights_physical_pars_fragment:md,lights_fragment_begin:gd,lights_fragment_maps:_d,lights_fragment_end:vd,logdepthbuf_fragment:xd,logdepthbuf_pars_fragment:Sd,logdepthbuf_pars_vertex:yd,logdepthbuf_vertex:Ed,map_fragment:Md,map_pars_fragment:bd,map_particle_fragment:wd,map_particle_pars_fragment:Td,metalnessmap_fragment:Ad,metalnessmap_pars_fragment:Cd,morphcolor_vertex:Pd,morphnormal_vertex:Rd,morphtarget_pars_vertex:Ld,morphtarget_vertex:Id,normal_fragment_begin:Ud,normal_fragment_maps:Fd,normal_pars_fragment:Dd,normal_pars_vertex:Nd,normal_vertex:Bd,normalmap_pars_fragment:Od,clearcoat_normal_fragment_begin:kd,clearcoat_normal_fragment_maps:zd,clearcoat_pars_fragment:Vd,iridescence_pars_fragment:Gd,opaque_fragment:Hd,packing:Wd,premultiplied_alpha_fragment:Xd,project_vertex:qd,dithering_fragment:jd,dithering_pars_fragment:Yd,roughnessmap_fragment:$d,roughnessmap_pars_fragment:Kd,shadowmap_pars_fragment:Zd,shadowmap_pars_vertex:Jd,shadowmap_vertex:Qd,shadowmask_pars_fragment:ef,skinbase_vertex:tf,skinning_pars_vertex:nf,skinning_vertex:sf,skinnormal_vertex:rf,specularmap_fragment:of,specularmap_pars_fragment:af,tonemapping_fragment:lf,tonemapping_pars_fragment:cf,transmission_fragment:uf,transmission_pars_fragment:hf,uv_pars_fragment:df,uv_pars_vertex:ff,uv_vertex:pf,worldpos_vertex:mf,background_vert:gf,background_frag:_f,backgroundCube_vert:vf,backgroundCube_frag:xf,cube_vert:Sf,cube_frag:yf,depth_vert:Ef,depth_frag:Mf,distanceRGBA_vert:bf,distanceRGBA_frag:wf,equirect_vert:Tf,equirect_frag:Af,linedashed_vert:Cf,linedashed_frag:Pf,meshbasic_vert:Rf,meshbasic_frag:Lf,meshlambert_vert:If,meshlambert_frag:Uf,meshmatcap_vert:Ff,meshmatcap_frag:Df,meshnormal_vert:Nf,meshnormal_frag:Bf,meshphong_vert:Of,meshphong_frag:kf,meshphysical_vert:zf,meshphysical_frag:Vf,meshtoon_vert:Gf,meshtoon_frag:Hf,points_vert:Wf,points_frag:Xf,shadow_vert:qf,shadow_frag:jf,sprite_vert:Yf,sprite_frag:$f},ae={common:{diffuse:{value:new j(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new j(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new j(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},nn={basic:{uniforms:Tt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Tt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new j(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Tt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new j(0)},specular:{value:new j(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Tt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new j(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Tt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new j(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Tt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Tt([ae.points,ae.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Tt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Tt([ae.common,ae.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Tt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Tt([ae.sprite,ae.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Tt([ae.common,ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Tt([ae.lights,ae.fog,{color:{value:new j(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};nn.physical={uniforms:Tt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new j(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new j(0)},specularColor:{value:new j(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const zs={r:0,b:0,g:0};function Kf(n,e,t,i,s,r,o){const a=new j(0);let l=r===!0?0:1,c,u,d=null,f=0,m=null;function _(p,h){let M=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=(h.backgroundBlurriness>0?t:e).get(y)),y===null?g(a,l):y&&y.isColor&&(g(y,1),M=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===nr)?(u===void 0&&(u=new vn(new cs(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Ui(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,P,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(y.colorSpace)!==tt,(d!==y||f!==y.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new vn(new or(2,2),new Dn({name:"BackgroundMaterial",uniforms:Ui(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(y.colorSpace)!==tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,h){p.getRGB(zs,Ql(n)),i.buffers.color.setClear(zs.r,zs.g,zs.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(p,h=1){a.set(p),l=h,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function Zf(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function d(R,F,X,H,J){let K=!1;if(o){const Y=g(H,X,F);c!==Y&&(c=Y,m(c.object)),K=h(R,H,X,J),K&&M(R,H,X,J)}else{const Y=F.wireframe===!0;(c.geometry!==H.id||c.program!==X.id||c.wireframe!==Y)&&(c.geometry=H.id,c.program=X.id,c.wireframe=Y,K=!0)}J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,G(R,F,X,H),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(R){return i.isWebGL2?n.bindVertexArray(R):r.bindVertexArrayOES(R)}function _(R){return i.isWebGL2?n.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function g(R,F,X){const H=X.wireframe===!0;let J=a[R.id];J===void 0&&(J={},a[R.id]=J);let K=J[F.id];K===void 0&&(K={},J[F.id]=K);let Y=K[H];return Y===void 0&&(Y=p(f()),K[H]=Y),Y}function p(R){const F=[],X=[],H=[];for(let J=0;J<s;J++)F[J]=0,X[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:H,object:R,attributes:{},index:null}}function h(R,F,X,H){const J=c.attributes,K=F.attributes;let Y=0;const L=X.getAttributes();for(const V in L)if(L[V].location>=0){const de=J[V];let me=K[V];if(me===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(me=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(me=R.instanceColor)),de===void 0||de.attribute!==me||me&&de.data!==me.data)return!0;Y++}return c.attributesNum!==Y||c.index!==H}function M(R,F,X,H){const J={},K=F.attributes;let Y=0;const L=X.getAttributes();for(const V in L)if(L[V].location>=0){let de=K[V];de===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(de=R.instanceColor));const me={};me.attribute=de,de&&de.data&&(me.data=de.data),J[V]=me,Y++}c.attributes=J,c.attributesNum=Y,c.index=H}function y(){const R=c.newAttributes;for(let F=0,X=R.length;F<X;F++)R[F]=0}function w(R){T(R,0)}function T(R,F){const X=c.newAttributes,H=c.enabledAttributes,J=c.attributeDivisors;X[R]=1,H[R]===0&&(n.enableVertexAttribArray(R),H[R]=1),J[R]!==F&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,F),J[R]=F)}function P(){const R=c.newAttributes,F=c.enabledAttributes;for(let X=0,H=F.length;X<H;X++)F[X]!==R[X]&&(n.disableVertexAttribArray(X),F[X]=0)}function A(R,F,X,H,J,K,Y){Y===!0?n.vertexAttribIPointer(R,F,X,J,K):n.vertexAttribPointer(R,F,X,H,J,K)}function G(R,F,X,H){if(i.isWebGL2===!1&&(R.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const J=H.attributes,K=X.getAttributes(),Y=F.defaultAttributeValues;for(const L in K){const V=K[L];if(V.location>=0){let ce=J[L];if(ce===void 0&&(L==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),L==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),ce!==void 0){const de=ce.normalized,me=ce.itemSize,Te=t.get(ce);if(Te===void 0)continue;const We=Te.buffer,Le=Te.type,Ne=Te.bytesPerElement,it=i.isWebGL2===!0&&(Le===n.INT||Le===n.UNSIGNED_INT||ce.gpuType===Bl);if(ce.isInterleavedBufferAttribute){const ke=ce.data,U=ke.stride,It=ce.offset;if(ke.isInstancedInterleavedBuffer){for(let ye=0;ye<V.locationSize;ye++)T(V.location+ye,ke.meshPerAttribute);R.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let ye=0;ye<V.locationSize;ye++)w(V.location+ye);n.bindBuffer(n.ARRAY_BUFFER,We);for(let ye=0;ye<V.locationSize;ye++)A(V.location+ye,me/V.locationSize,Le,de,U*Ne,(It+me/V.locationSize*ye)*Ne,it)}else{if(ce.isInstancedBufferAttribute){for(let ke=0;ke<V.locationSize;ke++)T(V.location+ke,ce.meshPerAttribute);R.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ke=0;ke<V.locationSize;ke++)w(V.location+ke);n.bindBuffer(n.ARRAY_BUFFER,We);for(let ke=0;ke<V.locationSize;ke++)A(V.location+ke,me/V.locationSize,Le,de,me*Ne,me/V.locationSize*ke*Ne,it)}}else if(Y!==void 0){const de=Y[L];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(V.location,de);break;case 3:n.vertexAttrib3fv(V.location,de);break;case 4:n.vertexAttrib4fv(V.location,de);break;default:n.vertexAttrib1fv(V.location,de)}}}}P()}function S(){q();for(const R in a){const F=a[R];for(const X in F){const H=F[X];for(const J in H)_(H[J].object),delete H[J];delete F[X]}delete a[R]}}function b(R){if(a[R.id]===void 0)return;const F=a[R.id];for(const X in F){const H=F[X];for(const J in H)_(H[J].object),delete H[J];delete F[X]}delete a[R.id]}function B(R){for(const F in a){const X=a[F];if(X[R.id]===void 0)continue;const H=X[R.id];for(const J in H)_(H[J].object),delete H[J];delete X[R.id]}}function q(){$(),u=!0,c!==l&&(c=l,m(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:$,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:B,initAttributes:y,enableAttribute:w,disableUnusedAttributes:P}}function Jf(n,e,t,i){const s=i.isWebGL2;let r;function o(c){r=c}function a(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,d){if(d===0)return;let f,m;if(s)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,d),t.update(u,r,d)}this.setMode=o,this.render=a,this.renderInstances=l}function Qf(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,w=o||e.has("OES_texture_float"),T=y&&w,P=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:w,floatVertexTextures:T,maxSamples:P}}function ep(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Wn,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{const M=r?0:i,y=M*4;let w=h.clippingState||null;l.value=w,w=u(_,f,y,m);for(let T=0;T!==y;++T)w[T]=t[T];h.clippingState=w,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const h=m+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<h)&&(p=new Float32Array(h));for(let y=0,w=m;y!==g;++y,w+=4)o.copy(d[y]).applyMatrix4(M,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function tp(n){let e=new WeakMap;function t(o,a){return a===go?o.mapping=Ri:a===_o&&(o.mapping=Li),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===go||a===_o)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ph(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class sc extends ec{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ai=4,Ya=[.125,.215,.35,.446,.526,.582],jn=20,Jr=new sc,$a=new j;let Qr=null,eo=0,to=0;const Xn=(1+Math.sqrt(5))/2,Ti=1/Xn,Ka=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Xn,Ti),new O(0,Xn,-Ti),new O(Ti,0,Xn),new O(-Ti,0,Xn),new O(Xn,Ti,0),new O(-Xn,Ti,0)];class Za{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Qr=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=el(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qr,eo,to),e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qr=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:ts,format:Zt,colorSpace:Sn,depthBuffer:!1},s=Ja(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ja(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=np(r)),this._blurMaterial=ip(r,e,t)}return s}_compileMaterial(e){const t=new vn(this._lodPlanes[0],e);this._renderer.compile(t,Jr)}_sceneToCubeUV(e,t,i,s){const a=new $t(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor($a),u.toneMapping=Ln,u.autoClear=!1;const m=new Kl({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),_=new vn(new cs,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy($a),g=!0);for(let h=0;h<6;h++){const M=h%3;M===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):M===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const y=this._cubeSize;Vs(s,M*y,h>2?y:0,y,y),u.setRenderTarget(s),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ri||e.mapping===Li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=el()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qa());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new vn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Vs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Jr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ka[(s-1)%Ka.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new vn(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*jn-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):jn;p>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${jn}`);const h=[];let M=0;for(let A=0;A<jn;++A){const G=A/g,S=Math.exp(-G*G/2);h.push(S),A===0?M+=S:A<p&&(M+=2*S)}for(let A=0;A<h.length;A++)h[A]=h[A]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;const w=this._sizeLods[s],T=3*w*(s>y-Ai?s-y+Ai:0),P=4*(this._cubeSize-w);Vs(t,T,P,3*w,2*w),l.setRenderTarget(t),l.render(d,Jr)}}function np(n){const e=[],t=[],i=[];let s=n;const r=n-Ai+1+Ya.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ai?l=Ya[o-n+Ai-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,g=3,p=2,h=1,M=new Float32Array(g*_*m),y=new Float32Array(p*_*m),w=new Float32Array(h*_*m);for(let P=0;P<m;P++){const A=P%3*2/3-1,G=P>2?0:-1,S=[A,G,0,A+2/3,G,0,A+2/3,G+1,0,A,G,0,A+2/3,G+1,0,A,G+1,0];M.set(S,g*_*P),y.set(f,p*_*P);const b=[P,P,P,P,P,P];w.set(b,h*_*P)}const T=new ti;T.setAttribute("position",new on(M,g)),T.setAttribute("uv",new on(y,p)),T.setAttribute("faceIndex",new on(w,h)),e.push(T),s>Ai&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ja(n,e,t){const i=new Qn(n,e,t);return i.texture.mapping=nr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ip(n,e,t){const i=new Float32Array(jn),s=new O(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Qa(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function el(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sp(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===go||l===_o,u=l===Ri||l===Li;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Za(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new Za(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function rp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function op(n,e,t,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,h=g.length;p<h;p++)e.remove(g[p])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,h=g.length;p<h;p++)e.update(g[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,_=d.attributes.position;let g=0;if(m!==null){const M=m.array;g=m.version;for(let y=0,w=M.length;y<w;y+=3){const T=M[y+0],P=M[y+1],A=M[y+2];f.push(T,P,P,A,A,T)}}else if(_!==void 0){const M=_.array;g=_.version;for(let y=0,w=M.length/3-1;y<w;y+=3){const T=y+0,P=y+1,A=y+2;f.push(T,P,P,A,A,T)}}else return;const p=new(Wl(f)?Jl:Zl)(f,1);p.version=g;const h=r.get(d);h&&e.remove(h),r.set(d,p)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function ap(n,e,t,i){const s=i.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){n.drawElements(r,m,a,f*l),t.update(m,r,1)}function d(f,m,_){if(_===0)return;let g,p;if(s)g=n,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,m,a,f*l,_),t.update(m,r,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function lp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function cp(n,e){return n[0]-e[0]}function up(n,e){return Math.abs(e[1])-Math.abs(n[1])}function hp(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new vt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let p=r.get(u);if(p===void 0||p.count!==g){let F=function(){$.dispose(),r.delete(u),u.removeEventListener("dispose",F)};var m=F;p!==void 0&&p.texture.dispose();const y=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],G=u.morphAttributes.color||[];let S=0;y===!0&&(S=1),w===!0&&(S=2),T===!0&&(S=3);let b=u.attributes.position.count*S,B=1;b>e.maxTextureSize&&(B=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const q=new Float32Array(b*B*4*g),$=new jl(q,b,B,g);$.type=Pn,$.needsUpdate=!0;const R=S*4;for(let X=0;X<g;X++){const H=P[X],J=A[X],K=G[X],Y=b*B*4*X;for(let L=0;L<H.count;L++){const V=L*R;y===!0&&(o.fromBufferAttribute(H,L),q[Y+V+0]=o.x,q[Y+V+1]=o.y,q[Y+V+2]=o.z,q[Y+V+3]=0),w===!0&&(o.fromBufferAttribute(J,L),q[Y+V+4]=o.x,q[Y+V+5]=o.y,q[Y+V+6]=o.z,q[Y+V+7]=0),T===!0&&(o.fromBufferAttribute(K,L),q[Y+V+8]=o.x,q[Y+V+9]=o.y,q[Y+V+10]=o.z,q[Y+V+11]=K.itemSize===4?o.w:1)}}p={count:g,texture:$,size:new Qe(b,B)},r.set(u,p),u.addEventListener("dispose",F)}let h=0;for(let y=0;y<f.length;y++)h+=f[y];const M=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let g=i[u.id];if(g===void 0||g.length!==_){g=[];for(let w=0;w<_;w++)g[w]=[w,0];i[u.id]=g}for(let w=0;w<_;w++){const T=g[w];T[0]=w,T[1]=f[w]}g.sort(up);for(let w=0;w<8;w++)w<_&&g[w][1]?(a[w][0]=g[w][0],a[w][1]=g[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(cp);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let M=0;for(let w=0;w<8;w++){const T=a[w],P=T[0],A=T[1];P!==Number.MAX_SAFE_INTEGER&&A?(p&&u.getAttribute("morphTarget"+w)!==p[P]&&u.setAttribute("morphTarget"+w,p[P]),h&&u.getAttribute("morphNormal"+w)!==h[P]&&u.setAttribute("morphNormal"+w,h[P]),s[w]=A,M+=A):(p&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),h&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),s[w]=0)}const y=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",y),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function dp(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const rc=new Bt,oc=new jl,ac=new Ku,lc=new tc,tl=[],nl=[],il=new Float32Array(16),sl=new Float32Array(9),rl=new Float32Array(4);function Oi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=tl[s];if(r===void 0&&(r=new Float32Array(s),tl[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ar(n,e){let t=nl[e];t===void 0&&(t=new Int32Array(e),nl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function pp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),dt(t,e)}}function mp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),dt(t,e)}}function gp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),dt(t,e)}}function _p(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;rl.set(i),n.uniformMatrix2fv(this.addr,!1,rl),dt(t,i)}}function vp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;sl.set(i),n.uniformMatrix3fv(this.addr,!1,sl),dt(t,i)}}function xp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;il.set(i),n.uniformMatrix4fv(this.addr,!1,il),dt(t,i)}}function Sp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),dt(t,e)}}function Ep(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),dt(t,e)}}function Mp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),dt(t,e)}}function bp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),dt(t,e)}}function Tp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),dt(t,e)}}function Ap(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),dt(t,e)}}function Cp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||rc,s)}function Pp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ac,s)}function Rp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||lc,s)}function Lp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||oc,s)}function Ip(n){switch(n){case 5126:return fp;case 35664:return pp;case 35665:return mp;case 35666:return gp;case 35674:return _p;case 35675:return vp;case 35676:return xp;case 5124:case 35670:return Sp;case 35667:case 35671:return yp;case 35668:case 35672:return Ep;case 35669:case 35673:return Mp;case 5125:return bp;case 36294:return wp;case 36295:return Tp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Lp}}function Up(n,e){n.uniform1fv(this.addr,e)}function Fp(n,e){const t=Oi(e,this.size,2);n.uniform2fv(this.addr,t)}function Dp(n,e){const t=Oi(e,this.size,3);n.uniform3fv(this.addr,t)}function Np(n,e){const t=Oi(e,this.size,4);n.uniform4fv(this.addr,t)}function Bp(n,e){const t=Oi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Op(n,e){const t=Oi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kp(n,e){const t=Oi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zp(n,e){n.uniform1iv(this.addr,e)}function Vp(n,e){n.uniform2iv(this.addr,e)}function Gp(n,e){n.uniform3iv(this.addr,e)}function Hp(n,e){n.uniform4iv(this.addr,e)}function Wp(n,e){n.uniform1uiv(this.addr,e)}function Xp(n,e){n.uniform2uiv(this.addr,e)}function qp(n,e){n.uniform3uiv(this.addr,e)}function jp(n,e){n.uniform4uiv(this.addr,e)}function Yp(n,e,t){const i=this.cache,s=e.length,r=ar(t,s);ht(i,r)||(n.uniform1iv(this.addr,r),dt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||rc,r[o])}function $p(n,e,t){const i=this.cache,s=e.length,r=ar(t,s);ht(i,r)||(n.uniform1iv(this.addr,r),dt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ac,r[o])}function Kp(n,e,t){const i=this.cache,s=e.length,r=ar(t,s);ht(i,r)||(n.uniform1iv(this.addr,r),dt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||lc,r[o])}function Zp(n,e,t){const i=this.cache,s=e.length,r=ar(t,s);ht(i,r)||(n.uniform1iv(this.addr,r),dt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||oc,r[o])}function Jp(n){switch(n){case 5126:return Up;case 35664:return Fp;case 35665:return Dp;case 35666:return Np;case 35674:return Bp;case 35675:return Op;case 35676:return kp;case 5124:case 35670:return zp;case 35667:case 35671:return Vp;case 35668:case 35672:return Gp;case 35669:case 35673:return Hp;case 5125:return Wp;case 36294:return Xp;case 36295:return qp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return Zp}}class Qp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Ip(t.type)}}class em{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Jp(t.type)}}class tm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const no=/(\w+)(\])?(\[|\.)?/g;function ol(n,e){n.seq.push(e),n.map[e.id]=e}function nm(n,e,t){const i=n.name,s=i.length;for(no.lastIndex=0;;){const r=no.exec(i),o=no.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ol(t,c===void 0?new Qp(a,n,e):new em(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new tm(a),ol(t,d)),t=d}}}class Xs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);nm(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function al(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const im=37297;let sm=0;function rm(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function om(n){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(n);let i;switch(e===t?i="":e===$s&&t===Ys?i="LinearDisplayP3ToLinearSRGB":e===Ys&&t===$s&&(i="LinearSRGBToLinearDisplayP3"),n){case Sn:case ir:return[i,"LinearTransferOETF"];case _t:case Co:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ll(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+rm(n.getShaderSource(e),o)}else return s}function am(n,e){const t=om(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function lm(n,e){let t;switch(e){case _u:t="Linear";break;case vu:t="Reinhard";break;case xu:t="OptimizedCineon";break;case Su:t="ACESFilmic";break;case yu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cm(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zi).join(`
`)}function um(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Zi(n){return n!==""}function cl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ul(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mo(n){return n.replace(dm,pm)}const fm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pm(n,e){let t=Be[e];if(t===void 0){const i=fm.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mo(t)}const mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hl(n){return n.replace(mm,gm)}function gm(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dl(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _m(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function vm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ri:case Li:e="ENVMAP_TYPE_CUBE";break;case nr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Li:e="ENVMAP_MODE_REFRACTION";break}return e}function Sm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Dl:e="ENVMAP_BLENDING_MULTIPLY";break;case mu:e="ENVMAP_BLENDING_MIX";break;case gu:e="ENVMAP_BLENDING_ADD";break}return e}function ym(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Em(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=_m(t),c=vm(t),u=xm(t),d=Sm(t),f=ym(t),m=t.isWebGL2?"":cm(t),_=um(r),g=s.createProgram();let p,h,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zi).join(`
`),p.length>0&&(p+=`
`),h=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zi).join(`
`),h.length>0&&(h+=`
`)):(p=[dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),h=[m,dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Be.tonemapping_pars_fragment:"",t.toneMapping!==Ln?lm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,am("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),o=Mo(o),o=cl(o,t),o=ul(o,t),a=Mo(a),a=cl(a,t),a=ul(a,t),o=hl(o),a=hl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=M+p+o,w=M+h+a,T=al(s,s.VERTEX_SHADER,y),P=al(s,s.FRAGMENT_SHADER,w);s.attachShader(g,T),s.attachShader(g,P),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(B){if(n.debug.checkShaderErrors){const q=s.getProgramInfoLog(g).trim(),$=s.getShaderInfoLog(T).trim(),R=s.getShaderInfoLog(P).trim();let F=!0,X=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,T,P);else{const H=ll(s,T,"vertex"),J=ll(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+H+`
`+J)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):($===""||R==="")&&(X=!1);X&&(B.diagnostics={runnable:F,programLog:q,vertexShader:{log:$,prefix:p},fragmentShader:{log:R,prefix:h}})}s.deleteShader(T),s.deleteShader(P),G=new Xs(s,g),S=hm(s,g)}let G;this.getUniforms=function(){return G===void 0&&A(this),G};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(g,im)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=P,this}let Mm=0;class bm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new wm(e),t.set(e,i)),i}}class wm{constructor(e){this.id=Mm++,this.code=e,this.usedTimes=0}}function Tm(n,e,t,i,s,r,o){const a=new Yl,l=new bm,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function p(S,b,B,q,$){const R=q.fog,F=$.geometry,X=S.isMeshStandardMaterial?q.environment:null,H=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),J=H&&H.mapping===nr?H.image.height:null,K=_[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const Y=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,L=Y!==void 0?Y.length:0;let V=0;F.morphAttributes.position!==void 0&&(V=1),F.morphAttributes.normal!==void 0&&(V=2),F.morphAttributes.color!==void 0&&(V=3);let ce,de,me,Te;if(K){const lt=nn[K];ce=lt.vertexShader,de=lt.fragmentShader}else ce=S.vertexShader,de=S.fragmentShader,l.update(S),me=l.getVertexShaderID(S),Te=l.getFragmentShaderID(S);const We=n.getRenderTarget(),Le=$.isInstancedMesh===!0,Ne=!!S.map,it=!!S.matcap,ke=!!H,U=!!S.aoMap,It=!!S.lightMap,ye=!!S.bumpMap,Ie=!!S.normalMap,Re=!!S.displacementMap,st=!!S.emissiveMap,ze=!!S.metalnessMap,Ve=!!S.roughnessMap,Je=S.anisotropy>0,ft=S.clearcoat>0,St=S.iridescence>0,E=S.sheen>0,v=S.transmission>0,D=Je&&!!S.anisotropyMap,ee=ft&&!!S.clearcoatMap,Z=ft&&!!S.clearcoatNormalMap,te=ft&&!!S.clearcoatRoughnessMap,ge=St&&!!S.iridescenceMap,oe=St&&!!S.iridescenceThicknessMap,ue=E&&!!S.sheenColorMap,Ae=E&&!!S.sheenRoughnessMap,Ye=!!S.specularMap,Q=!!S.specularColorMap,Ze=!!S.specularIntensityMap,Ue=v&&!!S.transmissionMap,Ce=v&&!!S.thicknessMap,Ee=!!S.gradientMap,fe=!!S.alphaMap,Xe=S.alphaTest>0,C=!!S.alphaHash,le=!!S.extensions,ie=!!F.attributes.uv1,W=!!F.attributes.uv2,re=!!F.attributes.uv3;let Me=Ln;return S.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(Me=n.toneMapping),{isWebGL2:u,shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:ce,fragmentShader:de,defines:S.defines,customVertexShaderID:me,customFragmentShaderID:Te,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:Le,instancingColor:Le&&$.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:We===null?n.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:Sn,map:Ne,matcap:it,envMap:ke,envMapMode:ke&&H.mapping,envMapCubeUVHeight:J,aoMap:U,lightMap:It,bumpMap:ye,normalMap:Ie,displacementMap:f&&Re,emissiveMap:st,normalMapObjectSpace:Ie&&S.normalMapType===Du,normalMapTangentSpace:Ie&&S.normalMapType===Fu,metalnessMap:ze,roughnessMap:Ve,anisotropy:Je,anisotropyMap:D,clearcoat:ft,clearcoatMap:ee,clearcoatNormalMap:Z,clearcoatRoughnessMap:te,iridescence:St,iridescenceMap:ge,iridescenceThicknessMap:oe,sheen:E,sheenColorMap:ue,sheenRoughnessMap:Ae,specularMap:Ye,specularColorMap:Q,specularIntensityMap:Ze,transmission:v,transmissionMap:Ue,thicknessMap:Ce,gradientMap:Ee,opaque:S.transparent===!1&&S.blending===Ci,alphaMap:fe,alphaTest:Xe,alphaHash:C,combine:S.combine,mapUv:Ne&&g(S.map.channel),aoMapUv:U&&g(S.aoMap.channel),lightMapUv:It&&g(S.lightMap.channel),bumpMapUv:ye&&g(S.bumpMap.channel),normalMapUv:Ie&&g(S.normalMap.channel),displacementMapUv:Re&&g(S.displacementMap.channel),emissiveMapUv:st&&g(S.emissiveMap.channel),metalnessMapUv:ze&&g(S.metalnessMap.channel),roughnessMapUv:Ve&&g(S.roughnessMap.channel),anisotropyMapUv:D&&g(S.anisotropyMap.channel),clearcoatMapUv:ee&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Z&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(S.sheenRoughnessMap.channel),specularMapUv:Ye&&g(S.specularMap.channel),specularColorMapUv:Q&&g(S.specularColorMap.channel),specularIntensityMapUv:Ze&&g(S.specularIntensityMap.channel),transmissionMapUv:Ue&&g(S.transmissionMap.channel),thicknessMapUv:Ce&&g(S.thicknessMap.channel),alphaMapUv:fe&&g(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ie||Je),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:ie,vertexUv2s:W,vertexUv3s:re,pointsUvs:$.isPoints===!0&&!!F.attributes.uv&&(Ne||fe),fog:!!R,useFog:S.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:$.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:V,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Me,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ne&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===Lt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:le&&S.extensions.derivatives===!0,extensionFragDepth:le&&S.extensions.fragDepth===!0,extensionDrawBuffers:le&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const B in S.defines)b.push(B),b.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(M(b,S),y(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function M(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function y(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function w(S){const b=_[S.type];let B;if(b){const q=nn[b];B=uh.clone(q.uniforms)}else B=S.uniforms;return B}function T(S,b){let B;for(let q=0,$=c.length;q<$;q++){const R=c[q];if(R.cacheKey===b){B=R,++B.usedTimes;break}}return B===void 0&&(B=new Em(n,b,S,r),c.push(B)),B}function P(S){if(--S.usedTimes===0){const b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),S.destroy()}}function A(S){l.remove(S)}function G(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:w,acquireProgram:T,releaseProgram:P,releaseShaderCache:A,programs:c,dispose:G}}function Am(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Cm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function fl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pl(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,m,_,g,p){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=g,h.group=p),e++,h}function a(d,f,m,_,g,p){const h=o(d,f,m,_,g,p);m.transmission>0?i.push(h):m.transparent===!0?s.push(h):t.push(h)}function l(d,f,m,_,g,p){const h=o(d,f,m,_,g,p);m.transmission>0?i.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||Cm),i.length>1&&i.sort(f||fl),s.length>1&&s.sort(f||fl)}function u(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Pm(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new pl,n.set(i,[o])):s>=r.length?(o=new pl,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Rm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new j};break;case"SpotLight":t={position:new O,direction:new O,color:new j,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new j,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new j,groundColor:new j};break;case"RectAreaLight":t={color:new j,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function Lm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Im=0;function Um(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Fm(n,e){const t=new Rm,i=Lm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new O);const r=new O,o=new xt,a=new xt;function l(u,d){let f=0,m=0,_=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let g=0,p=0,h=0,M=0,y=0,w=0,T=0,P=0,A=0,G=0,S=0;u.sort(Um);const b=d===!0?Math.PI:1;for(let q=0,$=u.length;q<$;q++){const R=u[q],F=R.color,X=R.intensity,H=R.distance,J=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=F.r*X*b,m+=F.g*X*b,_+=F.b*X*b;else if(R.isLightProbe){for(let K=0;K<9;K++)s.probe[K].addScaledVector(R.sh.coefficients[K],X);S++}else if(R.isDirectionalLight){const K=t.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity*b),R.castShadow){const Y=R.shadow,L=i.get(R);L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,s.directionalShadow[g]=L,s.directionalShadowMap[g]=J,s.directionalShadowMatrix[g]=R.shadow.matrix,w++}s.directional[g]=K,g++}else if(R.isSpotLight){const K=t.get(R);K.position.setFromMatrixPosition(R.matrixWorld),K.color.copy(F).multiplyScalar(X*b),K.distance=H,K.coneCos=Math.cos(R.angle),K.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),K.decay=R.decay,s.spot[h]=K;const Y=R.shadow;if(R.map&&(s.spotLightMap[A]=R.map,A++,Y.updateMatrices(R),R.castShadow&&G++),s.spotLightMatrix[h]=Y.matrix,R.castShadow){const L=i.get(R);L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,s.spotShadow[h]=L,s.spotShadowMap[h]=J,P++}h++}else if(R.isRectAreaLight){const K=t.get(R);K.color.copy(F).multiplyScalar(X),K.halfWidth.set(R.width*.5,0,0),K.halfHeight.set(0,R.height*.5,0),s.rectArea[M]=K,M++}else if(R.isPointLight){const K=t.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity*b),K.distance=R.distance,K.decay=R.decay,R.castShadow){const Y=R.shadow,L=i.get(R);L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,L.shadowCameraNear=Y.camera.near,L.shadowCameraFar=Y.camera.far,s.pointShadow[p]=L,s.pointShadowMap[p]=J,s.pointShadowMatrix[p]=R.shadow.matrix,T++}s.point[p]=K,p++}else if(R.isHemisphereLight){const K=t.get(R);K.skyColor.copy(R.color).multiplyScalar(X*b),K.groundColor.copy(R.groundColor).multiplyScalar(X*b),s.hemi[y]=K,y++}}M>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ae.LTC_FLOAT_1,s.rectAreaLTC2=ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ae.LTC_HALF_1,s.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=_;const B=s.hash;(B.directionalLength!==g||B.pointLength!==p||B.spotLength!==h||B.rectAreaLength!==M||B.hemiLength!==y||B.numDirectionalShadows!==w||B.numPointShadows!==T||B.numSpotShadows!==P||B.numSpotMaps!==A||B.numLightProbes!==S)&&(s.directional.length=g,s.spot.length=h,s.rectArea.length=M,s.point.length=p,s.hemi.length=y,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=P+A-G,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=S,B.directionalLength=g,B.pointLength=p,B.spotLength=h,B.rectAreaLength=M,B.hemiLength=y,B.numDirectionalShadows=w,B.numPointShadows=T,B.numSpotShadows=P,B.numSpotMaps=A,B.numLightProbes=S,s.version=Im++)}function c(u,d){let f=0,m=0,_=0,g=0,p=0;const h=d.matrixWorldInverse;for(let M=0,y=u.length;M<y;M++){const w=u[M];if(w.isDirectionalLight){const T=s.directional[f];T.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(h),f++}else if(w.isSpotLight){const T=s.spot[_];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(h),_++}else if(w.isRectAreaLight){const T=s.rectArea[g];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(h),a.identity(),o.copy(w.matrixWorld),o.premultiply(h),a.extractRotation(o),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const T=s.point[m];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(h),m++}else if(w.isHemisphereLight){const T=s.hemi[p];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:s}}function ml(n,e){const t=new Fm(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Dm(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new ml(n,e),t.set(r,[l])):o>=a.length?(l=new ml(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class Nm extends rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bm extends rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,km=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zm(n,e,t){let i=new nc;const s=new Qe,r=new Qe,o=new vt,a=new Nm({depthPacking:Uu}),l=new Bm,c={},u=t.maxTextureSize,d={[Fn]:Lt,[Lt]:Fn,[sn]:sn},f=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:Om,fragmentShader:km}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new ti;_.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new vn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fl;let h=this.type;this.render=function(T,P,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const G=n.getRenderTarget(),S=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Rn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const q=h!==mn&&this.type===mn,$=h===mn&&this.type!==mn;for(let R=0,F=T.length;R<F;R++){const X=T[R],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const J=H.getFrameExtents();if(s.multiply(J),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,H.mapSize.y=r.y)),H.map===null||q===!0||$===!0){const Y=this.type!==mn?{minFilter:Ct,magFilter:Ct}:{};H.map!==null&&H.map.dispose(),H.map=new Qn(s.x,s.y,Y),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const K=H.getViewportCount();for(let Y=0;Y<K;Y++){const L=H.getViewport(Y);o.set(r.x*L.x,r.y*L.y,r.x*L.z,r.y*L.w),B.viewport(o),H.updateMatrices(X,Y),i=H.getFrustum(),w(P,A,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===mn&&M(H,A),H.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(G,S,b)};function M(T,P){const A=e.update(g);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(P,null,A,f,g,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(P,null,A,m,g,null)}function y(T,P,A,G){let S=null;const b=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)S=b;else if(S=A.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const B=S.uuid,q=P.uuid;let $=c[B];$===void 0&&($={},c[B]=$);let R=$[q];R===void 0&&(R=S.clone(),$[q]=R),S=R}if(S.visible=P.visible,S.wireframe=P.wireframe,G===mn?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:d[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=n.properties.get(S);B.light=A}return S}function w(T,P,A,G,S){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===mn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const q=e.update(T),$=T.material;if(Array.isArray($)){const R=q.groups;for(let F=0,X=R.length;F<X;F++){const H=R[F],J=$[H.materialIndex];if(J&&J.visible){const K=y(T,J,G,S);n.renderBufferDirect(A,null,q,K,T,H)}}}else if($.visible){const R=y(T,$,G,S);n.renderBufferDirect(A,null,q,R,T,null)}}const B=T.children;for(let q=0,$=B.length;q<$;q++)w(B[q],P,A,G,S)}}function Vm(n,e,t){const i=t.isWebGL2;function s(){let C=!1;const le=new vt;let ie=null;const W=new vt(0,0,0,0);return{setMask:function(re){ie!==re&&!C&&(n.colorMask(re,re,re,re),ie=re)},setLocked:function(re){C=re},setClear:function(re,Me,$e,lt,zt){zt===!0&&(re*=lt,Me*=lt,$e*=lt),le.set(re,Me,$e,lt),W.equals(le)===!1&&(n.clearColor(re,Me,$e,lt),W.copy(le))},reset:function(){C=!1,ie=null,W.set(-1,0,0,0)}}}function r(){let C=!1,le=null,ie=null,W=null;return{setTest:function(re){re?Ne(n.DEPTH_TEST):it(n.DEPTH_TEST)},setMask:function(re){le!==re&&!C&&(n.depthMask(re),le=re)},setFunc:function(re){if(ie!==re){switch(re){case lu:n.depthFunc(n.NEVER);break;case cu:n.depthFunc(n.ALWAYS);break;case uu:n.depthFunc(n.LESS);break;case qs:n.depthFunc(n.LEQUAL);break;case hu:n.depthFunc(n.EQUAL);break;case du:n.depthFunc(n.GEQUAL);break;case fu:n.depthFunc(n.GREATER);break;case pu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=re}},setLocked:function(re){C=re},setClear:function(re){W!==re&&(n.clearDepth(re),W=re)},reset:function(){C=!1,le=null,ie=null,W=null}}}function o(){let C=!1,le=null,ie=null,W=null,re=null,Me=null,$e=null,lt=null,zt=null;return{setTest:function(et){C||(et?Ne(n.STENCIL_TEST):it(n.STENCIL_TEST))},setMask:function(et){le!==et&&!C&&(n.stencilMask(et),le=et)},setFunc:function(et,bt,Jt){(ie!==et||W!==bt||re!==Jt)&&(n.stencilFunc(et,bt,Jt),ie=et,W=bt,re=Jt)},setOp:function(et,bt,Jt){(Me!==et||$e!==bt||lt!==Jt)&&(n.stencilOp(et,bt,Jt),Me=et,$e=bt,lt=Jt)},setLocked:function(et){C=et},setClear:function(et){zt!==et&&(n.clearStencil(et),zt=et)},reset:function(){C=!1,le=null,ie=null,W=null,re=null,Me=null,$e=null,lt=null,zt=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,d=new WeakMap;let f={},m={},_=new WeakMap,g=[],p=null,h=!1,M=null,y=null,w=null,T=null,P=null,A=null,G=null,S=new j(0,0,0),b=0,B=!1,q=null,$=null,R=null,F=null,X=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,K=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),J=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),J=K>=2);let L=null,V={};const ce=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),me=new vt().fromArray(ce),Te=new vt().fromArray(de);function We(C,le,ie,W){const re=new Uint8Array(4),Me=n.createTexture();n.bindTexture(C,Me),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<ie;$e++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(le,0,n.RGBA,1,1,W,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(le+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return Me}const Le={};Le[n.TEXTURE_2D]=We(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=We(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[n.TEXTURE_2D_ARRAY]=We(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=We(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(n.DEPTH_TEST),l.setFunc(qs),ze(!1),Ve(Ko),Ne(n.CULL_FACE),Re(Rn);function Ne(C){f[C]!==!0&&(n.enable(C),f[C]=!0)}function it(C){f[C]!==!1&&(n.disable(C),f[C]=!1)}function ke(C,le){return m[C]!==le?(n.bindFramebuffer(C,le),m[C]=le,i&&(C===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=le),C===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=le)),!0):!1}function U(C,le){let ie=g,W=!1;if(C)if(ie=_.get(le),ie===void 0&&(ie=[],_.set(le,ie)),C.isWebGLMultipleRenderTargets){const re=C.texture;if(ie.length!==re.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,$e=re.length;Me<$e;Me++)ie[Me]=n.COLOR_ATTACHMENT0+Me;ie.length=re.length,W=!0}}else ie[0]!==n.COLOR_ATTACHMENT0&&(ie[0]=n.COLOR_ATTACHMENT0,W=!0);else ie[0]!==n.BACK&&(ie[0]=n.BACK,W=!0);W&&(t.isWebGL2?n.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function It(C){return p!==C?(n.useProgram(C),p=C,!0):!1}const ye={[qn]:n.FUNC_ADD,[jc]:n.FUNC_SUBTRACT,[Yc]:n.FUNC_REVERSE_SUBTRACT};if(i)ye[ea]=n.MIN,ye[ta]=n.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(ye[ea]=C.MIN_EXT,ye[ta]=C.MAX_EXT)}const Ie={[$c]:n.ZERO,[Kc]:n.ONE,[Zc]:n.SRC_COLOR,[po]:n.SRC_ALPHA,[iu]:n.SRC_ALPHA_SATURATE,[tu]:n.DST_COLOR,[Qc]:n.DST_ALPHA,[Jc]:n.ONE_MINUS_SRC_COLOR,[mo]:n.ONE_MINUS_SRC_ALPHA,[nu]:n.ONE_MINUS_DST_COLOR,[eu]:n.ONE_MINUS_DST_ALPHA,[su]:n.CONSTANT_COLOR,[ru]:n.ONE_MINUS_CONSTANT_COLOR,[ou]:n.CONSTANT_ALPHA,[au]:n.ONE_MINUS_CONSTANT_ALPHA};function Re(C,le,ie,W,re,Me,$e,lt,zt,et){if(C===Rn){h===!0&&(it(n.BLEND),h=!1);return}if(h===!1&&(Ne(n.BLEND),h=!0),C!==qc){if(C!==M||et!==B){if((y!==qn||P!==qn)&&(n.blendEquation(n.FUNC_ADD),y=qn,P=qn),et)switch(C){case Ci:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zo:n.blendFunc(n.ONE,n.ONE);break;case Jo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Ci:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}w=null,T=null,A=null,G=null,S.set(0,0,0),b=0,M=C,B=et}return}re=re||le,Me=Me||ie,$e=$e||W,(le!==y||re!==P)&&(n.blendEquationSeparate(ye[le],ye[re]),y=le,P=re),(ie!==w||W!==T||Me!==A||$e!==G)&&(n.blendFuncSeparate(Ie[ie],Ie[W],Ie[Me],Ie[$e]),w=ie,T=W,A=Me,G=$e),(lt.equals(S)===!1||zt!==b)&&(n.blendColor(lt.r,lt.g,lt.b,zt),S.copy(lt),b=zt),M=C,B=!1}function st(C,le){C.side===sn?it(n.CULL_FACE):Ne(n.CULL_FACE);let ie=C.side===Lt;le&&(ie=!ie),ze(ie),C.blending===Ci&&C.transparent===!1?Re(Rn):Re(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const W=C.stencilWrite;c.setTest(W),W&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ft(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ne(n.SAMPLE_ALPHA_TO_COVERAGE):it(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(C){q!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),q=C)}function Ve(C){C!==Hc?(Ne(n.CULL_FACE),C!==$&&(C===Ko?n.cullFace(n.BACK):C===Wc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):it(n.CULL_FACE),$=C}function Je(C){C!==R&&(J&&n.lineWidth(C),R=C)}function ft(C,le,ie){C?(Ne(n.POLYGON_OFFSET_FILL),(F!==le||X!==ie)&&(n.polygonOffset(le,ie),F=le,X=ie)):it(n.POLYGON_OFFSET_FILL)}function St(C){C?Ne(n.SCISSOR_TEST):it(n.SCISSOR_TEST)}function E(C){C===void 0&&(C=n.TEXTURE0+H-1),L!==C&&(n.activeTexture(C),L=C)}function v(C,le,ie){ie===void 0&&(L===null?ie=n.TEXTURE0+H-1:ie=L);let W=V[ie];W===void 0&&(W={type:void 0,texture:void 0},V[ie]=W),(W.type!==C||W.texture!==le)&&(L!==ie&&(n.activeTexture(ie),L=ie),n.bindTexture(C,le||Le[C]),W.type=C,W.texture=le)}function D(){const C=V[L];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ye(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ze(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ue(C){me.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),me.copy(C))}function Ce(C){Te.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),Te.copy(C))}function Ee(C,le){let ie=d.get(le);ie===void 0&&(ie=new WeakMap,d.set(le,ie));let W=ie.get(C);W===void 0&&(W=n.getUniformBlockIndex(le,C.name),ie.set(C,W))}function fe(C,le){const W=d.get(le).get(C);u.get(le)!==W&&(n.uniformBlockBinding(le,W,C.__bindingPointIndex),u.set(le,W))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},L=null,V={},m={},_=new WeakMap,g=[],p=null,h=!1,M=null,y=null,w=null,T=null,P=null,A=null,G=null,S=new j(0,0,0),b=0,B=!1,q=null,$=null,R=null,F=null,X=null,me.set(0,0,n.canvas.width,n.canvas.height),Te.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ne,disable:it,bindFramebuffer:ke,drawBuffers:U,useProgram:It,setBlending:Re,setMaterial:st,setFlipSided:ze,setCullFace:Ve,setLineWidth:Je,setPolygonOffset:ft,setScissorTest:St,activeTexture:E,bindTexture:v,unbindTexture:D,compressedTexImage2D:ee,compressedTexImage3D:Z,texImage2D:Q,texImage3D:Ze,updateUBOMapping:Ee,uniformBlockBinding:fe,texStorage2D:Ae,texStorage3D:Ye,texSubImage2D:te,texSubImage3D:ge,compressedTexSubImage2D:oe,compressedTexSubImage3D:ue,scissor:Ue,viewport:Ce,reset:Xe}}function Gm(n,e,t,i,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,d=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,v){return h?new OffscreenCanvas(E,v):Zs("canvas")}function y(E,v,D,ee){let Z=1;if((E.width>ee||E.height>ee)&&(Z=ee/Math.max(E.width,E.height)),Z<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const te=v?Eo:Math.floor,ge=te(Z*E.width),oe=te(Z*E.height);g===void 0&&(g=M(ge,oe));const ue=D?M(ge,oe):g;return ue.width=ge,ue.height=oe,ue.getContext("2d").drawImage(E,0,0,ge,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ge+"x"+oe+")."),ue}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function w(E){return La(E.width)&&La(E.height)}function T(E){return a?!1:E.wrapS!==Kt||E.wrapT!==Kt||E.minFilter!==Ct&&E.minFilter!==Gt}function P(E,v){return E.generateMipmaps&&v&&E.minFilter!==Ct&&E.minFilter!==Gt}function A(E){n.generateMipmap(E)}function G(E,v,D,ee,Z=!1){if(a===!1)return v;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let te=v;if(v===n.RED&&(D===n.FLOAT&&(te=n.R32F),D===n.HALF_FLOAT&&(te=n.R16F),D===n.UNSIGNED_BYTE&&(te=n.R8)),v===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(te=n.R8UI),D===n.UNSIGNED_SHORT&&(te=n.R16UI),D===n.UNSIGNED_INT&&(te=n.R32UI),D===n.BYTE&&(te=n.R8I),D===n.SHORT&&(te=n.R16I),D===n.INT&&(te=n.R32I)),v===n.RG&&(D===n.FLOAT&&(te=n.RG32F),D===n.HALF_FLOAT&&(te=n.RG16F),D===n.UNSIGNED_BYTE&&(te=n.RG8)),v===n.RGBA){const ge=Z?js:Ke.getTransfer(ee);D===n.FLOAT&&(te=n.RGBA32F),D===n.HALF_FLOAT&&(te=n.RGBA16F),D===n.UNSIGNED_BYTE&&(te=ge===tt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function S(E,v,D){return P(E,D)===!0||E.isFramebufferTexture&&E.minFilter!==Ct&&E.minFilter!==Gt?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function b(E){return E===Ct||E===na||E===Ar?n.NEAREST:n.LINEAR}function B(E){const v=E.target;v.removeEventListener("dispose",B),$(v),v.isVideoTexture&&_.delete(v)}function q(E){const v=E.target;v.removeEventListener("dispose",q),F(v)}function $(E){const v=i.get(E);if(v.__webglInit===void 0)return;const D=E.source,ee=p.get(D);if(ee){const Z=ee[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(E),Object.keys(ee).length===0&&p.delete(D)}i.remove(E)}function R(E){const v=i.get(E);n.deleteTexture(v.__webglTexture);const D=E.source,ee=p.get(D);delete ee[v.__cacheKey],o.memory.textures--}function F(E){const v=E.texture,D=i.get(E),ee=i.get(v);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(D.__webglFramebuffer[Z]))for(let te=0;te<D.__webglFramebuffer[Z].length;te++)n.deleteFramebuffer(D.__webglFramebuffer[Z][te]);else n.deleteFramebuffer(D.__webglFramebuffer[Z]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[Z])}else{if(Array.isArray(D.__webglFramebuffer))for(let Z=0;Z<D.__webglFramebuffer.length;Z++)n.deleteFramebuffer(D.__webglFramebuffer[Z]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let Z=0;Z<D.__webglColorRenderbuffer.length;Z++)D.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[Z]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Z=0,te=v.length;Z<te;Z++){const ge=i.get(v[Z]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(v[Z])}i.remove(v),i.remove(E)}let X=0;function H(){X=0}function J(){const E=X;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),X+=1,E}function K(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function Y(E,v){const D=i.get(E);if(E.isVideoTexture&&ft(E),E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){const ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(D,E,v);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+v)}function L(E,v){const D=i.get(E);if(E.version>0&&D.__version!==E.version){Ne(D,E,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+v)}function V(E,v){const D=i.get(E);if(E.version>0&&D.__version!==E.version){Ne(D,E,v);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+v)}function ce(E,v){const D=i.get(E);if(E.version>0&&D.__version!==E.version){it(D,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+v)}const de={[vo]:n.REPEAT,[Kt]:n.CLAMP_TO_EDGE,[xo]:n.MIRRORED_REPEAT},me={[Ct]:n.NEAREST,[na]:n.NEAREST_MIPMAP_NEAREST,[Ar]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[Eu]:n.LINEAR_MIPMAP_NEAREST,[es]:n.LINEAR_MIPMAP_LINEAR},Te={[Nu]:n.NEVER,[Hu]:n.ALWAYS,[Bu]:n.LESS,[ku]:n.LEQUAL,[Ou]:n.EQUAL,[Gu]:n.GEQUAL,[zu]:n.GREATER,[Vu]:n.NOTEQUAL};function We(E,v,D){if(D?(n.texParameteri(E,n.TEXTURE_WRAP_S,de[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,de[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,de[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,me[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,me[v.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Kt||v.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,b(v.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,b(v.minFilter)),v.minFilter!==Ct&&v.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Te[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Ct||v.minFilter!==Ar&&v.minFilter!==es||v.type===Pn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===ts&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(E,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Le(E,v){let D=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",B));const ee=v.source;let Z=p.get(ee);Z===void 0&&(Z={},p.set(ee,Z));const te=K(v);if(te!==E.__cacheKey){Z[te]===void 0&&(Z[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),Z[te].usedTimes++;const ge=Z[E.__cacheKey];ge!==void 0&&(Z[E.__cacheKey].usedTimes--,ge.usedTimes===0&&R(v)),E.__cacheKey=te,E.__webglTexture=Z[te].texture}return D}function Ne(E,v,D){let ee=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ee=n.TEXTURE_3D);const Z=Le(E,v),te=v.source;t.bindTexture(ee,E.__webglTexture,n.TEXTURE0+D);const ge=i.get(te);if(te.version!==ge.__version||Z===!0){t.activeTexture(n.TEXTURE0+D);const oe=Ke.getPrimaries(Ke.workingColorSpace),ue=v.colorSpace===Ht?null:Ke.getPrimaries(v.colorSpace),Ae=v.colorSpace===Ht||oe===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ye=T(v)&&w(v.image)===!1;let Q=y(v.image,Ye,!1,u);Q=St(v,Q);const Ze=w(Q)||a,Ue=r.convert(v.format,v.colorSpace);let Ce=r.convert(v.type),Ee=G(v.internalFormat,Ue,Ce,v.colorSpace,v.isVideoTexture);We(ee,v,Ze);let fe;const Xe=v.mipmaps,C=a&&v.isVideoTexture!==!0,le=ge.__version===void 0||Z===!0,ie=S(v,Q,Ze);if(v.isDepthTexture)Ee=n.DEPTH_COMPONENT,a?v.type===Pn?Ee=n.DEPTH_COMPONENT32F:v.type===Cn?Ee=n.DEPTH_COMPONENT24:v.type===$n?Ee=n.DEPTH24_STENCIL8:Ee=n.DEPTH_COMPONENT16:v.type===Pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Kn&&Ee===n.DEPTH_COMPONENT&&v.type!==Ao&&v.type!==Cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Cn,Ce=r.convert(v.type)),v.format===Ii&&Ee===n.DEPTH_COMPONENT&&(Ee=n.DEPTH_STENCIL,v.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=$n,Ce=r.convert(v.type))),le&&(C?t.texStorage2D(n.TEXTURE_2D,1,Ee,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Ee,Q.width,Q.height,0,Ue,Ce,null));else if(v.isDataTexture)if(Xe.length>0&&Ze){C&&le&&t.texStorage2D(n.TEXTURE_2D,ie,Ee,Xe[0].width,Xe[0].height);for(let W=0,re=Xe.length;W<re;W++)fe=Xe[W],C?t.texSubImage2D(n.TEXTURE_2D,W,0,0,fe.width,fe.height,Ue,Ce,fe.data):t.texImage2D(n.TEXTURE_2D,W,Ee,fe.width,fe.height,0,Ue,Ce,fe.data);v.generateMipmaps=!1}else C?(le&&t.texStorage2D(n.TEXTURE_2D,ie,Ee,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,Ue,Ce,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,Q.width,Q.height,0,Ue,Ce,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){C&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Ee,Xe[0].width,Xe[0].height,Q.depth);for(let W=0,re=Xe.length;W<re;W++)fe=Xe[W],v.format!==Zt?Ue!==null?C?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,fe.width,fe.height,Q.depth,Ue,fe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Ee,fe.width,fe.height,Q.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,fe.width,fe.height,Q.depth,Ue,Ce,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,Ee,fe.width,fe.height,Q.depth,0,Ue,Ce,fe.data)}else{C&&le&&t.texStorage2D(n.TEXTURE_2D,ie,Ee,Xe[0].width,Xe[0].height);for(let W=0,re=Xe.length;W<re;W++)fe=Xe[W],v.format!==Zt?Ue!==null?C?t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,fe.width,fe.height,Ue,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,W,Ee,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?t.texSubImage2D(n.TEXTURE_2D,W,0,0,fe.width,fe.height,Ue,Ce,fe.data):t.texImage2D(n.TEXTURE_2D,W,Ee,fe.width,fe.height,0,Ue,Ce,fe.data)}else if(v.isDataArrayTexture)C?(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Ee,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Ue,Ce,Q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,Q.width,Q.height,Q.depth,0,Ue,Ce,Q.data);else if(v.isData3DTexture)C?(le&&t.texStorage3D(n.TEXTURE_3D,ie,Ee,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Ue,Ce,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,Q.width,Q.height,Q.depth,0,Ue,Ce,Q.data);else if(v.isFramebufferTexture){if(le)if(C)t.texStorage2D(n.TEXTURE_2D,ie,Ee,Q.width,Q.height);else{let W=Q.width,re=Q.height;for(let Me=0;Me<ie;Me++)t.texImage2D(n.TEXTURE_2D,Me,Ee,W,re,0,Ue,Ce,null),W>>=1,re>>=1}}else if(Xe.length>0&&Ze){C&&le&&t.texStorage2D(n.TEXTURE_2D,ie,Ee,Xe[0].width,Xe[0].height);for(let W=0,re=Xe.length;W<re;W++)fe=Xe[W],C?t.texSubImage2D(n.TEXTURE_2D,W,0,0,Ue,Ce,fe):t.texImage2D(n.TEXTURE_2D,W,Ee,Ue,Ce,fe);v.generateMipmaps=!1}else C?(le&&t.texStorage2D(n.TEXTURE_2D,ie,Ee,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,Ce,Q)):t.texImage2D(n.TEXTURE_2D,0,Ee,Ue,Ce,Q);P(v,Ze)&&A(ee),ge.__version=te.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function it(E,v,D){if(v.image.length!==6)return;const ee=Le(E,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+D);const te=i.get(Z);if(Z.version!==te.__version||ee===!0){t.activeTexture(n.TEXTURE0+D);const ge=Ke.getPrimaries(Ke.workingColorSpace),oe=v.colorSpace===Ht?null:Ke.getPrimaries(v.colorSpace),ue=v.colorSpace===Ht||ge===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ae=v.isCompressedTexture||v.image[0].isCompressedTexture,Ye=v.image[0]&&v.image[0].isDataTexture,Q=[];for(let W=0;W<6;W++)!Ae&&!Ye?Q[W]=y(v.image[W],!1,!0,c):Q[W]=Ye?v.image[W].image:v.image[W],Q[W]=St(v,Q[W]);const Ze=Q[0],Ue=w(Ze)||a,Ce=r.convert(v.format,v.colorSpace),Ee=r.convert(v.type),fe=G(v.internalFormat,Ce,Ee,v.colorSpace),Xe=a&&v.isVideoTexture!==!0,C=te.__version===void 0||ee===!0;let le=S(v,Ze,Ue);We(n.TEXTURE_CUBE_MAP,v,Ue);let ie;if(Ae){Xe&&C&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,fe,Ze.width,Ze.height);for(let W=0;W<6;W++){ie=Q[W].mipmaps;for(let re=0;re<ie.length;re++){const Me=ie[re];v.format!==Zt?Ce!==null?Xe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,re,0,0,Me.width,Me.height,Ce,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,re,fe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,re,0,0,Me.width,Me.height,Ce,Ee,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,re,fe,Me.width,Me.height,0,Ce,Ee,Me.data)}}}else{ie=v.mipmaps,Xe&&C&&(ie.length>0&&le++,t.texStorage2D(n.TEXTURE_CUBE_MAP,le,fe,Q[0].width,Q[0].height));for(let W=0;W<6;W++)if(Ye){Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Q[W].width,Q[W].height,Ce,Ee,Q[W].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,fe,Q[W].width,Q[W].height,0,Ce,Ee,Q[W].data);for(let re=0;re<ie.length;re++){const $e=ie[re].image[W].image;Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,re+1,0,0,$e.width,$e.height,Ce,Ee,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,re+1,fe,$e.width,$e.height,0,Ce,Ee,$e.data)}}else{Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Ce,Ee,Q[W]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,fe,Ce,Ee,Q[W]);for(let re=0;re<ie.length;re++){const Me=ie[re];Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,re+1,0,0,Ce,Ee,Me.image[W]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,re+1,fe,Ce,Ee,Me.image[W])}}}P(v,Ue)&&A(n.TEXTURE_CUBE_MAP),te.__version=Z.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ke(E,v,D,ee,Z,te){const ge=r.convert(D.format,D.colorSpace),oe=r.convert(D.type),ue=G(D.internalFormat,ge,oe,D.colorSpace);if(!i.get(v).__hasExternalTextures){const Ye=Math.max(1,v.width>>te),Q=Math.max(1,v.height>>te);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,te,ue,Ye,Q,v.depth,0,ge,oe,null):t.texImage2D(Z,te,ue,Ye,Q,0,ge,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Je(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,Z,i.get(D).__webglTexture,0,Ve(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,Z,i.get(D).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(E,v,D){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let ee=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(D||Je(v)){const Z=v.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Pn?ee=n.DEPTH_COMPONENT32F:Z.type===Cn&&(ee=n.DEPTH_COMPONENT24));const te=Ve(v);Je(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,ee,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,ee,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,ee,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){const ee=Ve(v);D&&Je(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,v.width,v.height):Je(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const ee=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Z=0;Z<ee.length;Z++){const te=ee[Z],ge=r.convert(te.format,te.colorSpace),oe=r.convert(te.type),ue=G(te.internalFormat,ge,oe,te.colorSpace),Ae=Ve(v);D&&Je(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ue,v.width,v.height):Je(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,ue,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ue,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function It(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const ee=i.get(v.depthTexture).__webglTexture,Z=Ve(v);if(v.depthTexture.format===Kn)Je(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(v.depthTexture.format===Ii)Je(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ye(E){const v=i.get(E),D=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");It(v.__webglFramebuffer,E)}else if(D){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]=n.createRenderbuffer(),U(v.__webglDepthbuffer[ee],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),U(v.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(E,v,D){const ee=i.get(E);v!==void 0&&ke(ee.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&ye(E)}function Re(E){const v=E.texture,D=i.get(E),ee=i.get(v);E.addEventListener("dispose",q),E.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=v.version,o.memory.textures++);const Z=E.isWebGLCubeRenderTarget===!0,te=E.isWebGLMultipleRenderTargets===!0,ge=w(E)||a;if(Z){D.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[oe]=[];for(let ue=0;ue<v.mipmaps.length;ue++)D.__webglFramebuffer[oe][ue]=n.createFramebuffer()}else D.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)D.__webglFramebuffer[oe]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(te)if(s.drawBuffers){const oe=E.texture;for(let ue=0,Ae=oe.length;ue<Ae;ue++){const Ye=i.get(oe[ue]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Je(E)===!1){const oe=te?v:[v];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ue=0;ue<oe.length;ue++){const Ae=oe[ue];D.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ue]);const Ye=r.convert(Ae.format,Ae.colorSpace),Q=r.convert(Ae.type),Ze=G(Ae.internalFormat,Ye,Q,Ae.colorSpace,E.isXRRenderTarget===!0),Ue=Ve(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Ze,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,D.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),U(D.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),We(n.TEXTURE_CUBE_MAP,v,ge);for(let oe=0;oe<6;oe++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)ke(D.__webglFramebuffer[oe][ue],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else ke(D.__webglFramebuffer[oe],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);P(v,ge)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const oe=E.texture;for(let ue=0,Ae=oe.length;ue<Ae;ue++){const Ye=oe[ue],Q=i.get(Ye);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),We(n.TEXTURE_2D,Ye,ge),ke(D.__webglFramebuffer,E,Ye,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),P(Ye,ge)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?oe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,ee.__webglTexture),We(oe,v,ge),a&&v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)ke(D.__webglFramebuffer[ue],E,v,n.COLOR_ATTACHMENT0,oe,ue);else ke(D.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,oe,0);P(v,ge)&&A(oe),t.unbindTexture()}E.depthBuffer&&ye(E)}function st(E){const v=w(E)||a,D=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0,Z=D.length;ee<Z;ee++){const te=D[ee];if(P(te,v)){const ge=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(te).__webglTexture;t.bindTexture(ge,oe),A(ge),t.unbindTexture()}}}function ze(E){if(a&&E.samples>0&&Je(E)===!1){const v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],D=E.width,ee=E.height;let Z=n.COLOR_BUFFER_BIT;const te=[],ge=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(E),ue=E.isWebGLMultipleRenderTargets===!0;if(ue)for(let Ae=0;Ae<v.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Ae=0;Ae<v.length;Ae++){te.push(n.COLOR_ATTACHMENT0+Ae),E.depthBuffer&&te.push(ge);const Ye=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Ye===!1&&(E.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ue&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Ae]),Ye===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ge]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ge])),ue){const Q=i.get(v[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,D,ee,0,0,D,ee,Z,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Ae=0;Ae<v.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Ae]);const Ye=i.get(v[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Ve(E){return Math.min(d,E.samples)}function Je(E){const v=i.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ft(E){const v=o.render.frame;_.get(E)!==v&&(_.set(E,v),E.update())}function St(E,v){const D=E.colorSpace,ee=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===So||D!==Sn&&D!==Ht&&(Ke.getTransfer(D)===tt?a===!1?e.has("EXT_sRGB")===!0&&ee===Zt?(E.format=So,E.minFilter=Gt,E.generateMipmaps=!1):v=Xl.sRGBToLinear(v):(ee!==Zt||Z!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),v}this.allocateTextureUnit=J,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=L,this.setTexture3D=V,this.setTextureCube=ce,this.rebindTextures=Ie,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Je}function Hm(n,e,t){const i=t.isWebGL2;function s(r,o=Ht){let a;const l=Ke.getTransfer(o);if(r===In)return n.UNSIGNED_BYTE;if(r===Ol)return n.UNSIGNED_SHORT_4_4_4_4;if(r===kl)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Mu)return n.BYTE;if(r===bu)return n.SHORT;if(r===Ao)return n.UNSIGNED_SHORT;if(r===Bl)return n.INT;if(r===Cn)return n.UNSIGNED_INT;if(r===Pn)return n.FLOAT;if(r===ts)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===wu)return n.ALPHA;if(r===Zt)return n.RGBA;if(r===Tu)return n.LUMINANCE;if(r===Au)return n.LUMINANCE_ALPHA;if(r===Kn)return n.DEPTH_COMPONENT;if(r===Ii)return n.DEPTH_STENCIL;if(r===So)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Cu)return n.RED;if(r===zl)return n.RED_INTEGER;if(r===Pu)return n.RG;if(r===Vl)return n.RG_INTEGER;if(r===Gl)return n.RGBA_INTEGER;if(r===Cr||r===Pr||r===Rr||r===Lr)if(l===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Cr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Cr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ia||r===sa||r===ra||r===oa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ia)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ra)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===oa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ru)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===aa||r===la)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===aa)return l===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===la)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ca||r===ua||r===ha||r===da||r===fa||r===pa||r===ma||r===ga||r===_a||r===va||r===xa||r===Sa||r===ya||r===Ea)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ca)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ua)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ha)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===da)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===fa)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pa)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ma)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ga)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_a)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===va)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xa)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sa)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ya)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ea)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ir||r===Ma||r===ba)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ir)return l===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ma)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ba)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Lu||r===wa||r===Ta||r===Aa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ir)return a.COMPRESSED_RED_RGTC1_EXT;if(r===wa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ta)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Aa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$n?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class Wm extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gs extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xm={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),h=this._getHandJoint(c,g);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Gs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class qm extends Bt{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Kn,u!==Kn&&u!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Kn&&(i=Cn),i===void 0&&u===Ii&&(i=$n),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jm extends Bi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,_=null;const g=t.getContextAttributes();let p=null,h=null;const M=[],y=[],w=new $t;w.layers.enable(1),w.viewport=new vt;const T=new $t;T.layers.enable(2),T.viewport=new vt;const P=[w,T],A=new Wm;A.layers.enable(1),A.layers.enable(2);let G=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let V=M[L];return V===void 0&&(V=new io,M[L]=V),V.getTargetRaySpace()},this.getControllerGrip=function(L){let V=M[L];return V===void 0&&(V=new io,M[L]=V),V.getGripSpace()},this.getHand=function(L){let V=M[L];return V===void 0&&(V=new io,M[L]=V),V.getHandSpace()};function b(L){const V=y.indexOf(L.inputSource);if(V===-1)return;const ce=M[V];ce!==void 0&&(ce.update(L.inputSource,L.frame,c||o),ce.dispatchEvent({type:L.type,data:L.inputSource}))}function B(){s.removeEventListener("select",b),s.removeEventListener("selectstart",b),s.removeEventListener("selectend",b),s.removeEventListener("squeeze",b),s.removeEventListener("squeezestart",b),s.removeEventListener("squeezeend",b),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",q);for(let L=0;L<M.length;L++){const V=y[L];V!==null&&(y[L]=null,M[L].disconnect(V))}G=null,S=null,e.setRenderTarget(p),m=null,f=null,d=null,s=null,h=null,Y.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",b),s.addEventListener("selectstart",b),s.addEventListener("selectend",b),s.addEventListener("squeeze",b),s.addEventListener("squeezestart",b),s.addEventListener("squeezeend",b),s.addEventListener("end",B),s.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,V),s.updateRenderState({baseLayer:m}),h=new Qn(m.framebufferWidth,m.framebufferHeight,{format:Zt,type:In,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let V=null,ce=null,de=null;g.depth&&(de=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=g.stencil?Ii:Kn,ce=g.stencil?$n:Cn);const me={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(me),s.updateRenderState({layers:[f]}),h=new Qn(f.textureWidth,f.textureHeight,{format:Zt,type:In,depthTexture:new qm(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Te=e.properties.get(h);Te.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Y.setContext(s),Y.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function q(L){for(let V=0;V<L.removed.length;V++){const ce=L.removed[V],de=y.indexOf(ce);de>=0&&(y[de]=null,M[de].disconnect(ce))}for(let V=0;V<L.added.length;V++){const ce=L.added[V];let de=y.indexOf(ce);if(de===-1){for(let Te=0;Te<M.length;Te++)if(Te>=y.length){y.push(ce),de=Te;break}else if(y[Te]===null){y[Te]=ce,de=Te;break}if(de===-1)break}const me=M[de];me&&me.connect(ce)}}const $=new O,R=new O;function F(L,V,ce){$.setFromMatrixPosition(V.matrixWorld),R.setFromMatrixPosition(ce.matrixWorld);const de=$.distanceTo(R),me=V.projectionMatrix.elements,Te=ce.projectionMatrix.elements,We=me[14]/(me[10]-1),Le=me[14]/(me[10]+1),Ne=(me[9]+1)/me[5],it=(me[9]-1)/me[5],ke=(me[8]-1)/me[0],U=(Te[8]+1)/Te[0],It=We*ke,ye=We*U,Ie=de/(-ke+U),Re=Ie*-ke;V.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Re),L.translateZ(Ie),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const st=We+Ie,ze=Le+Ie,Ve=It-Re,Je=ye+(de-Re),ft=Ne*Le/ze*st,St=it*Le/ze*st;L.projectionMatrix.makePerspective(Ve,Je,ft,St,st,ze),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function X(L,V){V===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(V.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;A.near=T.near=w.near=L.near,A.far=T.far=w.far=L.far,(G!==A.near||S!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),G=A.near,S=A.far);const V=L.parent,ce=A.cameras;X(A,V);for(let de=0;de<ce.length;de++)X(ce[de],V);ce.length===2?F(A,w,T):A.projectionMatrix.copy(w.projectionMatrix),H(L,A,V)};function H(L,V,ce){ce===null?L.matrix.copy(V.matrixWorld):(L.matrix.copy(ce.matrixWorld),L.matrix.invert(),L.matrix.multiply(V.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(V.projectionMatrix),L.projectionMatrixInverse.copy(V.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=yo*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(L){l=L,f!==null&&(f.fixedFoveation=L),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=L)};let J=null;function K(L,V){if(u=V.getViewerPose(c||o),_=V,u!==null){const ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let de=!1;ce.length!==A.cameras.length&&(A.cameras.length=0,de=!0);for(let me=0;me<ce.length;me++){const Te=ce[me];let We=null;if(m!==null)We=m.getViewport(Te);else{const Ne=d.getViewSubImage(f,Te);We=Ne.viewport,me===0&&(e.setRenderTargetTextures(h,Ne.colorTexture,f.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(h))}let Le=P[me];Le===void 0&&(Le=new $t,Le.layers.enable(me),Le.viewport=new vt,P[me]=Le),Le.matrix.fromArray(Te.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Te.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(We.x,We.y,We.width,We.height),me===0&&(A.matrix.copy(Le.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),de===!0&&A.cameras.push(Le)}}for(let ce=0;ce<M.length;ce++){const de=y[ce],me=M[ce];de!==null&&me!==void 0&&me.update(de,V,c||o)}J&&J(L,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),_=null}const Y=new ic;Y.setAnimationLoop(K),this.setAnimationLoop=function(L){J=L},this.dispose=function(){}}}function Ym(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Ql(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,M,y,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,w)):h.isMeshMatcapMaterial?(r(p,h),_(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),g(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,M,y):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Lt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Lt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const M=e.get(h).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const y=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*y,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,M,y){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*M,p.scale.value=y*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,M){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Lt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){const M=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $m(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,y){const w=y.program;i.uniformBlockBinding(M,w)}function c(M,y){let w=s[M.id];w===void 0&&(_(M),w=u(M),s[M.id]=w,M.addEventListener("dispose",p));const T=y.program;i.updateUBOMapping(M,T);const P=e.render.frame;r[M.id]!==P&&(f(M),r[M.id]=P)}function u(M){const y=d();M.__bindingPointIndex=y;const w=n.createBuffer(),T=M.__size,P=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,T,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,w),w}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=s[M.id],w=M.uniforms,T=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let P=0,A=w.length;P<A;P++){const G=w[P];if(m(G,P,T)===!0){const S=G.__offset,b=Array.isArray(G.value)?G.value:[G.value];let B=0;for(let q=0;q<b.length;q++){const $=b[q],R=g($);typeof $=="number"?(G.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,S+B,G.__data)):$.isMatrix3?(G.__data[0]=$.elements[0],G.__data[1]=$.elements[1],G.__data[2]=$.elements[2],G.__data[3]=$.elements[0],G.__data[4]=$.elements[3],G.__data[5]=$.elements[4],G.__data[6]=$.elements[5],G.__data[7]=$.elements[0],G.__data[8]=$.elements[6],G.__data[9]=$.elements[7],G.__data[10]=$.elements[8],G.__data[11]=$.elements[0]):($.toArray(G.__data,B),B+=R.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,G.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,y,w){const T=M.value;if(w[y]===void 0){if(typeof T=="number")w[y]=T;else{const P=Array.isArray(T)?T:[T],A=[];for(let G=0;G<P.length;G++)A.push(P[G].clone());w[y]=A}return!0}else if(typeof T=="number"){if(w[y]!==T)return w[y]=T,!0}else{const P=Array.isArray(w[y])?w[y]:[w[y]],A=Array.isArray(T)?T:[T];for(let G=0;G<P.length;G++){const S=P[G];if(S.equals(A[G])===!1)return S.copy(A[G]),!0}}return!1}function _(M){const y=M.uniforms;let w=0;const T=16;let P=0;for(let A=0,G=y.length;A<G;A++){const S=y[A],b={boundary:0,storage:0},B=Array.isArray(S.value)?S.value:[S.value];for(let q=0,$=B.length;q<$;q++){const R=B[q],F=g(R);b.boundary+=F.boundary,b.storage+=F.storage}if(S.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=w,A>0){P=w%T;const q=T-P;P!==0&&q-b.boundary<0&&(w+=T-P,S.__offset=w)}w+=b.storage}return P=w%T,P>0&&(w+=T-P),M.__size=w,M.__cache={},this}function g(M){const y={boundary:0,storage:0};return typeof M=="number"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function p(M){const y=M.target;y.removeEventListener("dispose",p);const w=o.indexOf(y.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function h(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class cc{constructor(e={}){const{canvas:t=Xu(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const h=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this._useLegacyLights=!1,this.toneMapping=Ln,this.toneMappingExposure=1;const y=this;let w=!1,T=0,P=0,A=null,G=-1,S=null;const b=new vt,B=new vt;let q=null;const $=new j(0);let R=0,F=t.width,X=t.height,H=1,J=null,K=null;const Y=new vt(0,0,F,X),L=new vt(0,0,F,X);let V=!1;const ce=new nc;let de=!1,me=!1,Te=null;const We=new xt,Le=new Qe,Ne=new O,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return A===null?H:1}let U=i;function It(x,I){for(let N=0;N<x.length;N++){const k=x[N],z=t.getContext(k,I);if(z!==null)return z}return null}try{const x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${To}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",le,!1),U===null){const I=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&I.shift(),U=It(I,x),U===null)throw It(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ye,Ie,Re,st,ze,Ve,Je,ft,St,E,v,D,ee,Z,te,ge,oe,ue,Ae,Ye,Q,Ze,Ue,Ce;function Ee(){ye=new rp(U),Ie=new Qf(U,ye,e),ye.init(Ie),Ze=new Hm(U,ye,Ie),Re=new Vm(U,ye,Ie),st=new lp(U),ze=new Am,Ve=new Gm(U,ye,Re,ze,Ie,Ze,st),Je=new tp(y),ft=new sp(y),St=new _h(U,Ie),Ue=new Zf(U,ye,St,Ie),E=new op(U,St,st,Ue),v=new dp(U,E,St,st),Ae=new hp(U,Ie,Ve),ge=new ep(ze),D=new Tm(y,Je,ft,ye,Ie,Ue,ge),ee=new Ym(y,ze),Z=new Pm,te=new Dm(ye,Ie),ue=new Kf(y,Je,ft,Re,v,f,l),oe=new zm(y,v,Ie),Ce=new $m(U,st,Ie,Re),Ye=new Jf(U,ye,st,Ie),Q=new ap(U,ye,st,Ie),st.programs=D.programs,y.capabilities=Ie,y.extensions=ye,y.properties=ze,y.renderLists=Z,y.shadowMap=oe,y.state=Re,y.info=st}Ee();const fe=new jm(y,U);this.xr=fe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const x=ye.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ye.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(x){x!==void 0&&(H=x,this.setSize(F,X,!1))},this.getSize=function(x){return x.set(F,X)},this.setSize=function(x,I,N=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=x,X=I,t.width=Math.floor(x*H),t.height=Math.floor(I*H),N===!0&&(t.style.width=x+"px",t.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(F*H,X*H).floor()},this.setDrawingBufferSize=function(x,I,N){F=x,X=I,H=N,t.width=Math.floor(x*N),t.height=Math.floor(I*N),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(b)},this.getViewport=function(x){return x.copy(Y)},this.setViewport=function(x,I,N,k){x.isVector4?Y.set(x.x,x.y,x.z,x.w):Y.set(x,I,N,k),Re.viewport(b.copy(Y).multiplyScalar(H).floor())},this.getScissor=function(x){return x.copy(L)},this.setScissor=function(x,I,N,k){x.isVector4?L.set(x.x,x.y,x.z,x.w):L.set(x,I,N,k),Re.scissor(B.copy(L).multiplyScalar(H).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(x){Re.setScissorTest(V=x)},this.setOpaqueSort=function(x){J=x},this.setTransparentSort=function(x){K=x},this.getClearColor=function(x){return x.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(x=!0,I=!0,N=!0){let k=0;if(x){let z=!1;if(A!==null){const he=A.texture.format;z=he===Gl||he===Vl||he===zl}if(z){const he=A.texture.type,_e=he===In||he===Cn||he===Ao||he===$n||he===Ol||he===kl,be=ue.getClearColor(),Pe=ue.getClearAlpha(),Oe=be.r,Fe=be.g,De=be.b;_e?(m[0]=Oe,m[1]=Fe,m[2]=De,m[3]=Pe,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=Oe,_[1]=Fe,_[2]=De,_[3]=Pe,U.clearBufferiv(U.COLOR,0,_))}else k|=U.COLOR_BUFFER_BIT}I&&(k|=U.DEPTH_BUFFER_BIT),N&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Z.dispose(),te.dispose(),ze.dispose(),Je.dispose(),ft.dispose(),v.dispose(),Ue.dispose(),Ce.dispose(),D.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",zt),fe.removeEventListener("sessionend",et),Te&&(Te.dispose(),Te=null),bt.stop()};function Xe(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const x=st.autoReset,I=oe.enabled,N=oe.autoUpdate,k=oe.needsUpdate,z=oe.type;Ee(),st.autoReset=x,oe.enabled=I,oe.autoUpdate=N,oe.needsUpdate=k,oe.type=z}function le(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ie(x){const I=x.target;I.removeEventListener("dispose",ie),W(I)}function W(x){re(x),ze.remove(x)}function re(x){const I=ze.get(x).programs;I!==void 0&&(I.forEach(function(N){D.releaseProgram(N)}),x.isShaderMaterial&&D.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,N,k,z,he){I===null&&(I=it);const _e=z.isMesh&&z.matrixWorld.determinant()<0,be=kc(x,I,N,k,z);Re.setMaterial(k,_e);let Pe=N.index,Oe=1;if(k.wireframe===!0){if(Pe=E.getWireframeAttribute(N),Pe===void 0)return;Oe=2}const Fe=N.drawRange,De=N.attributes.position;let at=Fe.start*Oe,Ut=(Fe.start+Fe.count)*Oe;he!==null&&(at=Math.max(at,he.start*Oe),Ut=Math.min(Ut,(he.start+he.count)*Oe)),Pe!==null?(at=Math.max(at,0),Ut=Math.min(Ut,Pe.count)):De!=null&&(at=Math.max(at,0),Ut=Math.min(Ut,De.count));const pt=Ut-at;if(pt<0||pt===1/0)return;Ue.setup(z,k,be,N,Pe);let cn,rt=Ye;if(Pe!==null&&(cn=St.get(Pe),rt=Q,rt.setIndex(cn)),z.isMesh)k.wireframe===!0?(Re.setLineWidth(k.wireframeLinewidth*ke()),rt.setMode(U.LINES)):rt.setMode(U.TRIANGLES);else if(z.isLine){let He=k.linewidth;He===void 0&&(He=1),Re.setLineWidth(He*ke()),z.isLineSegments?rt.setMode(U.LINES):z.isLineLoop?rt.setMode(U.LINE_LOOP):rt.setMode(U.LINE_STRIP)}else z.isPoints?rt.setMode(U.POINTS):z.isSprite&&rt.setMode(U.TRIANGLES);if(z.isInstancedMesh)rt.renderInstances(at,pt,z.count);else if(N.isInstancedBufferGeometry){const He=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Mr=Math.min(N.instanceCount,He);rt.renderInstances(at,pt,Mr)}else rt.render(at,pt)};function Me(x,I,N){x.transparent===!0&&x.side===sn&&x.forceSinglePass===!1?(x.side=Lt,x.needsUpdate=!0,xs(x,I,N),x.side=Fn,x.needsUpdate=!0,xs(x,I,N),x.side=sn):xs(x,I,N)}this.compile=function(x,I,N=null){N===null&&(N=x),p=te.get(N),p.init(),M.push(p),N.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),x!==N&&x.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(y._useLegacyLights);const k=new Set;return x.traverse(function(z){const he=z.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){const be=he[_e];Me(be,N,z),k.add(be)}else Me(he,N,z),k.add(he)}),M.pop(),p=null,k},this.compileAsync=function(x,I,N=null){const k=this.compile(x,I,N);return new Promise(z=>{function he(){if(k.forEach(function(_e){ze.get(_e).currentProgram.isReady()&&k.delete(_e)}),k.size===0){z(x);return}setTimeout(he,10)}ye.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let $e=null;function lt(x){$e&&$e(x)}function zt(){bt.stop()}function et(){bt.start()}const bt=new ic;bt.setAnimationLoop(lt),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(x){$e=x,fe.setAnimationLoop(x),x===null?bt.stop():bt.start()},fe.addEventListener("sessionstart",zt),fe.addEventListener("sessionend",et),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(I),I=fe.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,I,A),p=te.get(x,M.length),p.init(),M.push(p),We.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ce.setFromProjectionMatrix(We),me=this.localClippingEnabled,de=ge.init(this.clippingPlanes,me),g=Z.get(x,h.length),g.init(),h.push(g),Jt(x,I,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(J,K),this.info.render.frame++,de===!0&&ge.beginShadows();const N=p.state.shadowsArray;if(oe.render(N,x,I),de===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),ue.render(g,x),p.setupLights(y._useLegacyLights),I.isArrayCamera){const k=I.cameras;for(let z=0,he=k.length;z<he;z++){const _e=k[z];Wo(g,x,_e,_e.viewport)}}else Wo(g,x,I);A!==null&&(Ve.updateMultisampleRenderTarget(A),Ve.updateRenderTargetMipmap(A)),x.isScene===!0&&x.onAfterRender(y,x,I),Ue.resetDefaultState(),G=-1,S=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function Jt(x,I,N,k){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)N=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ce.intersectsSprite(x)){k&&Ne.setFromMatrixPosition(x.matrixWorld).applyMatrix4(We);const _e=v.update(x),be=x.material;be.visible&&g.push(x,_e,be,N,Ne.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ce.intersectsObject(x))){const _e=v.update(x),be=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ne.copy(x.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ne.copy(_e.boundingSphere.center)),Ne.applyMatrix4(x.matrixWorld).applyMatrix4(We)),Array.isArray(be)){const Pe=_e.groups;for(let Oe=0,Fe=Pe.length;Oe<Fe;Oe++){const De=Pe[Oe],at=be[De.materialIndex];at&&at.visible&&g.push(x,_e,at,N,Ne.z,De)}}else be.visible&&g.push(x,_e,be,N,Ne.z,null)}}const he=x.children;for(let _e=0,be=he.length;_e<be;_e++)Jt(he[_e],I,N,k)}function Wo(x,I,N,k){const z=x.opaque,he=x.transmissive,_e=x.transparent;p.setupLightsView(N),de===!0&&ge.setGlobalState(y.clippingPlanes,N),he.length>0&&Oc(z,he,I,N),k&&Re.viewport(b.copy(k)),z.length>0&&vs(z,I,N),he.length>0&&vs(he,I,N),_e.length>0&&vs(_e,I,N),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Oc(x,I,N,k){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;const he=Ie.isWebGL2;Te===null&&(Te=new Qn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?ts:In,minFilter:es,samples:he?4:0})),y.getDrawingBufferSize(Le),he?Te.setSize(Le.x,Le.y):Te.setSize(Eo(Le.x),Eo(Le.y));const _e=y.getRenderTarget();y.setRenderTarget(Te),y.getClearColor($),R=y.getClearAlpha(),R<1&&y.setClearColor(16777215,.5),y.clear();const be=y.toneMapping;y.toneMapping=Ln,vs(x,N,k),Ve.updateMultisampleRenderTarget(Te),Ve.updateRenderTargetMipmap(Te);let Pe=!1;for(let Oe=0,Fe=I.length;Oe<Fe;Oe++){const De=I[Oe],at=De.object,Ut=De.geometry,pt=De.material,cn=De.group;if(pt.side===sn&&at.layers.test(k.layers)){const rt=pt.side;pt.side=Lt,pt.needsUpdate=!0,Xo(at,N,k,Ut,pt,cn),pt.side=rt,pt.needsUpdate=!0,Pe=!0}}Pe===!0&&(Ve.updateMultisampleRenderTarget(Te),Ve.updateRenderTargetMipmap(Te)),y.setRenderTarget(_e),y.setClearColor($,R),y.toneMapping=be}function vs(x,I,N){const k=I.isScene===!0?I.overrideMaterial:null;for(let z=0,he=x.length;z<he;z++){const _e=x[z],be=_e.object,Pe=_e.geometry,Oe=k===null?_e.material:k,Fe=_e.group;be.layers.test(N.layers)&&Xo(be,I,N,Pe,Oe,Fe)}}function Xo(x,I,N,k,z,he){x.onBeforeRender(y,I,N,k,z,he),x.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(y,I,N,k,x,he),z.transparent===!0&&z.side===sn&&z.forceSinglePass===!1?(z.side=Lt,z.needsUpdate=!0,y.renderBufferDirect(N,I,k,z,x,he),z.side=Fn,z.needsUpdate=!0,y.renderBufferDirect(N,I,k,z,x,he),z.side=sn):y.renderBufferDirect(N,I,k,z,x,he),x.onAfterRender(y,I,N,k,z,he)}function xs(x,I,N){I.isScene!==!0&&(I=it);const k=ze.get(x),z=p.state.lights,he=p.state.shadowsArray,_e=z.state.version,be=D.getParameters(x,z.state,he,I,N),Pe=D.getProgramCacheKey(be);let Oe=k.programs;k.environment=x.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(x.isMeshStandardMaterial?ft:Je).get(x.envMap||k.environment),Oe===void 0&&(x.addEventListener("dispose",ie),Oe=new Map,k.programs=Oe);let Fe=Oe.get(Pe);if(Fe!==void 0){if(k.currentProgram===Fe&&k.lightsStateVersion===_e)return jo(x,be),Fe}else be.uniforms=D.getUniforms(x),x.onBuild(N,be,y),x.onBeforeCompile(be,y),Fe=D.acquireProgram(be,Pe),Oe.set(Pe,Fe),k.uniforms=be.uniforms;const De=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(De.clippingPlanes=ge.uniform),jo(x,be),k.needsLights=Vc(x),k.lightsStateVersion=_e,k.needsLights&&(De.ambientLightColor.value=z.state.ambient,De.lightProbe.value=z.state.probe,De.directionalLights.value=z.state.directional,De.directionalLightShadows.value=z.state.directionalShadow,De.spotLights.value=z.state.spot,De.spotLightShadows.value=z.state.spotShadow,De.rectAreaLights.value=z.state.rectArea,De.ltc_1.value=z.state.rectAreaLTC1,De.ltc_2.value=z.state.rectAreaLTC2,De.pointLights.value=z.state.point,De.pointLightShadows.value=z.state.pointShadow,De.hemisphereLights.value=z.state.hemi,De.directionalShadowMap.value=z.state.directionalShadowMap,De.directionalShadowMatrix.value=z.state.directionalShadowMatrix,De.spotShadowMap.value=z.state.spotShadowMap,De.spotLightMatrix.value=z.state.spotLightMatrix,De.spotLightMap.value=z.state.spotLightMap,De.pointShadowMap.value=z.state.pointShadowMap,De.pointShadowMatrix.value=z.state.pointShadowMatrix),k.currentProgram=Fe,k.uniformsList=null,Fe}function qo(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=Xs.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function jo(x,I){const N=ze.get(x);N.outputColorSpace=I.outputColorSpace,N.instancing=I.instancing,N.instancingColor=I.instancingColor,N.skinning=I.skinning,N.morphTargets=I.morphTargets,N.morphNormals=I.morphNormals,N.morphColors=I.morphColors,N.morphTargetsCount=I.morphTargetsCount,N.numClippingPlanes=I.numClippingPlanes,N.numIntersection=I.numClipIntersection,N.vertexAlphas=I.vertexAlphas,N.vertexTangents=I.vertexTangents,N.toneMapping=I.toneMapping}function kc(x,I,N,k,z){I.isScene!==!0&&(I=it),Ve.resetTextureUnits();const he=I.fog,_e=k.isMeshStandardMaterial?I.environment:null,be=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Sn,Pe=(k.isMeshStandardMaterial?ft:Je).get(k.envMap||_e),Oe=k.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Fe=!!N.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),De=!!N.morphAttributes.position,at=!!N.morphAttributes.normal,Ut=!!N.morphAttributes.color;let pt=Ln;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pt=y.toneMapping);const cn=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,rt=cn!==void 0?cn.length:0,He=ze.get(k),Mr=p.state.lights;if(de===!0&&(me===!0||x!==S)){const Ft=x===S&&k.id===G;ge.setState(k,x,Ft)}let ct=!1;k.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Mr.state.version||He.outputColorSpace!==be||z.isInstancedMesh&&He.instancing===!1||!z.isInstancedMesh&&He.instancing===!0||z.isSkinnedMesh&&He.skinning===!1||!z.isSkinnedMesh&&He.skinning===!0||z.isInstancedMesh&&He.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&He.instancingColor===!1&&z.instanceColor!==null||He.envMap!==Pe||k.fog===!0&&He.fog!==he||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ge.numPlanes||He.numIntersection!==ge.numIntersection)||He.vertexAlphas!==Oe||He.vertexTangents!==Fe||He.morphTargets!==De||He.morphNormals!==at||He.morphColors!==Ut||He.toneMapping!==pt||Ie.isWebGL2===!0&&He.morphTargetsCount!==rt)&&(ct=!0):(ct=!0,He.__version=k.version);let Bn=He.currentProgram;ct===!0&&(Bn=xs(k,I,z));let Yo=!1,Wi=!1,br=!1;const wt=Bn.getUniforms(),On=He.uniforms;if(Re.useProgram(Bn.program)&&(Yo=!0,Wi=!0,br=!0),k.id!==G&&(G=k.id,Wi=!0),Yo||S!==x){wt.setValue(U,"projectionMatrix",x.projectionMatrix),wt.setValue(U,"viewMatrix",x.matrixWorldInverse);const Ft=wt.map.cameraPosition;Ft!==void 0&&Ft.setValue(U,Ne.setFromMatrixPosition(x.matrixWorld)),Ie.logarithmicDepthBuffer&&wt.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&wt.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,Wi=!0,br=!0)}if(z.isSkinnedMesh){wt.setOptional(U,z,"bindMatrix"),wt.setOptional(U,z,"bindMatrixInverse");const Ft=z.skeleton;Ft&&(Ie.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),wt.setValue(U,"boneTexture",Ft.boneTexture,Ve),wt.setValue(U,"boneTextureSize",Ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const wr=N.morphAttributes;if((wr.position!==void 0||wr.normal!==void 0||wr.color!==void 0&&Ie.isWebGL2===!0)&&Ae.update(z,N,Bn),(Wi||He.receiveShadow!==z.receiveShadow)&&(He.receiveShadow=z.receiveShadow,wt.setValue(U,"receiveShadow",z.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(On.envMap.value=Pe,On.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Wi&&(wt.setValue(U,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&zc(On,br),he&&k.fog===!0&&ee.refreshFogUniforms(On,he),ee.refreshMaterialUniforms(On,k,H,X,Te),Xs.upload(U,qo(He),On,Ve)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Xs.upload(U,qo(He),On,Ve),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&wt.setValue(U,"center",z.center),wt.setValue(U,"modelViewMatrix",z.modelViewMatrix),wt.setValue(U,"normalMatrix",z.normalMatrix),wt.setValue(U,"modelMatrix",z.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ft=k.uniformsGroups;for(let Tr=0,Gc=Ft.length;Tr<Gc;Tr++)if(Ie.isWebGL2){const $o=Ft[Tr];Ce.update($o,Bn),Ce.bind($o,Bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bn}function zc(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function Vc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(x,I,N){ze.get(x.texture).__webglTexture=I,ze.get(x.depthTexture).__webglTexture=N;const k=ze.get(x);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=N===void 0,k.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,I){const N=ze.get(x);N.__webglFramebuffer=I,N.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,N=0){A=x,T=I,P=N;let k=!0,z=null,he=!1,_e=!1;if(x){const Pe=ze.get(x);Pe.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(U.FRAMEBUFFER,null),k=!1):Pe.__webglFramebuffer===void 0?Ve.setupRenderTarget(x):Pe.__hasExternalTextures&&Ve.rebindTextures(x,ze.get(x.texture).__webglTexture,ze.get(x.depthTexture).__webglTexture);const Oe=x.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(_e=!0);const Fe=ze.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Fe[I])?z=Fe[I][N]:z=Fe[I],he=!0):Ie.isWebGL2&&x.samples>0&&Ve.useMultisampledRTT(x)===!1?z=ze.get(x).__webglMultisampledFramebuffer:Array.isArray(Fe)?z=Fe[N]:z=Fe,b.copy(x.viewport),B.copy(x.scissor),q=x.scissorTest}else b.copy(Y).multiplyScalar(H).floor(),B.copy(L).multiplyScalar(H).floor(),q=V;if(Re.bindFramebuffer(U.FRAMEBUFFER,z)&&Ie.drawBuffers&&k&&Re.drawBuffers(x,z),Re.viewport(b),Re.scissor(B),Re.setScissorTest(q),he){const Pe=ze.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,Pe.__webglTexture,N)}else if(_e){const Pe=ze.get(x.texture),Oe=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pe.__webglTexture,N||0,Oe)}G=-1},this.readRenderTargetPixels=function(x,I,N,k,z,he,_e){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ze.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be){Re.bindFramebuffer(U.FRAMEBUFFER,be);try{const Pe=x.texture,Oe=Pe.format,Fe=Pe.type;if(Oe!==Zt&&Ze.convert(Oe)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Fe===ts&&(ye.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Fe!==In&&Ze.convert(Fe)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Pn&&(Ie.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-k&&N>=0&&N<=x.height-z&&U.readPixels(I,N,k,z,Ze.convert(Oe),Ze.convert(Fe),he)}finally{const Pe=A!==null?ze.get(A).__webglFramebuffer:null;Re.bindFramebuffer(U.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(x,I,N=0){const k=Math.pow(2,-N),z=Math.floor(I.image.width*k),he=Math.floor(I.image.height*k);Ve.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,N,0,0,x.x,x.y,z,he),Re.unbindTexture()},this.copyTextureToTexture=function(x,I,N,k=0){const z=I.image.width,he=I.image.height,_e=Ze.convert(N.format),be=Ze.convert(N.type);Ve.setTexture2D(N,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment),I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,k,x.x,x.y,z,he,_e,be,I.image.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,k,x.x,x.y,I.mipmaps[0].width,I.mipmaps[0].height,_e,I.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,k,x.x,x.y,_e,be,I.image),k===0&&N.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(x,I,N,k,z=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=x.max.x-x.min.x+1,_e=x.max.y-x.min.y+1,be=x.max.z-x.min.z+1,Pe=Ze.convert(k.format),Oe=Ze.convert(k.type);let Fe;if(k.isData3DTexture)Ve.setTexture3D(k,0),Fe=U.TEXTURE_3D;else if(k.isDataArrayTexture)Ve.setTexture2DArray(k,0),Fe=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const De=U.getParameter(U.UNPACK_ROW_LENGTH),at=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ut=U.getParameter(U.UNPACK_SKIP_PIXELS),pt=U.getParameter(U.UNPACK_SKIP_ROWS),cn=U.getParameter(U.UNPACK_SKIP_IMAGES),rt=N.isCompressedTexture?N.mipmaps[0]:N.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,rt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,x.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,x.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,x.min.z),N.isDataTexture||N.isData3DTexture?U.texSubImage3D(Fe,z,I.x,I.y,I.z,he,_e,be,Pe,Oe,rt.data):N.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Fe,z,I.x,I.y,I.z,he,_e,be,Pe,rt.data)):U.texSubImage3D(Fe,z,I.x,I.y,I.z,he,_e,be,Pe,Oe,rt),U.pixelStorei(U.UNPACK_ROW_LENGTH,De),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,at),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ut),U.pixelStorei(U.UNPACK_SKIP_ROWS,pt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,cn),z===0&&k.generateMipmaps&&U.generateMipmap(Fe),Re.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?Ve.setTextureCube(x,0):x.isData3DTexture?Ve.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ve.setTexture2DArray(x,0):Ve.setTexture2D(x,0),Re.unbindTexture()},this.resetState=function(){T=0,P=0,A=null,Re.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Co?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===ir?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_t?Zn:Hl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Zn?_t:Sn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Km extends cc{}Km.prototype.isWebGL1Renderer=!0;class Zm extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);class ni{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(s=>{const r=this.resolveName(s);this.callbacks[r.namespace]instanceof Object||(this.callbacks[r.namespace]={}),this.callbacks[r.namespace][r.value]instanceof Array||(this.callbacks[r.namespace][r.value]=[]),this.callbacks[r.namespace][r.value].push(t)}),this)}off(e){return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(i=>{const s=this.resolveName(i);if(s.namespace!=="base"&&s.value==="")delete this.callbacks[s.namespace];else if(s.namespace==="base")for(const r in this.callbacks)this.callbacks[r]instanceof Object&&this.callbacks[r][s.value]instanceof Array&&(delete this.callbacks[r][s.value],Object.keys(this.callbacks[r]).length===0&&delete this.callbacks[r]);else this.callbacks[s.namespace]instanceof Object&&this.callbacks[s.namespace][s.value]instanceof Array&&(delete this.callbacks[s.namespace][s.value],Object.keys(this.callbacks[s.namespace]).length===0&&delete this.callbacks[s.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;let i=null;const s=t instanceof Array?t:[];let r=this.resolveNames(e);if(r=this.resolveName(r[0]),r.namespace==="base")for(const o in this.callbacks)this.callbacks[o]instanceof Object&&this.callbacks[o][r.value]instanceof Array&&this.callbacks[o][r.value].forEach(function(a){a.apply(this,s)});else if(this.callbacks[r.namespace]instanceof Object){if(r.value==="")return console.warn("wrong name"),this;this.callbacks[r.namespace][r.value].forEach(function(o){o.apply(this,s)})}return i}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){const t={},i=e.split(".");return t.original=e,t.value=i[0],t.namespace="base",i.length>1&&i[1]!==""&&(t.namespace=i[1]),t}}class Jm extends ni{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.aspect=this.width/this.height,window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.aspect=this.width/this.height,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.trigger("resize")})}}class Qm extends ni{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,window.requestAnimationFrame(()=>{this.tick()})}tick(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.trigger("tick"),window.requestAnimationFrame(()=>{this.tick()})}}class eg{constructor(){this.experience=new Nn,this.debug=this.experience.debug,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("Camera"),this.debugFolder.close()),this.setInstance()}setInstance(){this.instance=new sc(-1,1,1,-1),this.instance.position.set(0,0,1),this.scene.add(this.instance),this.debug.active}resize(){this.instance.aspect=this.sizes.width/this.sizes.height}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class an{constructor(e,t,i,s,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),an.nextNameID=an.nextNameID||0,this.$name.id=`lil-gui-name-${++an.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class tg extends an{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function bo(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const ng={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:bo,toHexString:bo},ns={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},ig={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,e,t=1){const i=ns.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;const s=n*i<<16^e*i<<8^t*i<<0;return ns.toHexString(s)}},sg={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=ns.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;const s=n*i<<16^e*i<<8^t*i<<0;return ns.toHexString(s)}},rg=[ng,ns,ig,sg];function og(n){return rg.find(e=>e.match(n))}class ag extends an{constructor(e,t,i,s){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=og(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=bo(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class so extends an{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class lg extends an{constructor(e,t,i,s,r,o){super(e,t,i,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let M=parseFloat(this.$input.value);isNaN(M)||(this._stepExplicit&&(M=this._snap(M)),this.setValue(this._clamp(M)))},i=M=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+M),this.$input.value=this.getValue())},s=M=>{M.key==="Enter"&&this.$input.blur(),M.code==="ArrowUp"&&(M.preventDefault(),i(this._step*this._arrowKeyMultiplier(M))),M.code==="ArrowDown"&&(M.preventDefault(),i(this._step*this._arrowKeyMultiplier(M)*-1))},r=M=>{this._inputFocused&&(M.preventDefault(),i(this._step*this._normalizeMouseWheel(M)))};let o=!1,a,l,c,u,d;const f=5,m=M=>{a=M.clientX,l=c=M.clientY,o=!0,u=this.getValue(),d=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",g)},_=M=>{if(o){const y=M.clientX-a,w=M.clientY-l;Math.abs(w)>f?(M.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>f&&g()}if(!o){const y=M.clientY-c;d-=y*this._step*this._arrowKeyMultiplier(M),u+d>this._max?d=this._max-u:u+d<this._min&&(d=this._min-u),this._snapClampSetValue(u+d)}c=M.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",g)},p=()=>{this._inputFocused=!0},h=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",h)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(h,M,y,w,T)=>(h-M)/(y-M)*(T-w)+w,t=h=>{const M=this.$slider.getBoundingClientRect();let y=e(h,M.left,M.right,this._min,this._max);this._snapClampSetValue(y)},i=h=>{this._setDraggingStyle(!0),t(h.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=h=>{t(h.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=h=>{h.preventDefault(),this._setDraggingStyle(!0),t(h.touches[0].clientX),o=!1},u=h=>{h.touches.length>1||(this._hasScrollBar?(a=h.touches[0].clientX,l=h.touches[0].clientY,o=!0):c(h),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",f))},d=h=>{if(o){const M=h.touches[0].clientX-a,y=h.touches[0].clientY-l;Math.abs(M)>Math.abs(y)?c(h):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f))}else h.preventDefault(),t(h.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f)},m=this._callOnFinishChange.bind(this),_=400;let g;const p=h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const y=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(m,_)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class cg extends an{constructor(e,t,i,s){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class ug extends an{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const hg=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function dg(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let gl=!1;class Lo{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!gl&&a&&(dg(hg),gl=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,t,i,s,r){if(Object(i)===i)return new cg(this,e,t,i);const o=e[t];switch(typeof o){case"number":return new lg(this,e,t,i,s,r);case"boolean":return new tg(this,e,t);case"string":return new ug(this,e,t);case"function":return new so(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new ag(this,e,t,i)}addFolder(e){const t=new Lo({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof so||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof so)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const fg=Lo;class pg{constructor(){this.active=window.location.hash=="#debug",this.active&&(this.ui=new fg)}}class mg extends ni{constructor(){super(),this.settings=new Nn().settings,this.clickHeld=!1,this.lastClick=Date.now(),this.x=0,this.y=0,this.deltaX=0,this.deltaY=0,this.scrollDeltaY=0,this.touchPointDistance=null,this.doubleClickDelta=400,this.target=null,this.touchOnly=!1;const e=document.getElementById("viewer"),t=document.getElementById("main-canvas");this.addHandlesToElement(t),this.addHandlesToElement(e)}addHandlesToElement(e){this.addMouseHandlers(e),this.addTouchHandlers(e)}addMouseHandlers(e){e.addEventListener("mousedown",t=>{this.target=t.target,t.button===0&&(this.clickHeld=!0);const i=Date.now();i-this.lastClick<this.doubleClickDelta&&(this.trigger("doubleClick"),this.clickHeld=!1),this.lastClick=i}),e.addEventListener("mouseup",t=>{this.target=t.target,t.button===0&&(this.clickHeld=!1)}),e.addEventListener("mousemove",t=>{this.touchOnly||(this.deltaX=this.x-t.x,this.deltaY=this.y-t.y,this.x=t.x,this.y=t.y,this.trigger("mousemove"))}),e.addEventListener("wheel",t=>{this.scrollDeltaY=t.deltaY*this.settings.scrollZoomSpeed,this.trigger("scroll")})}addTouchHandlers(e){e.addEventListener("touchstart",t=>{this.touchOnly=!0,this.clickHeld=!0,this.target=t.target,t.touches.length==1&&(this.x=t.touches[0].clientX,this.y=t.touches[0].clientY)}),e.addEventListener("touchend",()=>{this.clickHeld=!1,this.touchPointDistance=null}),e.addEventListener("touchmove",t=>{t.touches.length>1?this.handleMultiTouch(t):this.handleSingleTouch(t)})}handleMultiTouch(e){const t=e.touches[0],i=e.touches[1],s=t.clientX-i.clientX,r=t.clientY-i.clientY,o=s**2+r**2,a=(t.clientX+i.clientX)/2,l=(t.clientY+i.clientY)/2;this.deltaX=this.x-a,this.deltaY=this.y-l,this.x=a,this.y=l,this.touchPointDistance!=null&&(this.scrollDeltaY=-(o-this.touchPointDistance)/20,this.trigger("scroll"),this.trigger("touchmove")),this.touchPointDistance=o}handleSingleTouch(e){this.deltaX=this.x-e.touches[0].clientX,this.deltaY=this.y-e.touches[0].clientY,this.x=e.touches[0].clientX,this.y=e.touches[0].clientY,this.trigger("touchmove"),this.touchPointDistance=null}}class gg{constructor(){this.experience=new Nn,this.debug=this.experience.debug,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.camera=this.experience.camera,this.mouse=this.experience.mouse,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("Renderer"),this.debugFolder.close()),this.setInstance()}setInstance(){this.instance=new cc({canvas:this.canvas,preserveDrawingBuffer:!0}),this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}onLoad(){this.mouse=this.experience.mouse}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}update(){this.instance.render(this.scene,this.camera.instance)}doubleClick(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():this.instance.domElement.requestFullscreen()}}class ii extends ni{constructor(){super(),this.initExperienceReferences(),this.initDebug()}initExperienceReferences(){this.experience=new Nn,this.debug=this.experience.debug,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.time=this.experience.time,this.mouse=this.experience.mouse,this.shaderMaterial=this.experience.shaderMaterial,this.animation=this.experience.animation,this.keyboard=this.experience.keyboard,this.projectList=this.experience.projectList,this.project=this.experience.project,this.shader=this.experience.shader,this.shaderUniforms=this.shaderMaterial.getUniforms(),this.palettes=this.experience.palettes}initDebug(){this.debug.active&&(this.debugFolder=this.debug.ui.addFolder(this.constructor.name),this.debugFolder.close())}}class _g extends ii{constructor(){super()}getUniformValues(){const e={};for(const[t,i]of Object.entries(this.shaderUniforms))e[t]={value:i.value};return e}setUniformValues(e){if(e)for(const[t,i]of Object.entries(e))typeof i==Object&&(this.shaderUniforms[t].value=i.value)}}class uc{constructor(e,t,i=null,s=null){this.id=e,this.name=t,this.image=i,this.lastModified=s?Date.parse(s):Date.now()}getSnapshot(){return{id:this.id,name:this.name,image:this.image,lastModified:this.lastModified.toString()}}setImage(e){this.image=e}updateModified(){this.lastModified=Date.now()}}const _l="NewProject",vl=0;class vg{constructor(e=[]){this.projects=e,this.currentProject=null,this.currentProjectName=_l,this.currentProjectID=vl}getSnapshot(){const e=[];return this.projects.forEach(t=>{e.push(t.getSnapshot())}),e}addProject(e){this.projects.push(e)}setCurrentProject(e){this.projects.forEach(t=>{t.id==e&&(this.currentProject=t,this.currentProjectName=t.name,this.currentProjectID=t.id)})}updateOrAddProject(e,t,i){let s=!1,r=0;return this.projects.forEach(o=>{o.id==e?(o.name=t,o.updateModified(),o.setImage(i),s=!0,r=o.id):s||(r=Math.max(r,o.id))}),s||(r+=1,this.projects.push(new uc(r,t,i))),r}deleteProject(e){for(let t=0;t<this.projects.length;t++){const i=this.projects[t];if(e==i.id){this.projects.splice(t,1);break}}this.setDefaultProject()}setDefaultProject(){this.currentProjectName=_l,this.currentProjectID=vl}clear(){this.projects=[]}}const nt={mandle:0,julia:1,doubleJulia:2,burningShip:3,neuton:4,phoenix:5,noise:6,circularWaves:7,linearWaves:8,fibonacci:9,sphinx:10},pe={iters:0,power:1,posX:2,posY:3,zoom:4,cPosX:5,cPosY:6,velDir:7,velMag:8,mirrorFoldsX:9,mirrorFoldsY:10,mirrorOffsetX:11,mirrorOffsetY:12,numColors:13,colorOffset:14,sinFreqX:15,sinFreqY:16,rotation:17,hueRotation:18,uSinMag:19,iters2:20,colorScale:21,power2:22,cPosX2:23,cPosY2:24};class we{constructor({eId:e,name:t,value:i=0,min:s=0,max:r=1,step:o=.1}){this.eId=e,this.name=new String(t),this.value=i,this.min=s,this.max=r,this.step=o,this.output=null,this.type="number",this.uFloatPar=null,this.elements={keyBtn:null,value:null,slider:null}}setFromSnapshot(e){this.name=new String(e.name),this.value=e.value,this.min=e.min,this.max=e.max,this.step=e.step}getSnapshot(){return{type:this.type,eId:this.eId,name:this.name,value:this.value,min:this.min,max:this.max,step:this.step}}setValue(e){this.value=Number(e),this.uFloatPar[this.eId]=this.value}getValue(){return this.uFloatPar[this.eId]}getShaderValue(){return this.uFloatPar[this.eId]}setFromShader(){this.value=this.uFloatPar[this.eId]}setUfloatPars(e){this.uFloatPar=e,this.uFloatPar[this.eId]=this.value}linkInput(e){e.addEventListener("input",t=>{this.value=t.target.value,this.output&&(this.output.value=this.value)})}linkOutput(e){this.output=e}clearOutput(){this.output=null}setInputElement(e){this.inputElem=e}setElementFromInput(){this.inputElem.value=this.value}getId(){return this.name.toLowerCase().split(" ").join("-")}}class kt{constructor(e,t,i=0){this.name=e,this.groups={},this.uFloatPars=new Float32Array(Object.keys(pe).length),this.eShader=t,this.paletteIndex=i}addGroup(e,t=[]){this.groups[e]=[],t&&this.addToGroup(e,t)}addToGroup(e,t){this.groups[e]?t.forEach(i=>{this.groups[e].push(i)}):console.log("Group does not exist")}getGroups(){return this.groups}getGroup(e){return this.groups[e]}setInputs(){for(const[e,t]of Object.entries(this.groups))for(const i of t)switch(i.type){case"number":i.setUfloatPars(this.uFloatPars);break}}getInput(e){for(const[t,i]of Object.entries(this.groups))for(const s of i)if(s.eId==e)return s}getNumInputs(){const e=[];for(const[t,i]of Object.entries(this.groups))for(const s of i)s.type=="number"&&e.push(s);return e}getUfloatPars(){return this.uFloatPars}getGroupsSnapshot(){const e={};for(const[t,i]of Object.entries(this.groups)){const s={name:t,numInputs:[]};for(const r of i)s.numInputs.push(r.getSnapshot());e[t]=s}return e}getSnapshot(){return{name:this.name,groups:this.getGroupsSnapshot(),eShader:this.eShader,paletteIndex:this.paletteIndex}}setFromSnapshot(e){this.paletteIndex=e.paletteIndex;for(const[t,i]of Object.entries(e.groups))for(const s of i.numInputs)switch(s.type){case"number":this.setInputFromSnapshot(s.name,s);break}}setFromSnapshotByEId(e){for(const t of this.getNumInputs()){const i=e[t.eId];i&&(t.value=i.value)}}setInputFromSnapshot(e,t){for(const[i,s]of Object.entries(this.groups))for(let r=0;r<s.length;r++)s[r].name==e&&s[r].setFromSnapshot(t)}clone(){const e=new kt(this.name,this.eShader,this.paletteIndex);for(const[t,i]of Object.entries(this.groups)){e.addGroup(t);for(const s of i){const r=new we({eId:s.eId,name:s.name,value:s.value,min:s.min,max:s.max,step:s.step});e.groups[t].push(r)}}return e.uFloatPars=this.uFloatPars,e.setInputs(),e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */function ve(n){if(!n)throw new Error("Assertion failed.")}const Yn=n=>n&&n[n.length-1],Fi=n=>n>=0&&n<2**32;class si{constructor(e){this.bytes=e,this.pos=0}seekToByte(e){this.pos=8*e}readBit(){const e=Math.floor(this.pos/8),t=this.bytes[e]??0,i=7-(this.pos&7),s=(t&1<<i)>>i;return this.pos++,s}readBits(e){if(e===1)return this.readBit();let t=0;for(let i=0;i<e;i++)t<<=1,t|=this.readBit();return t}writeBits(e,t){const i=this.pos+e;for(let s=this.pos;s<i;s++){const r=Math.floor(s/8);let o=this.bytes[r];const a=7-(s&7);o&=~(1<<a),o|=(t&1<<i-s-1)>>i-s-1<<a,this.bytes[r]=o}this.pos=i}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const e=this.pos/8,t=this.bytes[e]??0;return this.pos+=8,t}skipBits(e){this.pos+=e}getBitsLeft(){return this.bytes.length*8-this.pos}clone(){const e=new si(this.bytes);return e.pos=this.pos,e}}const se=n=>{let e=0;for(;n.readBits(1)===0&&e<32;)e++;if(e>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<e)-1+n.readBits(e)},xn=n=>{const e=se(n);return e&1?e+1>>1:-(e>>1)},us=n=>n.constructor===Uint8Array?n:ArrayBuffer.isView(n)?new Uint8Array(n.buffer,n.byteOffset,n.byteLength):new Uint8Array(n),hc=n=>n.constructor===DataView?n:ArrayBuffer.isView(n)?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(n),rn=new TextEncoder,Io={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},Uo={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},Fo={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},xg=n=>!!n&&!!n.primaries&&!!n.transfer&&!!n.matrix&&n.fullRange!==void 0,dc=n=>n instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&n instanceof SharedArrayBuffer||ArrayBuffer.isView(n);class fc{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e;const t=new Promise(s=>{let r=!1;e=()=>{r||(s(),this.pending--,r=!0)}}),i=this.currentPromise;return this.currentPromise=t,this.pending++,await i,e}}const Sg=()=>{let n,e;return{promise:new Promise((i,s)=>{n=i,e=s}),resolve:n,reject:e}},pc=n=>{throw new Error(`Unexpected value: ${n}`)},yg=(n,e,t,i)=>{t=t>>>0,t=t&16777215,i?(n.setUint8(e,t&255),n.setUint8(e+1,t>>>8&255),n.setUint8(e+2,t>>>16&255)):(n.setUint8(e,t>>>16&255),n.setUint8(e+1,t>>>8&255),n.setUint8(e+2,t&255))},Eg="und",Mg=/^[a-z]{3}$/,bg=n=>Mg.test(n),xl=1e6*(1+Number.EPSILON),wg=(n,e)=>{const t=n<0?-1:1;n=Math.abs(n);let i=0,s=1,r=1,o=0,a=n;for(;;){const l=Math.floor(a),c=l*r+i,u=l*o+s;if(u>e)return{numerator:t*r,denominator:o};if(i=r,s=o,r=c,o=u,a=1/(a-l),!isFinite(a))break}return{numerator:t*r,denominator:o}},mc=function*(n){for(const e in n){const t=n[e];t!==void 0&&(yield{key:e,value:t})}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class gc{constructor(e,t){if(this.data=e,this.mimeType=t,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(typeof t!="string")throw new TypeError("mimeType must be a string.")}}class Tg{constructor(e,t,i,s){if(this.data=e,this.mimeType=t,this.name=i,this.description=s,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(t!==void 0&&typeof t!="string")throw new TypeError("mimeType, when provided, must be a string.");if(i!==void 0&&typeof i!="string")throw new TypeError("name, when provided, must be a string.");if(s!==void 0&&typeof s!="string")throw new TypeError("description, when provided, must be a string.")}}const Ag=n=>{if(!n||typeof n!="object")throw new TypeError("tags must be an object.");if(n.title!==void 0&&typeof n.title!="string")throw new TypeError("tags.title, when provided, must be a string.");if(n.description!==void 0&&typeof n.description!="string")throw new TypeError("tags.description, when provided, must be a string.");if(n.artist!==void 0&&typeof n.artist!="string")throw new TypeError("tags.artist, when provided, must be a string.");if(n.album!==void 0&&typeof n.album!="string")throw new TypeError("tags.album, when provided, must be a string.");if(n.albumArtist!==void 0&&typeof n.albumArtist!="string")throw new TypeError("tags.albumArtist, when provided, must be a string.");if(n.trackNumber!==void 0&&(!Number.isInteger(n.trackNumber)||n.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(n.tracksTotal!==void 0&&(!Number.isInteger(n.tracksTotal)||n.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(n.discNumber!==void 0&&(!Number.isInteger(n.discNumber)||n.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(n.discsTotal!==void 0&&(!Number.isInteger(n.discsTotal)||n.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(n.genre!==void 0&&typeof n.genre!="string")throw new TypeError("tags.genre, when provided, must be a string.");if(n.date!==void 0&&(!(n.date instanceof Date)||Number.isNaN(n.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(n.lyrics!==void 0&&typeof n.lyrics!="string")throw new TypeError("tags.lyrics, when provided, must be a string.");if(n.images!==void 0){if(!Array.isArray(n.images))throw new TypeError("tags.images, when provided, must be an array.");for(const e of n.images){if(!e||typeof e!="object")throw new TypeError("Each image in tags.images must be an object.");if(!(e.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if(typeof e.mimeType!="string")throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(e.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(n.comment!==void 0&&typeof n.comment!="string")throw new TypeError("tags.comment, when provided, must be a string.");if(n.raw!==void 0){if(!n.raw||typeof n.raw!="object")throw new TypeError("tags.raw, when provided, must be an object.");for(const e of Object.values(n.raw))if(e!==null&&typeof e!="string"&&!(e instanceof Uint8Array)&&!(e instanceof gc)&&!(e instanceof Tg))throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, or null.")}},Cg=n=>{if(!n||typeof n!="object")throw new TypeError("disposition must be an object.");if(n.default!==void 0&&typeof n.default!="boolean")throw new TypeError("disposition.default must be a boolean.");if(n.forced!==void 0&&typeof n.forced!="boolean")throw new TypeError("disposition.forced must be a boolean.");if(n.original!==void 0&&typeof n.original!="boolean")throw new TypeError("disposition.original must be a boolean.");if(n.commentary!==void 0&&typeof n.commentary!="boolean")throw new TypeError("disposition.commentary must be a boolean.");if(n.hearingImpaired!==void 0&&typeof n.hearingImpaired!="boolean")throw new TypeError("disposition.hearingImpaired must be a boolean.");if(n.visuallyImpaired!==void 0&&typeof n.visuallyImpaired!="boolean")throw new TypeError("disposition.visuallyImpaired must be a boolean.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const is=["avc","hevc","vp9","av1","vp8"],Di=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],_c=["aac","opus","mp3","vorbis","flac"],Js=[..._c,...Di],Qs=["webvtt"],Sl=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],Pg=n=>{const e=n.split("."),t=1,i=1,s=(t<<7)+i,r=Number(e[1]),o=e[2],a=Number(o.slice(0,-1)),l=(r<<5)+a,c=o.slice(-1)==="H"?1:0,d=Number(e[3])===8?0:1,f=0,m=e[4]?Number(e[4]):0,_=e[5]?Number(e[5][0]):1,g=e[5]?Number(e[5][1]):1,p=e[5]?Number(e[5][2]):0,h=(c<<7)+(d<<6)+(f<<5)+(m<<4)+(_<<3)+(g<<2)+p;return[s,l,h,0]},vc=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],xc=[-1,1,2,3,4,5,6,8],Rg=n=>{let e=vc.indexOf(n.sampleRate),t=null;e===-1&&(e=15,t=n.sampleRate);const i=xc.indexOf(n.numberOfChannels);if(i===-1)throw new TypeError(`Unsupported number of channels: ${n.numberOfChannels}`);let s=5+4+4;n.objectType>=32&&(s+=6),e===15&&(s+=24);const r=Math.ceil(s/8),o=new Uint8Array(r),a=new si(o);return n.objectType<32?a.writeBits(5,n.objectType):(a.writeBits(5,31),a.writeBits(6,n.objectType-32)),a.writeBits(4,e),e===15&&a.writeBits(24,t),a.writeBits(4,i),o},Lg=/^pcm-([usf])(\d+)+(be)?$/,hs=n=>{if(ve(Di.includes(n)),n==="ulaw")return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if(n==="alaw")return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const e=Lg.exec(n);ve(e);let t;e[1]==="u"?t="unsigned":e[1]==="s"?t="signed":t="float";const i=Number(e[2])/8,s=e[3]!=="be",r=n==="pcm-u8"?2**7:0;return{dataType:t,sampleSize:i,littleEndian:s,silentValue:r}},Ig=["avc1","avc3","hev1","hvc1","vp8","vp09","av01"],Ug=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,Fg=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,Dg=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,Ng=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,Bg=n=>{if(!n)throw new TypeError("Video chunk metadata must be provided.");if(typeof n!="object")throw new TypeError("Video chunk metadata must be an object.");if(!n.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if(typeof n.decoderConfig!="object")throw new TypeError("Video chunk metadata decoder configuration must be an object.");if(typeof n.decoderConfig.codec!="string")throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!Ig.some(e=>n.decoderConfig.codec.startsWith(e)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the WebCodecs Codec Registry.");if(!Number.isInteger(n.decoderConfig.codedWidth)||n.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(n.decoderConfig.codedHeight)||n.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(n.decoderConfig.description!==void 0&&!dc(n.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(n.decoderConfig.colorSpace!==void 0){const{colorSpace:e}=n.decoderConfig;if(typeof e!="object")throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const t=Object.keys(Io);if(e.primaries!=null&&!t.includes(e.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${t.join(", ")}.`);const i=Object.keys(Uo);if(e.transfer!=null&&!i.includes(e.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${i.join(", ")}.`);const s=Object.keys(Fo);if(e.matrix!=null&&!s.includes(e.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${s.join(", ")}.`);if(e.fullRange!=null&&typeof e.fullRange!="boolean")throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(n.decoderConfig.codec.startsWith("avc1")||n.decoderConfig.codec.startsWith("avc3")){if(!Ug.test(n.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(n.decoderConfig.codec.startsWith("hev1")||n.decoderConfig.codec.startsWith("hvc1")){if(!Fg.test(n.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(n.decoderConfig.codec.startsWith("vp8")){if(n.decoderConfig.codec!=="vp8")throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(n.decoderConfig.codec.startsWith("vp09")){if(!Dg.test(n.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(n.decoderConfig.codec.startsWith("av01")&&!Ng.test(n.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')},Og=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm"],kg=n=>{if(!n)throw new TypeError("Audio chunk metadata must be provided.");if(typeof n!="object")throw new TypeError("Audio chunk metadata must be an object.");if(!n.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if(typeof n.decoderConfig!="object")throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if(typeof n.decoderConfig.codec!="string")throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!Og.some(e=>n.decoderConfig.codec.startsWith(e)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the WebCodecs Codec Registry.");if(!Number.isInteger(n.decoderConfig.sampleRate)||n.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(n.decoderConfig.numberOfChannels)||n.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(n.decoderConfig.description!==void 0&&!dc(n.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(n.decoderConfig.codec.startsWith("mp4a")&&n.decoderConfig.codec!=="mp4a.69"&&n.decoderConfig.codec!=="mp4a.6B"&&n.decoderConfig.codec!=="mp4a.6b"){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(n.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(n.decoderConfig.codec.startsWith("mp3")||n.decoderConfig.codec.startsWith("mp4a")){if(n.decoderConfig.codec!=="mp3"&&n.decoderConfig.codec!=="mp4a.69"&&n.decoderConfig.codec!=="mp4a.6B"&&n.decoderConfig.codec!=="mp4a.6b")throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(n.decoderConfig.codec.startsWith("opus")){if(n.decoderConfig.codec!=="opus")throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(n.decoderConfig.description&&n.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(n.decoderConfig.codec.startsWith("vorbis")){if(n.decoderConfig.codec!=="vorbis")throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!n.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(n.decoderConfig.codec.startsWith("flac")){if(n.decoderConfig.codec!=="flac")throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');const e=4+4+34;if(!n.decoderConfig.description||n.decoderConfig.description.byteLength<e)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if((n.decoderConfig.codec.startsWith("pcm")||n.decoderConfig.codec.startsWith("ulaw")||n.decoderConfig.codec.startsWith("alaw"))&&!Di.includes(n.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${Di.join(", ")}).`)},zg=n=>{if(!n)throw new TypeError("Subtitle metadata must be provided.");if(typeof n!="object")throw new TypeError("Subtitle metadata must be an object.");if(!n.config)throw new TypeError("Subtitle metadata must include a config object.");if(typeof n.config!="object")throw new TypeError("Subtitle metadata config must be an object.");if(typeof n.config.description!="string")throw new TypeError("Subtitle metadata config description must be a string.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var Qi;(function(n){n[n.NON_IDR_SLICE=1]="NON_IDR_SLICE",n[n.SLICE_DPA=2]="SLICE_DPA",n[n.SLICE_DPB=3]="SLICE_DPB",n[n.SLICE_DPC=4]="SLICE_DPC",n[n.IDR=5]="IDR",n[n.SEI=6]="SEI",n[n.SPS=7]="SPS",n[n.PPS=8]="PPS",n[n.AUD=9]="AUD",n[n.SPS_EXT=13]="SPS_EXT"})(Qi||(Qi={}));var tn;(function(n){n[n.RASL_N=8]="RASL_N",n[n.RASL_R=9]="RASL_R",n[n.BLA_W_LP=16]="BLA_W_LP",n[n.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",n[n.VPS_NUT=32]="VPS_NUT",n[n.SPS_NUT=33]="SPS_NUT",n[n.PPS_NUT=34]="PPS_NUT",n[n.AUD_NUT=35]="AUD_NUT",n[n.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",n[n.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"})(tn||(tn={}));const Do=function*(n){let e=0,t=-1;for(;e<n.length-2;){const i=n.indexOf(0,e);if(i===-1||i>=n.length-2)break;e=i;let s=0;if(e+3<n.length&&n[e+1]===0&&n[e+2]===0&&n[e+3]===1?s=4:n[e+1]===0&&n[e+2]===1&&(s=3),s===0){e++;continue}t!==-1&&e>t&&(yield{offset:t,length:e-t}),t=e+s,e=t}t!==-1&&t<n.length&&(yield{offset:t,length:n.length-t})},Vg=n=>n&31,No=n=>{const e=[],t=n.length;for(let i=0;i<t;i++)i+2<t&&n[i]===0&&n[i+1]===0&&n[i+2]===3?(e.push(0,0),i+=2):e.push(n[i]);return new Uint8Array(e)},Gg=(n,e)=>{const t=n.reduce((r,o)=>r+e+o.byteLength,0),i=new Uint8Array(t);let s=0;for(const r of n){const o=new DataView(i.buffer,i.byteOffset,i.byteLength);switch(e){case 1:o.setUint8(s,r.byteLength);break;case 2:o.setUint16(s,r.byteLength,!1);break;case 3:yg(o,s,r.byteLength,!1);break;case 4:o.setUint32(s,r.byteLength,!1);break}s+=e,i.set(r,s),s+=r.byteLength}return i},Hg=n=>{try{const e=[],t=[],i=[];for(const a of Do(n)){const l=n.subarray(a.offset,a.offset+a.length),c=Vg(l[0]);c===Qi.SPS?e.push(l):c===Qi.PPS?t.push(l):c===Qi.SPS_EXT&&i.push(l)}if(e.length===0||t.length===0)return null;const s=e[0],r=Xg(s);ve(r!==null);const o=r.profileIdc===100||r.profileIdc===110||r.profileIdc===122||r.profileIdc===144;return{configurationVersion:1,avcProfileIndication:r.profileIdc,profileCompatibility:r.constraintFlags,avcLevelIndication:r.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:e,pictureParameterSets:t,chromaFormat:o?r.chromaFormatIdc:null,bitDepthLumaMinus8:o?r.bitDepthLumaMinus8:null,bitDepthChromaMinus8:o?r.bitDepthChromaMinus8:null,sequenceParameterSetExt:o?i:null}}catch(e){return console.error("Error building AVC Decoder Configuration Record:",e),null}},Wg=n=>{const e=[];e.push(n.configurationVersion),e.push(n.avcProfileIndication),e.push(n.profileCompatibility),e.push(n.avcLevelIndication),e.push(252|n.lengthSizeMinusOne&3),e.push(224|n.sequenceParameterSets.length&31);for(const t of n.sequenceParameterSets){const i=t.byteLength;e.push(i>>8),e.push(i&255);for(let s=0;s<i;s++)e.push(t[s])}e.push(n.pictureParameterSets.length);for(const t of n.pictureParameterSets){const i=t.byteLength;e.push(i>>8),e.push(i&255);for(let s=0;s<i;s++)e.push(t[s])}if(n.avcProfileIndication===100||n.avcProfileIndication===110||n.avcProfileIndication===122||n.avcProfileIndication===144){ve(n.chromaFormat!==null),ve(n.bitDepthLumaMinus8!==null),ve(n.bitDepthChromaMinus8!==null),ve(n.sequenceParameterSetExt!==null),e.push(252|n.chromaFormat&3),e.push(248|n.bitDepthLumaMinus8&7),e.push(248|n.bitDepthChromaMinus8&7),e.push(n.sequenceParameterSetExt.length);for(const t of n.sequenceParameterSetExt){const i=t.byteLength;e.push(i>>8),e.push(i&255);for(let s=0;s<i;s++)e.push(t[s])}}return new Uint8Array(e)},Xg=n=>{try{const e=new si(No(n));if(e.skipBits(1),e.skipBits(2),e.readBits(5)!==7)return null;const i=e.readAlignedByte(),s=e.readAlignedByte(),r=e.readAlignedByte();se(e);let o=1,a=0,l=0,c=0;if((i===100||i===110||i===122||i===244||i===44||i===83||i===86||i===118||i===128)&&(o=se(e),o===3&&(c=e.readBits(1)),a=se(e),l=se(e),e.skipBits(1),e.readBits(1))){for(let B=0;B<(o!==3?8:12);B++)if(e.readBits(1)){const $=B<6?16:64;let R=8,F=8;for(let X=0;X<$;X++){if(F!==0){const H=xn(e);F=(R+H+256)%256}R=F===0?R:F}}}se(e);const u=se(e);if(u===0)se(e);else if(u===1){e.skipBits(1),xn(e),xn(e);const b=se(e);for(let B=0;B<b;B++)xn(e)}se(e),e.skipBits(1);const d=se(e),f=se(e),m=16*(d+1),_=16*(f+1);let g=m,p=_;const h=e.readBits(1);if(h||e.skipBits(1),e.skipBits(1),e.readBits(1)){const b=se(e),B=se(e),q=se(e),$=se(e);let R,F;if((c===0?o:0)===0)R=1,F=2-h;else{const H=o===3?1:2,J=o===1?2:1;R=H,F=J*(2-h)}g-=R*(b+B),p-=F*(q+$)}let y=2,w=2,T=2,P=0,A=null,G=null;if(e.readBits(1)){e.readBits(1)&&e.readBits(8)===255&&(e.skipBits(16),e.skipBits(16)),e.readBits(1)&&e.skipBits(1),e.readBits(1)&&(e.skipBits(3),P=e.readBits(1),e.readBits(1)&&(y=e.readBits(8),w=e.readBits(8),T=e.readBits(8))),e.readBits(1)&&(se(e),se(e)),e.readBits(1)&&(e.skipBits(32),e.skipBits(32),e.skipBits(1));const F=e.readBits(1);F&&yl(e);const X=e.readBits(1);X&&yl(e),(F||X)&&e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(1),se(e),se(e),se(e),se(e),A=se(e),G=se(e))}if(A===null){ve(G===null);const b=s&16;if((i===44||i===86||i===100||i===110||i===122||i===244)&&b)A=0,G=0;else{const B=d+1,q=f+1,$=(2-h)*q,R=Sl.find(X=>X.level>=r)??Yn(Sl),F=Math.min(Math.floor(R.maxDpbMbs/(B*$)),16);A=F,G=F}}return ve(G!==null),{profileIdc:i,constraintFlags:s,levelIdc:r,frameMbsOnlyFlag:h,chromaFormatIdc:o,bitDepthLumaMinus8:a,bitDepthChromaMinus8:l,codedWidth:m,codedHeight:_,displayWidth:g,displayHeight:p,colourPrimaries:y,matrixCoefficients:T,transferCharacteristics:w,fullRangeFlag:P,numReorderFrames:A,maxDecFrameBuffering:G}}catch(e){return console.error("Error parsing AVC SPS:",e),null}},yl=n=>{const e=se(n);n.skipBits(4),n.skipBits(4);for(let t=0;t<=e;t++)se(n),se(n),n.skipBits(1);n.skipBits(5),n.skipBits(5),n.skipBits(5),n.skipBits(5)},El=n=>n>>1&63,qg=n=>{try{const e=new si(No(n));e.skipBits(16),e.readBits(4);const t=e.readBits(3),i=e.readBits(1),{general_profile_space:s,general_tier_flag:r,general_profile_idc:o,general_profile_compatibility_flags:a,general_constraint_indicator_flags:l,general_level_idc:c}=Yg(e,t);se(e);const u=se(e);let d=0;u===3&&(d=e.readBits(1));const f=se(e),m=se(e);let _=f,g=m;if(e.readBits(1)){const B=se(e),q=se(e),$=se(e),R=se(e);let F=1,X=1;const H=d===0?u:0;H===1?(F=2,X=2):H===2&&(F=2,X=1),_-=(B+q)*F,g-=($+R)*X}const p=se(e),h=se(e);se(e);const y=e.readBits(1)?0:t;let w=0;for(let B=y;B<=t;B++)se(e),w=se(e),se(e);se(e),se(e),se(e),se(e),se(e),se(e),e.readBits(1)&&e.readBits(1)&&$g(e),e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(4),e.skipBits(4),se(e),se(e),e.skipBits(1));const T=se(e);if(Kg(e,T),e.readBits(1)){const B=se(e);for(let q=0;q<B;q++)se(e),e.skipBits(1)}e.skipBits(1),e.skipBits(1);let P=2,A=2,G=2,S=0,b=0;if(e.readBits(1)){const B=Jg(e,t);P=B.colourPrimaries,A=B.transferCharacteristics,G=B.matrixCoefficients,S=B.fullRangeFlag,b=B.minSpatialSegmentationIdc}return{displayWidth:_,displayHeight:g,colourPrimaries:P,transferCharacteristics:A,matrixCoefficients:G,fullRangeFlag:S,maxDecFrameBuffering:w+1,spsMaxSubLayersMinus1:t,spsTemporalIdNestingFlag:i,generalProfileSpace:s,generalTierFlag:r,generalProfileIdc:o,generalProfileCompatibilityFlags:a,generalConstraintIndicatorFlags:l,generalLevelIdc:c,chromaFormatIdc:u,bitDepthLumaMinus8:p,bitDepthChromaMinus8:h,minSpatialSegmentationIdc:b}}catch(e){return console.error("Error parsing HEVC SPS:",e),null}},jg=n=>{try{const e=[],t=[],i=[],s=[];for(const c of Do(n)){const u=n.subarray(c.offset,c.offset+c.length),d=El(u[0]);d===tn.VPS_NUT?e.push(u):d===tn.SPS_NUT?t.push(u):d===tn.PPS_NUT?i.push(u):(d===tn.PREFIX_SEI_NUT||d===tn.SUFFIX_SEI_NUT)&&s.push(u)}if(t.length===0||i.length===0)return null;const r=qg(t[0]);if(!r)return null;let o=0;if(i.length>0){const c=i[0],u=new si(No(c));u.skipBits(16),se(u),se(u),u.skipBits(1),u.skipBits(1),u.skipBits(3),u.skipBits(1),u.skipBits(1),se(u),se(u),xn(u),u.skipBits(1),u.skipBits(1),u.readBits(1)&&se(u),xn(u),xn(u),u.skipBits(1),u.skipBits(1),u.skipBits(1),u.skipBits(1);const d=u.readBits(1),f=u.readBits(1);!d&&!f?o=0:d&&!f?o=2:!d&&f?o=3:o=0}const a=[...e.length?[{arrayCompleteness:1,nalUnitType:tn.VPS_NUT,nalUnits:e}]:[],...t.length?[{arrayCompleteness:1,nalUnitType:tn.SPS_NUT,nalUnits:t}]:[],...i.length?[{arrayCompleteness:1,nalUnitType:tn.PPS_NUT,nalUnits:i}]:[],...s.length?[{arrayCompleteness:1,nalUnitType:El(s[0][0]),nalUnits:s}]:[]];return{configurationVersion:1,generalProfileSpace:r.generalProfileSpace,generalTierFlag:r.generalTierFlag,generalProfileIdc:r.generalProfileIdc,generalProfileCompatibilityFlags:r.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:r.generalConstraintIndicatorFlags,generalLevelIdc:r.generalLevelIdc,minSpatialSegmentationIdc:r.minSpatialSegmentationIdc,parallelismType:o,chromaFormatIdc:r.chromaFormatIdc,bitDepthLumaMinus8:r.bitDepthLumaMinus8,bitDepthChromaMinus8:r.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:r.spsMaxSubLayersMinus1+1,temporalIdNested:r.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:a}}catch(e){return console.error("Error building HEVC Decoder Configuration Record:",e),null}},Yg=(n,e)=>{const t=n.readBits(2),i=n.readBits(1),s=n.readBits(5);let r=0;for(let u=0;u<32;u++)r=r<<1|n.readBits(1);const o=new Uint8Array(6);for(let u=0;u<6;u++)o[u]=n.readBits(8);const a=n.readBits(8),l=[],c=[];for(let u=0;u<e;u++)l.push(n.readBits(1)),c.push(n.readBits(1));if(e>0)for(let u=e;u<8;u++)n.skipBits(2);for(let u=0;u<e;u++)l[u]&&n.skipBits(88),c[u]&&n.skipBits(8);return{general_profile_space:t,general_tier_flag:i,general_profile_idc:s,general_profile_compatibility_flags:r,general_constraint_indicator_flags:o,general_level_idc:a}},$g=n=>{for(let e=0;e<4;e++)for(let t=0;t<(e===3?2:6);t++)if(!n.readBits(1))se(n);else{const s=Math.min(64,1<<4+(e<<1));e>1&&xn(n);for(let r=0;r<s;r++)xn(n)}},Kg=(n,e)=>{const t=[];for(let i=0;i<e;i++)t[i]=Zg(n,i,e,t)},Zg=(n,e,t,i)=>{let s=0,r=0,o=0;if(e!==0&&(r=n.readBits(1)),r){if(e===t){const l=se(n);o=e-(l+1)}else o=e-1;n.readBits(1),se(n);const a=i[o]??0;for(let l=0;l<=a;l++)n.readBits(1)||n.readBits(1);s=i[o]}else{const a=se(n),l=se(n);for(let c=0;c<a;c++)se(n),n.readBits(1);for(let c=0;c<l;c++)se(n),n.readBits(1);s=a+l}return s},Jg=(n,e)=>{let t=2,i=2,s=2,r=0,o=0;return n.readBits(1)&&n.readBits(8)===255&&(n.readBits(16),n.readBits(16)),n.readBits(1)&&n.readBits(1),n.readBits(1)&&(n.readBits(3),r=n.readBits(1),n.readBits(1)&&(t=n.readBits(8),i=n.readBits(8),s=n.readBits(8))),n.readBits(1)&&(se(n),se(n)),n.readBits(1),n.readBits(1),n.readBits(1),n.readBits(1)&&(se(n),se(n),se(n),se(n)),n.readBits(1)&&(n.readBits(32),n.readBits(32),n.readBits(1)&&se(n),n.readBits(1)&&Qg(n,!0,e)),n.readBits(1)&&(n.readBits(1),n.readBits(1),n.readBits(1),o=se(n),se(n),se(n),se(n),se(n)),{colourPrimaries:t,transferCharacteristics:i,matrixCoefficients:s,fullRangeFlag:r,minSpatialSegmentationIdc:o}},Qg=(n,e,t)=>{let i=!1,s=!1,r=!1;e&&(i=n.readBits(1)===1,s=n.readBits(1)===1,(i||s)&&(r=n.readBits(1)===1,r&&(n.readBits(8),n.readBits(5),n.readBits(1),n.readBits(5)),n.readBits(4),n.readBits(4),r&&n.readBits(4),n.readBits(5),n.readBits(5),n.readBits(5)));for(let o=0;o<=t;o++){const a=n.readBits(1)===1;let l=!0;a||(l=n.readBits(1)===1);let c=!1;l?se(n):c=n.readBits(1)===1;let u=1;c||(u=se(n)+1),i&&Ml(n,u,r),s&&Ml(n,u,r)}},Ml=(n,e,t)=>{for(let i=0;i<e;i++)se(n),se(n),t&&(se(n),se(n)),n.readBits(1)},e_=n=>{const e=[];e.push(n.configurationVersion),e.push((n.generalProfileSpace&3)<<6|(n.generalTierFlag&1)<<5|n.generalProfileIdc&31),e.push(n.generalProfileCompatibilityFlags>>>24&255),e.push(n.generalProfileCompatibilityFlags>>>16&255),e.push(n.generalProfileCompatibilityFlags>>>8&255),e.push(n.generalProfileCompatibilityFlags&255),e.push(...n.generalConstraintIndicatorFlags),e.push(n.generalLevelIdc&255),e.push(240|n.minSpatialSegmentationIdc>>8&15),e.push(n.minSpatialSegmentationIdc&255),e.push(252|n.parallelismType&3),e.push(252|n.chromaFormatIdc&3),e.push(248|n.bitDepthLumaMinus8&7),e.push(248|n.bitDepthChromaMinus8&7),e.push(n.avgFrameRate>>8&255),e.push(n.avgFrameRate&255),e.push((n.constantFrameRate&3)<<6|(n.numTemporalLayers&7)<<3|(n.temporalIdNested&1)<<2|n.lengthSizeMinusOne&3),e.push(n.arrays.length&255);for(const t of n.arrays){e.push((t.arrayCompleteness&1)<<7|0|t.nalUnitType&63),e.push(t.nalUnits.length>>8&255),e.push(t.nalUnits.length&255);for(const i of t.nalUnits){e.push(i.length>>8&255),e.push(i.length&255);for(let s=0;s<i.length;s++)e.push(i[s])}}return new Uint8Array(e)},t_=n=>{const e=hc(n),t=e.getUint8(9),i=e.getUint16(10,!0),s=e.getUint32(12,!0),r=e.getInt16(16,!0),o=e.getUint8(18);let a=null;return o&&(a=n.subarray(19,19+2+t)),{outputChannelCount:t,preSkip:i,inputSampleRate:s,outputGain:r,channelMappingFamily:o,channelMappingTable:a}};var bl;(function(n){n[n.STREAMINFO=0]="STREAMINFO",n[n.VORBIS_COMMENT=4]="VORBIS_COMMENT",n[n.PICTURE=6]="PICTURE"})(bl||(bl={}));/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const wl=new Uint8Array(0);class ss{constructor(e,t,i,s,r=-1,o,a){if(this.data=e,this.type=t,this.timestamp=i,this.duration=s,this.sequenceNumber=r,e===wl&&o===void 0)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(o===void 0&&(o=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(t!=="key"&&t!=="delta")throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(i))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(s)||s<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(r))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(o)||o<0)throw new TypeError("byteLength must be a non-negative integer.");if(a!==void 0&&(typeof a!="object"||!a))throw new TypeError("sideData, when provided, must be an object.");if((a==null?void 0:a.alpha)!==void 0&&!(a.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if((a==null?void 0:a.alphaByteLength)!==void 0&&(!Number.isInteger(a.alphaByteLength)||a.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=o,this.sideData=a??{},this.sideData.alpha&&this.sideData.alphaByteLength===void 0&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===wl}get microsecondTimestamp(){return Math.trunc(xl*this.timestamp)}get microsecondDuration(){return Math.trunc(xl*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if(typeof EncodedAudioChunk>"u")throw new Error("Your browser does not support EncodedAudioChunk.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,t){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const i=new Uint8Array(e.byteLength);return e.copyTo(i),new ss(i,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,t)}clone(e){if(e!==void 0&&(typeof e!="object"||e===null))throw new TypeError("options, when provided, must be an object.");if((e==null?void 0:e.data)!==void 0&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if((e==null?void 0:e.type)!==void 0&&e.type!=="key"&&e.type!=="delta")throw new TypeError('options.type, when provided, must be either "key" or "delta".');if((e==null?void 0:e.timestamp)!==void 0&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if((e==null?void 0:e.duration)!==void 0&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if((e==null?void 0:e.sequenceNumber)!==void 0&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if((e==null?void 0:e.sideData)!==void 0&&(typeof e.sideData!="object"||e.sideData===null))throw new TypeError("options.sideData, when provided, must be an object.");return new ss((e==null?void 0:e.data)??this.data,(e==null?void 0:e.type)??this.type,(e==null?void 0:e.timestamp)??this.timestamp,(e==null?void 0:e.duration)??this.duration,(e==null?void 0:e.sequenceNumber)??this.sequenceNumber,this.byteLength,(e==null?void 0:e.sideData)??this.sideData)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const n_=n=>{let t=(n.hasVideo?"video/":n.hasAudio?"audio/":"application/")+(n.isQuickTime?"quicktime":"mp4");if(n.codecStrings.length>0){const i=[...new Set(n.codecStrings)];t+=`; codecs="${i.join(", ")}"`}return t};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const ro=8,Tl=16;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const i_=7,s_=9,Al=n=>{const e=n.filePos,t=o_(n,9),i=new si(t);if(i.readBits(12)!==4095||(i.skipBits(1),i.readBits(2)!==0))return null;const o=i.readBits(1),a=i.readBits(2)+1,l=i.readBits(4);if(l===15)return null;i.skipBits(1);const c=i.readBits(3);if(c===0)throw new Error("ADTS frames with channel configuration 0 are not supported.");i.skipBits(1),i.skipBits(1),i.skipBits(1),i.skipBits(1);const u=i.readBits(13);i.skipBits(11);const d=i.readBits(2)+1;if(d!==1)throw new Error("ADTS frames with more than one AAC frame are not supported.");let f=null;return o===1?n.filePos-=2:f=i.readBits(16),{objectType:a,samplingFrequencyIndex:l,channelConfiguration:c,frameLength:u,numberOfAacFrames:d,crcCheck:f,startPos:e}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class rs{constructor(e,t,i,s,r){this.bytes=e,this.view=t,this.offset=i,this.start=s,this.end=r,this.bufferPos=s-i}static tempFromBytes(e){return new rs(e,hc(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,t=this.end-e){if(e<this.start||e+t>this.end)throw new RangeError("Slicing outside of original slice.");return new rs(this.bytes,this.view,this.offset,e,e+t)}}const r_=(n,e)=>{if(n.filePos<n.start||n.filePos+e>n.end)throw new RangeError(`Tried reading [${n.filePos}, ${n.filePos+e}), but slice is [${n.start}, ${n.end}). This is likely an internal error, please report it alongside the file that caused it.`)},o_=(n,e)=>{r_(n,e);const t=n.bytes.subarray(n.bufferPos,n.bufferPos+e);return n.bufferPos+=e,t};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class a_{constructor(e){this.mutex=new fc,this.firstMediaStreamTimestamp=null,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateAndNormalizeTimestamp(e,t,i){t+=e.source._timestampOffset;let s=this.trackTimestampInfo.get(e);if(!s){if(!i)throw new Error("First packet must be a key packet.");s={maxTimestamp:t,maxTimestampBeforeLastKeyPacket:t},this.trackTimestampInfo.set(e,s)}if(t<0)throw new Error(`Timestamps must be non-negative (got ${t}s).`);if(i&&(s.maxTimestampBeforeLastKeyPacket=s.maxTimestamp),t<s.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${t}s, but largest timestamp is ${s.maxTimestampBeforeLastKeyPacket}s.`);return s.maxTimestamp=Math.max(s.maxTimestamp,t),t}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Cl=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g,l_=n=>{const e=Math.floor(n/36e5),t=Math.floor(n%(60*60*1e3)/(60*1e3)),i=Math.floor(n%(60*1e3)/1e3),s=n%1e3;return e.toString().padStart(2,"0")+":"+t.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")+"."+s.toString().padStart(3,"0")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Pl{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let t=0;t<e.length;t++)this.helperView.setUint8(t%8,e.charCodeAt(t)),t%8===7&&this.writer.write(this.helper);e.length%8!==0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{const t=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(const r of e.children)r&&this.writeBox(r);const i=this.writer.getPos(),s=e.size??i-t;this.writer.seek(t),this.writeBoxHeader(e,s),this.writer.seek(i)}}writeBoxHeader(e,t){this.writeU32(e.largeSize?1:t),this.writeAscii(e.type),e.largeSize&&this.writeU64(t)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){const t=this.offsets.get(e);ve(t!==void 0);const i=this.writer.getPos();this.writer.seek(t),this.writeBox(e),this.writer.seek(i)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let t=this.measureBoxHeader(e);if(e.contents&&(t+=e.contents.byteLength),e.children)for(const i of e.children)i&&(t+=this.measureBox(i));return t}}}const qe=new Uint8Array(8),ln=new DataView(qe.buffer),ot=n=>[(n%256+256)%256],xe=n=>(ln.setUint16(0,n,!1),[qe[0],qe[1]]),Sc=n=>(ln.setInt16(0,n,!1),[qe[0],qe[1]]),yc=n=>(ln.setUint32(0,n,!1),[qe[1],qe[2],qe[3]]),ne=n=>(ln.setUint32(0,n,!1),[qe[0],qe[1],qe[2],qe[3]]),An=n=>(ln.setInt32(0,n,!1),[qe[0],qe[1],qe[2],qe[3]]),ei=n=>(ln.setUint32(0,Math.floor(n/2**32),!1),ln.setUint32(4,n,!1),[qe[0],qe[1],qe[2],qe[3],qe[4],qe[5],qe[6],qe[7]]),Ec=n=>(ln.setInt16(0,2**8*n,!1),[qe[0],qe[1]]),gn=n=>(ln.setInt32(0,2**16*n,!1),[qe[0],qe[1],qe[2],qe[3]]),oo=n=>(ln.setInt32(0,2**30*n,!1),[qe[0],qe[1],qe[2],qe[3]]),ao=(n,e)=>{const t=[];let i=n;do{let s=i&127;i>>=7,t.length>0&&(s|=128),t.push(s),e!==void 0&&e--}while(i>0||e);return t.reverse()},Mt=(n,e=!1)=>{const t=Array(n.length).fill(null).map((i,s)=>n.charCodeAt(s));return e&&t.push(0),t},Bo=n=>{let e=null;for(const t of n)(!e||t.timestamp>e.timestamp)&&(e=t);return e},Mc=n=>{const e=n*(Math.PI/180),t=Math.round(Math.cos(e)),i=Math.round(Math.sin(e));return[t,i,0,-i,t,0,0,0,1]},bc=Mc(0),wc=n=>[gn(n[0]),gn(n[1]),oo(n[2]),gn(n[3]),gn(n[4]),oo(n[5]),gn(n[6]),gn(n[7]),oo(n[8])],Se=(n,e,t)=>({type:n,contents:e&&new Uint8Array(e.flat(10)),children:t}),je=(n,e,t,i,s)=>Se(n,[ot(e),yc(t),i??[]],s),c_=n=>n.isQuickTime?Se("ftyp",[Mt("qt  "),ne(512),Mt("qt  ")]):n.fragmented?Se("ftyp",[Mt("iso5"),ne(512),Mt("iso5"),Mt("iso6"),Mt("mp41")]):Se("ftyp",[Mt("isom"),ne(512),Mt("isom"),n.holdsAvc?Mt("avc1"):[],Mt("mp41")]),Hs=n=>({type:"mdat",largeSize:n}),u_=n=>({type:"free",size:n}),Ki=n=>Se("moov",void 0,[h_(n.creationTime,n.trackDatas),...n.trackDatas.map(e=>d_(e,n.creationTime)),n.isFragmented?j_(n.trackDatas):null,ov(n)]),h_=(n,e)=>{const t=gt(Math.max(0,...e.filter(o=>o.samples.length>0).map(o=>{const a=Bo(o.samples);return a.timestamp+a.duration})),wo),i=Math.max(0,...e.map(o=>o.track.id))+1,s=!Fi(n)||!Fi(t),r=s?ei:ne;return je("mvhd",+s,0,[r(n),r(n),ne(wo),r(t),gn(1),Ec(1),Array(10).fill(0),wc(bc),Array(24).fill(0),ne(i)])},d_=(n,e)=>{const t=Sv(n);return Se("trak",void 0,[f_(n,e),p_(n,e),t.name!==void 0?Se("udta",void 0,[Se("name",[...rn.encode(t.name)])]):null])},f_=(n,e)=>{var l;const t=Bo(n.samples),i=gt(t?t.timestamp+t.duration:0,wo),s=!Fi(e)||!Fi(i),r=s?ei:ne;let o;if(n.type==="video"){const c=n.track.metadata.rotation;o=Mc(c??0)}else o=bc;let a=2;return((l=n.track.metadata.disposition)==null?void 0:l.default)!==!1&&(a|=1),je("tkhd",+s,a,[r(e),r(e),ne(n.track.id),ne(0),r(i),Array(8).fill(0),xe(0),xe(n.track.id),Ec(n.type==="audio"?1:0),xe(0),wc(o),gn(n.type==="video"?n.info.width:0),gn(n.type==="video"?n.info.height:0)])},p_=(n,e)=>Se("mdia",void 0,[m_(n,e),Oo(!0,g_[n.type],__[n.type]),v_(n)]),m_=(n,e)=>{const t=Bo(n.samples),i=gt(t?t.timestamp+t.duration:0,n.timescale),s=!Fi(e)||!Fi(i),r=s?ei:ne;return je("mdhd",+s,0,[r(e),r(e),ne(n.timescale),r(i),xe(Pc(n.track.metadata.languageCode??Eg)),xe(0)])},g_={video:"vide",audio:"soun",subtitle:"text"},__={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},Oo=(n,e,t,i="\0\0\0\0")=>je("hdlr",0,0,[n?Mt("mhlr"):ne(0),Mt(e),Mt(i),ne(0),ne(0),Mt(t,!0)]),v_=n=>Se("minf",void 0,[E_[n.type](),M_(),T_(n)]),x_=()=>je("vmhd",0,1,[xe(0),xe(0),xe(0),xe(0)]),S_=()=>je("smhd",0,0,[xe(0),xe(0)]),y_=()=>je("nmhd",0,0),E_={video:x_,audio:S_,subtitle:y_},M_=()=>Se("dinf",void 0,[b_()]),b_=()=>je("dref",0,0,[ne(1)],[w_()]),w_=()=>je("url ",0,1),T_=n=>{const e=n.compositionTimeOffsetTable.length>1||n.compositionTimeOffsetTable.some(t=>t.sampleCompositionTimeOffset!==0);return Se("stbl",void 0,[A_(n),z_(n),e?X_(n):null,e?q_(n):null,G_(n),H_(n),W_(n),V_(n)])},A_=n=>{let e;if(n.type==="video")e=C_(uv(n.track.source._codec,n.info.decoderConfig.codec),n);else if(n.type==="audio"){const t=Cc(n.track.source._codec,n.muxer.isQuickTime);ve(t),e=U_(t,n)}else n.type==="subtitle"&&(e=O_(fv[n.track.source._codec],n));return ve(e),je("stsd",0,0,[ne(1)],[e])},C_=(n,e)=>Se(n,[Array(6).fill(0),xe(1),xe(0),xe(0),Array(12).fill(0),xe(e.info.width),xe(e.info.height),ne(4718592),ne(4718592),ne(0),xe(1),Array(32).fill(0),xe(24),Sc(65535)],[hv[e.track.source._codec](e),xg(e.info.decoderConfig.colorSpace)?P_(e):null]),P_=n=>Se("colr",[Mt("nclx"),xe(Io[n.info.decoderConfig.colorSpace.primaries]),xe(Uo[n.info.decoderConfig.colorSpace.transfer]),xe(Fo[n.info.decoderConfig.colorSpace.matrix]),ot((n.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),R_=n=>n.info.decoderConfig&&Se("avcC",[...us(n.info.decoderConfig.description)]),L_=n=>n.info.decoderConfig&&Se("hvcC",[...us(n.info.decoderConfig.description)]),Rl=n=>{var f,m,_,g;if(!n.info.decoderConfig)return null;const e=n.info.decoderConfig,t=e.codec.split("."),i=Number(t[1]),s=Number(t[2]),r=Number(t[3]),o=t[4]?Number(t[4]):1,a=t[8]?Number(t[8]):Number(((f=e.colorSpace)==null?void 0:f.fullRange)??0),l=(r<<4)+(o<<1)+a,c=t[5]?Number(t[5]):(m=e.colorSpace)!=null&&m.primaries?Io[e.colorSpace.primaries]:2,u=t[6]?Number(t[6]):(_=e.colorSpace)!=null&&_.transfer?Uo[e.colorSpace.transfer]:2,d=t[7]?Number(t[7]):(g=e.colorSpace)!=null&&g.matrix?Fo[e.colorSpace.matrix]:2;return je("vpcC",1,0,[ot(i),ot(s),ot(l),ot(c),ot(u),ot(d),xe(0)])},I_=n=>Se("av1C",Pg(n.info.decoderConfig.codec)),U_=(n,e)=>{var r;let t=0,i,s=16;if(Di.includes(e.track.source._codec)){const o=e.track.source._codec,{sampleSize:a}=hs(o);s=8*a,s>16&&(t=1)}return t===0?i=[Array(6).fill(0),xe(1),xe(t),xe(0),ne(0),xe(e.info.numberOfChannels),xe(s),xe(0),xe(0),xe(e.info.sampleRate<2**16?e.info.sampleRate:0),xe(0)]:i=[Array(6).fill(0),xe(1),xe(t),xe(0),ne(0),xe(e.info.numberOfChannels),xe(Math.min(s,16)),xe(0),xe(0),xe(e.info.sampleRate<2**16?e.info.sampleRate:0),xe(0),ne(1),ne(s/8),ne(e.info.numberOfChannels*s/8),ne(2)],Se(n,i,[((r=dv(e.track.source._codec,e.muxer.isQuickTime))==null?void 0:r(e))??null])},lo=n=>{let e;switch(n.track.source._codec){case"aac":e=64;break;case"mp3":e=107;break;case"vorbis":e=221;break;default:throw new Error(`Unhandled audio codec: ${n.track.source._codec}`)}let t=[...ot(e),...ot(21),...yc(0),...ne(0),...ne(0)];if(n.info.decoderConfig.description){const i=us(n.info.decoderConfig.description);t=[...t,...ot(5),...ao(i.byteLength),...i]}return t=[...xe(1),...ot(0),...ot(4),...ao(t.length),...t,...ot(6),...ot(1),...ot(2)],t=[...ot(3),...ao(t.length),...t],je("esds",0,0,t)},Tn=n=>Se("wave",void 0,[F_(n),D_(n),Se("\0\0\0\0")]),F_=n=>Se("frma",[Mt(Cc(n.track.source._codec,n.muxer.isQuickTime))]),D_=n=>{const{littleEndian:e}=hs(n.track.source._codec);return Se("enda",[xe(+e)])},N_=n=>{var l;let e=n.info.numberOfChannels,t=3840,i=n.info.sampleRate,s=0,r=0,o=new Uint8Array(0);const a=(l=n.info.decoderConfig)==null?void 0:l.description;if(a){ve(a.byteLength>=18);const c=us(a),u=t_(c);e=u.outputChannelCount,t=u.preSkip,i=u.inputSampleRate,s=u.outputGain,r=u.channelMappingFamily,u.channelMappingTable&&(o=u.channelMappingTable)}return Se("dOps",[ot(0),ot(e),xe(t),ne(i),Sc(s),ot(r),...o])},B_=n=>{var i;const e=(i=n.info.decoderConfig)==null?void 0:i.description;ve(e);const t=us(e);return je("dfLa",0,0,[...t.subarray(4)])},Qt=n=>{const{littleEndian:e,sampleSize:t}=hs(n.track.source._codec),i=+e;return je("pcmC",0,0,[ot(i),ot(8*t)])},O_=(n,e)=>Se(n,[Array(6).fill(0),xe(1)],[pv[e.track.source._codec](e)]),k_=n=>Se("vttC",[...rn.encode(n.info.config.description)]),z_=n=>je("stts",0,0,[ne(n.timeToSampleTable.length),n.timeToSampleTable.map(e=>[ne(e.sampleCount),ne(e.sampleDelta)])]),V_=n=>{if(n.samples.every(t=>t.type==="key"))return null;const e=[...n.samples.entries()].filter(([,t])=>t.type==="key");return je("stss",0,0,[ne(e.length),e.map(([t])=>ne(t+1))])},G_=n=>je("stsc",0,0,[ne(n.compactlyCodedChunkTable.length),n.compactlyCodedChunkTable.map(e=>[ne(e.firstChunk),ne(e.samplesPerChunk),ne(1)])]),H_=n=>{if(n.type==="audio"&&n.info.requiresPcmTransformation){const{sampleSize:e}=hs(n.track.source._codec);return je("stsz",0,0,[ne(e*n.info.numberOfChannels),ne(n.samples.reduce((t,i)=>t+gt(i.duration,n.timescale),0))])}return je("stsz",0,0,[ne(0),ne(n.samples.length),n.samples.map(e=>ne(e.size))])},W_=n=>n.finalizedChunks.length>0&&Yn(n.finalizedChunks).offset>=2**32?je("co64",0,0,[ne(n.finalizedChunks.length),n.finalizedChunks.map(e=>ei(e.offset))]):je("stco",0,0,[ne(n.finalizedChunks.length),n.finalizedChunks.map(e=>ne(e.offset))]),X_=n=>je("ctts",1,0,[ne(n.compositionTimeOffsetTable.length),n.compositionTimeOffsetTable.map(e=>[ne(e.sampleCount),An(e.sampleCompositionTimeOffset)])]),q_=n=>{let e=1/0,t=-1/0,i=1/0,s=-1/0;ve(n.compositionTimeOffsetTable.length>0),ve(n.samples.length>0);for(let o=0;o<n.compositionTimeOffsetTable.length;o++){const a=n.compositionTimeOffsetTable[o];e=Math.min(e,a.sampleCompositionTimeOffset),t=Math.max(t,a.sampleCompositionTimeOffset)}for(let o=0;o<n.samples.length;o++){const a=n.samples[o];i=Math.min(i,gt(a.timestamp,n.timescale)),s=Math.max(s,gt(a.timestamp+a.duration,n.timescale))}const r=Math.max(-e,0);return s>=2**31?null:je("cslg",0,0,[An(r),An(e),An(t),An(i),An(s)])},j_=n=>Se("mvex",void 0,n.map(Y_)),Y_=n=>je("trex",0,0,[ne(n.track.id),ne(1),ne(0),ne(0),ne(0)]),Ll=(n,e)=>Se("moof",void 0,[$_(n),...e.map(K_)]),$_=n=>je("mfhd",0,0,[ne(n)]),Tc=n=>{let e=0,t=0;const i=0,s=0,r=n.type==="delta";return t|=+r,r?e|=1:e|=2,e<<24|t<<16|i<<8|s},K_=n=>Se("traf",void 0,[Z_(n),J_(n),Q_(n)]),Z_=n=>{ve(n.currentChunk);let e=0;e|=8,e|=16,e|=32,e|=131072;const t=n.currentChunk.samples[1]??n.currentChunk.samples[0],i={duration:t.timescaleUnitsToNextSample,size:t.size,flags:Tc(t)};return je("tfhd",0,e,[ne(n.track.id),ne(i.duration),ne(i.size),ne(i.flags)])},J_=n=>(ve(n.currentChunk),je("tfdt",1,0,[ei(gt(n.currentChunk.startTimestamp,n.timescale))])),Q_=n=>{ve(n.currentChunk);const e=n.currentChunk.samples.map(g=>g.timescaleUnitsToNextSample),t=n.currentChunk.samples.map(g=>g.size),i=n.currentChunk.samples.map(Tc),s=n.currentChunk.samples.map(g=>gt(g.timestamp-g.decodeTimestamp,n.timescale)),r=new Set(e),o=new Set(t),a=new Set(i),l=new Set(s),c=a.size===2&&i[0]!==i[1],u=r.size>1,d=o.size>1,f=!c&&a.size>1,m=l.size>1||[...l].some(g=>g!==0);let _=0;return _|=1,_|=4*+c,_|=256*+u,_|=512*+d,_|=1024*+f,_|=2048*+m,je("trun",1,_,[ne(n.currentChunk.samples.length),ne(n.currentChunk.offset-n.currentChunk.moofOffset||0),c?ne(i[0]):[],n.currentChunk.samples.map((g,p)=>[u?ne(e[p]):[],d?ne(t[p]):[],f?ne(i[p]):[],m?An(s[p]):[]])])},ev=n=>Se("mfra",void 0,[...n.map(tv),nv()]),tv=(n,e)=>je("tfra",1,0,[ne(n.track.id),ne(63),ne(n.finalizedChunks.length),n.finalizedChunks.map(i=>[ei(gt(i.samples[0].timestamp,n.timescale)),ei(i.moofOffset),ne(e+1),ne(1),ne(1)])]),nv=()=>je("mfro",0,0,[ne(0)]),iv=()=>Se("vtte"),sv=(n,e,t,i,s)=>Se("vttc",void 0,[s!==null?Se("vsid",[An(s)]):null,t!==null?Se("iden",[...rn.encode(t)]):null,e!==null?Se("ctim",[...rn.encode(l_(e))]):null,i!==null?Se("sttg",[...rn.encode(i)]):null,Se("payl",[...rn.encode(n)])]),rv=n=>Se("vtta",[...rn.encode(n)]),ov=n=>{const e=[],t=n.format._options.metadataFormat??"auto",i=n.output._metadataTags;if(t==="mdir"||t==="auto"&&!n.isQuickTime){const s=lv(i);s&&e.push(s)}else if(t==="mdta"){const s=cv(i);s&&e.push(s)}else(t==="udta"||t==="auto"&&n.isQuickTime)&&av(e,n.output._metadataTags);return e.length===0?null:Se("udta",void 0,e)},av=(n,e)=>{for(const{key:t,value:i}of mc(e))switch(t){case"title":n.push(en("©nam",i));break;case"description":n.push(en("©des",i));break;case"artist":n.push(en("©ART",i));break;case"album":n.push(en("©alb",i));break;case"albumArtist":n.push(en("albr",i));break;case"genre":n.push(en("©gen",i));break;case"date":n.push(en("©day",i.toISOString().slice(0,10)));break;case"comment":n.push(en("©cmt",i));break;case"lyrics":n.push(en("©lyr",i));break;case"raw":break;case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"images":break;default:pc(t)}if(e.raw)for(const t in e.raw){const i=e.raw[t];i==null||t.length!==4||n.some(s=>s.type===t)||(typeof i=="string"?n.push(en(t,i)):i instanceof Uint8Array&&n.push(Se(t,Array.from(i))))}},en=(n,e)=>{const t=rn.encode(e);return Se(n,[xe(t.length),xe(Pc("und")),Array.from(t)])},Il={"image/jpeg":13,"image/png":14,"image/bmp":27},Ac=(n,e)=>{const t=[];for(const{key:i,value:s}of mc(n))switch(i){case"title":t.push({key:e?"title":"©nam",value:jt(s)});break;case"description":t.push({key:e?"description":"©des",value:jt(s)});break;case"artist":t.push({key:e?"artist":"©ART",value:jt(s)});break;case"album":t.push({key:e?"album":"©alb",value:jt(s)});break;case"albumArtist":t.push({key:e?"album_artist":"aART",value:jt(s)});break;case"comment":t.push({key:e?"comment":"©cmt",value:jt(s)});break;case"genre":t.push({key:e?"genre":"©gen",value:jt(s)});break;case"lyrics":t.push({key:e?"lyrics":"©lyr",value:jt(s)});break;case"date":t.push({key:e?"date":"©day",value:jt(s.toISOString().slice(0,10))});break;case"images":for(const r of s)r.kind==="coverFront"&&t.push({key:"covr",value:Se("data",[ne(Il[r.mimeType]??0),ne(0),Array.from(r.data)])});break;case"trackNumber":if(e){const r=n.tracksTotal!==void 0?`${s}/${n.tracksTotal}`:s.toString();t.push({key:"track",value:jt(r)})}else t.push({key:"trkn",value:Se("data",[ne(0),ne(0),xe(0),xe(s),xe(n.tracksTotal??0),xe(0)])});break;case"discNumber":e||t.push({key:"disc",value:Se("data",[ne(0),ne(0),xe(0),xe(s),xe(n.discsTotal??0),xe(0)])});break;case"tracksTotal":case"discsTotal":break;case"raw":break;default:pc(i)}if(n.raw)for(const i in n.raw){const s=n.raw[i];s==null||!e&&i.length!==4||t.some(r=>r.key===i)||(typeof s=="string"?t.push({key:i,value:jt(s)}):s instanceof Uint8Array?t.push({key:i,value:Se("data",[ne(0),ne(0),Array.from(s)])}):s instanceof gc&&t.push({key:i,value:Se("data",[ne(Il[s.mimeType]??0),ne(0),Array.from(s.data)])}))}return t},lv=n=>{const e=Ac(n,!1);return e.length===0?null:je("meta",0,0,void 0,[Oo(!1,"mdir","","appl"),Se("ilst",void 0,e.map(t=>Se(t.key,void 0,[t.value])))])},cv=n=>{const e=Ac(n,!0);return e.length===0?null:Se("meta",void 0,[Oo(!1,"mdta",""),je("keys",0,0,[ne(e.length)],e.map(t=>Se("mdta",[...rn.encode(t.key)]))),Se("ilst",void 0,e.map((t,i)=>{const s=String.fromCharCode(...ne(i+1));return Se(s,void 0,[t.value])}))])},jt=n=>Se("data",[ne(1),ne(0),...rn.encode(n)]),uv=(n,e)=>{switch(n){case"avc":return e.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01"}},hv={avc:R_,hevc:L_,vp8:Rl,vp9:Rl,av1:I_},Cc=(n,e)=>{switch(n){case"aac":return"mp4a";case"mp3":return"mp4a";case"opus":return"Opus";case"vorbis":return"mp4a";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt"}if(e)switch(n){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":return"in24";case"pcm-s24be":return"in24";case"pcm-s32":return"in32";case"pcm-s32be":return"in32";case"pcm-f32":return"fl32";case"pcm-f32be":return"fl32";case"pcm-f64":return"fl64";case"pcm-f64be":return"fl64"}else switch(n){case"pcm-s16":return"ipcm";case"pcm-s16be":return"ipcm";case"pcm-s24":return"ipcm";case"pcm-s24be":return"ipcm";case"pcm-s32":return"ipcm";case"pcm-s32be":return"ipcm";case"pcm-f32":return"fpcm";case"pcm-f32be":return"fpcm";case"pcm-f64":return"fpcm";case"pcm-f64be":return"fpcm"}},dv=(n,e)=>{switch(n){case"aac":return lo;case"mp3":return lo;case"opus":return N_;case"vorbis":return lo;case"flac":return B_}if(e)switch(n){case"pcm-s24":return Tn;case"pcm-s24be":return Tn;case"pcm-s32":return Tn;case"pcm-s32be":return Tn;case"pcm-f32":return Tn;case"pcm-f32be":return Tn;case"pcm-f64":return Tn;case"pcm-f64be":return Tn}else switch(n){case"pcm-s16":return Qt;case"pcm-s16be":return Qt;case"pcm-s24":return Qt;case"pcm-s24be":return Qt;case"pcm-s32":return Qt;case"pcm-s32be":return Qt;case"pcm-f32":return Qt;case"pcm-f32be":return Qt;case"pcm-f64":return Qt;case"pcm-f64be":return Qt}return null},fv={webvtt:"wvtt"},pv={webvtt:k_},Pc=n=>{ve(n.length===3);let e=0;for(let t=0;t<3;t++)e<<=5,e+=n.charCodeAt(t)-96;return e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Rc{constructor(){this.ensureMonotonicity=!1,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1}start(){}maybeTrackWrites(e){if(!this.trackedWrites)return;let t=this.getPos();if(t<this.trackedStart){if(t+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-t),t=0}const i=t+e.byteLength-this.trackedStart;let s=this.trackedWrites.byteLength;for(;s<i;)s*=2;if(s!==this.trackedWrites.byteLength){const r=new Uint8Array(s);r.set(this.trackedWrites,0),this.trackedWrites=r}this.trackedWrites.set(e,t-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,t+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(2**10),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");const t={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,t}}const co=2**16,uo=2**32;class Lc extends Rc{constructor(e){if(super(),this.pos=0,this.maxPos=0,this.target=e,this.supportsResize="resize"in new ArrayBuffer(0),this.supportsResize)try{this.buffer=new ArrayBuffer(co,{maxByteLength:uo})}catch{this.buffer=new ArrayBuffer(co),this.supportsResize=!1}else this.buffer=new ArrayBuffer(co);this.bytes=new Uint8Array(this.buffer)}ensureSize(e){let t=this.buffer.byteLength;for(;t<e;)t*=2;if(t!==this.buffer.byteLength){if(t>uo)throw new Error(`ArrayBuffer exceeded maximum size of ${uo} bytes. Please consider using another target.`);if(this.supportsResize)this.buffer.resize(t);else{const i=new ArrayBuffer(t),s=new Uint8Array(i);s.set(this.bytes,0),this.buffer=i,this.bytes=s}}}write(e){var t,i;this.maybeTrackWrites(e),this.ensureSize(this.pos+e.byteLength),this.bytes.set(e,this.pos),(i=(t=this.target).onwrite)==null||i.call(t,this.pos,this.pos+e.byteLength),this.pos+=e.byteLength,this.maxPos=Math.max(this.maxPos,this.pos)}seek(e){this.pos=e}getPos(){return this.pos}async flush(){}async finalize(){this.ensureSize(this.pos),this.target.buffer=this.buffer.slice(0,Math.max(this.maxPos,this.pos))}async close(){}getSlice(e,t){return this.bytes.slice(e,t)}}const mv=2**24,gv=2;class _v extends Rc{constructor(e){super(),this.pos=0,this.sections=[],this.lastWriteEnd=0,this.lastFlushEnd=0,this.writer=null,this.chunks=[],this.target=e,this.chunked=e._options.chunked??!1,this.chunkSize=e._options.chunkSize??mv}start(){this.writer=this.target._writable.getWriter()}write(e){var t,i;if(this.pos>this.lastWriteEnd){const s=this.pos-this.lastWriteEnd;this.pos=this.lastWriteEnd,this.write(new Uint8Array(s))}this.maybeTrackWrites(e),this.sections.push({data:e.slice(),start:this.pos}),(i=(t=this.target).onwrite)==null||i.call(t,this.pos,this.pos+e.byteLength),this.pos+=e.byteLength,this.lastWriteEnd=Math.max(this.lastWriteEnd,this.pos)}seek(e){this.pos=e}getPos(){return this.pos}async flush(){if(this.pos>this.lastWriteEnd){const i=this.pos-this.lastWriteEnd;this.pos=this.lastWriteEnd,this.write(new Uint8Array(i))}if(ve(this.writer),this.sections.length===0)return;const e=[],t=[...this.sections].sort((i,s)=>i.start-s.start);e.push({start:t[0].start,size:t[0].data.byteLength});for(let i=1;i<t.length;i++){const s=e[e.length-1],r=t[i];r.start<=s.start+s.size?s.size=Math.max(s.size,r.start+r.data.byteLength-s.start):e.push({start:r.start,size:r.data.byteLength})}for(const i of e){i.data=new Uint8Array(i.size);for(const s of this.sections)i.start<=s.start&&s.start<i.start+i.size&&i.data.set(s.data,s.start-i.start);if(this.writer.desiredSize!==null&&this.writer.desiredSize<=0&&await this.writer.ready,this.chunked)this.writeDataIntoChunks(i.data,i.start),this.tryToFlushChunks();else{if(this.ensureMonotonicity&&i.start!==this.lastFlushEnd)throw new Error("Internal error: Monotonicity violation.");this.writer.write({type:"write",data:i.data,position:i.start}),this.lastFlushEnd=i.start+i.data.byteLength}}this.sections.length=0}writeDataIntoChunks(e,t){let i=this.chunks.findIndex(l=>l.start<=t&&t<l.start+this.chunkSize);i===-1&&(i=this.createChunk(t));const s=this.chunks[i],r=t-s.start,o=e.subarray(0,Math.min(this.chunkSize-r,e.byteLength));s.data.set(o,r);const a={start:r,end:r+o.byteLength};if(this.insertSectionIntoChunk(s,a),s.written[0].start===0&&s.written[0].end===this.chunkSize&&(s.shouldFlush=!0),this.chunks.length>gv){for(let l=0;l<this.chunks.length-1;l++)this.chunks[l].shouldFlush=!0;this.tryToFlushChunks()}o.byteLength<e.byteLength&&this.writeDataIntoChunks(e.subarray(o.byteLength),t+o.byteLength)}insertSectionIntoChunk(e,t){let i=0,s=e.written.length-1,r=-1;for(;i<=s;){const o=Math.floor(i+(s-i+1)/2);e.written[o].start<=t.start?(i=o+1,r=o):s=o-1}for(e.written.splice(r+1,0,t),(r===-1||e.written[r].end<t.start)&&r++;r<e.written.length-1&&e.written[r].end>=e.written[r+1].start;)e.written[r].end=Math.max(e.written[r].end,e.written[r+1].end),e.written.splice(r+1,1)}createChunk(e){const i={start:Math.floor(e/this.chunkSize)*this.chunkSize,data:new Uint8Array(this.chunkSize),written:[],shouldFlush:!1};return this.chunks.push(i),this.chunks.sort((s,r)=>s.start-r.start),this.chunks.indexOf(i)}tryToFlushChunks(e=!1){ve(this.writer);for(let t=0;t<this.chunks.length;t++){const i=this.chunks[t];if(!(!i.shouldFlush&&!e)){for(const s of i.written){const r=i.start+s.start;if(this.ensureMonotonicity&&r!==this.lastFlushEnd)throw new Error("Internal error: Monotonicity violation.");this.writer.write({type:"write",data:i.data.subarray(s.start,s.end),position:r}),this.lastFlushEnd=i.start+s.end}this.chunks.splice(t--,1)}}}finalize(){return this.chunked&&this.tryToFlushChunks(!0),ve(this.writer),this.writer.close()}async close(){var e;return(e=this.writer)==null?void 0:e.close()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class ko{constructor(){this._output=null,this.onwrite=null}}class Ic extends ko{constructor(){super(...arguments),this.buffer=null}_createWriter(){return new Lc(this)}}class vv extends ko{constructor(e,t={}){if(super(),!(e instanceof WritableStream))throw new TypeError("StreamTarget requires a WritableStream instance.");if(t!=null&&typeof t!="object")throw new TypeError("StreamTarget options, when provided, must be an object.");if(t.chunked!==void 0&&typeof t.chunked!="boolean")throw new TypeError("options.chunked, when provided, must be a boolean.");if(t.chunkSize!==void 0&&(!Number.isInteger(t.chunkSize)||t.chunkSize<1024))throw new TypeError("options.chunkSize, when provided, must be an integer and not smaller than 1024.");this._writable=e,this._options=t}_createWriter(){return new _v(this)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const wo=1e3,xv=2082844800,Sv=n=>{const e={},t=n.track;return t.metadata.name!==void 0&&(e.name=t.metadata.name),e},gt=(n,e,t=!0)=>{const i=n*e;return t?Math.round(i):i};class yv extends a_{constructor(e,t){super(e),this.auxTarget=new Ic,this.auxWriter=this.auxTarget._createWriter(),this.auxBoxWriter=new Pl(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=Sg(),this.creationTime=Math.floor(Date.now()/1e3)+xv,this.finalizedChunks=[],this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.format=t,this.writer=e._writer,this.boxWriter=new Pl(this.writer),this.isQuickTime=t instanceof Nc;const i=this.writer instanceof Lc?"in-memory":!1;this.fastStart=t._options.fastStart??i,this.isFragmented=this.fastStart==="fragmented",(this.fastStart==="in-memory"||this.isFragmented)&&(this.writer.ensureMonotonicity=!0),this.minimumFragmentDuration=t._options.minimumFragmentDuration??1}async start(){const e=await this.mutex.acquire(),t=this.output._tracks.some(i=>i.type==="video"&&i.source._codec==="avc");if(this.format._options.onFtyp&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(c_({isQuickTime:this.isQuickTime,holdsAvc:t,fragmented:this.isFragmented})),this.format._options.onFtyp){const{data:i,start:s}=this.writer.stopTrackingWrites();this.format._options.onFtyp(i,s)}if(this.ftypSize=this.writer.getPos(),this.fastStart!=="in-memory")if(this.fastStart==="reserve"){for(const i of this.output._tracks)if(i.metadata.maximumPacketCount===void 0)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||(this.format._options.onMdat&&this.writer.startTrackingWrites(),this.mdat=Hs(!0),this.boxWriter.writeBox(this.mdat));await this.writer.flush(),e()}allTracksAreKnown(){for(const e of this.output._tracks)if(!e.source._closed&&!this.trackDatas.some(t=>t.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(t=>t.type==="video"||t.type==="audio"?t.info.decoderConfig.codec:{webvtt:"wvtt"}[t.track.source._codec]);return n_({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(t=>t.type==="video"),hasAudio:this.trackDatas.some(t=>t.type==="audio"),codecStrings:e})}getVideoTrackData(e,t,i){const s=this.trackDatas.find(c=>c.track===e);if(s)return s;Bg(i),ve(i),ve(i.decoderConfig);const r={...i.decoderConfig};ve(r.codedWidth!==void 0),ve(r.codedHeight!==void 0);let o=!1;if(e.source._codec==="avc"&&!r.description){const c=Hg(t.data);if(!c)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");r.description=Wg(c),o=!0}else if(e.source._codec==="hevc"&&!r.description){const c=jg(t.data);if(!c)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");r.description=e_(c),o=!0}const a=wg(1/(e.metadata.frameRate??57600),1e6).denominator,l={muxer:this,track:e,type:"video",info:{width:r.codedWidth,height:r.codedHeight,decoderConfig:r,requiresAnnexBTransformation:o},timescale:a,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[]};return this.trackDatas.push(l),this.trackDatas.sort((c,u)=>c.track.id-u.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),l}getAudioTrackData(e,t,i){const s=this.trackDatas.find(l=>l.track===e);if(s)return s;kg(i),ve(i),ve(i.decoderConfig);const r={...i.decoderConfig};let o=!1;if(e.source._codec==="aac"&&!r.description){const l=Al(rs.tempFromBytes(t.data));if(!l)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const c=vc[l.samplingFrequencyIndex],u=xc[l.channelConfiguration];if(c===void 0||u===void 0)throw new Error("Invalid ADTS frame header.");r.description=Rg({objectType:l.objectType,sampleRate:c,numberOfChannels:u}),o=!0}const a={muxer:this,track:e,type:"audio",info:{numberOfChannels:i.decoderConfig.numberOfChannels,sampleRate:i.decoderConfig.sampleRate,decoderConfig:r,requiresPcmTransformation:!this.isFragmented&&Di.includes(e.source._codec),requiresAdtsStripping:o},timescale:i.decoderConfig.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[]};return this.trackDatas.push(a),this.trackDatas.sort((l,c)=>l.track.id-c.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),a}getSubtitleTrackData(e,t){const i=this.trackDatas.find(r=>r.track===e);if(i)return i;zg(t),ve(t),ve(t.config);const s={muxer:this,track:e,type:"subtitle",info:{config:t.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],lastCueEndTimestamp:0,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(s),this.trackDatas.sort((r,o)=>r.track.id-o.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),s}async addEncodedVideoPacket(e,t,i){const s=await this.mutex.acquire();try{const r=this.getVideoTrackData(e,t,i);let o=t.data;if(r.info.requiresAnnexBTransformation){const c=[...Do(o)].map(u=>o.subarray(u.offset,u.offset+u.length));if(c.length===0)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");o=Gg(c,4)}const a=this.validateAndNormalizeTimestamp(r.track,t.timestamp,t.type==="key"),l=this.createSampleForTrack(r,o,a,t.duration,t.type);await this.registerSample(r,l)}finally{s()}}async addEncodedAudioPacket(e,t,i){const s=await this.mutex.acquire();try{const r=this.getAudioTrackData(e,t,i);let o=t.data;if(r.info.requiresAdtsStripping){const c=Al(rs.tempFromBytes(o));if(!c)throw new Error("Expected ADTS frame, didn't get one.");const u=c.crcCheck===null?i_:s_;o=o.subarray(u)}const a=this.validateAndNormalizeTimestamp(r.track,t.timestamp,t.type==="key"),l=this.createSampleForTrack(r,o,a,t.duration,t.type);r.info.requiresPcmTransformation&&await this.maybePadWithSilence(r,a),await this.registerSample(r,l)}finally{s()}}async maybePadWithSilence(e,t){const i=Yn(e.samples),s=i?i.timestamp+i.duration:0,r=t-s,o=gt(r,e.timescale);if(o>0){const{sampleSize:a,silentValue:l}=hs(e.info.decoderConfig.codec),c=o*e.info.numberOfChannels,u=new Uint8Array(a*c).fill(l),d=this.createSampleForTrack(e,new Uint8Array(u.buffer),s,r,"key");await this.registerSample(e,d)}}async addSubtitleCue(e,t,i){const s=await this.mutex.acquire();try{const r=this.getSubtitleTrackData(e,i);this.validateAndNormalizeTimestamp(r.track,t.timestamp,!0),e.source._codec==="webvtt"&&(r.cueQueue.push(t),await this.processWebVTTCues(r,t.timestamp))}finally{s()}}async processWebVTTCues(e,t){for(;e.cueQueue.length>0;){const i=new Set([]);for(const c of e.cueQueue)ve(c.timestamp<=t),ve(e.lastCueEndTimestamp<=c.timestamp+c.duration),i.add(Math.max(c.timestamp,e.lastCueEndTimestamp)),i.add(c.timestamp+c.duration);const s=[...i].sort((c,u)=>c-u),r=s[0],o=s[1]??r;if(t<o)break;if(e.lastCueEndTimestamp<r){this.auxWriter.seek(0);const c=iv();this.auxBoxWriter.writeBox(c);const u=this.auxWriter.getSlice(0,this.auxWriter.getPos()),d=this.createSampleForTrack(e,u,e.lastCueEndTimestamp,r-e.lastCueEndTimestamp,"key");await this.registerSample(e,d),e.lastCueEndTimestamp=r}this.auxWriter.seek(0);for(let c=0;c<e.cueQueue.length;c++){const u=e.cueQueue[c];if(u.timestamp>=o)break;Cl.lastIndex=0;const d=Cl.test(u.text),f=u.timestamp+u.duration;let m=e.cueToSourceId.get(u);if(m===void 0&&o<f&&(m=e.nextSourceId++,e.cueToSourceId.set(u,m)),u.notes){const g=rv(u.notes);this.auxBoxWriter.writeBox(g)}const _=sv(u.text,d?r:null,u.identifier??null,u.settings??null,m??null);this.auxBoxWriter.writeBox(_),f===o&&e.cueQueue.splice(c--,1)}const a=this.auxWriter.getSlice(0,this.auxWriter.getPos()),l=this.createSampleForTrack(e,a,r,o-r,"key");await this.registerSample(e,l),e.lastCueEndTimestamp=o}}createSampleForTrack(e,t,i,s,r){return{timestamp:i,decodeTimestamp:i,duration:s,data:t,size:t.byteLength,type:r,timescaleUnitsToNextSample:gt(s,e.timescale)}}processTimestamps(e,t){if(e.timestampProcessingQueue.length===0)return;if(e.type==="audio"&&e.info.requiresPcmTransformation){let s=0;for(let r=0;r<e.timestampProcessingQueue.length;r++){const o=e.timestampProcessingQueue[r],a=gt(o.duration,e.timescale);s+=a}if(e.timeToSampleTable.length===0)e.timeToSampleTable.push({sampleCount:s,sampleDelta:1});else{const r=Yn(e.timeToSampleTable);r.sampleCount+=s}e.timestampProcessingQueue.length=0;return}const i=e.timestampProcessingQueue.map(s=>s.timestamp).sort((s,r)=>s-r);for(let s=0;s<e.timestampProcessingQueue.length;s++){const r=e.timestampProcessingQueue[s];r.decodeTimestamp=i[s],!this.isFragmented&&e.lastTimescaleUnits===null&&(r.decodeTimestamp=0);const o=gt(r.timestamp-r.decodeTimestamp,e.timescale),a=gt(r.duration,e.timescale);if(e.lastTimescaleUnits!==null){ve(e.lastSample);const l=gt(r.decodeTimestamp,e.timescale,!1),c=Math.round(l-e.lastTimescaleUnits);if(ve(c>=0),e.lastTimescaleUnits+=c,e.lastSample.timescaleUnitsToNextSample=c,!this.isFragmented){let u=Yn(e.timeToSampleTable);if(ve(u),u.sampleCount===1){u.sampleDelta=c;const f=e.timeToSampleTable[e.timeToSampleTable.length-2];f&&f.sampleDelta===c&&(f.sampleCount++,e.timeToSampleTable.pop(),u=f)}else u.sampleDelta!==c&&(u.sampleCount--,e.timeToSampleTable.push(u={sampleCount:1,sampleDelta:c}));u.sampleDelta===a?u.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:a});const d=Yn(e.compositionTimeOffsetTable);ve(d),d.sampleCompositionTimeOffset===o?d.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:o})}}else e.lastTimescaleUnits=gt(r.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:a}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:o}));e.lastSample=r}if(e.timestampProcessingQueue.length=0,ve(e.lastSample),ve(e.lastTimescaleUnits!==null),t!==void 0&&e.lastSample.timescaleUnitsToNextSample===0){ve(t.type==="key");const s=gt(t.timestamp,e.timescale,!1),r=Math.round(s-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=r}}async registerSample(e,t){t.type==="key"&&this.processTimestamps(e,t),e.timestampProcessingQueue.push(t),this.isFragmented?(e.sampleQueue.push(t),await this.interleaveSamples()):this.fastStart==="reserve"?await this.registerSampleFastStartReserve(e,t):await this.addSampleToTrack(e,t)}async addSampleToTrack(e,t){if(!this.isFragmented&&(e.samples.push(t),this.fastStart==="reserve")){const s=e.track.metadata.maximumPacketCount;if(ve(s!==void 0),e.samples.length>s)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${s}). Either add less packets or increase the maximum packet count.`)}let i=!1;if(!e.currentChunk)i=!0;else{e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,t.timestamp);const s=t.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){const r=this.trackDatas.every(o=>{if(e===o)return t.type==="key";const a=o.sampleQueue[0];return a?a.type==="key":o.track.source._closed});s>=this.minimumFragmentDuration&&r&&t.timestamp>this.maxWrittenTimestamp&&(i=!0,await this.finalizeFragment())}else i=s>=.5}i&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:t.timestamp,samples:[],offset:null,moofOffset:null}),ve(e.currentChunk),e.currentChunk.samples.push(t),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,t.timestamp))}async finalizeCurrentChunk(e){if(ve(!this.isFragmented),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let t=e.currentChunk.samples.length;if(e.type==="audio"&&e.info.requiresPcmTransformation&&(t=e.currentChunk.samples.reduce((i,s)=>i+gt(s.duration,e.timescale),0)),(e.compactlyCodedChunkTable.length===0||Yn(e.compactlyCodedChunkTable).samplesPerChunk!==t)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:t}),this.fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=this.writer.getPos();for(const i of e.currentChunk.samples)ve(i.data),this.writer.write(i.data),i.data=null;await this.writer.flush()}async interleaveSamples(e=!1){if(ve(this.isFragmented),!(!e&&!this.allTracksAreKnown()))e:for(;;){let t=null,i=1/0;for(const r of this.trackDatas){if(!e&&r.sampleQueue.length===0&&!r.track.source._closed)break e;r.sampleQueue.length>0&&r.sampleQueue[0].timestamp<i&&(t=r,i=r.sampleQueue[0].timestamp)}if(!t)break;const s=t.sampleQueue.shift();await this.addSampleToTrack(t,s)}}async finalizeFragment(e=!0){ve(this.isFragmented);const t=this.nextFragmentNumber++;if(t===1){this.format._options.onMoov&&this.writer.startTrackingWrites();const m=Ki(this);if(this.boxWriter.writeBox(m),this.format._options.onMoov){const{data:_,start:g}=this.writer.stopTrackingWrites();this.format._options.onMoov(_,g)}}const i=this.trackDatas.filter(m=>m.currentChunk),s=Ll(t,i),r=this.writer.getPos(),o=r+this.boxWriter.measureBox(s);let a=o+ro,l=1/0;for(const m of i){m.currentChunk.offset=a,m.currentChunk.moofOffset=r;for(const _ of m.currentChunk.samples)a+=_.size;l=Math.min(l,m.currentChunk.startTimestamp)}const c=a-o,u=c>=2**32;if(u)for(const m of i)m.currentChunk.offset+=Tl-ro;this.format._options.onMoof&&this.writer.startTrackingWrites();const d=Ll(t,i);if(this.boxWriter.writeBox(d),this.format._options.onMoof){const{data:m,start:_}=this.writer.stopTrackingWrites();this.format._options.onMoof(m,_,l)}ve(this.writer.getPos()===o),this.format._options.onMdat&&this.writer.startTrackingWrites();const f=Hs(u);f.size=c,this.boxWriter.writeBox(f),this.writer.seek(o+(u?Tl:ro));for(const m of i)for(const _ of m.currentChunk.samples)this.writer.write(_.data),_.data=null;if(this.format._options.onMdat){const{data:m,start:_}=this.writer.stopTrackingWrites();this.format._options.onMdat(m,_)}for(const m of i)m.finalizedChunks.push(m.currentChunk),this.finalizedChunks.push(m.currentChunk),m.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,t){if(this.allTracksAreKnown()){if(!this.mdat){const i=Ki(this),r=this.boxWriter.measureBox(i)+this.computeSampleTableSizeUpperBound()+4096;ve(this.ftypSize!==null),this.writer.seek(this.ftypSize+r),this.format._options.onMdat&&this.writer.startTrackingWrites(),this.mdat=Hs(!0),this.boxWriter.writeBox(this.mdat);for(const o of this.trackDatas){for(const a of o.sampleQueue)await this.addSampleToTrack(o,a);o.sampleQueue.length=0}}await this.addSampleToTrack(e,t)}else e.sampleQueue.push(t)}computeSampleTableSizeUpperBound(){ve(this.fastStart==="reserve");let e=0;for(const t of this.trackDatas){const i=t.track.metadata.maximumPacketCount;ve(i!==void 0),e+=(4+4)*Math.ceil(2/3*i),e+=4*i,e+=(4+4)*Math.ceil(2/3*i),e+=(4+4+4)*Math.ceil(2/3*i),e+=4*i,e+=8*i}return e}async onTrackClose(e){const t=await this.mutex.acquire();if(e.type==="subtitle"&&e.source._codec==="webvtt"){const i=this.trackDatas.find(s=>s.track===e);i&&await this.processWebVTTCues(i,1/0)}this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),t()}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve();for(const t of this.trackDatas)t.type==="subtitle"&&t.track.source._codec==="webvtt"&&await this.processWebVTTCues(t,1/0);if(this.isFragmented){await this.interleaveSamples(!0);for(const t of this.trackDatas)this.processTimestamps(t);await this.finalizeFragment(!1)}else for(const t of this.trackDatas)this.processTimestamps(t),await this.finalizeCurrentChunk(t);if(this.fastStart==="in-memory"){this.mdat=Hs(!1);let t;for(let s=0;s<2;s++){const r=Ki(this),o=this.boxWriter.measureBox(r);t=this.boxWriter.measureBox(this.mdat);let a=this.writer.getPos()+o+t;for(const l of this.finalizedChunks){l.offset=a;for(const{data:c}of l.samples)ve(c),a+=c.byteLength,t+=c.byteLength}if(a<2**32)break;t>=2**32&&(this.mdat.largeSize=!0)}this.format._options.onMoov&&this.writer.startTrackingWrites();const i=Ki(this);if(this.boxWriter.writeBox(i),this.format._options.onMoov){const{data:s,start:r}=this.writer.stopTrackingWrites();this.format._options.onMoov(s,r)}this.format._options.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=t,this.boxWriter.writeBox(this.mdat);for(const s of this.finalizedChunks)for(const r of s.samples)ve(r.data),this.writer.write(r.data),r.data=null;if(this.format._options.onMdat){const{data:s,start:r}=this.writer.stopTrackingWrites();this.format._options.onMdat(s,r)}}else if(this.isFragmented){const t=this.writer.getPos(),i=ev(this.trackDatas);this.boxWriter.writeBox(i);const s=this.writer.getPos()-t;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(s)}else{ve(this.mdat);const t=this.boxWriter.offsets.get(this.mdat);ve(t!==void 0);const i=this.writer.getPos()-t;if(this.mdat.size=i,this.mdat.largeSize=i>=2**32,this.boxWriter.patchBox(this.mdat),this.format._options.onMdat){const{data:r,start:o}=this.writer.stopTrackingWrites();this.format._options.onMdat(r,o)}const s=Ki(this);if(this.fastStart==="reserve"){ve(this.ftypSize!==null),this.writer.seek(this.ftypSize),this.format._options.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(s);const r=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox(u_(r))}else this.format._options.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(s);if(this.format._options.onMoov){const{data:r,start:o}=this.writer.stopTrackingWrites();this.format._options.onMoov(r,o)}}e()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Uc{getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>is.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>Js.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>Qs.includes(e))}_codecUnsupportedHint(e){return""}}class Fc extends Uc{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.fastStart!==void 0&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(e.minimumFragmentDuration!==void 0&&(!Number.isFinite(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(e.onFtyp!==void 0&&typeof e.onFtyp!="function")throw new TypeError("options.onFtyp, when provided, must be a function.");if(e.onMoov!==void 0&&typeof e.onMoov!="function")throw new TypeError("options.onMoov, when provided, must be a function.");if(e.onMdat!==void 0&&typeof e.onMdat!="function")throw new TypeError("options.onMdat, when provided, must be a function.");if(e.onMoof!==void 0&&typeof e.onMoof!="function")throw new TypeError("options.onMoof, when provided, must be a function.");if(e.metadataFormat!==void 0&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){return{video:{min:0,max:4294967295},audio:{min:0,max:4294967295},subtitle:{min:0,max:4294967295},total:{min:1,max:4294967295}}}get supportsVideoRotationMetadata(){return!0}_createMuxer(e){return new yv(e,this)}}class Dc extends Fc{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...is,..._c,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...Qs]}_codecUnsupportedHint(e){return new Nc().getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}}class Nc extends Fc{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...is,...Js]}_codecUnsupportedHint(e){return new Dc().getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class zo{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1,this._timestampOffset=0}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if(this._connectedTrack.output.state==="canceled")throw new Error("Output has been canceled.");if(this._connectedTrack.output.state==="finalizing"||this._connectedTrack.output.state==="finalized")throw new Error("Output has been finalized.");if(this._connectedTrack.output.state==="pending")throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;const e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if(e.output.state==="pending")throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,!(e.output.state==="finalizing"||e.output.state==="finalized")&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??(this._closingPromise=(async()=>{await this._flushAndClose(e),this._closed=!0})())}}class Bc extends zo{constructor(e){if(super(),this._connectedTrack=null,!is.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${is.join(", ")}.`);this._codec=e}}class Ev extends Bc{constructor(e){super(e)}add(e,t){if(!(e instanceof ss))throw new TypeError("packet must be an EncodedPacket.");if(e.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be added.");if(t!==void 0&&(!t||typeof t!="object"))throw new TypeError("meta, when provided, must be an object.");return this._ensureValidAdd(),this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack,e,t)}}class Mv extends zo{constructor(e){if(super(),this._connectedTrack=null,!Js.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${Js.join(", ")}.`);this._codec=e}}class bv extends zo{constructor(e){if(super(),this._connectedTrack=null,!Qs.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${Qs.join(", ")}.`);this._codec=e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const wv=["video","audio","subtitle"],ho=n=>{if(!n||typeof n!="object")throw new TypeError("metadata must be an object.");if(n.languageCode!==void 0&&!bg(n.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(n.name!==void 0&&typeof n.name!="string")throw new TypeError("metadata.name, when provided, must be a string.");if(n.disposition!==void 0&&Cg(n.disposition),n.maximumPacketCount!==void 0&&(!Number.isInteger(n.maximumPacketCount)||n.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.")};class Tv{constructor(e){if(this.state="pending",this._tracks=[],this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new fc,this._metadataTags={},!e||typeof e!="object")throw new TypeError("options must be an object.");if(!(e.format instanceof Uc))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof ko))throw new TypeError("options.target must be a Target.");if(e.target._output)throw new Error("Target is already used for another output.");e.target._output=this,this.format=e.format,this.target=e.target,this._writer=e.target._createWriter(),this._muxer=e.format._createMuxer(this)}addVideoTrack(e,t={}){if(!(e instanceof Bc))throw new TypeError("source must be a VideoSource.");if(ho(t),t.rotation!==void 0&&![0,90,180,270].includes(t.rotation))throw new TypeError(`Invalid video rotation: ${t.rotation}. Has to be 0, 90, 180 or 270.`);if(!this.format.supportsVideoRotationMetadata&&t.rotation)throw new Error(`${this.format._name} does not support video rotation metadata.`);if(t.frameRate!==void 0&&(!Number.isFinite(t.frameRate)||t.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${t.frameRate}. Must be a positive number.`);this._addTrack("video",e,t)}addAudioTrack(e,t={}){if(!(e instanceof Mv))throw new TypeError("source must be an AudioSource.");ho(t),this._addTrack("audio",e,t)}addSubtitleTrack(e,t={}){if(!(e instanceof bv))throw new TypeError("source must be a SubtitleSource.");ho(t),this._addTrack("subtitle",e,t)}setMetadataTags(e){if(Ag(e),this.state!=="pending")throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e,t,i){if(this.state!=="pending")throw new Error("Cannot add track after output has been started or canceled.");if(t._connectedTrack)throw new Error("Source is already used for a track.");const s=this.format.getSupportedTrackCounts(),r=this._tracks.reduce((c,u)=>c+(u.type===e?1:0),0),o=s[e].max;if(r===o)throw new Error(o===0?`${this.format._name} does not support ${e} tracks.`:`${this.format._name} does not support more than ${o} ${e} track${o===1?"":"s"}.`);const a=s.total.max;if(this._tracks.length===a)throw new Error(`${this.format._name} does not support more than ${a} tracks${a===1?"":"s"} in total.`);const l={id:this._tracks.length+1,output:this,type:e,source:t,metadata:i};if(l.type==="video"){const c=this.format.getSupportedVideoCodecs();if(c.length===0)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(l.source._codec));if(!c.includes(l.source._codec))throw new Error(`Codec '${l.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${c.map(u=>`'${u}'`).join(", ")}.`+this.format._codecUnsupportedHint(l.source._codec))}else if(l.type==="audio"){const c=this.format.getSupportedAudioCodecs();if(c.length===0)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(l.source._codec));if(!c.includes(l.source._codec))throw new Error(`Codec '${l.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${c.map(u=>`'${u}'`).join(", ")}.`+this.format._codecUnsupportedHint(l.source._codec))}else if(l.type==="subtitle"){const c=this.format.getSupportedSubtitleCodecs();if(c.length===0)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(l.source._codec));if(!c.includes(l.source._codec))throw new Error(`Codec '${l.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${c.map(u=>`'${u}'`).join(", ")}.`+this.format._codecUnsupportedHint(l.source._codec))}this._tracks.push(l),t._connectedTrack=l}async start(){const e=this.format.getSupportedTrackCounts();for(const i of wv){const s=this._tracks.reduce((o,a)=>o+(a.type===i?1:0),0),r=e[i].min;if(s<r)throw new Error(r===e[i].max?`${this.format._name} requires exactly ${r} ${i} track${r===1?"":"s"}.`:`${this.format._name} requires at least ${r} ${i} track${r===1?"":"s"}.`)}const t=e.total.min;if(this._tracks.length<t)throw new Error(t===e.total.max?`${this.format._name} requires exactly ${t} track${t===1?"":"s"}.`:`${this.format._name} requires at least ${t} track${t===1?"":"s"}.`);if(this.state==="canceled")throw new Error("Output has been canceled.");return this._startPromise?(console.warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started",this._writer.start();const i=await this._mutex.acquire();await this._muxer.start();const s=this._tracks.map(r=>r.source._start());await Promise.all(s),i()})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){if(this._cancelPromise)return console.warn("Output has already been canceled."),this._cancelPromise;if(this.state==="finalizing"||this.state==="finalized"){console.warn("Output has already been finalized.");return}return this._cancelPromise=(async()=>{this.state="canceled";const e=await this._mutex.acquire(),t=this._tracks.map(i=>i.source._flushOrWaitForOngoingClose(!0));await Promise.all(t),await this._writer.close(),e()})()}async finalize(){if(this.state==="pending")throw new Error("Cannot finalize before starting.");if(this.state==="canceled")throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(console.warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const e=await this._mutex.acquire(),t=this._tracks.map(i=>i.source._flushOrWaitForOngoingClose(!1));await Promise.all(t),await this._muxer.finalize(),await this._writer.flush(),await this._writer.finalize(),this.state="finalized",e()})()}}class At{static saveProject(e,t,i){const s={};s.name=t,s.shader=this.getShaderSnapshot(i.shader),s.timeline=i.animation.getSnapshot();const r=i.screen.captureImage("image/jpeg",.05),o=i.projectList.updateOrAddProject(e,t,r);s.id=o,i.projectList.setCurrentProject(o),localStorage.setItem("project"+s.id,JSON.stringify(s)),localStorage.setItem("lastProject",o),this.saveProjectList(i.projectList)}static saveProjectList(e){localStorage.setItem("projects",JSON.stringify(e.getSnapshot()))}static newProject(e){e.setShader(nt.mandle),e.updateFromShader(),e.projectList.setDefaultProject(),e.controls.setProject()}static loadProject(e,t){const i=JSON.parse(localStorage.getItem("project"+e));i&&(t.projectList.setCurrentProject(i.id),this.setShaderFromSnapshot(t,i.shader),t.animation.setFromSnapshot(i.timeline),t.controls.setProject())}static loadProjectList(e){if(e.projectList.clear(),localStorage.projects){const t=JSON.parse(localStorage.projects);let i=1;t.forEach(s=>{const r=s.id?s.id:i;e.projectList.addProject(new uc(r,s.name,s.image,s.lastModified)),i++})}}static loadLastProject(e){const t=localStorage.getItem("lastProject");t&&this.loadProject(t,e)}static deleteProject(e){localStorage.removeItem("project"+e)}static deleteAllStorage(){localStorage.clear()}static getShaderSnapshot(e){return e.getSnapshot()}static setShaderFromSnapshot(e,t){e.setShader(t.eShader);const i=e.shader;i.paletteIndex=t.paletteIndex,i.setFromSnapshot(t),e.updateFromShader()}static exportProject(e,t){const i={name:e,shader:this.getShaderSnapshot(t.shader),timeline:t.animation.getSnapshot()},s=JSON.stringify(i,null,2),r=new Blob([s],{type:"application/json"}),o=URL.createObjectURL(r),a=document.createElement("a");a.href=o,a.download=`${e}.json`,a.click(),URL.revokeObjectURL(o)}static async importProject(e,t){const i=await e.text(),s=JSON.parse(i);if(s){this.setShaderFromSnapshot(t,s.shader),t.animation.setFromSnapshot(s.timeline);const r=s.name||e.name.replace(".json","");t.projectList.setDefaultProject(),t.projectList.currentProjectName=r,t.controls.setProject()}}static async exportImage(e,t){const i=await t.screen.captureBlob("image/png",1),s=URL.createObjectURL(i),r=document.createElement("a");r.href=s,r.download=`${e}.png`,r.click(),URL.revokeObjectURL(s)}static async exportVideo(e,t,i=30,s,r){const o=t.animation,a=t.canvas,l={playhead:o.playhead,playing:o.playing,direction:o.direction};o.pause();const c=o.duration,u=o.mode==="pingpong"?c*2:c,d=Math.round(u*i),m={"720p":{width:1280,height:720},"1080p":{width:1920,height:1080},"1440p":{width:2560,height:1440},"4k":{width:3840,height:2160}}[t.settings.exportResolution],_=m?m.width:a.width,g=m?m.height:a.height;t.renderer.instance.setSize(_,g),t.renderer.instance.setPixelRatio(1),t.screen.shaderUniforms.uAspect.value=_/g;let p=null,h=null,M;typeof showSaveFilePicker=="function"?(p=await showSaveFilePicker({suggestedName:`${e}.mp4`,types:[{description:"MP4 Video",accept:{"video/mp4":[".mp4"]}}]}),h=await p.createWritable(),M=new vv(h,{chunked:!0})):M=new Ic;const y=new Tv({format:new Dc({fastStart:p?"fragmented":"in-memory"}),target:M}),w=new Ev("avc");y.addVideoTrack(w,{frameRate:i}),await y.start();let T=null;const P=new VideoEncoder({output:(b,B)=>w.add(ss.fromEncodedChunk(b),B),error:b=>{T=b}}),A=Math.ceil(_/16)*16*(Math.ceil(g/16)*16);let G="42001f";A>921600&&(G="420028"),A>2097152&&(G="42002a"),A>2228224&&(G="420032"),A>5652480&&(G="420033"),A>9437184&&(G="420034");const S=Math.max(5e6,_*g*i*4);P.configure({codec:`avc1.${G}`,width:_,height:g,bitrate:S,framerate:i});try{for(let b=0;b<d;b++){if(r&&r.aborted)throw new DOMException("Export cancelled","AbortError");if(T)throw T;const B=b/i,q=o.mode==="pingpong"&&B>c?2*c-B:B%(c+1e-9);o.setTime(q),t.renderer.update();const $=new VideoFrame(a,{timestamp:b*(1e6/i),duration:1e6/i}),R=b%(i*2)===0;for(P.encode($,{keyFrame:R}),$.close(),s&&s(b/d);P.encodeQueueSize>5;)await new Promise(F=>setTimeout(F,10));b%5===0&&await new Promise(F=>setTimeout(F,0))}if(await P.flush(),await y.finalize(),h)await h.close();else{const b=new Blob([M.buffer],{type:"video/mp4"}),B=URL.createObjectURL(b),q=document.createElement("a");q.href=B,q.download=`${e}.mp4`,q.click(),URL.revokeObjectURL(B)}s&&s(1)}finally{t.renderer.instance.setSize(t.sizes.width,t.sizes.height),t.renderer.instance.setPixelRatio(t.sizes.pixelRatio),t.screen.shaderUniforms.uAspect.value=t.sizes.aspect,o.playhead=l.playhead,o.direction=l.direction,o.apply(),o.trigger("timeChanged",[o.playhead]),l.playing&&o.play(),P.state!=="closed"&&P.close()}}}class Av extends ii{constructor(){super(),this.initState(),this.getElements(),this.linkExportControls()}initState(){this.videoArmed=!1,this.videoExportAbortController=null}getElements(){this.exportImageBtn=document.getElementById("export-image-btn"),this.armVideoBtn=document.getElementById("arm-video-btn"),this.exportVideoStatus=document.getElementById("export-video-status"),this.cancelVideoBtn=document.getElementById("cancel-video-btn")}linkExportControls(){this.exportImageBtn.addEventListener("click",()=>{At.exportImage(this.projectList.currentProjectName,this.experience)}),this.armVideoBtn.addEventListener("click",()=>{this.videoArmed=!this.videoArmed,this.armVideoBtn.classList.toggle("default-button",!this.videoArmed),this.armVideoBtn.classList.toggle("selected-button",this.videoArmed),this.exportVideoStatus.textContent=this.videoArmed?"Armed":""}),this.cancelVideoBtn.addEventListener("click",()=>{this.cancelVideoExport()})}async startVideoExport(){this.videoArmed=!1,this.armVideoBtn.classList.add("default-button"),this.armVideoBtn.classList.remove("selected-button"),this.exportVideoStatus.textContent="",this.videoExportAbortController=new AbortController,this.cancelVideoBtn.style.display="inline-block";try{await At.exportVideo(this.projectList.currentProjectName,this.experience,this.experience.settings.exportFps,e=>{const t=Math.round(e*100);this.exportVideoStatus.textContent="Recording "+t+"%"},this.videoExportAbortController.signal)}catch(e){e.name!=="AbortError"&&console.error("Video export error:",e)}this.cancelVideoBtn.style.display="none",this.exportVideoStatus.textContent="",this.videoExportAbortController=null}cancelVideoExport(){this.videoExportAbortController&&(this.videoExportAbortController.abort(),this.videoExportAbortController=null),this.cancelVideoBtn.style.display="none",this.exportVideoStatus.textContent="Cancelled",setTimeout(()=>{this.exportVideoStatus.textContent=""},2e3)}isVideoArmed(){return this.videoArmed}}class Cv extends ii{constructor(){super(),this.currentTutorialPage=1,this.totalTutorialPages=2,this.getElements(),this.linkExpandButton(),this.linkLoaderClose(),this.linkSettings(),this.linkHelpMenu()}getElements(){this.loaderElement=document.getElementById("loader"),this.loaderCloseBtn=document.getElementById("loader-close-btn"),this.viewerElement=document.getElementById("viewer"),this.mainGrid=document.getElementById("main-grid"),this.menuBar=document.getElementById("menu-bar"),this.centerGrid=document.getElementById("center-grid"),this.expandBtn=document.getElementById("fullscreen-btn"),this.settingsBtn=document.getElementById("settings-btn"),this.settingsElement=document.getElementById("settings"),this.settingsCloseBtn=document.getElementById("settings-close-btn"),this.menuTutorial=document.getElementById("menu-tutorial"),this.menuHotkeys=document.getElementById("menu-hotkeys"),this.tutorialModal=document.getElementById("tutorial-modal"),this.tutorialCloseBtn=document.getElementById("tutorial-close-btn"),this.hotkeysModal=document.getElementById("hotkeys-modal"),this.hotkeysCloseBtn=document.getElementById("hotkeys-close-btn"),this.tutorialPrevBtn=document.getElementById("tutorial-prev-btn"),this.tutorialNextBtn=document.getElementById("tutorial-next-btn"),this.tutorialPageIndicator=document.getElementById("tutorial-page-indicator")}linkExpandButton(){this.expandBtn.addEventListener("click",()=>{this.mainGrid.classList.contains("expanded")?(this.mainGrid.classList.remove("expanded"),this.menuBar.hidden=!1,setTimeout(()=>{this.centerGrid.classList.remove("expanded")},400)):(this.mainGrid.classList.add("expanded"),this.menuBar.hidden=!0,this.centerGrid.classList.add("expanded"))}),document.addEventListener("mousemove",e=>{if(!this.mainGrid.classList.contains("expanded"))return;const t=100,i=window.innerWidth-e.clientX<t&&window.innerHeight-e.clientY<t;this.expandBtn.classList.toggle("visible",i)})}linkLoaderClose(){this.loaderCloseBtn.addEventListener("click",()=>{this.closeLoadView()}),this.loaderElement.addEventListener("click",e=>{e.target===this.loaderElement&&this.closeLoadView()})}linkSettings(){this.settingsBtn.addEventListener("click",()=>{this.openSettingsView()}),this.settingsCloseBtn.addEventListener("click",()=>{this.closeSettingsView()}),this.settingsElement.addEventListener("click",o=>{o.target===this.settingsElement&&this.closeSettingsView()});const e=document.getElementById("scroll-zoom-speed"),t=document.getElementById("scroll-zoom-speed-value");e.addEventListener("input",()=>{t.textContent=e.value+"%",this.experience.settings.scrollZoomSpeed=e.value/100});const i=document.getElementById("export-fps"),s=document.getElementById("export-fps-value");i.addEventListener("input",()=>{s.textContent=i.value,this.experience.settings.exportFps=parseInt(i.value)});const r=document.getElementById("export-resolution");r.addEventListener("change",()=>{this.experience.settings.exportResolution=r.value})}setupEscapeHandler(e){this.videoExportController=e,document.addEventListener("keydown",t=>{t.key==="Escape"&&!this.loaderElement.hidden&&this.closeLoadView(),t.key==="Escape"&&!this.settingsElement.hidden&&this.closeSettingsView(),t.key==="Escape"&&!this.tutorialModal.hidden&&this.closeTutorialModal(),t.key==="Escape"&&!this.hotkeysModal.hidden&&this.closeHotkeysModal(),t.key==="Escape"&&this.videoExportController&&this.videoExportController.cancelVideoExport()})}openSettingsView(){this.viewerElement.hidden=!0,this.settingsElement.hidden=!1,this.canvas.hidden=!0}closeSettingsView(){this.viewerElement.hidden=!1,this.settingsElement.hidden=!0,this.canvas.hidden=!1}openLoadView(){this.viewerElement.hidden=!0,this.loaderElement.hidden=!1,this.canvas.hidden=!0,this.trigger("loadViewOpened")}closeLoadView(){this.viewerElement.hidden=!1,this.loaderElement.hidden=!0,this.canvas.hidden=!1}linkHelpMenu(){this.menuTutorial.addEventListener("click",()=>{this.openTutorialModal()}),this.tutorialCloseBtn.addEventListener("click",()=>{this.closeTutorialModal()}),this.tutorialModal.addEventListener("click",e=>{e.target===this.tutorialModal&&this.closeTutorialModal()}),this.tutorialPrevBtn.addEventListener("click",()=>{this.goToTutorialPage(this.currentTutorialPage-1)}),this.tutorialNextBtn.addEventListener("click",()=>{this.goToTutorialPage(this.currentTutorialPage+1)}),this.menuHotkeys.addEventListener("click",()=>{this.openHotkeysModal()}),this.hotkeysCloseBtn.addEventListener("click",()=>{this.closeHotkeysModal()}),this.hotkeysModal.addEventListener("click",e=>{e.target===this.hotkeysModal&&this.closeHotkeysModal()})}openTutorialModal(){this.currentTutorialPage=1,this.goToTutorialPage(1),this.viewerElement.hidden=!0,this.tutorialModal.hidden=!1,this.canvas.hidden=!0}closeTutorialModal(){this.viewerElement.hidden=!1,this.tutorialModal.hidden=!0,this.canvas.hidden=!1}goToTutorialPage(e){if(e<1||e>this.totalTutorialPages)return;for(let i=1;i<=this.totalTutorialPages;i++){const s=document.getElementById(`tutorial-page-${i}`);s&&(s.hidden=!0)}const t=document.getElementById(`tutorial-page-${e}`);t&&(t.hidden=!1),this.currentTutorialPage=e,this.tutorialPrevBtn.disabled=e===1,this.tutorialNextBtn.disabled=e===this.totalTutorialPages,this.tutorialPageIndicator.textContent=`Page ${e} of ${this.totalTutorialPages}`}openHotkeysModal(){this.viewerElement.hidden=!0,this.hotkeysModal.hidden=!1,this.canvas.hidden=!0}closeHotkeysModal(){this.viewerElement.hidden=!1,this.hotkeysModal.hidden=!0,this.canvas.hidden=!1}}class Pv extends ii{constructor(){super(),this.initState(),this.getElements(),this.createColorElements(),this.linkPalette()}initState(){this.numberOfColors=5,this.palette=this.palettes.getPaletteByIndex(0)}getElements(){this.paletteSelect=document.getElementById("palette-select"),this.numberOfColorsSlider=document.getElementById("number-of-colors-slider"),this.numberOfColorsNumber=document.getElementById("number-of-colors-number"),this.colorsContainer=document.getElementById("colors-container"),this.paletteInput=document.getElementById("palette-input")}linkPalette(){this.linkPaletteSelect(),this.linkPaletteInput(),this.setPaletteInputFromSelect(),this.linkNewPaletteButton(),this.linkRandomPaletteButton(),this.linkDeletePaletteButton(),this.numberOfColorsSlider.addEventListener("change",e=>{this.numberOfColors=e.target.value,this.setNumberOfColors()})}linkPaletteSelect(){this.setPaletteSelectOptions(),this.paletteSelect.addEventListener("change",()=>{this.setPaletteInputFromSelect();const e=this.palettes.getPaletteByName(this.paletteSelect.value);this.setPalette(e),e.locked?this.lockPaletteInput():this.unlockPaletteInput()})}linkPaletteInput(){this.paletteInput.addEventListener("change",()=>{const e=this.paletteSelect.options[this.paletteSelect.selectedIndex];this.paletteIndex=this.paletteSelect.selectedIndex,this.experience.shader&&(this.experience.shader.paletteIndex=this.paletteSelect.selectedIndex),e.value=this.paletteInput.value,e.innerHTML=this.paletteInput.value,this.palette.name=this.paletteInput.value})}setPaletteFromIndex(e){const t=this.paletteSelect.options[e];this.paletteSelect.value=t.value;const i=this.palettes.getPaletteByName(this.paletteSelect.value);this.setPalette(i),this.setPaletteInputFromSelect()}setPaletteInputFromSelect(){this.paletteIndex=this.paletteSelect.selectedIndex,this.experience.shader&&(this.experience.shader.paletteIndex=this.paletteIndex),this.paletteInput.value=this.paletteSelect.value}linkNewPaletteButton(){document.getElementById("new-palette-button").addEventListener("click",()=>{const t=this.palette.clone();t.setDefaultName(),this.palettes.addPalette(t),this.setPalette(t),this.setPaletteSelectOptions(),this.setPaletteInputFromSelect(),this.unlockPaletteInput()})}linkRandomPaletteButton(){document.getElementById("random-palette-button").addEventListener("click",()=>{if(this.palette.locked){const t=this.palettes.addPalette();this.setPalette(t)}else this.palette.randomize(),this.refreshPaletteElements();this.setPaletteSelectOptions(),this.setPaletteInputFromSelect(),this.unlockPaletteInput()})}linkDeletePaletteButton(){document.getElementById("delete-palette-button").addEventListener("click",()=>{if(!this.palette.locked){const t=this.palettes.deletePalette(this.palette);this.setPalette(t),this.setPaletteSelectOptions(),this.setPaletteInputFromSelect()}})}setNumberOfColors(){this.shaderUniforms.uPaletteLen.value=this.numberOfColors,this.palette.displayLength=this.numberOfColors,this.numberOfColorsSlider.value=this.numberOfColors,this.numberOfColorsNumber.value=this.numberOfColors,this.removeColorElements(),this.createColorElements()}createColorElements(){const e=document.getElementById("colors-container");let t,i;for(let s=0;s<this.numberOfColors;s++)t=document.createElement("input"),i=this.palette.getColor(s).clone(),i.convertSRGBToLinear(),t.setAttribute("type","color"),t.setAttribute("class","colorpicker"),t.setAttribute("data",s),t.setAttribute("value","#"+i.getHexString()),t.addEventListener("input",r=>{this.setColorFromElement(r.target,s)}),e.appendChild(t),s==0&&this.setColorFromElement(t,0)}setPalette(e){this.palette=e,this.numberOfColors=e.displayLength,this.shaderUniforms.uPalette.value=this.palette.palette,this.setNumberOfColors(),this.refreshPaletteElements(),this.trigger("paletteChanged",[e])}refreshPaletteElements(){this.removeColorElements(),this.createColorElements()}removeColorElements(){const e=this.colorsContainer;for(;e.firstChild;)e.removeChild(e.lastChild)}setColorFromElement(e,t){const i=new j(e.value);i.convertLinearToSRGB(),this.palette.setColor(t,i),this.shaderUniforms.uPalette.value[t]=i}lockPaletteInput(){this.paletteInput.disabled=!0}unlockPaletteInput(){this.paletteInput.disabled=!1}setPaletteSelectOptions(){this.paletteSelect.innerHTML="";for(const e of this.palettes){const t=document.createElement("option");t.setAttribute("value",e.name),t.innerHTML=e.name,this.paletteSelect.appendChild(t)}this.paletteSelect.selectedIndex=this.palettes.getPaletteIndex(this.palette)}getCurrentPalette(){return this.palette}}const Rv=10,Lv=5;class Ni{constructor(e=[],t="",i=null){this.name=t,this.palette=e,this.locked=!1,this.displayLength=i,e.length==0&&(this.setDefaultPalette(i??Rv),this.length=this.palette.length,this.displayLength=Lv),t.length==0&&this.setDefaultName()}clone(){const e=new Ni;for(let t=0;t<this.palette.length;t++){const i=this.getColor(t).clone();e.setColor(t,i)}return e.displayLength=this.displayLength,e}lock(){this.locked=!0}setPalette(e){this.palette=e}setDefaultPalette(e){this.clearPalette();for(let t=0;t<e;t++)this.addColor()}clearPalette(){this.palette.length=0}setDefaultName(){this.name="";for(let e=0;e<this.palette.length&&e<8;e++)this.name+=this.getHexOfIndex(e)[0]}setLength(e){this.displayLength=e}randomize(){for(const e of this.palette)this.setColorAsRandom(e)}getColor(e){return this.palette[Math.min(e,this.palette.length-1)]}setColor(e,t){this.palette[e]=t}setColorFromElement(e,t){const i=new j(t.value);i.convertLinearToSRGB(),this.palette[e]=i}setColorAsRandom(e){e.setRGB(Math.random(),Math.random(),Math.random())}getHexOfIndex(e){const t=this.palette[e].clone();return t.convertSRGBToLinear(),t.getHexString()}addColor(e=new j,t=!1){return t&&this.setColorAsRandom(e),this.palette.push(e),this.length=this.palette.length,e}addColorByHex(e){const t=new j;t.setHex(e,_t),this.addColor(t)}removeColor(e=this.palette.length-1){this.palette.pop(e)}getSnapshot(){const e={};e.name=palette.name,e.length=palette.displayLength,e.colorHexes=[];for(const t of palette.palette)e.colorHexes.push(t.getHex());return e}}class Un{static encode(e){const t=e.shader,i=e.animation,s=t.paletteIndex,r=e.palettes.getPaletteByIndex(s);let o,a;if(r.locked)o=s,a=void 0;else{o=-1;const f=r.palette.map(m=>m.getHex());a={n:r.name,l:r.displayLength,h:f}}const l=t.getNumInputs().map(f=>[f.eId,f.value]),c=i.getSnapshot(),u={d:c.duration,m:c.mode==="pingpong"?1:0,k:c.tracks.map(f=>[f.eId,f.keys])},d={v:2,s:t.eShader,p:o,i:l,a:u};a&&(d.pc=a),window.location.hash="share="+Un._toBase64url(JSON.stringify(d))}static decode(e){try{if(!Un.hasShareHash())return!1;const t=window.location.hash.slice(7),i=JSON.parse(Un._fromBase64url(t));if(i.v!==1&&i.v!==2)return!1;e.setShader(i.s);const s=e.shader,r={};for(const o of i.i)r[o[0]]={value:o[1]};if(s.setFromSnapshotByEId(r),i.p>=0)s.paletteIndex=i.p;else if(i.pc){const o=i.pc,a=o.h.map(c=>{const u=new j;return u.setHex(c),u}),l=new Ni(a,o.n,o.l);e.palettes.addPalette(l),s.paletteIndex=e.palettes.palettes.length-1}return e.updateFromShader(),i.v===2&&i.a?e.animation.setFromSnapshot({duration:i.a.d,mode:i.a.m===1?"pingpong":"loop",tracks:(i.a.k??[]).map(o=>({eId:o[0],keys:o[1]}))}):e.animation.setFromSnapshot(null),!0}catch(t){return console.warn("URLShare.decode failed:",t),!1}}static hasShareHash(){return window.location.hash.startsWith("#share=")}static async copyShareURL(){await navigator.clipboard.writeText(window.location.href)}static _toBase64url(e){return btoa(unescape(encodeURIComponent(e))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}static _fromBase64url(e){const t=e+"=".repeat((4-e.length%4)%4);return decodeURIComponent(escape(atob(t.replace(/-/g,"+").replace(/_/g,"/"))))}}class Iv extends ii{constructor(){super(),this.getElements(),this.linkProjectInfo(),this.linkMenuBar()}getElements(){this.projectNameElem=document.getElementById("project-name"),this.modeSelect=document.getElementById("mode-select"),this.loaderElement=document.getElementById("loader"),this.menuSave=document.getElementById("menu-save"),this.menuNew=document.getElementById("menu-new"),this.menuCopy=document.getElementById("menu-copy"),this.menuLoad=document.getElementById("menu-load"),this.menuDelete=document.getElementById("menu-delete"),this.menuImport=document.getElementById("menu-import"),this.menuExport=document.getElementById("menu-export"),this.menuShare=document.getElementById("menu-share"),this.menuResetShader=document.getElementById("menu-reset-shader"),this.menuClearAnimations=document.getElementById("menu-clear-animations")}linkProjectInfo(){this.projectNameElem.addEventListener("change",e=>{const t=this.projectList.currentProject;t&&(t.name=this.projectNameElem.value,this.projectList.currentProjectName=t.name,t.updateModified(),At.saveProjectList(this.projectList))}),this.modeSelect.addEventListener("change",e=>{const t=e.target.selectedIndex;this.trigger("modeChanged",[t])})}linkMenuBar(){this.menuSave.addEventListener("click",()=>{At.saveProject(this.projectList.currentProjectID,this.projectList.currentProjectName,this.experience)}),this.menuNew.addEventListener("click",()=>{At.newProject(this.experience)}),this.menuCopy.addEventListener("click",()=>{this.projectList.currentProjectID=0,this.projectList.currentProjectName=this.projectList.currentProjectName+"_copy",this.projectNameElem.value=this.projectList.currentProjectName,At.saveProject(this.projectList.currentProjectID,this.projectList.currentProjectName,this.experience)}),this.menuLoad.addEventListener("click",()=>{this.trigger("loadRequested")}),this.menuDelete.addEventListener("click",()=>{At.deleteProject(this.projectList.currentProjectID),this.projectList.deleteProject(this.projectList.currentProjectID),At.saveProjectList(this.projectList),At.newProject(this.experience)}),this.menuResetShader.addEventListener("click",()=>{this.trigger("resetShaderRequested")}),this.menuClearAnimations.addEventListener("click",()=>{this.trigger("clearAnimationsRequested")}),this.menuExport.addEventListener("click",()=>{At.exportProject(this.projectList.currentProjectName,this.experience)}),this.menuShare.addEventListener("click",async()=>{Un.encode(this.experience),await Un.copyShareURL();const e=this.menuShare.textContent;this.menuShare.textContent="Copied!",setTimeout(()=>{this.menuShare.textContent=e},1500)}),this.menuImport.addEventListener("click",()=>{const e=document.createElement("input");e.type="file",e.accept=".json",e.onchange=async t=>{const i=t.target.files[0];i&&await At.importProject(i,this.experience)},e.click()})}setProject(){this.projectNameElem.value=this.projectList.currentProjectName}setModeFromIndex(e){const t=this.modeSelect,i=t.options[e];t.value=i.value}createProjectCards(){const e=this.experience.projectList,t=this.loaderElement.querySelector(".modal"),i=t.querySelector(".projects-container");i&&(i.innerHTML="");const s=i||document.createElement("div");s.className="projects-container",i||t.appendChild(s),e&&e.projects&&e.projects.forEach(r=>{s.appendChild(this.createProjectCard(r))})}createProjectCard(e){const t=document.createElement("div");t.className="project-card";const i=document.createElement("img");i.className="project-image",i.src=e.image||null,i.alt=e.name;const s=document.createElement("div");return s.className="project-name",s.textContent=e.name,t.appendChild(i),t.appendChild(s),t.addEventListener("click",()=>{At.loadProject(e.id,this.experience),this.trigger("projectLoaded")}),t}}const Uv=Object.fromEntries(Object.entries(pe).map(([n,e])=>[e,n]));class Fv extends ii{constructor(){super(),this.selected=null,this.getElements(),this.linkTransport(),this.linkTimelineArea(),this.linkPropsPanel(),this.linkKeyboardEvents(),this.updateRuler(),this.updatePlayhead(),this.select(null)}getElements(){this.playPauseBtn=document.getElementById("play-pause-timeline-button"),this.seekStartBtn=document.getElementById("seek-start-timeline-button"),this.seekEndBtn=document.getElementById("seek-end-timeline-button"),this.loopModeBtn=document.getElementById("loop-mode-btn"),this.durationInput=document.getElementById("timeline-duration"),this.timeReadout=document.getElementById("timeline-time-readout"),this.scroll=document.getElementById("tp-scroll"),this.scrollContent=document.getElementById("tp-scroll-content"),this.ruler=document.getElementById("tp-ruler"),this.rows=document.getElementById("tp-rows"),this.emptyHint=document.getElementById("tp-empty-hint"),this.playhead=document.getElementById("tp-playhead"),this.propName=document.getElementById("tp-prop-name"),this.propsBody=document.getElementById("tp-props-body"),this.propsEmpty=document.getElementById("tp-props-empty"),this.propTime=document.getElementById("tp-prop-time"),this.propValue=document.getElementById("tp-prop-value"),this.propSharpness=document.getElementById("tp-prop-sharpness"),this.propDelete=document.getElementById("tp-prop-delete")}linkTransport(){this.playPauseBtn.addEventListener("click",()=>{this.animation.togglePlay(),this.playPauseBtn.blur()}),this.seekStartBtn.addEventListener("click",()=>{this.animation.setTime(0),this.seekStartBtn.blur()}),this.seekEndBtn.addEventListener("click",()=>{this.animation.setTime(this.animation.duration),this.seekEndBtn.blur()}),this.loopModeBtn.addEventListener("click",()=>{const e=this.animation.mode==="loop"?"pingpong":"loop";this.animation.setMode(e),this.updateModeButton(e),this.loopModeBtn.blur()}),this.durationInput.addEventListener("change",()=>{this.animation.setDuration(this.durationInput.value),this.durationInput.value=this.animation.duration})}linkKeyboardEvents(){this.keyboard.on("togglePlay",()=>{this.animation.togglePlay()}),this.keyboard.on("seekStart",()=>{this.animation.setTime(0)}),this.keyboard.on("seekEnd",()=>{this.animation.setTime(this.animation.duration)}),window.addEventListener("keydown",e=>{var i;if(e.code!=="Delete"&&e.code!=="Backspace")return;const t=(i=document.activeElement)==null?void 0:i.tagName;t==="INPUT"||t==="SELECT"||t==="TEXTAREA"||this.selected&&(e.preventDefault(),this.deleteSelectedKeyframe())})}updatePlayButton(e){this.playPauseBtn.textContent=e?"⏸":"▶"}updateModeButton(e){this.loopModeBtn.textContent=e==="pingpong"?"⇄":"⟳",this.loopModeBtn.setAttribute("data-tooltip",e==="pingpong"?"Ping-Pong (click for Loop)":"Loop (click for Ping-Pong)")}updateDurationInput(){this.durationInput.value=this.animation.duration}timeFromClientX(e){const t=this.ruler.getBoundingClientRect();if(t.width<=0)return 0;const i=(e-t.left)/t.width;return Math.min(Math.max(0,i),1)*this.animation.duration}updateRuler(){const e=this.animation.duration,t=this.ruler.getBoundingClientRect().width||800,i=[.1,.25,.5,1,2,5,10,30,60],s=t/e;let r=i[i.length-1];for(const o of i)if(o*s>=60){r=o;break}this.ruler.innerHTML="";for(let o=0;o<e-r*.25;o+=r){const a=document.createElement("span");a.className="tp-tick",a.style.left=o/e*100+"%",a.textContent=Math.round(o*100)/100+"s",this.ruler.appendChild(a)}}updatePlayhead(){const e=this.animation.duration>0?this.animation.playhead/this.animation.duration:0;this.playhead.style.left=`calc(var(--tp-label-w) + ${e} * (100% - var(--tp-label-w)))`,this.timeReadout.textContent=this.animation.playhead.toFixed(2)+"s"}getTrackName(e){var i;const t=(i=this.experience.shader)==null?void 0:i.getInput(e);return t?String(t.name):Uv[e]??`Param ${e}`}rebuild(){this.rows.innerHTML="";const e=Array.from(this.animation.tracks.values());if(this.emptyHint.hidden=e.length>0,e.forEach((t,i)=>{const s=document.createElement("div");s.className="tp-track-row",s.setAttribute("data-channel",i%5+1);const r=document.createElement("div");r.className="tp-track-label",r.textContent=this.getTrackName(t.eId),r.title=this.getTrackName(t.eId);const o=document.createElement("div");o.className="tp-track",this.linkLane(o,t);for(const a of t.keys)o.appendChild(this.buildKeyElement(t,a));s.appendChild(r),s.appendChild(o),this.rows.appendChild(s)}),this.selected){const t=this.animation.getTrack(this.selected.eId);!t||!t.keys.includes(this.selected.key)?this.select(null):this.refreshPropsPanel()}}buildKeyElement(e,t){const i=document.createElement("div");return i.className="tp-key",i.style.left=this.keyLeftPercent(t),this.selected&&this.selected.key===t&&i.classList.add("selected"),i.addEventListener("pointerdown",s=>{s.stopPropagation(),this.select(e.eId,t),this.startKeyDrag(i,e,t,s)}),i.addEventListener("contextmenu",s=>{s.preventDefault(),s.stopPropagation();const r=e.keys.indexOf(t);r>=0&&(this.selected&&this.selected.key===t&&(this.selected=null),this.animation.removeKeyframe(e.eId,r),this.animation.apply())}),i}keyLeftPercent(e){const t=this.animation.duration;return(t>0?Math.min(e.t/t,1):0)*100+"%"}startKeyDrag(e,t,i,s){e.setPointerCapture(s.pointerId);let r=!1;const o=l=>{r=!0;const c=this.timeFromClientX(l.clientX);t.moveKeyframe(t.keys.indexOf(i),c),e.style.left=this.keyLeftPercent(i),this.animation.apply(),this.refreshPropsPanel()},a=()=>{e.removeEventListener("pointermove",o),e.removeEventListener("pointerup",a),e.removeEventListener("pointercancel",a),r&&this.animation.trigger("tracksChanged")};e.addEventListener("pointermove",o),e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a)}linkLane(e,t){e.addEventListener("pointerdown",i=>{this.select(null),this.startScrub(e,i)}),e.addEventListener("dblclick",i=>{const s=this.timeFromClientX(i.clientX),r=t.evaluate(s);this.animation.addOrUpdateKeyframe(t.eId,s,r);const o=t.indexOfKeyAt(s,this.animation.keyEpsilon);o>=0&&(this.select(t.eId,t.keys[o]),this.rebuild())})}linkTimelineArea(){this.ruler.addEventListener("pointerdown",e=>{this.startScrub(this.ruler,e)}),this.sizes.on("resize",()=>{this.updateRuler()})}startScrub(e,t){e.setPointerCapture(t.pointerId),this.animation.setTime(this.timeFromClientX(t.clientX));const i=r=>{this.animation.setTime(this.timeFromClientX(r.clientX))},s=()=>{e.removeEventListener("pointermove",i),e.removeEventListener("pointerup",s),e.removeEventListener("pointercancel",s)};e.addEventListener("pointermove",i),e.addEventListener("pointerup",s),e.addEventListener("pointercancel",s)}select(e,t=null){this.selected=e===null||!t?null:{eId:Number(e),key:t};for(const i of this.rows.querySelectorAll(".tp-key.selected"))i.classList.remove("selected");if(this.selected){const i=this.animation.getTrack(this.selected.eId);if(i){const s=this.rows.querySelectorAll(".tp-track"),r=Array.from(this.animation.tracks.keys()).indexOf(this.selected.eId),o=s[r],a=i.keys.indexOf(this.selected.key);o&&o.children[a]&&o.children[a].classList.add("selected")}}this.refreshPropsPanel()}refreshPropsPanel(){if(!this.selected){this.propName.textContent="Keyframe",this.propsBody.hidden=!0,this.propsEmpty.hidden=!1;return}const{eId:e,key:t}=this.selected;this.propName.textContent=this.getTrackName(e),this.propsBody.hidden=!1,this.propsEmpty.hidden=!0,document.activeElement!==this.propTime&&(this.propTime.value=Math.round(t.t*100)/100),document.activeElement!==this.propValue&&(this.propValue.value=Math.round(t.v*1e4)/1e4),this.propSharpness.value=t.s}linkPropsPanel(){this.propTime.addEventListener("change",()=>{if(!this.selected)return;const e=this.animation.getTrack(this.selected.eId);if(!e)return;const t=e.keys.indexOf(this.selected.key);t<0||(e.moveKeyframe(t,Number(this.propTime.value)),this.animation.apply(),this.animation.trigger("tracksChanged"))}),this.propValue.addEventListener("change",()=>{this.selected&&(this.selected.key.v=Number(this.propValue.value),this.animation.apply(),this.animation.trigger("tracksChanged"))}),this.propSharpness.addEventListener("input",()=>{this.selected&&(this.selected.key.s=Number(this.propSharpness.value),this.animation.apply())}),this.propDelete.addEventListener("click",()=>{this.deleteSelectedKeyframe()})}deleteSelectedKeyframe(){if(!this.selected)return;const{eId:e,key:t}=this.selected,i=this.animation.getTrack(e);if(this.selected=null,i){const s=i.keys.indexOf(t);s>=0&&(this.animation.removeKeyframe(e,s),this.animation.apply())}this.refreshPropsPanel()}}class Dv extends ii{constructor(){super(),this.getElements(),this.linkDualInputs()}getElements(){this.leftInputsContainer=document.getElementById("left-inputs")}updateFromShader(){this.experience.shader&&(this.shader=this.experience.shader,this.clearControls(),this.setControls(this.shader),this.setUIfromShader(),this.trigger("shaderUpdated",[this.shader]))}setControls(e){const t=document.getElementById("left-inputs");this.clearControls(t),this.addControls(e,t)}addControls(e,t){const i=e.getGroups();for(const[s,r]of Object.entries(i)){for(const o of r)this.addControl(o,t);this.addBreak(t)}}addControl(e,t){switch(e.type){case"number":this.addNumberControl(e,t);break}}addBreak(e){const t=document.createElement("div");t.setAttribute("class","bottom-outline"),e.appendChild(t)}addNumberControl(e,t){const i=e.getId(),s=document.createElement("div");s.setAttribute("class","label-text");const r=document.createElement("label");r.textContent=e.name,r.setAttribute("class","label-text"),r.setAttribute("for",i);const o=document.createElement("div");o.setAttribute("class","number-input-grid");const a=document.createElement("button");a.setAttribute("class","keyframe-btn"),a.setAttribute("title","Add / update keyframe at playhead"),a.setAttribute("id",i+"-key-btn"),a.textContent="◇",e.elements.keyBtn=a;const l=document.createElement("input");l.setAttribute("type","range"),l.setAttribute("min",e.min),l.setAttribute("max",e.max),l.setAttribute("step",e.step),l.setAttribute("value",e.value),l.setAttribute("class","control-slider"),l.setAttribute("id",i+"-slider"),e.elements.slider=l;const c=document.createElement("input");c.setAttribute("type","number"),c.setAttribute("step",e.step),c.setAttribute("class","control-number control-number-ease"),c.setAttribute("id",i+"-value"),c.value=l.value,e.elements.value=c,a.addEventListener("click",()=>{this.trigger("keyframeRequested",[e])}),l.addEventListener("input",()=>{c.value>l.max&&(c.value=l.max),c.value<l.min&&(c.value=l.min),c.value=l.value,e.setValue(l.value),this.trigger("parameterEdited",[e])}),c.addEventListener("change",()=>{l.value=c.value,e.setValue(l.value),this.trigger("parameterEdited",[e])}),s.appendChild(r),s.appendChild(o),o.appendChild(a),o.appendChild(l),o.appendChild(c),t.appendChild(s)}clearControls(e){e&&(e.innerHTML="")}setUIfromShader(){if(!this.shader)return;const e=this.shader.eShader;this.shaderUniforms.uMode.value=this.shader.eShader,this.trigger("modeIndexChanged",[e])}refreshKeyButtons(){const e=this.experience.shader;if(e)for(const t of e.getNumInputs()){const i=t.elements.keyBtn;if(!i)continue;const s=!!this.animation.getTrack(t.eId),r=s&&this.animation.hasKeyAtPlayhead(t.eId);i.classList.toggle("has-track",s),i.classList.toggle("on-key",r),i.textContent=r?"◆":"◇"}}syncSlidersToShader(){const e=this.experience.shader;if(e)for(const t of e.getNumInputs())this.animation.getTrack(t.eId)&&(t.setFromShader(),t.elements.slider&&document.activeElement!==t.elements.slider&&(t.elements.slider.value=t.value),t.elements.value&&document.activeElement!==t.elements.value&&(t.elements.value.value=Math.round(t.value*1e4)/1e4))}linkDualInputs(){const e=document.getElementsByClassName("dual-input-grid");for(const t of e){const i=t.children[0],s=t.children[1];i.addEventListener("input",r=>{s.value=i.value}),s.addEventListener("input",r=>{i.value=s.value})}}}class Nv extends ni{constructor(){super(),this.experience=new Nn,this.initControllers(),this.wireControllers(),this.finalizeSetup()}initControllers(){this.utility=new _g,this.videoExport=new Av,this.palette=new Pv,this.viewModal=new Cv,this.project=new Iv,this.keyframeTimeline=new Fv,this.shaderControls=new Dv}wireControllers(){const e=this.experience.animation;this.shaderControls.on("keyframeRequested",t=>{e.addOrUpdateKeyframe(t.eId,e.playhead,Number(t.value))}),this.shaderControls.on("parameterEdited",t=>{if(e.playing)return;const i=e.getTrack(t.eId);if(!i)return;const s=i.indexOfKeyAt(e.playhead,e.keyEpsilon);s>=0&&(i.keys[s].v=Number(t.value),e.trigger("tracksChanged"))}),this.shaderControls.on("modeIndexChanged",t=>{this.project.setModeFromIndex(t)}),this.shaderControls.on("shaderUpdated",t=>{this.palette.setPaletteFromIndex(t.paletteIndex)}),e.on("timeChanged",()=>{this.keyframeTimeline.updatePlayhead(),this.shaderControls.syncSlidersToShader(),this.shaderControls.refreshKeyButtons()}),e.on("tracksChanged",()=>{this.keyframeTimeline.rebuild(),this.shaderControls.refreshKeyButtons()}),e.on("playStateChanged",t=>{this.keyframeTimeline.updatePlayButton(t),t&&this.videoExport.isVideoArmed()&&this.videoExport.startVideoExport()}),e.on("durationChanged",()=>{this.keyframeTimeline.updateRuler(),this.keyframeTimeline.updateDurationInput(),this.keyframeTimeline.rebuild()}),e.on("modeChanged",t=>{this.keyframeTimeline.updateModeButton(t)}),this.project.on("modeChanged",t=>{this.experience.setShader(t),this.experience.updateFromShader()}),this.project.on("loadRequested",()=>{this.project.createProjectCards(),this.viewModal.openLoadView()}),this.project.on("projectLoaded",()=>{this.viewModal.closeLoadView()}),this.project.on("resetShaderRequested",()=>{const t=this.experience.shader.eShader;this.experience.setShader(t),this.experience.updateFromShader()}),this.project.on("clearAnimationsRequested",()=>{e.clear()}),this.viewModal.setupEscapeHandler(this.videoExport)}finalizeSetup(){this.updateFromShader()}updateFromShader(){this.shaderControls.updateFromShader(),this.keyframeTimeline.rebuild(),this.shaderControls.refreshKeyButtons()}setProject(){this.project.setProject(),this.updateFromShader()}async startVideoExport(){await this.videoExport.startVideoExport()}getUniformValues(){return this.utility.getUniformValues()}setUniformValues(e){this.utility.setUniformValues(e)}}class Bv{constructor(){this.experience=new Nn,this.debug=this.experience.debug,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.time=this.experience.time,this.mouse=this.experience.mouse,this.scene=this.experience.scene,this.shaderMaterial=this.experience.shaderMaterial,this.shaderUniforms=this.shaderMaterial.getUniforms(),this.shader=null,this.x=0,this.y=0,this.zoom=2.47,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("Screen"),this.debugFolder.close()),this.setInstance()}setInstance(){const e=new or(2,2,32,32);this.instance=new vn(e,this.shaderMaterial.material),this.scene.add(this.instance)}updateFromShader(){this.shader=this.experience.shader,this.zoom=this.shaderUniforms.uFloatPar.value[pe.zoom]}resize(){this.shaderUniforms.uAspect.value=this.sizes.aspect}update(){this.shaderUniforms.uTime.value=this.time.elapsed/1e3}touchmove(){const e=-this.mouse.deltaX/this.sizes.width*2,t=this.mouse.deltaY/this.sizes.height*2;this.mouse.clickHeld&&(this.shaderUniforms.uFloatPar.value[pe.posX]-=e*this.zoom/2*this.sizes.aspect,this.shaderUniforms.uFloatPar.value[pe.posY]-=t*this.zoom/2,this.shader.getInput(pe.posX).setFromShader(),this.shader.getInput(pe.posY).setFromShader()),this.x+=e,this.y+=t}mousemove(){const e=-this.mouse.x/this.sizes.width*2+1,t=this.mouse.y/this.sizes.height*2-1;if(this.mouse.clickHeld){const i=this.x-e,s=this.y-t;this.shaderUniforms.uFloatPar.value[pe.posX]-=i*this.zoom/2*this.sizes.aspect,this.shaderUniforms.uFloatPar.value[pe.posY]-=s*this.zoom/2,this.shader.getInput(pe.posX).setFromShader(),this.shader.getInput(pe.posY).setFromShader()}this.x=e,this.y=t}scroll(){this.zoom=this.shaderUniforms.uFloatPar.value[pe.zoom],this.x=-this.mouse.x/this.sizes.width*2+1,this.y=this.mouse.y/this.sizes.height*2-1;const e=this.zoom,t=Math.exp(this.mouse.scrollDeltaY/2e3);this.zoom*=t;const i=e-this.zoom;this.shaderUniforms.uFloatPar.value[pe.zoom]=this.zoom,this.shaderUniforms.uFloatPar.value[pe.posX]-=this.x*i*this.sizes.aspect/2,this.shaderUniforms.uFloatPar.value[pe.posY]-=this.y*i/2,this.shader.getInput(pe.zoom).setFromShader(),this.shader.getInput(pe.posX).setFromShader(),this.shader.getInput(pe.posY).setFromShader()}captureImage(e="image/jpeg",t=.8){return this.experience.renderer.instance.render(this.scene,this.experience.camera.instance),this.canvas.toDataURL(e,t)}captureBlob(e="image/png",t=1){return this.experience.renderer.instance.render(this.scene,this.experience.camera.instance),new Promise(i=>this.canvas.toBlob(i,e,t))}}const Ov=[{name:"Classic",length:7,palette:[new j("#000000").convertLinearToSRGB(),new j("#14213d").convertLinearToSRGB(),new j("#47b8f0").convertLinearToSRGB(),new j("#e5e5e5").convertLinearToSRGB(),new j("#fca311").convertLinearToSRGB(),new j("#bb3c11").convertLinearToSRGB(),new j("#000000").convertLinearToSRGB(),new j(0,0,0),new j(0,0,0),new j(0,0,0),new j(0,0,0),new j(0,0,0)]},{name:"Sunny Beach Day",length:5,palette:[new j("#264653").convertLinearToSRGB(),new j("#2a9d8f").convertLinearToSRGB(),new j("#e9c46a").convertLinearToSRGB(),new j("#f4a261").convertLinearToSRGB(),new j("#e76f51").convertLinearToSRGB(),new j(0,0,0),new j(0,0,0),new j(0,0,0),new j(0,0,0),new j(0,0,0)]},{name:"Autumn",length:6,palette:[new j("#335c67").convertLinearToSRGB(),new j("#99a88c").convertLinearToSRGB(),new j("#fff3b0").convertLinearToSRGB(),new j("#e09f3e").convertLinearToSRGB(),new j("#9e2a2b").convertLinearToSRGB(),new j("#540b0e").convertLinearToSRGB(),new j(0,0,0),new j(0,0,0),new j(0,0,0),new j(0,0,0)]},{name:"Watermelon",length:5,palette:[new j("#ef476f").convertLinearToSRGB(),new j("#ffd166").convertLinearToSRGB(),new j("#06d6a0").convertLinearToSRGB(),new j("#118ab2").convertLinearToSRGB(),new j("#073b4c").convertLinearToSRGB(),new j(0,0,0),new j(0,0,0),new j(0,0,0),new j(0,0,0),new j(0,0,0)]},{name:"Pastel Rainbow",length:9,palette:[new j("#ffadad").convertLinearToSRGB(),new j("#ffd6a5").convertLinearToSRGB(),new j("#fdffb6").convertLinearToSRGB(),new j("#caffbf").convertLinearToSRGB(),new j("#9bf6ff").convertLinearToSRGB(),new j("#a0c4ff").convertLinearToSRGB(),new j("#bdb2ff").convertLinearToSRGB(),new j("#ffc6ff").convertLinearToSRGB(),new j("#fffffc").convertLinearToSRGB(),new j(0,0,0).convertLinearToSRGB()]},{name:"Black and White",length:2,palette:[new j(0,0,0),new j(1,1,1),new j(0,0,0),new j(0,0,0),new j(0,0,0),new j(0,0,0),new j(0,0,0),new j(0,0,0),new j(0,0,0),new j(0,0,0)]},{name:"Oceanic Cactus",length:5,palette:[new j("#1a535c").convertLinearToSRGB(),new j("#4ecdc4").convertLinearToSRGB(),new j("#f7fff7").convertLinearToSRGB(),new j("#ff6b6b").convertLinearToSRGB(),new j("#ffe66d").convertLinearToSRGB(),new j(0,0,0).convertLinearToSRGB(),new j(0,0,0).convertLinearToSRGB(),new j(0,0,0).convertLinearToSRGB(),new j(0,0,0).convertLinearToSRGB(),new j(0,0,0).convertLinearToSRGB()]}];class kv{static savePalettes(e){const t=this.getPalettesSnapshot(e);localStorage.setItem("palettes",JSON.stringify(t))}static loadPalettes(e){const t=JSON.parse(localStorage.getItem("palettes"));t&&this.setPalettesFromSnapshot(e,t)}static getPalettesSnapshot(e){return e.getSnapshot()}static setPalettesFromSnapshot(e,t){for(const i of t){const s=i.name,r=[],o=i.length;for(const a of i.colorHexes){let l=new j;l.setHex(a),r.push(l)}e.addPalette(new Ni(r,s,o))}}}class zv{constructor(){this.load()}load(){this.palettes=this.readDefaultPalettes(),kv.loadPalettes(this)}readDefaultPalettes(){let e=[];for(const t of Ov){const i=new Ni(t.palette,t.name,t.length);i.lock(),e.push(i)}return this.length=e.length,e}getPaletteByIndex(e){return this.palettes[Math.min(e,this.palettes.length-1)]}getPaletteIndex(e){for(let t=0;t<this.palettes.length;t++)if(this.palettes[t]===e)return t}getPaletteByName(e){for(const t of this.palettes)if(t.name==e)return t;return null}[Symbol.iterator](){var e=-1,t=this.palettes;return{next:()=>({value:t[++e],done:!(e in t)})}}addPalette(e=new Ni){return this.palettes.push(e),e}deletePalette(e){const t=this.getPaletteIndex(e);return this.palettes.splice(t,1),this.palettes[t<this.palettes.length?t:this.palettes.length-1]}save(){Storage.setPalettes(this.palettes)}getSnapshot(){const e=[];for(const t of palettes)if(!t.locked){const i=t.getSnapshot();e.push(i)}return e}}const Vv=`
uniform float uAspect;

uniform float uSinZoom;
uniform float uSinStretch;

varying vec2 vUv;
void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    
    vUv = uv;
    vUv.x *= uAspect;
}`,Gv=`
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
#define uPower2 uFloatPar[22]
#define uCposX2 uFloatPar[23]
#define uCposY2 uFloatPar[24]

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
  vec2 zn = warpUv(uv, 0.01 * uSinMag, vec2(uSinFreqY * 10000., uSinFreqX * 10000.), vec2(0., 0.));
  vec2 z0 = zn;
  float mZ = dot(zn, zn);
  for (i = 0; mZ < 4.0 && i < maxIters; i++) {
    zn = complexPow(zn, uPower) + c;
    mZ = dot(zn, zn);
  }
  vec2 newUv = uv * zn;
  zn = newUv;
  mZ = dot(zn, zn);
  vec2 c2 = vec2(uCposX2, uCposY2);
  float iter2Float = exp(6.8 * uIters2);
  int maxIters2 = int(iter2Float);
  for (i = 0; mZ < 4.0 && i < maxIters2; i++) {
    zn = complexPow(zn, uPower2) + c2;
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

  vec2 c1 = vec2(uCposX, uCposY);
  vec2 c2 = vec2(uCposX2, uCposY2);
  int i;
  vec2 zn = warpUv(uv, 0.1 * uSinMag, vec2(uSinFreqY * 10000., uSinFreqX * 10000.), vec2(0., 0.));
  vec2 z0 = zn;
  float mZ = dot(zn, zn);

  for (i = 0; mZ < 4.0 && i < maxIters; i++) {
    // zn = ((complexPow(zn, uPower) - (1./log(zn) + c2) + c))/(c+1./float(i));
    zn = abs(complexPow(zn, uPower) + c1) - 1./log(abs(complexPow(zn,uPower2)/5. + c2));
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
  if (iterations < 200) {
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
  const float PHI = 1.61803398874989484820;
  const float GOLDEN_ANGLE = 2.39996322972865332; // radians: 2*PI*(1 - 1/PHI)

  uv = warpUv(uv, uSinMag, vec2(uSinFreqX, uSinFreqY), vec2(0., 0.));

  int numCircles = int(uIters * 120.) + 16;
  float scale = uPower * 1.5 + 0.1;

  float accumVal = 0.0;

  for (int i = 0; i < numCircles; i++) {

      float fi = float(i);

      // Fibonacci spiral: radius grows with sqrt(i), angle steps by golden angle
      float r = sqrt(fi + 1.0) * 2.8;
      float angle = fi * GOLDEN_ANGLE + uCposX * PI;

      vec2 center = vec2(cos(angle), sin(angle)) * r;

      // Circle size decreases for outer ones, creating layered feel
      float circleRadius = (1.0 / sqrt(fi + 1.0)) * scale * 10.18 + 0.01;

      float dist = length(uv - center);

      // Smooth circle contribution with ripple falloff
      float circle = 1.0 - smoothstep(0.0, circleRadius, dist);
      // Add a ripple ring effect
      float ripple = sin(dist / circleRadius * PI * 2.0) * 0.5 + 0.5;
      ripple *= exp(-dist / (circleRadius * 2.0));

      accumVal += circle + ripple * 0.5;
  }

  accumVal = accumVal * 0.1 + uCposY;

  vec3 mixedColor = getMixedColor(accumVal, 1);
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
`;class Hv{constructor(){this.experience=new Nn,this.debug=this.experience.debug,this.sizes=this.experience.sizes,this.time=this.experience.time,this.palettes=this.experience.palettes,this.palette=this.palettes.getPaletteByIndex(0),this.mode=0,this.numberOfColors=6,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("Shader"),this.debugFolder.close()),this.material=new Dn({vertexShader:Vv,fragmentShader:Gv,side:sn,uniforms:{uPalette:{type:"v3v",value:this.palette.palette},uFloatPar:{value:new Float32Array(25)},uTime:{value:0},uAspect:{value:this.sizes.aspect},uMode:{value:this.mode},uPaletteLen:{value:this.numberOfColors}}})}getUniforms(){return this.material.uniforms}setShader(e){const t=this.material.uniforms;e.uFloatPars=t.uFloatPar.value}}class er{constructor(e){this.eId=e,this.keys=[]}setKeyframe(e,t,i=null,s=.005){const r=this.indexOfKeyAt(e,s);if(r>=0)return this.keys[r].v=t,i!==null&&(this.keys[r].s=i),r;const o={t:e,v:t,s:i??0};return this.keys.push(o),this.sortKeys(),this.keys.indexOf(o)}removeKeyframe(e){this.keys.splice(e,1)}indexOfKeyAt(e,t){for(let i=0;i<this.keys.length;i++)if(Math.abs(this.keys[i].t-e)<=t)return i;return-1}moveKeyframe(e,t){const i=this.keys[e];return i?(i.t=Math.max(0,t),this.sortKeys(),this.keys.indexOf(i)):e}sortKeys(){this.keys.sort((e,t)=>e.t-t.t)}get length(){return this.keys.length}evaluate(e){const t=this.keys,i=t.length;if(i===0)return 0;if(i===1||e<=t[0].t)return t[0].v;if(e>=t[i-1].t)return t[i-1].v;let s=0;for(;s<i-2&&e>=t[s+1].t;)s++;const r=t[s],o=t[s+1],a=o.t-r.t;if(a<=0)return o.v;const l=(e-r.t)/a,c=(o.v-r.v)/a,u=s>0?(o.v-t[s-1].v)/(o.t-t[s-1].t):c,d=s+2<i?(t[s+2].v-r.v)/(t[s+2].t-r.t):c,f=u+(c-u)*r.s,m=d+(c-d)*o.s,_=l*l,g=_*l;return(2*g-3*_+1)*r.v+(g-2*_+l)*a*f+(-2*g+3*_)*o.v+(g-_)*a*m}getSnapshot(){return{eId:this.eId,keys:this.keys.map(e=>[Math.round(e.t*1e3)/1e3,Math.round(e.v*1e6)/1e6,Math.round(e.s*100)/100])}}static fromSnapshot(e){const t=new er(e.eId);if(e.keys instanceof Array){for(const i of e.keys)t.keys.push({t:i[0],v:i[1],s:i[2]??0});t.sortKeys()}return t}}class Wv extends ni{constructor(e){super(),this.experience=e,this.duration=15,this.mode="loop",this.playhead=0,this.playing=!1,this.direction=1,this.tracks=new Map}get keyEpsilon(){return Math.max(.005,this.duration/500)}getTrack(e){return this.tracks.get(Number(e))}getOrCreateTrack(e){e=Number(e);let t=this.tracks.get(e);return t||(t=new er(e),this.tracks.set(e,t)),t}addOrUpdateKeyframe(e,t,i,s=null){const o=this.getOrCreateTrack(e).setKeyframe(t,i,s,this.keyEpsilon);return this.trigger("tracksChanged"),o}removeKeyframe(e,t){const i=this.getTrack(e);i&&(i.removeKeyframe(t),i.length===0&&this.tracks.delete(Number(e)),this.trigger("tracksChanged"))}hasKeyAtPlayhead(e){const t=this.getTrack(e);return t?t.indexOfKeyAt(this.playhead,this.keyEpsilon)>=0:!1}hasTracks(){return this.tracks.size>0}play(){this.playing||(this.playing=!0,this.trigger("playStateChanged",[this.playing]))}pause(){this.playing&&(this.playing=!1,this.trigger("playStateChanged",[this.playing]))}togglePlay(){this.playing?this.pause():this.play()}setTime(e){this.playhead=Math.min(Math.max(0,e),this.duration),this.apply(),this.trigger("timeChanged",[this.playhead])}setDuration(e){this.duration=Math.max(.1,Number(e)),this.playhead>this.duration&&(this.playhead=this.duration),this.trigger("durationChanged",[this.duration]),this.trigger("timeChanged",[this.playhead])}setMode(e){this.mode=e==="pingpong"?"pingpong":"loop",this.mode==="loop"&&(this.direction=1),this.trigger("modeChanged",[this.mode])}update(e){this.playing&&(this.playhead+=e/1e3*this.direction,this.mode==="pingpong"?(this.playhead>=this.duration&&(this.direction=-1,this.playhead=2*this.duration-this.playhead),this.playhead<=0&&(this.direction=1,this.playhead=-this.playhead)):this.playhead>=this.duration&&(this.playhead-=this.duration),this.apply(),this.trigger("timeChanged",[this.playhead]))}apply(){const e=this.experience.shader;if(e)for(const[t,i]of this.tracks){if(i.length===0)continue;let s=i.evaluate(this.playhead);const r=e.getInput(t);r&&(s=Math.min(Math.max(s,r.min),r.max)),e.uFloatPars[t]=s}}clear(){this.tracks.clear(),this.playhead=0,this.pause(),this.trigger("tracksChanged"),this.trigger("timeChanged",[this.playhead])}getSnapshot(){return{duration:this.duration,mode:this.mode,tracks:Array.from(this.tracks.values()).map(e=>e.getSnapshot())}}setFromSnapshot(e){if(this.tracks.clear(),this.playhead=0,this.playing=!1,this.direction=1,e&&(this.duration=Number(e.duration)||15,this.mode=e.mode==="pingpong"?"pingpong":"loop",e.tracks instanceof Array))for(const t of e.tracks){const i=er.fromSnapshot(t);i.length>0&&this.tracks.set(Number(i.eId),i)}this.apply(),this.trigger("durationChanged",[this.duration]),this.trigger("modeChanged",[this.mode]),this.trigger("tracksChanged"),this.trigger("playStateChanged",[this.playing]),this.trigger("timeChanged",[this.playhead])}}class tr extends ni{constructor(e=window){super(),this.heldKeys=new Set,this.keyMap={},e.addEventListener("keydown",t=>{if(!tr.isTypingTarget(t.target)&&!this.heldKeys.has(t.code)){this.heldKeys.add(t.code);const s=`keydown:${this.buildKeyString(t)}`;this.trigger(s),this.keyMap[s]&&this.trigger(this.keyMap[s])}}),e.addEventListener("keyup",t=>{if(this.heldKeys.delete(t.code),tr.isTypingTarget(t.target))return;const s=`keyup:${this.buildKeyString(t)}`;this.trigger(s),this.keyMap[s]&&this.trigger(this.keyMap[s])})}addMapping(e,t,i="keydown"){this.keyMap[i+":"+e]=t}static isTypingTarget(e){const t=e==null?void 0:e.tagName;return t==="INPUT"||t==="SELECT"||t==="TEXTAREA"}isDown(e){return this.heldKeys.has(e)}buildKeyString(e){let t="";return(e.ctrlKey||e.metaKey)&&(t+="Ctrl+"),e.shiftKey&&(t+="Shift+"),e.altKey&&(t+="Alt+"),t+=e.code,t}}class Xv{constructor(){this.scrollZoomSpeed=1,this.exportFps=30,this.exportResolution="1080p"}}const Vo=new kt("Mandle",nt.mandle),ds=new kt("Julia",nt.julia),fs=new kt("Sin Julia",nt.doubleJulia),ps=new kt("Phoenix",nt.phoenix),ms=new kt("Sphinx",nt.sphinx),gs=new kt("Neuton",nt.neuton),lr=new kt("Burning Ship",nt.burningShip),ki=new we({eId:pe.iters,name:"Iterations",value:.6,min:.1,max:1,step:.001}),qv=new we({eId:pe.iters2,name:"Iterations 2",value:.5,min:.1,max:1,step:.001}),zi=new we({eId:pe.power,name:"Power",value:2,min:-30,max:30,step:1}),jv=new we({eId:pe.power2,name:"Power 2",value:2,min:-30,max:30,step:1}),ri=new we({eId:pe.posX,name:"Position X",value:-.5,min:-2,max:2,step:1e-4}),oi=new we({eId:pe.posY,name:"Position Y",value:0,min:-2,max:2,step:1e-4}),ai=new we({eId:pe.zoom,name:"Zoom",value:2.2,min:0,max:1,step:.01}),li=new we({eId:pe.rotation,name:"Rotation",value:0,min:-Math.PI*2,max:Math.PI*2,step:.001}),Yv=new we({eId:pe.iters,name:"Iterations",value:.2,min:.1,max:1,step:.001}),$v=new we({eId:pe.power,name:"Power",value:2,min:-30,max:30,step:1}),Kv=new we({eId:pe.power2,name:"Power 2",value:-5,min:-30,max:30,step:1});Vo.addGroup("Core",[ki,zi,ri,oi,ai,li]);ds.addGroup("Core",[ki,zi,ri,oi,ai,li]);fs.addGroup("Core",[ki,qv,zi,jv,ri,oi,ai,li]);ps.addGroup("Core",[ki,zi,ri,oi,ai,li]);ms.addGroup("Core",[Yv,$v,Kv,ri,oi,ai,li]);gs.addGroup("Core",[ki,zi,ri,oi,ai,li]);lr.addGroup("Core",[ki,zi,ri,oi,ai,li]);const cr=new we({eId:pe.cPosX,name:"Const Position X",value:-.75,min:-2,max:2,step:1e-4}),ur=new we({eId:pe.cPosY,name:"Const Position Y",value:.25,min:-2,max:2,step:1e-4}),Zv=new we({eId:pe.cPosX2,name:"Const Position X 2",value:-.75,min:-2,max:2,step:1e-4}),Jv=new we({eId:pe.cPosY2,name:"Const Position Y 2",value:.25,min:-2,max:2,step:1e-4}),Qv=new we({eId:pe.cPosX,name:"Const Position X",value:.21,min:-4,max:4,step:1e-4}),e0=new we({eId:pe.cPosY,name:"Const Position Y",value:1.05,min:-4,max:4,step:1e-4}),t0=new we({eId:pe.cPosX2,name:"Const Position X 2",value:-1.6,min:-4,max:4,step:1e-4}),n0=new we({eId:pe.cPosY2,name:"Const Position Y 2",value:-1.7,min:-4,max:4,step:1e-4});ds.addGroup("Point",[cr,ur]);fs.addGroup("Point",[cr,ur,Zv,Jv]);ps.addGroup("Point",[cr,ur]);ms.addGroup("Point",[Qv,e0,t0,n0]);gs.addGroup("Point",[cr,ur]);const ci=new we({eId:pe.velDir,name:"Velocity Direction",value:0,min:-1,max:1,step:1}),ui=new we({eId:pe.velMag,name:"Velocity Amount",value:.5,min:0,max:5,step:.001});Vo.addGroup("Velocity",[ci,ui]);ds.addGroup("Velocity",[ci,ui]);fs.addGroup("Velocity",[ci,ui]);ps.addGroup("Velocity",[ci,ui]);ms.addGroup("Velocity",[ci,ui]);gs.addGroup("Velocity",[ci,ui]);lr.addGroup("Velocity",[ci,ui]);const Vi=new we({eId:pe.uSinMag,name:"Sin Mag",value:0,min:0,max:1,step:.001}),Gi=new we({eId:pe.sinFreqX,name:"Sin X Frequency",value:0,min:0,max:1,step:.001}),Hi=new we({eId:pe.sinFreqY,name:"Sin y Frequency",value:0,min:.001,max:1,step:.001});ds.addGroup("Sin Offsets",[Vi,Gi,Hi]);fs.addGroup("Sin Offsets",[Vi,Gi,Hi]);ps.addGroup("Sin Offsets",[Vi,Gi,Hi]);ms.addGroup("Sin Offsets",[Vi,Gi,Hi]);gs.addGroup("Sin Offsets",[Vi,Gi,Hi]);lr.addGroup("Sin Offsets",[Vi,Gi,Hi]);const Hn={julia:ds,mandle:Vo,doubleJulia:fs,phoenix:ps,neuton:gs,burningShip:lr,sphinx:ms},_s=new kt("Noise",nt.noise),hr=new kt("Circle Waves",nt.circularWaves),dr=new kt("Circle Waves",nt.linearWaves),fr=new kt("Circle Waves",nt.fibonacci),i0=new we({eId:pe.iters,name:"Color Step Size",value:10,min:-100,max:100,step:.01}),s0=new we({eId:pe.power,name:"Density",value:10,min:-50,max:50,step:.01}),Go=new we({eId:pe.iters,name:"Scale 1",value:.025,min:-3,max:3,step:1e-4}),Ho=new we({eId:pe.power,name:"Scale 2",value:.05,min:-3,max:3,step:1e-4}),pr=new we({eId:pe.posX,name:"Position X",value:.1,min:-1,max:1,step:1e-5}),mr=new we({eId:pe.posY,name:"Position Y",value:.5,min:-2,max:2,step:1e-4}),gr=new we({eId:pe.zoom,name:"Zoom",value:20,min:0,max:1,step:.01}),_r=new we({eId:pe.rotation,name:"Rotation",value:0,min:-Math.PI*2,max:Math.PI*2,step:.001});_s.addGroup("Core",[i0,s0,pr,mr,gr,_r]);hr.addGroup("Core",[Go,Ho,pr,mr,gr,_r]);dr.addGroup("Core",[Go,Ho,pr,mr,gr,_r]);fr.addGroup("Core",[Go,Ho,pr,mr,gr,_r]);const vr=new we({eId:pe.cPosX,name:"Const Position X",value:2,min:-5,max:5,step:1e-4}),xr=new we({eId:pe.cPosY,name:"Const Position Y",value:.5,min:-5,max:5,step:1e-4});_s.addGroup("Point",[vr,xr]);hr.addGroup("Point",[vr,xr]);dr.addGroup("Point",[vr,xr]);fr.addGroup("Point",[vr,xr]);const r0=new we({eId:pe.velDir,name:"UV scale",value:0,min:-5,max:5,step:1e-4}),o0=new we({eId:pe.velMag,name:"Mix UV",value:-1,min:0,max:1,step:.001});_s.addGroup("Velocity",[r0,o0]);const Sr=new we({eId:pe.uSinMag,name:"Sin Mag",value:0,min:0,max:1,step:.001}),yr=new we({eId:pe.sinFreqX,name:"Sin X Amount",value:0,min:-5,max:5,step:.001}),Er=new we({eId:pe.sinFreqY,name:"Sin y Amount",value:0,min:-5,max:5,step:.001});_s.addGroup("Sin",[Sr,yr,Er]);dr.addGroup("Sin",[Sr,yr,Er]);hr.addGroup("Sin",[Sr,yr,Er]);fr.addGroup("Sin",[Sr,yr,Er]);const Ws={noise:_s,circularWaves:hr,linearWaves:dr,fibonacci:fr},a0=new we({eId:pe.mirrorFoldsX,name:"Mirror Folds X",value:1,min:1,max:16,step:1}),l0=new we({eId:pe.mirrorFoldsY,name:"Mirror Folds Y",value:1,min:1,max:16,step:1}),c0=new we({eId:pe.mirrorOffsetX,name:"Mirror Offset X",value:0,min:-1,max:1,step:.001}),u0=new we({eId:pe.mirrorOffsetY,name:"Mirror Offset Y",value:0,min:-1,max:1,step:.001}),h0=new we({eId:pe.colorOffset,name:"Color Offset",value:0,min:0,max:10,step:.01}),d0=new we({eId:pe.hueRotation,name:"Hue Rotation",value:0,min:-4,max:4,step:.01}),f0=new we({eId:pe.colorScale,name:"Color Scale",value:1,min:.1,max:5,step:.01}),Ul={Mirror:[a0,l0,c0,u0],Color:[h0,d0,f0]};class p0{static getShader(e){let t=null;switch(e){case nt.mandle:t=Hn.mandle;break;case nt.julia:t=Hn.julia;break;case nt.phoenix:t=Hn.phoenix;break;case nt.doubleJulia:t=Hn.doubleJulia;break;case nt.neuton:t=Hn.neuton;break;case nt.burningShip:t=Hn.burningShip;break;case nt.noise:t=Ws.noise;break;case nt.circularWaves:t=Ws.circularWaves;break;case nt.linearWaves:t=Ws.linearWaves;break;case nt.fibonacci:t=Ws.fibonacci;break;case nt.sphinx:t=Hn.sphinx;break}return this.addStandardParameters(t),t.clone()}static addStandardParameters(e){e.addGroup("Mirror",Ul.Mirror),e.addGroup("Color",Ul.Color)}}Ke.enabled=!0;let fo=null;class Nn{constructor(e){if(fo)return fo;fo=this,window.experience=this,this.canvas=e,this.initComponents(),this.initEventListeners(),this.setShader(nt.mandle),this.updateFromShader(),this.setKeyMappings(),this.onLoad()}initComponents(){this.projectList=new vg,this.keyboard=new tr,this.animation=new Wv(this),this.debug=new pg,this.sizes=new Jm,this.time=new Qm,this.scene=new Zm,this.palettes=new zv,this.camera=new eg,this.renderer=new gg,this.settings=new Xv,this.mouse=new mg,this.shaderMaterial=new Hv,this.screen=new Bv,this.controls=new Nv,this.shader=null}initEventListeners(){this.sizes.on("resize",()=>{this.resize()}),this.time.on("tick",()=>{this.update()}),this.mouse.on("mousemove",()=>{this.mousemove()}),this.mouse.on("touchmove",()=>{this.touchmove()}),this.mouse.on("doubleClick",()=>{this.doubleClick()}),this.mouse.on("scroll",()=>{this.scroll()})}setShader(e){this.shader=p0.getShader(e)}updateFromShader(){this.shaderMaterial.setShader(this.shader),this.shader.setInputs(),this.controls.updateFromShader(),this.screen.updateFromShader()}setKeyMappings(){this.keyboard.addMapping("Space","togglePlay"),this.keyboard.addMapping("Comma","seekStart"),this.keyboard.addMapping("Period","seekEnd")}resize(){this.camera.resize(),this.renderer.resize(),this.screen.resize()}update(){this.animation.update(this.time.delta),this.renderer.update(),this.screen.update()}mousemove(){this.screen.mousemove()}touchmove(){this.screen.touchmove()}doubleClick(){this.renderer.doubleClick()}scroll(){this.screen.scroll()}onLoad(){this.renderer.onLoad(),At.loadProjectList(this),Un.hasShareHash()?Un.decode(this)||At.loadLastProject(this):At.loadLastProject(this)}onBeforeUnload(){this.palettes.save()}}const m0=new Nn(document.querySelector("canvas"));window.onbeforeunload=()=>{m0.onBeforeUnload()};
//# sourceMappingURL=index-04b89e46.js.map
