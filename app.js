var express = require("express");
//var bodyParser = require('body-parser');
var app = express();

var ims = require("./routes/imageStreamingRouter.js")(app);

app.use(express.static("public"));
app.use(express.static("views"));

app.use('/ims',ims);

app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);
app.set('views','./views');
//app.use(bodyParser.json());

app.listen(35008, function(){
  console.log("Noa의 서버가 열렸다.");
});
