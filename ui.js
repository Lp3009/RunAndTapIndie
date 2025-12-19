let paused = false;
let soundOn = Save.load("sound", true);

function pauseGame() {
  paused = true;
  document.getElementById("pauseMenu").classList.remove("hidden");
}

function resumeGame() {
  paused = false;
  document.getElementById("pauseMenu").classList.add("hidden");
}

function toggleSettings() {
  document.getElementById("settings").classList.toggle("hidden");
}

function toggleSound() {
  soundOn = !soundOn;
  Save.save("sound", soundOn);
}
