/**
 * Created by Vampiire on 6/14/17.
 */

const express = require('express');
const router = module.exports = express.Router();

const mongoose = require('mongoose');

const dbQuery = require('./tools/dbQuery');
const tools = require('./tools/exporter');


require('dotenv').config({path: 'private.env'});

const DB_Route = process.env.ROUTE;

mongoose.connect(DB_Route, function(err){

    if(err) throw err;
    console.log('connected to database');

});

router.get('/', function(req, res){


});


// use res.redirect('link') to respond with an automatic redirect (for routing the shortened URL)

router.get('/:id', function(req, res) {


    let link = Number(req.params.id);

    dbQuery.getURL(link).then(function(data){

        res.redirect(data);

    });

});

router.post('/:id', function(req, res){

    // handle shortening the link based on user input



});




