var arrayFilter=require("./_arrayFilter"),stubArray=require("./stubArray"),objectProto=Object.prototype,propertyIsEnumerable=objectProto.propertyIsEnumerable,nativeGetSymbols=Object.getOwnPropertySymbols,getSymbols=nativeGetSymbols?function(r){return null==r?[]:(r=Object(r),arrayFilter(nativeGetSymbols(r),function(e){return propertyIsEnumerable.call(r,e)}))}:stubArray;module.exports=getSymbols;