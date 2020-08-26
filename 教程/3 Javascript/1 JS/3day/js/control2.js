//5000 以内  去两个数 相除  余5 的书
var count=0;
for(var i=0;i<=5000;i++)
{
	if(count>10)
	{
		break;
	}
	else if(i%(i-5)==5)
	{
		document.write(i+"%"+(i-5)+"=5 <br/>");
		count++;
	}
	
}