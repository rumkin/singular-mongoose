'use strict';

const mongooseFactory = require('./factory.js');

exports.mongoose = function(app) {
    return mongooseFactory(app.config.mongoose);
};
