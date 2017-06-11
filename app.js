/**
 * Created by Vampiire on 6/11/17.
 */

const express = require('express');
const bp = require('body-parser');
const controller = require('./controller.js');

const app = express();
app.use(bp.json());
app.use(bp.urlen)

