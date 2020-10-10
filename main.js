var area1 = document.getElementById('data1').value;
var vv = area1.split('');
for (i = 0; i < area1.length; i++) {
    document.getElementById('input11').innerHTML += "<span id='now" + i + "'>" + vv[i] + "</span>"
}
index = 0;
credit = document.getElementById("body").childNodes[1]
if (credit == "[object HTMLHeadingElement]") {
    if (credit.textContent !== "Code By Ravi") {
        var newItem = document.createElement("h2");
        var textnode = document.createTextNode("Code By Ravi");
        newItem.appendChild(textnode);
        var list = document.getElementById("body");
        list.insertBefore(newItem, list.childNodes[0]);
        
    }
}
function valuematch2(event) {
    if (event.keyCode !== 9) {
        if (event.keyCode == 8 || event.keyCode == 16 || event.keyCode == 91 || event.keyCode == 18 || event.keyCode == 17) {
            if (event.keyCode == 8) {
                if (document.getElementById("textarea").value == "") {
                    var child = document.getElementById("input11").childNodes
                    for (j = 0; j < child.length; j++) {
                        child[j].style.background = "#ff7f50";
                        index = 0
                    }
                } else {
                    index = document.getElementById("textarea").value.length
                    document.getElementById("now" + index).nextSibling.style.background = "#ff7f50"
                    document.getElementById("now" + index).style.background = "yellow"
                }
            }
        } else {
            var area2 = document.getElementById("textarea").value
            area2 = area2.split("")
            if (vv[index] == area2[index]) {
                document.getElementById('now' + index).style.background = "#b7b7a4";
            } else {
                document.getElementById('now' + index).style.background = "red";
            }
            index++
            document.getElementById('now' + index).style.background = "yellow";
        }
    }
}