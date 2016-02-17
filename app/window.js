/**
 * Get current window
 */

var currentWin = function () {
    try {
        var win = gui.Window.get();
        console.log(win.title);
    } catch (error) {
        console.log(error);
    }
};

exports.currentWin = currentWin;
