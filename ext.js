const {shell} = require('electron');
function cek_release(){
    var url = "https://github.com/rzak23/D-Info/releases";
    shell.openExternal(url)
}

function openTemp(){
    // const {shell} = require('electron');
    var dir = document.getElementById('temporary').innerHTML;

    shell.openExternal(dir);
}