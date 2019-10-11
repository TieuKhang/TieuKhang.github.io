document.getElementById("btntoggle").onclick = function() {
    if (document.getElementById("sidebar").style.marginLeft == "-300px") {
        document.getElementById("sidebar").style.marginLeft = "0px";
    } else {
        document.getElementById("sidebar").style.marginLeft = "-300px";
    }
    if (document.getElementById("content").style.paddingLeft == "10px") {
        document.getElementById("content").style.paddingLeft = "310px";
    } else {
        document.getElementById("content").style.paddingLeft = "10px";
    }
}

function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "index.xml" , true);
  xmlhttp.send();
}

function myFunction(xml) {
  var x, i, xmlDoc, table;
  xmlDoc = xml.responseXML;
  x = xmlDoc.getElementsByTagName("index");
  for (i = 0; i < x.length; i++) { 
    var name = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    var url = x[i].getElementsByTagName("url")[0].childNodes[0].nodeValue;
    alert(name + " " + url);
  }
}