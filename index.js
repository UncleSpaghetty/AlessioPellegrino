function navigation() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function mousein() {
    var x = document.getElementById("instalogo");
    var y = document.getElementById("alex");

    if (x.className === "instalogo") {
        x.className += " responsive";
    } else {
        x.className = "instalogo";
    }
    if (y.className === "alex") {
        y.className += " responsive";
    } else {
        y.className = "alex";
    }
    x.style.animationPlayState = "paused";
    y.style.animationPlayState = "paused";
    y.style.filter = "blur(4px)";
}

function mouseout() {
    var x = document.getElementById("instalogo");
    var y = document.getElementById("alex");
    
    if (x.className === "responsive") {
        x.className -= " responsive";
    } else {
        x.className = "instalogo";
    }
    if (y.className === "responsive") {
        y.className -= " responsive";
    } else {
        y.className = "alex";
    }
    x.style.animationPlayState="running";
    y.style.animationPlayState="running";
    y.style.filter="blur(0)";
}

function navbutton(){
    var x = document.getElementById("above");
    x.style.transform="scale(1)";
    x.style.transition="0.5s ease-in";
    x = document.getElementById("abovelink");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
    }else{
        x.style.visibility = "visible";
    }
}

function navbtn(){
    var x = document.getElementById("above");
    x.style.transform = "scale(0)";
    x = document.getElementById("abovelink");
    x.style.visibility="hidden";
}