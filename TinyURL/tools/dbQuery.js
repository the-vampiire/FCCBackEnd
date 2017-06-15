/**
 * Created by Vampiire on 6/14/17.
 */


const mongoose = require('mongoose');

const tools = require('./exporter');

const URL_Array = require('../DB_Format/URL_Array');

const URLArrayModel = URL_Array.model;

require('dotenv').config({path: '../private.env'});

const DB_Route = process.env.ROUTE;

mongoose.connect('mongodb://shortURL:theShortenator@ds127892.mlab.com:27892/short-url', function(err){

    if(err) throw err;
    console.log('connected to database');

});




function getURL(route){

    return URLArrayModel.findOne({"_id" : "URLArray"}, function(result){

        console.log(`result: ${result}`);

        result = tools.commands.checkCollection(result);

        const URLArray = result.URLs;

        // console.log(URLArray);

        console.log(tools.commands.originalURL(URLArray, route));


       return 'stuff'

    });

}


module.exports = {

    getURL : getURL

};













