let player = {
  y: 150,
  vy: 0,
  grounded: true
};

function updatePlayer() {
  if (jumpPressed && player.grounded) {
    player.vy = -7;
    player.grounded = false;
  }
  jumpPressed = false;

  player.vy += 0.4;
  player.y += player.vy;

  if (player.y >= 150) {
    player.y = 150;
    player.vy = 0;
    player.grounded = true;
  }
}
