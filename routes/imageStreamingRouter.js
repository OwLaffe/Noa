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

//	var destFolder = '/home/chj/workspace/Noa/public/usb1/ondisk/사진 - 실사/은꼴';
	var destFolder = 'C:\\Users\\owlsogul\\Documents\\GitHub\\Noa\\public\\da';
	resObj.dir = [];
	fs.readdir(destFolder, function(err, files)	{
		for(var i = 0; i < files.length; i++)	{
			if(files[i].endsWith("png") || files[i].endsWith("jpg"))	{
//				resObj.dir.push('usb1/ondisk/사진 - 실사/은꼴'+ '/' + files[i]);
				resObj.dir.push('da/' + files[i]);
			}
		}
		res.send(JSON.stringify(resObj));
	});
});


router.post('/dirList', function(req, res) {
	var dir = req.body.dir;
	var resObj = new Object();

	var destFolder = '/home/chj/usb1/ondisk';

	res.send(JSON.stringify(resObj));
});

module.exports = router;
