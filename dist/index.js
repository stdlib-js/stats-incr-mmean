"use strict";var m=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var o=m(function(w,f){
var c=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,v=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/array-float64/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist');function q(i){var r,t,e,a,n;if(!c(i))throw new TypeError(p('1IR8B',i));return t=new g(i),e=0,n=-1,a=0,l;function l(s){var u;if(arguments.length===0)return a===0?null:e;if(n=(n+1)%i,v(s))a=i,e=NaN;else if(a<i)a+=1,r=s-e,e+=r/a;else if(v(t[n])){for(a=1,e=s,u=0;u<i;u++)if(u!==n){if(v(t[u])){a=i,e=NaN;break}a+=1,r=t[u]-e,e+=r/a}}else v(e)===!1&&(r=s-t[n],e+=r/i);return t[n]=s,e}}f.exports=q
});var N=o();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
