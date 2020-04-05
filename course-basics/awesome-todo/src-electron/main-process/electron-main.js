import { app, BrowserWindow, nativeTheme, Menu } from 'electron'
import { menuTemplate } from './electron-main-menu-template'

try {
  if (process.platform === 'win32' && nativeTheme.shouldUseDarkColors === true) {
    require('fs').unlinkSync(require('path').join(app.getPath('userData'), 'DevTools Extensions'))
  }
} catch (_) { }

/**
 * Set `__statics` path to static files in production;
 * The reason we are setting it here is that the path needs to be evaluated at runtime
 */
if (process.env.PROD) {
  global.__statics = require('path').join(__dirname, 'statics').replace(/\\/g, '\\\\')
}

/* VARIABLES & CONSTANTS */

// Exporting the mainWindow so Electron can use it
export let mainWindow
const menu = Menu.buildFromTemplate(menuTemplate)


/* APP READY */

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    minWidth: 500,
    minHeight: 600,
    titleBarStyle: 'customButtonsOnHover',
    transparent: true,
    // Adds the frame of the window
    // frame: false,
    useContentSize: true,
    webPreferences: {
      // Change from /quasar.conf.js > electron > nodeIntegration;
      // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
      nodeIntegration: QUASAR_NODE_INTEGRATION,

      // More info: /quasar-cli/developing-electron-apps/electron-preload-script
      // preload: path.resolve(__dirname, 'electron-preload.js')
    }
  })

  mainWindow.loadURL(process.env.APP_URL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  Menu.setApplicationMenu(menu)
}

/* APP EVENTS */

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  // if (process.platform !== 'darwin') {
    app.quit()
  // }
})

// Not need to use the code below, since we are closing the App when the user closes the window.
// app.on('activate', () => {
//   if (mainWindow === null) {
//     createWindow()
//   }
// })
