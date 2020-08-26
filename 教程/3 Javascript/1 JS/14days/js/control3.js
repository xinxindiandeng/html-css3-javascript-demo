/*
BOM：Browser Object Model 浏览器对象模型
BOM是一系列对象，这些对象使得Javascript可以与浏览器进行“对话”
	对象包含：
	Window :是js中的顶级对象，所有定义在全局作用域中的变量
	Screen
	Location
	Navigator
	弹窗
	Cookie
*/

//	1.Window

// var w=window.innerWidth
// || document.documentElement.clientwidth//IE 8,7,6,5  兼容IE浏览器
// || document.body.clientWidth;
// 
// console.log(w);
// 
// var h=window.innerHeight|| document.documentElement.clientHight//IE 8,7,6,5  兼容IE浏览器
// || document.body.clientHeight
// console.log(h);

/*
windows 对象
1.定时器
   延迟执行 setTimeout( [string | function] code, interval);
            clearTimeout([number] intervalId);
定时执行     var timerId = setInterval(code, interval);
            clearInterval(timerId);     //清除定时器			
			

*/



//2.   screen
// var ws=screen.availWidth;
// var hs=screen.availHeight;
// //screen 返回的是屏幕大小
// //inner 返回的是当前窗口的大小
// console.log(ws);
// console.log(hs);

//location
// console.log(location.hostname);
// console.log(location.pathname);
// console.log(location.port);
// console.log(location.protocol);
// console.log(location.href);
//location.assign("https://www.baidu.com");

//navigator
// console.log(navigator.appCodeName);
// console.log(navigator.appName);
// console.log(navigator.appVersion);
// console.log(navigator.cookieEnabled);
// console.log(navigator.platform);
// console.log(navigator.userAgent);
// console.log(navigator.systemLanguage);


//弹窗 

//弹出提示框
// function cl1(){
// 	window.alert("我是弹窗");
// }
// 
// //输入框
// function cl1(){
// 	var s=prompt("请输入:",'姓名');
// 	console.log(s);
// 	return s;
// }
// 
// function cl1(){
// 	var r=window.confirm("这是选择框，是还是否");
// 	console.log(r);
// 	return r;
// }

//窗口操作
/*
close() 关闭
move()  移动
resizeTo()  调整窗口大小
*/
//1.新建窗口
var mywindow;
function newWindow(){
	console.log(mywindow);
	mywindow = window.open('', '', 'width=200,height=100');
	mywindow.document.write('hello,我在这里');
	console.log(mywindow);
}

//关闭窗口
function closeWin(){
	console.log(mywindow);
	if(mywindow!=undefined)
	{
		console.log(mywindow);
		mywindow.close();
	}
}

//移动窗口
function moveWin(){
	mywindow.moveTo(200,450);
	mywindow.focus();
}

//设置窗口大小
function sizeWin(){
	mywindow.resizeTo(500,300);
	mywindow.focus();
}