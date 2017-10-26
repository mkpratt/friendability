var ww = window.innerWidth;
var wh = window.innerHeight;
// Get new height if window size changes
window.onresize = function(event) {
    ww = window.innerWidth
    wh = window.innerHeight;
};
// Control perspective based on mouse position
var mx, my, midX, midY, posX, posY, mt, ms, mi, o;
document.addEventListener("mousemove", function updateMousePosition(ev) {
    var px = document.getElementById("hidPosX"), py = document.getElementById("hidPosY");
    mx = ev.clientX; my = ev.clientY;
    midX = ww/2; midY = wh/2;
    if (mx < midX) posX = -(midX-mx); else posX = mx-midX;
    if (my < midY) posY = -(midY-my); else posY = my-midY;
    px.value = posX;py.value = posY;
    var absPer = 1 - Math.abs(posX)/midX;
    o = absPer + 0.4;
    mt = document.getElementById("mt"); ms = document.getElementById("ms"); mi = document.getElementById("mi");
    mt.style.transform = "translate(" + -(px.value * .032) + "px, " + -(py.value * .016) + "px)";
    ms.style.transform = "translate(" + -(px.value * .064) + "px, " + -(py.value * .032) + "px)";
    ms.style.textShadow = "0px 5px 18px rgba(150, 150, 150, " + 0.45 * o + ")";
    mi.style.transform = "translate(" + (px.value * .032) + "px," + (py.value * .016) + "px)";
});