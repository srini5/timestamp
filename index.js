var express = require("express")();

express.get('/', function(req,res){
    res.end("Hello World");
}).listen(8080);