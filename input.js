let jumpPressed = false;
let padIndex = null;

document.addEventListener("keydown", e => {
  if (e.code === "Space") jumpPressed = true;
  if (e.code === "Escape") pauseGame();
});

document.addEventListener("touchstart", () => jumpPressed = true);

window.addEventListener("gamepadconnected", e => {
  padIndex = e.gamepad.index;
});

function readGamepad() {
  if (padIndex === null) return;
  const gp = navigator.getGamepads()[padIndex];
  if (gp && gp.buttons[0].pressed) jumpPressed = true;
}
