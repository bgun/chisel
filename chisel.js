var http = require("http");

// Get contents of a URL as a string
exports.getUrlContents = function(url, callback) {
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

// Returns an array of all the URLs found in a string
exports.findUrls = function(data) {
  var urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/gi;
  var urlArray = [];
  var returnArray = [];
  while((urlArray = urlRegex.exec(data)) !== null) {
    returnArray.push(urlArray[0]);
  }
  return returnArray;
};
