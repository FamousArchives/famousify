/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict';

var transformTools = require('browserify-transform-tools');

var options = {
  jsFilesOnly: true
};

module.exports  =  transformTools.makeRequireTransform('famousify', options,
  function (args, opts, done) {
    return done();
  });
