var MapCache=require("./_MapCache"),FUNC_ERROR_TEXT="Expected a function";function memoize(e,a){if("function"!=typeof e||null!=a&&"function"!=typeof a)throw new TypeError(FUNC_ERROR_TEXT);var c=function(){var r=arguments,t=a?a.apply(this,r):r[0],n=c.cache;if(n.has(t))return n.get(t);var o=e.apply(this,r);return c.cache=n.set(t,o)||n,o};return c.cache=new(memoize.Cache||MapCache),c}memoize.Cache=MapCache,module.exports=memoize;