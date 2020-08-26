//+ 数值加法
var iNum=3+3;
document.write('[+] iNum= '+iNum+'</br>');

iNum=iNum+3;
document.write("[+] iNum= "+iNum+'</br>');

//无穷大
iNum=Number.MAX_VALUE+1E307;
document.write('[+] iNum= '+iNum+'</br>');

//无穷大后计算停止
iNum=iNum+1E307;
document.write('[+] iNum= '+ iNum+'</br>');

iNum=Number.MAX_VALUE+1E307-Number.MAX_VALUE;
document.write('[+] iNum= '+iNum+'</br>');

//字符串拼接
var sToken='abc'+'edf';
document.write('[+] sToken= '+sToken+'</br>');

sToken='5'+5;
document.write('[+] sToken = '+ sToken + '</br>');

sToken=5+'5';
document.write('[+] sToken = '+ sToken + '</br>');

sToken='5'-5;
document.write('[+] sToken = '+ sToken + '</br>');

//特殊类型
document.write("undefined==undenfined "+ (undefined==undefined)+"<br/>");

document.write("undefined==null " +(undefined==null)+"<br/>");

document.write("null==null "+(null==null)+"<br>");


//- 数学减法
iNum=7-3;
document.write('[-] iNum = '+iNum+ '</br>');

//* 数学乘法
iNum=7*3;
document.write('[*] iNum = '+iNum+ '</br>');

//  /数学除法
iNum=7/3;
document.write('[/] iNum = '+iNum+ '</br>');

iNum=7/0;
document.write('[/] iNum = '+iNum+ '</br>');

iNum=0/0;
document.write('[/] iNum = '+iNum+ '</br>');

//  %数学除法
iNum=7%3;
document.write('[%] iNum = '+iNum+ '</br>');

iNum=7.5%3;
document.write('[%] iNum = '+iNum+ '</br>');

iNum=7%0;
document.write('[%] iNum = '+iNum+ '</br>');

iNum=0%0;
document.write('[%] iNum = '+iNum+ '</br>');

//  ++ 
iNum=5;
++iNum;
document.write('[++] iNum = ' + iNum + '</br>');

iNum=5;
iNum=iNum++ + 10 + ++iNum;
//一元操作符 优先级 高于算数运算符
/*
解题思路
程序运算  同级从左向右计算
 1 . iNum=5
 iNum=5+10+ ++ iNum;  此时表达式中  iNum=6
 2.iNum=6; 由于++优先级高于算数运算符+
 iNum=5+10+7
 3.结果为 iNum=7;

*/
document.write('[++] iNum = '+ iNum+'</br>');
