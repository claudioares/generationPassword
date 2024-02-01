const { Tray } = require('electron')
const { resolve } = require('path')


const iconPath = resolve(__dirname, '../', 'assets', 'senha.png')

function createTry () {
    const tray = new Tray(iconPath)

    tray.setToolTip('Pass Generate')

    return tray

}

module.exports = createTry()