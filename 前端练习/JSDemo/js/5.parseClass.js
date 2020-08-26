//一.类型检测
// var num  = 123;
// var str  = 'abcdef';
// var bool = true;
// var arr  = [1, 2, 3, 4];
// var json = {name:'wenzi', age:25};
// var func = function(){ console.log('this is function'); }
// var und  = undefined;
// var nul  = null;
// var date = new Date();
// var reg  = /^[a-zA-Z]{5,20}$/;
// var error= new Error();
//1.typeof检测 检测不到 array，undefined,null,RegExp ,Error
// console.log(
// typeof num,//number
// typeof str,//string
// typeof bool,// boolean
// typeof arr,//object
// typeof json,//object
// typeof func,//function 
// typeof und,//undefined
// typeof nul,//object
// typeof date,//object
// typeof reg,//object
// typeof error,//object
//typeof NaN //Number
// );

//2. 使用instanceof检测 ，instanceof 方法要求开发者明确地确认对象为某特定类型。instanceof还能检测出多层继承的关系
// console.log(
//     num instanceof Number,//false  因为没有初始化所
//     str instanceof String,//false 因为没有初始化所
//     bool instanceof Boolean,// false 因为没有初始化
//     arr instanceof Array,//true
//     json instanceof Object,//true
//     func instanceof Function,//function 
//     und instanceof Object,//false 因为没有undefined类型 
//     nul instanceof Object,//false 因为没有undefined类型 
//     NaN　instanceof Number,//false 没有NaN类型
//     date instanceof Date,//true
//     reg instanceof RegExp,//true
//     error instanceof Error//true
//     );

//初始化后检测
// num = new Number(123);
// str = new String('abcdef');
// bool = new Boolean(true);
// console.log(
// num instanceof Number,//true
// str instanceof String,//true
// bool instanceof Boolean//true
// )

//instanceof 继承检测
// function Person(){}
// function Student(){}
// Student.prototype=new Person();
// var john=new Student();
// console.log(john instanceof Student);//true
// console.log(john instanceof Person);//true

//3. 使用constructor检测    // undefined和null没有constructor属性
// function Person(){}
// var Tom=new Person();
// console.log(
//     Tom.constructor==Person,
//     num.constructor==Number,
//     str.constructor==String,
//     bool.constructor==Boolean,
//     arr.constructor==Array,
//     json.constructor==Object,
//     func.constructor==Function,
//     date.constructor==Date,
//     reg.constructor==RegExp,
//     error.constructor==Error
// );  //true

// 二.显示内型转换

//2.1 将非数字转换为数值类型
/*
函数：Number;parseInt,parseFloat
    第一个函数Number(mix)，可以用于任何数据类型，该函数先将mix的数据类型转换为number类型，然后再将mix的值转换为数值。若mix的值能直接转换成数字，则直接显示。若不能则显示0或NaN.
    转换规则：
        1.如果是Boolean值，true和false将分别转化为1和0
        2.如果是数字值，只是简单的传入和返回
        3.如果是null，返回0；
        4.如果是undefined，返回NaN
        5.如果是字符串，遵循下列规则
            5.1 字符串只包含正数数字（包括前面带正负号），返回十进制整数
            5.2 字符串只包含浮点数，返回十进制浮点数
            5.3 字符串只包含十六进制数，返回等值大小十进制数
            5.4如果字符串为空（不包含任何字符），返回0；
            5.5字符串既有数字又有其他字符
                5.5.1  字符串以数字开头，则转换返回数字部分
                5.5.2   字符串以其他字符开头或没有数字，则返回NaN
*/
// var num='127';
// // console.log(Number(num));//127
// // console.log(parseInt(num));//127
// // console.log(parseFloat(num));//127

// num="12.7";
// // console.log(Number(num));//12.7
// // console.log(parseInt(num));//12
// // console.log(parseFloat(num));//12.7

// num="145f";
//  console.log(Number(num));//NaN
// console.log(parseInt(num));//145
// console.log(parseFloat(num));//145

// num="abdc";
// console.log(Number(num));//NaN
// console.log(parseInt(num));//NaN
// console.log(parseFloat(num));//NaN

// num=true;
// console.log(Number(num));//1
// num=false;
// console.log(Number(num));//0

//parseInt()函数还有另一种用法。parseInt(string,radix)：以radix为基底，将string转换成十进制的整数。radix的取值为2-32 ps:string 必须是其他进制数
// var num1="0x16f";
// console.log(parseInt(num1,16).toString(16));

//isNaN判断数据是否转换成功  true ：NaN ；false：转换成功
var num = "abcd123";
if (isNaN(Number(num))) {
    console.log("转换失败！")
} else {
    console.log("转换成功！")
}

//2.2 将其他类型转换为字符串
//toString和String两个函数
/*
    String(mix)：将mix转换成字符串类型。该函数可以将任何数据类型的值转换为字符串。

    用法一：demo.toString():将demo转换成字符串类型。demo不能等于null undefined
•用法二：demo.toString(radix)：将十进制的数demo转换为目标进制的数。如123.0.toString(8)为将十进制数字123转换为8进制的字符串。
　   注：不能写成123.toString(8) . 因为浏览器解析的时候会解析成小数。     
        */
// var num=23;
// console.log(String(num));//23
// console.log(num.toString());23

//例题：把一个二进制的数10001000转换成十六进制的数。
// var num1 = parseInt('10001000',2);　　//136
// console.log(num1);  //136
// console.log(num1.toString(16));//88

//其他类型转换为Boolean类型
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