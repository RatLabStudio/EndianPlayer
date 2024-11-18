const game = document.getElementById("game");

function fullscreen() {
  if (!game.classList.contains("fullscreenEnabled")) game.classList.add("fullscreenEnabled");
  else game.classList.remove("fullscreenEnabled");
}
window.fullscreen = fullscreen;
