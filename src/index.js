const { app, BrowserWindow, screen, Menu } = require('electron');
const path = require('path');

let menuInit; // Initialize a public variable for the page menu

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Get size of windowspace
  const browserSize = screen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: browserSize.width,
    height: browserSize.height,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  mainWindow.maximize();

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  menuInit = Menu.getApplicationMenu(); // Save the initial menu configuration
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// to enable ipc when clicking on an element
var ipc = require('electron').ipcMain;

// This function handles the event for toggling the menu
ipc.on('invokeAction', function(event, data){
  if(Menu.getApplicationMenu()==null){
    Menu.setApplicationMenu(menuInit);
  }
  else {
    Menu.setApplicationMenu(null);
  }
});