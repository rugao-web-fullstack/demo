var request = require('request');
var cheerio = require('cheerio');
request('http://www.baidu.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  var $ = cheerio.load(body);
  console.log($("#seth").text());
});
