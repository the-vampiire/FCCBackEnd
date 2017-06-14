/**
 * Created by Vampiire on 6/11/17.
 */


function convertTime(time){

    let unix,
        newDate,
        locale,
        month,
        // to match the day of the month
        match = new RegExp(/[0-9]{2}/g),
        day,
        natural = '';

    const months = ["January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October", "November", "December"];

// time has been passed in natural form
    if(~time.indexOf(' ')){
        unix = Date.parse(time);
        newDate = new Date(time);

    // finds the day of the month
        day = String(newDate).match(match)[0];
        month = newDate.getMonth();

    // passes the index, month, into the months array to get full month name
        natural += months[month] +' ';
        natural += day+ ', ';
        natural += newDate.getFullYear();

    // clean up for display
        unix = unix/1000;
    }

// time has been passed as a unix timestamp
    else{

    // catch unix timestamp in either long (ms) or short (s) form. convert to appropriate format before processing
        time += '';

    // short form (seconds)
        if(time.length === 10){
            time *= 1000;
        }
    // long form (milliseconds)
        else if(time.length === 13){
            time *= 1;
        }
    // if a unix timestamp outside of the valid range of times is passed, return null
        else{
            return {unix: null, natural: null};
        }

        newDate = new Date(time);

        day = String(newDate).match(match)[0];
        month = newDate.getMonth();

        natural += months[month] +' ';
        natural += day+ ', ';
        natural += newDate.getFullYear();

        unix = Date.parse(newDate);

    // clean up for display
        unix = unix / 1000;
    }

    if(isNaN(unix)){
        return {unix: null, natural: null};
    }

    return {unix: unix, natural: natural};

}


module.exports = {
  time : convertTime
};





