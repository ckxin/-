import { app, BrowserWindow, ipcMain } from 'electron'


/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 202,
    useContentSize: true,
    width: 502,
    frame: false,
    transparent: true
  })

  mainWindow.loadURL(winURL)

  mainWindow.setMenu(null);
  mainWindow.setResizable(false);

  mainWindow.on('close', (e) => {
    // mainWindow = null
    e.preventDefault();
  })

  // mainWindow.on('close', (e) => {
  //   // mainWindow = null
  //   e.preventDefault();	
  //   let x = Math.floor(Math.random()*(800-100+1)+100);
  //   let y = Math.floor(Math.random()*(400-200+1)+200);
  //   mainWindow.setPosition(x, y)
  // })
}

ipcMain.on('close', (e) => {
  // mainWindow = null
  // e.preventDefault();	
  let x = Math.floor(Math.random()*(800-100+1)+100);
  let y = Math.floor(Math.random()*(400-200+1)+200);
  mainWindow.setPosition(x, y)
})

ipcMain.on('like', (e) => {
  mainWindow.destroy(); 
  app.quit();
})


app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
