// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function i(i){var n,o,m,d,f;if(!e(i))throw new TypeError(r("1IR8B,Hs",i));return o=new t(i),m=0,f=-1,d=0,function(e){var t;if(0===arguments.length)return 0===d?null:m;if(f=(f+1)%i,s(e))d=i,m=NaN;else if(d<i)m+=(n=e-m)/(d+=1);else if(s(o[f])){for(d=1,m=e,t=0;t<i;t++)if(t!==f){if(s(o[t])){d=i,m=NaN;break}d+=1,n=o[t]-m,m+=n/d}}else!1===s(m)&&(n=e-o[f],m+=n/i);return o[f]=e,m}}export{i as default};
//# sourceMappingURL=index.mjs.map
