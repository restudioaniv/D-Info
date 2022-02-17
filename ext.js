const {shell} = require('electron');
function cek_release(){
    var url = "https://github.com/rzak23/D-Info/releases";
    shell.openExternal(url)
}