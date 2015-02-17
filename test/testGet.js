'use strict';

require('../index.js');
var fs = require('fs');
var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
    
chai.use(chaihttp);


describe('should recongize a get request', function() {
  it('get request recognized', function(done) {
    chai.request('localhost:3000')
      .get('/testing/7')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).eql(200);
        done();
      });
  });
});