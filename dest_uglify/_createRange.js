var baseRange=require("./_baseRange"),isIterateeCall=require("./_isIterateeCall"),toFinite=require("./toFinite");function createRange(e){return function(t,i,r){return r&&"number"!=typeof r&&isIterateeCall(t,i,r)&&(i=r=void 0),t=toFinite(t),void 0===i?(i=t,t=0):i=toFinite(i),r=void 0===r?t<i?1:-1:toFinite(r),baseRange(t,i,r,e)}}module.exports=createRange;