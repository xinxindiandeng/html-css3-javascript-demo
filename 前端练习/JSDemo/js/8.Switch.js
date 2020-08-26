/*
 switch 语句来选择多个需被执行的代码块之一。
switch(表达式) {
     case n:
        代码块
        break;
     case n:
        代码块
        break;
     default:
        默认代码块
} 
代码解释：
计算一次 switch 表达式
把表达式的值与每个 case 的值进行对比
如果存在匹配，则执行关联代码
*/
var date=new Date();
switch(date.getDay()){
case 0:console.log("星期日");break;    
case 1:console.log("星期一");break;
case 2:console.log("星期二");break;
case 3:console.log("星期三");break;
case 4:console.log("星期四");break;
case 5:console.log("星期五");break;
case 6:console.log("星期六");break;
default:console.log("输入有误");break;
}