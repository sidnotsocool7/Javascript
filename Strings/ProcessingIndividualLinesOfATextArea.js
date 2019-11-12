/**
 * Problem - You want to be able to process individual lines from a text area box.
 */

 //Print out last line to page

 var txtBox = document.getElementById("inputbox");
 var lines = txtBox.nodeValue.split("\n");
 var blk = document.getElementById("result");
 blk.innerHTML = lines[lines.length - 1];