var baseEach=require("./_baseEach"),isArrayLike=require("./isArrayLike");function baseMap(r,a){var e=-1,i=isArrayLike(r)?Array(r.length):[];return baseEach(r,function(r,s,n){i[++e]=a(r,s,n)}),i}module.exports=baseMap;