/**
 * Created by Vampiire on 6/14/17.
 */

const express = require('express');

const router = module.exports = express.Router();



router.get('/', function(req, res){

    console.log(req.headers);

    let headers = req.headers,
        user_agent = headers['user-agent'],
        ip = headers['x-forwarded-for'],
        language = headers['accept-language'];

    language = language.slice(0, language.indexOf(','));

    let data = {'user-agent': user_agent, ip: ip, language: language};

    res.json(data);

});
