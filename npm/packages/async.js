var async = require("async");
async.map(['a', 'b', 'c', 'd'], function(item, next) {
	console.log("inside middle");
	console.log(arguments);
	item += "100";
	next(false, item);
}, function(err, result) {

	console.log(result);
	console.log("inside end");
	console.log("inside end");
});
