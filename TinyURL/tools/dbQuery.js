/**
 * Created by Vampiire on 6/14/17.
 */


const mongoose = require('mongoose');

const tools = require('./exporter');

const URL_Array = require('../DB_Format/URL_Array');

const URLArrayModel = URL_Array.model;

function getURL(route){

    return URLArrayModel.find({"_id" : "URLArray"}).then(function(collection){

        // run the cleaner to cleanup old / unused links
        tools.cleaner.cleaner(collection);

        const URLArray = collection[0].URLs;

        return tools.commands.originalURL(URLArray, route);

    });

}

function setURL(link){

    tools.cleaner.cleaner(data);

    URLArrayModel.find({"_id" : "URLArray"}).then(function(collection){

        tools.commands.addURL(collection, link);

        collection[0].save(function(err){

            console.log('saved a new one named test2');
        })

    });


}

module.exports = {

    getURL : getURL,
    setURL : setURL

};













