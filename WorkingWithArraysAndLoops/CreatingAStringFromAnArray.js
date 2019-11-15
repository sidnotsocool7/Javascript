/**
 * Problem - You want to create a single string from an array
 */

var numArray = [1, 2, 3, 4, 5];
console.log(numArray.join("+")); // 1+2+3+4+5

console.log(numArray.join()); //1,2,3,4,5 (comma is string by default if not provided)
