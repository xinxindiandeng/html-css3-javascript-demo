//事件冒泡
/*
事件冒泡：
	同一事件，子元素的事件触发后再触发氟元素
事件捕获：
	同一事件，先触发父元素，再触发子元素
	IE没有实践捕获
触发顺序：
	首先捕获，然后是事件执行，最后冒泡
focus;blur;change;submit;reset;select不冒泡

1.事件流：就是事件执行顺序.分为冒泡和捕获 
	冒泡：假如有一个div中包含一个p标签，我们同时给div和p标签添加click事件，如果我们点击p标签，首先会执行p标签绑定click事件，然后就会执行div标签绑定的click事件（因为p标签在div中，点击p就相当于你也点击了div），这种执行顺序就叫冒泡（逐个向上触发） 
	捕获：和上面相反的事件执行顺序
*/

var dg=document.getElementsByClassName('clsg')[0];
var df=document.getElementsByClassName('clsf')[0];
var ds=document.getElementsByClassName('cls')[0];
//添加冒泡
// dg.addEventListener('click',function(){
// 	console.log('爷爷被点击--冒泡');
// },false)
// 
// df.addEventListener('click',function(){
// 	console.log('父亲被点击了--冒泡');
// },false);
// 
// ds.addEventListener('click',function(){
// 	console.log('儿子被点击了--冒泡');
// },false)
// 
// document.body.addEventListener('click',function(){
// 	console.log('Body被点击了--冒泡');
// },false)

//冒泡取消
// ds.addEventListener('click',function(e){
// 	console.log('儿子被点击--冒泡');
// 	if(e.stopPropagation){
// 		e.stopPropagation();
// 	}else{//for IE
// 		e.cancelBubble=true;
// 	}
// },false);
// df.addEventListener('click',function(e){
// 	console.log('父亲被点击了--冒泡');
// 	e=e||window.event//ie
// 	var target=e.target||e.srcElement//IE
// 	console.log(target);
// },false);


//捕获

// dg.addEventListener('click',function(){
// 	console.log('爷爷被点击--捕获');
// },true)
// 
// df.addEventListener('click',function(){
// 	console.log('父亲被点击了--捕获');
// },true);
// 
// ds.addEventListener('click',function(){
// 	console.log('儿子被点击了--捕获');
// },true)
// 
// document.body.addEventListener('click',function(){
// 	console.log('Body被点击了--捕获');
// },true)
// 

//阻止默认事件

//禁止鼠标右键
//1. return false
// document.oncontextmenu=function(){
// 	console.log('右击了');
// 	return false;
// }

//2.e.stopPropagation()
document.addEventListener('contextmenu',function(e){
	console.log('被右击了');
	e=e||window.event;
	if(e.preventDefault){//for IE
		e.preventDefault();
	}else{
		e.returnValue=false;
	}
	
},false);

var aa=document.getElementById('aid');
aa.addEventListener('click',function(e){
	console.log('a标签被单击了！')
	e=e||window.event;
	console.log(e);
	if(e.preventDefault){
		e.preventDefault();
		console.log(e.preventDefault);
	}else{
		e.returnValue=false;
	}
},false);


//测试
function divclick(name){
	console.log(name+'被点击了');
}
/*
备注：
addEventListener(type,func,boolean)
type: 事件类型
func: 处理函数
boolean: true:捕获|false:冒泡

*/