/**
 * Created by Vampiire on 6/16/17.
 */


// the clipboard button needs to have the id "copy"
let copy = document.getElementById('copy');

// instantiate the Clipboard
let clipboard = new Clipboard(copy);

// logs for success / error
clipboard.on('success', e => console.log(e));

clipboard.on('error', e => console.log(e));
