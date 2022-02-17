const os = require('os');

var arsitektur = os.arch();
var cpu = os.cpus();
var platform = os.platform();
var version = os.version()+" "+os.release();
var type = os.type();
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
document.getElementById('os').innerHTML = type;
document.getElementById('name').innerHTML = name;
document.getElementById('platform').innerHTML = platform;
document.getElementById('versi').innerHTML = version;
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

// cpu information
document.getElementById('cpu').innerHTML = cpu[0].model;
document.getElementById('speed').innerHTML = cpu[0].speed/1000+" GHz";

function openTemp(){
    const {shell} = require('electron');
    var dir = document.getElementById('temporary').innerHTML;

    shell.openExternal(dir);
}

// gpu information
const gpuTier = require('detect-gpu');

(async() => {
    var myGpu = await gpuTier.getGPUTier();
    document.getElementById('gpu').innerHTML = myGpu.gpu.toUpperCase();
})();