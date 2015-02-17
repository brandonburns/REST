'use strict';

var app = require('./app.js');

app.work(3000, function(err,data) {
  console.log('working');
});

app.add('testing');