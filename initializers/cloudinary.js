'use strict';

var Promise = require('bluebird');
var Cloudinary = require('cloudinary');

exports.cloudinary = function(api, next) {

  api.cloudinary = Cloudinary.config(api.config.cloudinary);

  next();

};
