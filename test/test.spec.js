'use strict';

const Singular = require('singular');
const singularMongoose = require('..');
const should = require('should');

let app;
let mongo;

describe('Singular Mongoose', () => {
    before(() => {
        app = new Singular({
            config: {
                mongoose: {
                    base: 'test' + Date.now(),
                },
            },
        });
        
        app.module(singularMongoose);
    });
    
    after(() => {
       return app.inject('mongoose', (mongoose) => {
           return mongoose.connections[0].dropDatabase();
       });
    });
    
    
    it('Should instantiate mongo database', () => {
        return app.inject('mongoose', (mongoose) => {
            should(mongoose).be.instanceOf(Object);
        });
    });
    
    it('Should connect to database mongodb', () => {
        return app.inject('mongoose', (mongoose) => {
            let col = mongoose.connections[0].collection('test');
            
            col.insert({n: 1})
            .then((doc) => col.findOne({_id: doc._id}).then(doc => {
                should(doc).be.instanceOf(Object);
                return doc;
            }));
        });
    })
});