//函数预编译
//函数调用
//创建活动对象AO（Active Object）（上下文）
//预编译
//scope chain(作用域链)
//初始化arguments
//初始化形参，将arguments中的值赋值给形参
//找出所有的变量声明，按照变量名加入AO，如果已经存在忽略
//找出所有函数声明，按照函数名加入AO。如果已经存在同名变量或者函数，替换
//this初始化
//解释执行

//8.函数中，所有变量声明，在函数的预编译阶段完成，所有变量的声明与实际书写位置无关
// function f() {
// 	console.log(aa);
// 	var aa = 5;
// 	console.log(aa);
// }
// f();


//9.函数中,所有函数声明,在函数预编译阶段完成,所有函数的声明与实际的书写位置无关
/* function f(){
	console.log(haha);
	function haha(){
		console.log("haha被调用了");
	}
}
f(); */

//10.函数中,如果变量与函数同名,那么,函数将覆盖变量
/* function f(){
console.log(haha);
	var haha=123;
	function haha(){
		console.log("this is haha");
	}
}
f();
 */

//11.函数中,同名变量和函数,只能函数覆盖变量
/* function f(){
console.log(haha);
	
	function haha(){
		console.log("this is haha");
	}
	var haha=123;
}
f(); */

//12.函数中,后面的函数声明会覆盖前面的函数声明,并且忽略参数
/* function f()
{
	function haha(){
		console.log("this is haha1");
	}
	function haha()
	{
		console.log("this is haha2");
	}
	console.log(haha);
}
f(); */

//13.但函数预编译后,遇到需要访问的变量或函数,优先考虑自己AO中定义的函数和变量
//如果找不到,才会在其定义的上一层AO中寻找,直到到达GO;
var scope='global';
function f(){
	console.log(scope);//undefined
	var scope='local';
	console.log(scope);//local
}
f();
console.log(scope);//global;
