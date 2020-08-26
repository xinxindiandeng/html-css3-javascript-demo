/*
事件委托
	利用时间按冒泡，在父节点上响应时间按，而不是在子节点上响应事件
	优点：
		性能更高
		灵活，不需要大量操作element
*/

var u=document.getElementById('uid');
u.addEventListener('click',function(e){
	console.log(e);
	e=e||window.event;
	console.log(e);
	console.log(window.event);
	var target=e.target||e.srcElement;
	console.log(target);
	target.innerHTML=target.innerHTML+'click';
	console.log(target.innerHTML);
	console.log(target);
	
},false)