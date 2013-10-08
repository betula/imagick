
var fs = require('fs');
var imagick = require('..');
var assert = require('assert');

describe('imagick', function() {

  it('should work', function(done) {

    imagick(__dirname + '/fixtures/rose.jpg').resize('50%').toBuffer('png', function (err, buffer) {
      if (err) return done(err);
      var result = buffer.toString('base64');
      var fixture = fs.readFileSync(__dirname + '/fixtures/rose.png').toString('base64');

      assert(result == fixture);
      done();

    })

  });
});