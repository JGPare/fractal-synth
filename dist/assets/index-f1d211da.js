(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const za="158",uu=0,mo=1,du=2,ec=1,hu=2,_n=3,zn=0,It=1,rn=2,Dn=0,Bi=1,go=2,_o=3,vo=4,fu=5,ti=100,pu=101,mu=102,xo=103,yo=104,gu=200,_u=201,vu=202,xu=203,Ca=204,Pa=205,yu=206,Su=207,Eu=208,bu=209,wu=210,Mu=211,Tu=212,Au=213,Cu=214,Pu=0,Ru=1,Lu=2,ir=3,Iu=4,Fu=5,Uu=6,Du=7,tc=0,Nu=1,Bu=2,Nn=0,Ou=1,ku=2,zu=3,Vu=4,Gu=5,nc=300,ki=301,zi=302,Ra=303,La=304,pr=306,Ia=1e3,Zt=1001,Fa=1002,Ct=1003,So=1004,kr=1005,Ht=1006,Hu=1007,hs=1008,Bn=1009,Wu=1010,Xu=1011,Va=1012,ic=1013,In=1014,Fn=1015,fs=1016,sc=1017,rc=1018,ri=1020,ju=1021,Jt=1023,qu=1024,$u=1025,ai=1026,Vi=1027,Yu=1028,ac=1029,Ku=1030,oc=1031,lc=1033,zr=33776,Vr=33777,Gr=33778,Hr=33779,Eo=35840,bo=35841,wo=35842,Mo=35843,Zu=36196,To=37492,Ao=37496,Co=37808,Po=37809,Ro=37810,Lo=37811,Io=37812,Fo=37813,Uo=37814,Do=37815,No=37816,Bo=37817,Oo=37818,ko=37819,zo=37820,Vo=37821,Wr=36492,Go=36494,Ho=36495,Ju=36283,Wo=36284,Xo=36285,jo=36286,cc=3e3,oi=3001,Qu=3200,ed=3201,td=0,nd=1,Wt="",_t="srgb",En="srgb-linear",Ga="display-p3",mr="display-p3-linear",sr="linear",tt="srgb",rr="rec709",ar="p3",xi=7680,qo=519,id=512,sd=513,rd=514,ad=515,od=516,ld=517,cd=518,ud=519,$o=35044,Yo="300 es",Ua=1035,xn=2e3,or=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xr=Math.PI/180,Da=180/Math.PI;function vs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function Lt(i,e,t){return Math.max(e,Math.min(t,i))}function dd(i,e){return(i%e+e)%e}function jr(i,e,t){return(1-t)*i+t*e}function Ko(i){return(i&i-1)===0&&i!==0}function Na(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ns(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,s,r,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=s[0],p=s[3],h=s[6],E=s[1],y=s[4],b=s[7],T=s[2],C=s[5],A=s[8];return r[0]=a*_+o*E+l*T,r[3]=a*p+o*y+l*C,r[6]=a*h+o*b+l*A,r[1]=c*_+u*E+d*T,r[4]=c*p+u*y+d*C,r[7]=c*h+u*b+d*A,r[2]=f*_+m*E+g*T,r[5]=f*p+m*y+g*C,r[8]=f*h+m*b+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*r,m=c*r-a*l,g=t*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qr.makeScale(e,t)),this}rotate(e){return this.premultiply(qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qr=new Ge;function uc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hd(){const i=lr("canvas");return i.style.display="block",i}const Zo={};function us(i){i in Zo||(Zo[i]=!0,console.warn(i))}const Jo=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qo=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rs={[En]:{transfer:sr,primaries:rr,toReference:i=>i,fromReference:i=>i},[_t]:{transfer:tt,primaries:rr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[mr]:{transfer:sr,primaries:ar,toReference:i=>i.applyMatrix3(Qo),fromReference:i=>i.applyMatrix3(Jo)},[Ga]:{transfer:tt,primaries:ar,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Qo),fromReference:i=>i.applyMatrix3(Jo).convertLinearToSRGB()}},fd=new Set([En,mr]),Ke={enabled:!0,_workingColorSpace:En,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!fd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Rs[e].toReference,s=Rs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Rs[i].primaries},getTransfer:function(i){return i===Wt?sr:Rs[i].transfer}};function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let yi;class dc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yi===void 0&&(yi=lr("canvas")),yi.width=e.width,yi.height=e.height;const n=yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Oi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pd=0;class hc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=vs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Yr(s[a].image)):r.push(Yr(s[a]))}else r=Yr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Yr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?dc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let md=0;class Ot extends ji{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Zt,s=Zt,r=Ht,a=hs,o=Jt,l=Bn,c=Ot.DEFAULT_ANISOTROPY,u=Wt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=vs(),this.name="",this.source=new hc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===oi?_t:Wt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ia:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ia:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_t?oi:cc}set encoding(e){us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===oi?_t:Wt}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=nc;Ot.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,s=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(m+1)/2,T=(h+1)/2,C=(u+f)/4,A=(d+_)/4,O=(g+p)/4;return y>b&&y>T?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=C/n,r=A/n):b>T?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=C/s,r=O/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=A/r,s=O/r),this.set(n,s,r,t),this}let E=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-_)/E,this.z=(f-u)/E,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gd extends ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(us("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===oi?_t:Wt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ot(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends gd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class fc extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _d extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==m||u!==g){let p=1-o;const h=l*f+c*m+u*g+d*_,E=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const T=Math.sqrt(y),C=Math.atan2(T,h*E);p=Math.sin(p*C)/T,o=Math.sin(o*C)/T}const b=o*E;if(l=l*p+f*b,c=c*p+m*b,u=u*p+g*b,d=d*p+_*b,p===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*m-c*f,e[t+1]=l*g+u*f+c*d-o*m,e[t+2]=c*g+u*m+o*f-l*d,e[t+3]=u*g-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"YZX":this._x=f*u*d+c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d-f*m*g;break;case"XZY":this._x=f*u*d-c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(el.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(el.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kr.copy(this).projectOnVector(e),this.sub(Kr)}reflect(e){return this.sub(Kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kr=new B,el=new xs;class ys{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xt):Xt.fromBufferAttribute(r,a),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(e.matrixWorld),this.union(Ls)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(is),Is.subVectors(this.max,is),Si.subVectors(e.a,is),Ei.subVectors(e.b,is),bi.subVectors(e.c,is),bn.subVectors(Ei,Si),wn.subVectors(bi,Ei),qn.subVectors(Si,bi);let t=[0,-bn.z,bn.y,0,-wn.z,wn.y,0,-qn.z,qn.y,bn.z,0,-bn.x,wn.z,0,-wn.x,qn.z,0,-qn.x,-bn.y,bn.x,0,-wn.y,wn.x,0,-qn.y,qn.x,0];return!Zr(t,Si,Ei,bi,Is)||(t=[1,0,0,0,1,0,0,0,1],!Zr(t,Si,Ei,bi,Is))?!1:(Fs.crossVectors(bn,wn),t=[Fs.x,Fs.y,Fs.z],Zr(t,Si,Ei,bi,Is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hn=[new B,new B,new B,new B,new B,new B,new B,new B],Xt=new B,Ls=new ys,Si=new B,Ei=new B,bi=new B,bn=new B,wn=new B,qn=new B,is=new B,Is=new B,Fs=new B,$n=new B;function Zr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$n.fromArray(i,r);const o=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),l=e.dot($n),c=t.dot($n),u=n.dot($n);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const vd=new ys,ss=new B,Jr=new B;class Ha{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ss.subVectors(e,this.center);const t=ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ss,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ss.copy(e.center).add(Jr)),this.expandByPoint(ss.copy(e.center).sub(Jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new B,Qr=new B,Us=new B,Mn=new B,ea=new B,Ds=new B,ta=new B;class xd{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Qr.copy(e).add(t).multiplyScalar(.5),Us.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(Qr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Us),o=Mn.dot(this.direction),l=-Mn.dot(Us),c=Mn.lengthSq(),u=Math.abs(1-a*a);let d,f,m,g;if(u>0)if(d=a*l-o,f=a*o-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Qr).addScaledVector(Us,f),m}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),s=fn.dot(fn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,s,r){ea.subVectors(t,e),Ds.subVectors(n,e),ta.crossVectors(ea,Ds);let a=this.direction.dot(ta),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mn.subVectors(this.origin,e);const l=o*this.direction.dot(Ds.crossVectors(Mn,Ds));if(l<0)return null;const c=o*this.direction.dot(ea.cross(Mn));if(c<0||l+c>a)return null;const u=-o*Mn.dot(ta);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,n,s,r,a,o,l,c,u,d,f,m,g,_,p){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,f,m,g,_,p)}set(e,t,n,s,r,a,o,l,c,u,d,f,m,g,_,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/wi.setFromMatrixColumn(e,0).length(),r=1/wi.setFromMatrixColumn(e,1).length(),a=1/wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*u,m=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,g=c*u,_=c*d;t[0]=f+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,g=c*u,_=c*d;t[0]=f-_*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=a*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yd,e,Sd)}lookAt(e,t,n){const s=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Tn.crossVectors(n,Nt),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Tn.crossVectors(n,Nt)),Tn.normalize(),Ns.crossVectors(Nt,Tn),s[0]=Tn.x,s[4]=Ns.x,s[8]=Nt.x,s[1]=Tn.y,s[5]=Ns.y,s[9]=Nt.y,s[2]=Tn.z,s[6]=Ns.z,s[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],h=n[14],E=n[3],y=n[7],b=n[11],T=n[15],C=s[0],A=s[4],O=s[8],x=s[12],w=s[1],k=s[5],q=s[9],j=s[13],P=s[2],F=s[6],W=s[10],H=s[14],J=s[3],K=s[7],Y=s[11],L=s[15];return r[0]=a*C+o*w+l*P+c*J,r[4]=a*A+o*k+l*F+c*K,r[8]=a*O+o*q+l*W+c*Y,r[12]=a*x+o*j+l*H+c*L,r[1]=u*C+d*w+f*P+m*J,r[5]=u*A+d*k+f*F+m*K,r[9]=u*O+d*q+f*W+m*Y,r[13]=u*x+d*j+f*H+m*L,r[2]=g*C+_*w+p*P+h*J,r[6]=g*A+_*k+p*F+h*K,r[10]=g*O+_*q+p*W+h*Y,r[14]=g*x+_*j+p*H+h*L,r[3]=E*C+y*w+b*P+T*J,r[7]=E*A+y*k+b*F+T*K,r[11]=E*O+y*q+b*W+T*Y,r[15]=E*x+y*j+b*H+T*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],h=e[15];return g*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*m-n*l*m)+_*(+t*l*m-t*c*f+r*a*f-s*a*m+s*c*u-r*l*u)+p*(+t*c*d-t*o*m-r*a*d+n*a*m+r*o*u-n*c*u)+h*(-s*o*u-t*l*d+t*o*f+s*a*d-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],h=e[15],E=d*p*c-_*f*c+_*l*m-o*p*m-d*l*h+o*f*h,y=g*f*c-u*p*c-g*l*m+a*p*m+u*l*h-a*f*h,b=u*_*c-g*d*c+g*o*m-a*_*m-u*o*h+a*d*h,T=g*d*l-u*_*l-g*o*f+a*_*f+u*o*p-a*d*p,C=t*E+n*y+s*b+r*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=E*A,e[1]=(_*f*r-d*p*r-_*s*m+n*p*m+d*s*h-n*f*h)*A,e[2]=(o*p*r-_*l*r+_*s*c-n*p*c-o*s*h+n*l*h)*A,e[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*m-n*l*m)*A,e[4]=y*A,e[5]=(u*p*r-g*f*r+g*s*m-t*p*m-u*s*h+t*f*h)*A,e[6]=(g*l*r-a*p*r-g*s*c+t*p*c+a*s*h-t*l*h)*A,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*m+t*l*m)*A,e[8]=b*A,e[9]=(g*d*r-u*_*r-g*n*m+t*_*m+u*n*h-t*d*h)*A,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*h+t*o*h)*A,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*m-t*o*m)*A,e[12]=T*A,e[13]=(u*_*s-g*d*s+g*n*f-t*_*f-u*n*p+t*d*p)*A,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*p-t*o*p)*A,e[15]=(a*d*s-u*o*s+u*n*l-t*d*l-a*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,f=r*c,m=r*u,g=r*d,_=a*u,p=a*d,h=o*d,E=l*c,y=l*u,b=l*d,T=n.x,C=n.y,A=n.z;return s[0]=(1-(_+h))*T,s[1]=(m+b)*T,s[2]=(g-y)*T,s[3]=0,s[4]=(m-b)*C,s[5]=(1-(f+h))*C,s[6]=(p+E)*C,s[7]=0,s[8]=(g+y)*A,s[9]=(p-E)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=wi.set(s[0],s[1],s[2]).length();const a=wi.set(s[4],s[5],s[6]).length(),o=wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],jt.copy(this);const c=1/r,u=1/a,d=1/o;return jt.elements[0]*=c,jt.elements[1]*=c,jt.elements[2]*=c,jt.elements[4]*=u,jt.elements[5]*=u,jt.elements[6]*=u,jt.elements[8]*=d,jt.elements[9]*=d,jt.elements[10]*=d,t.setFromRotationMatrix(jt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=xn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let m,g;if(o===xn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===or)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=xn){const l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(a-r),f=(t+e)*c,m=(n+s)*u;let g,_;if(o===xn)g=(a+r)*d,_=-2*d;else if(o===or)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const wi=new B,jt=new xt,yd=new B(0,0,0),Sd=new B(1,1,1),Tn=new B,Ns=new B,Nt=new B,tl=new xt,nl=new xs;class gr{constructor(e=0,t=0,n=0,s=gr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nl.setFromEuler(this),this.setFromQuaternion(nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gr.DEFAULT_ORDER="XYZ";class pc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ed=0;const il=new B,Mi=new xs,pn=new xt,Bs=new B,rs=new B,bd=new B,wd=new xs,sl=new B(1,0,0),rl=new B(0,1,0),al=new B(0,0,1),Md={type:"added"},Td={type:"removed"};class kt extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new B,t=new gr,n=new xs,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ge}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(sl,e)}rotateY(e){return this.rotateOnAxis(rl,e)}rotateZ(e){return this.rotateOnAxis(al,e)}translateOnAxis(e,t){return il.copy(e).applyQuaternion(this.quaternion),this.position.add(il.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sl,e)}translateY(e){return this.translateOnAxis(rl,e)}translateZ(e){return this.translateOnAxis(al,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bs.copy(e):Bs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(rs,Bs,this.up):pn.lookAt(Bs,rs,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),Mi.setFromRotationMatrix(pn),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Md)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Td)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,bd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,wd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}kt.DEFAULT_UP=new B(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new B,mn=new B,na=new B,gn=new B,Ti=new B,Ai=new B,ol=new B,ia=new B,sa=new B,ra=new B;let Os=!1;class Yt{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),qt.subVectors(e,t),s.cross(qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){qt.subVectors(s,t),mn.subVectors(n,t),na.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(mn),l=qt.dot(na),c=mn.dot(mn),u=mn.dot(na),d=a*c-o*o;if(d===0)return r.set(-2,-1,-1);const f=1/d,m=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gn),gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(e,t,n,s,r,a,o,l){return Os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Os=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,gn),l.setScalar(0),l.addScaledVector(r,gn.x),l.addScaledVector(a,gn.y),l.addScaledVector(o,gn.z),l}static isFrontFacing(e,t,n,s){return qt.subVectors(n,t),mn.subVectors(e,t),qt.cross(mn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),qt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Os=!0),Yt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return Yt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ti.subVectors(s,n),Ai.subVectors(r,n),ia.subVectors(e,n);const l=Ti.dot(ia),c=Ai.dot(ia);if(l<=0&&c<=0)return t.copy(n);sa.subVectors(e,s);const u=Ti.dot(sa),d=Ai.dot(sa);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ti,a);ra.subVectors(e,r);const m=Ti.dot(ra),g=Ai.dot(ra);if(g>=0&&m<=g)return t.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ai,o);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return ol.subVectors(r,s),o=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(ol,o);const h=1/(p+_+f);return a=_*h,o=f*h,t.copy(n).addScaledVector(Ti,a).addScaledVector(Ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},ks={h:0,s:0,l:0};function aa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ${constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=dd(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=aa(a,r,e+1/3),this.g=aa(a,r,e),this.b=aa(a,r,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=mc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return Ke.fromWorkingColorSpace(Et.copy(this),e),Math.round(Lt(Et.r*255,0,255))*65536+Math.round(Lt(Et.g*255,0,255))*256+Math.round(Lt(Et.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Et.copy(this),t);const n=Et.r,s=Et.g,r=Et.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=_t){Ke.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,s=Et.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(ks);const n=jr(An.h,ks.h,t),s=jr(An.s,ks.s,t),r=jr(An.l,ks.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new $;$.NAMES=mc;let Ad=0;class _r extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=Bi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Pa,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ca&&(n.blendSrc=this.blendSrc),this.blendDst!==Pa&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gc extends _r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new B,zs=new Qe;class on{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$o,this.updateRange={offset:0,count:-1},this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ns(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$o&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class _c extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vc extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class li extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cd=0;const Gt=new xt,oa=new kt,Ci=new B,Bt=new ys,as=new ys,mt=new B;class di extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uc(e)?vc:_c)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return oa.lookAt(e),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new li(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];as.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Bt.min,as.min),Bt.expandByPoint(mt),mt.addVectors(Bt.max,as.max),Bt.expandByPoint(mt)):(Bt.expandByPoint(as.min),Bt.expandByPoint(as.max))}Bt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(mt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)mt.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(e,c),mt.add(Ci)),s=Math.max(s,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<o;w++)c[w]=new B,u[w]=new B;const d=new B,f=new B,m=new B,g=new Qe,_=new Qe,p=new Qe,h=new B,E=new B;function y(w,k,q){d.fromArray(s,w*3),f.fromArray(s,k*3),m.fromArray(s,q*3),g.fromArray(a,w*2),_.fromArray(a,k*2),p.fromArray(a,q*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);const j=1/(_.x*p.y-p.x*_.y);isFinite(j)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(j),E.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(j),c[w].add(h),c[k].add(h),c[q].add(h),u[w].add(E),u[k].add(E),u[q].add(E))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let w=0,k=b.length;w<k;++w){const q=b[w],j=q.start,P=q.count;for(let F=j,W=j+P;F<W;F+=3)y(n[F+0],n[F+1],n[F+2])}const T=new B,C=new B,A=new B,O=new B;function x(w){A.fromArray(r,w*3),O.copy(A);const k=c[w];T.copy(k),T.sub(A.multiplyScalar(A.dot(k))).normalize(),C.crossVectors(O,k);const j=C.dot(u[w])<0?-1:1;l[w*4]=T.x,l[w*4+1]=T.y,l[w*4+2]=T.z,l[w*4+3]=j}for(let w=0,k=b.length;w<k;++w){const q=b[w],j=q.start,P=q.count;for(let F=j,W=j+P;F<W;F+=3)x(n[F+0]),x(n[F+1]),x(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,u=new B,d=new B;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let h=0;h<u;h++)f[g++]=c[m++]}return new on(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new di,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ll=new xt,Yn=new xd,Vs=new Ha,cl=new B,Pi=new B,Ri=new B,Li=new B,la=new B,Gs=new B,Hs=new Qe,Ws=new Qe,Xs=new Qe,ul=new B,dl=new B,hl=new B,js=new B,qs=new B;class yn extends kt{constructor(e=new di,t=new gc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Gs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(la.fromBufferAttribute(d,e),a?Gs.addScaledVector(la,u):Gs.addScaledVector(la.sub(t),u))}t.add(Gs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),Yn.copy(e.ray).recast(e.near),!(Vs.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Vs,cl)===null||Yn.origin.distanceToSquared(cl)>(e.far-e.near)**2))&&(ll.copy(r).invert(),Yn.copy(e.ray).applyMatrix4(ll),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=a[p.materialIndex],E=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,T=y;b<T;b+=3){const C=o.getX(b),A=o.getX(b+1),O=o.getX(b+2);s=$s(this,h,e,n,c,u,d,C,A,O),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const E=o.getX(p),y=o.getX(p+1),b=o.getX(p+2);s=$s(this,a,e,n,c,u,d,E,y,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=a[p.materialIndex],E=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,T=y;b<T;b+=3){const C=b,A=b+1,O=b+2;s=$s(this,h,e,n,c,u,d,C,A,O),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const E=p,y=p+1,b=p+2;s=$s(this,a,e,n,c,u,d,E,y,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Pd(i,e,t,n,s,r,a,o){let l;if(e.side===It?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===zn,o),l===null)return null;qs.copy(o),qs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(qs);return c<t.near||c>t.far?null:{distance:c,point:qs.clone(),object:i}}function $s(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Pi),i.getVertexPosition(l,Ri),i.getVertexPosition(c,Li);const u=Pd(i,e,t,n,Pi,Ri,Li,js);if(u){s&&(Hs.fromBufferAttribute(s,o),Ws.fromBufferAttribute(s,l),Xs.fromBufferAttribute(s,c),u.uv=Yt.getInterpolation(js,Pi,Ri,Li,Hs,Ws,Xs,new Qe)),r&&(Hs.fromBufferAttribute(r,o),Ws.fromBufferAttribute(r,l),Xs.fromBufferAttribute(r,c),u.uv1=Yt.getInterpolation(js,Pi,Ri,Li,Hs,Ws,Xs,new Qe),u.uv2=u.uv1),a&&(ul.fromBufferAttribute(a,o),dl.fromBufferAttribute(a,l),hl.fromBufferAttribute(a,c),u.normal=Yt.getInterpolation(js,Pi,Ri,Li,ul,dl,hl,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new B,materialIndex:0};Yt.getNormal(Pi,Ri,Li,d.normal),u.face=d}return u}class Ss extends di{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new li(c,3)),this.setAttribute("normal",new li(u,3)),this.setAttribute("uv",new li(d,2));function g(_,p,h,E,y,b,T,C,A,O,x){const w=b/A,k=T/O,q=b/2,j=T/2,P=C/2,F=A+1,W=O+1;let H=0,J=0;const K=new B;for(let Y=0;Y<W;Y++){const L=Y*k-j;for(let G=0;G<F;G++){const ce=G*w-q;K[_]=ce*E,K[p]=L*y,K[h]=P,c.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[h]=C>0?1:-1,u.push(K.x,K.y,K.z),d.push(G/A),d.push(1-Y/O),H+=1}}for(let Y=0;Y<O;Y++)for(let L=0;L<A;L++){const G=f+L+F*Y,ce=f+L+F*(Y+1),fe=f+(L+1)+F*(Y+1),ge=f+(L+1)+F*Y;l.push(G,ce,ge),l.push(ce,fe,ge),J+=6}o.addGroup(m,J,x),m+=J,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Tt(i){const e={};for(let t=0;t<i.length;t++){const n=Gi(i[t]);for(const s in n)e[s]=n[s]}return e}function Rd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xc(i){return i.getRenderTarget()===null?i.outputColorSpace:Ke.workingColorSpace}const Ld={clone:Gi,merge:Tt};var Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;let Vn=class extends _r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=Rd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},yc=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Kt extends yc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=-90,Fi=1;class Ud extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kt(Ii,Fi,e,t);s.layers=this.layers,this.add(s);const r=new Kt(Ii,Fi,e,t);r.layers=this.layers,this.add(r);const a=new Kt(Ii,Fi,e,t);a.layers=this.layers,this.add(a);const o=new Kt(Ii,Fi,e,t);o.layers=this.layers,this.add(o);const l=new Kt(Ii,Fi,e,t);l.layers=this.layers,this.add(l);const c=new Kt(Ii,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Sc extends Ot{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ki,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dd extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(us("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===oi?_t:Wt),this.texture=new Sc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ss(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:Dn});r.uniforms.tEquirect.value=t;const a=new yn(s,r),o=t.minFilter;return t.minFilter===hs&&(t.minFilter=Ht),new Ud(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const ca=new B,Nd=new B,Bd=new Ge;class Jn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ca.subVectors(n,t).cross(Nd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bd.getNormalMatrix(e),s=this.coplanarPoint(ca).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new Ha,Ys=new B;class Ec{constructor(e=new Jn,t=new Jn,n=new Jn,s=new Jn,r=new Jn,a=new Jn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],h=s[12],E=s[13],y=s[14],b=s[15];if(n[0].setComponents(l-r,f-c,p-m,b-h).normalize(),n[1].setComponents(l+r,f+c,p+m,b+h).normalize(),n[2].setComponents(l+a,f+u,p+g,b+E).normalize(),n[3].setComponents(l-a,f-u,p-g,b-E).normalize(),n[4].setComponents(l-o,f-d,p-_,b-y).normalize(),t===xn)n[5].setComponents(l+o,f+d,p+_,b+y).normalize();else if(t===or)n[5].setComponents(o,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ys.x=s.normal.x>0?e.max.x:e.min.x,Ys.y=s.normal.y>0?e.max.y:e.min.y,Ys.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Od(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const d=c.array,f=c.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,d,f),c.onUploadCallback();let g;if(d instanceof Float32Array)g=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=i.SHORT;else if(d instanceof Uint32Array)g=i.UNSIGNED_INT;else if(d instanceof Int32Array)g=i.INT;else if(d instanceof Int8Array)g=i.BYTE;else if(d instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,d){const f=u.array,m=u.updateRange;i.bindBuffer(d,c),m.count===-1?i.bufferSubData(d,0,f):(t?i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,s(c,u)):d.version<c.version&&(r(d.buffer,c,u),d.version=c.version)}return{get:a,remove:o,update:l}}class vr extends di{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,f=t/l,m=[],g=[],_=[],p=[];for(let h=0;h<u;h++){const E=h*f-a;for(let y=0;y<c;y++){const b=y*d-r;g.push(b,-E,0),_.push(0,0,1),p.push(y/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<o;E++){const y=E+c*h,b=E+c*(h+1),T=E+1+c*(h+1),C=E+1+c*h;m.push(y,b,C),m.push(b,T,C)}this.setIndex(m),this.setAttribute("position",new li(g,3)),this.setAttribute("normal",new li(_,3)),this.setAttribute("uv",new li(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.widthSegments,e.heightSegments)}}var kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zd=`#ifdef USE_ALPHAHASH
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
#endif`,Vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xd=`#ifdef USE_AOMAP
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
#endif`,jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kd=`#ifdef USE_IRIDESCENCE
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
#endif`,Zd=`#ifdef USE_BUMPMAP
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
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ah=`#define PI 3.141592653589793
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
} // validated`,oh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lh=`vec3 transformedNormal = objectNormal;
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
#endif`,ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ph=`
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
}`,mh=`#ifdef USE_ENVMAP
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
#endif`,gh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_h=`#ifdef USE_ENVMAP
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
#endif`,vh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xh=`#ifdef USE_ENVMAP
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
#endif`,yh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wh=`#ifdef USE_GRADIENTMAP
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
}`,Mh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Th=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ah=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ch=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ph=`uniform bool receiveShadow;
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
#endif`,Rh=`#ifdef USE_ENVMAP
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
#endif`,Lh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ih=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dh=`PhysicalMaterial material;
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
#endif`,Nh=`struct PhysicalMaterial {
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
}`,Bh=`
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
#endif`,Oh=`#if defined( RE_IndirectDiffuse )
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
#endif`,kh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qh=`#if defined( USE_POINTS_UV )
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
#endif`,$h=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zh=`#ifdef USE_MORPHNORMALS
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
#endif`,Jh=`#ifdef USE_MORPHTARGETS
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
#endif`,Qh=`#ifdef USE_MORPHTARGETS
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
#endif`,ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,af=`#ifdef USE_NORMALMAP
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
#endif`,of=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ef=`float getShadowMask() {
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
}`,bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wf=`#ifdef USE_SKINNING
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
#endif`,Mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tf=`#ifdef USE_SKINNING
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
#endif`,Af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lf=`#ifdef USE_TRANSMISSION
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
#endif`,If=`#ifdef USE_TRANSMISSION
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
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Of=`uniform sampler2D t2D;
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
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`#include <common>
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
}`,Wf=`#if DEPTH_PACKING == 3200
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
}`,Xf=`#define DISTANCE
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
}`,jf=`#define DISTANCE
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
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$f=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yf=`uniform float scale;
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Zf=`#include <common>
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
}`,Jf=`uniform vec3 diffuse;
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
}`,Qf=`#define LAMBERT
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
}`,ep=`#define LAMBERT
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
}`,tp=`#define MATCAP
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
}`,np=`#define MATCAP
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
}`,ip=`#define NORMAL
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
}`,sp=`#define NORMAL
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
}`,rp=`#define PHONG
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
}`,ap=`#define PHONG
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
}`,op=`#define STANDARD
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
}`,lp=`#define STANDARD
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
}`,cp=`#define TOON
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
}`,up=`#define TOON
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
}`,dp=`uniform float size;
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
}`,hp=`uniform vec3 diffuse;
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
}`,fp=`#include <common>
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
}`,pp=`uniform vec3 color;
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
}`,mp=`uniform float rotation;
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
}`,gp=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:kd,alphahash_pars_fragment:zd,alphamap_fragment:Vd,alphamap_pars_fragment:Gd,alphatest_fragment:Hd,alphatest_pars_fragment:Wd,aomap_fragment:Xd,aomap_pars_fragment:jd,begin_vertex:qd,beginnormal_vertex:$d,bsdfs:Yd,iridescence_fragment:Kd,bumpmap_pars_fragment:Zd,clipping_planes_fragment:Jd,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:eh,clipping_planes_vertex:th,color_fragment:nh,color_pars_fragment:ih,color_pars_vertex:sh,color_vertex:rh,common:ah,cube_uv_reflection_fragment:oh,defaultnormal_vertex:lh,displacementmap_pars_vertex:ch,displacementmap_vertex:uh,emissivemap_fragment:dh,emissivemap_pars_fragment:hh,colorspace_fragment:fh,colorspace_pars_fragment:ph,envmap_fragment:mh,envmap_common_pars_fragment:gh,envmap_pars_fragment:_h,envmap_pars_vertex:vh,envmap_physical_pars_fragment:Rh,envmap_vertex:xh,fog_vertex:yh,fog_pars_vertex:Sh,fog_fragment:Eh,fog_pars_fragment:bh,gradientmap_pars_fragment:wh,lightmap_fragment:Mh,lightmap_pars_fragment:Th,lights_lambert_fragment:Ah,lights_lambert_pars_fragment:Ch,lights_pars_begin:Ph,lights_toon_fragment:Lh,lights_toon_pars_fragment:Ih,lights_phong_fragment:Fh,lights_phong_pars_fragment:Uh,lights_physical_fragment:Dh,lights_physical_pars_fragment:Nh,lights_fragment_begin:Bh,lights_fragment_maps:Oh,lights_fragment_end:kh,logdepthbuf_fragment:zh,logdepthbuf_pars_fragment:Vh,logdepthbuf_pars_vertex:Gh,logdepthbuf_vertex:Hh,map_fragment:Wh,map_pars_fragment:Xh,map_particle_fragment:jh,map_particle_pars_fragment:qh,metalnessmap_fragment:$h,metalnessmap_pars_fragment:Yh,morphcolor_vertex:Kh,morphnormal_vertex:Zh,morphtarget_pars_vertex:Jh,morphtarget_vertex:Qh,normal_fragment_begin:ef,normal_fragment_maps:tf,normal_pars_fragment:nf,normal_pars_vertex:sf,normal_vertex:rf,normalmap_pars_fragment:af,clearcoat_normal_fragment_begin:of,clearcoat_normal_fragment_maps:lf,clearcoat_pars_fragment:cf,iridescence_pars_fragment:uf,opaque_fragment:df,packing:hf,premultiplied_alpha_fragment:ff,project_vertex:pf,dithering_fragment:mf,dithering_pars_fragment:gf,roughnessmap_fragment:_f,roughnessmap_pars_fragment:vf,shadowmap_pars_fragment:xf,shadowmap_pars_vertex:yf,shadowmap_vertex:Sf,shadowmask_pars_fragment:Ef,skinbase_vertex:bf,skinning_pars_vertex:wf,skinning_vertex:Mf,skinnormal_vertex:Tf,specularmap_fragment:Af,specularmap_pars_fragment:Cf,tonemapping_fragment:Pf,tonemapping_pars_fragment:Rf,transmission_fragment:Lf,transmission_pars_fragment:If,uv_pars_fragment:Ff,uv_pars_vertex:Uf,uv_vertex:Df,worldpos_vertex:Nf,background_vert:Bf,background_frag:Of,backgroundCube_vert:kf,backgroundCube_frag:zf,cube_vert:Vf,cube_frag:Gf,depth_vert:Hf,depth_frag:Wf,distanceRGBA_vert:Xf,distanceRGBA_frag:jf,equirect_vert:qf,equirect_frag:$f,linedashed_vert:Yf,linedashed_frag:Kf,meshbasic_vert:Zf,meshbasic_frag:Jf,meshlambert_vert:Qf,meshlambert_frag:ep,meshmatcap_vert:tp,meshmatcap_frag:np,meshnormal_vert:ip,meshnormal_frag:sp,meshphong_vert:rp,meshphong_frag:ap,meshphysical_vert:op,meshphysical_frag:lp,meshtoon_vert:cp,meshtoon_frag:up,points_vert:dp,points_frag:hp,shadow_vert:fp,shadow_frag:pp,sprite_vert:mp,sprite_frag:gp},oe={common:{diffuse:{value:new $(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new $(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},sn={basic:{uniforms:Tt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Tt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new $(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Tt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new $(0)},specular:{value:new $(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Tt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new $(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Tt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new $(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Tt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Tt([oe.points,oe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Tt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Tt([oe.common,oe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Tt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Tt([oe.sprite,oe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Tt([oe.common,oe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Tt([oe.lights,oe.fog,{color:{value:new $(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};sn.physical={uniforms:Tt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new $(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new $(0)},specularColor:{value:new $(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ks={r:0,b:0,g:0};function _p(i,e,t,n,s,r,a){const o=new $(0);let l=r===!0?0:1,c,u,d=null,f=0,m=null;function g(p,h){let E=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=(h.backgroundBlurriness>0?t:e).get(y)),y===null?_(o,l):y&&y.isColor&&(_(y,1),E=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===pr)?(u===void 0&&(u=new yn(new Ss(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Gi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(y.colorSpace)!==tt,(d!==y||f!==y.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new yn(new vr(2,2),new Vn({name:"BackgroundMaterial",uniforms:Gi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(y.colorSpace)!==tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,h){p.getRGB(Ks,xc(i)),n.buffers.color.setClear(Ks.r,Ks.g,Ks.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function vp(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null);let c=l,u=!1;function d(P,F,W,H,J){let K=!1;if(a){const Y=_(H,W,F);c!==Y&&(c=Y,m(c.object)),K=h(P,H,W,J),K&&E(P,H,W,J)}else{const Y=F.wireframe===!0;(c.geometry!==H.id||c.program!==W.id||c.wireframe!==Y)&&(c.geometry=H.id,c.program=W.id,c.wireframe=Y,K=!0)}J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,O(P,F,W,H),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,F,W){const H=W.wireframe===!0;let J=o[P.id];J===void 0&&(J={},o[P.id]=J);let K=J[F.id];K===void 0&&(K={},J[F.id]=K);let Y=K[H];return Y===void 0&&(Y=p(f()),K[H]=Y),Y}function p(P){const F=[],W=[],H=[];for(let J=0;J<s;J++)F[J]=0,W[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:H,object:P,attributes:{},index:null}}function h(P,F,W,H){const J=c.attributes,K=F.attributes;let Y=0;const L=W.getAttributes();for(const G in L)if(L[G].location>=0){const fe=J[G];let ge=K[G];if(ge===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(ge=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(ge=P.instanceColor)),fe===void 0||fe.attribute!==ge||ge&&fe.data!==ge.data)return!0;Y++}return c.attributesNum!==Y||c.index!==H}function E(P,F,W,H){const J={},K=F.attributes;let Y=0;const L=W.getAttributes();for(const G in L)if(L[G].location>=0){let fe=K[G];fe===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(fe=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(fe=P.instanceColor));const ge={};ge.attribute=fe,fe&&fe.data&&(ge.data=fe.data),J[G]=ge,Y++}c.attributes=J,c.attributesNum=Y,c.index=H}function y(){const P=c.newAttributes;for(let F=0,W=P.length;F<W;F++)P[F]=0}function b(P){T(P,0)}function T(P,F){const W=c.newAttributes,H=c.enabledAttributes,J=c.attributeDivisors;W[P]=1,H[P]===0&&(i.enableVertexAttribArray(P),H[P]=1),J[P]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),J[P]=F)}function C(){const P=c.newAttributes,F=c.enabledAttributes;for(let W=0,H=F.length;W<H;W++)F[W]!==P[W]&&(i.disableVertexAttribArray(W),F[W]=0)}function A(P,F,W,H,J,K,Y){Y===!0?i.vertexAttribIPointer(P,F,W,J,K):i.vertexAttribPointer(P,F,W,H,J,K)}function O(P,F,W,H){if(n.isWebGL2===!1&&(P.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const J=H.attributes,K=W.getAttributes(),Y=F.defaultAttributeValues;for(const L in K){const G=K[L];if(G.location>=0){let ce=J[L];if(ce===void 0&&(L==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),L==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),ce!==void 0){const fe=ce.normalized,ge=ce.itemSize,Te=t.get(ce);if(Te===void 0)continue;const We=Te.buffer,Le=Te.type,Ne=Te.bytesPerElement,it=n.isWebGL2===!0&&(Le===i.INT||Le===i.UNSIGNED_INT||ce.gpuType===ic);if(ce.isInterleavedBufferAttribute){const ke=ce.data,U=ke.stride,Ft=ce.offset;if(ke.isInstancedInterleavedBuffer){for(let Se=0;Se<G.locationSize;Se++)T(G.location+Se,ke.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Se=0;Se<G.locationSize;Se++)b(G.location+Se);i.bindBuffer(i.ARRAY_BUFFER,We);for(let Se=0;Se<G.locationSize;Se++)A(G.location+Se,ge/G.locationSize,Le,fe,U*Ne,(Ft+ge/G.locationSize*Se)*Ne,it)}else{if(ce.isInstancedBufferAttribute){for(let ke=0;ke<G.locationSize;ke++)T(G.location+ke,ce.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ke=0;ke<G.locationSize;ke++)b(G.location+ke);i.bindBuffer(i.ARRAY_BUFFER,We);for(let ke=0;ke<G.locationSize;ke++)A(G.location+ke,ge/G.locationSize,Le,fe,ge*Ne,ge/G.locationSize*ke*Ne,it)}}else if(Y!==void 0){const fe=Y[L];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(G.location,fe);break;case 3:i.vertexAttrib3fv(G.location,fe);break;case 4:i.vertexAttrib4fv(G.location,fe);break;default:i.vertexAttrib1fv(G.location,fe)}}}}C()}function x(){q();for(const P in o){const F=o[P];for(const W in F){const H=F[W];for(const J in H)g(H[J].object),delete H[J];delete F[W]}delete o[P]}}function w(P){if(o[P.id]===void 0)return;const F=o[P.id];for(const W in F){const H=F[W];for(const J in H)g(H[J].object),delete H[J];delete F[W]}delete o[P.id]}function k(P){for(const F in o){const W=o[F];if(W[P.id]===void 0)continue;const H=W[P.id];for(const J in H)g(H[J].object),delete H[J];delete W[P.id]}}function q(){j(),u=!0,c!==l&&(c=l,m(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:j,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfProgram:k,initAttributes:y,enableAttribute:b,disableUnusedAttributes:C}}function xp(i,e,t,n){const s=n.isWebGL2;let r;function a(c){r=c}function o(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,d){if(d===0)return;let f,m;if(s)f=i,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,d),t.update(u,r,d)}this.setMode=a,this.render=o,this.renderInstances=l}function yp(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,b=a||e.has("OES_texture_float"),T=y&&b,C=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:E,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:T,maxSamples:C}}function Sp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Jn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const E=r?0:n,y=E*4;let b=h.clippingState||null;l.value=b,b=u(g,f,y,m);for(let T=0;T!==y;++T)b[T]=t[T];h.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const h=m+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<h)&&(p=new Float32Array(h));for(let y=0,b=m;y!==_;++y,b+=4)a.copy(d[y]).applyMatrix4(E,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Ep(i){let e=new WeakMap;function t(a,o){return o===Ra?a.mapping=ki:o===La&&(a.mapping=zi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ra||o===La)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Dd(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class wc extends yc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Di=4,fl=[.125,.215,.35,.446,.526,.582],ni=20,ua=new wc,pl=new $;let da=null,ha=0,fa=0;const Qn=(1+Math.sqrt(5))/2,Ui=1/Qn,ml=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Qn,Ui),new B(0,Qn,-Ui),new B(Ui,0,Qn),new B(-Ui,0,Qn),new B(Qn,Ui,0),new B(-Qn,Ui,0)];class gl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){da=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(da,ha,fa),e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),da=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:fs,format:Jt,colorSpace:En,depthBuffer:!1},s=_l(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_l(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bp(r)),this._blurMaterial=wp(r,e,t)}return s}_compileMaterial(e){const t=new yn(this._lodPlanes[0],e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,n,s){const o=new Kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(pl),u.toneMapping=Nn,u.autoClear=!1;const m=new gc({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new yn(new Ss,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(pl),_=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):E===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const y=this._cubeSize;Zs(s,E*y,h>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ki||e.mapping===zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new yn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Zs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ua)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ml[(s-1)%ml.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new yn(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ni-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):ni;p>ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ni}`);const h=[];let E=0;for(let A=0;A<ni;++A){const O=A/_,x=Math.exp(-O*O/2);h.push(x),A===0?E+=x:A<p&&(E+=2*x)}for(let A=0;A<h.length;A++)h[A]=h[A]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const b=this._sizeLods[s],T=3*b*(s>y-Di?s-y+Di:0),C=4*(this._cubeSize-b);Zs(t,T,C,3*b,2*b),l.setRenderTarget(t),l.render(d,ua)}}function bp(i){const e=[],t=[],n=[];let s=i;const r=i-Di+1+fl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Di?l=fl[a-i+Di-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,h=1,E=new Float32Array(_*g*m),y=new Float32Array(p*g*m),b=new Float32Array(h*g*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,O=C>2?0:-1,x=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];E.set(x,_*g*C),y.set(f,p*g*C);const w=[C,C,C,C,C,C];b.set(w,h*g*C)}const T=new di;T.setAttribute("position",new on(E,_)),T.setAttribute("uv",new on(y,p)),T.setAttribute("faceIndex",new on(b,h)),e.push(T),s>Di&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _l(i,e,t){const n=new ci(i,e,t);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function wp(i,e,t){const n=new Float32Array(ni),s=new B(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function vl(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function xl(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Wa(){return`

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
	`}function Mp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ra||l===La,u=l===ki||l===zi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new gl(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new gl(i));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Tp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ap(i,e,t,n){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,h=_.length;p<h;p++)e.remove(_[p])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,h=_.length;p<h;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let y=0,b=E.length;y<b;y+=3){const T=E[y+0],C=E[y+1],A=E[y+2];f.push(T,C,C,A,A,T)}}else if(g!==void 0){const E=g.array;_=g.version;for(let y=0,b=E.length/3-1;y<b;y+=3){const T=y+0,C=y+1,A=y+2;f.push(T,C,C,A,A,T)}}else return;const p=new(uc(f)?vc:_c)(f,1);p.version=_;const h=r.get(d);h&&e.remove(h),r.set(d,p)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Cp(i,e,t,n){const s=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,m){i.drawElements(r,m,o,f*l),t.update(m,r,1)}function d(f,m,g){if(g===0)return;let _,p;if(s)_=i,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](r,m,o,f*l,g),t.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d}function Pp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Rp(i,e){return i[0]-e[0]}function Lp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Ip(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new vt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(u);if(p===void 0||p.count!==_){let F=function(){j.dispose(),r.delete(u),u.removeEventListener("dispose",F)};var m=F;p!==void 0&&p.texture.dispose();const y=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let x=0;y===!0&&(x=1),b===!0&&(x=2),T===!0&&(x=3);let w=u.attributes.position.count*x,k=1;w>e.maxTextureSize&&(k=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const q=new Float32Array(w*k*4*_),j=new fc(q,w,k,_);j.type=Fn,j.needsUpdate=!0;const P=x*4;for(let W=0;W<_;W++){const H=C[W],J=A[W],K=O[W],Y=w*k*4*W;for(let L=0;L<H.count;L++){const G=L*P;y===!0&&(a.fromBufferAttribute(H,L),q[Y+G+0]=a.x,q[Y+G+1]=a.y,q[Y+G+2]=a.z,q[Y+G+3]=0),b===!0&&(a.fromBufferAttribute(J,L),q[Y+G+4]=a.x,q[Y+G+5]=a.y,q[Y+G+6]=a.z,q[Y+G+7]=0),T===!0&&(a.fromBufferAttribute(K,L),q[Y+G+8]=a.x,q[Y+G+9]=a.y,q[Y+G+10]=a.z,q[Y+G+11]=K.itemSize===4?a.w:1)}}p={count:_,texture:j,size:new Qe(w,k)},r.set(u,p),u.addEventListener("dispose",F)}let h=0;for(let y=0;y<f.length;y++)h+=f[y];const E=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let b=0;b<g;b++)_[b]=[b,0];n[u.id]=_}for(let b=0;b<g;b++){const T=_[b];T[0]=b,T[1]=f[b]}_.sort(Lp);for(let b=0;b<8;b++)b<g&&_[b][1]?(o[b][0]=_[b][0],o[b][1]=_[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(Rp);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let E=0;for(let b=0;b<8;b++){const T=o[b],C=T[0],A=T[1];C!==Number.MAX_SAFE_INTEGER&&A?(p&&u.getAttribute("morphTarget"+b)!==p[C]&&u.setAttribute("morphTarget"+b,p[C]),h&&u.getAttribute("morphNormal"+b)!==h[C]&&u.setAttribute("morphNormal"+b,h[C]),s[b]=A,E+=A):(p&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),h&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),s[b]=0)}const y=u.morphTargetsRelative?1:1-E;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Fp(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Mc=new Ot,Tc=new fc,Ac=new _d,Cc=new Sc,yl=[],Sl=[],El=new Float32Array(16),bl=new Float32Array(9),wl=new Float32Array(4);function qi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=yl[s];if(r===void 0&&(r=new Float32Array(s),yl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xr(i,e){let t=Sl[e];t===void 0&&(t=new Int32Array(e),Sl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Up(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),ht(t,e)}}function Np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),ht(t,e)}}function Bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),ht(t,e)}}function Op(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(dt(t,n))return;wl.set(n),i.uniformMatrix2fv(this.addr,!1,wl),ht(t,n)}}function kp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(dt(t,n))return;bl.set(n),i.uniformMatrix3fv(this.addr,!1,bl),ht(t,n)}}function zp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(dt(t,n))return;El.set(n),i.uniformMatrix4fv(this.addr,!1,El),ht(t,n)}}function Vp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),ht(t,e)}}function Hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),ht(t,e)}}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),ht(t,e)}}function Xp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),ht(t,e)}}function qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),ht(t,e)}}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),ht(t,e)}}function Yp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||Mc,s)}function Kp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ac,s)}function Zp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Cc,s)}function Jp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Tc,s)}function Qp(i){switch(i){case 5126:return Up;case 35664:return Dp;case 35665:return Np;case 35666:return Bp;case 35674:return Op;case 35675:return kp;case 35676:return zp;case 5124:case 35670:return Vp;case 35667:case 35671:return Gp;case 35668:case 35672:return Hp;case 35669:case 35673:return Wp;case 5125:return Xp;case 36294:return jp;case 36295:return qp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return Kp;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return Jp}}function em(i,e){i.uniform1fv(this.addr,e)}function tm(i,e){const t=qi(e,this.size,2);i.uniform2fv(this.addr,t)}function nm(i,e){const t=qi(e,this.size,3);i.uniform3fv(this.addr,t)}function im(i,e){const t=qi(e,this.size,4);i.uniform4fv(this.addr,t)}function sm(i,e){const t=qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rm(i,e){const t=qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function am(i,e){const t=qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function om(i,e){i.uniform1iv(this.addr,e)}function lm(i,e){i.uniform2iv(this.addr,e)}function cm(i,e){i.uniform3iv(this.addr,e)}function um(i,e){i.uniform4iv(this.addr,e)}function dm(i,e){i.uniform1uiv(this.addr,e)}function hm(i,e){i.uniform2uiv(this.addr,e)}function fm(i,e){i.uniform3uiv(this.addr,e)}function pm(i,e){i.uniform4uiv(this.addr,e)}function mm(i,e,t){const n=this.cache,s=e.length,r=xr(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Mc,r[a])}function gm(i,e,t){const n=this.cache,s=e.length,r=xr(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ac,r[a])}function _m(i,e,t){const n=this.cache,s=e.length,r=xr(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Cc,r[a])}function vm(i,e,t){const n=this.cache,s=e.length,r=xr(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Tc,r[a])}function xm(i){switch(i){case 5126:return em;case 35664:return tm;case 35665:return nm;case 35666:return im;case 35674:return sm;case 35675:return rm;case 35676:return am;case 5124:case 35670:return om;case 35667:case 35671:return lm;case 35668:case 35672:return cm;case 35669:case 35673:return um;case 5125:return dm;case 36294:return hm;case 36295:return fm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return vm}}class ym{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Qp(t.type)}}class Sm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=xm(t.type)}}class Em{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function Ml(i,e){i.seq.push(e),i.map[e.id]=e}function bm(i,e,t){const n=i.name,s=n.length;for(pa.lastIndex=0;;){const r=pa.exec(n),a=pa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ml(t,c===void 0?new ym(o,i,e):new Sm(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Em(o),Ml(t,d)),t=d}}}class nr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);bm(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Tl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const wm=37297;let Mm=0;function Tm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Am(i){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(i);let n;switch(e===t?n="":e===ar&&t===rr?n="LinearDisplayP3ToLinearSRGB":e===rr&&t===ar&&(n="LinearSRGBToLinearDisplayP3"),i){case En:case mr:return[n,"LinearTransferOETF"];case _t:case Ga:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Al(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Tm(i.getShaderSource(e),a)}else return s}function Cm(i,e){const t=Am(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Pm(i,e){let t;switch(e){case Ou:t="Linear";break;case ku:t="Reinhard";break;case zu:t="OptimizedCineon";break;case Vu:t="ACESFilmic";break;case Gu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Rm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(cs).join(`
`)}function Lm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Im(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function cs(i){return i!==""}function Cl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(i){return i.replace(Fm,Dm)}const Um=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Dm(i,e){let t=Be[e];if(t===void 0){const n=Um.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ba(t)}const Nm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rl(i){return i.replace(Nm,Bm)}function Bm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ll(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Om(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ec?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===hu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function km(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ki:case zi:e="ENVMAP_TYPE_CUBE";break;case pr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zi:e="ENVMAP_MODE_REFRACTION";break}return e}function Vm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tc:e="ENVMAP_BLENDING_MULTIPLY";break;case Nu:e="ENVMAP_BLENDING_MIX";break;case Bu:e="ENVMAP_BLENDING_ADD";break}return e}function Gm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Hm(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Om(t),c=km(t),u=zm(t),d=Vm(t),f=Gm(t),m=t.isWebGL2?"":Rm(t),g=Lm(r),_=s.createProgram();let p,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cs).join(`
`),p.length>0&&(p+=`
`),h=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cs).join(`
`),h.length>0&&(h+=`
`)):(p=[Ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),h=[m,Ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Nn?Pm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Cm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cs).join(`
`)),a=Ba(a),a=Cl(a,t),a=Pl(a,t),o=Ba(o),o=Cl(o,t),o=Pl(o,t),a=Rl(a),o=Rl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=E+p+a,b=E+h+o,T=Tl(s,s.VERTEX_SHADER,y),C=Tl(s,s.FRAGMENT_SHADER,b);s.attachShader(_,T),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(k){if(i.debug.checkShaderErrors){const q=s.getProgramInfoLog(_).trim(),j=s.getShaderInfoLog(T).trim(),P=s.getShaderInfoLog(C).trim();let F=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,C);else{const H=Al(s,T,"vertex"),J=Al(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+H+`
`+J)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(j===""||P==="")&&(W=!1);W&&(k.diagnostics={runnable:F,programLog:q,vertexShader:{log:j,prefix:p},fragmentShader:{log:P,prefix:h}})}s.deleteShader(T),s.deleteShader(C),O=new nr(s,_),x=Im(s,_)}let O;this.getUniforms=function(){return O===void 0&&A(this),O};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(_,wm)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=C,this}let Wm=0;class Xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jm(e),t.set(e,n)),n}}class jm{constructor(e){this.id=Wm++,this.code=e,this.usedTimes=0}}function qm(i,e,t,n,s,r,a){const o=new pc,l=new Xm,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function p(x,w,k,q,j){const P=q.fog,F=j.geometry,W=x.isMeshStandardMaterial?q.environment:null,H=(x.isMeshStandardMaterial?t:e).get(x.envMap||W),J=H&&H.mapping===pr?H.image.height:null,K=g[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const Y=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,L=Y!==void 0?Y.length:0;let G=0;F.morphAttributes.position!==void 0&&(G=1),F.morphAttributes.normal!==void 0&&(G=2),F.morphAttributes.color!==void 0&&(G=3);let ce,fe,ge,Te;if(K){const lt=sn[K];ce=lt.vertexShader,fe=lt.fragmentShader}else ce=x.vertexShader,fe=x.fragmentShader,l.update(x),ge=l.getVertexShaderID(x),Te=l.getFragmentShaderID(x);const We=i.getRenderTarget(),Le=j.isInstancedMesh===!0,Ne=!!x.map,it=!!x.matcap,ke=!!H,U=!!x.aoMap,Ft=!!x.lightMap,Se=!!x.bumpMap,Ie=!!x.normalMap,Re=!!x.displacementMap,st=!!x.emissiveMap,ze=!!x.metalnessMap,Ve=!!x.roughnessMap,Je=x.anisotropy>0,ft=x.clearcoat>0,yt=x.iridescence>0,M=x.sheen>0,v=x.transmission>0,D=Je&&!!x.anisotropyMap,ee=ft&&!!x.clearcoatMap,Z=ft&&!!x.clearcoatNormalMap,te=ft&&!!x.clearcoatRoughnessMap,_e=yt&&!!x.iridescenceMap,ae=yt&&!!x.iridescenceThicknessMap,ue=M&&!!x.sheenColorMap,Ae=M&&!!x.sheenRoughnessMap,$e=!!x.specularMap,Q=!!x.specularColorMap,Ze=!!x.specularIntensityMap,Fe=v&&!!x.transmissionMap,Ce=v&&!!x.thicknessMap,Ee=!!x.gradientMap,pe=!!x.alphaMap,Xe=x.alphaTest>0,R=!!x.alphaHash,le=!!x.extensions,ie=!!F.attributes.uv1,X=!!F.attributes.uv2,re=!!F.attributes.uv3;let be=Nn;return x.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(be=i.toneMapping),{isWebGL2:u,shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:ce,fragmentShader:fe,defines:x.defines,customVertexShaderID:ge,customFragmentShaderID:Te,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:Le,instancingColor:Le&&j.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:We===null?i.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:En,map:Ne,matcap:it,envMap:ke,envMapMode:ke&&H.mapping,envMapCubeUVHeight:J,aoMap:U,lightMap:Ft,bumpMap:Se,normalMap:Ie,displacementMap:f&&Re,emissiveMap:st,normalMapObjectSpace:Ie&&x.normalMapType===nd,normalMapTangentSpace:Ie&&x.normalMapType===td,metalnessMap:ze,roughnessMap:Ve,anisotropy:Je,anisotropyMap:D,clearcoat:ft,clearcoatMap:ee,clearcoatNormalMap:Z,clearcoatRoughnessMap:te,iridescence:yt,iridescenceMap:_e,iridescenceThicknessMap:ae,sheen:M,sheenColorMap:ue,sheenRoughnessMap:Ae,specularMap:$e,specularColorMap:Q,specularIntensityMap:Ze,transmission:v,transmissionMap:Fe,thicknessMap:Ce,gradientMap:Ee,opaque:x.transparent===!1&&x.blending===Bi,alphaMap:pe,alphaTest:Xe,alphaHash:R,combine:x.combine,mapUv:Ne&&_(x.map.channel),aoMapUv:U&&_(x.aoMap.channel),lightMapUv:Ft&&_(x.lightMap.channel),bumpMapUv:Se&&_(x.bumpMap.channel),normalMapUv:Ie&&_(x.normalMap.channel),displacementMapUv:Re&&_(x.displacementMap.channel),emissiveMapUv:st&&_(x.emissiveMap.channel),metalnessMapUv:ze&&_(x.metalnessMap.channel),roughnessMapUv:Ve&&_(x.roughnessMap.channel),anisotropyMapUv:D&&_(x.anisotropyMap.channel),clearcoatMapUv:ee&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Z&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(x.sheenRoughnessMap.channel),specularMapUv:$e&&_(x.specularMap.channel),specularColorMapUv:Q&&_(x.specularColorMap.channel),specularIntensityMapUv:Ze&&_(x.specularIntensityMap.channel),transmissionMapUv:Fe&&_(x.transmissionMap.channel),thicknessMapUv:Ce&&_(x.thicknessMap.channel),alphaMapUv:pe&&_(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ie||Je),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:ie,vertexUv2s:X,vertexUv3s:re,pointsUvs:j.isPoints===!0&&!!F.attributes.uv&&(Ne||pe),fog:!!P,useFog:x.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:G,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ne&&x.map.isVideoTexture===!0&&Ke.getTransfer(x.map.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===rn,flipSided:x.side===It,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:le&&x.extensions.derivatives===!0,extensionFragDepth:le&&x.extensions.fragDepth===!0,extensionDrawBuffers:le&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function h(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)w.push(k),w.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(E(w,x),y(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function E(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function b(x){const w=g[x.type];let k;if(w){const q=sn[w];k=Ld.clone(q.uniforms)}else k=x.uniforms;return k}function T(x,w){let k;for(let q=0,j=c.length;q<j;q++){const P=c[q];if(P.cacheKey===w){k=P,++k.usedTimes;break}}return k===void 0&&(k=new Hm(i,w,x,r),c.push(k)),k}function C(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:b,acquireProgram:T,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:O}}function $m(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Ym(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Il(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,m,g,_,p){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=p),e++,h}function o(d,f,m,g,_,p){const h=a(d,f,m,g,_,p);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):t.push(h)}function l(d,f,m,g,_,p){const h=a(d,f,m,g,_,p);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||Ym),n.length>1&&n.sort(f||Il),s.length>1&&s.sort(f||Il)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Km(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Fl,i.set(n,[a])):s>=r.length?(a=new Fl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new $};break;case"SpotLight":t={position:new B,direction:new B,color:new $,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new $,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new $,groundColor:new $};break;case"RectAreaLight":t={color:new $,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function Jm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Qm=0;function eg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tg(i,e){const t=new Zm,n=Jm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new B);const r=new B,a=new xt,o=new xt;function l(u,d){let f=0,m=0,g=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let _=0,p=0,h=0,E=0,y=0,b=0,T=0,C=0,A=0,O=0,x=0;u.sort(eg);const w=d===!0?Math.PI:1;for(let q=0,j=u.length;q<j;q++){const P=u[q],F=P.color,W=P.intensity,H=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=F.r*W*w,m+=F.g*W*w,g+=F.b*W*w;else if(P.isLightProbe){for(let K=0;K<9;K++)s.probe[K].addScaledVector(P.sh.coefficients[K],W);x++}else if(P.isDirectionalLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const Y=P.shadow,L=n.get(P);L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,s.directionalShadow[_]=L,s.directionalShadowMap[_]=J,s.directionalShadowMatrix[_]=P.shadow.matrix,b++}s.directional[_]=K,_++}else if(P.isSpotLight){const K=t.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(F).multiplyScalar(W*w),K.distance=H,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,s.spot[h]=K;const Y=P.shadow;if(P.map&&(s.spotLightMap[A]=P.map,A++,Y.updateMatrices(P),P.castShadow&&O++),s.spotLightMatrix[h]=Y.matrix,P.castShadow){const L=n.get(P);L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,s.spotShadow[h]=L,s.spotShadowMap[h]=J,C++}h++}else if(P.isRectAreaLight){const K=t.get(P);K.color.copy(F).multiplyScalar(W),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),s.rectArea[E]=K,E++}else if(P.isPointLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*w),K.distance=P.distance,K.decay=P.decay,P.castShadow){const Y=P.shadow,L=n.get(P);L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,L.shadowCameraNear=Y.camera.near,L.shadowCameraFar=Y.camera.far,s.pointShadow[p]=L,s.pointShadowMap[p]=J,s.pointShadowMatrix[p]=P.shadow.matrix,T++}s.point[p]=K,p++}else if(P.isHemisphereLight){const K=t.get(P);K.skyColor.copy(P.color).multiplyScalar(W*w),K.groundColor.copy(P.groundColor).multiplyScalar(W*w),s.hemi[y]=K,y++}}E>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_FLOAT_1,s.rectAreaLTC2=oe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_HALF_1,s.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;const k=s.hash;(k.directionalLength!==_||k.pointLength!==p||k.spotLength!==h||k.rectAreaLength!==E||k.hemiLength!==y||k.numDirectionalShadows!==b||k.numPointShadows!==T||k.numSpotShadows!==C||k.numSpotMaps!==A||k.numLightProbes!==x)&&(s.directional.length=_,s.spot.length=h,s.rectArea.length=E,s.point.length=p,s.hemi.length=y,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=C+A-O,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=x,k.directionalLength=_,k.pointLength=p,k.spotLength=h,k.rectAreaLength=E,k.hemiLength=y,k.numDirectionalShadows=b,k.numPointShadows=T,k.numSpotShadows=C,k.numSpotMaps=A,k.numLightProbes=x,s.version=Qm++)}function c(u,d){let f=0,m=0,g=0,_=0,p=0;const h=d.matrixWorldInverse;for(let E=0,y=u.length;E<y;E++){const b=u[E];if(b.isDirectionalLight){const T=s.directional[f];T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(h),f++}else if(b.isSpotLight){const T=s.spot[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(h),g++}else if(b.isRectAreaLight){const T=s.rectArea[_];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(h),o.identity(),a.copy(b.matrixWorld),a.premultiply(h),o.extractRotation(a),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const T=s.point[m];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(h),m++}else if(b.isHemisphereLight){const T=s.hemi[p];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:s}}function Ul(i,e){const t=new tg(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(d){n.push(d)}function o(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ng(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Ul(i,e),t.set(r,[l])):a>=o.length?(l=new Ul(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class ig extends _r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sg extends _r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ag=`uniform sampler2D shadow_pass;
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
}`;function og(i,e,t){let n=new Ec;const s=new Qe,r=new Qe,a=new vt,o=new ig({depthPacking:ed}),l=new sg,c={},u=t.maxTextureSize,d={[zn]:It,[It]:zn,[rn]:rn},f=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:rg,fragmentShader:ag}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new di;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new yn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ec;let h=this.type;this.render=function(T,C,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const O=i.getRenderTarget(),x=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Dn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const q=h!==_n&&this.type===_n,j=h===_n&&this.type!==_n;for(let P=0,F=T.length;P<F;P++){const W=T[P],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const J=H.getFrameExtents();if(s.multiply(J),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,H.mapSize.y=r.y)),H.map===null||q===!0||j===!0){const Y=this.type!==_n?{minFilter:Ct,magFilter:Ct}:{};H.map!==null&&H.map.dispose(),H.map=new ci(s.x,s.y,Y),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const K=H.getViewportCount();for(let Y=0;Y<K;Y++){const L=H.getViewport(Y);a.set(r.x*L.x,r.y*L.y,r.x*L.z,r.y*L.w),k.viewport(a),H.updateMatrices(W,Y),n=H.getFrustum(),b(C,A,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===_n&&E(H,A),H.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(O,x,w)};function E(T,C){const A=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ci(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,A,f,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,A,m,_,null)}function y(T,C,A,O){let x=null;const w=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)x=w;else if(x=A.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=x.uuid,q=C.uuid;let j=c[k];j===void 0&&(j={},c[k]=j);let P=j[q];P===void 0&&(P=x.clone(),j[q]=P),x=P}if(x.visible=C.visible,x.wireframe=C.wireframe,O===_n?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=i.properties.get(x);k.light=A}return x}function b(T,C,A,O,x){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===_n)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const q=e.update(T),j=T.material;if(Array.isArray(j)){const P=q.groups;for(let F=0,W=P.length;F<W;F++){const H=P[F],J=j[H.materialIndex];if(J&&J.visible){const K=y(T,J,O,x);i.renderBufferDirect(A,null,q,K,T,H)}}}else if(j.visible){const P=y(T,j,O,x);i.renderBufferDirect(A,null,q,P,T,null)}}const k=T.children;for(let q=0,j=k.length;q<j;q++)b(k[q],C,A,O,x)}}function lg(i,e,t){const n=t.isWebGL2;function s(){let R=!1;const le=new vt;let ie=null;const X=new vt(0,0,0,0);return{setMask:function(re){ie!==re&&!R&&(i.colorMask(re,re,re,re),ie=re)},setLocked:function(re){R=re},setClear:function(re,be,Ye,lt,Vt){Vt===!0&&(re*=lt,be*=lt,Ye*=lt),le.set(re,be,Ye,lt),X.equals(le)===!1&&(i.clearColor(re,be,Ye,lt),X.copy(le))},reset:function(){R=!1,ie=null,X.set(-1,0,0,0)}}}function r(){let R=!1,le=null,ie=null,X=null;return{setTest:function(re){re?Ne(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(re){le!==re&&!R&&(i.depthMask(re),le=re)},setFunc:function(re){if(ie!==re){switch(re){case Pu:i.depthFunc(i.NEVER);break;case Ru:i.depthFunc(i.ALWAYS);break;case Lu:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case Iu:i.depthFunc(i.EQUAL);break;case Fu:i.depthFunc(i.GEQUAL);break;case Uu:i.depthFunc(i.GREATER);break;case Du:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=re}},setLocked:function(re){R=re},setClear:function(re){X!==re&&(i.clearDepth(re),X=re)},reset:function(){R=!1,le=null,ie=null,X=null}}}function a(){let R=!1,le=null,ie=null,X=null,re=null,be=null,Ye=null,lt=null,Vt=null;return{setTest:function(et){R||(et?Ne(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(et){le!==et&&!R&&(i.stencilMask(et),le=et)},setFunc:function(et,wt,Qt){(ie!==et||X!==wt||re!==Qt)&&(i.stencilFunc(et,wt,Qt),ie=et,X=wt,re=Qt)},setOp:function(et,wt,Qt){(be!==et||Ye!==wt||lt!==Qt)&&(i.stencilOp(et,wt,Qt),be=et,Ye=wt,lt=Qt)},setLocked:function(et){R=et},setClear:function(et){Vt!==et&&(i.clearStencil(et),Vt=et)},reset:function(){R=!1,le=null,ie=null,X=null,re=null,be=null,Ye=null,lt=null,Vt=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,h=!1,E=null,y=null,b=null,T=null,C=null,A=null,O=null,x=new $(0,0,0),w=0,k=!1,q=null,j=null,P=null,F=null,W=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,K=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),J=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),J=K>=2);let L=null,G={};const ce=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),ge=new vt().fromArray(ce),Te=new vt().fromArray(fe);function We(R,le,ie,X){const re=new Uint8Array(4),be=i.createTexture();i.bindTexture(R,be),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<ie;Ye++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(le,0,i.RGBA,1,1,X,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(le+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return be}const Le={};Le[i.TEXTURE_2D]=We(i.TEXTURE_2D,i.TEXTURE_2D,1),Le[i.TEXTURE_CUBE_MAP]=We(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Le[i.TEXTURE_2D_ARRAY]=We(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Le[i.TEXTURE_3D]=We(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(i.DEPTH_TEST),l.setFunc(ir),ze(!1),Ve(mo),Ne(i.CULL_FACE),Re(Dn);function Ne(R){f[R]!==!0&&(i.enable(R),f[R]=!0)}function it(R){f[R]!==!1&&(i.disable(R),f[R]=!1)}function ke(R,le){return m[R]!==le?(i.bindFramebuffer(R,le),m[R]=le,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=le),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=le)),!0):!1}function U(R,le){let ie=_,X=!1;if(R)if(ie=g.get(le),ie===void 0&&(ie=[],g.set(le,ie)),R.isWebGLMultipleRenderTargets){const re=R.texture;if(ie.length!==re.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let be=0,Ye=re.length;be<Ye;be++)ie[be]=i.COLOR_ATTACHMENT0+be;ie.length=re.length,X=!0}}else ie[0]!==i.COLOR_ATTACHMENT0&&(ie[0]=i.COLOR_ATTACHMENT0,X=!0);else ie[0]!==i.BACK&&(ie[0]=i.BACK,X=!0);X&&(t.isWebGL2?i.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Ft(R){return p!==R?(i.useProgram(R),p=R,!0):!1}const Se={[ti]:i.FUNC_ADD,[pu]:i.FUNC_SUBTRACT,[mu]:i.FUNC_REVERSE_SUBTRACT};if(n)Se[xo]=i.MIN,Se[yo]=i.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(Se[xo]=R.MIN_EXT,Se[yo]=R.MAX_EXT)}const Ie={[gu]:i.ZERO,[_u]:i.ONE,[vu]:i.SRC_COLOR,[Ca]:i.SRC_ALPHA,[wu]:i.SRC_ALPHA_SATURATE,[Eu]:i.DST_COLOR,[yu]:i.DST_ALPHA,[xu]:i.ONE_MINUS_SRC_COLOR,[Pa]:i.ONE_MINUS_SRC_ALPHA,[bu]:i.ONE_MINUS_DST_COLOR,[Su]:i.ONE_MINUS_DST_ALPHA,[Mu]:i.CONSTANT_COLOR,[Tu]:i.ONE_MINUS_CONSTANT_COLOR,[Au]:i.CONSTANT_ALPHA,[Cu]:i.ONE_MINUS_CONSTANT_ALPHA};function Re(R,le,ie,X,re,be,Ye,lt,Vt,et){if(R===Dn){h===!0&&(it(i.BLEND),h=!1);return}if(h===!1&&(Ne(i.BLEND),h=!0),R!==fu){if(R!==E||et!==k){if((y!==ti||C!==ti)&&(i.blendEquation(i.FUNC_ADD),y=ti,C=ti),et)switch(R){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case go:i.blendFunc(i.ONE,i.ONE);break;case _o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case go:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,T=null,A=null,O=null,x.set(0,0,0),w=0,E=R,k=et}return}re=re||le,be=be||ie,Ye=Ye||X,(le!==y||re!==C)&&(i.blendEquationSeparate(Se[le],Se[re]),y=le,C=re),(ie!==b||X!==T||be!==A||Ye!==O)&&(i.blendFuncSeparate(Ie[ie],Ie[X],Ie[be],Ie[Ye]),b=ie,T=X,A=be,O=Ye),(lt.equals(x)===!1||Vt!==w)&&(i.blendColor(lt.r,lt.g,lt.b,Vt),x.copy(lt),w=Vt),E=R,k=!1}function st(R,le){R.side===rn?it(i.CULL_FACE):Ne(i.CULL_FACE);let ie=R.side===It;le&&(ie=!ie),ze(ie),R.blending===Bi&&R.transparent===!1?Re(Dn):Re(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const X=R.stencilWrite;c.setTest(X),X&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ft(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ne(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function ze(R){q!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),q=R)}function Ve(R){R!==uu?(Ne(i.CULL_FACE),R!==j&&(R===mo?i.cullFace(i.BACK):R===du?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),j=R}function Je(R){R!==P&&(J&&i.lineWidth(R),P=R)}function ft(R,le,ie){R?(Ne(i.POLYGON_OFFSET_FILL),(F!==le||W!==ie)&&(i.polygonOffset(le,ie),F=le,W=ie)):it(i.POLYGON_OFFSET_FILL)}function yt(R){R?Ne(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function M(R){R===void 0&&(R=i.TEXTURE0+H-1),L!==R&&(i.activeTexture(R),L=R)}function v(R,le,ie){ie===void 0&&(L===null?ie=i.TEXTURE0+H-1:ie=L);let X=G[ie];X===void 0&&(X={type:void 0,texture:void 0},G[ie]=X),(X.type!==R||X.texture!==le)&&(L!==ie&&(i.activeTexture(ie),L=ie),i.bindTexture(R,le||Le[R]),X.type=R,X.texture=le)}function D(){const R=G[L];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ae(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $e(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ze(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Fe(R){ge.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),ge.copy(R))}function Ce(R){Te.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Te.copy(R))}function Ee(R,le){let ie=d.get(le);ie===void 0&&(ie=new WeakMap,d.set(le,ie));let X=ie.get(R);X===void 0&&(X=i.getUniformBlockIndex(le,R.name),ie.set(R,X))}function pe(R,le){const X=d.get(le).get(R);u.get(le)!==X&&(i.uniformBlockBinding(le,X,R.__bindingPointIndex),u.set(le,X))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},L=null,G={},m={},g=new WeakMap,_=[],p=null,h=!1,E=null,y=null,b=null,T=null,C=null,A=null,O=null,x=new $(0,0,0),w=0,k=!1,q=null,j=null,P=null,F=null,W=null,ge.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ne,disable:it,bindFramebuffer:ke,drawBuffers:U,useProgram:Ft,setBlending:Re,setMaterial:st,setFlipSided:ze,setCullFace:Ve,setLineWidth:Je,setPolygonOffset:ft,setScissorTest:yt,activeTexture:M,bindTexture:v,unbindTexture:D,compressedTexImage2D:ee,compressedTexImage3D:Z,texImage2D:Q,texImage3D:Ze,updateUBOMapping:Ee,uniformBlockBinding:pe,texStorage2D:Ae,texStorage3D:$e,texSubImage2D:te,texSubImage3D:_e,compressedTexSubImage2D:ae,compressedTexSubImage3D:ue,scissor:Fe,viewport:Ce,reset:Xe}}function cg(i,e,t,n,s,r,a){const o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,d=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(M,v){return h?new OffscreenCanvas(M,v):lr("canvas")}function y(M,v,D,ee){let Z=1;if((M.width>ee||M.height>ee)&&(Z=ee/Math.max(M.width,M.height)),Z<1||v===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const te=v?Na:Math.floor,_e=te(Z*M.width),ae=te(Z*M.height);_===void 0&&(_=E(_e,ae));const ue=D?E(_e,ae):_;return ue.width=_e,ue.height=ae,ue.getContext("2d").drawImage(M,0,0,_e,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+_e+"x"+ae+")."),ue}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function b(M){return Ko(M.width)&&Ko(M.height)}function T(M){return o?!1:M.wrapS!==Zt||M.wrapT!==Zt||M.minFilter!==Ct&&M.minFilter!==Ht}function C(M,v){return M.generateMipmaps&&v&&M.minFilter!==Ct&&M.minFilter!==Ht}function A(M){i.generateMipmap(M)}function O(M,v,D,ee,Z=!1){if(o===!1)return v;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let te=v;if(v===i.RED&&(D===i.FLOAT&&(te=i.R32F),D===i.HALF_FLOAT&&(te=i.R16F),D===i.UNSIGNED_BYTE&&(te=i.R8)),v===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(te=i.R8UI),D===i.UNSIGNED_SHORT&&(te=i.R16UI),D===i.UNSIGNED_INT&&(te=i.R32UI),D===i.BYTE&&(te=i.R8I),D===i.SHORT&&(te=i.R16I),D===i.INT&&(te=i.R32I)),v===i.RG&&(D===i.FLOAT&&(te=i.RG32F),D===i.HALF_FLOAT&&(te=i.RG16F),D===i.UNSIGNED_BYTE&&(te=i.RG8)),v===i.RGBA){const _e=Z?sr:Ke.getTransfer(ee);D===i.FLOAT&&(te=i.RGBA32F),D===i.HALF_FLOAT&&(te=i.RGBA16F),D===i.UNSIGNED_BYTE&&(te=_e===tt?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(M,v,D){return C(M,D)===!0||M.isFramebufferTexture&&M.minFilter!==Ct&&M.minFilter!==Ht?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function w(M){return M===Ct||M===So||M===kr?i.NEAREST:i.LINEAR}function k(M){const v=M.target;v.removeEventListener("dispose",k),j(v),v.isVideoTexture&&g.delete(v)}function q(M){const v=M.target;v.removeEventListener("dispose",q),F(v)}function j(M){const v=n.get(M);if(v.__webglInit===void 0)return;const D=M.source,ee=p.get(D);if(ee){const Z=ee[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(M),Object.keys(ee).length===0&&p.delete(D)}n.remove(M)}function P(M){const v=n.get(M);i.deleteTexture(v.__webglTexture);const D=M.source,ee=p.get(D);delete ee[v.__cacheKey],a.memory.textures--}function F(M){const v=M.texture,D=n.get(M),ee=n.get(v);if(ee.__webglTexture!==void 0&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(D.__webglFramebuffer[Z]))for(let te=0;te<D.__webglFramebuffer[Z].length;te++)i.deleteFramebuffer(D.__webglFramebuffer[Z][te]);else i.deleteFramebuffer(D.__webglFramebuffer[Z]);D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer[Z])}else{if(Array.isArray(D.__webglFramebuffer))for(let Z=0;Z<D.__webglFramebuffer.length;Z++)i.deleteFramebuffer(D.__webglFramebuffer[Z]);else i.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&i.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let Z=0;Z<D.__webglColorRenderbuffer.length;Z++)D.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(D.__webglColorRenderbuffer[Z]);D.__webglDepthRenderbuffer&&i.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let Z=0,te=v.length;Z<te;Z++){const _e=n.get(v[Z]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(v[Z])}n.remove(v),n.remove(M)}let W=0;function H(){W=0}function J(){const M=W;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),W+=1,M}function K(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function Y(M,v){const D=n.get(M);if(M.isVideoTexture&&ft(M),M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){const ee=M.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(D,M,v);return}}t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+v)}function L(M,v){const D=n.get(M);if(M.version>0&&D.__version!==M.version){Ne(D,M,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+v)}function G(M,v){const D=n.get(M);if(M.version>0&&D.__version!==M.version){Ne(D,M,v);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+v)}function ce(M,v){const D=n.get(M);if(M.version>0&&D.__version!==M.version){it(D,M,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+v)}const fe={[Ia]:i.REPEAT,[Zt]:i.CLAMP_TO_EDGE,[Fa]:i.MIRRORED_REPEAT},ge={[Ct]:i.NEAREST,[So]:i.NEAREST_MIPMAP_NEAREST,[kr]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[Hu]:i.LINEAR_MIPMAP_NEAREST,[hs]:i.LINEAR_MIPMAP_LINEAR},Te={[id]:i.NEVER,[ud]:i.ALWAYS,[sd]:i.LESS,[ad]:i.LEQUAL,[rd]:i.EQUAL,[cd]:i.GEQUAL,[od]:i.GREATER,[ld]:i.NOTEQUAL};function We(M,v,D){if(D?(i.texParameteri(M,i.TEXTURE_WRAP_S,fe[v.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,fe[v.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,fe[v.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ge[v.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ge[v.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Zt||v.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,w(v.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==Ct&&v.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,Te[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Ct||v.minFilter!==kr&&v.minFilter!==hs||v.type===Fn&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===fs&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(M,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Le(M,v){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",k));const ee=v.source;let Z=p.get(ee);Z===void 0&&(Z={},p.set(ee,Z));const te=K(v);if(te!==M.__cacheKey){Z[te]===void 0&&(Z[te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),Z[te].usedTimes++;const _e=Z[M.__cacheKey];_e!==void 0&&(Z[M.__cacheKey].usedTimes--,_e.usedTimes===0&&P(v)),M.__cacheKey=te,M.__webglTexture=Z[te].texture}return D}function Ne(M,v,D){let ee=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ee=i.TEXTURE_3D);const Z=Le(M,v),te=v.source;t.bindTexture(ee,M.__webglTexture,i.TEXTURE0+D);const _e=n.get(te);if(te.version!==_e.__version||Z===!0){t.activeTexture(i.TEXTURE0+D);const ae=Ke.getPrimaries(Ke.workingColorSpace),ue=v.colorSpace===Wt?null:Ke.getPrimaries(v.colorSpace),Ae=v.colorSpace===Wt||ae===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const $e=T(v)&&b(v.image)===!1;let Q=y(v.image,$e,!1,u);Q=yt(v,Q);const Ze=b(Q)||o,Fe=r.convert(v.format,v.colorSpace);let Ce=r.convert(v.type),Ee=O(v.internalFormat,Fe,Ce,v.colorSpace,v.isVideoTexture);We(ee,v,Ze);let pe;const Xe=v.mipmaps,R=o&&v.isVideoTexture!==!0,le=_e.__version===void 0||Z===!0,ie=x(v,Q,Ze);if(v.isDepthTexture)Ee=i.DEPTH_COMPONENT,o?v.type===Fn?Ee=i.DEPTH_COMPONENT32F:v.type===In?Ee=i.DEPTH_COMPONENT24:v.type===ri?Ee=i.DEPTH24_STENCIL8:Ee=i.DEPTH_COMPONENT16:v.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ai&&Ee===i.DEPTH_COMPONENT&&v.type!==Va&&v.type!==In&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=In,Ce=r.convert(v.type)),v.format===Vi&&Ee===i.DEPTH_COMPONENT&&(Ee=i.DEPTH_STENCIL,v.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ri,Ce=r.convert(v.type))),le&&(R?t.texStorage2D(i.TEXTURE_2D,1,Ee,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Ee,Q.width,Q.height,0,Fe,Ce,null));else if(v.isDataTexture)if(Xe.length>0&&Ze){R&&le&&t.texStorage2D(i.TEXTURE_2D,ie,Ee,Xe[0].width,Xe[0].height);for(let X=0,re=Xe.length;X<re;X++)pe=Xe[X],R?t.texSubImage2D(i.TEXTURE_2D,X,0,0,pe.width,pe.height,Fe,Ce,pe.data):t.texImage2D(i.TEXTURE_2D,X,Ee,pe.width,pe.height,0,Fe,Ce,pe.data);v.generateMipmaps=!1}else R?(le&&t.texStorage2D(i.TEXTURE_2D,ie,Ee,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,Fe,Ce,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Ee,Q.width,Q.height,0,Fe,Ce,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){R&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,Ee,Xe[0].width,Xe[0].height,Q.depth);for(let X=0,re=Xe.length;X<re;X++)pe=Xe[X],v.format!==Jt?Fe!==null?R?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,pe.width,pe.height,Q.depth,Fe,pe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Ee,pe.width,pe.height,Q.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,pe.width,pe.height,Q.depth,Fe,Ce,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,Ee,pe.width,pe.height,Q.depth,0,Fe,Ce,pe.data)}else{R&&le&&t.texStorage2D(i.TEXTURE_2D,ie,Ee,Xe[0].width,Xe[0].height);for(let X=0,re=Xe.length;X<re;X++)pe=Xe[X],v.format!==Jt?Fe!==null?R?t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,pe.width,pe.height,Fe,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,X,Ee,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?t.texSubImage2D(i.TEXTURE_2D,X,0,0,pe.width,pe.height,Fe,Ce,pe.data):t.texImage2D(i.TEXTURE_2D,X,Ee,pe.width,pe.height,0,Fe,Ce,pe.data)}else if(v.isDataArrayTexture)R?(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,Ee,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Fe,Ce,Q.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,Q.width,Q.height,Q.depth,0,Fe,Ce,Q.data);else if(v.isData3DTexture)R?(le&&t.texStorage3D(i.TEXTURE_3D,ie,Ee,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Fe,Ce,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,Q.width,Q.height,Q.depth,0,Fe,Ce,Q.data);else if(v.isFramebufferTexture){if(le)if(R)t.texStorage2D(i.TEXTURE_2D,ie,Ee,Q.width,Q.height);else{let X=Q.width,re=Q.height;for(let be=0;be<ie;be++)t.texImage2D(i.TEXTURE_2D,be,Ee,X,re,0,Fe,Ce,null),X>>=1,re>>=1}}else if(Xe.length>0&&Ze){R&&le&&t.texStorage2D(i.TEXTURE_2D,ie,Ee,Xe[0].width,Xe[0].height);for(let X=0,re=Xe.length;X<re;X++)pe=Xe[X],R?t.texSubImage2D(i.TEXTURE_2D,X,0,0,Fe,Ce,pe):t.texImage2D(i.TEXTURE_2D,X,Ee,Fe,Ce,pe);v.generateMipmaps=!1}else R?(le&&t.texStorage2D(i.TEXTURE_2D,ie,Ee,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Fe,Ce,Q)):t.texImage2D(i.TEXTURE_2D,0,Ee,Fe,Ce,Q);C(v,Ze)&&A(ee),_e.__version=te.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function it(M,v,D){if(v.image.length!==6)return;const ee=Le(M,v),Z=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+D);const te=n.get(Z);if(Z.version!==te.__version||ee===!0){t.activeTexture(i.TEXTURE0+D);const _e=Ke.getPrimaries(Ke.workingColorSpace),ae=v.colorSpace===Wt?null:Ke.getPrimaries(v.colorSpace),ue=v.colorSpace===Wt||_e===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ae=v.isCompressedTexture||v.image[0].isCompressedTexture,$e=v.image[0]&&v.image[0].isDataTexture,Q=[];for(let X=0;X<6;X++)!Ae&&!$e?Q[X]=y(v.image[X],!1,!0,c):Q[X]=$e?v.image[X].image:v.image[X],Q[X]=yt(v,Q[X]);const Ze=Q[0],Fe=b(Ze)||o,Ce=r.convert(v.format,v.colorSpace),Ee=r.convert(v.type),pe=O(v.internalFormat,Ce,Ee,v.colorSpace),Xe=o&&v.isVideoTexture!==!0,R=te.__version===void 0||ee===!0;let le=x(v,Ze,Fe);We(i.TEXTURE_CUBE_MAP,v,Fe);let ie;if(Ae){Xe&&R&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,pe,Ze.width,Ze.height);for(let X=0;X<6;X++){ie=Q[X].mipmaps;for(let re=0;re<ie.length;re++){const be=ie[re];v.format!==Jt?Ce!==null?Xe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,re,0,0,be.width,be.height,Ce,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,re,pe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,re,0,0,be.width,be.height,Ce,Ee,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,re,pe,be.width,be.height,0,Ce,Ee,be.data)}}}else{ie=v.mipmaps,Xe&&R&&(ie.length>0&&le++,t.texStorage2D(i.TEXTURE_CUBE_MAP,le,pe,Q[0].width,Q[0].height));for(let X=0;X<6;X++)if($e){Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Q[X].width,Q[X].height,Ce,Ee,Q[X].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,pe,Q[X].width,Q[X].height,0,Ce,Ee,Q[X].data);for(let re=0;re<ie.length;re++){const Ye=ie[re].image[X].image;Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,re+1,0,0,Ye.width,Ye.height,Ce,Ee,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,re+1,pe,Ye.width,Ye.height,0,Ce,Ee,Ye.data)}}else{Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ce,Ee,Q[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,pe,Ce,Ee,Q[X]);for(let re=0;re<ie.length;re++){const be=ie[re];Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,re+1,0,0,Ce,Ee,be.image[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,re+1,pe,Ce,Ee,be.image[X])}}}C(v,Fe)&&A(i.TEXTURE_CUBE_MAP),te.__version=Z.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ke(M,v,D,ee,Z,te){const _e=r.convert(D.format,D.colorSpace),ae=r.convert(D.type),ue=O(D.internalFormat,_e,ae,D.colorSpace);if(!n.get(v).__hasExternalTextures){const $e=Math.max(1,v.width>>te),Q=Math.max(1,v.height>>te);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,te,ue,$e,Q,v.depth,0,_e,ae,null):t.texImage2D(Z,te,ue,$e,Q,0,_e,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),Je(v)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Z,n.get(D).__webglTexture,0,Ve(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,Z,n.get(D).__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function U(M,v,D){if(i.bindRenderbuffer(i.RENDERBUFFER,M),v.depthBuffer&&!v.stencilBuffer){let ee=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(D||Je(v)){const Z=v.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Fn?ee=i.DEPTH_COMPONENT32F:Z.type===In&&(ee=i.DEPTH_COMPONENT24));const te=Ve(v);Je(v)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,ee,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,te,ee,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,ee,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(v.depthBuffer&&v.stencilBuffer){const ee=Ve(v);D&&Je(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,v.width,v.height):Je(v)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{const ee=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Z=0;Z<ee.length;Z++){const te=ee[Z],_e=r.convert(te.format,te.colorSpace),ae=r.convert(te.type),ue=O(te.internalFormat,_e,ae,te.colorSpace),Ae=Ve(v);D&&Je(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,ue,v.width,v.height):Je(v)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,ue,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ue,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const ee=n.get(v.depthTexture).__webglTexture,Z=Ve(v);if(v.depthTexture.format===ai)Je(v)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(v.depthTexture.format===Vi)Je(v)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Se(M){const v=n.get(M),D=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Ft(v.__webglFramebuffer,M)}else if(D){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]=i.createRenderbuffer(),U(v.__webglDepthbuffer[ee],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),U(v.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(M,v,D){const ee=n.get(M);v!==void 0&&ke(ee.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&Se(M)}function Re(M){const v=M.texture,D=n.get(M),ee=n.get(v);M.addEventListener("dispose",q),M.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=v.version,a.memory.textures++);const Z=M.isWebGLCubeRenderTarget===!0,te=M.isWebGLMultipleRenderTargets===!0,_e=b(M)||o;if(Z){D.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(o&&v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[ae]=[];for(let ue=0;ue<v.mipmaps.length;ue++)D.__webglFramebuffer[ae][ue]=i.createFramebuffer()}else D.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)D.__webglFramebuffer[ae]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(te)if(s.drawBuffers){const ae=M.texture;for(let ue=0,Ae=ae.length;ue<Ae;ue++){const $e=n.get(ae[ue]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&Je(M)===!1){const ae=te?v:[v];D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ue=0;ue<ae.length;ue++){const Ae=ae[ue];D.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[ue]);const $e=r.convert(Ae.format,Ae.colorSpace),Q=r.convert(Ae.type),Ze=O(Ae.internalFormat,$e,Q,Ae.colorSpace,M.isXRRenderTarget===!0),Fe=Ve(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,Ze,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,D.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),U(D.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),We(i.TEXTURE_CUBE_MAP,v,_e);for(let ae=0;ae<6;ae++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)ke(D.__webglFramebuffer[ae][ue],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else ke(D.__webglFramebuffer[ae],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);C(v,_e)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const ae=M.texture;for(let ue=0,Ae=ae.length;ue<Ae;ue++){const $e=ae[ue],Q=n.get($e);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),We(i.TEXTURE_2D,$e,_e),ke(D.__webglFramebuffer,M,$e,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),C($e,_e)&&A(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?ae=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,ee.__webglTexture),We(ae,v,_e),o&&v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)ke(D.__webglFramebuffer[ue],M,v,i.COLOR_ATTACHMENT0,ae,ue);else ke(D.__webglFramebuffer,M,v,i.COLOR_ATTACHMENT0,ae,0);C(v,_e)&&A(ae),t.unbindTexture()}M.depthBuffer&&Se(M)}function st(M){const v=b(M)||o,D=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0,Z=D.length;ee<Z;ee++){const te=D[ee];if(C(te,v)){const _e=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ae=n.get(te).__webglTexture;t.bindTexture(_e,ae),A(_e),t.unbindTexture()}}}function ze(M){if(o&&M.samples>0&&Je(M)===!1){const v=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],D=M.width,ee=M.height;let Z=i.COLOR_BUFFER_BIT;const te=[],_e=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(M),ue=M.isWebGLMultipleRenderTargets===!0;if(ue)for(let Ae=0;Ae<v.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Ae=0;Ae<v.length;Ae++){te.push(i.COLOR_ATTACHMENT0+Ae),M.depthBuffer&&te.push(_e);const $e=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if($e===!1&&(M.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ue&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Ae]),$e===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[_e]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_e])),ue){const Q=n.get(v[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,D,ee,0,0,D,ee,Z,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let Ae=0;Ae<v.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Ae]);const $e=n.get(v[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,$e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ve(M){return Math.min(d,M.samples)}function Je(M){const v=n.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ft(M){const v=a.render.frame;g.get(M)!==v&&(g.set(M,v),M.update())}function yt(M,v){const D=M.colorSpace,ee=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Ua||D!==En&&D!==Wt&&(Ke.getTransfer(D)===tt?o===!1?e.has("EXT_sRGB")===!0&&ee===Jt?(M.format=Ua,M.minFilter=Ht,M.generateMipmaps=!1):v=dc.sRGBToLinear(v):(ee!==Jt||Z!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),v}this.allocateTextureUnit=J,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=L,this.setTexture3D=G,this.setTextureCube=ce,this.rebindTextures=Ie,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Je}function ug(i,e,t){const n=t.isWebGL2;function s(r,a=Wt){let o;const l=Ke.getTransfer(a);if(r===Bn)return i.UNSIGNED_BYTE;if(r===sc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===rc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Wu)return i.BYTE;if(r===Xu)return i.SHORT;if(r===Va)return i.UNSIGNED_SHORT;if(r===ic)return i.INT;if(r===In)return i.UNSIGNED_INT;if(r===Fn)return i.FLOAT;if(r===fs)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ju)return i.ALPHA;if(r===Jt)return i.RGBA;if(r===qu)return i.LUMINANCE;if(r===$u)return i.LUMINANCE_ALPHA;if(r===ai)return i.DEPTH_COMPONENT;if(r===Vi)return i.DEPTH_STENCIL;if(r===Ua)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Yu)return i.RED;if(r===ac)return i.RED_INTEGER;if(r===Ku)return i.RG;if(r===oc)return i.RG_INTEGER;if(r===lc)return i.RGBA_INTEGER;if(r===zr||r===Vr||r===Gr||r===Hr)if(l===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===zr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===zr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Eo||r===bo||r===wo||r===Mo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Eo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===To||r===Ao)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===To)return l===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ao)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Co||r===Po||r===Ro||r===Lo||r===Io||r===Fo||r===Uo||r===Do||r===No||r===Bo||r===Oo||r===ko||r===zo||r===Vo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Co)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Po)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ro)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Io)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Do)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===No)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Oo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ko)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wr||r===Go||r===Ho)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Wr)return l===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Go)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ho)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ju||r===Wo||r===Xo||r===jo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Wr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Wo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ri?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class dg extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Js extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hg={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Js;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class fg extends Ot{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:ai,u!==ai&&u!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ai&&(n=In),n===void 0&&u===Vi&&(n=ri),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pg extends ji{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,g=null;const _=t.getContextAttributes();let p=null,h=null;const E=[],y=[],b=new Kt;b.layers.enable(1),b.viewport=new vt;const T=new Kt;T.layers.enable(2),T.viewport=new vt;const C=[b,T],A=new dg;A.layers.enable(1),A.layers.enable(2);let O=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let G=E[L];return G===void 0&&(G=new ma,E[L]=G),G.getTargetRaySpace()},this.getControllerGrip=function(L){let G=E[L];return G===void 0&&(G=new ma,E[L]=G),G.getGripSpace()},this.getHand=function(L){let G=E[L];return G===void 0&&(G=new ma,E[L]=G),G.getHandSpace()};function w(L){const G=y.indexOf(L.inputSource);if(G===-1)return;const ce=E[G];ce!==void 0&&(ce.update(L.inputSource,L.frame,c||a),ce.dispatchEvent({type:L.type,data:L.inputSource}))}function k(){s.removeEventListener("select",w),s.removeEventListener("selectstart",w),s.removeEventListener("selectend",w),s.removeEventListener("squeeze",w),s.removeEventListener("squeezestart",w),s.removeEventListener("squeezeend",w),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",q);for(let L=0;L<E.length;L++){const G=y[L];G!==null&&(y[L]=null,E[L].disconnect(G))}O=null,x=null,e.setRenderTarget(p),m=null,f=null,d=null,s=null,h=null,Y.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",w),s.addEventListener("selectstart",w),s.addEventListener("selectend",w),s.addEventListener("squeeze",w),s.addEventListener("squeezestart",w),s.addEventListener("squeezeend",w),s.addEventListener("end",k),s.addEventListener("inputsourceschange",q),_.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,G),s.updateRenderState({baseLayer:m}),h=new ci(m.framebufferWidth,m.framebufferHeight,{format:Jt,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let G=null,ce=null,fe=null;_.depth&&(fe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=_.stencil?Vi:ai,ce=_.stencil?ri:In);const ge={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(ge),s.updateRenderState({layers:[f]}),h=new ci(f.textureWidth,f.textureHeight,{format:Jt,type:Bn,depthTexture:new fg(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Te=e.properties.get(h);Te.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Y.setContext(s),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function q(L){for(let G=0;G<L.removed.length;G++){const ce=L.removed[G],fe=y.indexOf(ce);fe>=0&&(y[fe]=null,E[fe].disconnect(ce))}for(let G=0;G<L.added.length;G++){const ce=L.added[G];let fe=y.indexOf(ce);if(fe===-1){for(let Te=0;Te<E.length;Te++)if(Te>=y.length){y.push(ce),fe=Te;break}else if(y[Te]===null){y[Te]=ce,fe=Te;break}if(fe===-1)break}const ge=E[fe];ge&&ge.connect(ce)}}const j=new B,P=new B;function F(L,G,ce){j.setFromMatrixPosition(G.matrixWorld),P.setFromMatrixPosition(ce.matrixWorld);const fe=j.distanceTo(P),ge=G.projectionMatrix.elements,Te=ce.projectionMatrix.elements,We=ge[14]/(ge[10]-1),Le=ge[14]/(ge[10]+1),Ne=(ge[9]+1)/ge[5],it=(ge[9]-1)/ge[5],ke=(ge[8]-1)/ge[0],U=(Te[8]+1)/Te[0],Ft=We*ke,Se=We*U,Ie=fe/(-ke+U),Re=Ie*-ke;G.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Re),L.translateZ(Ie),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const st=We+Ie,ze=Le+Ie,Ve=Ft-Re,Je=Se+(fe-Re),ft=Ne*Le/ze*st,yt=it*Le/ze*st;L.projectionMatrix.makePerspective(Ve,Je,ft,yt,st,ze),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function W(L,G){G===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(G.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;A.near=T.near=b.near=L.near,A.far=T.far=b.far=L.far,(O!==A.near||x!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),O=A.near,x=A.far);const G=L.parent,ce=A.cameras;W(A,G);for(let fe=0;fe<ce.length;fe++)W(ce[fe],G);ce.length===2?F(A,b,T):A.projectionMatrix.copy(b.projectionMatrix),H(L,A,G)};function H(L,G,ce){ce===null?L.matrix.copy(G.matrixWorld):(L.matrix.copy(ce.matrixWorld),L.matrix.invert(),L.matrix.multiply(G.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(G.projectionMatrix),L.projectionMatrixInverse.copy(G.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Da*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(L){l=L,f!==null&&(f.fixedFoveation=L),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=L)};let J=null;function K(L,G){if(u=G.getViewerPose(c||a),g=G,u!==null){const ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let fe=!1;ce.length!==A.cameras.length&&(A.cameras.length=0,fe=!0);for(let ge=0;ge<ce.length;ge++){const Te=ce[ge];let We=null;if(m!==null)We=m.getViewport(Te);else{const Ne=d.getViewSubImage(f,Te);We=Ne.viewport,ge===0&&(e.setRenderTargetTextures(h,Ne.colorTexture,f.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(h))}let Le=C[ge];Le===void 0&&(Le=new Kt,Le.layers.enable(ge),Le.viewport=new vt,C[ge]=Le),Le.matrix.fromArray(Te.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Te.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(We.x,We.y,We.width,We.height),ge===0&&(A.matrix.copy(Le.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),fe===!0&&A.cameras.push(Le)}}for(let ce=0;ce<E.length;ce++){const fe=y[ce],ge=E[ce];fe!==null&&ge!==void 0&&ge.update(fe,G,c||a)}J&&J(L,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),g=null}const Y=new bc;Y.setAnimationLoop(K),this.setAnimationLoop=function(L){J=L},this.dispose=function(){}}}function mg(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,xc(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,E,y,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,b)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,E,y):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===It&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===It&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const E=e.get(h).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*y,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,E,y){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*E,p.scale.value=y*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,E){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===It&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const E=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gg(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,y){const b=y.program;n.uniformBlockBinding(E,b)}function c(E,y){let b=s[E.id];b===void 0&&(g(E),b=u(E),s[E.id]=b,E.addEventListener("dispose",p));const T=y.program;n.updateUBOMapping(E,T);const C=e.render.frame;r[E.id]!==C&&(f(E),r[E.id]=C)}function u(E){const y=d();E.__bindingPointIndex=y;const b=i.createBuffer(),T=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,T,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const y=s[E.id],b=E.uniforms,T=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,A=b.length;C<A;C++){const O=b[C];if(m(O,C,T)===!0){const x=O.__offset,w=Array.isArray(O.value)?O.value:[O.value];let k=0;for(let q=0;q<w.length;q++){const j=w[q],P=_(j);typeof j=="number"?(O.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,x+k,O.__data)):j.isMatrix3?(O.__data[0]=j.elements[0],O.__data[1]=j.elements[1],O.__data[2]=j.elements[2],O.__data[3]=j.elements[0],O.__data[4]=j.elements[3],O.__data[5]=j.elements[4],O.__data[6]=j.elements[5],O.__data[7]=j.elements[0],O.__data[8]=j.elements[6],O.__data[9]=j.elements[7],O.__data[10]=j.elements[8],O.__data[11]=j.elements[0]):(j.toArray(O.__data,k),k+=P.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,x,O.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,y,b){const T=E.value;if(b[y]===void 0){if(typeof T=="number")b[y]=T;else{const C=Array.isArray(T)?T:[T],A=[];for(let O=0;O<C.length;O++)A.push(C[O].clone());b[y]=A}return!0}else if(typeof T=="number"){if(b[y]!==T)return b[y]=T,!0}else{const C=Array.isArray(b[y])?b[y]:[b[y]],A=Array.isArray(T)?T:[T];for(let O=0;O<C.length;O++){const x=C[O];if(x.equals(A[O])===!1)return x.copy(A[O]),!0}}return!1}function g(E){const y=E.uniforms;let b=0;const T=16;let C=0;for(let A=0,O=y.length;A<O;A++){const x=y[A],w={boundary:0,storage:0},k=Array.isArray(x.value)?x.value:[x.value];for(let q=0,j=k.length;q<j;q++){const P=k[q],F=_(P);w.boundary+=F.boundary,w.storage+=F.storage}if(x.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=b,A>0){C=b%T;const q=T-C;C!==0&&q-w.boundary<0&&(b+=T-C,x.__offset=b)}b+=w.storage}return C=b%T,C>0&&(b+=T-C),E.__size=b,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function p(E){const y=E.target;y.removeEventListener("dispose",p);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function h(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Pc{constructor(e={}){const{canvas:t=hd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const h=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this._useLegacyLights=!1,this.toneMapping=Nn,this.toneMappingExposure=1;const y=this;let b=!1,T=0,C=0,A=null,O=-1,x=null;const w=new vt,k=new vt;let q=null;const j=new $(0);let P=0,F=t.width,W=t.height,H=1,J=null,K=null;const Y=new vt(0,0,F,W),L=new vt(0,0,F,W);let G=!1;const ce=new Ec;let fe=!1,ge=!1,Te=null;const We=new xt,Le=new Qe,Ne=new B,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return A===null?H:1}let U=n;function Ft(S,I){for(let N=0;N<S.length;N++){const z=S[N],V=t.getContext(z,I);if(V!==null)return V}return null}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${za}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",le,!1),U===null){const I=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&I.shift(),U=Ft(I,S),U===null)throw Ft(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Se,Ie,Re,st,ze,Ve,Je,ft,yt,M,v,D,ee,Z,te,_e,ae,ue,Ae,$e,Q,Ze,Fe,Ce;function Ee(){Se=new Tp(U),Ie=new yp(U,Se,e),Se.init(Ie),Ze=new ug(U,Se,Ie),Re=new lg(U,Se,Ie),st=new Pp(U),ze=new $m,Ve=new cg(U,Se,Re,ze,Ie,Ze,st),Je=new Ep(y),ft=new Mp(y),yt=new Od(U,Ie),Fe=new vp(U,Se,yt,Ie),M=new Ap(U,yt,st,Fe),v=new Fp(U,M,yt,st),Ae=new Ip(U,Ie,Ve),_e=new Sp(ze),D=new qm(y,Je,ft,Se,Ie,Fe,_e),ee=new mg(y,ze),Z=new Km,te=new ng(Se,Ie),ue=new _p(y,Je,ft,Re,v,f,l),ae=new og(y,v,Ie),Ce=new gg(U,st,Ie,Re),$e=new xp(U,Se,st,Ie),Q=new Cp(U,Se,st,Ie),st.programs=D.programs,y.capabilities=Ie,y.extensions=Se,y.properties=ze,y.renderLists=Z,y.shadowMap=ae,y.state=Re,y.info=st}Ee();const pe=new pg(y,U);this.xr=pe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=Se.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Se.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(F,W,!1))},this.getSize=function(S){return S.set(F,W)},this.setSize=function(S,I,N=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=S,W=I,t.width=Math.floor(S*H),t.height=Math.floor(I*H),N===!0&&(t.style.width=S+"px",t.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(F*H,W*H).floor()},this.setDrawingBufferSize=function(S,I,N){F=S,W=I,H=N,t.width=Math.floor(S*N),t.height=Math.floor(I*N),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(Y)},this.setViewport=function(S,I,N,z){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,I,N,z),Re.viewport(w.copy(Y).multiplyScalar(H).floor())},this.getScissor=function(S){return S.copy(L)},this.setScissor=function(S,I,N,z){S.isVector4?L.set(S.x,S.y,S.z,S.w):L.set(S,I,N,z),Re.scissor(k.copy(L).multiplyScalar(H).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(S){Re.setScissorTest(G=S)},this.setOpaqueSort=function(S){J=S},this.setTransparentSort=function(S){K=S},this.getClearColor=function(S){return S.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(S=!0,I=!0,N=!0){let z=0;if(S){let V=!1;if(A!==null){const de=A.texture.format;V=de===lc||de===oc||de===ac}if(V){const de=A.texture.type,ve=de===Bn||de===In||de===Va||de===ri||de===sc||de===rc,we=ue.getClearColor(),Pe=ue.getClearAlpha(),Oe=we.r,Ue=we.g,De=we.b;ve?(m[0]=Oe,m[1]=Ue,m[2]=De,m[3]=Pe,U.clearBufferuiv(U.COLOR,0,m)):(g[0]=Oe,g[1]=Ue,g[2]=De,g[3]=Pe,U.clearBufferiv(U.COLOR,0,g))}else z|=U.COLOR_BUFFER_BIT}I&&(z|=U.DEPTH_BUFFER_BIT),N&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Z.dispose(),te.dispose(),ze.dispose(),Je.dispose(),ft.dispose(),v.dispose(),Fe.dispose(),Ce.dispose(),D.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Vt),pe.removeEventListener("sessionend",et),Te&&(Te.dispose(),Te=null),wt.stop()};function Xe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const S=st.autoReset,I=ae.enabled,N=ae.autoUpdate,z=ae.needsUpdate,V=ae.type;Ee(),st.autoReset=S,ae.enabled=I,ae.autoUpdate=N,ae.needsUpdate=z,ae.type=V}function le(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ie(S){const I=S.target;I.removeEventListener("dispose",ie),X(I)}function X(S){re(S),ze.remove(S)}function re(S){const I=ze.get(S).programs;I!==void 0&&(I.forEach(function(N){D.releaseProgram(N)}),S.isShaderMaterial&&D.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,N,z,V,de){I===null&&(I=it);const ve=V.isMesh&&V.matrixWorld.determinant()<0,we=au(S,I,N,z,V);Re.setMaterial(z,ve);let Pe=N.index,Oe=1;if(z.wireframe===!0){if(Pe=M.getWireframeAttribute(N),Pe===void 0)return;Oe=2}const Ue=N.drawRange,De=N.attributes.position;let ot=Ue.start*Oe,Ut=(Ue.start+Ue.count)*Oe;de!==null&&(ot=Math.max(ot,de.start*Oe),Ut=Math.min(Ut,(de.start+de.count)*Oe)),Pe!==null?(ot=Math.max(ot,0),Ut=Math.min(Ut,Pe.count)):De!=null&&(ot=Math.max(ot,0),Ut=Math.min(Ut,De.count));const pt=Ut-ot;if(pt<0||pt===1/0)return;Fe.setup(V,z,we,N,Pe);let dn,rt=$e;if(Pe!==null&&(dn=yt.get(Pe),rt=Q,rt.setIndex(dn)),V.isMesh)z.wireframe===!0?(Re.setLineWidth(z.wireframeLinewidth*ke()),rt.setMode(U.LINES)):rt.setMode(U.TRIANGLES);else if(V.isLine){let He=z.linewidth;He===void 0&&(He=1),Re.setLineWidth(He*ke()),V.isLineSegments?rt.setMode(U.LINES):V.isLineLoop?rt.setMode(U.LINE_LOOP):rt.setMode(U.LINE_STRIP)}else V.isPoints?rt.setMode(U.POINTS):V.isSprite&&rt.setMode(U.TRIANGLES);if(V.isInstancedMesh)rt.renderInstances(ot,pt,V.count);else if(N.isInstancedBufferGeometry){const He=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Dr=Math.min(N.instanceCount,He);rt.renderInstances(ot,pt,Dr)}else rt.render(ot,pt)};function be(S,I,N){S.transparent===!0&&S.side===rn&&S.forceSinglePass===!1?(S.side=It,S.needsUpdate=!0,Ps(S,I,N),S.side=zn,S.needsUpdate=!0,Ps(S,I,N),S.side=rn):Ps(S,I,N)}this.compile=function(S,I,N=null){N===null&&(N=S),p=te.get(N),p.init(),E.push(p),N.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),S!==N&&S.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(y._useLegacyLights);const z=new Set;return S.traverse(function(V){const de=V.material;if(de)if(Array.isArray(de))for(let ve=0;ve<de.length;ve++){const we=de[ve];be(we,N,V),z.add(we)}else be(de,N,V),z.add(de)}),E.pop(),p=null,z},this.compileAsync=function(S,I,N=null){const z=this.compile(S,I,N);return new Promise(V=>{function de(){if(z.forEach(function(ve){ze.get(ve).currentProgram.isReady()&&z.delete(ve)}),z.size===0){V(S);return}setTimeout(de,10)}Se.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ye=null;function lt(S){Ye&&Ye(S)}function Vt(){wt.stop()}function et(){wt.start()}const wt=new bc;wt.setAnimationLoop(lt),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(S){Ye=S,pe.setAnimationLoop(S),S===null?wt.stop():wt.start()},pe.addEventListener("sessionstart",Vt),pe.addEventListener("sessionend",et),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(I),I=pe.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,I,A),p=te.get(S,E.length),p.init(),E.push(p),We.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ce.setFromProjectionMatrix(We),ge=this.localClippingEnabled,fe=_e.init(this.clippingPlanes,ge),_=Z.get(S,h.length),_.init(),h.push(_),Qt(S,I,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(J,K),this.info.render.frame++,fe===!0&&_e.beginShadows();const N=p.state.shadowsArray;if(ae.render(N,S,I),fe===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),ue.render(_,S),p.setupLights(y._useLegacyLights),I.isArrayCamera){const z=I.cameras;for(let V=0,de=z.length;V<de;V++){const ve=z[V];lo(_,S,ve,ve.viewport)}}else lo(_,S,I);A!==null&&(Ve.updateMultisampleRenderTarget(A),Ve.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(y,S,I),Fe.resetDefaultState(),O=-1,x=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function Qt(S,I,N,z){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)N=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ce.intersectsSprite(S)){z&&Ne.setFromMatrixPosition(S.matrixWorld).applyMatrix4(We);const ve=v.update(S),we=S.material;we.visible&&_.push(S,ve,we,N,Ne.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ce.intersectsObject(S))){const ve=v.update(S),we=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ne.copy(S.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ne.copy(ve.boundingSphere.center)),Ne.applyMatrix4(S.matrixWorld).applyMatrix4(We)),Array.isArray(we)){const Pe=ve.groups;for(let Oe=0,Ue=Pe.length;Oe<Ue;Oe++){const De=Pe[Oe],ot=we[De.materialIndex];ot&&ot.visible&&_.push(S,ve,ot,N,Ne.z,De)}}else we.visible&&_.push(S,ve,we,N,Ne.z,null)}}const de=S.children;for(let ve=0,we=de.length;ve<we;ve++)Qt(de[ve],I,N,z)}function lo(S,I,N,z){const V=S.opaque,de=S.transmissive,ve=S.transparent;p.setupLightsView(N),fe===!0&&_e.setGlobalState(y.clippingPlanes,N),de.length>0&&ru(V,de,I,N),z&&Re.viewport(w.copy(z)),V.length>0&&Cs(V,I,N),de.length>0&&Cs(de,I,N),ve.length>0&&Cs(ve,I,N),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function ru(S,I,N,z){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;const de=Ie.isWebGL2;Te===null&&(Te=new ci(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?fs:Bn,minFilter:hs,samples:de?4:0})),y.getDrawingBufferSize(Le),de?Te.setSize(Le.x,Le.y):Te.setSize(Na(Le.x),Na(Le.y));const ve=y.getRenderTarget();y.setRenderTarget(Te),y.getClearColor(j),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear();const we=y.toneMapping;y.toneMapping=Nn,Cs(S,N,z),Ve.updateMultisampleRenderTarget(Te),Ve.updateRenderTargetMipmap(Te);let Pe=!1;for(let Oe=0,Ue=I.length;Oe<Ue;Oe++){const De=I[Oe],ot=De.object,Ut=De.geometry,pt=De.material,dn=De.group;if(pt.side===rn&&ot.layers.test(z.layers)){const rt=pt.side;pt.side=It,pt.needsUpdate=!0,co(ot,N,z,Ut,pt,dn),pt.side=rt,pt.needsUpdate=!0,Pe=!0}}Pe===!0&&(Ve.updateMultisampleRenderTarget(Te),Ve.updateRenderTargetMipmap(Te)),y.setRenderTarget(ve),y.setClearColor(j,P),y.toneMapping=we}function Cs(S,I,N){const z=I.isScene===!0?I.overrideMaterial:null;for(let V=0,de=S.length;V<de;V++){const ve=S[V],we=ve.object,Pe=ve.geometry,Oe=z===null?ve.material:z,Ue=ve.group;we.layers.test(N.layers)&&co(we,I,N,Pe,Oe,Ue)}}function co(S,I,N,z,V,de){S.onBeforeRender(y,I,N,z,V,de),S.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(y,I,N,z,S,de),V.transparent===!0&&V.side===rn&&V.forceSinglePass===!1?(V.side=It,V.needsUpdate=!0,y.renderBufferDirect(N,I,z,V,S,de),V.side=zn,V.needsUpdate=!0,y.renderBufferDirect(N,I,z,V,S,de),V.side=rn):y.renderBufferDirect(N,I,z,V,S,de),S.onAfterRender(y,I,N,z,V,de)}function Ps(S,I,N){I.isScene!==!0&&(I=it);const z=ze.get(S),V=p.state.lights,de=p.state.shadowsArray,ve=V.state.version,we=D.getParameters(S,V.state,de,I,N),Pe=D.getProgramCacheKey(we);let Oe=z.programs;z.environment=S.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(S.isMeshStandardMaterial?ft:Je).get(S.envMap||z.environment),Oe===void 0&&(S.addEventListener("dispose",ie),Oe=new Map,z.programs=Oe);let Ue=Oe.get(Pe);if(Ue!==void 0){if(z.currentProgram===Ue&&z.lightsStateVersion===ve)return ho(S,we),Ue}else we.uniforms=D.getUniforms(S),S.onBuild(N,we,y),S.onBeforeCompile(we,y),Ue=D.acquireProgram(we,Pe),Oe.set(Pe,Ue),z.uniforms=we.uniforms;const De=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(De.clippingPlanes=_e.uniform),ho(S,we),z.needsLights=lu(S),z.lightsStateVersion=ve,z.needsLights&&(De.ambientLightColor.value=V.state.ambient,De.lightProbe.value=V.state.probe,De.directionalLights.value=V.state.directional,De.directionalLightShadows.value=V.state.directionalShadow,De.spotLights.value=V.state.spot,De.spotLightShadows.value=V.state.spotShadow,De.rectAreaLights.value=V.state.rectArea,De.ltc_1.value=V.state.rectAreaLTC1,De.ltc_2.value=V.state.rectAreaLTC2,De.pointLights.value=V.state.point,De.pointLightShadows.value=V.state.pointShadow,De.hemisphereLights.value=V.state.hemi,De.directionalShadowMap.value=V.state.directionalShadowMap,De.directionalShadowMatrix.value=V.state.directionalShadowMatrix,De.spotShadowMap.value=V.state.spotShadowMap,De.spotLightMatrix.value=V.state.spotLightMatrix,De.spotLightMap.value=V.state.spotLightMap,De.pointShadowMap.value=V.state.pointShadowMap,De.pointShadowMatrix.value=V.state.pointShadowMatrix),z.currentProgram=Ue,z.uniformsList=null,Ue}function uo(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=nr.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function ho(S,I){const N=ze.get(S);N.outputColorSpace=I.outputColorSpace,N.instancing=I.instancing,N.instancingColor=I.instancingColor,N.skinning=I.skinning,N.morphTargets=I.morphTargets,N.morphNormals=I.morphNormals,N.morphColors=I.morphColors,N.morphTargetsCount=I.morphTargetsCount,N.numClippingPlanes=I.numClippingPlanes,N.numIntersection=I.numClipIntersection,N.vertexAlphas=I.vertexAlphas,N.vertexTangents=I.vertexTangents,N.toneMapping=I.toneMapping}function au(S,I,N,z,V){I.isScene!==!0&&(I=it),Ve.resetTextureUnits();const de=I.fog,ve=z.isMeshStandardMaterial?I.environment:null,we=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:En,Pe=(z.isMeshStandardMaterial?ft:Je).get(z.envMap||ve),Oe=z.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Ue=!!N.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),De=!!N.morphAttributes.position,ot=!!N.morphAttributes.normal,Ut=!!N.morphAttributes.color;let pt=Nn;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pt=y.toneMapping);const dn=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,rt=dn!==void 0?dn.length:0,He=ze.get(z),Dr=p.state.lights;if(fe===!0&&(ge===!0||S!==x)){const Dt=S===x&&z.id===O;_e.setState(z,S,Dt)}let ct=!1;z.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Dr.state.version||He.outputColorSpace!==we||V.isInstancedMesh&&He.instancing===!1||!V.isInstancedMesh&&He.instancing===!0||V.isSkinnedMesh&&He.skinning===!1||!V.isSkinnedMesh&&He.skinning===!0||V.isInstancedMesh&&He.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&He.instancingColor===!1&&V.instanceColor!==null||He.envMap!==Pe||z.fog===!0&&He.fog!==de||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==_e.numPlanes||He.numIntersection!==_e.numIntersection)||He.vertexAlphas!==Oe||He.vertexTangents!==Ue||He.morphTargets!==De||He.morphNormals!==ot||He.morphColors!==Ut||He.toneMapping!==pt||Ie.isWebGL2===!0&&He.morphTargetsCount!==rt)&&(ct=!0):(ct=!0,He.__version=z.version);let Xn=He.currentProgram;ct===!0&&(Xn=Ps(z,I,V));let fo=!1,ts=!1,Nr=!1;const Mt=Xn.getUniforms(),jn=He.uniforms;if(Re.useProgram(Xn.program)&&(fo=!0,ts=!0,Nr=!0),z.id!==O&&(O=z.id,ts=!0),fo||x!==S){Mt.setValue(U,"projectionMatrix",S.projectionMatrix),Mt.setValue(U,"viewMatrix",S.matrixWorldInverse);const Dt=Mt.map.cameraPosition;Dt!==void 0&&Dt.setValue(U,Ne.setFromMatrixPosition(S.matrixWorld)),Ie.logarithmicDepthBuffer&&Mt.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Mt.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,ts=!0,Nr=!0)}if(V.isSkinnedMesh){Mt.setOptional(U,V,"bindMatrix"),Mt.setOptional(U,V,"bindMatrixInverse");const Dt=V.skeleton;Dt&&(Ie.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),Mt.setValue(U,"boneTexture",Dt.boneTexture,Ve),Mt.setValue(U,"boneTextureSize",Dt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Br=N.morphAttributes;if((Br.position!==void 0||Br.normal!==void 0||Br.color!==void 0&&Ie.isWebGL2===!0)&&Ae.update(V,N,Xn),(ts||He.receiveShadow!==V.receiveShadow)&&(He.receiveShadow=V.receiveShadow,Mt.setValue(U,"receiveShadow",V.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(jn.envMap.value=Pe,jn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ts&&(Mt.setValue(U,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&ou(jn,Nr),de&&z.fog===!0&&ee.refreshFogUniforms(jn,de),ee.refreshMaterialUniforms(jn,z,H,W,Te),nr.upload(U,uo(He),jn,Ve)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(nr.upload(U,uo(He),jn,Ve),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Mt.setValue(U,"center",V.center),Mt.setValue(U,"modelViewMatrix",V.modelViewMatrix),Mt.setValue(U,"normalMatrix",V.normalMatrix),Mt.setValue(U,"modelMatrix",V.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Dt=z.uniformsGroups;for(let Or=0,cu=Dt.length;Or<cu;Or++)if(Ie.isWebGL2){const po=Dt[Or];Ce.update(po,Xn),Ce.bind(po,Xn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xn}function ou(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function lu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,I,N){ze.get(S.texture).__webglTexture=I,ze.get(S.depthTexture).__webglTexture=N;const z=ze.get(S);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=N===void 0,z.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,I){const N=ze.get(S);N.__webglFramebuffer=I,N.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,N=0){A=S,T=I,C=N;let z=!0,V=null,de=!1,ve=!1;if(S){const Pe=ze.get(S);Pe.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(U.FRAMEBUFFER,null),z=!1):Pe.__webglFramebuffer===void 0?Ve.setupRenderTarget(S):Pe.__hasExternalTextures&&Ve.rebindTextures(S,ze.get(S.texture).__webglTexture,ze.get(S.depthTexture).__webglTexture);const Oe=S.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ve=!0);const Ue=ze.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ue[I])?V=Ue[I][N]:V=Ue[I],de=!0):Ie.isWebGL2&&S.samples>0&&Ve.useMultisampledRTT(S)===!1?V=ze.get(S).__webglMultisampledFramebuffer:Array.isArray(Ue)?V=Ue[N]:V=Ue,w.copy(S.viewport),k.copy(S.scissor),q=S.scissorTest}else w.copy(Y).multiplyScalar(H).floor(),k.copy(L).multiplyScalar(H).floor(),q=G;if(Re.bindFramebuffer(U.FRAMEBUFFER,V)&&Ie.drawBuffers&&z&&Re.drawBuffers(S,V),Re.viewport(w),Re.scissor(k),Re.setScissorTest(q),de){const Pe=ze.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,Pe.__webglTexture,N)}else if(ve){const Pe=ze.get(S.texture),Oe=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pe.__webglTexture,N||0,Oe)}O=-1},this.readRenderTargetPixels=function(S,I,N,z,V,de,ve){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ze.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(we=we[ve]),we){Re.bindFramebuffer(U.FRAMEBUFFER,we);try{const Pe=S.texture,Oe=Pe.format,Ue=Pe.type;if(Oe!==Jt&&Ze.convert(Oe)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Ue===fs&&(Se.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Ue!==Bn&&Ze.convert(Ue)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===Fn&&(Ie.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-z&&N>=0&&N<=S.height-V&&U.readPixels(I,N,z,V,Ze.convert(Oe),Ze.convert(Ue),de)}finally{const Pe=A!==null?ze.get(A).__webglFramebuffer:null;Re.bindFramebuffer(U.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(S,I,N=0){const z=Math.pow(2,-N),V=Math.floor(I.image.width*z),de=Math.floor(I.image.height*z);Ve.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,N,0,0,S.x,S.y,V,de),Re.unbindTexture()},this.copyTextureToTexture=function(S,I,N,z=0){const V=I.image.width,de=I.image.height,ve=Ze.convert(N.format),we=Ze.convert(N.type);Ve.setTexture2D(N,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment),I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,S.x,S.y,V,de,ve,we,I.image.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,S.x,S.y,I.mipmaps[0].width,I.mipmaps[0].height,ve,I.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,z,S.x,S.y,ve,we,I.image),z===0&&N.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(S,I,N,z,V=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=S.max.x-S.min.x+1,ve=S.max.y-S.min.y+1,we=S.max.z-S.min.z+1,Pe=Ze.convert(z.format),Oe=Ze.convert(z.type);let Ue;if(z.isData3DTexture)Ve.setTexture3D(z,0),Ue=U.TEXTURE_3D;else if(z.isDataArrayTexture)Ve.setTexture2DArray(z,0),Ue=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const De=U.getParameter(U.UNPACK_ROW_LENGTH),ot=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ut=U.getParameter(U.UNPACK_SKIP_PIXELS),pt=U.getParameter(U.UNPACK_SKIP_ROWS),dn=U.getParameter(U.UNPACK_SKIP_IMAGES),rt=N.isCompressedTexture?N.mipmaps[0]:N.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,rt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,S.min.z),N.isDataTexture||N.isData3DTexture?U.texSubImage3D(Ue,V,I.x,I.y,I.z,de,ve,we,Pe,Oe,rt.data):N.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ue,V,I.x,I.y,I.z,de,ve,we,Pe,rt.data)):U.texSubImage3D(Ue,V,I.x,I.y,I.z,de,ve,we,Pe,Oe,rt),U.pixelStorei(U.UNPACK_ROW_LENGTH,De),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ot),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ut),U.pixelStorei(U.UNPACK_SKIP_ROWS,pt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,dn),V===0&&z.generateMipmaps&&U.generateMipmap(Ue),Re.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Ve.setTextureCube(S,0):S.isData3DTexture?Ve.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ve.setTexture2DArray(S,0):Ve.setTexture2D(S,0),Re.unbindTexture()},this.resetState=function(){T=0,C=0,A=null,Re.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ga?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===mr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_t?oi:cc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===oi?_t:En}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class _g extends Pc{}_g.prototype.isWebGL1Renderer=!0;class vg extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=za);class hi{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(s=>{const r=this.resolveName(s);this.callbacks[r.namespace]instanceof Object||(this.callbacks[r.namespace]={}),this.callbacks[r.namespace][r.value]instanceof Array||(this.callbacks[r.namespace][r.value]=[]),this.callbacks[r.namespace][r.value].push(t)}),this)}off(e){return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(n=>{const s=this.resolveName(n);if(s.namespace!=="base"&&s.value==="")delete this.callbacks[s.namespace];else if(s.namespace==="base")for(const r in this.callbacks)this.callbacks[r]instanceof Object&&this.callbacks[r][s.value]instanceof Array&&(delete this.callbacks[r][s.value],Object.keys(this.callbacks[r]).length===0&&delete this.callbacks[r]);else this.callbacks[s.namespace]instanceof Object&&this.callbacks[s.namespace][s.value]instanceof Array&&(delete this.callbacks[s.namespace][s.value],Object.keys(this.callbacks[s.namespace]).length===0&&delete this.callbacks[s.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;let n=null;const s=t instanceof Array?t:[];let r=this.resolveNames(e);if(r=this.resolveName(r[0]),r.namespace==="base")for(const a in this.callbacks)this.callbacks[a]instanceof Object&&this.callbacks[a][r.value]instanceof Array&&this.callbacks[a][r.value].forEach(function(o){o.apply(this,s)});else if(this.callbacks[r.namespace]instanceof Object){if(r.value==="")return console.warn("wrong name"),this;this.callbacks[r.namespace][r.value].forEach(function(a){a.apply(this,s)})}return n}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){const t={},n=e.split(".");return t.original=e,t.value=n[0],t.namespace="base",n.length>1&&n[1]!==""&&(t.namespace=n[1]),t}}class xg extends hi{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.aspect=this.width/this.height,window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.aspect=this.width/this.height,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.trigger("resize")})}}class yg extends hi{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,window.requestAnimationFrame(()=>{this.tick()})}tick(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.trigger("tick"),window.requestAnimationFrame(()=>{this.tick()})}}class Sg{constructor(){this.experience=new Wn,this.debug=this.experience.debug,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("Camera"),this.debugFolder.close()),this.setInstance()}setInstance(){this.instance=new wc(-1,1,1,-1),this.instance.position.set(0,0,1),this.scene.add(this.instance),this.debug.active}resize(){this.instance.aspect=this.sizes.width/this.sizes.height}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class ln{constructor(e,t,n,s,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),ln.nextNameID=ln.nextNameID||0,this.$name.id=`lil-gui-name-${++ln.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Eg extends ln{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Oa(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const bg={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Oa,toHexString:Oa},ps={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},wg={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,e,t=1){const n=ps.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const s=i*n<<16^e*n<<8^t*n<<0;return ps.toHexString(s)}},Mg={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=ps.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const s=i*n<<16^e*n<<8^t*n<<0;return ps.toHexString(s)}},Tg=[bg,ps,wg,Mg];function Ag(i){return Tg.find(e=>e.match(i))}class Cg extends ln{constructor(e,t,n,s){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Ag(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Oa(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ga extends ln{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Pg extends ln{constructor(e,t,n,s,r,a){super(e,t,n,"number"),this._initInput(),this.min(s),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let E=parseFloat(this.$input.value);isNaN(E)||(this._stepExplicit&&(E=this._snap(E)),this.setValue(this._clamp(E)))},n=E=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+E),this.$input.value=this.getValue())},s=E=>{E.key==="Enter"&&this.$input.blur(),E.code==="ArrowUp"&&(E.preventDefault(),n(this._step*this._arrowKeyMultiplier(E))),E.code==="ArrowDown"&&(E.preventDefault(),n(this._step*this._arrowKeyMultiplier(E)*-1))},r=E=>{this._inputFocused&&(E.preventDefault(),n(this._step*this._normalizeMouseWheel(E)))};let a=!1,o,l,c,u,d;const f=5,m=E=>{o=E.clientX,l=c=E.clientY,a=!0,u=this.getValue(),d=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=E=>{if(a){const y=E.clientX-o,b=E.clientY-l;Math.abs(b)>f?(E.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>f&&_()}if(!a){const y=E.clientY-c;d-=y*this._step*this._arrowKeyMultiplier(E),u+d>this._max?d=this._max-u:u+d<this._min&&(d=this._min-u),this._snapClampSetValue(u+d)}c=E.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},p=()=>{this._inputFocused=!0},h=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",h)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(h,E,y,b,T)=>(h-E)/(y-E)*(T-b)+b,t=h=>{const E=this.$slider.getBoundingClientRect();let y=e(h,E.left,E.right,this._min,this._max);this._snapClampSetValue(y)},n=h=>{this._setDraggingStyle(!0),t(h.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=h=>{t(h.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let a=!1,o,l;const c=h=>{h.preventDefault(),this._setDraggingStyle(!0),t(h.touches[0].clientX),a=!1},u=h=>{h.touches.length>1||(this._hasScrollBar?(o=h.touches[0].clientX,l=h.touches[0].clientY,a=!0):c(h),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",f))},d=h=>{if(a){const E=h.touches[0].clientX-o,y=h.touches[0].clientY-l;Math.abs(E)>Math.abs(y)?c(h):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f))}else h.preventDefault(),t(h.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f)},m=this._callOnFinishChange.bind(this),g=400;let _;const p=h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const y=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(m,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Rg extends ln{constructor(e,t,n,s){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class Lg extends ln{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Ig=`.lil-gui {
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
}`;function Fg(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Dl=!1;class Xa{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:s,title:r="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Dl&&o&&(Fg(Ig),Dl=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=a}add(e,t,n,s,r){if(Object(n)===n)return new Rg(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new Pg(this,e,t,n,s,r);case"boolean":return new Eg(this,e,t);case"string":return new Lg(this,e,t);case"function":return new ga(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new Cg(this,e,t,n)}addFolder(e){const t=new Xa({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof ga||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ga)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const Ug=Xa;class Dg{constructor(){this.active=window.location.hash=="#debug",this.active&&(this.ui=new Ug)}}class Ng extends hi{constructor(){super(),this.settings=new Wn().settings,this.clickHeld=!1,this.lastClick=Date.now(),this.x=0,this.y=0,this.deltaX=0,this.deltaY=0,this.scrollDeltaY=0,this.touchPointDistance=null,this.doubleClickDelta=400,this.target=null,this.touchOnly=!1;const e=document.getElementById("viewer"),t=document.getElementById("main-canvas");this.addHandlesToElement(t),this.addHandlesToElement(e)}addHandlesToElement(e){this.addMouseHandlers(e),this.addTouchHandlers(e)}addMouseHandlers(e){e.addEventListener("mousedown",t=>{this.target=t.target,t.button===0&&(this.clickHeld=!0);const n=Date.now();n-this.lastClick<this.doubleClickDelta&&(this.trigger("doubleClick"),this.clickHeld=!1),this.lastClick=n}),e.addEventListener("mouseup",t=>{this.target=t.target,t.button===0&&(this.clickHeld=!1)}),e.addEventListener("mousemove",t=>{this.touchOnly||(this.deltaX=this.x-t.x,this.deltaY=this.y-t.y,this.x=t.x,this.y=t.y,this.trigger("mousemove"))}),e.addEventListener("wheel",t=>{this.scrollDeltaY=t.deltaY*this.settings.scrollZoomSpeed,this.trigger("scroll")})}addTouchHandlers(e){e.addEventListener("touchstart",t=>{this.touchOnly=!0,this.clickHeld=!0,this.target=t.target,t.touches.length==1&&(this.x=t.touches[0].clientX,this.y=t.touches[0].clientY)}),e.addEventListener("touchend",()=>{this.clickHeld=!1,this.touchPointDistance=null}),e.addEventListener("touchmove",t=>{t.touches.length>1?this.handleMultiTouch(t):this.handleSingleTouch(t)})}handleMultiTouch(e){const t=e.touches[0],n=e.touches[1],s=t.clientX-n.clientX,r=t.clientY-n.clientY,a=s**2+r**2,o=(t.clientX+n.clientX)/2,l=(t.clientY+n.clientY)/2;this.deltaX=this.x-o,this.deltaY=this.y-l,this.x=o,this.y=l,this.touchPointDistance!=null&&(this.scrollDeltaY=-(a-this.touchPointDistance)/20,this.trigger("scroll"),this.trigger("touchmove")),this.touchPointDistance=a}handleSingleTouch(e){this.deltaX=this.x-e.touches[0].clientX,this.deltaY=this.y-e.touches[0].clientY,this.x=e.touches[0].clientX,this.y=e.touches[0].clientY,this.trigger("touchmove"),this.touchPointDistance=null}}class Bg{constructor(){this.experience=new Wn,this.debug=this.experience.debug,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.camera=this.experience.camera,this.mouse=this.experience.mouse,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("Renderer"),this.debugFolder.close()),this.setInstance()}setInstance(){this.instance=new Pc({canvas:this.canvas,preserveDrawingBuffer:!0}),this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}onLoad(){this.mouse=this.experience.mouse}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}update(){this.instance.render(this.scene,this.camera.instance)}doubleClick(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():this.instance.domElement.requestFullscreen()}}class Gn extends hi{constructor(){super(),this.initExperienceReferences(),this.initDebug()}initExperienceReferences(){this.experience=new Wn,this.debug=this.experience.debug,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.time=this.experience.time,this.mouse=this.experience.mouse,this.shaderMaterial=this.experience.shaderMaterial,this.animation=this.experience.animation,this.keyboard=this.experience.keyboard,this.projectList=this.experience.projectList,this.project=this.experience.project,this.shader=this.experience.shader,this.shaderUniforms=this.shaderMaterial.getUniforms(),this.palettes=this.experience.palettes}initDebug(){this.debug.active&&(this.debugFolder=this.debug.ui.addFolder(this.constructor.name),this.debugFolder.close())}}class Og extends Gn{constructor(){super()}getUniformValues(){const e={};for(const[t,n]of Object.entries(this.shaderUniforms))e[t]={value:n.value};return e}setUniformValues(e){if(e)for(const[t,n]of Object.entries(e))typeof n==Object&&(this.shaderUniforms[t].value=n.value)}}class Rc{constructor(e,t,n=null,s=null){this.id=e,this.name=t,this.image=n,this.lastModified=s?Date.parse(s):Date.now()}getSnapshot(){return{id:this.id,name:this.name,image:this.image,lastModified:this.lastModified.toString()}}setImage(e){this.image=e}updateModified(){this.lastModified=Date.now()}}const Nl="NewProject",Bl=0;class kg{constructor(e=[]){this.projects=e,this.currentProject=null,this.currentProjectName=Nl,this.currentProjectID=Bl}getSnapshot(){const e=[];return this.projects.forEach(t=>{e.push(t.getSnapshot())}),e}addProject(e){this.projects.push(e)}setCurrentProject(e){this.projects.forEach(t=>{t.id==e&&(this.currentProject=t,this.currentProjectName=t.name,this.currentProjectID=t.id)})}updateOrAddProject(e,t,n){let s=!1,r=0;return this.projects.forEach(a=>{a.id==e?(a.name=t,a.updateModified(),a.setImage(n),s=!0,r=a.id):s||(r=Math.max(r,a.id))}),s||(r+=1,this.projects.push(new Rc(r,t,n))),r}deleteProject(e){for(let t=0;t<this.projects.length;t++){const n=this.projects[t];if(e==n.id){this.projects.splice(t,1);break}}this.setDefaultProject()}setDefaultProject(){this.currentProjectName=Nl,this.currentProjectID=Bl}clear(){this.projects=[]}}const nt={mandle:0,julia:1,doubleJulia:2,burningShip:3,neuton:4,phoenix:5,noise:6,circularWaves:7,linearWaves:8,fibonacci:9,sphinx:10},me={iters:0,power:1,posX:2,posY:3,zoom:4,cPosX:5,cPosY:6,velDir:7,velMag:8,mirrorFoldsX:9,mirrorFoldsY:10,mirrorOffsetX:11,mirrorOffsetY:12,numColors:13,colorOffset:14,sinFreqX:15,sinFreqY:16,rotation:17,hueRotation:18,uSinMag:19,iters2:20,colorScale:21,power2:22,cPosX2:23,cPosY2:24};class Me{constructor({eId:e,name:t,value:n=0,min:s=0,max:r=1,step:a=.1}){this.eId=e,this.name=new String(t),this.value=n,this.min=s,this.max=r,this.step=a,this.output=null,this.type="number",this.uFloatPar=null,this.elements={keyBtn:null,value:null,slider:null}}setFromSnapshot(e){this.name=new String(e.name),this.value=e.value,this.min=e.min,this.max=e.max,this.step=e.step}getSnapshot(){return{type:this.type,eId:this.eId,name:this.name,value:this.value,min:this.min,max:this.max,step:this.step}}setValue(e){this.value=Number(e),this.uFloatPar[this.eId]=this.value}getValue(){return this.uFloatPar[this.eId]}getShaderValue(){return this.uFloatPar[this.eId]}setFromShader(){this.value=this.uFloatPar[this.eId]}setUfloatPars(e){this.uFloatPar=e,this.uFloatPar[this.eId]=this.value}linkInput(e){e.addEventListener("input",t=>{this.value=t.target.value,this.output&&(this.output.value=this.value)})}linkOutput(e){this.output=e}clearOutput(){this.output=null}setInputElement(e){this.inputElem=e}setElementFromInput(){this.inputElem.value=this.value}getId(){return this.name.toLowerCase().split(" ").join("-")}}class zt{constructor(e,t,n=0){this.name=e,this.groups={},this.uFloatPars=new Float32Array(Object.keys(me).length),this.eShader=t,this.paletteIndex=n}addGroup(e,t=[]){this.groups[e]=[],t&&this.addToGroup(e,t)}addToGroup(e,t){this.groups[e]?t.forEach(n=>{this.groups[e].push(n)}):console.log("Group does not exist")}getGroups(){return this.groups}getGroup(e){return this.groups[e]}setInputs(){for(const[e,t]of Object.entries(this.groups))for(const n of t)switch(n.type){case"number":n.setUfloatPars(this.uFloatPars);break}}getInput(e){for(const[t,n]of Object.entries(this.groups))for(const s of n)if(s.eId==e)return s}getNumInputs(){const e=[];for(const[t,n]of Object.entries(this.groups))for(const s of n)s.type=="number"&&e.push(s);return e}getUfloatPars(){return this.uFloatPars}getGroupsSnapshot(){const e={};for(const[t,n]of Object.entries(this.groups)){const s={name:t,numInputs:[]};for(const r of n)s.numInputs.push(r.getSnapshot());e[t]=s}return e}getSnapshot(){return{name:this.name,groups:this.getGroupsSnapshot(),eShader:this.eShader,paletteIndex:this.paletteIndex}}setFromSnapshot(e){this.paletteIndex=e.paletteIndex;for(const[t,n]of Object.entries(e.groups))for(const s of n.numInputs)switch(s.type){case"number":this.setInputFromSnapshot(s.name,s);break}}setFromSnapshotByEId(e){for(const t of this.getNumInputs()){const n=e[t.eId];n&&(t.value=n.value)}}setInputFromSnapshot(e,t){for(const[n,s]of Object.entries(this.groups))for(let r=0;r<s.length;r++)s[r].name==e&&s[r].setFromSnapshot(t)}clone(){const e=new zt(this.name,this.eShader,this.paletteIndex);for(const[t,n]of Object.entries(this.groups)){e.addGroup(t);for(const s of n){const r=new Me({eId:s.eId,name:s.name,value:s.value,min:s.min,max:s.max,step:s.step});e.groups[t].push(r)}}return e.uFloatPars=this.uFloatPars,e.setInputs(),e}}const zg="fractal-synth-audio",Pn="tracks";function _a(){return new Promise((i,e)=>{const t=indexedDB.open(zg,1);t.onupgradeneeded=()=>{const n=t.result;n.objectStoreNames.contains(Pn)||n.createObjectStore(Pn)},t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)})}class Qs{static async put(e,t,n){if(!t)return;const s=await _a();await new Promise((r,a)=>{const o=s.transaction(Pn,"readwrite");o.objectStore(Pn).put({blob:t,name:n},String(e)),o.oncomplete=()=>r(),o.onerror=()=>a(o.error)}),s.close()}static async get(e){const t=await _a(),n=await new Promise((s,r)=>{const o=t.transaction(Pn,"readonly").objectStore(Pn).get(String(e));o.onsuccess=()=>s(o.result||null),o.onerror=()=>r(o.error)});return t.close(),n}static async remove(e){const t=await _a();await new Promise(n=>{const s=t.transaction(Pn,"readwrite");s.objectStore(Pn).delete(String(e)),s.oncomplete=()=>n(),s.onerror=()=>n()}),t.close()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */function he(i){if(!i)throw new Error("Assertion failed.")}const Rn=i=>i&&i[i.length-1],Hi=i=>i>=0&&i<2**32;class Hn{constructor(e){this.bytes=e,this.pos=0}seekToByte(e){this.pos=8*e}readBit(){const e=Math.floor(this.pos/8),t=this.bytes[e]??0,n=7-(this.pos&7),s=(t&1<<n)>>n;return this.pos++,s}readBits(e){if(e===1)return this.readBit();let t=0;for(let n=0;n<e;n++)t<<=1,t|=this.readBit();return t}writeBits(e,t){const n=this.pos+e;for(let s=this.pos;s<n;s++){const r=Math.floor(s/8);let a=this.bytes[r];const o=7-(s&7);a&=~(1<<o),a|=(t&1<<n-s-1)>>n-s-1<<o,this.bytes[r]=a}this.pos=n}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");const e=this.pos/8,t=this.bytes[e]??0;return this.pos+=8,t}skipBits(e){this.pos+=e}getBitsLeft(){return this.bytes.length*8-this.pos}clone(){const e=new Hn(this.bytes);return e.pos=this.pos,e}}const se=i=>{let e=0;for(;i.readBits(1)===0&&e<32;)e++;if(e>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<e)-1+i.readBits(e)},Sn=i=>{const e=se(i);return e&1?e+1>>1:-(e>>1)},$i=i=>i.constructor===Uint8Array?i:ArrayBuffer.isView(i)?new Uint8Array(i.buffer,i.byteOffset,i.byteLength):new Uint8Array(i),Un=i=>i.constructor===DataView?i:ArrayBuffer.isView(i)?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(i),an=new TextEncoder,ja={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},qa={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},$a={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},Vg=i=>!!i&&!!i.primaries&&!!i.transfer&&!!i.matrix&&i.fullRange!==void 0,Ya=i=>i instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&i instanceof SharedArrayBuffer||ArrayBuffer.isView(i);class Lc{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e;const t=new Promise(s=>{let r=!1;e=()=>{r||(s(),this.pending--,r=!0)}}),n=this.currentPromise;return this.currentPromise=t,this.pending++,await n,e}}const Gg=()=>{let i,e;return{promise:new Promise((n,s)=>{i=n,e=s}),resolve:i,reject:e}},Ka=i=>{throw new Error(`Unexpected value: ${i}`)},Za=(i,e,t,n)=>{t=t>>>0,t=t&16777215,n?(i.setUint8(e,t&255),i.setUint8(e+1,t>>>8&255),i.setUint8(e+2,t>>>16&255)):(i.setUint8(e,t>>>16&255),i.setUint8(e+1,t>>>8&255),i.setUint8(e+2,t&255))},Hg=(i,e,t,n)=>{t=Rt(t,-8388608,8388607),t<0&&(t=t+16777216&16777215),Za(i,e,t,n)},Rt=(i,e,t)=>Math.max(e,Math.min(t,i)),Wg="und",Xg=/^[a-z]{3}$/,jg=i=>Xg.test(i),cr=1e6*(1+Number.EPSILON),qg=(i,e)=>{const t=i<0?-1:1;i=Math.abs(i);let n=0,s=1,r=1,a=0,o=i;for(;;){const l=Math.floor(o),c=l*r+n,u=l*a+s;if(u>e)return{numerator:t*r,denominator:a};if(n=r,s=a,r=c,a=u,o=1/(o-l),!isFinite(o))break}return{numerator:t*r,denominator:a}};class $g{constructor(){this.currentPromise=Promise.resolve()}call(e){return this.currentPromise=this.currentPromise.then(e)}}let va=null;const Yg=()=>{var i;return va!==null?va:va=!!(typeof navigator<"u"&&((i=navigator.vendor)!=null&&i.match(/apple/i)||/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)||/\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)))},Ic=function*(i){for(const e in i){const t=i[e];t!==void 0&&(yield{key:e,value:t})}},Kg=()=>{Symbol.dispose??(Symbol.dispose=Symbol("Symbol.dispose"))};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Fc{constructor(e,t){if(this.data=e,this.mimeType=t,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(typeof t!="string")throw new TypeError("mimeType must be a string.")}}class Zg{constructor(e,t,n,s){if(this.data=e,this.mimeType=t,this.name=n,this.description=s,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(t!==void 0&&typeof t!="string")throw new TypeError("mimeType, when provided, must be a string.");if(n!==void 0&&typeof n!="string")throw new TypeError("name, when provided, must be a string.");if(s!==void 0&&typeof s!="string")throw new TypeError("description, when provided, must be a string.")}}const Jg=i=>{if(!i||typeof i!="object")throw new TypeError("tags must be an object.");if(i.title!==void 0&&typeof i.title!="string")throw new TypeError("tags.title, when provided, must be a string.");if(i.description!==void 0&&typeof i.description!="string")throw new TypeError("tags.description, when provided, must be a string.");if(i.artist!==void 0&&typeof i.artist!="string")throw new TypeError("tags.artist, when provided, must be a string.");if(i.album!==void 0&&typeof i.album!="string")throw new TypeError("tags.album, when provided, must be a string.");if(i.albumArtist!==void 0&&typeof i.albumArtist!="string")throw new TypeError("tags.albumArtist, when provided, must be a string.");if(i.trackNumber!==void 0&&(!Number.isInteger(i.trackNumber)||i.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(i.tracksTotal!==void 0&&(!Number.isInteger(i.tracksTotal)||i.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(i.discNumber!==void 0&&(!Number.isInteger(i.discNumber)||i.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(i.discsTotal!==void 0&&(!Number.isInteger(i.discsTotal)||i.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(i.genre!==void 0&&typeof i.genre!="string")throw new TypeError("tags.genre, when provided, must be a string.");if(i.date!==void 0&&(!(i.date instanceof Date)||Number.isNaN(i.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(i.lyrics!==void 0&&typeof i.lyrics!="string")throw new TypeError("tags.lyrics, when provided, must be a string.");if(i.images!==void 0){if(!Array.isArray(i.images))throw new TypeError("tags.images, when provided, must be an array.");for(const e of i.images){if(!e||typeof e!="object")throw new TypeError("Each image in tags.images must be an object.");if(!(e.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if(typeof e.mimeType!="string")throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(e.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(i.comment!==void 0&&typeof i.comment!="string")throw new TypeError("tags.comment, when provided, must be a string.");if(i.raw!==void 0){if(!i.raw||typeof i.raw!="object")throw new TypeError("tags.raw, when provided, must be an object.");for(const e of Object.values(i.raw))if(e!==null&&typeof e!="string"&&!(e instanceof Uint8Array)&&!(e instanceof Fc)&&!(e instanceof Zg))throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, or null.")}},Qg=i=>{if(!i||typeof i!="object")throw new TypeError("disposition must be an object.");if(i.default!==void 0&&typeof i.default!="boolean")throw new TypeError("disposition.default must be a boolean.");if(i.forced!==void 0&&typeof i.forced!="boolean")throw new TypeError("disposition.forced must be a boolean.");if(i.original!==void 0&&typeof i.original!="boolean")throw new TypeError("disposition.original must be a boolean.");if(i.commentary!==void 0&&typeof i.commentary!="boolean")throw new TypeError("disposition.commentary must be a boolean.");if(i.hearingImpaired!==void 0&&typeof i.hearingImpaired!="boolean")throw new TypeError("disposition.hearingImpaired must be a boolean.");if(i.visuallyImpaired!==void 0&&typeof i.visuallyImpaired!="boolean")throw new TypeError("disposition.visuallyImpaired must be a boolean.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const ms=["avc","hevc","vp9","av1","vp8"],cn=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],Uc=["aac","opus","mp3","vorbis","flac"],Wi=[...Uc,...cn],ur=["webvtt"],Ol=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],e0=i=>{const e=i.split("."),t=1,n=1,s=(t<<7)+n,r=Number(e[1]),a=e[2],o=Number(a.slice(0,-1)),l=(r<<5)+o,c=a.slice(-1)==="H"?1:0,d=Number(e[3])===8?0:1,f=0,m=e[4]?Number(e[4]):0,g=e[5]?Number(e[5][0]):1,_=e[5]?Number(e[5][1]):1,p=e[5]?Number(e[5][2]):0,h=(c<<7)+(d<<6)+(f<<5)+(m<<4)+(g<<3)+(_<<2)+p;return[s,l,h,0]},t0=(i,e,t)=>{if(i==="aac")return e>=2&&t<=24e3?"mp4a.40.29":t<=24e3?"mp4a.40.5":"mp4a.40.2";if(i==="mp3")return"mp3";if(i==="opus")return"opus";if(i==="vorbis")return"vorbis";if(i==="flac")return"flac";if(cn.includes(i))return i;throw new TypeError(`Unhandled codec '${i}'.`)},dr=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],Ja=[-1,1,2,3,4,5,6,8],n0=i=>{if(!i||i.byteLength<2)throw new TypeError("AAC description must be at least 2 bytes long.");const e=new Hn(i);let t=e.readBits(5);t===31&&(t=32+e.readBits(6));const n=e.readBits(4);let s=null;n===15?s=e.readBits(24):n<dr.length&&(s=dr[n]);const r=e.readBits(4);let a=null;return r>=1&&r<=7&&(a=Ja[r]),{objectType:t,frequencyIndex:n,sampleRate:s,channelConfiguration:r,numberOfChannels:a}},Dc=i=>{let e=dr.indexOf(i.sampleRate),t=null;e===-1&&(e=15,t=i.sampleRate);const n=Ja.indexOf(i.numberOfChannels);if(n===-1)throw new TypeError(`Unsupported number of channels: ${i.numberOfChannels}`);let s=5+4+4;i.objectType>=32&&(s+=6),e===15&&(s+=24);const r=Math.ceil(s/8),a=new Uint8Array(r),o=new Hn(a);return i.objectType<32?o.writeBits(5,i.objectType):(o.writeBits(5,31),o.writeBits(6,i.objectType-32)),o.writeBits(4,e),e===15&&o.writeBits(24,t),o.writeBits(4,n),a},Nc=/^pcm-([usf])(\d+)+(be)?$/,Yi=i=>{if(he(cn.includes(i)),i==="ulaw")return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if(i==="alaw")return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const e=Nc.exec(i);he(e);let t;e[1]==="u"?t="unsigned":e[1]==="s"?t="signed":t="float";const n=Number(e[2])/8,s=e[3]!=="be",r=i==="pcm-u8"?2**7:0;return{dataType:t,sampleSize:n,littleEndian:s,silentValue:r}},i0=i=>i.startsWith("avc1")||i.startsWith("avc3")?"avc":i.startsWith("hev1")||i.startsWith("hvc1")?"hevc":i==="vp8"?"vp8":i.startsWith("vp09")?"vp9":i.startsWith("av01")?"av1":i.startsWith("mp4a.40")||i==="mp4a.67"?"aac":i==="mp3"||i==="mp4a.69"||i==="mp4a.6B"||i==="mp4a.6b"?"mp3":i==="opus"?"opus":i==="vorbis"?"vorbis":i==="flac"?"flac":i==="ulaw"?"ulaw":i==="alaw"?"alaw":Nc.test(i)?i:i==="webvtt"?"webvtt":null,s0=i=>i==="aac"?{aac:{format:"aac"}}:i==="opus"?{opus:{format:"opus"}}:{},r0=["avc1","avc3","hev1","hvc1","vp8","vp09","av01"],a0=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,o0=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,l0=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,c0=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,u0=i=>{if(!i)throw new TypeError("Video chunk metadata must be provided.");if(typeof i!="object")throw new TypeError("Video chunk metadata must be an object.");if(!i.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if(typeof i.decoderConfig!="object")throw new TypeError("Video chunk metadata decoder configuration must be an object.");if(typeof i.decoderConfig.codec!="string")throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!r0.some(e=>i.decoderConfig.codec.startsWith(e)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the WebCodecs Codec Registry.");if(!Number.isInteger(i.decoderConfig.codedWidth)||i.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(i.decoderConfig.codedHeight)||i.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(i.decoderConfig.description!==void 0&&!Ya(i.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(i.decoderConfig.colorSpace!==void 0){const{colorSpace:e}=i.decoderConfig;if(typeof e!="object")throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const t=Object.keys(ja);if(e.primaries!=null&&!t.includes(e.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${t.join(", ")}.`);const n=Object.keys(qa);if(e.transfer!=null&&!n.includes(e.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${n.join(", ")}.`);const s=Object.keys($a);if(e.matrix!=null&&!s.includes(e.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${s.join(", ")}.`);if(e.fullRange!=null&&typeof e.fullRange!="boolean")throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(i.decoderConfig.codec.startsWith("avc1")||i.decoderConfig.codec.startsWith("avc3")){if(!a0.test(i.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(i.decoderConfig.codec.startsWith("hev1")||i.decoderConfig.codec.startsWith("hvc1")){if(!o0.test(i.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(i.decoderConfig.codec.startsWith("vp8")){if(i.decoderConfig.codec!=="vp8")throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(i.decoderConfig.codec.startsWith("vp09")){if(!l0.test(i.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(i.decoderConfig.codec.startsWith("av01")&&!c0.test(i.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')},d0=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm"],h0=i=>{if(!i)throw new TypeError("Audio chunk metadata must be provided.");if(typeof i!="object")throw new TypeError("Audio chunk metadata must be an object.");if(!i.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if(typeof i.decoderConfig!="object")throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if(typeof i.decoderConfig.codec!="string")throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!d0.some(e=>i.decoderConfig.codec.startsWith(e)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the WebCodecs Codec Registry.");if(!Number.isInteger(i.decoderConfig.sampleRate)||i.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(i.decoderConfig.numberOfChannels)||i.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(i.decoderConfig.description!==void 0&&!Ya(i.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(i.decoderConfig.codec.startsWith("mp4a")&&i.decoderConfig.codec!=="mp4a.69"&&i.decoderConfig.codec!=="mp4a.6B"&&i.decoderConfig.codec!=="mp4a.6b"){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(i.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(i.decoderConfig.codec.startsWith("mp3")||i.decoderConfig.codec.startsWith("mp4a")){if(i.decoderConfig.codec!=="mp3"&&i.decoderConfig.codec!=="mp4a.69"&&i.decoderConfig.codec!=="mp4a.6B"&&i.decoderConfig.codec!=="mp4a.6b")throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(i.decoderConfig.codec.startsWith("opus")){if(i.decoderConfig.codec!=="opus")throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(i.decoderConfig.description&&i.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(i.decoderConfig.codec.startsWith("vorbis")){if(i.decoderConfig.codec!=="vorbis")throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!i.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(i.decoderConfig.codec.startsWith("flac")){if(i.decoderConfig.codec!=="flac")throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');const e=4+4+34;if(!i.decoderConfig.description||i.decoderConfig.description.byteLength<e)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if((i.decoderConfig.codec.startsWith("pcm")||i.decoderConfig.codec.startsWith("ulaw")||i.decoderConfig.codec.startsWith("alaw"))&&!cn.includes(i.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${cn.join(", ")}).`)},f0=i=>{if(!i)throw new TypeError("Subtitle metadata must be provided.");if(typeof i!="object")throw new TypeError("Subtitle metadata must be an object.");if(!i.config)throw new TypeError("Subtitle metadata must include a config object.");if(typeof i.config!="object")throw new TypeError("Subtitle metadata config must be an object.");if(typeof i.config.description!="string")throw new TypeError("Subtitle metadata config description must be a string.")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */var ds;(function(i){i[i.NON_IDR_SLICE=1]="NON_IDR_SLICE",i[i.SLICE_DPA=2]="SLICE_DPA",i[i.SLICE_DPB=3]="SLICE_DPB",i[i.SLICE_DPC=4]="SLICE_DPC",i[i.IDR=5]="IDR",i[i.SEI=6]="SEI",i[i.SPS=7]="SPS",i[i.PPS=8]="PPS",i[i.AUD=9]="AUD",i[i.SPS_EXT=13]="SPS_EXT"})(ds||(ds={}));var nn;(function(i){i[i.RASL_N=8]="RASL_N",i[i.RASL_R=9]="RASL_R",i[i.BLA_W_LP=16]="BLA_W_LP",i[i.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",i[i.VPS_NUT=32]="VPS_NUT",i[i.SPS_NUT=33]="SPS_NUT",i[i.PPS_NUT=34]="PPS_NUT",i[i.AUD_NUT=35]="AUD_NUT",i[i.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",i[i.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"})(nn||(nn={}));const Qa=function*(i){let e=0,t=-1;for(;e<i.length-2;){const n=i.indexOf(0,e);if(n===-1||n>=i.length-2)break;e=n;let s=0;if(e+3<i.length&&i[e+1]===0&&i[e+2]===0&&i[e+3]===1?s=4:i[e+1]===0&&i[e+2]===1&&(s=3),s===0){e++;continue}t!==-1&&e>t&&(yield{offset:t,length:e-t}),t=e+s,e=t}t!==-1&&t<i.length&&(yield{offset:t,length:i.length-t})},p0=i=>i&31,eo=i=>{const e=[],t=i.length;for(let n=0;n<t;n++)n+2<t&&i[n]===0&&i[n+1]===0&&i[n+2]===3?(e.push(0,0),n+=2):e.push(i[n]);return new Uint8Array(e)},m0=(i,e)=>{const t=i.reduce((r,a)=>r+e+a.byteLength,0),n=new Uint8Array(t);let s=0;for(const r of i){const a=new DataView(n.buffer,n.byteOffset,n.byteLength);switch(e){case 1:a.setUint8(s,r.byteLength);break;case 2:a.setUint16(s,r.byteLength,!1);break;case 3:Za(a,s,r.byteLength,!1);break;case 4:a.setUint32(s,r.byteLength,!1);break}s+=e,n.set(r,s),s+=r.byteLength}return n},g0=i=>{try{const e=[],t=[],n=[];for(const o of Qa(i)){const l=i.subarray(o.offset,o.offset+o.length),c=p0(l[0]);c===ds.SPS?e.push(l):c===ds.PPS?t.push(l):c===ds.SPS_EXT&&n.push(l)}if(e.length===0||t.length===0)return null;const s=e[0],r=v0(s);he(r!==null);const a=r.profileIdc===100||r.profileIdc===110||r.profileIdc===122||r.profileIdc===144;return{configurationVersion:1,avcProfileIndication:r.profileIdc,profileCompatibility:r.constraintFlags,avcLevelIndication:r.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:e,pictureParameterSets:t,chromaFormat:a?r.chromaFormatIdc:null,bitDepthLumaMinus8:a?r.bitDepthLumaMinus8:null,bitDepthChromaMinus8:a?r.bitDepthChromaMinus8:null,sequenceParameterSetExt:a?n:null}}catch(e){return console.error("Error building AVC Decoder Configuration Record:",e),null}},_0=i=>{const e=[];e.push(i.configurationVersion),e.push(i.avcProfileIndication),e.push(i.profileCompatibility),e.push(i.avcLevelIndication),e.push(252|i.lengthSizeMinusOne&3),e.push(224|i.sequenceParameterSets.length&31);for(const t of i.sequenceParameterSets){const n=t.byteLength;e.push(n>>8),e.push(n&255);for(let s=0;s<n;s++)e.push(t[s])}e.push(i.pictureParameterSets.length);for(const t of i.pictureParameterSets){const n=t.byteLength;e.push(n>>8),e.push(n&255);for(let s=0;s<n;s++)e.push(t[s])}if(i.avcProfileIndication===100||i.avcProfileIndication===110||i.avcProfileIndication===122||i.avcProfileIndication===144){he(i.chromaFormat!==null),he(i.bitDepthLumaMinus8!==null),he(i.bitDepthChromaMinus8!==null),he(i.sequenceParameterSetExt!==null),e.push(252|i.chromaFormat&3),e.push(248|i.bitDepthLumaMinus8&7),e.push(248|i.bitDepthChromaMinus8&7),e.push(i.sequenceParameterSetExt.length);for(const t of i.sequenceParameterSetExt){const n=t.byteLength;e.push(n>>8),e.push(n&255);for(let s=0;s<n;s++)e.push(t[s])}}return new Uint8Array(e)},v0=i=>{try{const e=new Hn(eo(i));if(e.skipBits(1),e.skipBits(2),e.readBits(5)!==7)return null;const n=e.readAlignedByte(),s=e.readAlignedByte(),r=e.readAlignedByte();se(e);let a=1,o=0,l=0,c=0;if((n===100||n===110||n===122||n===244||n===44||n===83||n===86||n===118||n===128)&&(a=se(e),a===3&&(c=e.readBits(1)),o=se(e),l=se(e),e.skipBits(1),e.readBits(1))){for(let k=0;k<(a!==3?8:12);k++)if(e.readBits(1)){const j=k<6?16:64;let P=8,F=8;for(let W=0;W<j;W++){if(F!==0){const H=Sn(e);F=(P+H+256)%256}P=F===0?P:F}}}se(e);const u=se(e);if(u===0)se(e);else if(u===1){e.skipBits(1),Sn(e),Sn(e);const w=se(e);for(let k=0;k<w;k++)Sn(e)}se(e),e.skipBits(1);const d=se(e),f=se(e),m=16*(d+1),g=16*(f+1);let _=m,p=g;const h=e.readBits(1);if(h||e.skipBits(1),e.skipBits(1),e.readBits(1)){const w=se(e),k=se(e),q=se(e),j=se(e);let P,F;if((c===0?a:0)===0)P=1,F=2-h;else{const H=a===3?1:2,J=a===1?2:1;P=H,F=J*(2-h)}_-=P*(w+k),p-=F*(q+j)}let y=2,b=2,T=2,C=0,A=null,O=null;if(e.readBits(1)){e.readBits(1)&&e.readBits(8)===255&&(e.skipBits(16),e.skipBits(16)),e.readBits(1)&&e.skipBits(1),e.readBits(1)&&(e.skipBits(3),C=e.readBits(1),e.readBits(1)&&(y=e.readBits(8),b=e.readBits(8),T=e.readBits(8))),e.readBits(1)&&(se(e),se(e)),e.readBits(1)&&(e.skipBits(32),e.skipBits(32),e.skipBits(1));const F=e.readBits(1);F&&kl(e);const W=e.readBits(1);W&&kl(e),(F||W)&&e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(1),se(e),se(e),se(e),se(e),A=se(e),O=se(e))}if(A===null){he(O===null);const w=s&16;if((n===44||n===86||n===100||n===110||n===122||n===244)&&w)A=0,O=0;else{const k=d+1,q=f+1,j=(2-h)*q,P=Ol.find(W=>W.level>=r)??Rn(Ol),F=Math.min(Math.floor(P.maxDpbMbs/(k*j)),16);A=F,O=F}}return he(O!==null),{profileIdc:n,constraintFlags:s,levelIdc:r,frameMbsOnlyFlag:h,chromaFormatIdc:a,bitDepthLumaMinus8:o,bitDepthChromaMinus8:l,codedWidth:m,codedHeight:g,displayWidth:_,displayHeight:p,colourPrimaries:y,matrixCoefficients:T,transferCharacteristics:b,fullRangeFlag:C,numReorderFrames:A,maxDecFrameBuffering:O}}catch(e){return console.error("Error parsing AVC SPS:",e),null}},kl=i=>{const e=se(i);i.skipBits(4),i.skipBits(4);for(let t=0;t<=e;t++)se(i),se(i),i.skipBits(1);i.skipBits(5),i.skipBits(5),i.skipBits(5),i.skipBits(5)},zl=i=>i>>1&63,x0=i=>{try{const e=new Hn(eo(i));e.skipBits(16),e.readBits(4);const t=e.readBits(3),n=e.readBits(1),{general_profile_space:s,general_tier_flag:r,general_profile_idc:a,general_profile_compatibility_flags:o,general_constraint_indicator_flags:l,general_level_idc:c}=S0(e,t);se(e);const u=se(e);let d=0;u===3&&(d=e.readBits(1));const f=se(e),m=se(e);let g=f,_=m;if(e.readBits(1)){const k=se(e),q=se(e),j=se(e),P=se(e);let F=1,W=1;const H=d===0?u:0;H===1?(F=2,W=2):H===2&&(F=2,W=1),g-=(k+q)*F,_-=(j+P)*W}const p=se(e),h=se(e);se(e);const y=e.readBits(1)?0:t;let b=0;for(let k=y;k<=t;k++)se(e),b=se(e),se(e);se(e),se(e),se(e),se(e),se(e),se(e),e.readBits(1)&&e.readBits(1)&&E0(e),e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(4),e.skipBits(4),se(e),se(e),e.skipBits(1));const T=se(e);if(b0(e,T),e.readBits(1)){const k=se(e);for(let q=0;q<k;q++)se(e),e.skipBits(1)}e.skipBits(1),e.skipBits(1);let C=2,A=2,O=2,x=0,w=0;if(e.readBits(1)){const k=M0(e,t);C=k.colourPrimaries,A=k.transferCharacteristics,O=k.matrixCoefficients,x=k.fullRangeFlag,w=k.minSpatialSegmentationIdc}return{displayWidth:g,displayHeight:_,colourPrimaries:C,transferCharacteristics:A,matrixCoefficients:O,fullRangeFlag:x,maxDecFrameBuffering:b+1,spsMaxSubLayersMinus1:t,spsTemporalIdNestingFlag:n,generalProfileSpace:s,generalTierFlag:r,generalProfileIdc:a,generalProfileCompatibilityFlags:o,generalConstraintIndicatorFlags:l,generalLevelIdc:c,chromaFormatIdc:u,bitDepthLumaMinus8:p,bitDepthChromaMinus8:h,minSpatialSegmentationIdc:w}}catch(e){return console.error("Error parsing HEVC SPS:",e),null}},y0=i=>{try{const e=[],t=[],n=[],s=[];for(const c of Qa(i)){const u=i.subarray(c.offset,c.offset+c.length),d=zl(u[0]);d===nn.VPS_NUT?e.push(u):d===nn.SPS_NUT?t.push(u):d===nn.PPS_NUT?n.push(u):(d===nn.PREFIX_SEI_NUT||d===nn.SUFFIX_SEI_NUT)&&s.push(u)}if(t.length===0||n.length===0)return null;const r=x0(t[0]);if(!r)return null;let a=0;if(n.length>0){const c=n[0],u=new Hn(eo(c));u.skipBits(16),se(u),se(u),u.skipBits(1),u.skipBits(1),u.skipBits(3),u.skipBits(1),u.skipBits(1),se(u),se(u),Sn(u),u.skipBits(1),u.skipBits(1),u.readBits(1)&&se(u),Sn(u),Sn(u),u.skipBits(1),u.skipBits(1),u.skipBits(1),u.skipBits(1);const d=u.readBits(1),f=u.readBits(1);!d&&!f?a=0:d&&!f?a=2:!d&&f?a=3:a=0}const o=[...e.length?[{arrayCompleteness:1,nalUnitType:nn.VPS_NUT,nalUnits:e}]:[],...t.length?[{arrayCompleteness:1,nalUnitType:nn.SPS_NUT,nalUnits:t}]:[],...n.length?[{arrayCompleteness:1,nalUnitType:nn.PPS_NUT,nalUnits:n}]:[],...s.length?[{arrayCompleteness:1,nalUnitType:zl(s[0][0]),nalUnits:s}]:[]];return{configurationVersion:1,generalProfileSpace:r.generalProfileSpace,generalTierFlag:r.generalTierFlag,generalProfileIdc:r.generalProfileIdc,generalProfileCompatibilityFlags:r.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:r.generalConstraintIndicatorFlags,generalLevelIdc:r.generalLevelIdc,minSpatialSegmentationIdc:r.minSpatialSegmentationIdc,parallelismType:a,chromaFormatIdc:r.chromaFormatIdc,bitDepthLumaMinus8:r.bitDepthLumaMinus8,bitDepthChromaMinus8:r.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:r.spsMaxSubLayersMinus1+1,temporalIdNested:r.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:o}}catch(e){return console.error("Error building HEVC Decoder Configuration Record:",e),null}},S0=(i,e)=>{const t=i.readBits(2),n=i.readBits(1),s=i.readBits(5);let r=0;for(let u=0;u<32;u++)r=r<<1|i.readBits(1);const a=new Uint8Array(6);for(let u=0;u<6;u++)a[u]=i.readBits(8);const o=i.readBits(8),l=[],c=[];for(let u=0;u<e;u++)l.push(i.readBits(1)),c.push(i.readBits(1));if(e>0)for(let u=e;u<8;u++)i.skipBits(2);for(let u=0;u<e;u++)l[u]&&i.skipBits(88),c[u]&&i.skipBits(8);return{general_profile_space:t,general_tier_flag:n,general_profile_idc:s,general_profile_compatibility_flags:r,general_constraint_indicator_flags:a,general_level_idc:o}},E0=i=>{for(let e=0;e<4;e++)for(let t=0;t<(e===3?2:6);t++)if(!i.readBits(1))se(i);else{const s=Math.min(64,1<<4+(e<<1));e>1&&Sn(i);for(let r=0;r<s;r++)Sn(i)}},b0=(i,e)=>{const t=[];for(let n=0;n<e;n++)t[n]=w0(i,n,e,t)},w0=(i,e,t,n)=>{let s=0,r=0,a=0;if(e!==0&&(r=i.readBits(1)),r){if(e===t){const l=se(i);a=e-(l+1)}else a=e-1;i.readBits(1),se(i);const o=n[a]??0;for(let l=0;l<=o;l++)i.readBits(1)||i.readBits(1);s=n[a]}else{const o=se(i),l=se(i);for(let c=0;c<o;c++)se(i),i.readBits(1);for(let c=0;c<l;c++)se(i),i.readBits(1);s=o+l}return s},M0=(i,e)=>{let t=2,n=2,s=2,r=0,a=0;return i.readBits(1)&&i.readBits(8)===255&&(i.readBits(16),i.readBits(16)),i.readBits(1)&&i.readBits(1),i.readBits(1)&&(i.readBits(3),r=i.readBits(1),i.readBits(1)&&(t=i.readBits(8),n=i.readBits(8),s=i.readBits(8))),i.readBits(1)&&(se(i),se(i)),i.readBits(1),i.readBits(1),i.readBits(1),i.readBits(1)&&(se(i),se(i),se(i),se(i)),i.readBits(1)&&(i.readBits(32),i.readBits(32),i.readBits(1)&&se(i),i.readBits(1)&&T0(i,!0,e)),i.readBits(1)&&(i.readBits(1),i.readBits(1),i.readBits(1),a=se(i),se(i),se(i),se(i),se(i)),{colourPrimaries:t,transferCharacteristics:n,matrixCoefficients:s,fullRangeFlag:r,minSpatialSegmentationIdc:a}},T0=(i,e,t)=>{let n=!1,s=!1,r=!1;e&&(n=i.readBits(1)===1,s=i.readBits(1)===1,(n||s)&&(r=i.readBits(1)===1,r&&(i.readBits(8),i.readBits(5),i.readBits(1),i.readBits(5)),i.readBits(4),i.readBits(4),r&&i.readBits(4),i.readBits(5),i.readBits(5),i.readBits(5)));for(let a=0;a<=t;a++){const o=i.readBits(1)===1;let l=!0;o||(l=i.readBits(1)===1);let c=!1;l?se(i):c=i.readBits(1)===1;let u=1;c||(u=se(i)+1),n&&Vl(i,u,r),s&&Vl(i,u,r)}},Vl=(i,e,t)=>{for(let n=0;n<e;n++)se(i),se(i),t&&(se(i),se(i)),i.readBits(1)},A0=i=>{const e=[];e.push(i.configurationVersion),e.push((i.generalProfileSpace&3)<<6|(i.generalTierFlag&1)<<5|i.generalProfileIdc&31),e.push(i.generalProfileCompatibilityFlags>>>24&255),e.push(i.generalProfileCompatibilityFlags>>>16&255),e.push(i.generalProfileCompatibilityFlags>>>8&255),e.push(i.generalProfileCompatibilityFlags&255),e.push(...i.generalConstraintIndicatorFlags),e.push(i.generalLevelIdc&255),e.push(240|i.minSpatialSegmentationIdc>>8&15),e.push(i.minSpatialSegmentationIdc&255),e.push(252|i.parallelismType&3),e.push(252|i.chromaFormatIdc&3),e.push(248|i.bitDepthLumaMinus8&7),e.push(248|i.bitDepthChromaMinus8&7),e.push(i.avgFrameRate>>8&255),e.push(i.avgFrameRate&255),e.push((i.constantFrameRate&3)<<6|(i.numTemporalLayers&7)<<3|(i.temporalIdNested&1)<<2|i.lengthSizeMinusOne&3),e.push(i.arrays.length&255);for(const t of i.arrays){e.push((t.arrayCompleteness&1)<<7|0|t.nalUnitType&63),e.push(t.nalUnits.length>>8&255),e.push(t.nalUnits.length&255);for(const n of t.nalUnits){e.push(n.length>>8&255),e.push(n.length&255);for(let s=0;s<n.length;s++)e.push(n[s])}}return new Uint8Array(e)},C0=i=>{const e=Un(i),t=e.getUint8(9),n=e.getUint16(10,!0),s=e.getUint32(12,!0),r=e.getInt16(16,!0),a=e.getUint8(18);let o=null;return a&&(o=i.subarray(19,19+2+t)),{outputChannelCount:t,preSkip:n,inputSampleRate:s,outputGain:r,channelMappingFamily:a,channelMappingTable:o}};var Gl;(function(i){i[i.STREAMINFO=0]="STREAMINFO",i[i.VORBIS_COMMENT=4]="VORBIS_COMMENT",i[i.PICTURE=6]="PICTURE"})(Gl||(Gl={}));/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const P0=[];/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const Hl=new Uint8Array(0);class On{constructor(e,t,n,s,r=-1,a,o){if(this.data=e,this.type=t,this.timestamp=n,this.duration=s,this.sequenceNumber=r,e===Hl&&a===void 0)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(a===void 0&&(a=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(t!=="key"&&t!=="delta")throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(n))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(s)||s<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(r))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(a)||a<0)throw new TypeError("byteLength must be a non-negative integer.");if(o!==void 0&&(typeof o!="object"||!o))throw new TypeError("sideData, when provided, must be an object.");if((o==null?void 0:o.alpha)!==void 0&&!(o.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if((o==null?void 0:o.alphaByteLength)!==void 0&&(!Number.isInteger(o.alphaByteLength)||o.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=a,this.sideData=o??{},this.sideData.alpha&&this.sideData.alphaByteLength===void 0&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===Hl}get microsecondTimestamp(){return Math.trunc(cr*this.timestamp)}get microsecondDuration(){return Math.trunc(cr*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if(typeof EncodedAudioChunk>"u")throw new Error("Your browser does not support EncodedAudioChunk.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,t){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const n=new Uint8Array(e.byteLength);return e.copyTo(n),new On(n,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,t)}clone(e){if(e!==void 0&&(typeof e!="object"||e===null))throw new TypeError("options, when provided, must be an object.");if((e==null?void 0:e.data)!==void 0&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if((e==null?void 0:e.type)!==void 0&&e.type!=="key"&&e.type!=="delta")throw new TypeError('options.type, when provided, must be either "key" or "delta".');if((e==null?void 0:e.timestamp)!==void 0&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if((e==null?void 0:e.duration)!==void 0&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if((e==null?void 0:e.sequenceNumber)!==void 0&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if((e==null?void 0:e.sideData)!==void 0&&(typeof e.sideData!="object"||e.sideData===null))throw new TypeError("options.sideData, when provided, must be an object.");return new On((e==null?void 0:e.data)??this.data,(e==null?void 0:e.type)??this.type,(e==null?void 0:e.timestamp)??this.timestamp,(e==null?void 0:e.duration)??this.duration,(e==null?void 0:e.sequenceNumber)??this.sequenceNumber,this.byteLength,(e==null?void 0:e.sideData)??this.sideData)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const R0=i=>{let n=i,s=4096,r=0,a=12,o=0;for(n<0&&(n=-n,r=128),n+=33,n>8191&&(n=8191);(n&s)!==s&&a>=5;)s>>=1,a--;return o=n>>a-4&15,~(r|a-5<<4|o)&255},L0=i=>{let t=2048,n=0,s=11,r=0,a=i;for(a<0&&(a=-a,n=128),a>4095&&(a=4095);(a&t)!==t&&s>=5;)t>>=1,s--;return r=a>>(s===4?1:s-4)&15,(n|s-4<<4|r)^85};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */Kg();let Wl=-1/0,Xl=-1/0,ei=null;typeof FinalizationRegistry<"u"&&(ei=new FinalizationRegistry(i=>{const e=Date.now();i.type==="video"?(e-Wl>=1e3&&(console.error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."),Wl=e),typeof VideoFrame<"u"&&i.data instanceof VideoFrame&&i.data.close()):(e-Xl>=1e3&&(console.error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."),Xl=e),typeof AudioData<"u"&&i.data instanceof AudioData&&i.data.close())}));const I0=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"];new Set(I0);const xa=new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]);class si{get microsecondTimestamp(){return Math.trunc(cr*this.timestamp)}get microsecondDuration(){return Math.trunc(cr*this.duration)}constructor(e){if(this._closed=!1,os(e)){if(e.format===null)throw new TypeError("AudioData with null format is not supported.");this._data=e,this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=e.numberOfFrames,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp/1e6,this.duration=e.numberOfFrames/e.sampleRate}else{if(!e||typeof e!="object")throw new TypeError("Invalid AudioDataInit: must be an object.");if(!xa.has(e.format))throw new TypeError("Invalid AudioDataInit: invalid format.");if(!Number.isFinite(e.sampleRate)||e.sampleRate<=0)throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");if(!Number.isInteger(e.numberOfChannels)||e.numberOfChannels===0)throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");if(!Number.isFinite(e==null?void 0:e.timestamp))throw new TypeError("init.timestamp must be a number.");const t=e.data.byteLength/(ii(e.format)*e.numberOfChannels);if(!Number.isInteger(t))throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=t,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp,this.duration=t/e.sampleRate;let n;if(e.data instanceof ArrayBuffer)n=new Uint8Array(e.data);else if(ArrayBuffer.isView(e.data))n=new Uint8Array(e.data.buffer,e.data.byteOffset,e.data.byteLength);else throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");const s=this.numberOfFrames*this.numberOfChannels*ii(this.format);if(n.byteLength<s)throw new TypeError("Invalid AudioDataInit: insufficient data size.");this._data=n}ei==null||ei.register(this,{type:"audio",data:this._data},this)}allocationSize(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(e.planeIndex)||e.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(e.format!==void 0&&!xa.has(e.format))throw new TypeError("Invalid format.");if(e.frameOffset!==void 0&&(!Number.isInteger(e.frameOffset)||e.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(e.frameCount!==void 0&&(!Number.isInteger(e.frameCount)||e.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const t=e.format??this.format,n=e.frameOffset??0;if(n>=this.numberOfFrames)throw new RangeError("frameOffset out of range");const s=e.frameCount!==void 0?e.frameCount:this.numberOfFrames-n;if(s>this.numberOfFrames-n)throw new RangeError("frameCount out of range");const r=ii(t),a=Ni(t);if(a&&e.planeIndex>=this.numberOfChannels)throw new RangeError("planeIndex out of range");if(!a&&e.planeIndex!==0)throw new RangeError("planeIndex out of range");return(a?s:s*this.numberOfChannels)*r}copyTo(e,t){if(!Ya(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(t.planeIndex)||t.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(t.format!==void 0&&!xa.has(t.format))throw new TypeError("Invalid format.");if(t.frameOffset!==void 0&&(!Number.isInteger(t.frameOffset)||t.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(t.frameCount!==void 0&&(!Number.isInteger(t.frameCount)||t.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");const{planeIndex:n,format:s,frameCount:r,frameOffset:a}=t,o=this.format,l=s??this.format;if(!l)throw new Error("Destination format not determined");const c=this.numberOfFrames,u=this.numberOfChannels,d=a??0;if(d>=c)throw new RangeError("frameOffset out of range");const f=r!==void 0?r:c-d;if(f>c-d)throw new RangeError("frameCount out of range");const m=ii(l),g=Ni(l);if(g&&n>=u)throw new RangeError("planeIndex out of range");if(!g&&n!==0)throw new RangeError("planeIndex out of range");const p=(g?f:f*u)*m;if(e.byteLength<p)throw new RangeError("Destination buffer is too small");const h=Un(e),E=Oc(l);if(os(this._data))Yg()&&u>2&&l!==o?F0(this._data,h,o,l,u,n,d,f):this._data.copyTo(e,{planeIndex:n,frameOffset:d,frameCount:f,format:l});else{const y=this._data,b=Un(y),T=Bc(o),C=ii(o),A=Ni(o);for(let O=0;O<f;O++)if(g){const x=O*m;let w;A?w=(n*c+(O+d))*C:w=((O+d)*u+n)*C;const k=T(b,w);E(h,x,k)}else for(let x=0;x<u;x++){const k=(O*u+x)*m;let q;A?q=(x*c+(O+d))*C:q=((O+d)*u+x)*C;const j=T(b,q);E(h,k,j)}}}clone(){if(this._closed)throw new Error("AudioSample is closed.");if(os(this._data)){const e=new si(this._data.clone());return e.setTimestamp(this.timestamp),e}else return new si({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp,data:this._data})}close(){this._closed||(ei==null||ei.unregister(this),os(this._data)?this._data.close():this._data=new Uint8Array(0),this._closed=!0)}toAudioData(){if(this._closed)throw new Error("AudioSample is closed.");if(os(this._data)){if(this._data.timestamp===this.microsecondTimestamp)return this._data.clone();if(Ni(this.format)){const e=this.allocationSize({planeIndex:0,format:this.format}),t=new ArrayBuffer(e*this.numberOfChannels);for(let n=0;n<this.numberOfChannels;n++)this.copyTo(new Uint8Array(t,n*e,e),{planeIndex:n,format:this.format});return new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:t})}else{const e=new ArrayBuffer(this.allocationSize({planeIndex:0,format:this.format}));return this.copyTo(e,{planeIndex:0,format:this.format}),new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:e})}}else return new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:this._data.buffer instanceof ArrayBuffer?this._data.buffer:this._data.slice()})}toAudioBuffer(){if(this._closed)throw new Error("AudioSample is closed.");const e=new AudioBuffer({numberOfChannels:this.numberOfChannels,length:this.numberOfFrames,sampleRate:this.sampleRate}),t=new Float32Array(this.allocationSize({planeIndex:0,format:"f32-planar"})/4);for(let n=0;n<this.numberOfChannels;n++)this.copyTo(t,{planeIndex:n,format:"f32-planar"}),e.copyToChannel(t,n);return e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}[Symbol.dispose](){this.close()}static*_fromAudioBuffer(e,t){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const n=48e3*5,s=e.numberOfChannels,r=e.sampleRate,a=e.length,o=Math.floor(n/s);let l=0,c=a;for(;c>0;){const u=Math.min(o,c),d=new Float32Array(s*u);for(let f=0;f<s;f++)e.copyFromChannel(d.subarray(f*u,(f+1)*u),f,l);yield new si({format:"f32-planar",sampleRate:r,numberOfFrames:u,numberOfChannels:s,timestamp:t+l/r,data:d}),l+=u,c-=u}}static fromAudioBuffer(e,t){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const n=48e3*5,s=e.numberOfChannels,r=e.sampleRate,a=e.length,o=Math.floor(n/s);let l=0,c=a;const u=[];for(;c>0;){const d=Math.min(o,c),f=new Float32Array(s*d);for(let g=0;g<s;g++)e.copyFromChannel(f.subarray(g*d,(g+1)*d),g,l);const m=new si({format:"f32-planar",sampleRate:r,numberOfFrames:d,numberOfChannels:s,timestamp:t+l/r,data:f});u.push(m),l+=d,c-=d}return u}}const ii=i=>{switch(i){case"u8":case"u8-planar":return 1;case"s16":case"s16-planar":return 2;case"s32":case"s32-planar":return 4;case"f32":case"f32-planar":return 4;default:throw new Error("Unknown AudioSampleFormat")}},Ni=i=>{switch(i){case"u8-planar":case"s16-planar":case"s32-planar":case"f32-planar":return!0;default:return!1}},Bc=i=>{switch(i){case"u8":case"u8-planar":return(e,t)=>(e.getUint8(t)-128)/128;case"s16":case"s16-planar":return(e,t)=>e.getInt16(t,!0)/32768;case"s32":case"s32-planar":return(e,t)=>e.getInt32(t,!0)/2147483648;case"f32":case"f32-planar":return(e,t)=>e.getFloat32(t,!0)}},Oc=i=>{switch(i){case"u8":case"u8-planar":return(e,t,n)=>e.setUint8(t,Rt((n+1)*127.5,0,255));case"s16":case"s16-planar":return(e,t,n)=>e.setInt16(t,Rt(Math.round(n*32767),-32768,32767),!0);case"s32":case"s32-planar":return(e,t,n)=>e.setInt32(t,Rt(Math.round(n*2147483647),-2147483648,2147483647),!0);case"f32":case"f32-planar":return(e,t,n)=>e.setFloat32(t,n,!0)}},os=i=>typeof AudioData<"u"&&i instanceof AudioData,F0=(i,e,t,n,s,r,a,o)=>{const l=Bc(t),c=Oc(n),u=ii(t),d=ii(n),f=Ni(t);if(Ni(n))if(f){const g=new ArrayBuffer(o*u),_=Un(g);i.copyTo(g,{planeIndex:r,frameOffset:a,frameCount:o,format:t});for(let p=0;p<o;p++){const h=p*u,E=p*d,y=l(_,h);c(e,E,y)}}else{const g=new ArrayBuffer(o*s*u),_=Un(g);i.copyTo(g,{planeIndex:0,frameOffset:a,frameCount:o,format:t});for(let p=0;p<o;p++){const h=(p*s+r)*u,E=p*d,y=l(_,h);c(e,E,y)}}else if(f){const g=o*u,_=new ArrayBuffer(g),p=Un(_);for(let h=0;h<s;h++){i.copyTo(_,{planeIndex:h,frameOffset:a,frameCount:o,format:t});for(let E=0;E<o;E++){const y=E*u,b=(E*s+h)*d,T=l(p,y);c(e,b,T)}}}else{const g=new ArrayBuffer(o*s*u),_=Un(g);i.copyTo(g,{planeIndex:0,frameOffset:a,frameCount:o,format:t});for(let p=0;p<o;p++)for(let h=0;h<s;h++){const E=p*s+h,y=E*u,b=E*d,T=l(_,y);c(e,b,T)}}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const U0=i=>{let t=(i.hasVideo?"video/":i.hasAudio?"audio/":"application/")+(i.isQuickTime?"quicktime":"mp4");if(i.codecStrings.length>0){const n=[...new Set(i.codecStrings)];t+=`; codecs="${n.join(", ")}"`}return t};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const ya=8,jl=16;/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const D0=7,N0=9,ql=i=>{const e=i.filePos,t=O0(i,9),n=new Hn(t);if(n.readBits(12)!==4095||(n.skipBits(1),n.readBits(2)!==0))return null;const a=n.readBits(1),o=n.readBits(2)+1,l=n.readBits(4);if(l===15)return null;n.skipBits(1);const c=n.readBits(3);if(c===0)throw new Error("ADTS frames with channel configuration 0 are not supported.");n.skipBits(1),n.skipBits(1),n.skipBits(1),n.skipBits(1);const u=n.readBits(13);n.skipBits(11);const d=n.readBits(2)+1;if(d!==1)throw new Error("ADTS frames with more than one AAC frame are not supported.");let f=null;return a===1?i.filePos-=2:f=n.readBits(16),{objectType:o,samplingFrequencyIndex:l,channelConfiguration:c,frameLength:u,numberOfAacFrames:d,crcCheck:f,startPos:e}};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class gs{constructor(e,t,n,s,r){this.bytes=e,this.view=t,this.offset=n,this.start=s,this.end=r,this.bufferPos=s-n}static tempFromBytes(e){return new gs(e,Un(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,t=this.end-e){if(e<this.start||e+t>this.end)throw new RangeError("Slicing outside of original slice.");return new gs(this.bytes,this.view,this.offset,e,e+t)}}const B0=(i,e)=>{if(i.filePos<i.start||i.filePos+e>i.end)throw new RangeError(`Tried reading [${i.filePos}, ${i.filePos+e}), but slice is [${i.start}, ${i.end}). This is likely an internal error, please report it alongside the file that caused it.`)},O0=(i,e)=>{B0(i,e);const t=i.bytes.subarray(i.bufferPos,i.bufferPos+e);return i.bufferPos+=e,t};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class k0{constructor(e){this.mutex=new Lc,this.firstMediaStreamTimestamp=null,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateAndNormalizeTimestamp(e,t,n){t+=e.source._timestampOffset;let s=this.trackTimestampInfo.get(e);if(!s){if(!n)throw new Error("First packet must be a key packet.");s={maxTimestamp:t,maxTimestampBeforeLastKeyPacket:t},this.trackTimestampInfo.set(e,s)}if(t<0)throw new Error(`Timestamps must be non-negative (got ${t}s).`);if(n&&(s.maxTimestampBeforeLastKeyPacket=s.maxTimestamp),t<s.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${t}s, but largest timestamp is ${s.maxTimestampBeforeLastKeyPacket}s.`);return s.maxTimestamp=Math.max(s.maxTimestamp,t),t}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const $l=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g,z0=i=>{const e=Math.floor(i/36e5),t=Math.floor(i%(60*60*1e3)/(60*1e3)),n=Math.floor(i%(60*1e3)/1e3),s=i%1e3;return e.toString().padStart(2,"0")+":"+t.toString().padStart(2,"0")+":"+n.toString().padStart(2,"0")+"."+s.toString().padStart(3,"0")};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Yl{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let t=0;t<e.length;t++)this.helperView.setUint8(t%8,e.charCodeAt(t)),t%8===7&&this.writer.write(this.helper);e.length%8!==0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{const t=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(const r of e.children)r&&this.writeBox(r);const n=this.writer.getPos(),s=e.size??n-t;this.writer.seek(t),this.writeBoxHeader(e,s),this.writer.seek(n)}}writeBoxHeader(e,t){this.writeU32(e.largeSize?1:t),this.writeAscii(e.type),e.largeSize&&this.writeU64(t)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){const t=this.offsets.get(e);he(t!==void 0);const n=this.writer.getPos();this.writer.seek(t),this.writeBox(e),this.writer.seek(n)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let t=this.measureBoxHeader(e);if(e.contents&&(t+=e.contents.byteLength),e.children)for(const n of e.children)n&&(t+=this.measureBox(n));return t}}}const je=new Uint8Array(8),un=new DataView(je.buffer),at=i=>[(i%256+256)%256],xe=i=>(un.setUint16(0,i,!1),[je[0],je[1]]),kc=i=>(un.setInt16(0,i,!1),[je[0],je[1]]),zc=i=>(un.setUint32(0,i,!1),[je[1],je[2],je[3]]),ne=i=>(un.setUint32(0,i,!1),[je[0],je[1],je[2],je[3]]),Ln=i=>(un.setInt32(0,i,!1),[je[0],je[1],je[2],je[3]]),ui=i=>(un.setUint32(0,Math.floor(i/2**32),!1),un.setUint32(4,i,!1),[je[0],je[1],je[2],je[3],je[4],je[5],je[6],je[7]]),Vc=i=>(un.setInt16(0,2**8*i,!1),[je[0],je[1]]),vn=i=>(un.setInt32(0,2**16*i,!1),[je[0],je[1],je[2],je[3]]),Sa=i=>(un.setInt32(0,2**30*i,!1),[je[0],je[1],je[2],je[3]]),Ea=(i,e)=>{const t=[];let n=i;do{let s=n&127;n>>=7,t.length>0&&(s|=128),t.push(s),e!==void 0&&e--}while(n>0||e);return t.reverse()},bt=(i,e=!1)=>{const t=Array(i.length).fill(null).map((n,s)=>i.charCodeAt(s));return e&&t.push(0),t},to=i=>{let e=null;for(const t of i)(!e||t.timestamp>e.timestamp)&&(e=t);return e},Gc=i=>{const e=i*(Math.PI/180),t=Math.round(Math.cos(e)),n=Math.round(Math.sin(e));return[t,n,0,-n,t,0,0,0,1]},Hc=Gc(0),Wc=i=>[vn(i[0]),vn(i[1]),Sa(i[2]),vn(i[3]),vn(i[4]),Sa(i[5]),vn(i[6]),vn(i[7]),Sa(i[8])],ye=(i,e,t)=>({type:i,contents:e&&new Uint8Array(e.flat(10)),children:t}),qe=(i,e,t,n,s)=>ye(i,[at(e),zc(t),n??[]],s),V0=i=>i.isQuickTime?ye("ftyp",[bt("qt  "),ne(512),bt("qt  ")]):i.fragmented?ye("ftyp",[bt("iso5"),ne(512),bt("iso5"),bt("iso6"),bt("mp41")]):ye("ftyp",[bt("isom"),ne(512),bt("isom"),i.holdsAvc?bt("avc1"):[],bt("mp41")]),er=i=>({type:"mdat",largeSize:i}),G0=i=>({type:"free",size:i}),ls=i=>ye("moov",void 0,[H0(i.creationTime,i.trackDatas),...i.trackDatas.map(e=>W0(e,i.creationTime)),i.isFragmented?M_(i.trackDatas):null,O_(i)]),H0=(i,e)=>{const t=gt(Math.max(0,...e.filter(a=>a.samples.length>0).map(a=>{const o=to(a.samples);return o.timestamp+o.duration})),ka),n=Math.max(0,...e.map(a=>a.track.id))+1,s=!Hi(i)||!Hi(t),r=s?ui:ne;return qe("mvhd",+s,0,[r(i),r(i),ne(ka),r(t),vn(1),Vc(1),Array(10).fill(0),Wc(Hc),Array(24).fill(0),ne(n)])},W0=(i,e)=>{const t=J_(i);return ye("trak",void 0,[X0(i,e),j0(i,e),t.name!==void 0?ye("udta",void 0,[ye("name",[...an.encode(t.name)])]):null])},X0=(i,e)=>{var l;const t=to(i.samples),n=gt(t?t.timestamp+t.duration:0,ka),s=!Hi(e)||!Hi(n),r=s?ui:ne;let a;if(i.type==="video"){const c=i.track.metadata.rotation;a=Gc(c??0)}else a=Hc;let o=2;return((l=i.track.metadata.disposition)==null?void 0:l.default)!==!1&&(o|=1),qe("tkhd",+s,o,[r(e),r(e),ne(i.track.id),ne(0),r(n),Array(8).fill(0),xe(0),xe(i.track.id),Vc(i.type==="audio"?1:0),xe(0),Wc(a),vn(i.type==="video"?i.info.width:0),vn(i.type==="video"?i.info.height:0)])},j0=(i,e)=>ye("mdia",void 0,[q0(i,e),no(!0,$0[i.type],Y0[i.type]),K0(i)]),q0=(i,e)=>{const t=to(i.samples),n=gt(t?t.timestamp+t.duration:0,i.timescale),s=!Hi(e)||!Hi(n),r=s?ui:ne;return qe("mdhd",+s,0,[r(e),r(e),ne(i.timescale),r(n),xe($c(i.track.metadata.languageCode??Wg)),xe(0)])},$0={video:"vide",audio:"soun",subtitle:"text"},Y0={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},no=(i,e,t,n="\0\0\0\0")=>qe("hdlr",0,0,[i?bt("mhlr"):ne(0),bt(e),bt(n),ne(0),ne(0),bt(t,!0)]),K0=i=>ye("minf",void 0,[e_[i.type](),t_(),s_(i)]),Z0=()=>qe("vmhd",0,1,[xe(0),xe(0),xe(0),xe(0)]),J0=()=>qe("smhd",0,0,[xe(0),xe(0)]),Q0=()=>qe("nmhd",0,0),e_={video:Z0,audio:J0,subtitle:Q0},t_=()=>ye("dinf",void 0,[n_()]),n_=()=>qe("dref",0,0,[ne(1)],[i_()]),i_=()=>qe("url ",0,1),s_=i=>{const e=i.compositionTimeOffsetTable.length>1||i.compositionTimeOffsetTable.some(t=>t.sampleCompositionTimeOffset!==0);return ye("stbl",void 0,[r_(i),v_(i),e?b_(i):null,e?w_(i):null,y_(i),S_(i),E_(i),x_(i)])},r_=i=>{let e;if(i.type==="video")e=a_(G_(i.track.source._codec,i.info.decoderConfig.codec),i);else if(i.type==="audio"){const t=qc(i.track.source._codec,i.muxer.isQuickTime);he(t),e=d_(t,i)}else i.type==="subtitle"&&(e=g_(X_[i.track.source._codec],i));return he(e),qe("stsd",0,0,[ne(1)],[e])},a_=(i,e)=>ye(i,[Array(6).fill(0),xe(1),xe(0),xe(0),Array(12).fill(0),xe(e.info.width),xe(e.info.height),ne(4718592),ne(4718592),ne(0),xe(1),Array(32).fill(0),xe(24),kc(65535)],[H_[e.track.source._codec](e),Vg(e.info.decoderConfig.colorSpace)?o_(e):null]),o_=i=>ye("colr",[bt("nclx"),xe(ja[i.info.decoderConfig.colorSpace.primaries]),xe(qa[i.info.decoderConfig.colorSpace.transfer]),xe($a[i.info.decoderConfig.colorSpace.matrix]),at((i.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),l_=i=>i.info.decoderConfig&&ye("avcC",[...$i(i.info.decoderConfig.description)]),c_=i=>i.info.decoderConfig&&ye("hvcC",[...$i(i.info.decoderConfig.description)]),Kl=i=>{var f,m,g,_;if(!i.info.decoderConfig)return null;const e=i.info.decoderConfig,t=e.codec.split("."),n=Number(t[1]),s=Number(t[2]),r=Number(t[3]),a=t[4]?Number(t[4]):1,o=t[8]?Number(t[8]):Number(((f=e.colorSpace)==null?void 0:f.fullRange)??0),l=(r<<4)+(a<<1)+o,c=t[5]?Number(t[5]):(m=e.colorSpace)!=null&&m.primaries?ja[e.colorSpace.primaries]:2,u=t[6]?Number(t[6]):(g=e.colorSpace)!=null&&g.transfer?qa[e.colorSpace.transfer]:2,d=t[7]?Number(t[7]):(_=e.colorSpace)!=null&&_.matrix?$a[e.colorSpace.matrix]:2;return qe("vpcC",1,0,[at(n),at(s),at(l),at(c),at(u),at(d),xe(0)])},u_=i=>ye("av1C",e0(i.info.decoderConfig.codec)),d_=(i,e)=>{var r;let t=0,n,s=16;if(cn.includes(e.track.source._codec)){const a=e.track.source._codec,{sampleSize:o}=Yi(a);s=8*o,s>16&&(t=1)}return t===0?n=[Array(6).fill(0),xe(1),xe(t),xe(0),ne(0),xe(e.info.numberOfChannels),xe(s),xe(0),xe(0),xe(e.info.sampleRate<2**16?e.info.sampleRate:0),xe(0)]:n=[Array(6).fill(0),xe(1),xe(t),xe(0),ne(0),xe(e.info.numberOfChannels),xe(Math.min(s,16)),xe(0),xe(0),xe(e.info.sampleRate<2**16?e.info.sampleRate:0),xe(0),ne(1),ne(s/8),ne(e.info.numberOfChannels*s/8),ne(2)],ye(i,n,[((r=W_(e.track.source._codec,e.muxer.isQuickTime))==null?void 0:r(e))??null])},ba=i=>{let e;switch(i.track.source._codec){case"aac":e=64;break;case"mp3":e=107;break;case"vorbis":e=221;break;default:throw new Error(`Unhandled audio codec: ${i.track.source._codec}`)}let t=[...at(e),...at(21),...zc(0),...ne(0),...ne(0)];if(i.info.decoderConfig.description){const n=$i(i.info.decoderConfig.description);t=[...t,...at(5),...Ea(n.byteLength),...n]}return t=[...xe(1),...at(0),...at(4),...Ea(t.length),...t,...at(6),...at(1),...at(2)],t=[...at(3),...Ea(t.length),...t],qe("esds",0,0,t)},Cn=i=>ye("wave",void 0,[h_(i),f_(i),ye("\0\0\0\0")]),h_=i=>ye("frma",[bt(qc(i.track.source._codec,i.muxer.isQuickTime))]),f_=i=>{const{littleEndian:e}=Yi(i.track.source._codec);return ye("enda",[xe(+e)])},p_=i=>{var l;let e=i.info.numberOfChannels,t=3840,n=i.info.sampleRate,s=0,r=0,a=new Uint8Array(0);const o=(l=i.info.decoderConfig)==null?void 0:l.description;if(o){he(o.byteLength>=18);const c=$i(o),u=C0(c);e=u.outputChannelCount,t=u.preSkip,n=u.inputSampleRate,s=u.outputGain,r=u.channelMappingFamily,u.channelMappingTable&&(a=u.channelMappingTable)}return ye("dOps",[at(0),at(e),xe(t),ne(n),kc(s),at(r),...a])},m_=i=>{var n;const e=(n=i.info.decoderConfig)==null?void 0:n.description;he(e);const t=$i(e);return qe("dfLa",0,0,[...t.subarray(4)])},en=i=>{const{littleEndian:e,sampleSize:t}=Yi(i.track.source._codec),n=+e;return qe("pcmC",0,0,[at(n),at(8*t)])},g_=(i,e)=>ye(i,[Array(6).fill(0),xe(1)],[j_[e.track.source._codec](e)]),__=i=>ye("vttC",[...an.encode(i.info.config.description)]),v_=i=>qe("stts",0,0,[ne(i.timeToSampleTable.length),i.timeToSampleTable.map(e=>[ne(e.sampleCount),ne(e.sampleDelta)])]),x_=i=>{if(i.samples.every(t=>t.type==="key"))return null;const e=[...i.samples.entries()].filter(([,t])=>t.type==="key");return qe("stss",0,0,[ne(e.length),e.map(([t])=>ne(t+1))])},y_=i=>qe("stsc",0,0,[ne(i.compactlyCodedChunkTable.length),i.compactlyCodedChunkTable.map(e=>[ne(e.firstChunk),ne(e.samplesPerChunk),ne(1)])]),S_=i=>{if(i.type==="audio"&&i.info.requiresPcmTransformation){const{sampleSize:e}=Yi(i.track.source._codec);return qe("stsz",0,0,[ne(e*i.info.numberOfChannels),ne(i.samples.reduce((t,n)=>t+gt(n.duration,i.timescale),0))])}return qe("stsz",0,0,[ne(0),ne(i.samples.length),i.samples.map(e=>ne(e.size))])},E_=i=>i.finalizedChunks.length>0&&Rn(i.finalizedChunks).offset>=2**32?qe("co64",0,0,[ne(i.finalizedChunks.length),i.finalizedChunks.map(e=>ui(e.offset))]):qe("stco",0,0,[ne(i.finalizedChunks.length),i.finalizedChunks.map(e=>ne(e.offset))]),b_=i=>qe("ctts",1,0,[ne(i.compositionTimeOffsetTable.length),i.compositionTimeOffsetTable.map(e=>[ne(e.sampleCount),Ln(e.sampleCompositionTimeOffset)])]),w_=i=>{let e=1/0,t=-1/0,n=1/0,s=-1/0;he(i.compositionTimeOffsetTable.length>0),he(i.samples.length>0);for(let a=0;a<i.compositionTimeOffsetTable.length;a++){const o=i.compositionTimeOffsetTable[a];e=Math.min(e,o.sampleCompositionTimeOffset),t=Math.max(t,o.sampleCompositionTimeOffset)}for(let a=0;a<i.samples.length;a++){const o=i.samples[a];n=Math.min(n,gt(o.timestamp,i.timescale)),s=Math.max(s,gt(o.timestamp+o.duration,i.timescale))}const r=Math.max(-e,0);return s>=2**31?null:qe("cslg",0,0,[Ln(r),Ln(e),Ln(t),Ln(n),Ln(s)])},M_=i=>ye("mvex",void 0,i.map(T_)),T_=i=>qe("trex",0,0,[ne(i.track.id),ne(1),ne(0),ne(0),ne(0)]),Zl=(i,e)=>ye("moof",void 0,[A_(i),...e.map(C_)]),A_=i=>qe("mfhd",0,0,[ne(i)]),Xc=i=>{let e=0,t=0;const n=0,s=0,r=i.type==="delta";return t|=+r,r?e|=1:e|=2,e<<24|t<<16|n<<8|s},C_=i=>ye("traf",void 0,[P_(i),R_(i),L_(i)]),P_=i=>{he(i.currentChunk);let e=0;e|=8,e|=16,e|=32,e|=131072;const t=i.currentChunk.samples[1]??i.currentChunk.samples[0],n={duration:t.timescaleUnitsToNextSample,size:t.size,flags:Xc(t)};return qe("tfhd",0,e,[ne(i.track.id),ne(n.duration),ne(n.size),ne(n.flags)])},R_=i=>(he(i.currentChunk),qe("tfdt",1,0,[ui(gt(i.currentChunk.startTimestamp,i.timescale))])),L_=i=>{he(i.currentChunk);const e=i.currentChunk.samples.map(_=>_.timescaleUnitsToNextSample),t=i.currentChunk.samples.map(_=>_.size),n=i.currentChunk.samples.map(Xc),s=i.currentChunk.samples.map(_=>gt(_.timestamp-_.decodeTimestamp,i.timescale)),r=new Set(e),a=new Set(t),o=new Set(n),l=new Set(s),c=o.size===2&&n[0]!==n[1],u=r.size>1,d=a.size>1,f=!c&&o.size>1,m=l.size>1||[...l].some(_=>_!==0);let g=0;return g|=1,g|=4*+c,g|=256*+u,g|=512*+d,g|=1024*+f,g|=2048*+m,qe("trun",1,g,[ne(i.currentChunk.samples.length),ne(i.currentChunk.offset-i.currentChunk.moofOffset||0),c?ne(n[0]):[],i.currentChunk.samples.map((_,p)=>[u?ne(e[p]):[],d?ne(t[p]):[],f?ne(n[p]):[],m?Ln(s[p]):[]])])},I_=i=>ye("mfra",void 0,[...i.map(F_),U_()]),F_=(i,e)=>qe("tfra",1,0,[ne(i.track.id),ne(63),ne(i.finalizedChunks.length),i.finalizedChunks.map(n=>[ui(gt(n.samples[0].timestamp,i.timescale)),ui(n.moofOffset),ne(e+1),ne(1),ne(1)])]),U_=()=>qe("mfro",0,0,[ne(0)]),D_=()=>ye("vtte"),N_=(i,e,t,n,s)=>ye("vttc",void 0,[s!==null?ye("vsid",[Ln(s)]):null,t!==null?ye("iden",[...an.encode(t)]):null,e!==null?ye("ctim",[...an.encode(z0(e))]):null,n!==null?ye("sttg",[...an.encode(n)]):null,ye("payl",[...an.encode(i)])]),B_=i=>ye("vtta",[...an.encode(i)]),O_=i=>{const e=[],t=i.format._options.metadataFormat??"auto",n=i.output._metadataTags;if(t==="mdir"||t==="auto"&&!i.isQuickTime){const s=z_(n);s&&e.push(s)}else if(t==="mdta"){const s=V_(n);s&&e.push(s)}else(t==="udta"||t==="auto"&&i.isQuickTime)&&k_(e,i.output._metadataTags);return e.length===0?null:ye("udta",void 0,e)},k_=(i,e)=>{for(const{key:t,value:n}of Ic(e))switch(t){case"title":i.push(tn("©nam",n));break;case"description":i.push(tn("©des",n));break;case"artist":i.push(tn("©ART",n));break;case"album":i.push(tn("©alb",n));break;case"albumArtist":i.push(tn("albr",n));break;case"genre":i.push(tn("©gen",n));break;case"date":i.push(tn("©day",n.toISOString().slice(0,10)));break;case"comment":i.push(tn("©cmt",n));break;case"lyrics":i.push(tn("©lyr",n));break;case"raw":break;case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"images":break;default:Ka(t)}if(e.raw)for(const t in e.raw){const n=e.raw[t];n==null||t.length!==4||i.some(s=>s.type===t)||(typeof n=="string"?i.push(tn(t,n)):n instanceof Uint8Array&&i.push(ye(t,Array.from(n))))}},tn=(i,e)=>{const t=an.encode(e);return ye(i,[xe(t.length),xe($c("und")),Array.from(t)])},Jl={"image/jpeg":13,"image/png":14,"image/bmp":27},jc=(i,e)=>{const t=[];for(const{key:n,value:s}of Ic(i))switch(n){case"title":t.push({key:e?"title":"©nam",value:$t(s)});break;case"description":t.push({key:e?"description":"©des",value:$t(s)});break;case"artist":t.push({key:e?"artist":"©ART",value:$t(s)});break;case"album":t.push({key:e?"album":"©alb",value:$t(s)});break;case"albumArtist":t.push({key:e?"album_artist":"aART",value:$t(s)});break;case"comment":t.push({key:e?"comment":"©cmt",value:$t(s)});break;case"genre":t.push({key:e?"genre":"©gen",value:$t(s)});break;case"lyrics":t.push({key:e?"lyrics":"©lyr",value:$t(s)});break;case"date":t.push({key:e?"date":"©day",value:$t(s.toISOString().slice(0,10))});break;case"images":for(const r of s)r.kind==="coverFront"&&t.push({key:"covr",value:ye("data",[ne(Jl[r.mimeType]??0),ne(0),Array.from(r.data)])});break;case"trackNumber":if(e){const r=i.tracksTotal!==void 0?`${s}/${i.tracksTotal}`:s.toString();t.push({key:"track",value:$t(r)})}else t.push({key:"trkn",value:ye("data",[ne(0),ne(0),xe(0),xe(s),xe(i.tracksTotal??0),xe(0)])});break;case"discNumber":e||t.push({key:"disc",value:ye("data",[ne(0),ne(0),xe(0),xe(s),xe(i.discsTotal??0),xe(0)])});break;case"tracksTotal":case"discsTotal":break;case"raw":break;default:Ka(n)}if(i.raw)for(const n in i.raw){const s=i.raw[n];s==null||!e&&n.length!==4||t.some(r=>r.key===n)||(typeof s=="string"?t.push({key:n,value:$t(s)}):s instanceof Uint8Array?t.push({key:n,value:ye("data",[ne(0),ne(0),Array.from(s)])}):s instanceof Fc&&t.push({key:n,value:ye("data",[ne(Jl[s.mimeType]??0),ne(0),Array.from(s.data)])}))}return t},z_=i=>{const e=jc(i,!1);return e.length===0?null:qe("meta",0,0,void 0,[no(!1,"mdir","","appl"),ye("ilst",void 0,e.map(t=>ye(t.key,void 0,[t.value])))])},V_=i=>{const e=jc(i,!0);return e.length===0?null:ye("meta",void 0,[no(!1,"mdta",""),qe("keys",0,0,[ne(e.length)],e.map(t=>ye("mdta",[...an.encode(t.key)]))),ye("ilst",void 0,e.map((t,n)=>{const s=String.fromCharCode(...ne(n+1));return ye(s,void 0,[t.value])}))])},$t=i=>ye("data",[ne(1),ne(0),...an.encode(i)]),G_=(i,e)=>{switch(i){case"avc":return e.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01"}},H_={avc:l_,hevc:c_,vp8:Kl,vp9:Kl,av1:u_},qc=(i,e)=>{switch(i){case"aac":return"mp4a";case"mp3":return"mp4a";case"opus":return"Opus";case"vorbis":return"mp4a";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt"}if(e)switch(i){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":return"in24";case"pcm-s24be":return"in24";case"pcm-s32":return"in32";case"pcm-s32be":return"in32";case"pcm-f32":return"fl32";case"pcm-f32be":return"fl32";case"pcm-f64":return"fl64";case"pcm-f64be":return"fl64"}else switch(i){case"pcm-s16":return"ipcm";case"pcm-s16be":return"ipcm";case"pcm-s24":return"ipcm";case"pcm-s24be":return"ipcm";case"pcm-s32":return"ipcm";case"pcm-s32be":return"ipcm";case"pcm-f32":return"fpcm";case"pcm-f32be":return"fpcm";case"pcm-f64":return"fpcm";case"pcm-f64be":return"fpcm"}},W_=(i,e)=>{switch(i){case"aac":return ba;case"mp3":return ba;case"opus":return p_;case"vorbis":return ba;case"flac":return m_}if(e)switch(i){case"pcm-s24":return Cn;case"pcm-s24be":return Cn;case"pcm-s32":return Cn;case"pcm-s32be":return Cn;case"pcm-f32":return Cn;case"pcm-f32be":return Cn;case"pcm-f64":return Cn;case"pcm-f64be":return Cn}else switch(i){case"pcm-s16":return en;case"pcm-s16be":return en;case"pcm-s24":return en;case"pcm-s24be":return en;case"pcm-s32":return en;case"pcm-s32be":return en;case"pcm-f32":return en;case"pcm-f32be":return en;case"pcm-f64":return en;case"pcm-f64be":return en}return null},X_={webvtt:"wvtt"},j_={webvtt:__},$c=i=>{he(i.length===3);let e=0;for(let t=0;t<3;t++)e<<=5,e+=i.charCodeAt(t)-96;return e};/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Yc{constructor(){this.ensureMonotonicity=!1,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1}start(){}maybeTrackWrites(e){if(!this.trackedWrites)return;let t=this.getPos();if(t<this.trackedStart){if(t+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-t),t=0}const n=t+e.byteLength-this.trackedStart;let s=this.trackedWrites.byteLength;for(;s<n;)s*=2;if(s!==this.trackedWrites.byteLength){const r=new Uint8Array(s);r.set(this.trackedWrites,0),this.trackedWrites=r}this.trackedWrites.set(e,t-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,t+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(2**10),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");const t={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,t}}const wa=2**16,Ma=2**32;class Kc extends Yc{constructor(e){if(super(),this.pos=0,this.maxPos=0,this.target=e,this.supportsResize="resize"in new ArrayBuffer(0),this.supportsResize)try{this.buffer=new ArrayBuffer(wa,{maxByteLength:Ma})}catch{this.buffer=new ArrayBuffer(wa),this.supportsResize=!1}else this.buffer=new ArrayBuffer(wa);this.bytes=new Uint8Array(this.buffer)}ensureSize(e){let t=this.buffer.byteLength;for(;t<e;)t*=2;if(t!==this.buffer.byteLength){if(t>Ma)throw new Error(`ArrayBuffer exceeded maximum size of ${Ma} bytes. Please consider using another target.`);if(this.supportsResize)this.buffer.resize(t);else{const n=new ArrayBuffer(t),s=new Uint8Array(n);s.set(this.bytes,0),this.buffer=n,this.bytes=s}}}write(e){var t,n;this.maybeTrackWrites(e),this.ensureSize(this.pos+e.byteLength),this.bytes.set(e,this.pos),(n=(t=this.target).onwrite)==null||n.call(t,this.pos,this.pos+e.byteLength),this.pos+=e.byteLength,this.maxPos=Math.max(this.maxPos,this.pos)}seek(e){this.pos=e}getPos(){return this.pos}async flush(){}async finalize(){this.ensureSize(this.pos),this.target.buffer=this.buffer.slice(0,Math.max(this.maxPos,this.pos))}async close(){}getSlice(e,t){return this.bytes.slice(e,t)}}const q_=2**24,$_=2;class Y_ extends Yc{constructor(e){super(),this.pos=0,this.sections=[],this.lastWriteEnd=0,this.lastFlushEnd=0,this.writer=null,this.chunks=[],this.target=e,this.chunked=e._options.chunked??!1,this.chunkSize=e._options.chunkSize??q_}start(){this.writer=this.target._writable.getWriter()}write(e){var t,n;if(this.pos>this.lastWriteEnd){const s=this.pos-this.lastWriteEnd;this.pos=this.lastWriteEnd,this.write(new Uint8Array(s))}this.maybeTrackWrites(e),this.sections.push({data:e.slice(),start:this.pos}),(n=(t=this.target).onwrite)==null||n.call(t,this.pos,this.pos+e.byteLength),this.pos+=e.byteLength,this.lastWriteEnd=Math.max(this.lastWriteEnd,this.pos)}seek(e){this.pos=e}getPos(){return this.pos}async flush(){if(this.pos>this.lastWriteEnd){const n=this.pos-this.lastWriteEnd;this.pos=this.lastWriteEnd,this.write(new Uint8Array(n))}if(he(this.writer),this.sections.length===0)return;const e=[],t=[...this.sections].sort((n,s)=>n.start-s.start);e.push({start:t[0].start,size:t[0].data.byteLength});for(let n=1;n<t.length;n++){const s=e[e.length-1],r=t[n];r.start<=s.start+s.size?s.size=Math.max(s.size,r.start+r.data.byteLength-s.start):e.push({start:r.start,size:r.data.byteLength})}for(const n of e){n.data=new Uint8Array(n.size);for(const s of this.sections)n.start<=s.start&&s.start<n.start+n.size&&n.data.set(s.data,s.start-n.start);if(this.writer.desiredSize!==null&&this.writer.desiredSize<=0&&await this.writer.ready,this.chunked)this.writeDataIntoChunks(n.data,n.start),this.tryToFlushChunks();else{if(this.ensureMonotonicity&&n.start!==this.lastFlushEnd)throw new Error("Internal error: Monotonicity violation.");this.writer.write({type:"write",data:n.data,position:n.start}),this.lastFlushEnd=n.start+n.data.byteLength}}this.sections.length=0}writeDataIntoChunks(e,t){let n=this.chunks.findIndex(l=>l.start<=t&&t<l.start+this.chunkSize);n===-1&&(n=this.createChunk(t));const s=this.chunks[n],r=t-s.start,a=e.subarray(0,Math.min(this.chunkSize-r,e.byteLength));s.data.set(a,r);const o={start:r,end:r+a.byteLength};if(this.insertSectionIntoChunk(s,o),s.written[0].start===0&&s.written[0].end===this.chunkSize&&(s.shouldFlush=!0),this.chunks.length>$_){for(let l=0;l<this.chunks.length-1;l++)this.chunks[l].shouldFlush=!0;this.tryToFlushChunks()}a.byteLength<e.byteLength&&this.writeDataIntoChunks(e.subarray(a.byteLength),t+a.byteLength)}insertSectionIntoChunk(e,t){let n=0,s=e.written.length-1,r=-1;for(;n<=s;){const a=Math.floor(n+(s-n+1)/2);e.written[a].start<=t.start?(n=a+1,r=a):s=a-1}for(e.written.splice(r+1,0,t),(r===-1||e.written[r].end<t.start)&&r++;r<e.written.length-1&&e.written[r].end>=e.written[r+1].start;)e.written[r].end=Math.max(e.written[r].end,e.written[r+1].end),e.written.splice(r+1,1)}createChunk(e){const n={start:Math.floor(e/this.chunkSize)*this.chunkSize,data:new Uint8Array(this.chunkSize),written:[],shouldFlush:!1};return this.chunks.push(n),this.chunks.sort((s,r)=>s.start-r.start),this.chunks.indexOf(n)}tryToFlushChunks(e=!1){he(this.writer);for(let t=0;t<this.chunks.length;t++){const n=this.chunks[t];if(!(!n.shouldFlush&&!e)){for(const s of n.written){const r=n.start+s.start;if(this.ensureMonotonicity&&r!==this.lastFlushEnd)throw new Error("Internal error: Monotonicity violation.");this.writer.write({type:"write",data:n.data.subarray(s.start,s.end),position:r}),this.lastFlushEnd=n.start+s.end}this.chunks.splice(t--,1)}}}finalize(){return this.chunked&&this.tryToFlushChunks(!0),he(this.writer),this.writer.close()}async close(){var e;return(e=this.writer)==null?void 0:e.close()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class io{constructor(){this._output=null,this.onwrite=null}}class Zc extends io{constructor(){super(...arguments),this.buffer=null}_createWriter(){return new Kc(this)}}class K_ extends io{constructor(e,t={}){if(super(),!(e instanceof WritableStream))throw new TypeError("StreamTarget requires a WritableStream instance.");if(t!=null&&typeof t!="object")throw new TypeError("StreamTarget options, when provided, must be an object.");if(t.chunked!==void 0&&typeof t.chunked!="boolean")throw new TypeError("options.chunked, when provided, must be a boolean.");if(t.chunkSize!==void 0&&(!Number.isInteger(t.chunkSize)||t.chunkSize<1024))throw new TypeError("options.chunkSize, when provided, must be an integer and not smaller than 1024.");this._writable=e,this._options=t}_createWriter(){return new Y_(this)}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const ka=1e3,Z_=2082844800,J_=i=>{const e={},t=i.track;return t.metadata.name!==void 0&&(e.name=t.metadata.name),e},gt=(i,e,t=!0)=>{const n=i*e;return t?Math.round(n):n};class Q_ extends k0{constructor(e,t){super(e),this.auxTarget=new Zc,this.auxWriter=this.auxTarget._createWriter(),this.auxBoxWriter=new Yl(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=Gg(),this.creationTime=Math.floor(Date.now()/1e3)+Z_,this.finalizedChunks=[],this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.format=t,this.writer=e._writer,this.boxWriter=new Yl(this.writer),this.isQuickTime=t instanceof tu;const n=this.writer instanceof Kc?"in-memory":!1;this.fastStart=t._options.fastStart??n,this.isFragmented=this.fastStart==="fragmented",(this.fastStart==="in-memory"||this.isFragmented)&&(this.writer.ensureMonotonicity=!0),this.minimumFragmentDuration=t._options.minimumFragmentDuration??1}async start(){const e=await this.mutex.acquire(),t=this.output._tracks.some(n=>n.type==="video"&&n.source._codec==="avc");if(this.format._options.onFtyp&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(V0({isQuickTime:this.isQuickTime,holdsAvc:t,fragmented:this.isFragmented})),this.format._options.onFtyp){const{data:n,start:s}=this.writer.stopTrackingWrites();this.format._options.onFtyp(n,s)}if(this.ftypSize=this.writer.getPos(),this.fastStart!=="in-memory")if(this.fastStart==="reserve"){for(const n of this.output._tracks)if(n.metadata.maximumPacketCount===void 0)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||(this.format._options.onMdat&&this.writer.startTrackingWrites(),this.mdat=er(!0),this.boxWriter.writeBox(this.mdat));await this.writer.flush(),e()}allTracksAreKnown(){for(const e of this.output._tracks)if(!e.source._closed&&!this.trackDatas.some(t=>t.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(t=>t.type==="video"||t.type==="audio"?t.info.decoderConfig.codec:{webvtt:"wvtt"}[t.track.source._codec]);return U0({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(t=>t.type==="video"),hasAudio:this.trackDatas.some(t=>t.type==="audio"),codecStrings:e})}getVideoTrackData(e,t,n){const s=this.trackDatas.find(c=>c.track===e);if(s)return s;u0(n),he(n),he(n.decoderConfig);const r={...n.decoderConfig};he(r.codedWidth!==void 0),he(r.codedHeight!==void 0);let a=!1;if(e.source._codec==="avc"&&!r.description){const c=g0(t.data);if(!c)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");r.description=_0(c),a=!0}else if(e.source._codec==="hevc"&&!r.description){const c=y0(t.data);if(!c)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");r.description=A0(c),a=!0}const o=qg(1/(e.metadata.frameRate??57600),1e6).denominator,l={muxer:this,track:e,type:"video",info:{width:r.codedWidth,height:r.codedHeight,decoderConfig:r,requiresAnnexBTransformation:a},timescale:o,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[]};return this.trackDatas.push(l),this.trackDatas.sort((c,u)=>c.track.id-u.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),l}getAudioTrackData(e,t,n){const s=this.trackDatas.find(l=>l.track===e);if(s)return s;h0(n),he(n),he(n.decoderConfig);const r={...n.decoderConfig};let a=!1;if(e.source._codec==="aac"&&!r.description){const l=ql(gs.tempFromBytes(t.data));if(!l)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const c=dr[l.samplingFrequencyIndex],u=Ja[l.channelConfiguration];if(c===void 0||u===void 0)throw new Error("Invalid ADTS frame header.");r.description=Dc({objectType:l.objectType,sampleRate:c,numberOfChannels:u}),a=!0}const o={muxer:this,track:e,type:"audio",info:{numberOfChannels:n.decoderConfig.numberOfChannels,sampleRate:n.decoderConfig.sampleRate,decoderConfig:r,requiresPcmTransformation:!this.isFragmented&&cn.includes(e.source._codec),requiresAdtsStripping:a},timescale:n.decoderConfig.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[]};return this.trackDatas.push(o),this.trackDatas.sort((l,c)=>l.track.id-c.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),o}getSubtitleTrackData(e,t){const n=this.trackDatas.find(r=>r.track===e);if(n)return n;f0(t),he(t),he(t.config);const s={muxer:this,track:e,type:"subtitle",info:{config:t.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],lastCueEndTimestamp:0,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(s),this.trackDatas.sort((r,a)=>r.track.id-a.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),s}async addEncodedVideoPacket(e,t,n){const s=await this.mutex.acquire();try{const r=this.getVideoTrackData(e,t,n);let a=t.data;if(r.info.requiresAnnexBTransformation){const c=[...Qa(a)].map(u=>a.subarray(u.offset,u.offset+u.length));if(c.length===0)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");a=m0(c,4)}const o=this.validateAndNormalizeTimestamp(r.track,t.timestamp,t.type==="key"),l=this.createSampleForTrack(r,a,o,t.duration,t.type);await this.registerSample(r,l)}finally{s()}}async addEncodedAudioPacket(e,t,n){const s=await this.mutex.acquire();try{const r=this.getAudioTrackData(e,t,n);let a=t.data;if(r.info.requiresAdtsStripping){const c=ql(gs.tempFromBytes(a));if(!c)throw new Error("Expected ADTS frame, didn't get one.");const u=c.crcCheck===null?D0:N0;a=a.subarray(u)}const o=this.validateAndNormalizeTimestamp(r.track,t.timestamp,t.type==="key"),l=this.createSampleForTrack(r,a,o,t.duration,t.type);r.info.requiresPcmTransformation&&await this.maybePadWithSilence(r,o),await this.registerSample(r,l)}finally{s()}}async maybePadWithSilence(e,t){const n=Rn(e.samples),s=n?n.timestamp+n.duration:0,r=t-s,a=gt(r,e.timescale);if(a>0){const{sampleSize:o,silentValue:l}=Yi(e.info.decoderConfig.codec),c=a*e.info.numberOfChannels,u=new Uint8Array(o*c).fill(l),d=this.createSampleForTrack(e,new Uint8Array(u.buffer),s,r,"key");await this.registerSample(e,d)}}async addSubtitleCue(e,t,n){const s=await this.mutex.acquire();try{const r=this.getSubtitleTrackData(e,n);this.validateAndNormalizeTimestamp(r.track,t.timestamp,!0),e.source._codec==="webvtt"&&(r.cueQueue.push(t),await this.processWebVTTCues(r,t.timestamp))}finally{s()}}async processWebVTTCues(e,t){for(;e.cueQueue.length>0;){const n=new Set([]);for(const c of e.cueQueue)he(c.timestamp<=t),he(e.lastCueEndTimestamp<=c.timestamp+c.duration),n.add(Math.max(c.timestamp,e.lastCueEndTimestamp)),n.add(c.timestamp+c.duration);const s=[...n].sort((c,u)=>c-u),r=s[0],a=s[1]??r;if(t<a)break;if(e.lastCueEndTimestamp<r){this.auxWriter.seek(0);const c=D_();this.auxBoxWriter.writeBox(c);const u=this.auxWriter.getSlice(0,this.auxWriter.getPos()),d=this.createSampleForTrack(e,u,e.lastCueEndTimestamp,r-e.lastCueEndTimestamp,"key");await this.registerSample(e,d),e.lastCueEndTimestamp=r}this.auxWriter.seek(0);for(let c=0;c<e.cueQueue.length;c++){const u=e.cueQueue[c];if(u.timestamp>=a)break;$l.lastIndex=0;const d=$l.test(u.text),f=u.timestamp+u.duration;let m=e.cueToSourceId.get(u);if(m===void 0&&a<f&&(m=e.nextSourceId++,e.cueToSourceId.set(u,m)),u.notes){const _=B_(u.notes);this.auxBoxWriter.writeBox(_)}const g=N_(u.text,d?r:null,u.identifier??null,u.settings??null,m??null);this.auxBoxWriter.writeBox(g),f===a&&e.cueQueue.splice(c--,1)}const o=this.auxWriter.getSlice(0,this.auxWriter.getPos()),l=this.createSampleForTrack(e,o,r,a-r,"key");await this.registerSample(e,l),e.lastCueEndTimestamp=a}}createSampleForTrack(e,t,n,s,r){return{timestamp:n,decodeTimestamp:n,duration:s,data:t,size:t.byteLength,type:r,timescaleUnitsToNextSample:gt(s,e.timescale)}}processTimestamps(e,t){if(e.timestampProcessingQueue.length===0)return;if(e.type==="audio"&&e.info.requiresPcmTransformation){let s=0;for(let r=0;r<e.timestampProcessingQueue.length;r++){const a=e.timestampProcessingQueue[r],o=gt(a.duration,e.timescale);s+=o}if(e.timeToSampleTable.length===0)e.timeToSampleTable.push({sampleCount:s,sampleDelta:1});else{const r=Rn(e.timeToSampleTable);r.sampleCount+=s}e.timestampProcessingQueue.length=0;return}const n=e.timestampProcessingQueue.map(s=>s.timestamp).sort((s,r)=>s-r);for(let s=0;s<e.timestampProcessingQueue.length;s++){const r=e.timestampProcessingQueue[s];r.decodeTimestamp=n[s],!this.isFragmented&&e.lastTimescaleUnits===null&&(r.decodeTimestamp=0);const a=gt(r.timestamp-r.decodeTimestamp,e.timescale),o=gt(r.duration,e.timescale);if(e.lastTimescaleUnits!==null){he(e.lastSample);const l=gt(r.decodeTimestamp,e.timescale,!1),c=Math.round(l-e.lastTimescaleUnits);if(he(c>=0),e.lastTimescaleUnits+=c,e.lastSample.timescaleUnitsToNextSample=c,!this.isFragmented){let u=Rn(e.timeToSampleTable);if(he(u),u.sampleCount===1){u.sampleDelta=c;const f=e.timeToSampleTable[e.timeToSampleTable.length-2];f&&f.sampleDelta===c&&(f.sampleCount++,e.timeToSampleTable.pop(),u=f)}else u.sampleDelta!==c&&(u.sampleCount--,e.timeToSampleTable.push(u={sampleCount:1,sampleDelta:c}));u.sampleDelta===o?u.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:o});const d=Rn(e.compositionTimeOffsetTable);he(d),d.sampleCompositionTimeOffset===a?d.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:a})}}else e.lastTimescaleUnits=gt(r.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:o}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:a}));e.lastSample=r}if(e.timestampProcessingQueue.length=0,he(e.lastSample),he(e.lastTimescaleUnits!==null),t!==void 0&&e.lastSample.timescaleUnitsToNextSample===0){he(t.type==="key");const s=gt(t.timestamp,e.timescale,!1),r=Math.round(s-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=r}}async registerSample(e,t){t.type==="key"&&this.processTimestamps(e,t),e.timestampProcessingQueue.push(t),this.isFragmented?(e.sampleQueue.push(t),await this.interleaveSamples()):this.fastStart==="reserve"?await this.registerSampleFastStartReserve(e,t):await this.addSampleToTrack(e,t)}async addSampleToTrack(e,t){if(!this.isFragmented&&(e.samples.push(t),this.fastStart==="reserve")){const s=e.track.metadata.maximumPacketCount;if(he(s!==void 0),e.samples.length>s)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${s}). Either add less packets or increase the maximum packet count.`)}let n=!1;if(!e.currentChunk)n=!0;else{e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,t.timestamp);const s=t.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){const r=this.trackDatas.every(a=>{if(e===a)return t.type==="key";const o=a.sampleQueue[0];return o?o.type==="key":a.track.source._closed});s>=this.minimumFragmentDuration&&r&&t.timestamp>this.maxWrittenTimestamp&&(n=!0,await this.finalizeFragment())}else n=s>=.5}n&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:t.timestamp,samples:[],offset:null,moofOffset:null}),he(e.currentChunk),e.currentChunk.samples.push(t),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,t.timestamp))}async finalizeCurrentChunk(e){if(he(!this.isFragmented),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let t=e.currentChunk.samples.length;if(e.type==="audio"&&e.info.requiresPcmTransformation&&(t=e.currentChunk.samples.reduce((n,s)=>n+gt(s.duration,e.timescale),0)),(e.compactlyCodedChunkTable.length===0||Rn(e.compactlyCodedChunkTable).samplesPerChunk!==t)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:t}),this.fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=this.writer.getPos();for(const n of e.currentChunk.samples)he(n.data),this.writer.write(n.data),n.data=null;await this.writer.flush()}async interleaveSamples(e=!1){if(he(this.isFragmented),!(!e&&!this.allTracksAreKnown()))e:for(;;){let t=null,n=1/0;for(const r of this.trackDatas){if(!e&&r.sampleQueue.length===0&&!r.track.source._closed)break e;r.sampleQueue.length>0&&r.sampleQueue[0].timestamp<n&&(t=r,n=r.sampleQueue[0].timestamp)}if(!t)break;const s=t.sampleQueue.shift();await this.addSampleToTrack(t,s)}}async finalizeFragment(e=!0){he(this.isFragmented);const t=this.nextFragmentNumber++;if(t===1){this.format._options.onMoov&&this.writer.startTrackingWrites();const m=ls(this);if(this.boxWriter.writeBox(m),this.format._options.onMoov){const{data:g,start:_}=this.writer.stopTrackingWrites();this.format._options.onMoov(g,_)}}const n=this.trackDatas.filter(m=>m.currentChunk),s=Zl(t,n),r=this.writer.getPos(),a=r+this.boxWriter.measureBox(s);let o=a+ya,l=1/0;for(const m of n){m.currentChunk.offset=o,m.currentChunk.moofOffset=r;for(const g of m.currentChunk.samples)o+=g.size;l=Math.min(l,m.currentChunk.startTimestamp)}const c=o-a,u=c>=2**32;if(u)for(const m of n)m.currentChunk.offset+=jl-ya;this.format._options.onMoof&&this.writer.startTrackingWrites();const d=Zl(t,n);if(this.boxWriter.writeBox(d),this.format._options.onMoof){const{data:m,start:g}=this.writer.stopTrackingWrites();this.format._options.onMoof(m,g,l)}he(this.writer.getPos()===a),this.format._options.onMdat&&this.writer.startTrackingWrites();const f=er(u);f.size=c,this.boxWriter.writeBox(f),this.writer.seek(a+(u?jl:ya));for(const m of n)for(const g of m.currentChunk.samples)this.writer.write(g.data),g.data=null;if(this.format._options.onMdat){const{data:m,start:g}=this.writer.stopTrackingWrites();this.format._options.onMdat(m,g)}for(const m of n)m.finalizedChunks.push(m.currentChunk),this.finalizedChunks.push(m.currentChunk),m.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,t){if(this.allTracksAreKnown()){if(!this.mdat){const n=ls(this),r=this.boxWriter.measureBox(n)+this.computeSampleTableSizeUpperBound()+4096;he(this.ftypSize!==null),this.writer.seek(this.ftypSize+r),this.format._options.onMdat&&this.writer.startTrackingWrites(),this.mdat=er(!0),this.boxWriter.writeBox(this.mdat);for(const a of this.trackDatas){for(const o of a.sampleQueue)await this.addSampleToTrack(a,o);a.sampleQueue.length=0}}await this.addSampleToTrack(e,t)}else e.sampleQueue.push(t)}computeSampleTableSizeUpperBound(){he(this.fastStart==="reserve");let e=0;for(const t of this.trackDatas){const n=t.track.metadata.maximumPacketCount;he(n!==void 0),e+=(4+4)*Math.ceil(2/3*n),e+=4*n,e+=(4+4)*Math.ceil(2/3*n),e+=(4+4+4)*Math.ceil(2/3*n),e+=4*n,e+=8*n}return e}async onTrackClose(e){const t=await this.mutex.acquire();if(e.type==="subtitle"&&e.source._codec==="webvtt"){const n=this.trackDatas.find(s=>s.track===e);n&&await this.processWebVTTCues(n,1/0)}this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),t()}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve();for(const t of this.trackDatas)t.type==="subtitle"&&t.track.source._codec==="webvtt"&&await this.processWebVTTCues(t,1/0);if(this.isFragmented){await this.interleaveSamples(!0);for(const t of this.trackDatas)this.processTimestamps(t);await this.finalizeFragment(!1)}else for(const t of this.trackDatas)this.processTimestamps(t),await this.finalizeCurrentChunk(t);if(this.fastStart==="in-memory"){this.mdat=er(!1);let t;for(let s=0;s<2;s++){const r=ls(this),a=this.boxWriter.measureBox(r);t=this.boxWriter.measureBox(this.mdat);let o=this.writer.getPos()+a+t;for(const l of this.finalizedChunks){l.offset=o;for(const{data:c}of l.samples)he(c),o+=c.byteLength,t+=c.byteLength}if(o<2**32)break;t>=2**32&&(this.mdat.largeSize=!0)}this.format._options.onMoov&&this.writer.startTrackingWrites();const n=ls(this);if(this.boxWriter.writeBox(n),this.format._options.onMoov){const{data:s,start:r}=this.writer.stopTrackingWrites();this.format._options.onMoov(s,r)}this.format._options.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=t,this.boxWriter.writeBox(this.mdat);for(const s of this.finalizedChunks)for(const r of s.samples)he(r.data),this.writer.write(r.data),r.data=null;if(this.format._options.onMdat){const{data:s,start:r}=this.writer.stopTrackingWrites();this.format._options.onMdat(s,r)}}else if(this.isFragmented){const t=this.writer.getPos(),n=I_(this.trackDatas);this.boxWriter.writeBox(n);const s=this.writer.getPos()-t;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(s)}else{he(this.mdat);const t=this.boxWriter.offsets.get(this.mdat);he(t!==void 0);const n=this.writer.getPos()-t;if(this.mdat.size=n,this.mdat.largeSize=n>=2**32,this.boxWriter.patchBox(this.mdat),this.format._options.onMdat){const{data:r,start:a}=this.writer.stopTrackingWrites();this.format._options.onMdat(r,a)}const s=ls(this);if(this.fastStart==="reserve"){he(this.ftypSize!==null),this.writer.seek(this.ftypSize),this.format._options.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(s);const r=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox(G0(r))}else this.format._options.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(s);if(this.format._options.onMoov){const{data:r,start:a}=this.writer.stopTrackingWrites();this.format._options.onMoov(r,a)}}e()}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class Jc{getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>ms.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>Wi.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>ur.includes(e))}_codecUnsupportedHint(e){return""}}class Qc extends Jc{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.fastStart!==void 0&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(e.minimumFragmentDuration!==void 0&&(!Number.isFinite(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(e.onFtyp!==void 0&&typeof e.onFtyp!="function")throw new TypeError("options.onFtyp, when provided, must be a function.");if(e.onMoov!==void 0&&typeof e.onMoov!="function")throw new TypeError("options.onMoov, when provided, must be a function.");if(e.onMdat!==void 0&&typeof e.onMdat!="function")throw new TypeError("options.onMdat, when provided, must be a function.");if(e.onMoof!==void 0&&typeof e.onMoof!="function")throw new TypeError("options.onMoof, when provided, must be a function.");if(e.metadataFormat!==void 0&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){return{video:{min:0,max:4294967295},audio:{min:0,max:4294967295},subtitle:{min:0,max:4294967295},total:{min:1,max:4294967295}}}get supportsVideoRotationMetadata(){return!0}_createMuxer(e){return new Q_(e,this)}}class eu extends Qc{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...ms,...Uc,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...ur]}_codecUnsupportedHint(e){return new tu().getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}}class tu extends Qc{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...ms,...Wi]}_codecUnsupportedHint(e){return new eu().getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const ev=i=>{if(!i||typeof i!="object")throw new TypeError("Encoding config must be an object.");if(!Wi.includes(i.codec))throw new TypeError(`Invalid audio codec '${i.codec}'. Must be one of: ${Wi.join(", ")}.`);if(i.bitrate===void 0&&(!cn.includes(i.codec)||i.codec==="flac"))throw new TypeError("config.bitrate must be provided for compressed audio codecs.");if(i.bitrate!==void 0&&!(i.bitrate instanceof nu)&&(!Number.isInteger(i.bitrate)||i.bitrate<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(i.onEncodedPacket!==void 0&&typeof i.onEncodedPacket!="function")throw new TypeError("config.onEncodedChunk, when provided, must be a function.");if(i.onEncoderConfig!==void 0&&typeof i.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");tv(i.codec,i)},tv=(i,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");if(e.bitrateMode!==void 0&&!["constant","variable"].includes(e.bitrateMode))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&i0(e.fullCodecString)!==i)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${i}).`)},nv=i=>{const e=i.bitrate instanceof nu?i.bitrate._toAudioBitrate(i.codec):i.bitrate;return{codec:i.fullCodecString??t0(i.codec,i.numberOfChannels,i.sampleRate),numberOfChannels:i.numberOfChannels,sampleRate:i.sampleRate,bitrate:e,bitrateMode:i.bitrateMode,...s0(i.codec)}};class nu{constructor(e){this._factor=e}_toVideoBitrate(e,t,n){const s=t*n,r={avc:1,hevc:.6,vp9:.6,av1:.4,vp8:1.2},a=1920*1080,o=3e6,l=Math.pow(s/a,.95),d=o*l*r[e]*this._factor;return Math.ceil(d/1e3)*1e3}_toAudioBitrate(e){if(cn.includes(e)||e==="flac")return;const n={aac:128e3,opus:64e3,mp3:16e4,vorbis:64e3}[e];if(!n)throw new Error(`Unhandled codec: ${e}`);let s=n*this._factor;return e==="aac"?s=[96e3,128e3,16e4,192e3].reduce((a,o)=>Math.abs(o-s)<Math.abs(a-s)?o:a):e==="opus"||e==="vorbis"?s=Math.max(6e3,s):e==="mp3"&&(s=[8e3,16e3,24e3,32e3,4e4,48e3,64e3,8e4,96e3,112e3,128e3,16e4,192e3,224e3,256e3,32e4].reduce((a,o)=>Math.abs(o-s)<Math.abs(a-s)?o:a)),Math.round(s/1e3)*1e3}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */class so{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1,this._timestampOffset=0}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if(this._connectedTrack.output.state==="canceled")throw new Error("Output has been canceled.");if(this._connectedTrack.output.state==="finalizing"||this._connectedTrack.output.state==="finalized")throw new Error("Output has been finalized.");if(this._connectedTrack.output.state==="pending")throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;const e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if(e.output.state==="pending")throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,!(e.output.state==="finalizing"||e.output.state==="finalized")&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??(this._closingPromise=(async()=>{await this._flushAndClose(e),this._closed=!0})())}}class iu extends so{constructor(e){if(super(),this._connectedTrack=null,!ms.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${ms.join(", ")}.`);this._codec=e}}class iv extends iu{constructor(e){super(e)}add(e,t){if(!(e instanceof On))throw new TypeError("packet must be an EncodedPacket.");if(e.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be added.");if(t!==void 0&&(!t||typeof t!="object"))throw new TypeError("meta, when provided, must be an object.");return this._ensureValidAdd(),this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack,e,t)}}class su extends so{constructor(e){if(super(),this._connectedTrack=null,!Wi.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${Wi.join(", ")}.`);this._codec=e}}class sv{constructor(e,t){this.source=e,this.encodingConfig=t,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastNumberOfChannels=null,this.lastSampleRate=null,this.isPcmEncoder=!1,this.outputSampleSize=null,this.writeOutputValue=null,this.customEncoder=null,this.customEncoderCallSerializer=new $g,this.customEncoderQueueSize=0,this.lastEndSampleIndex=null,this.error=null,this.errorNeedsNewStack=!0}async add(e,t){try{if(this.checkForEncoderError(),this.source._ensureValidAdd(),this.lastNumberOfChannels!==null&&this.lastSampleRate!==null){if(e.numberOfChannels!==this.lastNumberOfChannels||e.sampleRate!==this.lastSampleRate)throw new Error(`Audio parameters must remain constant. Expected ${this.lastNumberOfChannels} channels at ${this.lastSampleRate} Hz, got ${e.numberOfChannels} channels at ${e.sampleRate} Hz.`)}else this.lastNumberOfChannels=e.numberOfChannels,this.lastSampleRate=e.sampleRate;this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(e),this.encoderInitialized||await this.ensureEncoderPromise),he(this.encoderInitialized);{const n=Math.round(e.timestamp*e.sampleRate),s=Math.round((e.timestamp+e.duration)*e.sampleRate);if(this.lastEndSampleIndex===null)this.lastEndSampleIndex=s;else{const r=n-this.lastEndSampleIndex;if(r>=64){const a=new si({data:new Float32Array(r*e.numberOfChannels),format:"f32-planar",sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,numberOfFrames:r,timestamp:this.lastEndSampleIndex/e.sampleRate});await this.add(a,!0)}this.lastEndSampleIndex+=e.numberOfFrames}}if(this.customEncoder){this.customEncoderQueueSize++;const n=e.clone(),s=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(n)).then(()=>this.customEncoderQueueSize--).catch(r=>this.error??(this.error=r)).finally(()=>{n.close()});this.customEncoderQueueSize>=4&&await s,await this.muxer.mutex.currentPromise}else if(this.isPcmEncoder)await this.doPcmEncoding(e,t);else{he(this.encoder);const n=e.toAudioData();this.encoder.encode(n),n.close(),t&&e.close(),this.encoder.encodeQueueSize>=4&&await new Promise(s=>this.encoder.addEventListener("dequeue",s,{once:!0})),await this.muxer.mutex.currentPromise}}finally{t&&e.close()}}async doPcmEncoding(e,t){var f,m;he(this.outputSampleSize),he(this.writeOutputValue);const{numberOfChannels:n,numberOfFrames:s,sampleRate:r,timestamp:a}=e,o=2048,l=[];for(let g=0;g<s;g+=o){const _=Math.min(o,e.numberOfFrames-g),p=_*n*this.outputSampleSize,h=new ArrayBuffer(p),E=new DataView(h);l.push({frameCount:_,view:E})}const c=e.allocationSize({planeIndex:0,format:"f32-planar"}),u=new Float32Array(c/Float32Array.BYTES_PER_ELEMENT);for(let g=0;g<n;g++){e.copyTo(u,{planeIndex:g,format:"f32-planar"});for(let _=0;_<l.length;_++){const{frameCount:p,view:h}=l[_];for(let E=0;E<p;E++)this.writeOutputValue(h,(E*n+g)*this.outputSampleSize,u[_*o+E])}}t&&e.close();const d={decoderConfig:{codec:this.encodingConfig.codec,numberOfChannels:n,sampleRate:r}};for(let g=0;g<l.length;g++){const{frameCount:_,view:p}=l[g],h=p.buffer,E=g*o,y=new On(new Uint8Array(h),"key",a+E/r,_/r);(m=(f=this.encodingConfig).onEncodedPacket)==null||m.call(f,y,d),await this.muxer.addEncodedAudioPacket(this.source._connectedTrack,y,d)}}ensureEncoder(e){const t=new Error;this.ensureEncoderPromise=(async()=>{var o,l;const{numberOfChannels:n,sampleRate:s}=e,r=nv({numberOfChannels:n,sampleRate:s,...this.encodingConfig});(l=(o=this.encodingConfig).onEncoderConfig)==null||l.call(o,r);const a=P0.find(c=>c.supports(this.encodingConfig.codec,r));if(a)this.customEncoder=new a,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=r,this.customEncoder.onPacket=(c,u)=>{var d,f;if(!(c instanceof On))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(u!==void 0&&(!u||typeof u!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");(f=(d=this.encodingConfig).onEncodedPacket)==null||f.call(d,c,u),this.muxer.addEncodedAudioPacket(this.source._connectedTrack,c,u).catch(m=>{this.error??(this.error=m),this.errorNeedsNewStack=!1})},await this.customEncoder.init();else if(cn.includes(this.encodingConfig.codec))this.initPcmEncoder();else{if(typeof AudioEncoder>"u")throw new Error("AudioEncoder is not supported by this browser.");if(!(await AudioEncoder.isConfigSupported(r)).supported)throw new Error(`This specific encoder configuration (${r.codec}, ${r.bitrate} bps, ${r.numberOfChannels} channels, ${r.sampleRate} Hz) is not supported by this browser. Consider using another codec or changing your audio parameters.`);this.encoder=new AudioEncoder({output:(u,d)=>{var m,g;if(this.encodingConfig.codec==="aac"&&(d!=null&&d.decoderConfig)){let _=!1;if(!d.decoderConfig.description||d.decoderConfig.description.byteLength<2?_=!0:_=n0($i(d.decoderConfig.description)).objectType===0,_){const p=Number(Rn(r.codec.split(".")));d.decoderConfig.description=Dc({objectType:p,numberOfChannels:d.decoderConfig.numberOfChannels,sampleRate:d.decoderConfig.sampleRate})}}const f=On.fromEncodedChunk(u);(g=(m=this.encodingConfig).onEncodedPacket)==null||g.call(m,f,d),this.muxer.addEncodedAudioPacket(this.source._connectedTrack,f,d).catch(_=>{this.error??(this.error=_),this.errorNeedsNewStack=!1})},error:u=>{u.stack=t.stack,this.error??(this.error=u)}}),this.encoder.configure(r)}he(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}initPcmEncoder(){this.isPcmEncoder=!0;const e=this.encodingConfig.codec,{dataType:t,sampleSize:n,littleEndian:s}=Yi(e);switch(this.outputSampleSize=n,n){case 1:t==="unsigned"?this.writeOutputValue=(r,a,o)=>r.setUint8(a,Rt((o+1)*127.5,0,255)):t==="signed"?this.writeOutputValue=(r,a,o)=>{r.setInt8(a,Rt(Math.round(o*128),-128,127))}:t==="ulaw"?this.writeOutputValue=(r,a,o)=>{const l=Rt(Math.floor(o*32767),-32768,32767);r.setUint8(a,R0(l))}:t==="alaw"?this.writeOutputValue=(r,a,o)=>{const l=Rt(Math.floor(o*32767),-32768,32767);r.setUint8(a,L0(l))}:he(!1);break;case 2:t==="unsigned"?this.writeOutputValue=(r,a,o)=>r.setUint16(a,Rt((o+1)*32767.5,0,65535),s):t==="signed"?this.writeOutputValue=(r,a,o)=>r.setInt16(a,Rt(Math.round(o*32767),-32768,32767),s):he(!1);break;case 3:t==="unsigned"?this.writeOutputValue=(r,a,o)=>Za(r,a,Rt((o+1)*83886075e-1,0,16777215),s):t==="signed"?this.writeOutputValue=(r,a,o)=>Hg(r,a,Rt(Math.round(o*8388607),-8388608,8388607),s):he(!1);break;case 4:t==="unsigned"?this.writeOutputValue=(r,a,o)=>r.setUint32(a,Rt((o+1)*21474836475e-1,0,4294967295),s):t==="signed"?this.writeOutputValue=(r,a,o)=>r.setInt32(a,Rt(Math.round(o*2147483647),-2147483648,2147483647),s):t==="float"?this.writeOutputValue=(r,a,o)=>r.setFloat32(a,o,s):he(!1);break;case 8:t==="float"?this.writeOutputValue=(r,a,o)=>r.setFloat64(a,o,s):he(!1);break;default:Ka(n),he(!1)}}async flushAndClose(e){e||this.checkForEncoderError(),this.customEncoder?(e||this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()),await this.customEncoderCallSerializer.call(()=>this.customEncoder.close())):this.encoder&&(e||await this.encoder.flush(),this.encoder.state!=="closed"&&this.encoder.close()),e||this.checkForEncoderError()}getQueueSize(){var e;return this.customEncoder?this.customEncoderQueueSize:this.isPcmEncoder?0:((e=this.encoder)==null?void 0:e.encodeQueueSize)??0}checkForEncoderError(){if(this.error)throw this.errorNeedsNewStack&&(this.error.stack=new Error().stack),this.error}}class rv extends su{constructor(e){ev(e),super(e.codec),this._accumulatedTime=0,this._encoder=new sv(this,e)}async add(e){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");const t=si._fromAudioBuffer(e,this._accumulatedTime);this._accumulatedTime+=e.duration;for(const n of t)await this._encoder.add(n,!0)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class av extends so{constructor(e){if(super(),this._connectedTrack=null,!ur.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${ur.join(", ")}.`);this._codec=e}}/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const ov=["video","audio","subtitle"],Ta=i=>{if(!i||typeof i!="object")throw new TypeError("metadata must be an object.");if(i.languageCode!==void 0&&!jg(i.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(i.name!==void 0&&typeof i.name!="string")throw new TypeError("metadata.name, when provided, must be a string.");if(i.disposition!==void 0&&Qg(i.disposition),i.maximumPacketCount!==void 0&&(!Number.isInteger(i.maximumPacketCount)||i.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.")};class lv{constructor(e){if(this.state="pending",this._tracks=[],this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new Lc,this._metadataTags={},!e||typeof e!="object")throw new TypeError("options must be an object.");if(!(e.format instanceof Jc))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof io))throw new TypeError("options.target must be a Target.");if(e.target._output)throw new Error("Target is already used for another output.");e.target._output=this,this.format=e.format,this.target=e.target,this._writer=e.target._createWriter(),this._muxer=e.format._createMuxer(this)}addVideoTrack(e,t={}){if(!(e instanceof iu))throw new TypeError("source must be a VideoSource.");if(Ta(t),t.rotation!==void 0&&![0,90,180,270].includes(t.rotation))throw new TypeError(`Invalid video rotation: ${t.rotation}. Has to be 0, 90, 180 or 270.`);if(!this.format.supportsVideoRotationMetadata&&t.rotation)throw new Error(`${this.format._name} does not support video rotation metadata.`);if(t.frameRate!==void 0&&(!Number.isFinite(t.frameRate)||t.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${t.frameRate}. Must be a positive number.`);this._addTrack("video",e,t)}addAudioTrack(e,t={}){if(!(e instanceof su))throw new TypeError("source must be an AudioSource.");Ta(t),this._addTrack("audio",e,t)}addSubtitleTrack(e,t={}){if(!(e instanceof av))throw new TypeError("source must be a SubtitleSource.");Ta(t),this._addTrack("subtitle",e,t)}setMetadataTags(e){if(Jg(e),this.state!=="pending")throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e,t,n){if(this.state!=="pending")throw new Error("Cannot add track after output has been started or canceled.");if(t._connectedTrack)throw new Error("Source is already used for a track.");const s=this.format.getSupportedTrackCounts(),r=this._tracks.reduce((c,u)=>c+(u.type===e?1:0),0),a=s[e].max;if(r===a)throw new Error(a===0?`${this.format._name} does not support ${e} tracks.`:`${this.format._name} does not support more than ${a} ${e} track${a===1?"":"s"}.`);const o=s.total.max;if(this._tracks.length===o)throw new Error(`${this.format._name} does not support more than ${o} tracks${o===1?"":"s"} in total.`);const l={id:this._tracks.length+1,output:this,type:e,source:t,metadata:n};if(l.type==="video"){const c=this.format.getSupportedVideoCodecs();if(c.length===0)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(l.source._codec));if(!c.includes(l.source._codec))throw new Error(`Codec '${l.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${c.map(u=>`'${u}'`).join(", ")}.`+this.format._codecUnsupportedHint(l.source._codec))}else if(l.type==="audio"){const c=this.format.getSupportedAudioCodecs();if(c.length===0)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(l.source._codec));if(!c.includes(l.source._codec))throw new Error(`Codec '${l.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${c.map(u=>`'${u}'`).join(", ")}.`+this.format._codecUnsupportedHint(l.source._codec))}else if(l.type==="subtitle"){const c=this.format.getSupportedSubtitleCodecs();if(c.length===0)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(l.source._codec));if(!c.includes(l.source._codec))throw new Error(`Codec '${l.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${c.map(u=>`'${u}'`).join(", ")}.`+this.format._codecUnsupportedHint(l.source._codec))}this._tracks.push(l),t._connectedTrack=l}async start(){const e=this.format.getSupportedTrackCounts();for(const n of ov){const s=this._tracks.reduce((a,o)=>a+(o.type===n?1:0),0),r=e[n].min;if(s<r)throw new Error(r===e[n].max?`${this.format._name} requires exactly ${r} ${n} track${r===1?"":"s"}.`:`${this.format._name} requires at least ${r} ${n} track${r===1?"":"s"}.`)}const t=e.total.min;if(this._tracks.length<t)throw new Error(t===e.total.max?`${this.format._name} requires exactly ${t} track${t===1?"":"s"}.`:`${this.format._name} requires at least ${t} track${t===1?"":"s"}.`);if(this.state==="canceled")throw new Error("Output has been canceled.");return this._startPromise?(console.warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started",this._writer.start();const n=await this._mutex.acquire();await this._muxer.start();const s=this._tracks.map(r=>r.source._start());await Promise.all(s),n()})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){if(this._cancelPromise)return console.warn("Output has already been canceled."),this._cancelPromise;if(this.state==="finalizing"||this.state==="finalized"){console.warn("Output has already been finalized.");return}return this._cancelPromise=(async()=>{this.state="canceled";const e=await this._mutex.acquire(),t=this._tracks.map(n=>n.source._flushOrWaitForOngoingClose(!0));await Promise.all(t),await this._writer.close(),e()})()}async finalize(){if(this.state==="pending")throw new Error("Cannot finalize before starting.");if(this.state==="canceled")throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(console.warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const e=await this._mutex.acquire(),t=this._tracks.map(n=>n.source._flushOrWaitForOngoingClose(!1));await Promise.all(t),await this._muxer.finalize(),await this._writer.flush(),await this._writer.finalize(),this.state="finalized",e()})()}}class At{static saveProject(e,t,n){const s={};s.name=t,s.shader=this.getShaderSnapshot(n.shader),s.timeline=n.animation.getSnapshot(),s.modulators=n.modulatorManager.getSnapshot();const r=n.screen.captureImage("image/jpeg",.05),a=n.projectList.updateOrAddProject(e,t,r);s.id=a,n.projectList.setCurrentProject(a),s.hasAudio=n.audioEngine.hasAudio(),localStorage.setItem("project"+s.id,JSON.stringify(s)),localStorage.setItem("lastProject",a),this.saveProjectList(n.projectList),n.audioEngine.hasAudio()?Qs.put(a,n.audioEngine.fileBlob,n.audioEngine.fileName).catch(o=>console.warn("Audio persist failed:",o)):Qs.remove(a).catch(()=>{})}static saveProjectList(e){localStorage.setItem("projects",JSON.stringify(e.getSnapshot()))}static newProject(e){var t,n;e.animation.clear(),e.modulatorManager.clear(),e.audioEngine.beginLoad(),e.audioEngine.clear(),(n=(t=e.controls)==null?void 0:t.modulators)==null||n.onAudioRestored(),e.setShader(nt.mandle),e.updateFromShader(),e.projectList.setDefaultProject(),e.controls.setProject()}static loadProject(e,t){const n=JSON.parse(localStorage.getItem("project"+e));n&&(t.projectList.setCurrentProject(n.id),this.setShaderFromSnapshot(t,n.shader),t.animation.setFromSnapshot(n.timeline),t.modulatorManager.setFromSnapshot(n.modulators),this.restoreAudio(t,n),t.controls.setProject())}static restoreAudio(e,t){const n=e.audioEngine,s=n.beginLoad();n.clear(),t.hasAudio&&Qs.get(t.id).then(async r=>{var o,l;if(n.isStale(s)||!r||!r.blob)return;const a=new File([r.blob],r.name||"track",{type:r.blob.type});await n.load(a),!n.isStale(s)&&((l=(o=e.controls)==null?void 0:o.modulators)==null||l.onAudioRestored())}).catch(r=>console.warn("Audio restore failed:",r))}static loadProjectList(e){if(e.projectList.clear(),localStorage.projects){const t=JSON.parse(localStorage.projects);let n=1;t.forEach(s=>{const r=s.id?s.id:n;e.projectList.addProject(new Rc(r,s.name,s.image,s.lastModified)),n++})}}static loadLastProject(e){const t=localStorage.getItem("lastProject");t&&this.loadProject(t,e)}static deleteProject(e){localStorage.removeItem("project"+e),Qs.remove(e).catch(()=>{})}static deleteAllStorage(){localStorage.clear()}static getShaderSnapshot(e){return e.getSnapshot()}static setShaderFromSnapshot(e,t){e.setShader(t.eShader);const n=e.shader;n.paletteIndex=t.paletteIndex,n.setFromSnapshot(t),e.updateFromShader()}static exportProject(e,t){const n={name:e,shader:this.getShaderSnapshot(t.shader),timeline:t.animation.getSnapshot(),modulators:t.modulatorManager.getSnapshot()},s=JSON.stringify(n,null,2),r=new Blob([s],{type:"application/json"}),a=URL.createObjectURL(r),o=document.createElement("a");o.href=a,o.download=`${e}.json`,o.click(),URL.revokeObjectURL(a)}static async importProject(e,t){var r,a;const n=await e.text(),s=JSON.parse(n);if(s){this.setShaderFromSnapshot(t,s.shader),t.animation.setFromSnapshot(s.timeline),t.modulatorManager.setFromSnapshot(s.modulators),t.audioEngine.beginLoad(),t.audioEngine.clear(),(a=(r=t.controls)==null?void 0:r.modulators)==null||a.onAudioRestored();const o=s.name||e.name.replace(".json","");t.projectList.setDefaultProject(),t.projectList.currentProjectName=o,t.controls.setProject()}}static async exportImage(e,t){const n=await t.screen.captureBlob("image/png",1),s=URL.createObjectURL(n),r=document.createElement("a");r.href=s,r.download=`${e}.png`,r.click(),URL.revokeObjectURL(s)}static buildExportAudioBuffer(e,t,n,s){const r=e.sampleRate,a=Math.max(1,Math.round(n*r)),o=Math.min(e.length,Math.max(1,Math.round(s*r))),l=t.createBuffer(e.numberOfChannels,a,r);for(let c=0;c<e.numberOfChannels;c++){const u=e.getChannelData(c),d=l.getChannelData(c);for(let f=0;f<a;f++)d[f]=u[f%o]}return l}static async exportVideo(e,t,n=30,s,r){const a=t.animation,o=t.canvas,l={playhead:a.playhead,playing:a.playing,direction:a.direction};a.pause();const c=a.duration,u=a.mode==="pingpong"?c*2:c,d=Math.round(u*n),m={"720p":{width:1280,height:720},"1080p":{width:1920,height:1080},"1440p":{width:2560,height:1440},"4k":{width:3840,height:2160}}[t.settings.exportResolution],g=m?m.width:o.width,_=m?m.height:o.height;t.renderer.instance.setSize(g,_),t.renderer.instance.setPixelRatio(1),t.screen.shaderUniforms.uAspect.value=g/_;let p=null,h=null,E;typeof showSaveFilePicker=="function"?(p=await showSaveFilePicker({suggestedName:`${e}.mp4`,types:[{description:"MP4 Video",accept:{"video/mp4":[".mp4"]}}]}),h=await p.createWritable(),E=new K_(h,{chunked:!0})):E=new Zc;const y=new lv({format:new eu({fastStart:p?"fragmented":"in-memory"}),target:E}),b=new iv("avc");y.addVideoTrack(b,{frameRate:n});const T=t.audioEngine;let C=null;T&&T.hasAudio()&&(C=new rv({codec:"aac",bitrate:192e3}),y.addAudioTrack(C)),await y.start();let A=null;const O=new VideoEncoder({output:(j,P)=>b.add(On.fromEncodedChunk(j),P),error:j=>{A=j}}),x=Math.ceil(g/16)*16*(Math.ceil(_/16)*16);let w="42001f";x>921600&&(w="420028"),x>2097152&&(w="42002a"),x>2228224&&(w="420032"),x>5652480&&(w="420033"),x>9437184&&(w="420034");const k=Math.max(5e6,g*_*n*4);O.configure({codec:`avc1.${w}`,width:g,height:_,bitrate:k,framerate:n});let q=!1;try{for(let j=0;j<d;j++){if(r&&r.aborted)throw new DOMException("Export cancelled","AbortError");if(A)throw A;const P=j/n,F=a.mode==="pingpong"&&P>c?2*c-P:P%(c+1e-9);a.setTime(F),t.renderer.update();const W=new VideoFrame(o,{timestamp:j*(1e6/n),duration:1e6/n}),H=j%(n*2)===0;for(O.encode(W,{keyFrame:H}),W.close(),s&&s(j/d);O.encodeQueueSize>5;)await new Promise(J=>setTimeout(J,10));j%5===0&&await new Promise(J=>setTimeout(J,0))}if(C){const j=this.buildExportAudioBuffer(T.buffer,T.ctx,u,c);await C.add(j),C.close()}if(await O.flush(),await y.finalize(),q=!0,h)await h.close();else{const j=new Blob([E.buffer],{type:"video/mp4"}),P=URL.createObjectURL(j),F=document.createElement("a");F.href=P,F.download=`${e}.mp4`,F.click(),URL.revokeObjectURL(P)}s&&s(1)}finally{if(t.renderer.instance.setSize(t.sizes.width,t.sizes.height),t.renderer.instance.setPixelRatio(t.sizes.pixelRatio),t.screen.shaderUniforms.uAspect.value=t.sizes.aspect,a.playhead=l.playhead,a.direction=l.direction,a.apply(),a.trigger("timeChanged",[a.playhead]),l.playing&&a.play(),O.state!=="closed"&&O.close(),!q){try{C&&C.close()}catch{}if(h)try{await h.abort()}catch{}}}}}class cv extends Gn{constructor(){super(),this.initState(),this.getElements(),this.linkExportControls()}initState(){this.videoArmed=!1,this.videoExportAbortController=null}getElements(){this.exportImageBtn=document.getElementById("export-image-btn"),this.armVideoBtn=document.getElementById("arm-video-btn"),this.exportVideoStatus=document.getElementById("export-video-status"),this.cancelVideoBtn=document.getElementById("cancel-video-btn")}linkExportControls(){this.exportImageBtn.addEventListener("click",()=>{At.exportImage(this.projectList.currentProjectName,this.experience)}),this.armVideoBtn.addEventListener("click",()=>{this.videoArmed=!this.videoArmed,this.armVideoBtn.classList.toggle("default-button",!this.videoArmed),this.armVideoBtn.classList.toggle("selected-button",this.videoArmed),this.exportVideoStatus.textContent=this.videoArmed?"Armed":""}),this.cancelVideoBtn.addEventListener("click",()=>{this.cancelVideoExport()})}async startVideoExport(){this.videoArmed=!1,this.armVideoBtn.classList.add("default-button"),this.armVideoBtn.classList.remove("selected-button"),this.exportVideoStatus.textContent="",this.videoExportAbortController=new AbortController,this.cancelVideoBtn.style.display="inline-block";try{await At.exportVideo(this.projectList.currentProjectName,this.experience,this.experience.settings.exportFps,e=>{const t=Math.round(e*100);this.exportVideoStatus.textContent="Recording "+t+"%"},this.videoExportAbortController.signal)}catch(e){e.name!=="AbortError"&&console.error("Video export error:",e)}this.cancelVideoBtn.style.display="none",this.exportVideoStatus.textContent="",this.videoExportAbortController=null}cancelVideoExport(){this.videoExportAbortController&&(this.videoExportAbortController.abort(),this.videoExportAbortController=null),this.cancelVideoBtn.style.display="none",this.exportVideoStatus.textContent="Cancelled",setTimeout(()=>{this.exportVideoStatus.textContent=""},2e3)}isVideoArmed(){return this.videoArmed}}class uv extends Gn{constructor(){super(),this.currentTutorialPage=1,this.totalTutorialPages=2,this.getElements(),this.linkExpandButton(),this.linkLoaderClose(),this.linkSettings(),this.linkHelpMenu()}getElements(){this.loaderElement=document.getElementById("loader"),this.loaderCloseBtn=document.getElementById("loader-close-btn"),this.viewerElement=document.getElementById("viewer"),this.mainGrid=document.getElementById("main-grid"),this.menuBar=document.getElementById("menu-bar"),this.centerGrid=document.getElementById("center-grid"),this.expandBtn=document.getElementById("fullscreen-btn"),this.settingsBtn=document.getElementById("settings-btn"),this.settingsElement=document.getElementById("settings"),this.settingsCloseBtn=document.getElementById("settings-close-btn"),this.menuTutorial=document.getElementById("menu-tutorial"),this.menuHotkeys=document.getElementById("menu-hotkeys"),this.tutorialModal=document.getElementById("tutorial-modal"),this.tutorialCloseBtn=document.getElementById("tutorial-close-btn"),this.hotkeysModal=document.getElementById("hotkeys-modal"),this.hotkeysCloseBtn=document.getElementById("hotkeys-close-btn"),this.tutorialPrevBtn=document.getElementById("tutorial-prev-btn"),this.tutorialNextBtn=document.getElementById("tutorial-next-btn"),this.tutorialPageIndicator=document.getElementById("tutorial-page-indicator")}linkExpandButton(){this.expandBtn.addEventListener("click",()=>{this.mainGrid.classList.contains("expanded")?(this.mainGrid.classList.remove("expanded"),this.menuBar.hidden=!1,setTimeout(()=>{this.centerGrid.classList.remove("expanded")},400)):(this.mainGrid.classList.add("expanded"),this.menuBar.hidden=!0,this.centerGrid.classList.add("expanded"))}),document.addEventListener("mousemove",e=>{if(!this.mainGrid.classList.contains("expanded"))return;const t=100,n=window.innerWidth-e.clientX<t&&window.innerHeight-e.clientY<t;this.expandBtn.classList.toggle("visible",n)})}linkLoaderClose(){this.loaderCloseBtn.addEventListener("click",()=>{this.closeLoadView()}),this.loaderElement.addEventListener("click",e=>{e.target===this.loaderElement&&this.closeLoadView()})}linkSettings(){this.settingsBtn.addEventListener("click",()=>{this.openSettingsView()}),this.settingsCloseBtn.addEventListener("click",()=>{this.closeSettingsView()}),this.settingsElement.addEventListener("click",a=>{a.target===this.settingsElement&&this.closeSettingsView()});const e=document.getElementById("scroll-zoom-speed"),t=document.getElementById("scroll-zoom-speed-value");e.addEventListener("input",()=>{t.textContent=e.value+"%",this.experience.settings.scrollZoomSpeed=e.value/100});const n=document.getElementById("export-fps"),s=document.getElementById("export-fps-value");n.addEventListener("input",()=>{s.textContent=n.value,this.experience.settings.exportFps=parseInt(n.value)});const r=document.getElementById("export-resolution");r.addEventListener("change",()=>{this.experience.settings.exportResolution=r.value})}setupEscapeHandler(e){this.videoExportController=e,document.addEventListener("keydown",t=>{t.key==="Escape"&&!this.loaderElement.hidden&&this.closeLoadView(),t.key==="Escape"&&!this.settingsElement.hidden&&this.closeSettingsView(),t.key==="Escape"&&!this.tutorialModal.hidden&&this.closeTutorialModal(),t.key==="Escape"&&!this.hotkeysModal.hidden&&this.closeHotkeysModal(),t.key==="Escape"&&this.videoExportController&&this.videoExportController.cancelVideoExport()})}openSettingsView(){this.viewerElement.hidden=!0,this.settingsElement.hidden=!1,this.canvas.hidden=!0}closeSettingsView(){this.viewerElement.hidden=!1,this.settingsElement.hidden=!0,this.canvas.hidden=!1}openLoadView(){this.viewerElement.hidden=!0,this.loaderElement.hidden=!1,this.canvas.hidden=!0,this.trigger("loadViewOpened")}closeLoadView(){this.viewerElement.hidden=!1,this.loaderElement.hidden=!0,this.canvas.hidden=!1}linkHelpMenu(){this.menuTutorial.addEventListener("click",()=>{this.openTutorialModal()}),this.tutorialCloseBtn.addEventListener("click",()=>{this.closeTutorialModal()}),this.tutorialModal.addEventListener("click",e=>{e.target===this.tutorialModal&&this.closeTutorialModal()}),this.tutorialPrevBtn.addEventListener("click",()=>{this.goToTutorialPage(this.currentTutorialPage-1)}),this.tutorialNextBtn.addEventListener("click",()=>{this.goToTutorialPage(this.currentTutorialPage+1)}),this.menuHotkeys.addEventListener("click",()=>{this.openHotkeysModal()}),this.hotkeysCloseBtn.addEventListener("click",()=>{this.closeHotkeysModal()}),this.hotkeysModal.addEventListener("click",e=>{e.target===this.hotkeysModal&&this.closeHotkeysModal()})}openTutorialModal(){this.currentTutorialPage=1,this.goToTutorialPage(1),this.viewerElement.hidden=!0,this.tutorialModal.hidden=!1,this.canvas.hidden=!0}closeTutorialModal(){this.viewerElement.hidden=!1,this.tutorialModal.hidden=!0,this.canvas.hidden=!1}goToTutorialPage(e){if(e<1||e>this.totalTutorialPages)return;for(let n=1;n<=this.totalTutorialPages;n++){const s=document.getElementById(`tutorial-page-${n}`);s&&(s.hidden=!0)}const t=document.getElementById(`tutorial-page-${e}`);t&&(t.hidden=!1),this.currentTutorialPage=e,this.tutorialPrevBtn.disabled=e===1,this.tutorialNextBtn.disabled=e===this.totalTutorialPages,this.tutorialPageIndicator.textContent=`Page ${e} of ${this.totalTutorialPages}`}openHotkeysModal(){this.viewerElement.hidden=!0,this.hotkeysModal.hidden=!1,this.canvas.hidden=!0}closeHotkeysModal(){this.viewerElement.hidden=!1,this.hotkeysModal.hidden=!0,this.canvas.hidden=!1}}class dv extends Gn{constructor(){super(),this.initState(),this.getElements(),this.createColorElements(),this.linkPalette()}initState(){this.numberOfColors=5,this.palette=this.palettes.getPaletteByIndex(0)}getElements(){this.paletteSelect=document.getElementById("palette-select"),this.numberOfColorsSlider=document.getElementById("number-of-colors-slider"),this.numberOfColorsNumber=document.getElementById("number-of-colors-number"),this.colorsContainer=document.getElementById("colors-container"),this.paletteInput=document.getElementById("palette-input")}linkPalette(){this.linkPaletteSelect(),this.linkPaletteInput(),this.setPaletteInputFromSelect(),this.linkNewPaletteButton(),this.linkRandomPaletteButton(),this.linkDeletePaletteButton(),this.numberOfColorsSlider.addEventListener("change",e=>{this.numberOfColors=e.target.value,this.setNumberOfColors()})}linkPaletteSelect(){this.setPaletteSelectOptions(),this.paletteSelect.addEventListener("change",()=>{this.setPaletteInputFromSelect();const e=this.palettes.getPaletteByName(this.paletteSelect.value);this.setPalette(e),e.locked?this.lockPaletteInput():this.unlockPaletteInput()})}linkPaletteInput(){this.paletteInput.addEventListener("change",()=>{const e=this.paletteSelect.options[this.paletteSelect.selectedIndex];this.paletteIndex=this.paletteSelect.selectedIndex,this.experience.shader&&(this.experience.shader.paletteIndex=this.paletteSelect.selectedIndex),e.value=this.paletteInput.value,e.innerHTML=this.paletteInput.value,this.palette.name=this.paletteInput.value})}setPaletteFromIndex(e){const t=this.paletteSelect.options[e];this.paletteSelect.value=t.value;const n=this.palettes.getPaletteByName(this.paletteSelect.value);this.setPalette(n),this.setPaletteInputFromSelect()}setPaletteInputFromSelect(){this.paletteIndex=this.paletteSelect.selectedIndex,this.experience.shader&&(this.experience.shader.paletteIndex=this.paletteIndex),this.paletteInput.value=this.paletteSelect.value}linkNewPaletteButton(){document.getElementById("new-palette-button").addEventListener("click",()=>{const t=this.palette.clone();t.setDefaultName(),this.palettes.addPalette(t),this.setPalette(t),this.setPaletteSelectOptions(),this.setPaletteInputFromSelect(),this.unlockPaletteInput()})}linkRandomPaletteButton(){document.getElementById("random-palette-button").addEventListener("click",()=>{if(this.palette.locked){const t=this.palettes.addPalette();this.setPalette(t)}else this.palette.randomize(),this.refreshPaletteElements();this.setPaletteSelectOptions(),this.setPaletteInputFromSelect(),this.unlockPaletteInput()})}linkDeletePaletteButton(){document.getElementById("delete-palette-button").addEventListener("click",()=>{if(!this.palette.locked){const t=this.palettes.deletePalette(this.palette);this.setPalette(t),this.setPaletteSelectOptions(),this.setPaletteInputFromSelect()}})}setNumberOfColors(){this.shaderUniforms.uPaletteLen.value=this.numberOfColors,this.palette.displayLength=this.numberOfColors,this.numberOfColorsSlider.value=this.numberOfColors,this.numberOfColorsNumber.value=this.numberOfColors,this.removeColorElements(),this.createColorElements()}createColorElements(){const e=document.getElementById("colors-container");let t,n;for(let s=0;s<this.numberOfColors;s++)t=document.createElement("input"),n=this.palette.getColor(s).clone(),n.convertSRGBToLinear(),t.setAttribute("type","color"),t.setAttribute("class","colorpicker"),t.setAttribute("data",s),t.setAttribute("value","#"+n.getHexString()),t.addEventListener("input",r=>{this.setColorFromElement(r.target,s)}),e.appendChild(t),s==0&&this.setColorFromElement(t,0)}setPalette(e){this.palette=e,this.numberOfColors=e.displayLength,this.shaderUniforms.uPalette.value=this.palette.palette,this.setNumberOfColors(),this.refreshPaletteElements(),this.trigger("paletteChanged",[e])}refreshPaletteElements(){this.removeColorElements(),this.createColorElements()}removeColorElements(){const e=this.colorsContainer;for(;e.firstChild;)e.removeChild(e.lastChild)}setColorFromElement(e,t){const n=new $(e.value);n.convertLinearToSRGB(),this.palette.setColor(t,n),this.shaderUniforms.uPalette.value[t]=n}lockPaletteInput(){this.paletteInput.disabled=!0}unlockPaletteInput(){this.paletteInput.disabled=!1}setPaletteSelectOptions(){this.paletteSelect.innerHTML="";for(const e of this.palettes){const t=document.createElement("option");t.setAttribute("value",e.name),t.innerHTML=e.name,this.paletteSelect.appendChild(t)}this.paletteSelect.selectedIndex=this.palettes.getPaletteIndex(this.palette)}getCurrentPalette(){return this.palette}}const hv=10,fv=5;class Xi{constructor(e=[],t="",n=null){this.name=t,this.palette=e,this.locked=!1,this.displayLength=n,e.length==0&&(this.setDefaultPalette(n??hv),this.length=this.palette.length,this.displayLength=fv),t.length==0&&this.setDefaultName()}clone(){const e=new Xi;for(let t=0;t<this.palette.length;t++){const n=this.getColor(t).clone();e.setColor(t,n)}return e.displayLength=this.displayLength,e}lock(){this.locked=!0}setPalette(e){this.palette=e}setDefaultPalette(e){this.clearPalette();for(let t=0;t<e;t++)this.addColor()}clearPalette(){this.palette.length=0}setDefaultName(){this.name="";for(let e=0;e<this.palette.length&&e<8;e++)this.name+=this.getHexOfIndex(e)[0]}setLength(e){this.displayLength=e}randomize(){for(const e of this.palette)this.setColorAsRandom(e)}getColor(e){return this.palette[Math.min(e,this.palette.length-1)]}setColor(e,t){this.palette[e]=t}setColorFromElement(e,t){const n=new $(t.value);n.convertLinearToSRGB(),this.palette[e]=n}setColorAsRandom(e){e.setRGB(Math.random(),Math.random(),Math.random())}getHexOfIndex(e){const t=this.palette[e].clone();return t.convertSRGBToLinear(),t.getHexString()}addColor(e=new $,t=!1){return t&&this.setColorAsRandom(e),this.palette.push(e),this.length=this.palette.length,e}addColorByHex(e){const t=new $;t.setHex(e,_t),this.addColor(t)}removeColor(e=this.palette.length-1){this.palette.pop(e)}getSnapshot(){const e={};e.name=palette.name,e.length=palette.displayLength,e.colorHexes=[];for(const t of palette.palette)e.colorHexes.push(t.getHex());return e}}class kn{static encode(e){const t=e.shader,n=e.animation,s=t.paletteIndex,r=e.palettes.getPaletteByIndex(s);let a,o;if(r.locked)a=s,o=void 0;else{a=-1;const m=r.palette.map(g=>g.getHex());o={n:r.name,l:r.displayLength,h:m}}const l=t.getNumInputs().map(m=>[m.eId,m.value]),c=n.getSnapshot(),u={d:c.duration,m:c.mode==="pingpong"?1:0,mm:c.musicMode?1:0,bpm:c.bpm,bars:c.bars,bpb:c.beatsPerBar,g:c.gridDivision,k:c.tracks.map(m=>[m.eId,m.keys])},d=e.modulatorManager.getSnapshot(),f={v:3,s:t.eShader,p:a,i:l,a:u,mo:d};o&&(f.pc=o),window.location.hash="share="+kn._toBase64url(JSON.stringify(f))}static decode(e){var t;try{if(!kn.hasShareHash())return!1;const n=window.location.hash.slice(7),s=JSON.parse(kn._fromBase64url(n));if(![1,2,3].includes(s.v))return!1;e.setShader(s.s);const r=e.shader,a={};for(const o of s.i)a[o[0]]={value:o[1]};if(r.setFromSnapshotByEId(a),s.p>=0)r.paletteIndex=s.p;else if(s.pc){const o=s.pc,l=o.h.map(u=>{const d=new $;return d.setHex(u),d}),c=new Xi(l,o.n,o.l);e.palettes.addPalette(c),r.paletteIndex=e.palettes.palettes.length-1}if(e.updateFromShader(),s.v>=2&&s.a){const o=s.a;e.animation.setFromSnapshot({duration:o.d,mode:o.m===1?"pingpong":"loop",musicMode:o.mm===1,bpm:o.bpm,bars:o.bars,beatsPerBar:o.bpb,gridDivision:o.g,tracks:(o.k??[]).map(l=>({eId:l[0],keys:l[1]}))})}else e.animation.setFromSnapshot(null);return e.modulatorManager.setFromSnapshot(s.mo??null),e.audioEngine.clear(),(t=e.controls)!=null&&t.modulators&&e.controls.modulators.onAudioRestored(),!0}catch(n){return console.warn("URLShare.decode failed:",n),!1}}static hasShareHash(){return window.location.hash.startsWith("#share=")}static async copyShareURL(){await navigator.clipboard.writeText(window.location.href)}static _toBase64url(e){return btoa(unescape(encodeURIComponent(e))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}static _fromBase64url(e){const t=e+"=".repeat((4-e.length%4)%4);return decodeURIComponent(escape(atob(t.replace(/-/g,"+").replace(/_/g,"/"))))}}class pv extends Gn{constructor(){super(),this.getElements(),this.linkProjectInfo(),this.linkMenuBar()}getElements(){this.projectNameElem=document.getElementById("project-name"),this.modeSelect=document.getElementById("mode-select"),this.loaderElement=document.getElementById("loader"),this.menuSave=document.getElementById("menu-save"),this.menuNew=document.getElementById("menu-new"),this.menuCopy=document.getElementById("menu-copy"),this.menuLoad=document.getElementById("menu-load"),this.menuDelete=document.getElementById("menu-delete"),this.menuImport=document.getElementById("menu-import"),this.menuExport=document.getElementById("menu-export"),this.menuShare=document.getElementById("menu-share"),this.menuResetShader=document.getElementById("menu-reset-shader"),this.menuClearAnimations=document.getElementById("menu-clear-animations")}linkProjectInfo(){this.projectNameElem.addEventListener("change",e=>{const t=this.projectList.currentProject;t&&(t.name=this.projectNameElem.value,this.projectList.currentProjectName=t.name,t.updateModified(),At.saveProjectList(this.projectList))}),this.modeSelect.addEventListener("change",e=>{const t=e.target.selectedIndex;this.trigger("modeChanged",[t])})}linkMenuBar(){this.menuSave.addEventListener("click",()=>{At.saveProject(this.projectList.currentProjectID,this.projectList.currentProjectName,this.experience)}),this.menuNew.addEventListener("click",()=>{At.newProject(this.experience)}),this.menuCopy.addEventListener("click",()=>{this.projectList.currentProjectID=0,this.projectList.currentProjectName=this.projectList.currentProjectName+"_copy",this.projectNameElem.value=this.projectList.currentProjectName,At.saveProject(this.projectList.currentProjectID,this.projectList.currentProjectName,this.experience)}),this.menuLoad.addEventListener("click",()=>{this.trigger("loadRequested")}),this.menuDelete.addEventListener("click",()=>{At.deleteProject(this.projectList.currentProjectID),this.projectList.deleteProject(this.projectList.currentProjectID),At.saveProjectList(this.projectList),At.newProject(this.experience)}),this.menuResetShader.addEventListener("click",()=>{this.trigger("resetShaderRequested")}),this.menuClearAnimations.addEventListener("click",()=>{this.trigger("clearAnimationsRequested")}),this.menuExport.addEventListener("click",()=>{At.exportProject(this.projectList.currentProjectName,this.experience)}),this.menuShare.addEventListener("click",async()=>{kn.encode(this.experience),await kn.copyShareURL();const e=this.menuShare.textContent;this.menuShare.textContent="Copied!",setTimeout(()=>{this.menuShare.textContent=e},1500)}),this.menuImport.addEventListener("click",()=>{const e=document.createElement("input");e.type="file",e.accept=".json",e.onchange=async t=>{const n=t.target.files[0];n&&await At.importProject(n,this.experience)},e.click()})}setProject(){this.projectNameElem.value=this.projectList.currentProjectName}setModeFromIndex(e){const t=this.modeSelect,n=t.options[e];t.value=n.value}createProjectCards(){const e=this.experience.projectList,t=this.loaderElement.querySelector(".modal"),n=t.querySelector(".projects-container");n&&(n.innerHTML="");const s=n||document.createElement("div");s.className="projects-container",n||t.appendChild(s),e&&e.projects&&e.projects.forEach(r=>{s.appendChild(this.createProjectCard(r))})}createProjectCard(e){const t=document.createElement("div");t.className="project-card";const n=document.createElement("img");n.className="project-image",n.src=e.image||null,n.alt=e.name;const s=document.createElement("div");return s.className="project-name",s.textContent=e.name,t.appendChild(n),t.appendChild(s),t.addEventListener("click",()=>{At.loadProject(e.id,this.experience),this.trigger("projectLoaded")}),t}}const mv=Object.fromEntries(Object.entries(me).map(([i,e])=>[e,i]));class gv extends Gn{constructor(){super(),this.selected=null,this.getElements(),this.linkTransport(),this.linkTimelineArea(),this.linkPropsPanel(),this.linkKeyboardEvents(),this.updateMusicUI(),this.select(null)}getElements(){this.playPauseBtn=document.getElementById("play-pause-timeline-button"),this.seekStartBtn=document.getElementById("seek-start-timeline-button"),this.seekEndBtn=document.getElementById("seek-end-timeline-button"),this.loopModeBtn=document.getElementById("loop-mode-btn"),this.durationInput=document.getElementById("timeline-duration"),this.timeReadout=document.getElementById("timeline-time-readout"),this.musicModeBtn=document.getElementById("music-mode-btn"),this.durationControls=document.getElementById("duration-controls"),this.musicControls=document.getElementById("music-controls"),this.bpmInput=document.getElementById("music-bpm"),this.barsInput=document.getElementById("music-bars"),this.sigInput=document.getElementById("music-sig"),this.gridSelect=document.getElementById("music-grid"),this.scroll=document.getElementById("tp-scroll"),this.scrollContent=document.getElementById("tp-scroll-content"),this.ruler=document.getElementById("tp-ruler"),this.rows=document.getElementById("tp-rows"),this.emptyHint=document.getElementById("tp-empty-hint"),this.playhead=document.getElementById("tp-playhead"),this.propName=document.getElementById("tp-prop-name"),this.propsBody=document.getElementById("tp-props-body"),this.propsEmpty=document.getElementById("tp-props-empty"),this.propTime=document.getElementById("tp-prop-time"),this.propValue=document.getElementById("tp-prop-value"),this.propSharpness=document.getElementById("tp-prop-sharpness"),this.propDelete=document.getElementById("tp-prop-delete")}linkTransport(){this.playPauseBtn.addEventListener("click",()=>{this.animation.togglePlay(),this.playPauseBtn.blur()}),this.seekStartBtn.addEventListener("click",()=>{this.animation.setTime(0),this.seekStartBtn.blur()}),this.seekEndBtn.addEventListener("click",()=>{this.animation.setTime(this.animation.duration),this.seekEndBtn.blur()}),this.loopModeBtn.addEventListener("click",()=>{const e=this.animation.mode==="loop"?"pingpong":"loop";this.animation.setMode(e),this.updateModeButton(e),this.loopModeBtn.blur()}),this.durationInput.addEventListener("change",()=>{this.animation.setDuration(this.durationInput.value),this.durationInput.value=this.animation.duration}),this.musicModeBtn.addEventListener("click",()=>{this.animation.setMusicMode(!this.animation.musicMode),this.musicModeBtn.blur()}),this.bpmInput.addEventListener("change",()=>{this.animation.setBpm(this.bpmInput.value),this.bpmInput.value=this.animation.bpm}),this.barsInput.addEventListener("change",()=>{this.animation.setBars(this.barsInput.value),this.barsInput.value=this.animation.bars}),this.sigInput.addEventListener("change",()=>{this.animation.setBeatsPerBar(this.sigInput.value),this.sigInput.value=this.animation.beatsPerBar}),this.gridSelect.addEventListener("change",()=>{this.animation.setGridDivision(this.gridSelect.value)})}updateMusicUI(){const e=this.animation.musicMode;this.musicModeBtn.classList.toggle("active",e),this.durationControls.style.display=e?"none":"",this.musicControls.style.display=e?"":"none",this.bpmInput.value=this.animation.bpm,this.barsInput.value=this.animation.bars,this.sigInput.value=this.animation.beatsPerBar,this.gridSelect.value=this.animation.gridDivision,this.durationInput.value=this.animation.duration,this.updateRuler(),this.updatePlayhead()}linkKeyboardEvents(){this.keyboard.on("togglePlay",()=>{this.animation.togglePlay()}),this.keyboard.on("seekStart",()=>{this.animation.setTime(0)}),this.keyboard.on("seekEnd",()=>{this.animation.setTime(this.animation.duration)}),window.addEventListener("keydown",e=>{var n;if(e.code!=="Delete"&&e.code!=="Backspace")return;const t=(n=document.activeElement)==null?void 0:n.tagName;t==="INPUT"||t==="SELECT"||t==="TEXTAREA"||this.selected&&(e.preventDefault(),this.deleteSelectedKeyframe())})}updatePlayButton(e){this.playPauseBtn.textContent=e?"⏸":"▶"}updateModeButton(e){this.loopModeBtn.textContent=e==="pingpong"?"⇄":"⟳",this.loopModeBtn.setAttribute("data-tooltip",e==="pingpong"?"Ping-Pong (click for Loop)":"Loop (click for Ping-Pong)")}updateDurationInput(){this.durationInput.value=this.animation.duration}timeFromClientX(e){const t=this.ruler.getBoundingClientRect();if(t.width<=0)return 0;const n=(e-t.left)/t.width,s=Math.min(Math.max(0,n),1)*this.animation.duration;return this.animation.snapTime(s)}updateRuler(){if(this.animation.musicMode){this.updateRulerMusic();return}const e=this.animation.duration,t=this.ruler.getBoundingClientRect().width||800,n=[.1,.25,.5,1,2,5,10,30,60],s=t/e;let r=n[n.length-1];for(const a of n)if(a*s>=60){r=a;break}this.ruler.innerHTML="";for(let a=0;a<e-r*.25;a+=r){const o=document.createElement("span");o.className="tp-tick",o.style.left=a/e*100+"%",o.textContent=Math.round(a*100)/100+"s",this.ruler.appendChild(o)}}updateRulerMusic(){const e=this.animation,t=e.duration,s=(this.ruler.getBoundingClientRect().width||800)/t,r=e.secondsPerBeat*e.beatsPerBar;this.ruler.innerHTML="";const a=Math.ceil(e.bars);for(let l=0;l<a;l++){const c=l*r;if(c>t+1e-6)break;const u=document.createElement("span");u.className="tp-tick",u.style.left=c/t*100+"%",u.textContent=String(l+1),this.ruler.appendChild(u)}const o=e.gridStepSeconds();if(o>0&&o*s>=5)for(let l=o;l<t-1e-6;l+=o){const c=l/r;if(Math.abs(c-Math.round(c))<1e-6)continue;const u=document.createElement("span");u.className="tp-tick tp-tick-minor",u.style.left=l/t*100+"%",this.ruler.appendChild(u)}}updatePlayhead(){const e=this.animation.duration>0?this.animation.playhead/this.animation.duration:0;this.playhead.style.left=`calc(var(--tp-label-w) + ${e} * (100% - var(--tp-label-w)))`,this.timeReadout.textContent=this.formatTime(this.animation.playhead)}formatTime(e){if(!this.animation.musicMode)return e.toFixed(2)+"s";const t=this.animation.beatsAt(e)+1e-6,n=Math.floor(t/this.animation.beatsPerBar)+1,s=Math.floor(t%this.animation.beatsPerBar)+1;return`${n}.${s}`}isOrphanModulatorTrack(e){var n,s;if(typeof e!="string"||!e.startsWith("mod:"))return!1;const t=(n=this.experience.modulatorManager)==null?void 0:n.get(Number(e.split(":")[1]));return t?!((s=this.experience.shader)!=null&&s.getInput(t.targetEId)):!0}getTrackName(e){var n,s,r;if(typeof e=="string"&&e.startsWith("mod:")){const[,a,o]=e.split(":"),l=(n=this.experience.modulatorManager)==null?void 0:n.get(Number(a));if(!l)return`Mod ${o}`;const c=(s=this.experience.shader)==null?void 0:s.getInput(l.targetEId),u=c?String(c.name):`Param ${l.targetEId}`;return`${l.type==="lfo"?"LFO":"dB"}·${u} ${o}`}const t=(r=this.experience.shader)==null?void 0:r.getInput(e);return t?String(t.name):mv[e]??`Param ${e}`}rebuild(){this.rows.innerHTML="";const e=Array.from(this.animation.tracks.values()).filter(t=>!this.isOrphanModulatorTrack(t.eId));if(this._laneOrder=e.map(t=>t.eId),this.emptyHint.hidden=e.length>0,e.forEach((t,n)=>{const s=document.createElement("div");s.className="tp-track-row",s.setAttribute("data-channel",n%5+1);const r=document.createElement("div");r.className="tp-track-label",r.title=this.getTrackName(t.eId),t.muted&&s.classList.add("muted");const a=document.createElement("button");a.className="tp-mute-btn",a.textContent=t.muted?"○":"●",a.title=t.muted?"Unmute track":"Mute track",a.addEventListener("click",c=>{c.stopPropagation(),this.animation.toggleMute(t.eId)});const o=document.createElement("span");o.className="tp-track-name",o.textContent=this.getTrackName(t.eId),r.appendChild(a),r.appendChild(o);const l=document.createElement("div");l.className="tp-track",this.linkLane(l,t);for(const c of t.keys)l.appendChild(this.buildKeyElement(t,c));s.appendChild(r),s.appendChild(l),this.rows.appendChild(s)}),this.selected){const t=this.animation.getTrack(this.selected.eId);!t||!t.keys.includes(this.selected.key)?this.select(null):this.refreshPropsPanel()}}buildKeyElement(e,t){const n=document.createElement("div");return n.className="tp-key",n.style.left=this.keyLeftPercent(t),this.selected&&this.selected.key===t&&n.classList.add("selected"),n.addEventListener("pointerdown",s=>{if(s.stopPropagation(),s.ctrlKey||s.metaKey){const r={t:t.t,v:t.v,s:t.s};e.keys.push(r),e.sortKeys();const a=this.buildKeyElement(e,r);n.parentElement.appendChild(a),this.select(e.eId,r),this.startKeyDrag(a,e,r,s,!0);return}this.select(e.eId,t),this.startKeyDrag(n,e,t,s)}),n.addEventListener("contextmenu",s=>{s.preventDefault(),s.stopPropagation();const r=e.keys.indexOf(t);r>=0&&(this.selected&&this.selected.key===t&&(this.selected=null),this.animation.removeKeyframe(e.eId,r),this.animation.apply())}),n}keyLeftPercent(e){const t=this.animation.duration;return(t>0?Math.min(e.t/t,1):0)*100+"%"}startKeyDrag(e,t,n,s,r=!1){e.setPointerCapture(s.pointerId);let a=!1;const o=c=>{a=!0;const u=this.timeFromClientX(c.clientX);t.moveKeyframe(t.keys.indexOf(n),u),e.style.left=this.keyLeftPercent(n),this.animation.apply(),this.refreshPropsPanel()},l=()=>{if(e.removeEventListener("pointermove",o),e.removeEventListener("pointerup",l),e.removeEventListener("pointercancel",l),!a&&r){const c=t.keys.indexOf(n);c>=0&&t.removeKeyframe(c)}(a||r)&&this.animation.trigger("tracksChanged")};e.addEventListener("pointermove",o),e.addEventListener("pointerup",l),e.addEventListener("pointercancel",l)}linkLane(e,t){e.addEventListener("pointerdown",n=>{this.select(null),this.startScrub(e,n)}),e.addEventListener("dblclick",n=>{const s=this.timeFromClientX(n.clientX),r=t.evaluate(s);this.animation.addOrUpdateKeyframe(t.eId,s,r);const a=t.indexOfKeyAt(s,this.animation.keyEpsilon);a>=0&&(this.select(t.eId,t.keys[a]),this.rebuild())})}linkTimelineArea(){this.ruler.addEventListener("pointerdown",e=>{this.startScrub(this.ruler,e)}),this.sizes.on("resize",()=>{this.updateRuler()})}startScrub(e,t){e.setPointerCapture(t.pointerId),this.animation.setTime(this.timeFromClientX(t.clientX));const n=r=>{this.animation.setTime(this.timeFromClientX(r.clientX))},s=()=>{e.removeEventListener("pointermove",n),e.removeEventListener("pointerup",s),e.removeEventListener("pointercancel",s)};e.addEventListener("pointermove",n),e.addEventListener("pointerup",s),e.addEventListener("pointercancel",s)}select(e,t=null){this.selected=e==null||!t?null:{eId:e,key:t};for(const n of this.rows.querySelectorAll(".tp-key.selected"))n.classList.remove("selected");if(this.selected){const n=this.animation.getTrack(this.selected.eId);if(n){const s=this.rows.querySelectorAll(".tp-track"),a=(this._laneOrder||Array.from(this.animation.tracks.keys())).indexOf(this.selected.eId),o=s[a],l=n.keys.indexOf(this.selected.key);o&&o.children[l]&&o.children[l].classList.add("selected")}}this.refreshPropsPanel()}refreshPropsPanel(){if(!this.selected){this.propName.textContent="Keyframe",this.propsBody.hidden=!0,this.propsEmpty.hidden=!1;return}const{eId:e,key:t}=this.selected;this.propName.textContent=this.getTrackName(e),this.propsBody.hidden=!1,this.propsEmpty.hidden=!0,document.activeElement!==this.propTime&&(this.propTime.value=Math.round(t.t*100)/100),document.activeElement!==this.propValue&&(this.propValue.value=Math.round(t.v*1e4)/1e4),this.propSharpness.value=t.s}linkPropsPanel(){this.propTime.addEventListener("change",()=>{if(!this.selected)return;const e=this.animation.getTrack(this.selected.eId);if(!e)return;const t=e.keys.indexOf(this.selected.key);t<0||(e.moveKeyframe(t,this.animation.snapTime(Number(this.propTime.value))),this.animation.apply(),this.animation.trigger("tracksChanged"))}),this.propValue.addEventListener("change",()=>{this.selected&&(this.selected.key.v=Number(this.propValue.value),this.animation.apply(),this.animation.trigger("tracksChanged"))}),this.propSharpness.addEventListener("input",()=>{this.selected&&(this.selected.key.s=Number(this.propSharpness.value),this.animation.apply())}),this.propDelete.addEventListener("click",()=>{this.deleteSelectedKeyframe()})}deleteSelectedKeyframe(){if(!this.selected)return;const{eId:e,key:t}=this.selected,n=this.animation.getTrack(e);if(this.selected=null,n){const s=n.keys.indexOf(t);s>=0&&(this.animation.removeKeyframe(e,s),this.animation.apply())}this.refreshPropsPanel()}}class _v extends Gn{constructor(){super(),this.getElements(),this.linkDualInputs()}getElements(){this.leftInputsContainer=document.getElementById("left-inputs")}updateFromShader(){this.experience.shader&&(this.shader=this.experience.shader,this.clearControls(),this.setControls(this.shader),this.setUIfromShader(),this.trigger("shaderUpdated",[this.shader]))}setControls(e){const t=document.getElementById("left-inputs");this.clearControls(t),this.addControls(e,t)}addControls(e,t){const n=e.getGroups();for(const[s,r]of Object.entries(n)){for(const a of r)this.addControl(a,t);this.addBreak(t)}}addControl(e,t){switch(e.type){case"number":this.addNumberControl(e,t);break}}addBreak(e){const t=document.createElement("div");t.setAttribute("class","bottom-outline"),e.appendChild(t)}addNumberControl(e,t){const n=e.getId(),s=document.createElement("div");s.setAttribute("class","slider-container nc-card");const r=document.createElement("label");r.textContent=e.name,r.setAttribute("class","label-text"),r.setAttribute("for",n);const a=document.createElement("div");a.setAttribute("class","number-input-grid");const o=document.createElement("button");o.setAttribute("class","keyframe-btn"),o.setAttribute("title","Add / update keyframe at playhead"),o.setAttribute("id",n+"-key-btn"),o.textContent="◇",e.elements.keyBtn=o;const l=document.createElement("input");l.setAttribute("type","range"),l.setAttribute("min",e.min),l.setAttribute("max",e.max),l.setAttribute("step",e.step),l.setAttribute("value",e.value),l.setAttribute("class","control-slider"),l.setAttribute("id",n+"-slider"),e.elements.slider=l;const c=document.createElement("input");c.setAttribute("type","number"),c.setAttribute("step",e.step),c.setAttribute("class","control-number control-number-ease"),c.setAttribute("id",n+"-value"),c.value=l.value,e.elements.value=c;const u=document.createElement("button");u.setAttribute("class","nc-back"),u.setAttribute("title","Revert to previous value"),u.textContent="↺",u.disabled=!0;const d=document.createElement("button");d.setAttribute("class","nc-gear"),d.setAttribute("title","Edit range (min / max)"),d.textContent="⚙";let f=e.value,m=e.value;const g=()=>{m=e.value},_=()=>{f=m,u.disabled=!1};o.addEventListener("click",()=>{this.trigger("keyframeRequested",[e])}),l.addEventListener("pointerdown",g),l.addEventListener("input",()=>{c.value>l.max&&(c.value=l.max),c.value<l.min&&(c.value=l.min),c.value=l.value,e.setValue(l.value),this.trigger("parameterEdited",[e])}),l.addEventListener("change",_),c.addEventListener("focus",g),c.addEventListener("change",()=>{l.value=c.value,e.setValue(l.value),_(),this.trigger("parameterEdited",[e])}),u.addEventListener("click",()=>{const b=e.value;e.setValue(f),l.value=e.value,c.value=e.value,f=b,this.trigger("parameterEdited",[e])});const p=e.min,h=e.max,E=document.createElement("div");E.setAttribute("class","nc-config");const y=(b,T,C)=>{const A=document.createElement("div");A.setAttribute("class","nc-bound");const O=document.createElement("span");O.setAttribute("class","nc-bound-label"),O.textContent=b;const x=document.createElement("button");x.setAttribute("class","nc-bound-btn"),x.setAttribute("title",`Set ${b.toLowerCase()} to current value`),x.textContent="Set",x.addEventListener("click",()=>T(e.value));const w=document.createElement("button");return w.setAttribute("class","nc-bound-btn nc-bound-reset"),w.setAttribute("title",`Reset ${b.toLowerCase()} to default`),w.textContent="Reset",w.addEventListener("click",()=>T(C)),A.append(O,x,w),A};E.appendChild(y("Min",b=>{e.min=b,l.setAttribute("min",b)},p)),E.appendChild(y("Max",b=>{e.max=b,l.setAttribute("max",b)},h)),d.addEventListener("click",b=>{b.stopPropagation();const T=s.classList.toggle("expanded");d.classList.toggle("active",T)}),s.appendChild(r),s.appendChild(u),s.appendChild(d),s.appendChild(a),s.appendChild(E),a.appendChild(o),a.appendChild(l),a.appendChild(c),t.appendChild(s)}clearControls(e){e&&(e.innerHTML="")}setUIfromShader(){if(!this.shader)return;const e=this.shader.eShader;this.shaderUniforms.uMode.value=this.shader.eShader,this.trigger("modeIndexChanged",[e])}refreshKeyButtons(){const e=this.experience.shader;if(e)for(const t of e.getNumInputs()){const n=t.elements.keyBtn;if(!n)continue;const s=!!this.animation.getTrack(t.eId),r=s&&this.animation.hasKeyAtPlayhead(t.eId);n.classList.toggle("has-track",s),n.classList.toggle("on-key",r),n.textContent=r?"◆":"◇"}}syncSlidersToShader(){const e=this.experience.shader;if(e)for(const t of e.getNumInputs())this.animation.getTrack(t.eId)&&(t.setFromShader(),t.elements.slider&&document.activeElement!==t.elements.slider&&(t.elements.slider.value=t.value),t.elements.value&&document.activeElement!==t.elements.value&&(t.elements.value.value=Math.round(t.value*1e4)/1e4))}linkDualInputs(){const e=document.getElementsByClassName("dual-input-grid");for(const t of e){const n=t.children[0],s=t.children[1];n.addEventListener("input",r=>{s.value=n.value}),s.addEventListener("input",r=>{n.value=s.value})}}}const vv=[{beats:16,label:"4 bars"},{beats:8,label:"2 bars"},{beats:4,label:"1 bar"},{beats:2,label:"1/2"},{beats:1,label:"1/4"},{beats:.5,label:"1/8"},{beats:.25,label:"1/16"}],xv=["sine","triangle","saw","square"];class yv extends Gn{constructor(){super(),this.audioEngine=this.experience.audioEngine,this.manager=this.experience.modulatorManager,this.getElements(),this.linkAudioControls(),this.buildAddButtons(),this.rebuild()}getElements(){this.uploadBtn=document.getElementById("audio-upload-btn"),this.fileNameEl=document.getElementById("audio-file-name"),this.bpmRow=document.getElementById("audio-bpm-row"),this.detectedBpmEl=document.getElementById("audio-detected-bpm"),this.applyBpmBtn=document.getElementById("audio-apply-bpm"),this.addRow=document.getElementById("modulator-add-row"),this.list=document.getElementById("modulator-list")}linkAudioControls(){this.uploadBtn.addEventListener("click",()=>this.promptAudioUpload()),this.applyBpmBtn.addEventListener("click",()=>{const e=this.audioEngine;if(!e.bpm||!e.buffer)return;this.animation.setMusicMode(!0),this.animation.setBpm(e.bpm);const t=this.animation.secondsPerBeat*this.animation.beatsPerBar,n=Math.max(1,Math.round(e.buffer.duration/t));this.animation.setBars(n)})}promptAudioUpload(){const e=document.createElement("input");e.type="file",e.accept="audio/*",e.onchange=async t=>{const n=t.target.files&&t.target.files[0];n&&await this.loadAudioFile(n)},e.click()}async loadAudioFile(e){const t=this.audioEngine.beginLoad();this.fileNameEl.textContent=`Analyzing ${e.name}…`,this.uploadBtn.disabled=!0;try{const{bpm:n,duration:s}=await this.audioEngine.load(e);if(this.audioEngine.isStale(t))return;this.fileNameEl.textContent=`${e.name} (${this.formatDuration(s)})`,this.detectedBpmEl.textContent=String(n),this.bpmRow.style.display="",this.rebuild()}catch(n){console.error("Audio load failed:",n),this.fileNameEl.textContent=`Failed to load ${e.name}`}finally{this.uploadBtn.disabled=!1}}formatDuration(e){const t=Math.floor(e/60),n=Math.round(e%60).toString().padStart(2,"0");return`${t}:${n}`}onAudioRestored(){const e=this.audioEngine;e.hasAudio()?(this.fileNameEl.textContent=`${e.fileName} (${this.formatDuration(e.buffer.duration)})`,this.detectedBpmEl.textContent=String(e.bpm),this.bpmRow.style.display=""):(this.fileNameEl.textContent="No track loaded",this.bpmRow.style.display="none"),this.rebuild()}buildAddButtons(){const e=document.createElement("button");e.className="control-button default-button",e.textContent="+ LFO",e.addEventListener("click",()=>this.addModulator("lfo"));const t=document.createElement("button");t.className="control-button default-button",t.textContent="+ dB Follower",t.addEventListener("click",()=>this.addModulator("dbFollower")),this.addRow.appendChild(e),this.addRow.appendChild(t)}addModulator(e){const t=this.shaderInputs();if(t.length===0)return;const n=t[0],s=n.max-n.min;this.manager.add(e,{targetEId:n.eId,center:n.getValue?n.getValue():n.value,range:s*.25}),this.rebuild(),this.animation.apply()}shaderInputs(){const e=this.experience.shader;return e?e.getNumInputs():[]}rebuild(){if(!this.list)return;this.list.innerHTML="",this._amountInputs=[];const e=this.shaderInputs();for(const t of this.manager.list())e.some(n=>n.eId===t.targetEId)&&this.list.appendChild(this.buildCard(t,e))}buildCard(e,t){const n=t.find(u=>u.eId===e.targetEId),s=document.createElement("div");s.className="mod-card",s.dataset.id=e.id;const r=document.createElement("div");r.className="mod-card-head";const a=document.createElement("span");a.className="mod-card-title",a.textContent=e.type==="lfo"?"LFO":"dB";const o=this.buildSelect(t.map(u=>({value:u.eId,label:String(u.name)})),e.targetEId,u=>{e.targetEId=Number(u),this.rebuild(),this.animation.apply()});o.classList.add("mod-target");const l=document.createElement("button");l.className="mod-enable",l.textContent=e.enabled?"●":"○",l.title=e.enabled?"Enabled":"Disabled",l.addEventListener("click",()=>{e.enabled=!e.enabled,l.textContent=e.enabled?"●":"○",this.animation.apply()});const c=document.createElement("button");return c.className="mod-remove",c.textContent="×",c.title="Remove modulator",c.addEventListener("click",()=>{this.manager.remove(e.id),this.rebuild(),this.animation.trigger("tracksChanged"),this.animation.apply()}),r.append(a,o,l,c),s.appendChild(r),e.type==="lfo"?s.appendChild(this.buildLfoRow(e)):s.appendChild(this.buildDbRow(e)),s.appendChild(this.buildAmountRow(e,n,"center")),s.appendChild(this.buildAmountRow(e,n,"range")),s}buildLfoRow(e){const t=document.createElement("div");t.className="mod-row";const n=this.buildSelect(xv.map(r=>({value:r,label:r})),e.waveform,r=>{e.waveform=r,this.animation.apply()}),s=this.buildSelect(vv.map(r=>({value:r.beats,label:r.label})),e.rateBeats,r=>{e.rateBeats=Number(r),this.animation.apply()});return t.append(this.labelled("Wave",n),this.labelled("Rate",s)),t}buildDbRow(e){const t=document.createElement("div");t.className="mod-row";const n=this.buildSelect([{value:"low",label:"Low"},{value:"mid",label:"Mid"},{value:"high",label:"High"}],e.band,r=>{e.band=r,this.animation.apply()}),s=document.createElement("input");if(s.type="range",s.className="control-slider",s.min="0",s.max="0.95",s.step="0.05",s.value=e.damping,s.addEventListener("input",()=>{e.damping=Number(s.value),this.animation.apply()}),t.append(this.labelled("Band",n),this.labelled("Damp",s)),!this.audioEngine.hasAudio()){const r=document.createElement("p");r.className="label-text mod-hint",r.textContent="Upload a track to drive this.",t.appendChild(r)}return t}buildAmountRow(e,t,n){const s=document.createElement("div");s.className="mod-row mod-amount-row";const r=t?t.max-t.min:1,a=n==="center"&&t?t.min:0,o=n==="center"?t?t.max:1:r,l=t?t.step:.01,c=n==="center"?e.centerTrackId:e.rangeTrackId,u=document.createElement("span");u.className="label-text mod-amount-label",u.textContent=n==="center"?"Center":"Range";const d=document.createElement("input");d.type="range",d.className="control-slider",d.min=a,d.max=o,d.step=l,d.value=e[n];const f=document.createElement("input");f.type="number",f.className="control-number",f.min=a,f.max=o,f.step=l,f.value=e[n];const m=document.createElement("button");m.className="keyframe-btn",m.textContent="◇",m.title="Add / update keyframe at playhead";const g=_=>{e[n]=Math.min(o,Math.max(a,Number(_))),d.value=e[n],f.value=e[n],this.autoKey(c,e[n]),this.animation.apply()};return d.addEventListener("input",()=>g(d.value)),f.addEventListener("change",()=>g(f.value)),m.addEventListener("click",()=>{this.animation.addOrUpdateKeyframe(c,this.animation.playhead,e[n])}),this._amountInputs.push({mod:e,which:n,slider:d,num:f,trackId:c}),s.append(u,d,f,m),s}syncCards(){if(this._amountInputs)for(const e of this._amountInputs){const t=this.animation.getTrack(e.trackId);if(!t||t.length===0)continue;const n=t.evaluate(this.animation.playhead);document.activeElement!==e.slider&&(e.slider.value=n),document.activeElement!==e.num&&(e.num.value=Math.round(n*1e4)/1e4)}}autoKey(e,t){if(this.animation.playing)return;const n=this.animation.getTrack(e);if(!n)return;const s=n.indexOfKeyAt(this.animation.playhead,this.animation.keyEpsilon);s>=0&&(n.keys[s].v=t,this.animation.trigger("tracksChanged"))}buildSelect(e,t,n){const s=document.createElement("select");s.className="control-select";for(const r of e){const a=document.createElement("option");a.value=r.value,a.textContent=r.label,String(r.value)===String(t)&&(a.selected=!0),s.appendChild(a)}return s.addEventListener("change",()=>n(s.value)),s}labelled(e,t){const n=document.createElement("span");n.className="mod-field";const s=document.createElement("span");return s.className="label-text mod-field-label",s.textContent=e,n.append(s,t),n}}class Sv extends hi{constructor(){super(),this.experience=new Wn,this.initControllers(),this.wireControllers(),this.finalizeSetup()}initControllers(){this.utility=new Og,this.videoExport=new cv,this.palette=new dv,this.viewModal=new uv,this.project=new pv,this.keyframeTimeline=new gv,this.shaderControls=new _v,this.modulators=new yv}wireControllers(){const e=this.experience.animation;this.shaderControls.on("keyframeRequested",t=>{e.addOrUpdateKeyframe(t.eId,e.playhead,Number(t.value))}),this.shaderControls.on("parameterEdited",t=>{if(e.playing)return;const n=e.getTrack(t.eId);if(!n)return;const s=n.indexOfKeyAt(e.playhead,e.keyEpsilon);s>=0&&(n.keys[s].v=Number(t.value),e.trigger("tracksChanged"))}),this.shaderControls.on("modeIndexChanged",t=>{this.project.setModeFromIndex(t)}),this.shaderControls.on("shaderUpdated",t=>{this.palette.setPaletteFromIndex(t.paletteIndex)}),e.on("timeChanged",()=>{this.keyframeTimeline.updatePlayhead(),this.shaderControls.syncSlidersToShader(),this.shaderControls.refreshKeyButtons(),this.modulators.syncCards()}),e.on("tracksChanged",()=>{this.keyframeTimeline.rebuild(),this.shaderControls.refreshKeyButtons()}),e.on("playStateChanged",t=>{this.keyframeTimeline.updatePlayButton(t);const n=t&&this.videoExport.isVideoArmed();n&&this.videoExport.startVideoExport();const s=this.experience.audioEngine;s.hasAudio()&&!n&&(t?s.play(e.playhead,e.duration):s.stop())}),this._lastAudioSeek=-1,e.on("seeked",t=>{const n=this.experience.audioEngine;!n.hasAudio()||!n.playing||Math.abs(t-this._lastAudioSeek)<.05||(this._lastAudioSeek=t,n.seek(t,e.duration))}),e.on("durationChanged",()=>{this.keyframeTimeline.updateRuler(),this.keyframeTimeline.updateDurationInput(),this.keyframeTimeline.rebuild()}),e.on("modeChanged",t=>{this.keyframeTimeline.updateModeButton(t)}),e.on("musicSettingsChanged",()=>{this.keyframeTimeline.updateMusicUI()}),this.project.on("modeChanged",t=>{this.experience.setShader(t),this.experience.updateFromShader()}),this.project.on("loadRequested",()=>{this.project.createProjectCards(),this.viewModal.openLoadView()}),this.project.on("projectLoaded",()=>{this.viewModal.closeLoadView()}),this.project.on("resetShaderRequested",()=>{const t=this.experience.shader.eShader;this.experience.setShader(t),this.experience.updateFromShader()}),this.project.on("clearAnimationsRequested",()=>{e.clear(),this.experience.modulatorManager.clear(),this.modulators.rebuild()}),this.viewModal.setupEscapeHandler(this.videoExport)}finalizeSetup(){this.updateFromShader()}updateFromShader(){this.shaderControls.updateFromShader(),this.keyframeTimeline.rebuild(),this.shaderControls.refreshKeyButtons(),this.modulators.rebuild()}setProject(){this.project.setProject(),this.updateFromShader()}async startVideoExport(){await this.videoExport.startVideoExport()}getUniformValues(){return this.utility.getUniformValues()}setUniformValues(e){this.utility.setUniformValues(e)}}class Ev{constructor(){this.experience=new Wn,this.debug=this.experience.debug,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.time=this.experience.time,this.mouse=this.experience.mouse,this.scene=this.experience.scene,this.shaderMaterial=this.experience.shaderMaterial,this.shaderUniforms=this.shaderMaterial.getUniforms(),this.shader=null,this.x=0,this.y=0,this.zoom=2.47,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("Screen"),this.debugFolder.close()),this.setInstance()}setInstance(){const e=new vr(2,2,32,32);this.instance=new yn(e,this.shaderMaterial.material),this.scene.add(this.instance)}updateFromShader(){this.shader=this.experience.shader,this.zoom=this.shaderUniforms.uFloatPar.value[me.zoom]}resize(){this.shaderUniforms.uAspect.value=this.sizes.aspect}update(){this.shaderUniforms.uTime.value=this.time.elapsed/1e3}touchmove(){const e=-this.mouse.deltaX/this.sizes.width*2,t=this.mouse.deltaY/this.sizes.height*2;this.mouse.clickHeld&&(this.shaderUniforms.uFloatPar.value[me.posX]-=e*this.zoom/2*this.sizes.aspect,this.shaderUniforms.uFloatPar.value[me.posY]-=t*this.zoom/2,this.shader.getInput(me.posX).setFromShader(),this.shader.getInput(me.posY).setFromShader()),this.x+=e,this.y+=t}mousemove(){const e=-this.mouse.x/this.sizes.width*2+1,t=this.mouse.y/this.sizes.height*2-1;if(this.mouse.clickHeld){const n=this.x-e,s=this.y-t;this.shaderUniforms.uFloatPar.value[me.posX]-=n*this.zoom/2*this.sizes.aspect,this.shaderUniforms.uFloatPar.value[me.posY]-=s*this.zoom/2,this.shader.getInput(me.posX).setFromShader(),this.shader.getInput(me.posY).setFromShader()}this.x=e,this.y=t}scroll(){this.zoom=this.shaderUniforms.uFloatPar.value[me.zoom],this.x=-this.mouse.x/this.sizes.width*2+1,this.y=this.mouse.y/this.sizes.height*2-1;const e=this.zoom,t=Math.exp(this.mouse.scrollDeltaY/2e3);this.zoom*=t;const n=e-this.zoom;this.shaderUniforms.uFloatPar.value[me.zoom]=this.zoom,this.shaderUniforms.uFloatPar.value[me.posX]-=this.x*n*this.sizes.aspect/2,this.shaderUniforms.uFloatPar.value[me.posY]-=this.y*n/2,this.shader.getInput(me.zoom).setFromShader(),this.shader.getInput(me.posX).setFromShader(),this.shader.getInput(me.posY).setFromShader()}captureImage(e="image/jpeg",t=.8){return this.experience.renderer.instance.render(this.scene,this.experience.camera.instance),this.canvas.toDataURL(e,t)}captureBlob(e="image/png",t=1){return this.experience.renderer.instance.render(this.scene,this.experience.camera.instance),new Promise(n=>this.canvas.toBlob(n,e,t))}}const bv=[{name:"Classic",length:7,palette:[new $("#000000").convertLinearToSRGB(),new $("#14213d").convertLinearToSRGB(),new $("#47b8f0").convertLinearToSRGB(),new $("#e5e5e5").convertLinearToSRGB(),new $("#fca311").convertLinearToSRGB(),new $("#bb3c11").convertLinearToSRGB(),new $("#000000").convertLinearToSRGB(),new $(0,0,0),new $(0,0,0),new $(0,0,0),new $(0,0,0),new $(0,0,0)]},{name:"Sunny Beach Day",length:5,palette:[new $("#264653").convertLinearToSRGB(),new $("#2a9d8f").convertLinearToSRGB(),new $("#e9c46a").convertLinearToSRGB(),new $("#f4a261").convertLinearToSRGB(),new $("#e76f51").convertLinearToSRGB(),new $(0,0,0),new $(0,0,0),new $(0,0,0),new $(0,0,0),new $(0,0,0)]},{name:"Autumn",length:6,palette:[new $("#335c67").convertLinearToSRGB(),new $("#99a88c").convertLinearToSRGB(),new $("#fff3b0").convertLinearToSRGB(),new $("#e09f3e").convertLinearToSRGB(),new $("#9e2a2b").convertLinearToSRGB(),new $("#540b0e").convertLinearToSRGB(),new $(0,0,0),new $(0,0,0),new $(0,0,0),new $(0,0,0)]},{name:"Watermelon",length:5,palette:[new $("#ef476f").convertLinearToSRGB(),new $("#ffd166").convertLinearToSRGB(),new $("#06d6a0").convertLinearToSRGB(),new $("#118ab2").convertLinearToSRGB(),new $("#073b4c").convertLinearToSRGB(),new $(0,0,0),new $(0,0,0),new $(0,0,0),new $(0,0,0),new $(0,0,0)]},{name:"Pastel Rainbow",length:9,palette:[new $("#ffadad").convertLinearToSRGB(),new $("#ffd6a5").convertLinearToSRGB(),new $("#fdffb6").convertLinearToSRGB(),new $("#caffbf").convertLinearToSRGB(),new $("#9bf6ff").convertLinearToSRGB(),new $("#a0c4ff").convertLinearToSRGB(),new $("#bdb2ff").convertLinearToSRGB(),new $("#ffc6ff").convertLinearToSRGB(),new $("#fffffc").convertLinearToSRGB(),new $(0,0,0).convertLinearToSRGB()]},{name:"Black and White",length:2,palette:[new $(0,0,0),new $(1,1,1),new $(0,0,0),new $(0,0,0),new $(0,0,0),new $(0,0,0),new $(0,0,0),new $(0,0,0),new $(0,0,0),new $(0,0,0)]},{name:"Oceanic Cactus",length:5,palette:[new $("#1a535c").convertLinearToSRGB(),new $("#4ecdc4").convertLinearToSRGB(),new $("#f7fff7").convertLinearToSRGB(),new $("#ff6b6b").convertLinearToSRGB(),new $("#ffe66d").convertLinearToSRGB(),new $(0,0,0).convertLinearToSRGB(),new $(0,0,0).convertLinearToSRGB(),new $(0,0,0).convertLinearToSRGB(),new $(0,0,0).convertLinearToSRGB(),new $(0,0,0).convertLinearToSRGB()]}];class wv{static savePalettes(e){const t=this.getPalettesSnapshot(e);localStorage.setItem("palettes",JSON.stringify(t))}static loadPalettes(e){const t=JSON.parse(localStorage.getItem("palettes"));t&&this.setPalettesFromSnapshot(e,t)}static getPalettesSnapshot(e){return e.getSnapshot()}static setPalettesFromSnapshot(e,t){for(const n of t){const s=n.name,r=[],a=n.length;for(const o of n.colorHexes){let l=new $;l.setHex(o),r.push(l)}e.addPalette(new Xi(r,s,a))}}}class Mv{constructor(){this.load()}load(){this.palettes=this.readDefaultPalettes(),wv.loadPalettes(this)}readDefaultPalettes(){let e=[];for(const t of bv){const n=new Xi(t.palette,t.name,t.length);n.lock(),e.push(n)}return this.length=e.length,e}getPaletteByIndex(e){return this.palettes[Math.min(e,this.palettes.length-1)]}getPaletteIndex(e){for(let t=0;t<this.palettes.length;t++)if(this.palettes[t]===e)return t}getPaletteByName(e){for(const t of this.palettes)if(t.name==e)return t;return null}[Symbol.iterator](){var e=-1,t=this.palettes;return{next:()=>({value:t[++e],done:!(e in t)})}}addPalette(e=new Xi){return this.palettes.push(e),e}deletePalette(e){const t=this.getPaletteIndex(e);return this.palettes.splice(t,1),this.palettes[t<this.palettes.length?t:this.palettes.length-1]}save(){Storage.setPalettes(this.palettes)}getSnapshot(){const e=[];for(const t of palettes)if(!t.locked){const n=t.getSnapshot();e.push(n)}return e}}const Tv=`
uniform float uAspect;

uniform float uSinZoom;
uniform float uSinStretch;

varying vec2 vUv;
void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    
    vUv = uv;
    vUv.x *= uAspect;
}`,Av=`
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

vec2 warpDefault(vec2 uv, float mag) {
  return warpUv(uv, mag * uSinMag, vec2(uSinFreqY * 10000., uSinFreqX * 10000.), vec2(0.));
}

vec2 complexMul(vec2 a, vec2 b) {
  return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}

vec2 complexPow(vec2 z, float n) {
  // uPower is an integer slider, so the common cases are small whole exponents.
  // Avoid the transcendental polar form (atan/pow/cos/sin) when we can.
  int ni = int(n);
  if (float(ni) == n) {
    int k = abs(ni);
    if (k <= 8) {
      if (k == 0) return vec2(1.0, 0.0);
      vec2 result = z;
      for (int j = 1; j < 8; j++) {
        if (j >= k) break;
        result = complexMul(result, z);
      }
      // negative exponent: reciprocal of z^k
      if (ni < 0) {
        float d = dot(result, result);
        result = vec2(result.x, -result.y) / max(d, 1e-20);
      }
      return result;
    }
  }
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

// Continuous (smooth) iteration count for escape-time fractals. Removes integer
// banding so a single loop pass looks as smooth as the old two-pass blend.
// Only meaningful for escaped pixels (mZ >= 4). bailout^2 = 4 -> bailout = 2.
float smoothEscape(int i, float mZ, float power) {
  // log_power( log(|z|) / log(bailout) ), with |z| = sqrt(mZ), bailout = 2
  float nu = log(0.5 * log(max(mZ, 4.0)) / log(2.0)) / log(max(abs(power), 1.0001));
  return float(i) + 1.0 - nu;
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
  vec2 zn = uv;
  vec2 z0 = zn;
  float mZ = dot(zn, zn);
  for (i = 0; mZ < 4.0 && i < maxIters; i++) {
    zn = complexPow(zn, uPower) + z0;
    mZ = dot(zn, zn);
  }
  float escape = mZ >= 4.0 ? smoothEscape(i, mZ, uPower) : float(i);
  return escape + velocityDistort(mZ - 4.0);
}

float julia(vec2 uv, int maxIters) {
  vec2 c = vec2(uCposX, uCposY);
  int i;
  vec2 zn = warpDefault(uv, 0.001);
  float mZ = dot(zn, zn);
  for (i = 0; mZ < 4.0 && i < maxIters; i++) {
    zn = complexPow(zn, uPower) + c;
    mZ = dot(zn, zn);
  }
  float escape = mZ >= 4.0 ? smoothEscape(i, mZ, uPower) : float(i);
  return escape + velocityDistort(mZ - 4.0);
}

float doubleJulia(vec2 uv, int maxIters) {
  vec2 c = vec2(uCposX, uCposY);
  int i;
  vec2 zn = warpDefault(uv, 0.01);
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
  float escape = mZ >= 4.0 ? smoothEscape(i, mZ, uPower2) : float(i);
  return escape + velocityDistort(mZ - 4.0);
}

float burningShip(vec2 uv, int maxIters) {
  int i;
  vec2 zn = warpDefault(uv, 0.1);
  vec2 z0 = zn;
  float mZ = dot(zn, zn);
  for (i = 0; mZ < 4.0 && i < maxIters; i++) {
    zn = complexPow(abs(vec2(zn.x, -zn.y)), uPower) + z0;
    mZ = dot(zn, zn);
  }
  float escape = mZ >= 4.0 ? smoothEscape(i, mZ, uPower) : float(i);
  return escape + velocityDistort(mZ - 4.0);
}


float neuton(vec2 uv, int maxIters) {
  int i;
  vec2 zn = warpDefault(uv, 0.1);
  float n = uPower;
  float tolerance = 0.000001;
  vec2 c = vec2(uCposX, uCposY);

  for (i = 0; i < maxIters; i++) {
    // Newton's method: z = z - f(z) / f'(z)
    // For f(z) = z^n - 1, f'(z) = n * z^(n-1)
    vec2 zn_pow = complexPow(zn, n);           // z^n
    // z^(n-1) = z^n / z  (avoids a second complexPow)
    float znMag = dot(zn, zn);
    vec2 zn_pow_m1 = complexMul(zn_pow, vec2(zn.x, -zn.y)) / max(znMag, 1e-20);

    // f(z) = z^n - c (using c parameter for offset)
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
  vec2 zn = warpDefault(uv, 0.1);
  float mZ = dot(zn, zn);

  for (i = 0; mZ < 4.0 && i < maxIters; i++) {
    // zn = ((complexPow(zn, uPower) - (1./log(zn) + c2) + c))/(c+1./float(i));
    zn = abs(complexPow(zn, uPower) + c1) - 1./log(abs(complexPow(zn,uPower2)/5. + c2));
    mZ = dot(zn, zn);
  }

  float escape = mZ >= 4.0 ? smoothEscape(i, mZ, uPower) : float(i);
  return escape + velocityDistort(mZ - 4.0);
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
  float escape = 0.0;
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
  float mag = 0.0;
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
  // Blend an N-iteration render with an (N+1)-iteration one by the fractional part
  // of the iteration slider, so animating the iteration count morphs smoothly
  // (critical at low counts, e.g. 1 -> 2 iterations). The second pass is skipped
  // above 200 iters where the difference is imperceptible. smoothEscape inside the
  // per-mode functions additionally removes color banding within each pass.
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
  vec3 mixedColor = vec3(0.0);
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
`;class Cv{constructor(){this.experience=new Wn,this.debug=this.experience.debug,this.sizes=this.experience.sizes,this.time=this.experience.time,this.palettes=this.experience.palettes,this.palette=this.palettes.getPaletteByIndex(0),this.mode=0,this.numberOfColors=6,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("Shader"),this.debugFolder.close()),this.material=new Vn({vertexShader:Tv,fragmentShader:Av,side:rn,uniforms:{uPalette:{type:"v3v",value:this.palette.palette},uFloatPar:{value:new Float32Array(25)},uTime:{value:0},uAspect:{value:this.sizes.aspect},uMode:{value:this.mode},uPaletteLen:{value:this.numberOfColors}}})}getUniforms(){return this.material.uniforms}setShader(e){const t=this.material.uniforms;e.uFloatPars=t.uFloatPar.value}}class hr{constructor(e){this.eId=e,this.keys=[],this.muted=!1}setKeyframe(e,t,n=null,s=.005){const r=this.indexOfKeyAt(e,s);if(r>=0)return this.keys[r].v=t,n!==null&&(this.keys[r].s=n),r;const a={t:e,v:t,s:n??0};return this.keys.push(a),this.sortKeys(),this.keys.indexOf(a)}removeKeyframe(e){this.keys.splice(e,1)}indexOfKeyAt(e,t){for(let n=0;n<this.keys.length;n++)if(Math.abs(this.keys[n].t-e)<=t)return n;return-1}moveKeyframe(e,t){const n=this.keys[e];return n?(n.t=Math.max(0,t),this.sortKeys(),this.keys.indexOf(n)):e}sortKeys(){this.keys.sort((e,t)=>e.t-t.t)}get length(){return this.keys.length}evaluate(e){const t=this.keys,n=t.length;if(n===0)return 0;if(n===1||e<=t[0].t)return t[0].v;if(e>=t[n-1].t)return t[n-1].v;let s=0;for(;s<n-2&&e>=t[s+1].t;)s++;const r=t[s],a=t[s+1],o=a.t-r.t;if(o<=0)return a.v;const l=(e-r.t)/o,c=(a.v-r.v)/o,u=s>0?(a.v-t[s-1].v)/(a.t-t[s-1].t):c,d=s+2<n?(t[s+2].v-r.v)/(t[s+2].t-r.t):c,f=u+(c-u)*r.s,m=d+(c-d)*a.s,g=l*l,_=g*l;return(2*_-3*g+1)*r.v+(_-2*g+l)*o*f+(-2*_+3*g)*a.v+(_-g)*o*m}getSnapshot(){const e={eId:this.eId,keys:this.keys.map(t=>[Math.round(t.t*1e3)/1e3,Math.round(t.v*1e6)/1e6,Math.round(t.s*100)/100])};return this.muted&&(e.muted=!0),e}static fromSnapshot(e){const t=new hr(e.eId);if(e.keys instanceof Array){for(const n of e.keys)t.keys.push({t:n[0],v:n[1],s:n[2]??0});t.sortKeys()}return t.muted=e.muted??!1,t}}class Pv extends hi{constructor(e){super(),this.experience=e,this.duration=15,this.mode="loop",this.playhead=0,this.playing=!1,this.direction=1,this.tracks=new Map,this.musicMode=!1,this.bpm=120,this.bars=8,this.beatsPerBar=4,this.gridDivision="1/4"}beatsAt(e){return e*this.bpm/60}barAt(e){return this.beatsAt(e)/this.beatsPerBar}get secondsPerBeat(){return 60/this.bpm}beatsForDivision(e=this.gridDivision){switch(e){case"bar":return this.beatsPerBar;case"1/2":return 2;case"1/16":return .25;case"1/4":default:return 1}}gridStepSeconds(){return this.secondsPerBeat*this.beatsForDivision()}snapTime(e){if(!this.musicMode)return e;const t=this.gridStepSeconds();if(!(t>0))return e;const n=Math.round(e/t)*t;return Math.min(Math.max(0,n),this.duration)}derivedDuration(){return this.bars*this.beatsPerBar*this.secondsPerBeat}recalcDurationFromBars(){this.setDuration(this.derivedDuration())}setMusicMode(e){this.musicMode=!!e,this.musicMode&&this.recalcDurationFromBars(),this.trigger("musicSettingsChanged")}setBpm(e){this.bpm=Math.max(1,Number(e)||this.bpm),this.musicMode&&this.recalcDurationFromBars(),this.trigger("musicSettingsChanged")}setBars(e){this.bars=Math.max(1,Math.round(Number(e)||this.bars)),this.musicMode&&this.recalcDurationFromBars(),this.trigger("musicSettingsChanged")}setBeatsPerBar(e){this.beatsPerBar=Math.max(1,Math.round(Number(e)||this.beatsPerBar)),this.musicMode&&this.recalcDurationFromBars(),this.trigger("musicSettingsChanged")}setGridDivision(e){this.gridDivision=e,this.trigger("musicSettingsChanged")}get keyEpsilon(){return Math.max(.005,this.duration/500)}_normId(e){return typeof e=="number"?e:/^\d+$/.test(e)?Number(e):e}getTrack(e){return this.tracks.get(this._normId(e))}getOrCreateTrack(e){e=this._normId(e);let t=this.tracks.get(e);return t||(t=new hr(e),this.tracks.set(e,t)),t}removeTrack(e){this.tracks.delete(this._normId(e))&&this.trigger("tracksChanged")}addOrUpdateKeyframe(e,t,n,s=null){const a=this.getOrCreateTrack(e).setKeyframe(t,n,s,this.keyEpsilon);return this.trigger("tracksChanged"),a}removeKeyframe(e,t){const n=this.getTrack(e);n&&(n.removeKeyframe(t),n.length===0&&this.tracks.delete(this._normId(e)),this.trigger("tracksChanged"))}hasKeyAtPlayhead(e){const t=this.getTrack(e);return t?t.indexOfKeyAt(this.playhead,this.keyEpsilon)>=0:!1}hasTracks(){return this.tracks.size>0}play(){this.playing||(this.playing=!0,this.trigger("playStateChanged",[this.playing]))}pause(){this.playing&&(this.playing=!1,this.trigger("playStateChanged",[this.playing]))}togglePlay(){this.playing?this.pause():this.play()}setTime(e){this.playhead=Math.min(Math.max(0,e),this.duration),this.apply(),this.trigger("seeked",[this.playhead]),this.trigger("timeChanged",[this.playhead])}setDuration(e){this.duration=Math.max(.1,Number(e)),this.playhead>this.duration&&(this.playhead=this.duration),this.trigger("durationChanged",[this.duration]),this.trigger("timeChanged",[this.playhead])}setMode(e){this.mode=e==="pingpong"?"pingpong":"loop",this.mode==="loop"&&(this.direction=1),this.trigger("modeChanged",[this.mode])}update(e){this.playing&&(this.playhead+=e/1e3*this.direction,this.mode==="pingpong"?(this.playhead>=this.duration&&(this.direction=-1,this.playhead=2*this.duration-this.playhead),this.playhead<=0&&(this.direction=1,this.playhead=-this.playhead)):this.playhead>=this.duration&&(this.playhead-=this.duration),this.apply(),this.trigger("timeChanged",[this.playhead]))}toggleMute(e){const t=this.getTrack(e);t&&(t.muted=!t.muted,this.apply(),this.trigger("tracksChanged"))}apply(){const e=this.experience.shader;if(e){for(const[t,n]of this.tracks){if(typeof t!="number"||n.length===0||n.muted)continue;let s=n.evaluate(this.playhead);const r=e.getInput(t);r&&(s=Math.min(Math.max(s,r.min),r.max)),e.uFloatPars[t]=s}this.applyModulators(e)}}resolveModValue(e,t){const n=this.getTrack(e);return n&&n.length>0&&!n.muted?n.evaluate(this.playhead):t}applyModulators(e){var s;const t=this.experience.modulatorManager;if(!t)return;const n=(s=this.experience.audioEngine)==null?void 0:s.hasAudio();for(const r of t.list()){if(!r.enabled||r.type==="dbFollower"&&!n)continue;const a=e.getInput(r.targetEId);if(!a)continue;const o=this.resolveModValue(r.centerTrackId,r.center),l=this.resolveModValue(r.rangeTrackId,r.range);let c=o+l*r.signal(this);isFinite(c)&&(c=Math.min(Math.max(c,a.min),a.max),e.uFloatPars[r.targetEId]=c)}}clear(){this.tracks.clear(),this.playhead=0,this.pause(),this.trigger("tracksChanged"),this.trigger("timeChanged",[this.playhead])}getSnapshot(){return{duration:this.duration,mode:this.mode,musicMode:this.musicMode,bpm:this.bpm,bars:this.bars,beatsPerBar:this.beatsPerBar,gridDivision:this.gridDivision,tracks:Array.from(this.tracks.values()).map(e=>e.getSnapshot())}}setFromSnapshot(e){if(this.tracks.clear(),this.playhead=0,this.playing=!1,this.direction=1,this.musicMode=!1,this.bpm=120,this.bars=8,this.beatsPerBar=4,this.gridDivision="1/4",e&&(this.duration=Number(e.duration)||15,this.mode=e.mode==="pingpong"?"pingpong":"loop",this.musicMode=!!e.musicMode,e.bpm&&(this.bpm=Math.max(1,Number(e.bpm))),e.bars&&(this.bars=Math.max(1,Math.round(Number(e.bars)))),e.beatsPerBar&&(this.beatsPerBar=Math.max(1,Math.round(Number(e.beatsPerBar)))),e.gridDivision&&(this.gridDivision=e.gridDivision),e.tracks instanceof Array))for(const t of e.tracks){const n=hr.fromSnapshot(t);n.length>0&&(n.eId=this._normId(n.eId),this.tracks.set(n.eId,n))}this.apply(),this.trigger("durationChanged",[this.duration]),this.trigger("modeChanged",[this.mode]),this.trigger("musicSettingsChanged"),this.trigger("tracksChanged"),this.trigger("playStateChanged",[this.playing]),this.trigger("timeChanged",[this.playhead])}}class _s{constructor({id:e,type:t="lfo",targetEId:n=0,center:s=0,range:r=0,enabled:a=!0,waveform:o="sine",rateBeats:l=1,phase:c=0,band:u="low",damping:d=.2}){this.id=e,this.type=t,this.targetEId=Number(n),this.center=s,this.range=r,this.enabled=a,this.waveform=o,this.rateBeats=l,this.phase=c,this.band=u,this.damping=d}get centerTrackId(){return`mod:${this.id}:center`}get rangeTrackId(){return`mod:${this.id}:range`}signal(e){if(this.type==="lfo"){const n=e.beatsAt(e.playhead)/Math.max(1e-6,this.rateBeats)+this.phase;return _s.wave(this.waveform,n)}if(this.type==="dbFollower"){const t=e.experience.audioEngine;return t?t.sampleEnvelope(this.band,e.playhead,this.damping):0}return 0}static wave(e,t){const n=t-Math.floor(t);switch(e){case"saw":return 2*n-1;case"square":return n<.5?1:-1;case"triangle":return 2*(1-2*Math.abs(n-.5))-1;case"sine":default:return Math.sin(n*2*Math.PI)}}getSnapshot(){const e={id:this.id,type:this.type,targetEId:this.targetEId,center:this.center,range:this.range,enabled:this.enabled};return this.type==="lfo"?(e.waveform=this.waveform,e.rateBeats=this.rateBeats,e.phase=this.phase):this.type==="dbFollower"&&(e.band=this.band,e.damping=this.damping),e}static fromSnapshot(e){return new _s(e)}}class Rv{constructor(e){this.experience=e,this.modulators=[],this._nextId=1}list(){return this.modulators}get(e){return this.modulators.find(t=>t.id===e)}add(e,t={}){const n=new _s({id:this._nextId++,type:e,...t});return this.modulators.push(n),n}remove(e){const t=this.get(e);if(!t)return;const n=this.experience.animation;n.removeTrack(t.centerTrackId),n.removeTrack(t.rangeTrackId),this.modulators=this.modulators.filter(s=>s.id!==e)}clear(){this.modulators=[],this._nextId=1}getSnapshot(){return this.modulators.map(e=>e.getSnapshot())}setFromSnapshot(e){if(this.clear(),e instanceof Array)for(const t of e){const n=_s.fromSnapshot(t);this.modulators.push(n),this._nextId=Math.max(this._nextId,Number(n.id)+1)}}}const Lv={low:{type:"lowpass",freq:200},mid:{type:"bandpass",freq:1e3,q:.7},high:{type:"highpass",freq:2e3}},Iv=.01;class Fv{constructor(){this.ctx=null,this.buffer=null,this.fileName="",this.bpm=0,this.hopSec=Iv,this.envelopes={},this._smoothCache={},this.source=null,this.gain=null,this.playing=!1,this.fileBlob=null,this._loadToken=0}hasAudio(){return!!this.buffer}beginLoad(){return++this._loadToken}isStale(e){return e!==this._loadToken}ensureContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}return this.ctx}async load(e){this.ensureContext();const t=await e.arrayBuffer();return this.buffer=await this.ctx.decodeAudioData(t.slice(0)),this.fileName=e.name||"track",this.fileBlob=e,this.envelopes=await this.computeBandEnvelopes(this.buffer),this._smoothCache={},this.bpm=this.detectBPM(this.buffer),{bpm:this.bpm,duration:this.buffer.duration}}async computeBandEnvelopes(e){const t={},n=Object.entries(Lv),s=await Promise.all(n.map(([,r])=>this.renderFiltered(e,r)));return n.forEach(([r],a)=>{t[r]=this.rmsEnvelope(s[a],this.hopSec)}),t}async renderFiltered(e,t){const n=window.OfflineAudioContext||window.webkitOfflineAudioContext,s=new n(1,e.length,e.sampleRate),r=s.createBufferSource();r.buffer=e;const a=s.createBiquadFilter();return a.type=t.type,a.frequency.value=t.freq,t.q!=null&&(a.Q.value=t.q),r.connect(a),a.connect(s.destination),r.start(0),(await s.startRendering()).getChannelData(0)}rmsEnvelope(e,t){const n=this.buffer.sampleRate,s=Math.max(1,Math.round(t*n)),r=Math.ceil(e.length/s),a=new Float32Array(r);let o=0;for(let l=0;l<r;l++){let c=0;const u=l*s,d=Math.min(u+s,e.length);for(let m=u;m<d;m++)c+=e[m]*e[m];const f=Math.sqrt(c/Math.max(1,d-u));a[l]=f,f>o&&(o=f)}if(o>0)for(let l=0;l<r;l++)a[l]/=o;return a}sampleEnvelope(e,t,n=0){const s=n>0?this._smoothedEnvelope(e,n):this.envelopes[e];if(!s||s.length===0)return 0;const r=t/this.hopSec,a=Math.floor(r);if(a<0)return s[0];if(a>=s.length-1)return s[s.length-1];const o=r-a;return s[a]*(1-o)+s[a+1]*o}_smoothedEnvelope(e,t){const n=this.envelopes[e];if(!n||n.length===0)return n;const s=Math.min(.999,Math.max(0,t)),r=`${e}:${s.toFixed(3)}`;if(this._smoothCache[r])return this._smoothCache[r];const a=new Float32Array(n.length);let o=n[0];for(let l=0;l<n.length;l++)o=s*o+(1-s)*n[l],a[l]=o;return this._smoothCache[r]=a,a}detectBPM(e){const t=e.sampleRate,n=Math.round(.01*t),s=this._monoData(e),r=Math.floor(s.length/n);if(r<8)return 120;const a=new Float32Array(r);let o=0;for(let p=0;p<r;p++){let h=0;const E=p*n;for(let b=E;b<E+n;b++)h+=s[b]*s[b];const y=Math.sqrt(h/n);a[p]=Math.max(0,y-o),o=y}const l=t/n,c=60,u=200,d=Math.floor(l*60/u),f=Math.ceil(l*60/c);let m=d,g=-1/0;for(let p=d;p<=f;p++){let h=0;for(let E=p;E<r;E++)h+=a[E]*a[E-p];h>g&&(g=h,m=p)}let _=l*60/m;if(!isFinite(_)||_<=0)return 120;for(;_<70;)_*=2;for(;_>160;)_/=2;return Math.round(_)}_monoData(e){const t=e.numberOfChannels;if(t===1)return e.getChannelData(0);const n=e.length,s=new Float32Array(n);for(let r=0;r<t;r++){const a=e.getChannelData(r);for(let o=0;o<n;o++)s[o]+=a[o]}for(let r=0;r<n;r++)s[r]/=t;return s}play(e,t){if(!this.buffer)return;this.ensureContext(),this.ctx.state==="suspended"&&this.ctx.resume(),this.stop();const n=this.ctx.createBufferSource();n.buffer=this.buffer,n.loop=!0,n.loopStart=0,n.loopEnd=t>0&&t<=this.buffer.duration?t:this.buffer.duration;const s=this.ctx.createGain();n.connect(s),s.connect(this.ctx.destination);const r=Math.max(0,Math.min(e,this.buffer.duration-.001));n.start(0,r),this.source=n,this.gain=s,this.playing=!0}stop(){if(this.source){try{this.source.stop()}catch{}this.source.disconnect(),this.source=null}this.gain&&(this.gain.disconnect(),this.gain=null),this.playing=!1}seek(e,t){this.playing&&this.play(e,t)}clear(){this.stop(),this.buffer=null,this.fileName="",this.bpm=0,this.envelopes={},this._smoothCache={},this.fileBlob=null}}class fr extends hi{constructor(e=window){super(),this.heldKeys=new Set,this.keyMap={},e.addEventListener("keydown",t=>{if(!fr.isTypingTarget(t.target)&&!this.heldKeys.has(t.code)){this.heldKeys.add(t.code);const s=`keydown:${this.buildKeyString(t)}`;this.trigger(s),this.keyMap[s]&&this.trigger(this.keyMap[s])}}),e.addEventListener("keyup",t=>{if(this.heldKeys.delete(t.code),fr.isTypingTarget(t.target))return;const s=`keyup:${this.buildKeyString(t)}`;this.trigger(s),this.keyMap[s]&&this.trigger(this.keyMap[s])})}addMapping(e,t,n="keydown"){this.keyMap[n+":"+e]=t}static isTypingTarget(e){const t=e==null?void 0:e.tagName;return t==="INPUT"||t==="SELECT"||t==="TEXTAREA"}isDown(e){return this.heldKeys.has(e)}buildKeyString(e){let t="";return(e.ctrlKey||e.metaKey)&&(t+="Ctrl+"),e.shiftKey&&(t+="Shift+"),e.altKey&&(t+="Alt+"),t+=e.code,t}}class Uv{constructor(){this.scrollZoomSpeed=1,this.exportFps=30,this.exportResolution="1080p"}}const ro=new zt("Mandle",nt.mandle),Es=new zt("Julia",nt.julia),bs=new zt("Sin Julia",nt.doubleJulia),ws=new zt("Phoenix",nt.phoenix),Ms=new zt("Sphinx",nt.sphinx),Ts=new zt("Neuton",nt.neuton),yr=new zt("Burning Ship",nt.burningShip),Ki=new Me({eId:me.iters,name:"Iterations",value:.6,min:.1,max:1,step:.001}),Dv=new Me({eId:me.iters2,name:"Iterations 2",value:.5,min:.1,max:1,step:.001}),Zi=new Me({eId:me.power,name:"Power",value:2,min:-30,max:30,step:1}),Nv=new Me({eId:me.power2,name:"Power 2",value:2,min:-30,max:30,step:1}),fi=new Me({eId:me.posX,name:"Position X",value:-.5,min:-2,max:2,step:1e-4}),pi=new Me({eId:me.posY,name:"Position Y",value:0,min:-2,max:2,step:1e-4}),mi=new Me({eId:me.zoom,name:"Zoom",value:2.2,min:0,max:1,step:.01}),gi=new Me({eId:me.rotation,name:"Rotation",value:0,min:-Math.PI*2,max:Math.PI*2,step:.001}),Bv=new Me({eId:me.iters,name:"Iterations",value:.2,min:.1,max:1,step:.001}),Ov=new Me({eId:me.power,name:"Power",value:2,min:-30,max:30,step:1}),kv=new Me({eId:me.power2,name:"Power 2",value:-5,min:-30,max:30,step:1});ro.addGroup("Core",[Ki,Zi,fi,pi,mi,gi]);Es.addGroup("Core",[Ki,Zi,fi,pi,mi,gi]);bs.addGroup("Core",[Ki,Dv,Zi,Nv,fi,pi,mi,gi]);ws.addGroup("Core",[Ki,Zi,fi,pi,mi,gi]);Ms.addGroup("Core",[Bv,Ov,kv,fi,pi,mi,gi]);Ts.addGroup("Core",[Ki,Zi,fi,pi,mi,gi]);yr.addGroup("Core",[Ki,Zi,fi,pi,mi,gi]);const Sr=new Me({eId:me.cPosX,name:"Const Position X",value:-.75,min:-2,max:2,step:1e-4}),Er=new Me({eId:me.cPosY,name:"Const Position Y",value:.25,min:-2,max:2,step:1e-4}),zv=new Me({eId:me.cPosX2,name:"Const Position X 2",value:-.75,min:-2,max:2,step:1e-4}),Vv=new Me({eId:me.cPosY2,name:"Const Position Y 2",value:.25,min:-2,max:2,step:1e-4}),Gv=new Me({eId:me.cPosX,name:"Const Position X",value:.21,min:-4,max:4,step:1e-4}),Hv=new Me({eId:me.cPosY,name:"Const Position Y",value:1.05,min:-4,max:4,step:1e-4}),Wv=new Me({eId:me.cPosX2,name:"Const Position X 2",value:-1.6,min:-4,max:4,step:1e-4}),Xv=new Me({eId:me.cPosY2,name:"Const Position Y 2",value:-1.7,min:-4,max:4,step:1e-4});Es.addGroup("Point",[Sr,Er]);bs.addGroup("Point",[Sr,Er,zv,Vv]);ws.addGroup("Point",[Sr,Er]);Ms.addGroup("Point",[Gv,Hv,Wv,Xv]);Ts.addGroup("Point",[Sr,Er]);const _i=new Me({eId:me.velDir,name:"Velocity Direction",value:0,min:-1,max:1,step:1}),vi=new Me({eId:me.velMag,name:"Velocity Amount",value:.5,min:0,max:5,step:.001});ro.addGroup("Velocity",[_i,vi]);Es.addGroup("Velocity",[_i,vi]);bs.addGroup("Velocity",[_i,vi]);ws.addGroup("Velocity",[_i,vi]);Ms.addGroup("Velocity",[_i,vi]);Ts.addGroup("Velocity",[_i,vi]);yr.addGroup("Velocity",[_i,vi]);const Ji=new Me({eId:me.uSinMag,name:"Sin Mag",value:0,min:0,max:1,step:.001}),Qi=new Me({eId:me.sinFreqX,name:"Sin X Frequency",value:0,min:0,max:1,step:.001}),es=new Me({eId:me.sinFreqY,name:"Sin y Frequency",value:0,min:.001,max:1,step:.001});Es.addGroup("Sin Offsets",[Ji,Qi,es]);bs.addGroup("Sin Offsets",[Ji,Qi,es]);ws.addGroup("Sin Offsets",[Ji,Qi,es]);Ms.addGroup("Sin Offsets",[Ji,Qi,es]);Ts.addGroup("Sin Offsets",[Ji,Qi,es]);yr.addGroup("Sin Offsets",[Ji,Qi,es]);const Zn={julia:Es,mandle:ro,doubleJulia:bs,phoenix:ws,neuton:Ts,burningShip:yr,sphinx:Ms},As=new zt("Noise",nt.noise),br=new zt("Circle Waves",nt.circularWaves),wr=new zt("Circle Waves",nt.linearWaves),Mr=new zt("Circle Waves",nt.fibonacci),jv=new Me({eId:me.iters,name:"Color Step Size",value:10,min:-100,max:100,step:.01}),qv=new Me({eId:me.power,name:"Density",value:10,min:-50,max:50,step:.01}),ao=new Me({eId:me.iters,name:"Scale 1",value:.025,min:-3,max:3,step:1e-4}),oo=new Me({eId:me.power,name:"Scale 2",value:.05,min:-3,max:3,step:1e-4}),Tr=new Me({eId:me.posX,name:"Position X",value:.1,min:-1,max:1,step:1e-5}),Ar=new Me({eId:me.posY,name:"Position Y",value:.5,min:-2,max:2,step:1e-4}),Cr=new Me({eId:me.zoom,name:"Zoom",value:20,min:0,max:1,step:.01}),Pr=new Me({eId:me.rotation,name:"Rotation",value:0,min:-Math.PI*2,max:Math.PI*2,step:.001});As.addGroup("Core",[jv,qv,Tr,Ar,Cr,Pr]);br.addGroup("Core",[ao,oo,Tr,Ar,Cr,Pr]);wr.addGroup("Core",[ao,oo,Tr,Ar,Cr,Pr]);Mr.addGroup("Core",[ao,oo,Tr,Ar,Cr,Pr]);const Rr=new Me({eId:me.cPosX,name:"Const Position X",value:2,min:-5,max:5,step:1e-4}),Lr=new Me({eId:me.cPosY,name:"Const Position Y",value:.5,min:-5,max:5,step:1e-4});As.addGroup("Point",[Rr,Lr]);br.addGroup("Point",[Rr,Lr]);wr.addGroup("Point",[Rr,Lr]);Mr.addGroup("Point",[Rr,Lr]);const $v=new Me({eId:me.velDir,name:"UV scale",value:0,min:-5,max:5,step:1e-4}),Yv=new Me({eId:me.velMag,name:"Mix UV",value:-1,min:0,max:1,step:.001});As.addGroup("Velocity",[$v,Yv]);const Ir=new Me({eId:me.uSinMag,name:"Sin Mag",value:0,min:0,max:1,step:.001}),Fr=new Me({eId:me.sinFreqX,name:"Sin X Amount",value:0,min:-5,max:5,step:.001}),Ur=new Me({eId:me.sinFreqY,name:"Sin y Amount",value:0,min:-5,max:5,step:.001});As.addGroup("Sin",[Ir,Fr,Ur]);wr.addGroup("Sin",[Ir,Fr,Ur]);br.addGroup("Sin",[Ir,Fr,Ur]);Mr.addGroup("Sin",[Ir,Fr,Ur]);const tr={noise:As,circularWaves:br,linearWaves:wr,fibonacci:Mr},Kv=new Me({eId:me.mirrorFoldsX,name:"Mirror Folds X",value:1,min:1,max:16,step:1}),Zv=new Me({eId:me.mirrorFoldsY,name:"Mirror Folds Y",value:1,min:1,max:16,step:1}),Jv=new Me({eId:me.mirrorOffsetX,name:"Mirror Offset X",value:0,min:-1,max:1,step:.001}),Qv=new Me({eId:me.mirrorOffsetY,name:"Mirror Offset Y",value:0,min:-1,max:1,step:.001}),ex=new Me({eId:me.colorOffset,name:"Color Offset",value:0,min:0,max:10,step:.01}),tx=new Me({eId:me.hueRotation,name:"Hue Rotation",value:0,min:-4,max:4,step:.01}),nx=new Me({eId:me.colorScale,name:"Color Scale",value:1,min:.1,max:5,step:.01}),Ql={Mirror:[Kv,Zv,Jv,Qv],Color:[ex,tx,nx]};class ix{static getShader(e){let t=null;switch(e){case nt.mandle:t=Zn.mandle;break;case nt.julia:t=Zn.julia;break;case nt.phoenix:t=Zn.phoenix;break;case nt.doubleJulia:t=Zn.doubleJulia;break;case nt.neuton:t=Zn.neuton;break;case nt.burningShip:t=Zn.burningShip;break;case nt.noise:t=tr.noise;break;case nt.circularWaves:t=tr.circularWaves;break;case nt.linearWaves:t=tr.linearWaves;break;case nt.fibonacci:t=tr.fibonacci;break;case nt.sphinx:t=Zn.sphinx;break}return this.addStandardParameters(t),t.clone()}static addStandardParameters(e){e.addGroup("Mirror",Ql.Mirror),e.addGroup("Color",Ql.Color)}}Ke.enabled=!0;let Aa=null;class Wn{constructor(e){if(Aa)return Aa;Aa=this,window.experience=this,this.canvas=e,this.initComponents(),this.initEventListeners(),this.setShader(nt.mandle),this.updateFromShader(),this.setKeyMappings(),this.onLoad()}initComponents(){this.projectList=new kg,this.keyboard=new fr,this.animation=new Pv(this),this.modulatorManager=new Rv(this),this.audioEngine=new Fv,this.debug=new Dg,this.sizes=new xg,this.time=new yg,this.scene=new vg,this.palettes=new Mv,this.camera=new Sg,this.renderer=new Bg,this.settings=new Uv,this.mouse=new Ng,this.shaderMaterial=new Cv,this.screen=new Ev,this.controls=new Sv,this.shader=null}initEventListeners(){this.sizes.on("resize",()=>{this.resize()}),this.time.on("tick",()=>{this.update()}),this.mouse.on("mousemove",()=>{this.mousemove()}),this.mouse.on("touchmove",()=>{this.touchmove()}),this.mouse.on("doubleClick",()=>{this.doubleClick()}),this.mouse.on("scroll",()=>{this.scroll()})}setShader(e){this.shader=ix.getShader(e)}updateFromShader(){this.shaderMaterial.setShader(this.shader),this.shader.setInputs(),this.controls.updateFromShader(),this.screen.updateFromShader()}setKeyMappings(){this.keyboard.addMapping("Space","togglePlay"),this.keyboard.addMapping("Comma","seekStart"),this.keyboard.addMapping("Period","seekEnd")}resize(){this.camera.resize(),this.renderer.resize(),this.screen.resize()}update(){this.animation.update(this.time.delta),this.renderer.update(),this.screen.update()}mousemove(){this.screen.mousemove()}touchmove(){this.screen.touchmove()}doubleClick(){this.renderer.doubleClick()}scroll(){this.screen.scroll()}onLoad(){this.renderer.onLoad(),At.loadProjectList(this),kn.hasShareHash()?kn.decode(this)||At.loadLastProject(this):At.loadLastProject(this)}onBeforeUnload(){this.palettes.save()}}const sx=new Wn(document.querySelector("canvas"));window.onbeforeunload=()=>{sx.onBeforeUnload()};
//# sourceMappingURL=index-f1d211da.js.map
