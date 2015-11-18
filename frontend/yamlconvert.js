"use strict";

var yaml = require('yamljs'),
  glob = require('glob'),
  fs = require('fs'),
  path = require('path');

glob('*.yaml', function (err, files) {
  if (err) {
    console.error(err);
    return;
  }
  files.forEach(function (file) {
    var yamlData = yaml.load(file);
    fs.writeFileSync('.' + path.basename(file, '.yaml'), JSON.stringify(yamlData, null, 2), 'utf8');
  });
});
