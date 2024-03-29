/*
 * Author: Wes Modes <wmodes@csumb.edu>
 * Created: 19 September
 * License: Public Domain
 */

pizzaList = [
  "engfer-pizza-works-santa-cruz",
  "woodstocks-pizza-slo-san-luis-obispo-6",
]

pizzaObj = [
  {
    yelpid: "engfer-pizza-works-santa-cruz",
    name: "Engfer Pizza Works",
    city: "Santa Cruz, CA"
  },
  {
    yelpid: "woodstocks-pizza-slo-san-luis-obispo-6",
    name: "Woodstocks Pizza",
    city: "San Luis Obispo, CA"
  }
]

// new Comment
// Hey, this is the prototyping method
//
// function Vehicle(make, model, year, color, extras, name) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.extras = extras;
//   this.name = name;
//   this.info = function() {
//     return this.color + " " + this.year + " " + this.make + " " +  this.model + " with " +  this.extras + " called " + this.name;
//   }
// }

// This is the NEW class method
//
class Vehicle {
  constructor(make, model, year, color, extras, name) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.extras = extras;
    this.name = name;
  }
  info() {
    return this.color + " " + this.year + " " + this.make + " " +  this.model + " with " +  this.extras + " called " + this.name;
  }
}

var vehicles = [];

vehicles.push(new Vehicle("Shwinn", "LeToure", 1976, "gold", "Brookes saddle", "bike"));
vehicles.push(new Vehicle("Ford", "Taurus", 1995, "rusty", "torn seats and broken radio", "Sparklepony"));

outputEl = document.getElementById("output");
for (var i = 0; i<vehicles.length; i++) {
  var newEl = document.createElement("li");
  newEl.innerText = vehicles[i].info();
  outputEl.appendChild(newEl);
}
