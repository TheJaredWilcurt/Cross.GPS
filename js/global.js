try {
    var nw = require("nw.gui");
    var Tray =  require("./app/Tray.js");
    var tray = new Tray({
            tooltip:"跨平台应用",
            title: 'tray',
            icon: "/res/logo.png",
            onLoad:function(){},//初始化执行的方法，如消息检测等
            onTrayClick: function () {
                try {
                    
                    //var win = nw.Window.get();
                    alert("1");
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
            },//点击托盘事件
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

