
var disappearElements = document.querySelectorAll(".disappear");

window.addEventListener("scroll", function() {
    if (window.scrollY > 20) {
        disappearElements.forEach(function(element) {
            element.style.opacity = "0";
        });
        document.getElementById("title").style.fontSize = "1.1rem";
        document.getElementById("press").style.height = "45px";
        document.getElementById("tool").style.transform = "translateY(-50px)";
        document.getElementById("black").style.height= "63px";
        document.getElementById("line").style.transform= "translateY(-47px)";
    } else {
        disappearElements.forEach(function(element) {
            element.style.opacity = "1";
        });
        document.getElementById("title").style.fontSize = "1.5rem";
        document.getElementById("press").style.height = "56px";
        document.getElementById("tool").style.transform = "translateY(0)";
        document.getElementById("black").style.height= "auto";
        document.getElementById("line").style.transform= "translateY(0)";

    }
});




