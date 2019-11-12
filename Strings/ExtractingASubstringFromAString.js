/**
 * Problem - You have a string with several sentences, one of which has a list of items. The list begins 
 *          with a colon(:) and end with a period(.). You want to extract  just the list.           
 */

 var sentence = "This is one sentence. This is a sentence with a list of items:cherries, oranges, apples, bananas."
 var start = sentence.indexOf(":");
 var end = sentence.indexOf(".", start+1);
 var list = sentence.substring(start+1, end);
 console.log(list); //cherries, oranges, apples, bananas
