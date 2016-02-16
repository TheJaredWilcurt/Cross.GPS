try {
    var nw = require('nw.gui');
    nw.App.clearCache();
    debugger;
    var Win = require("../app/window.js");
    var Tray =  require("../app/Tray");
    var tray = new Tray({
        tooltip:"跨平台应用",
        title: 'tray',
        icon: "/res/logo.png",
        onLoad:function(){},
        onTrayClick: function () {
            try {
                alert("tray");
                Win.currentWin(); //!!!!  error is "whoa,nw.js has crashed.relunch now?"
                // alert(win.title);
            } catch (error) {
                alert(error);
            }
        },//点击托盘事件
        onMenuItemClick: function (menuItem) {
            if (menuItem.name === 'a') {
                try {
                    nw.App.quit();
                } catch (error) {
                    alert(error);
                }
            }
        }, //点击托盘事件
        menuItems: [{
            name: 'a',
            label: 'a',
            click:function(){
                    nw.App.quit();
                }
        }, {
            name: 'b',
            label: 'b'
        }, {
            name: 'c',
            label:'c'
        }]
    });
} catch (error) {
    alert(error)
}
