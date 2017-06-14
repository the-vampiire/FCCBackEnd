/**
 * Created by Vampiire on 6/14/17.
 */

const express = require('express');

const app = express();

const controller = require('./controller');

app.use('/', controller);


