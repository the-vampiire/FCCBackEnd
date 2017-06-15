/**
 * Created by Vampiire on 6/15/17.
 */


const URL_Array = require('../DB_Format/URL_Array');

let shortener = require('./shortener');

let collection = shortener.createCollection('www.hello.com');

let URLArray = collection.URLs;

shortener.addURL(URLArray, 'www.vampiire.org');

let originalURL1 = shortener.originalURL(URLArray, 0);
let originalURL2 = shortener.originalURL(URLArray, 1);

console.log(originalURL1);
console.log(originalURL2);

console.log(URLArray);






