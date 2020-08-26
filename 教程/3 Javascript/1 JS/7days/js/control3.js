/*
上下文定义：
	上下文的原意是content，而作用域的原意是scope。
	scope指的是 函数被调用的时候, 各个变量的作用区域
	content指的是 函数被调用的时候, 查看this指向哪个object, 那么那个object 就是当前的 "上下文"。
*/

//预编译--脚本
	//创建全局对象go(window)(上下文)
	//加载脚本文件
	//预编译
		//找出所有的变量声明,按照变量名加入全局对象,如果已经存在,忽略.
		//找出所有的函数声明,按照函数名加入全局对象,如果已经存在同名变量或者函数,替换
		//非声明不予理睬
	//解释执行

//1.没有var 的变量,全部认为是window的全局变量,不参与预编译
// console.log(aa);
// aa=5;
// console.log(aa);

//2.即使在函数中,a也是全局变量  是运行时,不是定义时
// test();
// function test(){
// 	a=5;
// }
// console.log(a);

//3.脚本中,所有变量声明,在脚本的预编译阶段完成,所有变量的声明与实际书写位置无关
// console.log(aa); //undefined
// var aa=5;   //定义a=5;
// console.log(aa);

//4.脚本中,所有函数声明,在脚本的预编译阶段完成,所以函数的声明与实际的书写位置无关
// console.log(haha);
// function haha()
// {
// 	console.log("haha");
// }

//5.脚本中,如果变量与函数同名,那么,函数将覆盖变量
// console.log(haha);
// var haha=123;
// function haha(){
// 	console.log("h1");
// }

//6.脚本中,只有函数能够覆盖变量,变量无法覆盖函数
// console.log(haha);
// function haha(){
// 	console.log('h1');
// }
// 
// var haha=123;


//7.脚本中,后面的函数声明会覆盖前面的函数声明.并且忽略参数

function haha(a){
	console.log("haha1");
}
function haha(a,b)
{
	console.log('haha2');
}