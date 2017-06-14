/**
 * Created by Vampiire on 6/11/17.
 */

// express
const express = require('express');

// use a router
const router = module.exports = express.Router();

// converter module
const convert = require('./converter');

router.get('/:id', function(req, res){

    console.log(req);

    let timeString = req.params.id;

    // returns an object with 2 formatted date keys {unix, natural}
    let dates = convert.time(timeString);

    res.json(dates);


});

