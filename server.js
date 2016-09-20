// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.envPORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

require('./routing/api-routes.js')(app);
require('./routing/html-routes.js')(app);

app.listen(PORT, function(){
	console.log("App lsitening on PORT: "+ PORT);
});