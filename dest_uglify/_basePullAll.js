var arrayMap=require("./_arrayMap"),baseIndexOf=require("./_baseIndexOf"),baseIndexOfWith=require("./_baseIndexOfWith"),baseUnary=require("./_baseUnary"),copyArray=require("./_copyArray"),arrayProto=Array.prototype,splice=arrayProto.splice;function basePullAll(r,a,e,l){var s=l?baseIndexOfWith:baseIndexOf,y=-1,o=a.length,i=r;for(r===a&&(a=copyArray(a)),e&&(i=arrayMap(r,baseUnary(e)));++y<o;)for(var n=0,p=a[y],b=e?e(p):p;(n=s(i,b,n,l))>-1;)i!==r&&splice.call(i,n,1),splice.call(r,n,1);return r}module.exports=basePullAll;