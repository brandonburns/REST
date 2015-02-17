'use strict';

require('../index.js');
var fs = require('fs');
var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
    
chai.use(chaihttp);


describe('Successful add', function() {
  var server = 'localhost:3000';
  it('Show that the file was added', function(done) {
    chai.request(server)
      .post('/testing')
      .end(function (err, res) {
        expect(err).to.eql(null);
        expect(res.text).to.eql('added it');
        done();
      });
  });
});