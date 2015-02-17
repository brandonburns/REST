'use strict';

require('../lib/patch');
require('../index');

var fs = require('fs-extra');
var testData = '{"testing":"Brandon"}';
var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
var fileNum = 0;

chai.use(chaihttp);

describe('Should create valid patch request', function() {
  before(function (){
    fs.readdir('jsonData', function (err, data) {
      fileNum = data.length + 1;
    }); 
  });
  it('should show there is nothing to replace/file does not exist', function (done) {
    chai.request('localhost:3000')
      .patch('/jsonData' + fileNum)
      .send(testData)
      .end(function (err, res) {
        expect(res.text).eql('page not found');
        done();
      });
  });
});