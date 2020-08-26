/**函数预编译
 * 
 * 	函数预编译
 * 		1.调用函数
 * 		2.创建活动对象AO(Active Object)(上下文)	
 * 		3.预编译
 * 		4.作用域链(scope chain)
 * 		5.初始化arguments
 * 		6.初始化形参,将arguments中的值赋值给形参
 * 		7.找出所有的变量声明,按照变量名加入AO,如果已存在忽略
 * 		8.找出所有函数声明,按照函数名加入AO,如果已经存在同名变量或函数则进行替换
 * 		9.初始化this
 * 		10.执行解释

 --------------------------------------------------
 备注:
	上下文定义：
		上下文的原意是content(内容)，而作用域的原意是scope(范围)。
		scope指的是 函数被调用的时候, 各个变量的作用区域
   		content指的是 函数被调用的时候, 查看this指向哪个object, 那么那个object 就是当前的 "上下文"。

	变量提升（hoisting ），它是指，浏览器在遇到 JS 执行环境的 初始化，引起的变量提前定义。
		   */

 //1.函数中,所有变量声明,在函数的预编译阶段完成,所有变量的声明与实际书写位置无关	
	// function f(){
	// 	console.log(aa);//undefined
	// 	var aa=5;
	// 	console.log(aa);//5
	// }
	// f();

//2.函数中,所有函数声明,在函数预编译阶段完成,所有函数的声明与实际书写位置无关
	// function f1(){
	// 	console.log(haha);
	// 	function haha(){
	// 		console.log(this);//window
	// 	}
	// 	haha();
	// }
	// f1();

//3.函数中,如果变量名与函数名同名,那么函数将覆盖变量
	// function f2(){
	// 	console.log(ha1);//function
	// 	var ha1=1;
	// 	function ha1(){
	// 		console.log(this);//window
	// 	}
	// }
	// f2();

//4.函数中,如果同名变量和函数,只能函数覆盖变量
	// function f3(){
	// 	console.log(typeof ha2);//function 
	// 	function ha2(){
	// 		console.log(this);//window
	// 	}
	// 	var ha2=5;
	// 	console.log(ha2);//5 运行时给变量ha2 赋值
	// }
	// f3();

	//5.函数中,同名的函数后面的函数声明会覆盖前面的函数声明,并忽略参数

		// function f4(){
		// 	function ha3(){
		// 		console.log("this is ha1");
		// 	}

		// 	function ha3(){
		// 		console.log("this is ha2");
		// 	}
		// 	console.log(ha3);
		// }
		// f4();

	//6.函数预编译后,遇到需要访问的变量或函数,优先考虑自己AO中定义的函数或变量,如果找不到,才会在其定义的上一层AO中寻找,直到到达GO
		var scope="global";
		function f5(){
			console.log(scope);//undefined
			var scope="local";
			console.log(scope);//local
		}
		f5();
		console.log(scope);//global