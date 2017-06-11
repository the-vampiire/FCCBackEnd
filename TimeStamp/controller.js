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

    console.log(req.params.id);

    let timeString = req.params.id;

    console.log(`timestring: ${timeString}`);

    // returns an object with 2 formatted date keys {unix, long}
    let dates = convert.time(timeString);

    console.log(dates);

    res.json(dates);

    // console.log(`Unix: ${dates.unix}, Natural: ${dates.long.slice(dates.long)}`);

});


