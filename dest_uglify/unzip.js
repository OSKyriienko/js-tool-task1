var arrayFilter=require("./_arrayFilter"),arrayMap=require("./_arrayMap"),baseProperty=require("./_baseProperty"),baseTimes=require("./_baseTimes"),isArrayLikeObject=require("./isArrayLikeObject"),nativeMax=Math.max;function unzip(r){if(!r||!r.length)return[];var e=0;return r=arrayFilter(r,function(r){if(isArrayLikeObject(r))return e=nativeMax(r.length,e),!0}),baseTimes(e,function(e){return arrayMap(r,baseProperty(e))})}module.exports=unzip;