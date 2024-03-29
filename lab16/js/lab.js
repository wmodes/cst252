/*
 * Author: Wes Modes <wmodes@csumb.edu>
 * Created: 19 September
 * License: Public Domain
 */

// new Comment
// Hey, this is the prototyping method
//
function Vehicle(make, model, year, color, extras, name) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  this.name = name;
  this.info = function() {
    var str = "It's a " + color + " " + year + " " + make + " " + model + " with " + extras + " called " + name + ".";
    return str;
  }
}

// This is the NEW class method
//
// class Vehicle {
//   constructor(make, model, year, color, extras, name) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.extras = extras;
//     this.name = name;
//   }
//   info() {
//     return this.color + " " + this.year + " " + this.make + " " +  this.model + " with " +  this.extras + " called " + this.name;
//   }
// }

var vehicles = [];

vehicles.push(new Vehicle("Shwinn", "LeToure", 1976, "gold", "Brookes saddle", "bike"));
vehicles.push(new Vehicle("Ford", "Taurus", 1995, "rusty", "torn seats and broken radio", "Sparklepony"));

outputEl = document.getElementById("output");
for (var i = 0; i<vehicles.length; i++) {
  $("#output").append("<li>" + vehicles[i].info())
}
