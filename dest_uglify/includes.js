var baseIndexOf=require("./_baseIndexOf"),isArrayLike=require("./isArrayLike"),isString=require("./isString"),toInteger=require("./toInteger"),values=require("./values"),nativeMax=Math.max;function includes(e,r,i,n){e=isArrayLike(e)?e:values(e),i=i&&!n?toInteger(i):0;var a=e.length;return i<0&&(i=nativeMax(a+i,0)),isString(e)?i<=a&&e.indexOf(r,i)>-1:!!a&&baseIndexOf(e,r,i)>-1}module.exports=includes;