/* eslint global-require: 0 */
/**
 * @Author: Leone
 * @Date:   2018-02-01T16:11:20+01:00
 * @Last modified by:   Leone
 * @Last modified time: 2018-02-01T16:19:08+01:00
 */

import path from 'path';

import {
  app,
  BrowserWindow,
} from 'electron';

if (process.platform === 'win32') {
  process.env.VLC_PLUGIN_PATH = require('path').join(__dirname, 'node_modules/wcjs-prebuilt/bin/plugins');
}

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
  require('electron-debug')();
  const p = path.join(__dirname, '..', 'app', 'node_modules');
  require('module').globalPaths.push(p);
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = [
    'REACT_DEVELOPER_TOOLS',
    'REDUX_DEVTOOLS'
  ];
  return Promise
    .all(extensions.map(name => installer.default(installer[name], forceDownload)))
    .catch(console.log);
};

app.on('will-quit', () => {
  app.quit();
});

app.on('ready', async () => {
  let mainWindow = null;
  if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
    await installExtensions();
  }
  mainWindow = new BrowserWindow({
  });
  mainWindow.loadURL(`file://${__dirname}/app.html`);
  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    mainWindow.show();
    mainWindow.focus();
  });
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
