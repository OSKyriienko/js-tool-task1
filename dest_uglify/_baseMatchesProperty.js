var baseIsEqual=require("./_baseIsEqual"),get=require("./get"),hasIn=require("./hasIn"),isKey=require("./_isKey"),isStrictComparable=require("./_isStrictComparable"),matchesStrictComparable=require("./_matchesStrictComparable"),toKey=require("./_toKey"),COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;function baseMatchesProperty(e,r){return isKey(e)&&isStrictComparable(r)?matchesStrictComparable(toKey(e),r):function(a){var t=get(a,e);return void 0===t&&t===r?hasIn(a,e):baseIsEqual(r,t,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG)}}module.exports=baseMatchesProperty;