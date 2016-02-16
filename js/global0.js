//加载ui库
var gui = require("nw.gui");
function init_tray() {
    var tray = new gui.Tray({
        tooltip: "<h1>fsdfs</h1>",
        title: "tray",
        icon: "/res/logo.png",
        click: function () {
            show_mainWin();
        }
    });
    var menu = new gui.Menu();
//设置
    menu.append(new gui.MenuItem({
        label: "设置",
        click: function () {
            tray_setting();
        }
    }));
//关于
    menu.append(new gui.MenuItem({
        label: "关于",
        click: function () {
            tray_about();
        }
    }));
//退出
    menu.append(new gui.MenuItem({
        label: "退出",
        click: function () {
            tray_quite()
        }
    }));
    tray.menu = menu;
}
//初始化托盘
init_tray();
//方法
function tray_quit () {
    gui.App.quit();
}
function tray_setting () {
    alert("设置");
}
function tray_about () {
}
//显示主窗口
function show_mainWin () {
    var win= gui.Window.get();
    win.focus();
}

/**
 * 设置tray的图标闪动
 * */
var trayTimer = null;
//var gui = require("nw.gui");
function stopshow () {
    tray.icon = "res/logo.png";
    if (trayTimer == null) {
        return;
    }
    clearInterval(trayTimer);
}
var tray = new gui.Tray({icon:"../res/logo.png"});
function showPopup () {
    var msgCount = 6; //从消息队列中获取未读消息
    if (msgCount > 0) {
        var count =! 0;
        if (trayTimer != null) {
            stopshow();
        }
        trayTimer = setInterval(function () {
            count ? (tray.icon = "../res/tray.png", count =! 1) : (tray.icon = "../res/logo.png", count =! 0);
        }, 800);
    } else {
        stopshow();
    }
}
showPopup();

/*
*封装tray
*/
function openWin () {
    alert(1);
    var win= gui.Window.open("http://www.baidu.com");
    win.focus();
}
