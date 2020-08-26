/*
闭包 就是能够读取其他函数内部变量的函数
本质上，闭包是将函数内部和函数外部连接起来的桥梁
作用：
	1.可以读取函数内部的变量
	2.变量的值始终保持在内存中，不会在函数调用后被自动清除。
注意点：
	（1）由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
	（2）闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。
*/



//闭包应用
//1.实现公有变量
//累加器 知道谁调用了累加器
// function add(){
// 	var count=0;
// 	function addAction(){
// 		count++;
// 		console.log(count);
// 		return count;
// 	}
// 	return addAction;
// }
// 
// var a=add();
// console.log(a());

//缓存存储结构
// function add() {
// 	var count = 0;
// 
// 	function addAction() {
// 		count++;
// 		console.log(count);
// 		return count;
// 	}
// 
// 	function clear() {
// 		count = 0;
// 		console.log(count);
// 		return count;
// 	}
// 	return [addAction, clear];
// }
// var myadd = add();
// myadd[0]();
// myadd[0]();
// myadd[0]();
// myadd[0]();
// myadd[1]();
// myadd[0]();
// myadd[0]();

//鼓励使用方法,不鼓励直接操作变量
// function counter(){
// 	var count=0;
// 	var adder={
// 		addAction:function(){
// 			count++;
// 			console.log(count);
// 			return count;
// 		},
// 		clearAction:function(){
// 			count=0;
// 			console.log(count);
// 			return count;
// 		}
// 	}
// 	return adder;
// }
// var aa=counter();
// aa.addAction();
// aa.addAction();
// aa.addAction();
// aa.clearAction();
// aa.addAction();


//模块化开发，全部使用闭包。不允许使用公有变量

//软工规定：第一，尽量避免错误，第二：如果错误不可避免，那么让错误提早暴露
