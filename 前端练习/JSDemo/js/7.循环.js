/**
 在讲循环的之前，先知道一下循环结构的执行步骤　
　　1、声明循环变量；
　　2、判断循环条件;
　　3、执行循环体操作；
　　4、更新循环变量；
　　5、然后循环执行2-4，直到条件不成立，跳出循环。
 */
//while循环
// var num=1;//1.声明循环变量

// while(num<=10){//2、判断循环条件
//     console.log(num);//3.执行循环体操作；
//     num++;//更新循环变量；
// }
/*
while循环()中的表达式，运算结果可以是各种类型，但是最终都会转为真假，转换规则如下。
　　①Boolean：true为真，false为假；
　　②String：空字符串为假，所有非空字符串为真；
　　③Number：0为假，一切非0数字为真；
　　④null/Undefined/NaN:全为假；
　　⑤Object：全为真。
*/

//do-while循环
/*
while循环特点：先判断后执行；
do-while循环特点：先执行再判断，即使初始条件不成立，do-while循环至少执行一次；
 */

// var num = 10;           
// do{
//   console.log(num);//10 9 8 7 6 5 4 3 2 1 0
//     num--;
//     }while(num>=0);


//for循环
/*
　for循环
　　1、for有三个表达式：①声明循环变量；②判断循环条件；③更新循环变量；
　　　　三个表达式之间，用;分割，for循环三个表达式都可以省略，但是两个“;”缺一不可。
　　2、for循环的执行特点：先判断再执行，与while相同
　　3、for循环三个表达式都可以有多部分组成，第二部分多个判断条件用&& ||连接，第一三部分用逗号分割；位置可为空,但是循环体内得有递增/递减
*/
// for(var i=0;i<10;i++){
//     console.log(i);
// }

// for(var i=0;i<10;++i){
//     console.log(i);
// }

/*
for-in循环
for()中的格式：for(keys in zhangsan){}
　　keys表示obj对象的每一个键值对的键！！所有循环中，需要使用obj[keys]来取到每一个值！！！

　　for-in 循环，遍历时不仅能读取对象自身上面的成员属性，也能延续原型链遍历出对象的原型属性
　　所以，可以使用hasOwnProperty判断一个属性是不是对象自身上的属性。
　　obj.hasOwnProperty(keys)==true 表示这个属性是对象的成员属性，而不是原先属性

*/

//声明一个Peson类
// function Person(){
//     this.name = "张三";
//     this.age = 14;
//     this.func1 = function(){
        
//     }
// }
// //实例化这个类
// var zhangsan = new Person();
// //使用for-in遍历这个对象
// for(keys in zhangsan){
//     console.log(zhangsan[keys])
// }

/*
for-of循环　
ES6 借鉴 C++、Java、C# 和 Python 语言，引入了for...of循环，作为遍历所有数据结构的统一的方法。

　　一个数据结构只要部署了Symbol.iterator属性，就被视为具有iterator接口，就可以用for...of循环遍历它的成员。也就是说，for...of循环内部调用的是数据结构的Symbol.iterator方法。
　　for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。
*/
var arr = ['a', 'b', 'c', 'd'];
for (let a in arr) {
       console.log(a); // 0 1 2 3
}
        
for (let a of arr) {
      console.log(a); // a b c d
}