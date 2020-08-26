/*
事件
什么是事件
	构成动态网页交互必不可少的条件，通过使用 JavaScript ，你可以监听特定事件的发生，并规定让某些事件发生以对这些事件做出响应。
绑定事件
解绑定事件
冒泡和捕获
阻止和取消事件
*/

//onTYPE (只能绑定一个事件，对IE兼容特别好)
var d = document.getElementById('theD');
/*---------------绑定事件---------------------*/
// d.onclick=function(){
// 	console.log("我被点击了,onclick");
// };
// 
// d.onclick=function(){
// 	console.log('我被点击了，onlick2');
// }

// d.addEventListener('click',function(){
// 	console.log("点击事件1，click1");
// });
// 
// d.addEventListener('click',function(){
// 	console.log('点击事件2,click2');
// });
// 
//在Chrome里面，this->当前相应元素
//在IE里面，this->window
/*
function divclink(){
	console.log("这是事件");
}
d.attachEvent('onclick',function(){
	divclink.call(d);
});
有错误
*/


//练习  我们写一个可以同时兼容IE和chrome点击函数
// 1.函数的方式
/*
elmt:元素
type:事件
func:函数
*/
// function addEvent(elmt,type,func){
// 	if(elmt.addEventListener){
// 		elmt.addEventListener(type,func,false);
// 	}else if(elmt.attachEvent){//IE
// 	elmt.attachEvent('on'+type,function(){
// 		func.call(elmt);
// 	});
// 	}else{
// 		elemt['on'+type]=func;
// 	}
// }
// 
// function divclick1(){
// 	console.log("我又被点击了");
// }
// 
// addEvent(d,'click',divclick1);


//2. element.prototype

// Element.prototype.addEvent=function(type,func){
// 	var elmt=this;
// 	if(elmt.addEventListener){
// 		elmt.addEventListener(type,func,false);			
// 		}else if(elmt.attachEvent){+
// 			func.call(elmt);
// 		}else{
// 			elmt['on'+type]=func;
// 		}
// }
// 
// function divclick2(){
// 	console.log(this);
// 	console.log("我又被点击了3");
// }
// d.addEvent('click',divclick2);

/*---------解绑事件---------------------*/

//写好一
// d.onclick = function() {
// 	console.log('我被点击了');
// }
// 
// var ipts = document.getElementsByTagName('input');
// console.log(ipts);
// ipts[0].onclick= function(){
// 	d.onclick = null;
// }


//写法二
 
 d.addEventListener('click',divclick,false);
 function divclick(){
	 console.log('又被点击了');
 }

 var ipt=document.getElementsByTagName('input')[0];
 ipt.addEventListener('click',function(){
	 d.removeEventListener('click',divclick,false)
 },false);
 
 //d.detachEvent('on'+type,func)  //IE写法