/**
 * Problem - You want to traverse all of the values in a table column, convert the values yo numbers,
 *           and sum the numbers.
 */

 var sum = 0;
 var cells = document.querySelectorAll("td:nth-of-type(2)");
 for(var i=0; i<cells.length; i++){
     sum += parseFloat(cells[i].firstChild.data);
 }