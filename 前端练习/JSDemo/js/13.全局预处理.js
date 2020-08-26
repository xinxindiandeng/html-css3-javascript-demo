/**全局预处理
 * 
  * 
 * ----------------------------------------------------------------------
 * 上下文定义：
	上下文的原意是content(内容)，而作用域的原意是scope(范围)。
	scope指的是 函数被调用的时候, 各个变量的作用区域
    content指的是 函数被调用的时候, 查看this指向哪个object, 那么那个object 就是当前的 "上下文"。
   -----------------------------------------------------------------------
 * 预编译--脚本
	//创建全局对象go(window)(上下文)
	//加载脚本文件
	//预编译
		//找出所有的变量声明,按照变量名加入全局对象,如果已经存在,忽略.
		//找出所有的函数声明,按照函数名加入全局对象,如果已经存在同名变量或者函数,替换
		//非声明不予理睬
	//解释执行
 */

 //1.没用var 声明的变量,全部认为是window的全局变量,不参与预编译
//  console.log(aa);//报错  由于全局变量不参与预处理
//  aa=5;
//  console.log(aa);

//2.即使在函数中,未声明变量也是全局的,是运行时,不是定义时
// test();
// function test(){
//     a=10;
//     console.log(a);
// }
// console.log(a);
/*
在预处理阶段
window{
    test:函数地址
}
在执行阶段:
window{
    test:函数地址
    a:10
}
*/

//3.在脚本中,所有变量声明,在脚本的预编译阶段完成,变量的声明与位置没有关系
// console.log(aa);//undefined
// var aa=10;
// console.log(aa);//10

/*
1.生成golocal
2.加载脚本
3.预处理
    window{
        a:undefined
    }
4.执行
    window{
a:10
}

*/

//4.脚本中,所有函数声明,在脚本的预编译阶段完成,所有函数的声明与实际书写位置无关
// console.log(haha);
// function haha(){
//     console.log("haha");//haha
// }

//5.脚本中,如果变量与函数同名,那么函数覆盖变量(函数是js第一公民)
// console.log(typeof ha);//Function
// var ha=1;
// function ha(){
//     console.log('ha');
// }
// console.log(typeof ha);//Function


//6.脚本中,只有函数能够覆盖变量,变量无法覆盖函数

// console.log( ha1);//预处理显示为函数
// function ha1(){
// console.log("haha");
// }
// var ha1=1;
// console.log( ha1)//1 y运行时 赋值为1

//7.脚本中,同名的函数后面的声明会覆盖前面的函数声明,并且忽略参数

console.log(haha2);
    function haha2(a){
        console.log("haha1");
    }
    function haha2(a){
        console.log("haha2");
    }