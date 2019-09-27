document.getElementById("triangle").style.display="none";
color=["red","blue","yellow","green","orange","pink","brown","black","white","purple","grey"];
shape=["circle","triangle","rectangle","square"];
shapeid=["#circle","#triangle","#rectangle","#square"];
num=[1,2,3,4,5,6,7,8,9,10];
numwo=["one","two","three","four","five","six","seven","eight","nine","ten"];
var c,s,n;
var pivot;
function makeShapeAppear(sh,shid,co,nu)
{
	document.getElementById(sh).style.backgroundColor=co;
	document.getElementById(sh).style.display="block";
	for (var i=0;i<nu-1;++i)
	{
		$(shid).clone().insertAfter(shid);
	}
}
function setRandom()
{
	c = Math.floor(Math.random() * 11);
	s = Math.floor(Math.random() * 4);
	n = Math.floor(Math.random() * 10);
	makeShapeAppear(shape[s],shapeid[s],color[c],num[n]);
	pivot=shapeid[s];
	console.log(shape[s]);
	console.log(color[c]);
	console.log(num[n]);
}
function afterAppear()
{
	document.getElementById("ans").onclick = function()
	{
		var x,y,z;
		x = document.getElementById("shapee").value;
		y = document.getElementById("coloree").value;
		z = document.getElementById("numberee").value;
		console.log(pivot);
		if (x==shape[s] && y==color[c] && z==numwo[n])
		{
			alert("Chính xác!");
		}
		else
		{
			alert("Ko chính xác!");
		}
		for (var i=0;i<num[n]-1;++i)
		{
			$(pivot).remove();
		}
		document.getElementById(shape[s]).style.display="none";
		setTimeout(setRandom(), Math.random() * 2000);
	}
}
setRandom();
afterAppear();
