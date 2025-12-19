const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let running = false;

function startGame() {
  document.getElementById("titleScreen").style.display = "none";
  boss.active = true;
  running = true;
}

function loop() {
  if (!running || paused) return requestAnimationFrame(loop);

  readGamepad();
  updatePlayer();
  updateBoss();

  ctx.clearRect(0,0,420,230);

  ctx.fillStyle = "#00f2ff";
  ctx.fillRect(0,175,420,55);

  drawPlayer(ctx, 60, player.y);
  if (boss.active) drawBoss(ctx, boss.x, boss.y);

  requestAnimationFrame(loop);
}

loop();
