/**
 * Created by Vampiire on 6/14/17.
 */


const mongoose = require('mongoose');

const tools = require('./exporter');

const URL_Array = require('../DB_Format/URL_Array');

const URLArrayModel = URL_Array.model;

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

module.exports = {

    getURL : getURL

};













