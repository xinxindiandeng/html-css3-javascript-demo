/*
立即执行函数：在定义的时候就立即执行，执行完以后就释放，包括函数内部的所有变量。
立即执行函数不需要带函数名，如果带了函数名，则被自动忽略。
通过定义一个匿名函数，创建了一个新的函数作用域，相当于创建了一个“私有”的命名空间，该命名空间的变量和方法，不会破坏污染全局的命名空间。此时若是想访问全局对象，将全局对象以参数形式传进去即可，
*/

//立即执行函数声明

var f=function(x){
    console.log(x);
}(4);

(function(x){
    console.log(x);
})(4);//推荐写法

(function(x){
    console.log(x);
}(4));

!function(x){
    console.log(x);
}(4);

+function(x){
    console.log(x);
}(4);

-function(x){
    console.log(x);
}(6);