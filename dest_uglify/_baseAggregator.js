var baseEach=require("./_baseEach");function baseAggregator(e,a,r,g){return baseEach(e,function(e,o,s){a(g,e,r(e),s)}),g}module.exports=baseAggregator;