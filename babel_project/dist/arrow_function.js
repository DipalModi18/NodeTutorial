'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.square = square;
require('babel-core/register');

var increment = exports.increment = function increment(a) {
    return a + 1;
}; // arrow function with one argument and no return statement

function square(a) {
    return a * a;
}
//multiple export can be done from a file using export keyword
//no need of module.exports


var factorial = exports.factorial = function factorial(a) {
    var fact = 1;
    for (var i = 1; i <= a; i++) {
        fact = fact * i;
    }
    return fact;
};

var sum = exports.sum = function sum() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    // https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464 
    //If i already have an array, but i want to use the values in that array to create something completely new, use the reduce.
    return args.reduce(function (previous, current) {
        console.log(' Previous :' + previous + ' Current :' + current);
        return previous + current;
    });
};

var multiply = exports.multiply = function multiply(multiplier) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
    }

    //If i already have an array and i want to do the exact same operation on each of the elements in the array and return the same amount of items in the array, use the map.
    return args.map(function (element) {
        return multiplier * element;
    });
};

var any = exports.any = function any() {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
    }

    for (var i = 0; i < args.length - 1; i = i + 2) {
        console.log('key :' + args[i] + " value :" + args[i + 1]);
    }
};