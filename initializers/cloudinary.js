'use strict'

var Promise = require('bluebird')
var Cloudinary = require('cloudinary')

module.exports = {
  initialize: function (api, next) {
    api.cloudinary = Cloudinary
    api.cloudinary.config(api.config.cloudinary)
    next()
  },
  start: function (api, next) {
    next()
  },
  stop: function (api, next) {
    next()
  }
}
