'use strict';

var fs = require('fs');

module.exports = function(req, res, fileName) {
  fs.unlink('./jsonData/' + fileName, function(err) {
    if(err){
      res.writeHead(404, {
        'Content-Type': 'text/plain'
      });
      res.write("resource not found");
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.write("delete successful");
    }
    res.end();
  });
};