/**
 * Problem - You want to trim the whitespace around a string that you have accessed from a form element.
    Note - other related methods are trimLeft and trimRight
 */
 var str = "   It will remove left and right spaces.   "
 console.log(str.trim()); //It will remove left and right spaces.

 if(typeof String.trim == "undefined"){
     String.prototype.trim = function(){
         return this.replace(/(^\s*)|(\s*$)/g, "");
     }
 }

