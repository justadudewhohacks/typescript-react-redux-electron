import { app, BrowserWindow } from 'electron'
import * as url from 'url'

let mainWindow: Electron.BrowserWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    height: 800,
    width: 1200,
  })

  const protocol = 'http:' // 'file:'
  const pathname = 'localhost:3000' // path.join(__dirname, './index.html')
  mainWindow.loadURL(url.format({
      pathname,
      protocol,
      slashes: true,
  }))

  //mainWindow.webContents.openDevTools()
  mainWindow.setResizable(true)
}

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