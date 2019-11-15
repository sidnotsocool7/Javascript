/**
 * Problem - You want to access values in an HTML table and convert to numbers for processing.
 */

 var rows = document.getElementById("table1").children[0].rows;
 var numArray = new Array();
 for(var i=0; i < rows.length; i++){
     numArray[numArray.length] = parseInt(rows[i].cells[1].firstChild.data);
 }