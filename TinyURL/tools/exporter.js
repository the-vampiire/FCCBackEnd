/**
 * Created by Vampiire on 6/15/17.
 */

const cleaner = require('./cleaner');

const commands = require('./commands');

const dbQuery = require('./dbQuery');

const test = require('./TEST_Shortener');


module.exports = {

    cleaner : cleaner,
    test : test,
    commands : commands,
    dbQuery : dbQuery,

};
