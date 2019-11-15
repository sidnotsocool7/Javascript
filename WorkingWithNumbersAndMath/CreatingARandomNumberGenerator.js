/**
 * Problem - You need to generate a randon number, between 0 and 255.
 * The random number generates a random number between 0 and 1. To increase the range,
 * multiply the result by the upper end of the range of values you want.
 * If you need a random number with a higher lower end, such as  a number between 5 and 10,
 * multiply the value from random by a number equal to the upper range, minus the lower range,
 * plus one, and then add the lower range to the result after applying Math.floor(). 
 */

 var randomNumber = Math.floor(Math.random() * 255);

