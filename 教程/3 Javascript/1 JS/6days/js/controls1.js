//函数表达式   备注：函数表达式在系统查不到函数名，函数声明可以在系统查到
// var f = function fast(x) {
// 	if (x <= 1) {
// 		return 1;
// 	} else {
// 		return x * fast(x - 1)
// 	}
// }

//等价于
// var f = function(x) {
// 	if (x <= 1) {
// 		return 1;
// 	} else {
// 		return x * arguments.callee(x - 1)
// 	}
// }
// 
// console.log(f(5));

//立即执行函数 一次性函数
// var a=(function(){
// 	console.log("I am f3");
// 	return "f3 say helolo";
// })();


//函数调用
//	1.函数的方式
//	2.作为方法

// var obj={
// 	add:function(a,b){
// 		return a+b;
// 	}
// };
// //方法调用
// 	obj.add(3,2);
	
//构造函数
// var arr=new Array();

//间接调用
function hypetenuse(a,b){
	return Math.sqrt(a*a+b*b);
}
this.hypetenuse(3,4);
hypetenuse.call(this,3,4);
hypetenuse.apply(this,[3,4]);