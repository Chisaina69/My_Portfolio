var tilelinks = document.getElementsByClassName("tile-links");
var contents = document.getElementsByClassName("content");
function opentab(tabName) {
    var i, content;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

