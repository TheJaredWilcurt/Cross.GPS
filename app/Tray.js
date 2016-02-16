/**
 * 托盘 tray
 */
var nw = require("nw.gui");
var Tray = function (options) {
    options = Object.assign({}, Tray.defaults, options);
    options.menuItems = options.menuItems.map(function (menuItem) {
        return Object.assign({}, Tray.menuItemDefaults, menuItem);
    });
    alert(options.menuItems)
    var tray = new nw.Tray({
		tooltip: options.tooltip,
		title: options.title,
		icon: "/res/traydefault.png"
	});
    //绑定左键单击事件
    tray.on("click",function(){
         if (typeof options.onTrayClick !== 'function') return;
			options.onTrayClick.apply(this, arguments);
    })
    //初始化右键菜单
	var menu = new nw.Menu();    
    options.menuItems.forEach(function (menuItem) {
        menu.append(new nw.MenuItem({
            label: menuItem.label,
            click: function () {
                options.onMenuItemClick.apply(this, [menuItem].concat(Array.prototype.slice.call(arguments)));
            }
        }));
    });
    tray.menu= menu;
    return tray;
    // return {
    //     addMenuItem: function (){
    //         //
    //     }
    // };
};

Tray.defaults = {
    tooltip:"<h1>a</h1>",
    title: 'a',
    icon: "",
    menuItems: [],
    trayClick: function () {},
    onMenuItemClick: function () {}
};

Tray.menuItemDefaults = [{
    name: 'logout',
    label: "注销",
    click: function () {
	   logout();
        }
    },{
    name: 'quite',
    label: "退出",
    click: function () {
	   quite();
       }
    },{
    name: 'settings',
    label: "设置",
    click: function () {
	   settings();
       }        
    },{
    name: 'about',
    label: "关于",
    click: function () {
	   about();
       }        
    }
    ];
/**
 * 默认托盘事件
 */
/**用户登出 */
function logout(){
    //清除cookie
    //关闭应用
    quite();
}
/**关闭应用 */
function quite(){
    nw.App.quit();
}
/**APP设置 */
function settings()
{
    new nw.App.quit();
}
//关于
function about()
{
    
}
module.exports = Tray;
/**
 * 调用示例
 */
//初始化
 //   var Tray = require('js/Tray');
    //     var tray = Tray({
    //         tooltip:"<h1>鼠标悬浮</h1>",
    //         title: 'tray',
    //         icon: "/res/logo.png",
    //         onLoad:function(){},//初始化执行的方法，如消息检测等
    //         onTrayClick: function () {
    //             alert('a');
    //         },//点击托盘事件
    //         onMenuItemClick: function (menuItem) {
    //             if (menuItem.name === 'a') {}
    //         },//点击托盘事件
    //         menuItems: [{
    //             name: 'a',
    //             label: 'a'
    //         }, {
    //             name: 'b',
    //             label: 'b'
    //         }, {
    //             name: 'c'
    //         }]
    //     });
//添加菜单项
// tray.addMenuItem({
//     name: '',
//     label: ''
// }).bind('menuItemClick', function(menuItem){
//     
// });