//JSON字符串处理

// var strJson = '{"name":"Albad",\n' + '"age":25}';
// 
// //1.jsonstring -->object
// 
// //1.1 eval（）自己产生一个string当做js脚本，交有js引擎执行
// var strJson2 = '(' + strJson + ')';//表达式
// console.log(strJson2);
// //var obj1=eval(strJson2);//json字符串需要加上括号才能使用eval函数
// 
// //1.2 JSON.Parse
// var obj2=JSON.parse(strJson);
// 
// //1.3 jqurey -->$jqurey.parseJSON();
// var obj3=jQuery.parseJSON(strJson);
// 
// 
// 
// //2.object-jsonstring;
// 
// 	//2.1  JSON.stringigy()
// 	var strJson3=JSON.stringify(obj2);
// 	console.log(strJson3);
// 	
// 	//2.2  jQuery.toJSON()
// 	var strJson4=jQuery.toJSON(obj2);
// 	console.log(strJson4);


//练习  json  99乘法表
// var jsonTable = {};
// for (var i = 1; i <= 9; i++) {
// 	var line = [];
// 	for (var j = 1; j <=i; j++) {
// 		line[j] = i + "*" + j + '=' + i * j;
// 	}
// 	jsonTable[i]=line;
// }
// console.log(jsonTable);
// //object转换为jsonstring 
// var strJson6=JSON.stringify(jsonTable);
// console.log(strJson6);
// console.log('---------分隔符-----------');
// var strJson7=jQuery.toJSON(jsonTable);
// console.log(strJson7);
// console.log('---------字符串转object-----------');
// var temp='('+strJson6+')';
// var obj4=eval(temp);
// console.log(obj4);
// console.log('---------JSON.parse分隔符-----------');
// var obj5=JSON.parse(strJson7);
// console.log(obj5);
// console.log('---------jQuery分隔符-----------');
// var obj6=jQuery.parseJSON(strJson7);
// console.log(obj6);

//学生成绩表

var strudentsTable={};
strudentsTable.students=[];
var student={
	'name':'小明',
	'birthday':'1990--1-1',
	'genter':'男',
	'class':'一班',
	'scales':[{
		'couse':'语文',
		'scale':101
	},
	{
		'couse':'数学',
		'scale':120
	},
	]
};
strudentsTable.students.push(student);
var student1={
	'name':'小红',
	'birthday':'1991--1-1',
	'genter':'女',
	'class':'一班',
	'scales':[{
		'couse':'语文',
		'scale':110
	},
	{
		'couse':'数学',
		'scale':130
	},
	]
};
strudentsTable.students.push(student1);
var student2={
	'name':'小玩',
	'birthday':'1990--1-1',
	'genter':'男',
	'class':'一班',
	'scales':[{
		'couse':'语文',
		'scale':109
	},
	{
		'couse':'数学',
		'scale':135
	},
	]
};
strudentsTable.students.push(student2);
var strstudents=JSON.stringify(strudentsTable);
console.log(strstudents);

var objStudets=JSON.parse(strstudents);
for(var x in objStudets.students)
{
	//console.log(x);//防护数组下标
console.log(objStudets.students[x].name);
console.log(objStudets.students[x].birthday);
console.log(objStudets.students[x].genter);
console.log(objStudets.students[x].class);
for(var i in objStudets.students[x].scales)
{
	console.log("    "+objStudets.students[x].scales[i].couse+':'+objStudets.students[x].scales[i].scale);
}
}

