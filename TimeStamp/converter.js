/**
 * Created by Vampiire on 6/11/17.
 */


function convertTime(time){

// convertTime variables
    let unix,
        newDate,
        natural;

// time has been passed in natural form
    if(~time.indexOf(' ')){
        unix = Date.parse(time);
        newDate = new Date(time);

    // call tha naturalDate function
        natural = naturalDate(newDate);

    // clean up for display
        unix = unix/1000;
    }

// time has been passed as a unix timestamp
    else{

    // catch unix timestamp in either long (ms) or short (s) form. convert to appropriate format before processing
        time += '';

    // short form (seconds), converts back to a number
        if(time.length === 10){
            time *= 1000;
        }
    // long form (milliseconds), converts back to a number
        else if(time.length === 13){
            time *= 1;
        }
    // if a unix timestamp outside of the valid range of times is passed, return null
        else{
            return {unix: null, natural: null};
        }

        newDate = new Date(time);

        natural = naturalDate(newDate);

        unix = Date.parse(newDate) / 1000;

    }

    if(isNaN(unix)){
        return {unix: null, natural: null};
    }

    return {unix: unix, natural: natural};

}

function naturalDate(newDate){

    let month,

        // to match the day of the month
        match = new RegExp(/[0-9]{2}/g),
        day,
        date = '';

// for full name months
    const months = ["January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October", "November", "December"];

// finds the day of the month
    day = String(newDate).match(match)[0];
    month = newDate.getMonth();

// passes the index, month, into the months array to get full month name
    date += months[month] +' ';
    date += day+ ', ';
    date += newDate.getFullYear();


    return date;

}


module.exports = {
  time : convertTime
};






