//数组的成员函数

//slice(iStart[,iEnd]);
//截选数组中的一段
//原数组不受影响
//slice(iStart,iEnd) iStart 代表开始位置，IEnd 结束位置
//slice(iStart)  从头到尾  从iStart开始  但是不包含iStart位置
// var arr=[0,1,2,3,4,5,6,7,8];//等价于  var arr=new Array(0,1,2,3,4,5,6,7,8);备注:Array 只有一个参数时代表数组的长度 多个参数时代表初始数组元素
// console.log("slice(6):"+arr.slice(6));//等价于 console.log("slice:"+arr.slice(6).jion(","))
// console.log("slice(-3):"+arr.slice(-3));//后三个元素

//splice(iIndex[,iHowmany][,item1][,item2]...)
//原数组受影响
//从iIndex开始,删除元素,删除几个由iHowmany决定
//item[n] 要插入的元素


// //截取并改变原数组
// var arr1=[0,1,2,3,4,5,6,7,8];
// var arr2=arr1.splice(6);//从第7位开始截取，到结束 改变原来数组，返回字符串
// console.log('arr1[aplice(6)]:'+arr1);
// console.log('arr2:'+arr2+"  arr2数据类型："+typeof(arr2.constructor.name));
// 
// arr1=[0,1,2,3,4,5,6,7,8];
// arr2=arr1.splice(-3);
// console.log('arr1[aplice(-3)]:'+arr1);
// console.log('arr2:'+arr2+"  arr2数据类型："+typeof(arr2.constructor.name));
// 
// //插入数据(改变原数组)
// arr1=[0,1,2,3,4,5,6,7,8];
// arr1.splice(2,1,-1,-2,-3);
// console.log('splice(2,3,-1,-2,-3):'+arr1);
// 
// arr1=[0,1,2,3,4,5,6,7,8];
// arr1.splice(2,0,-1,-2,-3);
// console.log('splice(2,3,-1,-2,-3):'+arr1);


//删除 delete  数组元素
// var arr1=[0,1,2,3,4,5,6,7,8];
// delete arr1[4];
// console.log("delete arr1[4]:"+arr1);

//二维数组
// var  martix=[[1,2,3],[4,5,6],[7,8,9]];
// martix=[];
// martix[0]=[1,2,3];
// martix[1]=[4,5,6];
// martix[2]=[7,8,9];

//清空一个数组
// var arr3=[1,2,3,4];

//第一种方法
// console.log(arr3);
// arr3.length=0;
// console.log(arr3);

//第二种方法
// console.log(arr3);
// arr3.splice(0);
// console.log(arr3);

//第三方法
// console.log(arr3);
// arr3=[];
// console.log(arr3);

