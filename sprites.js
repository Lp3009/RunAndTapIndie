function drawPlayer(ctx, x, y) {
  ctx.shadowBlur = 10;
  ctx.shadowColor = "#ff00ff";
  ctx.fillStyle = "#ff00ff";
  ctx.fillRect(x, y, 18, 18);
  ctx.shadowBlur = 0;
}

function drawBoss(ctx, x, y) {
  ctx.shadowBlur = 12;
  ctx.shadowColor = "#ff0033";
  ctx.fillStyle = "#ff0033";
  ctx.fillRect(x, y, 40, 40);
  ctx.shadowBlur = 0;
}
