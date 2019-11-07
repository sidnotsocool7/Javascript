/**
 * Problem - You want to merge 2 or more strings into one.
 */

 var string1 = "This is a ";
 var string2 = "test";
 var string3 = string1 + string2;
 console.log(string3); // This is a test

 var string4 = "".concat("This ", "is ", "a ", "test");
 console.log(string4); //This is a test