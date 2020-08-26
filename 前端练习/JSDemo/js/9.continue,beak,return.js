/*
在 break,continue和return 三个关键字中， break,continue是化为一类的，return 是函数返回语句，但是返回的同时也将函数停止。

相同之处：三个都会将此时进行的语句停止。

不同之处：

1、break：是立即结束语句，并跳出语句，进行下个语句执行。

2、continue：是停止当前语句，并从头执行该语句。

3、return：停止函数。

4、使用的语句环境不一样，break和continue是用在循环或switch语句中，return是用在函数语句中。

*/

//1、break：由于它是用来退出循环或者switch语句，所以只有当它出现在这些语句时，这种形式的break语句才是合法的。
// for(var i=0;i<10;i++){
//     if(i==6){
//         break;
//     }
//     console.log(i);
// }

//continue 和break语句相似。所不同的是，它不是退出一个循环，而是开始循环的一次新迭代。
//continue语句只能用在while语句、do/while语句、for语句、或者for/in语句的循环体内，在其它地方使用都会引起错误！

// for(var i=0;i<10;i++){
//     if(i==6)
//     {
//         continue;
//     }
//     console.log(i);
// }

/*
return语句
return语句就是用于指定函数返回的值。
return语句应用范围只能出现在函数体内，出现在代码中的其他任何地方都会造成语法错误！
 */

 /*
 1、返回控制与函数结果

语法为：return 表达式;

语句结束函数执行，返回调用函数，而且把表达式的值作为函数的结果。
 */

//  function format(data){
//      if(data<10){
//          return "0"+data
//      }else{
//          return data;
//      } 
//  }
//  console.log(format(2));
//  console.log(format(23));

/*
 2、返回控制

无函数结果，语法为：return;

在大多数情况下,为事件处理函数返回false，可以防止默认的事件行为。

Return False 就相当于终止符，Return True 就相当于执行符。 返回的false和true通常用在需要进行布尔类型判断时。
*/