/**
 * Created by Vampiire on 6/11/17.
 */


function convertTime(time){

    // console.log(`long date: ${longDate}`);

    if(~time.indexOf(' ')){
        return {unix: Date.parse(time)/1000, long: time};
    }

    else{
        console.log('else called');
        time = Number(time)*1000;
        let longDate = new Date(time).toDateString();
        return {unix : time/1000, long: longDate.slice(longDate.indexOf(' ')+1)};
    }


}

module.exports = {
  time : convertTime
};
