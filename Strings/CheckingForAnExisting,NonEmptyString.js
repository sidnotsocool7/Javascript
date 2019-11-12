/**
 * Problem - You want to check that a variable is defined, is a string, and is not empty.
 *      Note - typeof number = "number"
 *             typeof string = "string"
 *             typeof Boolean = "boolean"
 *             typeof function = "function"
 *             typeof null = "object"  
 *             typeof array = "object"
 *             typeof object = "object"
 *             typeof undefined = "undefined"
 *      valueOf() used because If variable is a string object, it returns a string literal.
 */

 if(((typeof unknownVariable != "undefined") &&
       (typeof unknownVariable.valueOf == "string")) &&
       (unknownVariable.length > 0 )){
           console.log(unknownVariable);
}