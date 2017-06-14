/**
 * Created by Vampiire on 6/11/17.
 */

const express = require('express');
const bp = require('body-parser');
const controller = require('./controller');

const app = express();
app.use(bp.json());
app.use(bp.urlencoded({extended : false}));

app.use('/time', controller);

app.use('/', express.static('public'));

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log(`listening on port ${port}`);
});