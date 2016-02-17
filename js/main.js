var gui = require('nw.gui');
gui.Window.get().showDevTools();

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
        console.log(error)
    }
}
