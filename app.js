var express = require("express");
var app = express();

// body parser
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// session
var session = require("express-session");
app.use(session({
  secret: "12kjub#$@5",
  resqve: true,
  saveUninitialized: true,
}));

//public
app.use(express.static("public"));
app.use(express.static("views"));

app.set('view engine','ejs');
app.set('views','./views');

// authorization module
var authorization = require("./authorization/main");
app.use("/", authorization);

// default page
app.get("/", function(req, res){
  res.render("index", {});
});

app.listen(35008, function(){
  console.log("Noa의 서버가 열렸다.");
});
