module.exports = function(app){
	var express = require('express');
	var router = express.Router();

	router.get('/', function(req, res){
		res.render('imageStreaming.html');
	});
	
	router.get('/home', function(req, res){
		res.render('imageStreaming.html');
	});
	return router;	
};

