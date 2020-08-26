/*
1.函数声明方式 

备注：不能在条件语句中声明函数
*/

//函数声明方式
//1.function 命令
//function命令声明的代码区块，就是一个函数。function命令后面是函数名，函数名后面是一对圆括号，里面是传入函数的参数。函数体放在大括号里面。

// function print(s){
// console.log(s);
// }
// print("hello");//调用

//2.函数表达式
//除了用function命令声明函数，还可以采用变量赋值的写法。
// var print=function(s){
//     console.log(s+'\t')
// }
// print("hello");

//3.构造函数
/*
构造函数执行的过程如下:当使用构造函数创建对象,也就是说 new 构造函数()时,内部就执行啦new object()
将构造函数的作用域给新对象,(既new Object()创造出来的对象)而函数体内的this就代表new object()出来的对象执行构造函数内部的代码
返回新对象不需要return也能返回
*/

// var foo=new Function("x","y","return x+y");
// foo(1,2);


//函数调用

//立即执行函数（一次性函数）
//声明1
debugger;
var f=function(x){
    console.log(this.x)//undefined
}(4);

//声明2
(function(x){
    console.log(x);//4
})(4);//推荐

(function(x){
    console.log(this.x);//undefined
    }(4));