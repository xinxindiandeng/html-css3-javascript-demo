/*
this ：javascript 关键字:

它代表函数运行时，自动生成的一个内部对象，只能在函数内部使用。

this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，实际上this的最终指向的是那个调用它的对象，

这说明this关键字只与函数的执行环境有关，而与声明环境没有关系。下面通过例子来讲解。
*/

//1.脚本中，this初始化为window
console.log(this);//window

//2.在普通函数中，this初始化为window
function f(){
    console.log(this);//window
}
f();

//3.在object调用的函数中，this被指定为object，谁调用指向谁

var obj={
    name:"aa",
    f2:function(){
        console.log(this);
    }
}

obj.f2();//obj
var f=obj.f2;
f();//window

//4.call/apply中，this可以被指定，被指定为第一参数

var obj1={
f3:function(x,y){
console.log(this);
}
}
obj1.f3(1,2);//f3
var f=obj1.f3;
f.call(obj1,1,2);//f3
f.apply(obj1,[1,2]);//f3

//5.构造函数中，this被指向创建的对象
function F(){
    console.log(this);
}
var a=new F();//函数


//参考：https://www.cnblogs.com/wangdan0915/p/7737291.html
// http://www.ruanyifeng.com/blog/2018/06/javascript-this.html
