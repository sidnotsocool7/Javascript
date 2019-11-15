/**
 * Problem - You want to store values in such a way that you can access the values in reverse order: access the most recently stored value first, then a LIFO stack.
 */

var stack = new Array();

stack.push("first");
stack.push("second");
stack.push("third");

console.log(stack.pop()); //third
console.log(stack.pop()); //second
console.log(stack); //first
