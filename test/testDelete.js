'use strict';

require('../index.js');
var fs = require('fs');
var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
    
chai.use(chaihttp);

describe('should recognize a delete request', function() {
  var tempFile = 0;
  before(function() {
    fs.readdir('jsonData', function (err, data) {
      tempFile = data.length + 1;
      fs.writeFile('jsonData/' + tempFile + '.json', function (err, data) {
        console.log('temp file for test');
      });
    });
  });
  it('actually deletes file', function(done) {
    chai.request('localhost:3000')
      .delete('/jsonData' + tempFile) 
      .end(function(err, res) {
        expect(err).eql(null);
        expect(fs.readdirSync('jsonData').length).eql(tempFile -1);
        done();
      });
  });
});