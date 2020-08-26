//正则表达式

//1.正则表达式类,RegExp(exp，param) exp:指正则表达式;param:表示参数 a i g
var regExp=new RegExp('[0-9]+','g');
//[]:代指一个字符,里面的字符表示这个被指代的字符的选择范围
//+ 前面的字符,出现1次或者一次以上
//参数:g (global),全局

var str1='123412341a2341235696';
// console.log(str1.match(regExp));
//在match这个函数里:g:匹配所有字符串，没有g匹配第一个,然后就停止

//2.直接量
//用两个撇斜杠，/expression/param
//string对象的match
// console.log(str1.match(/[0-9]+/g));
// console.log(str1.match(/\d+/g));
// console.log(str1.match(/123/g));
// console.log(str1.match(/(123)+/g));
// 
//RegExp对象的test方法
// var regExp2=/[0-9]+/g;
// console.log(typeof(regExp2));
// console.log(regExp2.test(str1));

//------------正则详解------------
//1.简单类
	//1.2单词本身
	var str='hello world';
	// console.log(str.match(/hello/g));

//2.范围类[]代指一个字符，内部住处字符的范围
//			[0123456789] [0-9] [a-z] [A-Z]
//			十六进制[0-9a-fA-F]


//3.负向类[^0-9]排除数值;
str='123456abcd;g||789123';
//console.log();

//4.量词 一个前面单位出现的次数 
//{n}:出现n次
//{m,n}:至少m次,最多n次
//{m,}:最少m次，最多不限
//?:   0次或1次   等价于{0,1}
//+:   1次或者多次 等价于{1,}
//*:   0次或者多次 等价于{0,}
//贪婪量词：?; +; * 找到匹配的最大
//惰性量词：*?;+? 找到匹配最小

// str="abbbaabbbaaabbb123bbb";
// console.log(str.match(/.*bbb/g));//贪婪 尽可能大的字符串
// console.log(str.match(/.*?bbb/g));//惰性  尽可能小的字符串

//5.通配符  预定义类
//  .=[^\n\r]  除回车以外,都可以匹配
//  \d=[0-9]  数字
//  \D=[^0-9] 非数字
//  \w=[a-zA-Z_0-9] 所有字母(包含大小写)
//  \W=[^a-zA-Z_0-9] 其他
//  \s=[\t\n\x0b\f\r] 空格或者空白
//  \S 非空格或者非空白
//  \b  表示边界(两个字符中间的位置) 一遍是\w,另一边是\W
//  \B 不是边界
//	^	表示开始
//	$	表示结束

str='a==b';
// console.log(str.match(/.\b./g));
// console.log(str.match(/^./g));
// console.log(/.$/g);
// console.log(/^a/g);


//6. 分组  一个真正表达式，不但可以对整个匹配进行操作，还可以对其中()中的子字符串进行匹配，分组
//(pattern) 匹配pattern同时捕获结果，自动设定组好  /1,RegExp.$1  反向引用
//(?<name>parttern) 匹配pattern同时捕获结果，设定name为组名 \k<name>:反向引用
str='mom and dad';
// console.log(str.match(/mom(and dad)?/g));
// console.log(RegExp.$1);

//或
//函数预处理 声明处理
// str ='var   aaadf1;';
// str1='function  f(){}';
// var strvar=/^var\s+[a-zA-z]\w*;/;
// var strfunction=/^function\s+[a-zA-z]\w*\s*\(\)\{\}/;
// console.log(str.match(strvar));
// console.log(str1.match(strfunction));


str='word excl  excl   hello hello world';
// console.log(str.match(/(\b[a-zA-Z]+\b)\s+\1/g));
// console.log(RegExp.lastMatch);
// console.log(RegExp.$1);
// console.log(str.match(/(?<n1>\b[a-zA-Z]+\b)\s+\k<n1>/));

