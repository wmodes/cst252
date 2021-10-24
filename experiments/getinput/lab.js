/*Author: Val Ramirez <valeramirez@csumb.edu>
*Created: 5 October
*Special Thanks to :
    Wes Modes for their lecture notes and resources via JS Fiddle, https://jsfiddle.net/wmodes/1m4v39ge/23/, base was used and I changed the text
    Ashlyn Einhell for their help with troubleshooting and
    Caden Albertson for listenting to me complain about how much I don't understand these assignments.
*/


//here is what will appear in the output section
var button = document.getElementById("myButton");
var input = document.getElementById("input");
var heading = document.getElementById("heading");

function sortName(name) {
  return name.toUpperCase().split('').sort().join('');
}

//getting the button to work
function buttonPress() {

  console.log("Button pressed!");

  // get input from field
  var inputText = input.value;
  console.log("Input: " + inputText);

  // add inp
  var newStr = "Nice to meet you, " + inputText + "! That's a pretty cool name you got there! I fixed your name: " + sortName(inputText);
  heading.innerText = newStr;

  // heading.innerText = "Nice to meet you, " + inputText + "! That's a pretty cool name you got there!"
  // ;
  // // clear field value
  // input.value = "";
  //
  // input.focus();
}

button.addEventListener("click", buttonPress);
