const si = require('systeminformation');

// OS Information
si.osInfo().then(data => {
  document.getElementById('versi').innerHTML = data.distro,
  document.getElementById('platform').innerHTML = data.platform,
  document.getElementById('os').innerHTML = data.kernel
}).catch(error => console.error(error));

// CPU Information
si.cpu().then(data => {
  document.getElementById('cpu').innerHTML = data.manufacturer+data.brand,
  document.getElementById('speed').innerHTML = data.speed+" GHz",
  document.getElementById('flags').value = data.flags,
  document.getElementById('core').value = data.cores,
  document.getElementById('family').value = data.family,
  document.getElementById('pyshical').value = data.physicalCores,
  document.getElementById('stepping').value = data.stepping
}).catch(error => console.error(error));

// Graphic Card Information
si.graphics().then(data => {
  console.log(data);
  // gpu
  document.getElementById('vendor').value = data.controllers[0].model,
  document.getElementById('vram').value = data.controllers[0].vram/1024+" GB",
  document.getElementById('vdriver').value = data.controllers[0].driverVersion
  // display
  document.getElementById('tipe').value = data.displays[0].model,
  document.getElementById('resolusi').value = data.displays[0].resolutionX+"x"+data.displays[0].resolutionY,
  document.getElementById('refresh').value = data.displays[0].currentRefreshRate+" Hz",
  document.getElementById('koneksi').value = data.displays[0].connection
}).catch(error => console.error(error));

// RAM Information
si.memLayout().then(data => {
  // console.log(data)
}).catch(error => console.error(error));