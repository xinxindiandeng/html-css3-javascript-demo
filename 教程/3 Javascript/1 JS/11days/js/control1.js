// //Date对象
// var date = new Date();
// // //1.获取当前时间
// // var date = new Date();
// // console.log(date);
// // //计算：1970年1月1日到现在的毫秒数
// // console.log(date.getTime());
// // var x = date.getTime();
// // x = x / (1000 * 3600 * 24 * 365);
// // console.log(x);
// 
// //2.setFullYear();其中月份设定是[0-11],其他不变
// date.setFullYear(2018,4,1);
// console.log(date);
// 
// //3.有参数的构造函数
// var d2=new Date(2019,5,17);
// console.log(d2);
// 
// //4.UTC 协调世界时间 ,GMT 格林尼治时间
// console.log(date.toUTCString());
// console.log(date.toGMTString());
// 
// //5.设置年 setFullYear(),getFullYear()
// date.setFullYear(2018);
// console.log(date);
// console.log(date.getFullYear()+1);
// 
// //6.设置月份(0---11）)记得加1
// console.log(date.getMonth(+1));
// 
// //8.设定日(是几就是几）)
// console.log(date.getDate());
// 
// //9.设定星期几  0 星期一  1-6星期一--星期六
// console.log(date.getDay());
// 
// 
// //10.克隆
// var da4=new Date(date);
// console.log(da4);
// 
// //11.比较
// var da5=new Date(2018,0,1);
// var da6=new Date(2019,0,1);
// console.log((da6-da5)/(1000*3600*24));

//练习1  钟表   setTimeout/clearTimeout
//全局变量 放在最上面
// var timer;
// 
// function startTimer() {
// 	var toDay = new Date();
// 	var h = to2Bit(toDay.getHours());
// 	var mm = to2Bit(toDay.getMinutes());
// 	var s = to2Bit(toDay.getSeconds());
// 	var div = document.getElementById('txt');
// 	div.innerHTML = h + ":" + mm + ":" + s;
// 	timer = setTimeout(startTimer, 20);
// }
// 
// function stopTimer() {
// 	clearTimeout(timer);
// }
// 
// function to2Bit(num) {
// 	if (num < 9) {
// 		num = '0' + num;
// 		
// 	}
// 	return num;
// }
// 
// //启动时钟(定时调用)
// timer = setTimeout(startTimer, 20);

//练习2 setInterval和clearInterval
var timer;

function startTimer() {
	var toDay = new Date();
	var h = to2Bit(toDay.getHours());
	var mm = to2Bit(toDay.getMinutes());
	var s = to2Bit(toDay.getSeconds());
	var div = document.getElementById('txt');
	div.innerHTML = h + ":" + mm + ":" + s;
	timer = setTimeout(startTimer, 20);
}

function stopTimer() {
	clearInterval(timer);
}

function to2Bit(num) {
	if (num < 9) {
		num = '0' + num;	
	}
	return num;
}

//启动时钟(定时调用)
timer = setInterval(startTimer, 20);

//备注  setInterval和setTimerout 的区别,setInterval在设定的时间没有远行完成会积压任务,setTimerout 不会