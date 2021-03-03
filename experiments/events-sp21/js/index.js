/*
 * Author: Wes Modes <wmodes@csumb.edu>
 * Created: 13 March
 * License: Public Domain
 */

var minXdelta = 25;
var maxXdelta = 100;
var minYdelta = 25;
var maxYdelta = 100;

var titleEl = document.getElementById("changeme");
console.log("Here's da title:", titleEl);

var buttonEl = document.getElementById("my-button");
console.log("Here's da button:", buttonEl);

var betterEl = document.getElementById("better-button");
console.log("Here's da other button:", betterEl);

var inputEl = document.getElementById("my-input");
console.log("Here's da input field:", inputEl);

buttonEl.addEventListener("click", function(){
  var name = inputEl.value;
  // var char = Math.floor(Math.random() * (name.length - 1));
  // name = name
  //var name = prompt("What's your name?");
  titleEl.innerText = "Hello, " + name;
  inputEl.value = "";
})

betterEl.addEventListener("click", function(){
  alert("hooray. you won");
})

// add mouseover event for button
betterEl.addEventListener("mouseover", function(){
  console.log("Mouseover");
  // pick random distance for x and y
  var xDelta = Math.floor(Math.random() * maxXdelta);
  var yDelta = Math.floor(Math.random() * maxYdelta);
  // pick random direction for x and y
  var xDir = Math.floor((Math.random() * 3) - 1);
  var yDir = Math.floor((Math.random() * 3) - 1);
  // create vector
  var xDelta = xDelta * xDir;
  var yDelta = yDelta * yDir;
  // get current position
  var curX = betterEl.offsetLeft;
  var curY = betterEl.offsetTop;
  // caculate new positionf
  var newX = curX + xDelta;
  var newY = curY + yDelta;
  // set new position
  betterEl.style.left = newX + "px";
  betterEl.style.top = newY + "px";
})
