var apply=require("./_apply"),arrayPush=require("./_arrayPush"),baseRest=require("./_baseRest"),castSlice=require("./_castSlice"),toInteger=require("./toInteger"),FUNC_ERROR_TEXT="Expected a function",nativeMax=Math.max;function spread(e,r){if("function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT);return r=null==r?0:nativeMax(toInteger(r),0),baseRest(function(a){var t=a[r],n=castSlice(a,0,r);return t&&arrayPush(n,t),apply(e,this,n)})}module.exports=spread;