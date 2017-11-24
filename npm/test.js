var a = require("a");
var b = require("b");
console.log(a);
console.log(b);
try {
var c = require("c");
} catch(e) {
	console.log(e);
}

