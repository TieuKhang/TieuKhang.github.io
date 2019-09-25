var x=0;
function traloi(butt,quest,dapan)
{
	document.getElementById(butt).onclick = function()
	{
		var pivot="";
		pivot = document.getElementById(quest).value;
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

function grading(mbt)
{
	document.getElementById(mbt).onclick = function()
	{
		alert("Bạn được " + x + " điểm ");
	}
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
grading("mark");
function dpb(db,idb)
{
    var stat=false;
    document.getElementById(db).onclick = function()
    {
    	if (stat===false)
    	{
    		document.getElementById(idb).style.display= "none";
    		document.getElementById(db).innerHTML = "Hiển thị";
    		stat = true;
    	}
    	else
    	{
    		document.getElementById(idb).style.display= "block";
    		document.getElementById(db).innerHTML = "Ẩn bớt";
    		stat =false;
    	}
    }
}
dpb("disalp","alp");
dpb("dissein","sein");

// traloi("bgt1","gt1","My name is Nam");
// traloi("bgt2","gt2","I am 10 years old");
// traloi("bgt3","gt3","I am from Viet Nam");
// traloi("bgt4","gt4","How are you?");
// traloi("bgt5","gt5","What's your name?");
// traloi("bgt6","gt6","Where are you from?");
// traloi("bgt7","gt7","How old are you?");
// grading("intmark");

document.getElementById("bgt1").onclick = function()
{
	var pivot="";
	pivot = document.getElementById("gt1").value;
	if (pivot=="My name is Nam")
	{
		alert("Chính xác!");
		// document.getElementById().style.display = "none";
	}
	else
	{
		alert("Không chính xác!");
		document.getElementById(butt).style.display = "none";
	}
}
