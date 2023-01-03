var opacity = 0;
var intervalID = 0;
window.onload = fadeIn;

function fadeIn() {
    setInterval(show, 20);
}

function show() {
    var body = document.getElementById("section1");
    opacity = Number(window.getComputedStyle(body)
                     .getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + .01;
        body.style.opacity = opacity
    } else {
        clearInterval(intervalID);
    }
}