var apply=require("./_apply"),createCtor=require("./_createCtor"),createHybrid=require("./_createHybrid"),createRecurry=require("./_createRecurry"),getHolder=require("./_getHolder"),replaceHolders=require("./_replaceHolders"),root=require("./_root");function createCurry(r,e,t){var o=createCtor(r);return function a(){for(var c=arguments.length,i=Array(c),l=c,u=getHolder(a);l--;)i[l]=arguments[l];var d=c<3&&i[0]!==u&&i[c-1]!==u?[]:replaceHolders(i,u);return(c-=d.length)<t?createRecurry(r,e,createHybrid,a.placeholder,void 0,i,d,void 0,void 0,t-c):apply(this&&this!==root&&this instanceof a?o:r,this,i)}}module.exports=createCurry;