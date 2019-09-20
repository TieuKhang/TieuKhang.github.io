var x=0;
function traloi(butt,quest,dapan)
{
	document.getElementById(butt).onclick = function()
	{
		var pivot = document.getElementById(quest).value;
		if (pivot==dapan)
		{
			alert("Chính xác!");
			x++;
			document.getElementById(butt).style.display = "none";
		}
		else
		{
			alert("Không chính xác!");
			document.getElementById(butt).style.display = "none";
		}
	}
}
document.getElementById("mark").onclick = function()
{
	alert("Bạn được " + x + " điểm ");
}
traloi("click1","cau1","tray");
traloi("click2","cau2","kiu");
traloi("click3","cau3","eol");
traloi("click4","cau4","đớpbô diu");
traloi("click5","cau5","quai");
traloi("click6","cau6","diu");
traloi("click7","cau7","ti");
traloi("click8","cau8","cây");
traloi("click9","cau9","ai");
traloi("click10","cau10","ếch");
traloi("click11","cau11","giét");
traloi("click12","cau12","vi");
traloi("click13","cau13","or");
traloi("click14","cau14","és");
traloi("click15","cau15","Pi");
traloi("click16","cau16","Em");
traloi("click17","cau17","En");
traloi("click18","cau18","Ôu");
traloi("click19","cau19","Gi");
traloi("click20","cau20","éph");
traloi("click21","cau21","i");
traloi("click22","cau22","đi");
traloi("click23","cau23","bi");
traloi("click24","cau24","xi");
traloi("click25","cau25","ey");
traloi("click26","cau26","éx");
var stat=false;
document.getElementById("disalp").onclick = function()
{
	if (stat==false)
	{
		document.getElementById("alp").style.display= "none";
		document.getElementById("disalp").innerHTML = "Hiển thị";
		stat = true;
	}
	else
	{
		document.getElementById("alp").style.display= "block";
		document.getElementById("disalp").innerHTML = "Ẩn bớt";
		stat =false;
	}
}
traloi("bgt1","gt1","My name is ...")