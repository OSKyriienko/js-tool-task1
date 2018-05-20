var composeArgs=require("./_composeArgs"),composeArgsRight=require("./_composeArgsRight"),countHolders=require("./_countHolders"),createCtor=require("./_createCtor"),createRecurry=require("./_createRecurry"),getHolder=require("./_getHolder"),reorder=require("./_reorder"),replaceHolders=require("./_replaceHolders"),root=require("./_root"),WRAP_BIND_FLAG=1,WRAP_BIND_KEY_FLAG=2,WRAP_CURRY_FLAG=8,WRAP_CURRY_RIGHT_FLAG=16,WRAP_ARY_FLAG=128,WRAP_FLIP_FLAG=512;function createHybrid(r,e,o,t,_,A,R,c,i,s){var a=e&WRAP_ARY_FLAG,u=e&WRAP_BIND_FLAG,l=e&WRAP_BIND_KEY_FLAG,d=e&(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG),g=e&WRAP_FLIP_FLAG,n=l?void 0:createCtor(r);return function F(){for(var G=arguments.length,H=Array(G),L=G;L--;)H[L]=arguments[L];if(d)var P=getHolder(F),p=countHolders(H,P);if(t&&(H=composeArgs(H,t,_,d)),A&&(H=composeArgsRight(H,A,R,d)),G-=p,d&&G<s){var W=replaceHolders(H,P);return createRecurry(r,e,createHybrid,F.placeholder,o,H,W,c,i,s-G)}var h=u?o:this,q=l?h[r]:r;return G=H.length,c?H=reorder(H,c):g&&G>1&&H.reverse(),a&&i<G&&(H.length=i),this&&this!==root&&this instanceof F&&(q=n||createCtor(q)),q.apply(h,H)}}module.exports=createHybrid;