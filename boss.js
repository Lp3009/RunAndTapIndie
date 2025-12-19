let boss = {
  active: false,
  hp: 100,
  x: 320,
  y: 110,
  dir: 1
};

function updateBoss() {
  if (!boss.active) return;

  boss.y += boss.dir * 1.5;
  if (boss.y < 80 || boss.y > 140) boss.dir *= -1;

  boss.hp -= 0.3;
  if (boss.hp <= 0) boss.active = false;
}
