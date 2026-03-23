// Controles mobile
document.getElementById("left").ontouchstart = () => keys["ArrowLeft"] = true;
document.getElementById("left").ontouchend = () => keys["ArrowLeft"] = false;

document.getElementById("right").ontouchstart = () => keys["ArrowRight"] = true;
document.getElementById("right").ontouchend = () => keys["ArrowRight"] = false;

document.getElementById("jump").ontouchstart = () => keys[" "] = true;
document.getElementById("jump").ontouchend = () => keys[" "] = false;
