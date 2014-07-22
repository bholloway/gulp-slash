var slash = require('slash');
var through = require('through2');

/**
 * Convert given text using node slash, or where no text is given, return a stream
 * that similarly converts gulp (vinyl) file paths in place.
 * @param {string} [text] Text to convert (per node slash)
 * @returns {string|Transform} Converted text where given, else a transform stream for gulp
 */
module.exports = function(text) {
  'use strict';
  if (arguments.length > 0) {
    return !!(text) ? slash(text) : text;
  } else {
    return through.obj(function(file, encoding, done) {
      [ 'path', 'cwd', 'base' ].forEach(function(field) {
        var isValid = (field in file) && (typeof file[field] === typeof '');
        if (isValid) {
          file[field] = slash(file[field]);
        }
      });
      this.push(file);
      done();
    });
  }
}