/**
 * Problem - You want to concatenate a string with another data type, such as a number
 */

 var numValue = 23.45;
 var total = "The total is " + numValue;
 console.log(total); // The total is 23.45

 var boolValue = true;
 var totalVal = "The value is " + boolValue;
 console.log(totalVal); //The value is true

 var strObject = new String("The value is ");
 var strLiteral = new String("a string");
 var strTotal = strObject + strLiteral;
 console.log(strTotal); // The value is a string
//The resulting string is a string literal, not a string object.