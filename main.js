const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;



app.on('ready', _=>
{
    console.log('Hello Electron is working!');
    mainWindow = new BrowserWindow({width:300, height:500});
    mainWindow.loadURL(`file://${__dirname}/index.html`);


    const menu = Menu.buildFromTemplate(myTemplate);
    Menu.setApplicationMenu(menu);

    mainWindow.on('close', _=>{
        mainWindow = null;
        console.log('closed');
    })
} )


const myTemplate = 
[
    {label: "About", click: _=>{console.log('you clicked the button!');}}
]; 

ipc.on(`countdown-start`, (evt,arg) =>{
    let count = 3;
    let timer = setInterval(_=>{
        console.log("count" + count);
    }, 1000);
    

    if (count == 0){}
})