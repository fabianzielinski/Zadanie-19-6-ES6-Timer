"use strict";

// zadanie 1
var a = "Hello";
var b = "World";
console.log(a + " " + b);

// zadanie 2
var multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return console.log(a * b);
};

// zadanie 3
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return console.log(args.reduce(function (total, arg) {
    return total + arg;
  }) / args.length);
};

// zadanie 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average.apply(undefined, grades);

// zadanie 5
var array = [1, 4, "Iwona", false, "Nowak"];
var firstname = array[2],
    lastname = array[4];

console.log(firstname + " " + lastname);
