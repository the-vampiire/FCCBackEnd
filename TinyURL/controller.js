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

    // res.json('test worked');

    // res.render('link', {url : 'testing some shit out'});

    dbQuery.setURL('https://www.google.com').then( shortURL => res.render('link', { url : shortURL }));

});

// use res.redirect('link') to respond with an automatic redirect (for routing the shortened URL)

router.get('/:id', function(req, res) {

    let route = Number(req.params.id);

    dbQuery.getURL(route).then(function(data){

        res.redirect(data);

    });

});


// or use router.post('/link'...) and
// link = req.body.NAME.VALUE? from form submission
router.post('/:id', function(req, res){

    // handle shortening the link based on user input

    console.log(req.body);

    let link = req.params.id;

    // call the setURL which returns a promise containing the shortenedURL
    // pass the shortURL into the render for the user to copy
    dbQuery.setURL(link).then( shortURL => res.render('link', { url : shortURL }));

});








