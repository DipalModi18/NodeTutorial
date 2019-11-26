'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _commonImports = require('./commonImports');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-core/register');
//import * as arrow_function from './arrow_function';


// var test = require('./test1.js');

// test('aa', 'b', 22, 43);

//console.log(arrow_function.increment(5));
// OR import { square } from 'arrow_function';
// console.log(square(5));

//console.log(arrow_function.sum(1,2,3,4,5));

//console.log(arrow_function.multiply(2,4,5,1,2));

console.log(_commonImports.arrow_function.any(1, 2, 3, 4, 5, 6));