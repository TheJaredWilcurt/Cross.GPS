var gui = require('nw.gui');
var Win = require('../app/window.js');
var Tray = require('../app/Tray.js');

/*
var tray = new Tray({
    'tooltip': "跨平台应用",
    'title': 'tray',
    'icon': "./res/logo.png",
    onLoad: function () {
        console.log('onload');
    },
    onTrayClick: function () {
        try {
            console.log("tray");
            Win.currentWin(); //!!!!  error is "whoa,nw.js has crashed.relunch now?"
            console.log(win.title);
        } catch (error) {
            console.log(error);
        }
    },//点击托盘事件
    onMenuItemClick: function (menuItem) {
        if (menuItem.name === 'a') {
            try {
                gui.App.quit();
            } catch (error) {
                console.log(error);
            }
        }
    }, //点击托盘事件
    'menuItems': [
        {
            'name': 'a',
            'label': 'a',
            'click': function () {
                gui.App.quit();
            }
        },
        {
            'name': 'b',
            'label': 'b'
        },
        {
            'name': 'c',
            'label':'c'
        }
    ]
});
*/


/* Known good tray code */

/*
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
*/
