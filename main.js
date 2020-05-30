const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
const mainWindow = new BrowserWindow({
    width: 1900,
    height: 1020,
        webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  mainWindow.setMenuBarVisibility(false)
  mainWindow.loadURL('https://ebyte.cloud/')
}

app.whenReady().then(() => {
  createWindow()

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})