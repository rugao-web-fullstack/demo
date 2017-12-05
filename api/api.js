var router = require("express").Router();
var User = require("./api/user").User;

function handler(req, res) {
  console.log("inside handler");
}

function defaultHandler(req, res) {
  console.log("inside default handler");
}

var userGet = function (req, res) {
  // process
  console.log("user get");
  console.log(req.params);
  console.log(req.params.id);
  var id = req.params.id;
};

router.get(["/users/:id", "/users"], userGet);

router.post(["/users/:id", "/users"], function (req, res) {
  // process
  var body = req.body;
  console.log(body);
  console.log(req.query);
  var action = body && body.action;
  var user = new User();
  // var actions = {
  //   register: register,
  //   login: login,
  //   update: update
  // };
  var handler = user[action];
  if (handler instanceof Function) {
    handler.call(user, req, res);
  } else {
    defaultHandler.call(user, req, res);
  }
});
exports.api = router;
