var express = require('express');
var app = express();
var body_parser = require('body-parser');

//to parse url-encoded data
app.use(body_parser.urlencoded({ extended : false}));

//to parse json data
app.use(body_parser.json());

module.exports = body_parser;