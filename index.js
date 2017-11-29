console.log('This is index dot js');
const electron = require('electron');
const ipc = electron,ipcRenderer;

document.getElementById('start').addEventListener('click', _=>{
    ipc.send('countdown-start');
})