var kCount = 4;

function reset_col(elim) {
    for (var i = 1; i <= kCount; ++i) {
        var name = "le" + i.toString();
        document.getElementById(name).style.backgroundColor = "#565d69"
    }
    document.getElementById(elim).style.backgroundColor = "#43454a"
}

document.getElementById("le1").onclick = function()
{
    document.getElementById("frmshow").src = "lesson1/lesson1.html";
    reset_col("le1");
}

document.getElementById("le2").onclick = function()
{
    document.getElementById("frmshow").src = "lesson2/lesson2.html";
    reset_col("le2");
}
document.getElementById("le3").onclick = function()
{
    document.getElementById("frmshow").src = "lesson3/lesson3.html";
	reset_col("le3");
}
document.getElementById("le4").onclick = function()
{
    document.getElementById("frmshow").src = "lesson4/lesson4.html";
	reset_col("le4");
}
