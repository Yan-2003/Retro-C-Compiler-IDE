const { app, BrowserWindow } = require('electron');
const path = require('path')

let mainWindow;

function createWindow() {

    let iconPath

    if (process.platform === 'win32') {
        iconPath = path.join(__dirname, 'assets', 'icon.ico');
    }


    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
        nodeIntegration: true
        },
        autoHideMenuBar: true, // Hide the menu bar by default
        icon : iconPath
    });

    mainWindow.loadFile('./views/index.html');
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
