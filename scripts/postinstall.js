#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

var localFile   = path.normalize(__dirname + '/../config/ah-cloudinary-plugin.js');
var projectFile = path.normalize(process.cwd() + '/../../config/plugins/ah-cloudinary-plugin.js');

if(!fs.existsSync(projectFile)){
  console.log("copying " + localFile + " to " + projectFile);
  fs.createReadStream(localFile).pipe(fs.createWriteStream(projectFile));
}
