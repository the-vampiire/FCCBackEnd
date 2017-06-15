/**
 * Created by Vampiire on 6/14/17.
 *
 * functions to clean out the database after a set interval of time.
 * checks current date against document creation date
 * deletes documents (containing the shortened url)
 * criteria: with less than 5 uses in past 24 hours
 *
 *
 */



let currentTime = Date.now();

const day_ms = 86500000; // day in milliseconds

const days = 30; // number of days before deletion

const timeLimit = days * day_ms;

// criteria of a minimum number of usages and a maximum date
let criteria = {usedMinimum : 10, dateMaximum : Date.now()-timeLimit};

function cleaner(array){

    array.forEach(function(e, i){

    // if the item has been used less than the mimimum used amount
    // and is older than the criteria days limit then delete it
        if(e.created <= criteria.dateMaximum && e.used < criteria.usedMinimum){
        // delete the unused and / or old shortened URL
            array.splice(i, 1);

        }
    });

    return array;
}


