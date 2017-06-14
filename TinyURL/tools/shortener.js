/**
 * Created by Vampiire on 6/14/17.
 */

const short = require('../models/shortenedURL');

function shorten(link, route){


    // route returns the last documents route

    route++;


    let domain = 'https://vampiire-tinyurl/';

    let shortenedLink = domain + route;

    let shortDoc = new short.shortModel({

        "original" : link,
        "route": route,
        "short" : shortenedLink
    });

    return shortDoc;

}

module.exports = {
  shorten : shorten
};

console.log(shorten('www.google.com/test', 5));
