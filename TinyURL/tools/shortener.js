/**
 * Created by Vampiire on 6/14/17.
 */

const shortenedURL = require('../DB_Format/shortenedURL');

function newShortURL(link, route){

    // build the URL shortened link
    let domain = 'https://vampiire-tinyurl.herokuapp.com/';

    let shortenedLink = domain + route;

    let shortDoc = new shortenedURL.shortModel({

        "_id" : route,
        "original" : link,
        "short" : shortenedLink
    });

    return shortDoc;
}

function addURL(array, link){

// update all the indices (_id which stores the routes) for existing shortened URL documents
// prevent overlapping routes
    array.forEach(function(e,i){

        array[i]._id = i;

    });

    let route = array.length;

    let shortDoc = newShortURL(link, route);


    // push the new document
    array.push(shortDoc);


    // return the array, document, and the shortened URL for the user
    return {array: array, document: shortDoc, shortenedURL : shortDoc.short};
}


// iterate through the array to find the matching route and return the original link
// used in routing the user's shortened url request back towards their intended target
function originalURL(array, route){

    array.forEach(function(e,i){

        if(array[i]._id === route){
            return e.original;
        }

    });
}

module.exports = {

    newShortURL : newShortURL,
    addURL : addURL,
    originalURL : originalURL
};

