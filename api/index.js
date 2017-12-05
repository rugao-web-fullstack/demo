var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }))

var api = require("./api").api;
var user = require("./user").user;

// 网站的API
app.use("/api", api);

// 网站的URL
app.use("/user", user);

app.use("/", function(req, res) {
  res.end("This is home page!");
});


app.listen(3000);
