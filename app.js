var express = require("express");
var app = express();

app.use(express.static("public"));
app.use(express.static("views"));

app.set('view engine','ejs');
app.set('views','./views');

app.listen(35008, function(){
  console.log("Noa의 서버가 열렸다.");
});
