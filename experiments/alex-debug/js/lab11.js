/*
Author: Alex Wooddy <awooddy@csumb.edu>
created: 15th of September
license: Public Domain

code referenced from Wes Modes (Csumb) lecture.
*/

function sortingHat(str) {

	len = str.length;
	mod = len % 4

	if (mod == 0) {

		return "Witch";
	}

	else if (mod == 1) {
		return"Druid";
	}

	else if (mod == 2) {
		return "Necromancer";
	}

	else if (mod == 3) {
		return "Cleric";
	}
}


var button = document.getElementById("button");
var input = document.getElementById("input");


button.addEventListener("click", function() {
  console.log("Button press");
	var name = document.getElementById("input").value;
  console.log("name:", name);
	var house = sortingHat (name);
  console.log("house:", house);
	newText = "<p> Congratulations, you are" + house + "class</p>";
  console.log("newText:", newText);
	outputEl = document.getElementById("output");
  console.log("outputEl:", outputEl);
  outputEl.innerHTML = newText;

})
