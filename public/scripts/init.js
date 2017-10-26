function setPos() {
  var px = document.getElementById("hidPosX"), py = document.getElementById("hidPosY");
  px.value = sessPosX;py.value = sessPosY;
}
if (sessPosX && sessPosY) {
  setPos();
}