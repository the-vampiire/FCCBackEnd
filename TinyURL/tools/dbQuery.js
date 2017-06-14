/**
 * Created by Vampiire on 6/14/17.
 */

const mongoose = require('mongoose');

// let db = mongoose.connect('mLab link here');

let shortener = require('./shortener');

function dbSearch(db, route){

    db.find({}).then(function(result){

        let created = result.created;


    });

    let created = Date.parse()




}

console.log(shortener.shorten('www.google.com/test', 6));



