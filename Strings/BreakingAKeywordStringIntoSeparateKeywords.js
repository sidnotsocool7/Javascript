/**
 * Problem - Breaking a keyword string into separate keywords.
 * Note - We can also use regular expression as a parameter to split.
 */

 var list = "mango, cherries, apples, oranges";
 var fruits = list.split(",");
 console.log(fruits); // [mango, cherries, apples, oranges]
 var fruits1 = list.split(",", 2);
 console.log(fruits1); // [mango, cherries]