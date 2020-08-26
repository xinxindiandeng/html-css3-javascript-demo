/*
1.声明string
2.String类型常用方法
    1.字符串声明
    2.常用方法
        

*/

//字符串声明
// var str="Hello　World!";
// document.write(str+"<br>");
// console.log(typeof(str));//string字符串
// var str1=new String("Hello");//参数 为空 创建空字符串 ;有参数 则初始化为参数
// document.write(str1+"<br>");
// console.log(typeof(str1));//object

//包含特殊字符的字符串声明（特殊字符需要转义）
// var str2="It\' Ok";
// document.write("包含特殊字符的字符串："+str2);

/*
字符串常用属性
1.取字符串长度
2.返回创建字符串属性的函数
*/
//1.取字符串长度 length包含空格
// console.log(str.length);
// console.log(str1.length);

//2.返回创建字符串属性的函数
// console.log(str.constructor);
// console.log(str1.constructor);

//2.prototype  允许您向对象添加属性和方法
// str.__proto__.aa=10;
// console.log(str.aa);

/*
js中的字符串特性-》不可变性，字符串的值是不可变的
*/
//1、改变字符串中的字符

// str[1]="W";
// console.log(str);
// console.log(str[1]);//e
//2、引用字符串的变量地址变了(指向了新的字符串)，字符串本身没有变。【此时，字符串是对象，str指向的是字符串的地址】
// str = "How are you!";
// console.log(str);//结果是【How are you!】
//3、由2可以看出为字符串重复赋值、字符串的拼接等都会引用新的地址空间来存放字符串的值，消耗内存的操作。

/*
String对象方法
*/

//concat:将两个或多个字符的文本组合起来，返回一个新的字符串。
// var a = "hel lo";
// var b = ",world";
// var c = a.concat(b);
// console.log(c);//hello,world

//indexOf:返回字符串中一个子串第一处出现的索引（从左到右搜索）。如果没有匹配项，返回 -1 。
// console.log(a.indexOf("l"));//2 第一个参数：查询字符 大小写敏感
// console.log(a.indexOf("l",3));//4  第二个参数：查询起始位往右查询（包含当前位置）

//lastIndexOf:可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索;如果没有匹配项，返回 -1;
// console.log(a.lastIndexOf("l"));//4 第一个参数：查询字符 大小写敏感
// console.log(a.lastIndexOf("l",3));//2 第二个参数：查询起始位往左查询（包含当前位置）

//charAt:返回位置的字符
// var get_char=a.charAt(0);//等价于a[0]
// console.log(get_char);//h

// substring:返回字符串的一个子串，传入参数是起始位置和结束位置
// var sub_str=a.substring(1);
// console.log(sub_str);//el lo 一个参数时 字符截取包含起始位置
// console.log(a);//hel lo 截取不改变原来字符串

// sub_str="hello".substring(1,4);//参数1：包含下标；参数2：结束位置下标不包含
// console.log(sub_str);//ell

//substr:返回字符串的一个子串，传入尝试是起始位置和长度
// sub_str=a.substr(1);//起始位置
// console.log(a);//hel lo
// console.log(sub_str);//el lo
// sub_str=a.substr(1,2);//参数1：起始位置（包含起始位置）  参数2：截取长度
// console.log(sub_str);//el

//slice:提取字符串的一部分，并返回一个新字符串（与 substring 相同）。
// sub_str=a.slice(1);
// console.log(sub_str);//el lo
// sub_str=a.slice(1,5);//参数1：包含下标；参数2：结束位置下标不包含
// console.log(sub_str);//el l

//split:通过将字符串划分成子串，将一个字符串做成一个字符串数组。
// var sp_str=a.split("");
// console.log(sp_str);//["h", "e", "l", " ", "l", "o"]

//toLowerCase:将整个字符串转成小写字母。
// var low_str=a.toLowerCase();
// console.log(low_str);//hel lo
//toUpperCase:将整个字符串转成大写字母。
// var up_str=a.toUpperCase();
// console.log(up_str);//HEL LO

//trim：移除字符串首尾空白
// console.log(" he l lo ".trim());//he l lo

/*
字符串：正则表达式
1.正则表达式类,RegExp(exp，param) exp:指正则表达式;param:表示参数 a i g
2.直接量：用两个撇斜杠，/expression/param

*/

//match:检查一个字符串匹配一个正则表达式内容，如果没有匹配上返回Null
// var str="hello world Hello World";
// console.log(str.match(/hello/));//["hello", index: 0, input: "hello world Hello World"]
// console.log(str.match(/hello/gi));// ["hello", "Hello"]


//replace:用来查找匹配一个正则表达式的字符串，然后使用新字符串代替匹配的字符串
// var str="hello hello world";
// var patt=/hello/g;
// console.log(str.replace(patt,"Hello"));//Hello Hello world



//search:执行一个正则表达式匹配查找。如果查找成功，返回字符串中匹配的索引值。否则返回 -1 。
// var str="hello Hello world";
// console.log(str.search("hello"));//0
// var patt=/hello/gi;
// console.log(str.search(patt));//0


//参考：https://www.cnblogs.com/l1pe1/p/6197371.html