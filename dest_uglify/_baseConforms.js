var baseConformsTo=require("./_baseConformsTo"),keys=require("./keys");function baseConforms(o){var e=keys(o);return function(r){return baseConformsTo(r,o,e)}}module.exports=baseConforms;