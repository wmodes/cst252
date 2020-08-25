/*
 * Author: Wes Modes <wmodes@csumb.edu>
 * Created: 13 March
 * License: Public Domain
 */

// Create a <button> element (in jQuery, NOT In your HTML).
var myButton = $("<button>");

// Give it a text label
myButton.html("Press me");

// Add it to your output div
$("#output").append(myButton);

// Add a click event to it that will bring up an alert
myButton.click(function(){
	// Restyle the button with jQuery so it is a pleasant green.
	// myButton.css("background-color", "#a8d973");
	myButton.addClass("green-button");
	// alert("Don't touch me. #metoo");
	$("#pop-up").toggleClass("shown");
})

$("#pop-submit").click(function(){
	var name = $("#stuff").val();
	$("#your-name-here").html(name);
	$("#pop-up").removeClass("shown");
})

colorArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "transparent"];

var color1 = 0;
$("#challenge-button").click(function(){
	$(".challenges").css("color", colorArray[color1]);
	color1++;
	console.log("Current color:", color1, colorArray[color1])
	if (color1 >= colorArray.length) {
		color1 = 0;
	}
});

var color2 = 0;
$("#problems-button").click(function(){
	$(".problems").css("color", colorArray[color2]);
	color2++;
	console.log("Current color:", color2, colorArray[color2])
	if (color2 >= colorArray.length) {
		color2 = 0;
	}
});

var color3 = 0;
$("#results-button").click(function(){
	$(".results").css("color", colorArray[color3]);
	color3++;
	console.log("Current color:", color3, colorArray[color3])
	if (color3 >= colorArray.length) {
		color3 = 0;
	}
});



