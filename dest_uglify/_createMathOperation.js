var baseToNumber=require("./_baseToNumber"),baseToString=require("./_baseToString");function createMathOperation(e,r){return function(o,t){var i;if(void 0===o&&void 0===t)return r;if(void 0!==o&&(i=o),void 0!==t){if(void 0===i)return t;"string"==typeof o||"string"==typeof t?(o=baseToString(o),t=baseToString(t)):(o=baseToNumber(o),t=baseToNumber(t)),i=e(o,t)}return i}}module.exports=createMathOperation;