/*
 * Author: Wes Modes <wmodes@csumb.edu>
 * Created: 13 March
 * License: Public Domain
 */

 window.onload = function () {

	 // your script here

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
	})`

}
