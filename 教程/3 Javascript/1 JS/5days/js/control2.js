//纯数字数组排序
var arr=[1,2,3,4,5,1,2,6,7,5,9,6];

var temparr=[];
//方法一  循环排序
// for (var i = 0; i < arr.length; i++) {	
// 	
// 		for(var j=0;j<temparr.length;j++ )
// 		{
// 			if(arr[i]===temparr[j])
// 			{
// 				break;			
// 			}
// 		}
// 		if(j>=temparr.length)
// 		{
// 			temparr.push(arr[i]);
// 		}
// 	}
// 				
// console.log(temparr);

//时间复杂度，与arr的元素个数成正比

// //排序2
// //arr排序，不用每次找temparr  堆排序
// arr.sort();
// for(var i=0;i<arr.length;i++)
// {
// 	if(temparr.length==0||temparr[temparr.length-1]!==arr[i])
// 	{
// 		temparr.push(arr[i]);
// 	}
// }
// console.log(temparr);

//方法3
var arrMap=[];
for(var i=0;i<arr.length;i++)
{
	arrMap[arr[i]]=true;
}
for(var j in arrMap)
{
	temparr.push(+j);
}
console.log(temparr);
