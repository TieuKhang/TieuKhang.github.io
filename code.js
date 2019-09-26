var kCount = 2;

function reset_col(elim) {
    for (var i = 1; i < kCount + 1; ++i) {
        var name = "le" + i.toString();
        document.getElementById(name).style.backgroundColor = "#565d69"
    }
    document.getElementById(elim).style.backgroundColor = "#43454a"
}

document.getElementById("le1").onclick = function()
{
    document.getElementById("frmshow").src = "lesson1.html";
    reset_col("le1");
}

document.getElementById("le2").onclick = function()
{
    document.getElementById("frmshow").src = "lesson2.html";
    reset_col("le2");
}
