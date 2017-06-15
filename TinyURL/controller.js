/**
 * Created by Vampiire on 6/14/17.
 */

const express = require('express');

const router = module.exports = express.Router();

const dbQuery = require('./tools/dbQuery');

const tools = require('./tools/exporter');

router.get('/', function(req, res){


});


// use res.redirect('link') to respond with an automatic redirect (for routing the shortened URL)

router.get('/:id', function(req, res){


let route = req.params.id;
// console.log(route === 5);
if(route == 5){

    let URL = tools.test.original;

    res.redirect(URL);

}

});


"redirect are live                                                                                           [1:51:33]
* added an exporter file to tools which exports each tool individually for use elsewhere in the app
* updated the controller to include a redirect based on the ID parameter of the request. local testing works correctly. will eventually function
by testing the ID parameter of the request against a matching route from a document in the collection, if a match is found the original URL is
passed into res.redirect to send the user to their expected (long form) url
"
