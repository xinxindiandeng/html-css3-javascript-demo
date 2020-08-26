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

// var foo=new Function("x","y","return x+y");
// foo(1,2);


//函数调用

//立即执行函数（一次性函数）