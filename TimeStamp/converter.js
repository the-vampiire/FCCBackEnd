/**
 * Created by Vampiire on 6/11/17.
 */


function convertTime(time){

    let unix,
        natural;

// time has been passed in natural form
    if(~time.indexOf(' ')){
        unix = Date.parse(time);
        natural = new Date(unix).toDateString();

    // clean up for display
        natural = natural.slice(natural.indexOf(' ')+1);
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
        else{
            time *= 1;
        }

        natural = new Date().toDateString();
        unix = Date.parse(natural);

    // clean up for display
        natural = natural.slice(natural.indexOf(' ')+1);
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





