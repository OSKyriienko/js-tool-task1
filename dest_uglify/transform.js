var arrayEach=require("./_arrayEach"),baseCreate=require("./_baseCreate"),baseForOwn=require("./_baseForOwn"),baseIteratee=require("./_baseIteratee"),getPrototype=require("./_getPrototype"),isArray=require("./isArray"),isBuffer=require("./isBuffer"),isFunction=require("./isFunction"),isObject=require("./isObject"),isTypedArray=require("./isTypedArray");function transform(r,e,a){var t=isArray(r),i=t||isBuffer(r)||isTypedArray(r);if(e=baseIteratee(e,4),null==a){var s=r&&r.constructor;a=i?t?new s:[]:isObject(r)&&isFunction(s)?baseCreate(getPrototype(r)):{}}return(i?arrayEach:baseForOwn)(r,function(r,t,i){return e(a,r,t,i)}),a}module.exports=transform;