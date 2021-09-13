// lab5.js - Play with variables and stuff
// Author: Wes Modes <wmodes@ucsc.edu>
// Created: 13 September
// License: Public Domain


console.log("We got this far, yo");

// Declare variables to hold the make, model, color, and year of your vehicle, example, var year = 2004
var make = "Ford";
var model = "Taurus";
var color = "rusty";
var year = 1995;
var extras = "torn hardtop, ripped upholstery";


// Declare a boolean variable ownIt for whether you own it or not.
var ownIt = true;

// Create a new variable age that subtracts the year from the current year
var age = new Date().getFullYear();

// Use document.writeln() to neatly output each of your variables, example, document.writeln("Make: " + make + "<br>");
document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Extras: " + extras + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Own it: " + ownIt + "<br>");
document.writeln("Age: " + age + "<br>");

document.writeln("");
