var baseDifference=require("./_baseDifference"),baseFlatten=require("./_baseFlatten"),baseIteratee=require("./_baseIteratee"),baseRest=require("./_baseRest"),isArrayLikeObject=require("./isArrayLikeObject"),last=require("./last"),differenceBy=baseRest(function(e,r){var a=last(r);return isArrayLikeObject(a)&&(a=void 0),isArrayLikeObject(e)?baseDifference(e,baseFlatten(r,1,isArrayLikeObject,!0),baseIteratee(a,2)):[]});module.exports=differenceBy;