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

    return URLArrayModel.find({"_id" : "URLArray"}).then(function(data){

        const URLArray = data[0].URLs;

        return tools.commands.originalURL(URLArray, route);

    });

}

function setURL(link){


    URLArrayModel.find({"_id" : "URLArray"}).then(function(document){

        tools.commands.addURL(document, link);

        document[0].save(function(err){

            console.log('saved a new one named test2');
        })

    });


}

setURL('www.test3test.com');


module.exports = {

    getURL : getURL

};













