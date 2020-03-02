function changeText() {
    document.getElementById("textChange").innerHTML = "Like my page if you dare";
}

function allCaps() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

function changeText() {
    document.getElementById("textChange").innerHTML = "Don't  like my  page";
}
var space = " ";
var pos = 0;
var msg = "Subject 13666";

function Scroll() {
    document.title = msg.substring(pos, msg.length) + space + msg.substring(0, pos);

    pos++;
    if (pos > msg.length) pos = 0;
    window.setTimeout("Scroll()", 0);
}
Scroll();
