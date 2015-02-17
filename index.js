'use strict';

var myApp = require('./app.js');

myApp.startServer(3000, function(err,data) {
  console.log('working');
});

myApp.add('testing');