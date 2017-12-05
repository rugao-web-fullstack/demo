var router = require("express").Router();

router.get("/:action", function(req, res) {
  // process
  var id = req.params.id;
  console.log(req.params);
  console.log(req.query);  
  console.log(req.query.page);  
  console.log(req.query.limit);  
  console.log("inside user page :action = " + req.params.action);
});

exports.user = router;
