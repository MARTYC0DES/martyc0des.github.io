//Martin A. Dominguez CSC196W
function getBigger()
{
    document.getElementById("text").style.fontSize = "24pt";
}

function getFancy()
{
    document.getElementById("boring").checked  = false; 
    document.getElementById("textarea").style.fontWeight = "bold";
    document.getElementById("textarea").style.color = "#0000FF";
    document.getElementById("textarea").style.textDecoration = "underline";
}

function getBoring()
{
    document.getElementById("fancy").checked  = false; 
    document.getElementById("textarea").style.fontWeight = "normal";
    document.getElementById("textarea").style.color = "#000000";
    document.getElementById("textarea").style.textDecoration = "none";
    document.getElementById("textarea").style.fontSize = "10pt";
}


function moo() {  
    let moo = document.getElementById("textarea");
    moo.style.textTransform = "uppercase";
    let parts = moo.value.split(".");
    moo.value = parts.join("-Moo");
}
