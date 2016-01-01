var express = require("express");
var app = express();

app.set('port', 5050);

app.get('/', function(request, response){
    response.render('www/index.html')
});