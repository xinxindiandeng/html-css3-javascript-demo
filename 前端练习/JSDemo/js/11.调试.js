/*
调试常用方法
console.log()方法，打印函数
设置断点
debugger：在需要的代码处使用  debugger
*/
var a=15;
debugger;
console.log(a);
console.log(typeof a);
console.log(a instanceof Number);//false 需要使用 new Number(15)才能显示false
var b=new Number(15);
console.log(b instanceof Number);
console.log(a.constructor);
