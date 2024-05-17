const { app, BrowserWindow, ipcMain,mainWindow } = require("electron");
const path = require("path");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        minWidth:900,
        height: 800,
        minHeight: 800,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
        vibrancy: {
            theme: "light",
            effect: "acrylic",
            disableOnBlur: true,
        },
        show: false,
        frame: false,
        transparent: true,
    });

    //win.webContents.openDevTools()

    win.setBackgroundColor("red");

    win.loadFile("./src/index.html");

    ipcMain.on("minimize", () => {
      win.minimize()
    });

    win.once("ready-to-show", win.show);
};

app.whenReady().then(() => {
    createWindow();
});

ipcMain.on("close-app", () => {
    app.quit();
});


