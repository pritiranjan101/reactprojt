

var babel = require('babel-register')({
        "presets": ["es2015"]
});

var express = require('express');
var app = express();

var React = require('react');
var ReactDOMServer=require('react-dom/server');
var path = require('path');


//app.get('/',function(req,res){
  //res.sendFile(path.join(__dirname +'/index.html'));
//});



app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/container/due.html'));
  
});

//var App = require('./app.jsx');

//app.get('/', function(req, res) {
  // var html = ReactDOMServer.renderToString(
   	//React.createElement(App));
  // response.send(html);
//});


//app.set('view engine', 'jsx');

//app.get("/", function(req, res){
  //res.send('Hello  World!');
//});


//app.use(express.static('public'));
app.use(express.static('files'));


app.get('/container/content', function (req, res) {
  res.send('Hello----------World!');
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});