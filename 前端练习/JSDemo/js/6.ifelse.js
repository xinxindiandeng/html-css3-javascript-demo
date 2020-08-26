/** 
 * 我们可使用如下条件语句：
        使用 if 来规定要执行的代码块，如果指定条件为 true
        使用 else 来规定要执行的代码块，如果相同的条件为 false
        使用 else if 来规定要测试的新条件，如果第一个条件为 false
        使用 switch 来规定多个被执行的备选代码块
 * 
 if (条件 1) {
    条件 1 为 true 时执行的代码块
} else if (条件 2) {
    条件 1 为 false 而条件 2 为 true 时执行的代码块
 } else {
    条件 1 和条件 2 同时为 false 时执行的代码块
}
 * 
*/
var date =new Date();
if(date.getHours()<10){
    console.log("good morning");
}
else if(date.getHours()<16){
    console.log("good day");
}else{
    console.log("good evening")
}

