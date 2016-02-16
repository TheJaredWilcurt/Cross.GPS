var gui = require('nw.gui');
gui.Window.get().showDevTools();

// Create a tray icon
var tray = new gui.Tray({
    icon : './res/logo.png',
    title: 'App Tray'
});

//Give it a menu
var menu = new gui.Menu();
menu.append(new gui.MenuItem({
    type: 'checkbox',
    label: 'Are you sure?'
}));
tray.menu = menu;

function winopen () {
    window.open("noti.html");
}
function set () {
    document.cookie="user=123"
}
function get () {
    alert(document.cookie)
}
function clear () {
    try {
        nw.App.clearCache();
    } catch (error) {
        alert(error)
    }
}
