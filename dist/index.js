"use strict";var m=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var o=m(function(w,f){
var c=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,v=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/array-float64/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist');function q(e){var i,n,r,a,t;if(!c(e))throw new TypeError(p('1IR8B',e));return n=new g(e),r=0,t=-1,a=0,l;function l(s){var u;if(arguments.length===0)return a===0?null:r;if(t=(t+1)%e,v(s))a=e,r=NaN;else if(a<e)a+=1,i=s-r,r+=i/a;else if(v(n[t])){for(a=1,r=s,u=0;u<e;u++)if(u!==t){if(v(n[u])){a=e,r=NaN;break}a+=1,i=n[u]-r,r+=i/a}}else v(r)===!1&&(i=s-n[t],r+=i/e);return n[t]=s,r}}f.exports=q
});var N=o();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
