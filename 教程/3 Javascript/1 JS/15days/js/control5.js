//如何实现div的拖拽

//1.mousedown: 确定鼠标现对于div的位置
//2.当鼠标移动是(左键不起来),mousemove,需要通过程序保证div相对于鼠标的位置不变,实现"拿住了的效果";
//3.当鼠标抬起是,mouseup,放下div 

//绑定事件 
function bindEvent(obj){
	if(typeof(obj)=='string'){
		obj=document.getElementById(obj)
	}
	obj.oIndex=obj.style.zIndex;
	obj.addEventListener('mousedown',function(e){
		e=e||window.event;
		obj.style.zindex=1000;
		obj.style.cursor='move';
		console.log(e);
		//计算x,y,是鼠标相对于div的位置
		//e.clientX 是鼠标现对于屏幕上角的位置
		//obj.offsetLeft是div相对于body上角位置
		var x=e.clientX-obj.offsetLeft;
		var y=e.clientY-obj.offsetTop;
		console.log(x+'-'+y);
		
		//添加移动事件		
		function whenMouseMove(e){
			e=e||window.evnet;
			obj.style.left=e.clientX-x+'px';
			obj.style.top=e.clientY-y+'px';	
		}
		document.addEventListener('mousemove',whenMouseMove,false);
		
		//解绑事件
		function whenMoveUP(e){
			document.removeEventListener('mousemove',whenMouseMove,false);
			document.removeEventListener('mouseup',whenMoveUP,false);
		obj.style.zIndex=obj.oIndex;
		obj.style.cursor='normal'
		}
		
		document.addEventListener('mouseup',whenMoveUP,false);
		
	},false);
}

//屏蔽右击事件

document.addEventListener('contextmenu',function(e){
	e=e||window.event;
	console.log('右击被屏蔽');
	if(e.preventDefault){
		e.preventDefault();
	}
	else{
		e.returnValue=false;
	}
},false)

bindEvent('div1');
bindEvent('div2');