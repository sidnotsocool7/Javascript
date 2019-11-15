/**
 * Problems- You want to easily access all elements of an array
 */

var mammals = new Array("cat", "dog", "human", "tiger");
var animalString = "";
for (var i = 0; i < mammals.length; i++) {
  animalString += mammals[i] + " ";
}
console.log(animalString); //cat dog human tiger

var numArray = new Array(1, 2, 3, 55, 777);
var i = 0;
while (numArray[i] < 100) {
  alert(numArray[i++]);
}
