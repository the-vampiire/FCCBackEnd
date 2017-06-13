/**
 * Created by Vampiire on 6/11/17.
 */


function convertTime(time){

    let unix,
        natural;


    if(time.indexOf(' ') !== -1){
        unix = Date.parse(time);
        natural = new Date(unix).toDateString();

        // clean up for display
        natural = natural.slice(natural.indexOf(' ')+1);
        unix = unix/1000;
    }
    else{
        natural = new Date(time*1000).toDateString();
        unix = Date.parse(natural);

        // clean up for display
        natural = natural.slice(natural.indexOf(' ')+1);
        unix = unix / 1000;
    }

    if(isNaN(unix)){
        console.log(`is NaN: ${isNaN(unix)}`);
        return {unix: null, natural: null};
    }


    return {unix: unix, natural: natural};

}

module.exports = {
  time : convertTime
};



