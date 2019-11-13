/**
 * Problem - You need to validate whether a text string is a valid U.S.-based social security number.
 */

var pattern = /^\d{3}-?\d{2}-?\d{4}$/;
console.log("555-44-333".match(pattern)); //true
console.log("55544333".match(pattern)); //true
console.log("555---44--333".match(pattern)); //false
