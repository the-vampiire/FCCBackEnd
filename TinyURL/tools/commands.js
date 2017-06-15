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

function addURL(collection, link){

// update all the indices (_id which stores the routes) for existing shortened URL documents
// prevent overlapping routes

    const array = collection[0].URLs;

    array.forEach(function(e,i){
        e._id = i;

    });

    let route = array.length;

    let shortDoc = newShortURL(link, route);

    array.push(shortDoc);

    // return the array, document, and the shortened URL for the user
    return {array: array, document: shortDoc, shortenedURL : shortDoc.short};
}


// iterate through the array to find the matching route and return the original link
// used in routing the user's shortened url request back towards their intended target
function originalURL(array, route){

    let originalLink;

    array.forEach(function(e){
        if(e._id === route){

        // updates the used count for the link
            e.used++;
            originalLink = e.original;
        }
    });

    return originalLink;
}


module.exports = {

    // checkCollection : checkCollection,

    newShortURL : newShortURL,
    addURL : addURL,
    originalURL : originalURL

};


// uncomment when creating a new collection
// const URL_Array = require('../DB_Format/URL_Array');

// Only needed once to initiate database

// function checkCollection(data) {
//
//     if(data === null){
//
//         let document = newShortURL('https://www.vampiire.org', 0);
//
//         let URLArray = new URL_Array.model({"_id": 'URLArray', "URLs": document});
//
//         URLArray.save(function (err) {
//             if (err) throw err;
//
//             console.log('saved new collection');
//         });
//
//         return URLArray;
//
//     }
//
//     return data;
//
// }


