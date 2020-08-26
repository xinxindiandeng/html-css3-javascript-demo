/*
Number相关数据类型与方法
1.int 类型 十进制，八进制，十六进制，进制转换方法
2.浮点数
3.数值范围 最大范围  最小范围  无限大  判断无限大
*/
//整数类型

//正常十进制整数
var Num=56;
document.write("整数十进制类型： "+Num+" ,typeof="+typeof(Num)+"<br>");//1

//八进制整数  以0开头
var oNum=070;
document.write("整数八进制类型： "+oNum+" ,typeof="+typeof(oNum)+"<br>");//56 以10进制显示

//十六进制整数，以0x开头
var xNum=0x1f;
document.write("整数十六进制类型： "+xNum+" ,typeof="+typeof(xNum)+"<br>");//31  以10进制显示

//进制转换方法 parseInt(str,radix)或Number.toString(radix) str：需要被转换的数  radix：需要转换的进制
console.log(parseInt(oNum,10));//56 等价于 oNum.tostring(10);
console.log(parseInt(oNum,16));//86 等价于 oNum.tostring(16);
console.log(parseInt(xNum,10));//31 等价于 xNum.tostring(10);

//浮点数类型

//正常浮点数
var fNum=4.01;
document.write("正常浮点数： "+fNum+" ,typeof="+typeof(fNum)+"<br>");//4.01  以10进制显示

/*
备注：
    小数点后面全是0则以整数显示
*/

// 科学计数法
fNum=2e10;
document.write("科学计数法："+fNum+",typeof : "+typeof(fNum)+"<br>");

//最大数值范围
document.write("最大数值："+Number.MAX_VALUE+"<br>");

//最小数值范围
document.write("最小数值"+Number.MIN_VALUE+"<br>");

//无限大
document.write("无限大："+Number.POSITIVE_INFINITY+"<br>");//Infinity； 无限大 不参加任何计算

//判断是否无限大
document.write("无限大判断："+isFinite(Number.POSITIVE_INFINITY));//true：有效数值 false:无限大数值

//string转number 类型
    //1.Number函数
    Number("12.0");//12 小数点后没有大于0的数直接转为整数类型
    Number("12.01");//12.01 

    //parseInt 转换为整数类型
    parseInt("12.01");//2

    //parseFloat 转换为浮点数
    parseFloat("12.01")//12.01

    parseFloat("12.00")//12

/*
备注:
Number与parseInt/ParseFloat 用法区别 当转换文本为 数字+字母(12ccc)
Number("12ccc") Nan
parseInt("12ccc") 12
parseFloat("12ccc") 12
*/




