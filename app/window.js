/**
 * Get current window
 */

var currentWin = function () {
    try {
        var win = nw.Window.get();
        alert(win.title);
    } catch (error) {
        alert(error);
    }
};

exports.currentWin = currentWin;
