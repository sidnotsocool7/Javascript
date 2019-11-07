/**
 * Problem - You want to compare 2 strings to see if they are same
 * Note - Comparison operators work numerically with numbers but lexicographically with strings.
 *        No strict type checking in comparison operators. 
 */

 var strName = prompt("What's your name?", "");
 if(strName == "Sid"){
     alert("Your name is sid");
 }else{
     alert("Your name isn't sid");
 }

 var numValue = 10.00;
 var strValue = "10";
 console.log(numValue == strValue); //true

 var strObject = new String("Sid");
 var strLiteral = "Sid";
 console.log(strObject == strLiteral) //true
 console.log(strObject === strLiteral) //false (diff dataType)
 console.log(strObject != strLiteral) //false
 console.log(strObject !== strLiteral) //true
 console.log(strObject <= strLiteral) //true

 var fruit1 = "apple";
 var fruit2 = "grapes";
 console.log(fruit1.localeCompare(fruit2)); //-1 (0 for same)