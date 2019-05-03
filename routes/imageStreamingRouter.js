var express = require('express');
var fs = require('fs');
var router = express.Router();

router.use("/", function(req, res, next){
	if (!req.user.userId) {
		res.redirect("/");
	}
	else {
		next();
	}
});

router.get('/', function(req, res){
	res.render('imageStreaming.html');
});

router.get('/home', function(req, res){
	res.render('imageStreaming.html');
});

router.get('/dirList', function(req, res)	{
	var resObj = new Object();

	var destFolder = '/home/chj/workspace/Noa/public/usb1/ondisk';
	var relFolder = destFolder.split('public/')[1];

	resObj.dir = [];
	resObj.fil = [];
	resObj.pwd = destFolder;
	fs.readdir(destFolder, function(err, files)	{
		for(var i = 0; i < files.length; i++)	{
			if(fs.lstatSync(destFolder + '/' + files[i]).isDirectory()) {
				resObj.dir.push(relFolder + '/' + files[i]);
			}
			else {
				resObj.fil.push(relFolder + '/' + files[i]);
			}
		}
		res.send(JSON.stringify(resObj));
	});
});

router.post('/dirList', function(req, res) {
	var dir = req.body.dir;
	var resObj = new Object();

	var destFolder = dir;
	var relFolder = destFolder.split('public/')[1];

	resObj.dir = [];
	resObj.fil = [];
	resObj.isDir = [];
	resObj.pwd = destFolder;

	fs.readdir(destFolder, function(err, files)	{
		for(var i = 0; i < files.length; i++)	{
			if(fs.lstatSync(destFolder + '/' + files[i]).isDirectory()) {
				resObj.dir.push(relFolder + '/' + files[i]);
			}
			else {
				resObj.fil.push(relFolder + '/' + files[i]);
			}
		}
		res.send(JSON.stringify(resObj));
	});
});

module.exports = router;
