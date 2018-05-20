var Stack=require("./_Stack"),arrayEach=require("./_arrayEach"),assignValue=require("./_assignValue"),baseAssign=require("./_baseAssign"),baseAssignIn=require("./_baseAssignIn"),cloneBuffer=require("./_cloneBuffer"),copyArray=require("./_copyArray"),copySymbols=require("./_copySymbols"),copySymbolsIn=require("./_copySymbolsIn"),getAllKeys=require("./_getAllKeys"),getAllKeysIn=require("./_getAllKeysIn"),getTag=require("./_getTag"),initCloneArray=require("./_initCloneArray"),initCloneByTag=require("./_initCloneByTag"),initCloneObject=require("./_initCloneObject"),isArray=require("./isArray"),isBuffer=require("./isBuffer"),isMap=require("./isMap"),isObject=require("./isObject"),isSet=require("./isSet"),keys=require("./keys"),CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4,argsTag="[object Arguments]",arrayTag="[object Array]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",funcTag="[object Function]",genTag="[object GeneratorFunction]",mapTag="[object Map]",numberTag="[object Number]",objectTag="[object Object]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",weakMapTag="[object WeakMap]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",cloneableTags={};function baseClone(e,a,r,n,t,g){var o,l=a&CLONE_DEEP_FLAG,i=a&CLONE_FLAT_FLAG,s=a&CLONE_SYMBOLS_FLAG;if(r&&(o=t?r(e,n,t,g):r(e)),void 0!==o)return o;if(!isObject(e))return e;var c=isArray(e);if(c){if(o=initCloneArray(e),!l)return copyArray(e,o)}else{var T=getTag(e),b=T==funcTag||T==genTag;if(isBuffer(e))return cloneBuffer(e,l);if(T==objectTag||T==argsTag||b&&!t){if(o=i||b?{}:initCloneObject(e),!l)return i?copySymbolsIn(e,baseAssignIn(o,e)):copySymbols(e,baseAssign(o,e))}else{if(!cloneableTags[T])return t?e:{};o=initCloneByTag(e,T,l)}}g||(g=new Stack);var u=g.get(e);if(u)return u;if(g.set(e,o),isSet(e))return e.forEach(function(n){o.add(baseClone(n,a,r,n,e,g))}),o;if(isMap(e))return e.forEach(function(n,t){o.set(t,baseClone(n,a,r,t,e,g))}),o;var y=s?i?getAllKeysIn:getAllKeys:i?keysIn:keys,f=c?void 0:y(e);return arrayEach(f||e,function(n,t){f&&(n=e[t=n]),assignValue(o,t,baseClone(n,a,r,t,e,g))}),o}cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=!0,cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=!1,module.exports=baseClone;