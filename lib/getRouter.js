'use strict';

var getRouter = function(){};

getRouter.prototype.POST = require('./post.js');
getRouter.prototype.GET = require('./get.js');
getRouter.prototype.PUT = require('./put.js');
getRouter.prototype.PATCH = require('./patch.js');
getRouter.prototype.DELETE = require('./delete.js');

module.exports = new getRouter();