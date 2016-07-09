
require('babel-register')({
        "presets": ["es2015"]
});


var express = require('express');
var app = express();
import {Component} from 'react';
import ReactDOM from 'react-dom';
//var React = require('react');
var ReactDOMServer=require('react-dom/server');
var Component = require('./app.jsx');

app.get('/', function (req, res) {
 var html = ReactDOMServer.renderToString(
 	React.createElement(App)
 	);
 response.send(html);
});

app.use(express.static('public'));
app.use(express.static('files'));


app.get('/container/content', function (req, res) {
  res.send('Hello----------World!');
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});