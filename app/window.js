var gui = require("nw.gui");
var win = gui.Window.get();
win.on("minimize",function(){
alert("minimize");
});
win.minimize();
win.removeAllListeners("minimize");
var new_win = gui.Window.open("http://www.baidu.com");
new_win.on("focus",function(){
alert("new win");
})

/**
 * 询问窗口（如：是否退出等），自定义内容
 */
/**
 * 消息窗口（登录后显示消息），自定义大小，位置
 */