/**
 * Created by Vampiire on 6/15/17.
 */

let commands = require('./commands');

let cleaner = require('./cleaner');

let collection = commands.createCollection('www.hello.com');

let URLArray = collection.URLs;

commands.addURL(URLArray, 'www.vampiire.org');

let originalURL1 = commands.originalURL(URLArray, 0);
let originalURL2 = commands.originalURL(URLArray, 1);

// console.log(originalURL1);
// console.log(originalURL2);
//
// console.log(URLArray);


console.log(cleaner(URLArray));





