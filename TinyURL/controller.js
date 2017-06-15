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


let route = Number(req.params.id);

let result = dbQuery.getURL(route).then(function(data){

    // console.log(data);

});


res.redirect('http://www.google.com');


});

