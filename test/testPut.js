'use strict';

require('../index.js');
var fs = require('fs');
var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
    
chai.use(chaihttp);

describe('working put request', function() {
  it('recognizes a put request', function(done) {
    chai.request('localhost:3000')
      .put('/testing/3')
      .send({'testing': 'brandon'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).eql(200);
        done();
      });
  });
});