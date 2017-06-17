/**
 * Created by Vampiire on 6/14/17.
 */


const mongoose = require('mongoose');

const tools = require('./exporter');

const URL_Array = require('../DB_Format/URL_Array');

const URLArrayModel = URL_Array.model;

function getURL(route){

    return URLArrayModel.find({"_id" : "URLArray"}).then(function(collection){

        // // run the cleaner to cleanup old / unused links
        // tools.cleaner.cleaner(collection);

        const URLArray = collection[0].URLs;

        return tools.commands.originalURL(URLArray, route);

    });

}

function setURL(link){

    return URLArrayModel.find({"_id" : "URLArray"}).then(function(collection){

        const URLArray = collection[0].URLs;

        let shortURL = tools.commands.addURL(URLArray, link).shortenedURL;

        collection[0].save(function(err){

            if(err) throw err;

            console.log(`new link saved: ${shortURL}`)
        });

        return shortURL;

    });
}

module.exports = {

    getURL : getURL,
    setURL : setURL

};













