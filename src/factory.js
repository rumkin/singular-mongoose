'use strict';

const mongoose = require('mongoose');
const bluebird = require('bluebird');

mongoose.Promise = bluebird;

function mongooseFactory(appConfig) {
    let config = Object.assign({}, appConfig, {
        host: 'localhost',
        port: 27017,
        base: 'test',
        pluralization: false,
    });
    
    let url = `mongodb://${config.host}:${config.port}/${config.base}`;
    return mongoose.connect(url)
    .then(() => mongoose);
}

module.exports = mongooseFactory;