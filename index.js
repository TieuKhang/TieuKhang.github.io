document.getElementById("btntoggle").onclick = function() {
    if (document.getElementById("sidebar").style.marginLeft == "-270px") {
        document.getElementById("sidebar").style.marginLeft = "0px";
    } else {
        document.getElementById("sidebar").style.marginLeft = "-270px";
    }
    if (document.getElementById("content").style.paddingLeft == "10px") {
        document.getElementById("content").style.paddingLeft = "280px";
    } else {
        document.getElementById("content").style.paddingLeft = "10px";
    }
}

var text, parser, xmlDoc;
text = "<index>" +
"<lesson>" +
"<title>Bảng chữ cái</title>" +
"<url>https://www.google.com/</url>" +
"<url>#</url>" +
"<url>https://tieukhang.github.io/lesson1/lesson1.html</url>" +
"</lesson>" +
"<lesson>" +
"<title>Giao tiếp cơ bản</title>" +
"<url>#</url>" +
"</lesson>" +
"<lesson>" +
"<title>Từ vựng cơ bản</title>" +
"<url>#</url>" +
"</lesson>" +
"<lesson>" +
"<title>Động từ - Tính từ cơ bản</title>" +
"<url>#</url>" +
"</lesson>" +
"</index>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(text, "text/xml");
var n = xmlDoc.getElementsByTagName("title").length;
for (var i = 0; i < n; ++i) {
    var title = xmlDoc.getElementsByTagName("title")[i].childNodes[0].nodeValue;
    var url = xmlDoc.getElementsByTagName("url")[i].childNodes[0].nodeValue;
    var ul = document.getElementById("lessonList");
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.setAttribute("href", url);
    a.appendChild(document.createTextNode(title));
    li.appendChild(a);
    ul.appendChild(li);
}