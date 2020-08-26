var name="window";
var obj={
    name:"my object",
    GetNameFunc:function(){
        return function(){
            return this.name;
        }
    },
    GetNameFunc2:function(){
        return this.name;
    }
}
console.log(obj.GetNameFunc()());//window
console.log(obj.GetNameFunc2());//my object
