//属性
//constructor   返回对创建此对象的 Boolean 函数的引用。
// var test=new Boolean();
// console.log(test.constructor);
// if(test.constructor==Boolean){
//     console.log("Boolean类型");
//     console.log(test);//false
// }

//其他类型转Boolean
//转换为 true的 1.非空字符串  2.任何非零字符串  3.任何非空对象
// var str=" ";
// console.log(Boolean(str));//true
// str="123456abc";
// console.log(Boolean(str));//true
// var num=123456;
// console.log(Boolean(num))//true
// var obj=new Object();
// console.log(Boolean(obj));//true
// var obj={};
// console.log(Boolean(obj));//true

//转化为false
// var str="";
// console.log(Boolean(str));//false
// str=null;
// console.log(Boolean(str));//false
// str=undefined;
// console.log(Boolean(str));//false
// var num=0;
// console.log(Boolean(num));//false
var num1=NaN;
console.log(Boolean(num1));//false

// 隐式的数据类型转换
        //递增与递减操作符
        //a++ ,a-- ,++a , --a
        //这4个操作符对任何值都适用，也就是他们不仅适用于整数，还可以用于字符串、布尔值、浮点数值和对象，此时伴随着隐式的数据类型转换。