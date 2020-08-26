//object对象的增删查改
var obj={};

//1.增  没有属性时 自动添加
obj.name="书籍";//等价于obj["name"]="书籍";
obj.price=25;//等价于obj["price"]=25;
obj.show=function(){
	console.log(obj.name+"的价格是："+obj.price);
}

/* 等价于什么
var obj={
	name:"书籍",
	price:25,
	show:function(){
		console.log(obj.name+"的价格是："+obj.price);
	}
}; */

//2.查
	//2.1  in
	console.log("name" in obj);
	//2.2 hasOwnProperty()
	console.log(obj.hasOwnProperty("name"));

// 3.delete 删除

delete obj.show;//删除方法不需要加括号  等价于delete obj["show"];

//4. 修改 当属性存在时  给属性重新赋值就是修改
obj.name="西游记";


//5.枚举
for (var a in obj) {
	console.log("属性名："+a);
	console.log("属性值为："+obj[a]);
}

console.log(obj.toString());