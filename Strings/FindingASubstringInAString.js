/**
 * Problem - Finding a substring in a string
    Note - search funtion can also be used
 */

 var testValue = "This is the Cookbook's test string";
 var subsValue = "Cookbook";
 console.log(testValue.indexOf(subsValue)); //12 (-1 if not present)

var test1 = "This apple is my apple";
console.log(test1.indexOf("apple", 10)); //17

//lastIndexOf counted from right
console.log(test1.lastIndexOf("apple")); //17
console.log(test1.lastIndexOf("apple", 12)); //5
