var img, ww, wh, constraint;
window.onresize = function(event) {
    resizeMainImage();
}
function resizeMainImage () {
    ww = window.innerWidth
    wh = window.innerHeight;
    if (ww <= wh) {
        constraint = ww * .5;
    } else {
        constraint = wh * .5;
    }
    img = document.getElementById("mi");
    img.style.width = constraint + "px";
    img.style.height = constraint + "px";
}
if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    resizeMainImage();
} else {
    document.addEventListener('DOMContentLoaded', resizeMainImage);
}