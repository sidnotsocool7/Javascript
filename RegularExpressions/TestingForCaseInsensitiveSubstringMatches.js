/**
 * Problem - You wnat to test whether a string is contained in another string, but you don't care about the case of the characters in either string.
 * Note - Regular expression flags
 * Flag                 Meaning
 * g                    Global match : matches across an entire string, rather than stopping at first match
 * i                    Ignores case
 * m                    Applies begin and end line characters(^ and &, respectively) to each line in a multiline string.
 */

var cookbookString = new Array();
cookbookString[0] = "Joe's Cooking Book";
cookbookString[1] = "Sam's Cookbook";
cookbookString[2] = "JavaScript CookBook";
cookbookString[3] = "JavaScript cookbook";
var pattern = /Cook.*Book/i; //var pattern = new RegExp("Cook.*Book","i");

for (var i = 0; i < cookbookString.length; ++i) {
  console.log(cookbookString[i] + " " + pattern.test(cookbookString[i], i));
}

//All 4 strings match the pattern
