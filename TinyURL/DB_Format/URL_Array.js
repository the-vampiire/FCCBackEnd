/**
 * Created by Vampiire on 6/14/17.
 */

const mongoose = require('mongoose');

// call the shortenedURL to obtain the schema for each document in the array
const shortenedURL = require('./shortenedURL');

// schema for the collection array
const URLArraySchema = new mongoose.Schema({

    "_id" : String,

    "updated": {type: Number, default: Date.now() },
    'URLs' : [shortenedURL.shortSchema]

});

let URLArrayModel = mongoose.model('URLArrayModel', URLArraySchema);


module.exports = {

    schema : URLArraySchema,
    model : URLArrayModel

};


// collection.URLs[i] to access shortened URL documents

