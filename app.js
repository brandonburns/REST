'use strict';

var http = require('http'),
    url = require('url'),
    getRouter = require('./lib/getRouter.js'),
    routes = [],
    App = function(){};

var server = http.createServer(function(req, res) {
  var fullPath = url.parse(req.url).pathname,
      fileStart = Number(fullPath.lastIndexOf('/')) +1,
      path = req.url.split('/')[1],
      fileName = fullPath.substr(fileStart, fullPath.length) + '.json';

  if(routes.indexOf(path) !== -1) {
    getRouter[req.method](req, res, fileName);
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html'
    });
    res.write('page not found');
    res.end();
  }    
});

App.prototype.work = function(address, callback) {
  server.listen(address, callback);
};

App.prototype.add = function(route) {
  routes.push(route);
};

module.exports = new App();