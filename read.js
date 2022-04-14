const os = require('os');

var arsitektur = os.arch();
var name = os.hostname();
var temp = os.tmpdir();

var total = os.totalmem();

// kalkulasi total ram
var totalkb = total/1024;
var totalmb = totalkb/1024;
var totalgb = totalmb/1024;
totalgb = Math.round(totalgb);

// base information
document.getElementById('arsitektur').innerHTML = arsitektur;
document.getElementById('name').innerHTML = name;
document.getElementById('temporary').innerHTML = temp;

// ram information
setInterval(function(){
    var free = os.freemem();
    // kalkulasi free ram
    var freekb = free/1024;
    var freemb = freekb/1024;
    var freegb = freemb/1024;
    freegb = Math.round(freegb);
    document.getElementById('freem').innerHTML = freegb+" GB";
},1000);
document.getElementById('total').innerHTML = totalgb+" GB";