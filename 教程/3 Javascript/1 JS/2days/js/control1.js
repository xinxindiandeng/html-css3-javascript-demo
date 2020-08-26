var iNum=86;
document.writeln("iNum="+iNum+"<br/>");

// 八进制
var oNum=070;
document.writeln("oNum="+oNum+"<br/>");

//十六进制
var xNum=0x1f;
document.write("xNum="+xNum+"<br/>");

//浮点数
var fNum=5.01;
document.write("fNum="+fNum+"<br/>");

//浮点数,科学记数发
fNum=5.61e7 //5.61*10^7
document.write("fNum="+fNum+"<br/>")

//最大数值
iNum=Number.MAX_VALUE;
document.write("最大数值："+iNum+"<br/>");

//无限大
iNum=Number.POSITIVE_INFINITY;
document.write("无限大："+iNum+"<br/>");

//无限大表现形式2
iNum=Number.MAX_VALUE*1.1;
document.write("无限大表现形式2："+iNum+"<br/>");
document.write("isFinite(iNum)="+isFinite(iNum)+"<br/>");

//最小数值
iNum=Number.MIN_VALUE;
document.write("最小数值："+iNum+"<br/>");

//无限小表现
iNum=Number.MIN_VALUE*Number.MAX_VALUE;
document.write("无限小："+iNum+"<br/>");

document.write("isFinite(iNum)="+isFinite(iNum)+"<br/>");

//字符串
var sToken="hello world";
document.write("sToken="+sToken+"<br/>");

sToken='Hello World';
document.write("sToen="+sToken+"<br/>");

//js中参数是以数组的形式传递的，相当于C# params 传递的（object类型数组）
var sToken2=sToken.concat("abc","ccc","ddd",123);
document.write("sToken2="+sToken2+"<br/>");

//字符串长度
sToken2="Hello World!";
document.write("sToken="+sToken2.length+"长度</br>");

//查找字符串的位置
var length=sToken2.indexOf("o");
document.write("o在hello world 中的位置是："+length+"<br/>");
