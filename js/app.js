
function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName('block1'));
}

function identifyByTag() {
    console.log(document.getElementsByTagName('p'));
}

function changeBackground() {
    document.getElementById('block1').style.backgroundColor="blue";
}

function increaseFont() {
    document.getElementById('block2').style.fontSize = "30px";
}

function changeFontColor() {
    document.getElementById('block3').style.color = "blue";
}

function revertColor() {
    document.getElementById('block3').style.color = "black";
}

function hide() {
    document.getElementById('block4').style.display = "none";
}

function changeBackColorForAllBox() {
    var x = document.getElementById("mydiv");
    var y = x.getElementsByClassName('box1');
    var i;
    for (i=0;i<y.length;i++)
        document.getElementsByClassName("box1")[i].style.backgroundColor = "green";    
}
function changeBackColor(blue,box2) {
    document.getElementsByClassName(box2).style.backgroundColor = blue;
}

function isNumber(event) {
    var input = (event.which) ? event.which : event.input;
    if (input != 46 && input > 31 && (input < 48 || input > 57))
        return false;
    return true;
}

function addAdjacent() {
    var para3 = document.createElement("P");
    var paratext = document.createTextNode("I got generated on the fly...");
    para3.appendChild(paratext);
    document.getElementById("para2").appendChild(para3);
}

function removePara() {
    var parent = document.getElementById("parent");
    var child = document.getElementById("para4");
    parent.removeChild(child);
}

function animatePara() {
    document.getElementById("box5").style.left="200px";
    document.getElementById("box5").style.right="200px";
}

function myFunction() {
    var x = document.getElementById("inputBox1");
    var y = document.getElementById("inputBox2");
    y.value = x.value.toUpperCase();
}
function myFunction2() {
    var x = document.getElementById("inputBox1");
    x.value = x.value.toCamelCase();
}
