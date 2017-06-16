/**
 * Created by Vampiire on 6/14/17.
 */

const express = require('express');

const app = express();

const controller = require('./controller');

const port = process.env.PORT || 3000;

app.listen(port, function(){

    console.log(`listening on port ${port}`);
});

// public directory holds all static files
app.use('/public', express.static('public'));

app.set('view engine', 'ejs');

// pass all requests to the controller
app.use('/', controller);




