/**
 * Created by Vampiire on 6/14/17.
 */

const express = require('express');
const router = module.exports = express.Router();

const mongoose = require('mongoose');

const dbQuery = require('./tools/dbQuery');
const tools = require('./tools/exporter');



// --------------- Connect to database
require('dotenv').config({path: 'private.env'});

const DB_Route = process.env.ROUTE;

mongoose.connect(DB_Route, function(err){

    if(err) throw err;
    console.log('connected to database');

});


// --------------- Get and Post Handlers

router.get('/', function(req, res){

    // serve homepage

    res.render('index', {url : ''});


});

// use res.redirect('link') to respond with an automatic redirect (for routing the shortened URL)

router.get('/:id', function(req, res) {

    let route = Number(req.params.id);

    dbQuery.getURL(route).then(function(data){

        res.redirect(data);

    });

});


router.post('/', function(req, res){

    // validate and sanitize the input
    req.checkBody('url', 'enter a valid URL').isURL();

    let validationErrors = req.validationErrors();

    if(validationErrors){
        console.log(validationErrors);
    }

    // if it passes then proceed to generating the shortURL and rendering the view with it
    else{
        let link = req.body.url;
        // call the setURL which returns a promise containing the shortenedURL
        // pass the shortURL into the render for the user to copy
        dbQuery.setURL(link).then( shortURL => res.render('index', { url : shortURL }));

    }
});