//零宽(负向)先行\后行断言
// str='reabc;rcaaa=bbb=';
// //寻找两个字符,两个字符后面以分号结尾
// console.log(str.match(/.{2}(?=;)/g));//bc
// //寻找四个字符,以ea开头
// console.log(str.match(/(?=ea)[a-z]{4}/g));//eabc 
// //寻找三个字母,不以分号结尾
// console.log(str.match(/[a-z]{3}(?!;)/g));//"rea", "rca", "bbb"
// //寻找不以re开头的三个字母
// console.log(str.match(/(?!re)[a-z]{3}/g));//"eab", "rca", "bbb"

//练习  手机号码 第一位:1 第二位  34579
// var photo=/^1[34579]\d-?\d{4}-?\d{4}$/;
// var str="130-0000-0000";
// var str1='13000000000';
// console.log(photo.test(str));

//匹配正整数
// var regExp2=/^[+-]?\d+$/;
// str='12';
// console.log(str.match(regExp2));
// str='-1';
// console.log(str.match(regExp2));

//匹配浮点数；兼容 整数，小数，科学计数法
// var regExp3=/^[+-]?\d+(\.\d+)?([Ee][+-]?\d+)?$/;
// str='100';
//  console.log(str.match(regExp3));
// str='-0.47';
// console.log(str.match(regExp3));
// str='12E5';
// console.log(str.match(regExp3));
// str='-3e8';
// console.log(str.match(regExp3));


//匹配中国字
var regExp4=/[\u4e00-\u9fa5\uff0c\u3002]+/g;
str="String支持的正则函数:search() ,不支持全局g,同时会忽略regexp的lastIndex";
// console.log(str.match(regExp4));
str='I word site excel word OK chrome match OK excel word';
//9.String支持的正则函数:search() ,不支持全局g,同时会忽略regexp的lastIndex
// console.log(str.search(/\bword\b/));



//10 match(regexp) 直接量和对象
//返回:没有g,返回数组,0:第一个匹配的最大串,其他是分组的子串,index:最大串开始的位置,input 原始的串
//g:返回数组,手游匹配的最大串,但是 没有分组的子串,index和input 无效
// console.log(str.match(/\bword\b/));
// console.log(str.match(/\bword\b/g));

//11 replace(regexp/substr,replacement)
//regexp直接量,对象.substr 子串
//replacement  替换进去的串,或者函数

//把小写的word变成大写的WORD
// console.log(str.replace(/\bword\b/,'WORD'));//I WORD site excel word OK chrome match OK excel word
// console.log(str.replace(/\bword\b/g,'WORD'));//I WORD site excel WORD OK chrome match OK excel WORD

//replacement:$1~$99  分组 ，$&代表子字符串  $` 子串左侧  $' 子串右侧
//匹配 单词1-单词2  模式 ,然后变成单词2-单词1
// str='aaa-bbbb  cc-dd';
// console.log(str.replace(/([a-z]+)-([a-z]+)/,'$2-$1 : $&'));//bbbb-aaa : aaa-bbbb  cc-dd
// console.log(str.replace(/([a-z]+)-([a-z]+)/g,'$2-$1 : $&'));//bbbb-aaa : aaa-bbbb  dd-cc : cc-dd


//12. split(separator,howmany)->数组
//separator：正则，字符串，可续
//howmany:最大长度
// console.log(str.split(/\s+/));//"I", "word", "site", "excel", "word", "OK", "chrome", "match", "OK", "excel", "word"
// console.log(str.split(/\s+/,4));//"I", "word", "site", "excel"
// console.log(str.split(" "));//"I", "word", "site", "excel", "word", "OK", "chrome", "match", "OK", "excel", "word"

//RegExp test Boolean  是否匹配
console.log(/\bword\b/.test(str));

//RegExp exce(string) 返回数组(找不到null)
//数组的0 位,最大匹配串,后面是分组,index是开始匹配的位置,input原串
//g,lastIndexz中防止子串结束位置的下一位,每次调用后移
 