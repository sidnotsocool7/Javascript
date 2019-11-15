/**
 * Problem - You want to store values in such a way that you can access the values in the order in which they were stored.
 */

var queue = new Array();

queue.push("first");
queue.push("second");
queue.push("third");

console.log(queue.shift()); //first
console.log(queue.shift()); //second
console.log(queue); //third
