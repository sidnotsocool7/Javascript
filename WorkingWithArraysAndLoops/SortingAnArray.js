/**
 * Problem - You want to sort an array.
 * Note - The function subtracts the second parameter value from the first, and if the first is less than the second, a negative value is returned; otherwise, the value is positive. If the return value is less than zero, the sort index for the second parameter is set higher than the first parameter. If the value is greater than zero, the sort index for the first parameter is set higher than the other. If the value is exactly zero, the sort index for the two is unchanged.
 */

var numArray = [4, 13, 2, 31, 5];
console.log(numArray.sort()); //13,2,31,4,5

function compareNumbers(a, b) {
  return a - b;
}

console.log(numArray.sort(compareNumbers)); //2,4,5,13,31

var strArr = ["4", "13", "2", "31", "5"];
console.log(strArr.sort(compareNumbers)); //2,4,5,13,31 (number conversion is automatic)

var numArr = [1, 2, 3, 4, 5];
console.log(numArr.reverse()); //2,3,1,4,5

var numArr1 = [1, 2, 3, 4, 5];
numArr1.sort();
console.log(numArr1.reverse()); //5,4,3,2,1
