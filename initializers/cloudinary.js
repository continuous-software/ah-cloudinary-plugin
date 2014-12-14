'use strict';

var Promise = require('bluebird');
var Cloudinary = require('cloudinary');

exports.cloudinary = function(api, next) {

  api.cloudinary = Cloudinary;
  api.cloudinary.config(api.config.cloudinary);

  next();

};
