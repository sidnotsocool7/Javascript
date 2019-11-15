/**
 * Problem - You want to create a multidimensional array(an array of arrays)
 */

var arraylength = 3;

var multiArray = new Array(arraylength);

for (var i = 0; i < arraylength; i++) {
  multiArray[i] = new Array(arraylength);
}

multiArray[0][0] = "apple";
multiArray[0][1] = "banana";
multiArray[0][2] = "cherry";

multiArray[1][0] = 2;
multiArray[1][1] = 56;
multiArray[1][2] = 83;

multiArray[2][0] = ["test", "again"];
multiArray[2][1] = ["java", "script"];
multiArray[2][2] = ["read", "books"];

console.log(multiArray[2]); //test,again,java,script,read,books
console.log(multiArray[2][2]); //read,books
console.log(multiArray[2][2][1]); //books
