var http = require("http");
var prompt = require("prompt");
var chisel = require("./chisel.js");

var defaultUrl = "http://bengundersen.com";

prompt.start();
prompt.get(['url'], function (err, result) {

  if (err) {
    throw new Error("Error retrieving URL");
  }

  var url = result.url;
  if(url === "") {
    url = defaultUrl;
  }
  console.log("Using URL:",url);

  chisel.getUrlContents(url, function(data) {
    var urls = chisel.findUrls(data);
    console.log(urls);
  });

});
