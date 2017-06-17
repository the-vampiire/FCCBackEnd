/**
 * Created by Vampiire on 6/14/17.
 */

const express = require('express');

const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

const controller = require('./controller');

const port = process.env.PORT || 3000;

app.listen(port, function(){

    console.log(`listening on port ${port}`);
});

//middleware to process the url submitted by the user
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
    // validator to validate the form
    app.use(expressValidator());

// public directory holds all static files
app.use('/public', express.static('public'));

app.set('view engine', 'ejs');

// pass all requests to the controller
app.use('/', controller);




