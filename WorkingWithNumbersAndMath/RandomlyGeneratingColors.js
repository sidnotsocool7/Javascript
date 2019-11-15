/**
 * Problem - You need to randomly generate a web color.
 */

 function randomVal(value){
     return Math.floor(Math.random() * value);
 }

 function randomColor(){
     return "rgb(" + randomVal(255) + "," + randomVal(255) + "," + randomVal(255) + ")"; 
 }