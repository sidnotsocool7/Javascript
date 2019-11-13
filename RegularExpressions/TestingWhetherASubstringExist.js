/**
 * Problem - You want to test whether a string is contained in another string.
 * Note - Regular Expression Special Characters
 *  Character                  Matches                                 Example
 *  ^                          matches beginning of input              /^This/ matches “This is...”
 *  $                          matches end of input                    /end$/ matches “This is the end”   */
// *                          matches zero or more times              /se*/matches “seeee” as well as “se”
/* ?                          matches zero or one time                /ap?/ matches “apple” and “and”
    +                          matches one or more times               /ap+/ matches “apple” but not “and”
    {n}                        matches exactly n times                 /ap{2}/ matches “apple” but not “apie”   
    {n, }                      matches n or more times                 /ap{2,}/ matches all p’s in “apple” and “appple” but not “apie”
    {n, m}                     matches atleast n, atmost m times        /ap{2,4}/ matches four p’s in “apppppple” 
    .                          any character except new line            /a.e/ matches “ape” and “axe”
    [...]                      any character within brackets            /a[px]e/ matches “ape” and “axe” but not “ale”
    [^...]                     any character but those within brackets  /a[^px]/ matches “ale” but not “axe” or “ape”
    \b                         matches on word boundary                 /\bno/ matches the first “no” in “nono” 
    \B                         matches on nonword boundary              /\Bno/ matches the second “no” in “nono” 
    \d                         digits from 0 to 9                       /\d{3}/ matches 123 in “Now in 123” 
    \D                         any nondigit character                   /\D{2,4}/ matches “Now " in “Now in 123”
    \w                         matches word character(letters,          /\w/ matches “j” in javascript
                                digits,underscores)    
    \W                         matches any nonword character(not,       \/W/ matches “%” in “100%”
                                letters, digits or underscores)
    \n                         matches a line feed
    \s                         a single whitespace character
    \S                         a single character that is not whitespace
    \t                         a tab 
    (x)                        capturing parentheses                    Remembers the matched characters                
    RegExp object created using constructor var re = new RegExp("Shelley\s+Powers"); 
    The RegExp literal is compiled when script is evaluated, so you should use a RegExp literal when you know the expression won’t change. 
    A compiled version is more efficient. 
    Use the constructor when the expression changes or is going to be built or provided at runtime.                                                                     
*/

var cookbookStr = new Array();

cookbookString[0] = "Joe's Cooking Book";
cookbookString[1] = "Sam's Cookbook";
cookbookString[2] = "JavaScript CookBook";
cookbookString[3] = "JavaScript BookCook";

var pattern = /Cook.*Book/;
for (var i = 0; i < cookbookStr.length; ++i) {
  console.log(cookbookStr[i] + " " + pattern.test(cookbookStr[i]));
}
//Joe's Cooking Book true
//Sam's Cookbook false
//JavaScript CookBook true
//JavaScript BookCook false
