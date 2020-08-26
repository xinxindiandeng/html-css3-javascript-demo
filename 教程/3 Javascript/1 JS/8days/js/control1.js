/*
上下文定义：
	上下文的原意是content，而作用域的原意是scope。
	scope指的是 函数被调用的时候, 各个变量的作用区域
	content指的是 函数被调用的时候, 查看this指向哪个object, 那么那个object 就是当前的 "上下文"。
*/


//作用域和闭包

//函数作用域
//1.外部对内部可见
//2.内部对外部不可见
//3.内部优先

//1.外部对内部可见
// var scope = 'g';
// 
// function t() {
// 	console.log(scope);
// }
// t();


//2.内部对外部不可见
// function t(){
// 	var scope=1;
// 	console.log(scope);
// }
// t();
// console.log(scope);

// 3.都可见是内部优先
// var scope = 'g';
// function t() {
// 	console.log(scope);
// 	var scope = 'g';
// 	console.log(scope);
// }
// t();

//js的作用域,都是函数级别的
// var scope='g';
// if(true){
// 	var scope=1;
// 	console.log(scope);
// }
// console.log(scope);

//每个函数在定义(函数声明、函数表达式)时会拷贝其父亲函数的作用域链
//在函数被调用时,生成AO然后将AO压入作用域链的栈顶


// 函数的AO通过scope chain相互连接起来,使得函数体内的变量都可以保存在函数的AO,这样的特性称为"闭包"

// 闭包的危险:
// 闭包会造成原有AO不释放,产生内存泄漏
//闭包应用：
// 实现共有变量
// 缓存存储结构
// 封装,实现属性私有化
// 模块化开发,防止污染全局变量

//闭包demo 
function other() {
	var scope = "other";

	function inner() {
		return scope;
	}
	return inner;
}

var fn=other();
console.log(fn());
