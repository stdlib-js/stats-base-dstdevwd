"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=t(function(k,d){
var y=require('@stdlib/stats-base-dvariancewd/dist'),x=require('@stdlib/math-base-special-sqrt/dist');function f(e,r,a,i){return x(y(e,r,a,i))}d.exports=f
});var n=t(function(z,v){
var j=require('@stdlib/stats-base-dvariancewd/dist').ndarray,m=require('@stdlib/math-base-special-sqrt/dist');function l(e,r,a,i,p){return m(j(e,r,a,i,p))}v.exports=l
});var c=t(function(A,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=u(),_=n();R(q,"ndarray",_);o.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),s,w=O(E(__dirname,"./native.js"));b(w)?s=g:s=w;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
