var baseNth=require("./_baseNth"),baseRest=require("./_baseRest"),toInteger=require("./toInteger");function nthArg(e){return e=toInteger(e),baseRest(function(t){return baseNth(t,e)})}module.exports=nthArg;