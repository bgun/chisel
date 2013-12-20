var http = require("http");
var prompt = require("prompt");

var url = "http://www.bengundersen.com";
var urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/gi;

// Get contents of a URL as a string
var getUrl = function(url, callback) {
  var data = "";
  http.get(url, function(res) {
    res.on("data",function(chunk) {
      data += chunk;
    });
    res.on("end",function() {
      if(callback) {
        callback.call(null, data);
      } else {
        console.log("WARNING: no callback for getUrl");
      }
    });
  });
};

var findUrls = function(str) {
  var arr = [];

};

prompt.start();
prompt.get(['url'], function (err, result) {
  if (err) { return onErr(err); }
  console.log(result.url);

  getUrl(url, function(data) {
    var urlArray = [1,2,3];
    while((urlArray = urlRegex.exec(data)) !== null) {
      console.log(urlArray[0]);
    }
  });
});
function onErr(err) {
  console.log(err);
  return 1;
}


// Get all links from a string
