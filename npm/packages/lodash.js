var _ = require("lodash");
var compiled = _.template('hello <%= user %>!');
console.log(compiled({ 'user': 'fred' }));
