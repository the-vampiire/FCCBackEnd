/**
 * Created by Vampiire on 6/14/17.
 *
 * Schema tracks:
 *
 *      original url
 *      shortened route
 *      shortened url
 *      created date
 *      used [number of times the shortened link has been used]
 *
 */

const mongoose = require('mongoose');

const shortSchema = mongoose.Schema({

    "_id" : {type: Number, default: 0},

    "original" : String,
    "short" : String,
    "created": {type: Number, default: Date.now()},
    "used": {type: Number, default: 0}

});

let shortModel = mongoose.model('Short', shortSchema);


module.exports = {
    shortSchema: shortSchema,
    shortModel: shortModel
};
