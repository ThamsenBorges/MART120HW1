function setup() {
  createCanvas(800, 600);
  entities = [player, obs1, obs2]
  noStroke()
}
function draw() {
  background(100);
  //Draw PLAYER
  fill(player.red, player.green, player.blue);
  circle(player.x, player.y, player.diameter);
  //Draw first obstacle: Circle
  fill(obs1.red, obs1.green, obs1.blue);
  circle(obs1.x, obs1.y, obs1.diameter);
  obs1.x = obs1.x + random(30);
  obs1.x = obs1.x - random(30);
  obs1.y = obs1.y + random(30);
  obs1.y = obs1.y - random(30);
  //Draw second obstacle:
  fill(obs2.red, obs2.green, obs2.blue);
  square(obs2.x, obs2.y, obs2.size);
  obs2.x = obs2.x + random(30);
  obs2.x = obs2.x - random(30);
  obs2.y = obs2.y + random(30);
  obs2.y = obs2.y - random(30);
  fill(50, 86, 10)
  circle(mousex, mousey, 30);
  fill(255, 0, 0)
  rect(exit.x1, exit.y1, 50, 50)
  fill(0,0,0)
  textSize(12)
  text('Exit',765,580)
  for (var entity of entities) {
      checkEdges(entity);
  }


  if (keyIsDown(83)) {
      player.y += 10;
  }
  else if (keyIsDown(87)) {
      player.y -= 10;
  }
  if (keyIsDown(65)) {
      player.x -= 10;
  }
  else if (keyIsDown(68)) {
      player.x += 10;
  }
  checkForExit();
}

var player = {
  red: 255, green: 204, blue: 0,
  x: 50,
  y: 50,
  diameter: 25
}

var obs1 = {
  red: 165, green: 33, blue: 233,
  x: 83,
  y: 76,
  diameter: 62
}

var obs2 = {
  red: 65, green: 42, blue: 233,
  x: 46,
  y: 98,
  size: 90
}

function checkEdges(entity) {
  if (entity.x > 800) {
      entity.x = entity.x - 800;
  } else if (entity.x < 0) {
      entity.x = entity.x + 800;
  }
  if (entity.y > 600) {
      entity.y = entity.y - 600;
  } else if (entity.y < 0) {
      entity.y = entity.y + 600;
  }
}
var mousex = 0;
var mousey = 0;
function mousePressed() {
  mousex = mouseX;
  mousey = mouseY;
}
var exit = {
  x1: 750,
  y1: 550,
  x2: 800,
  y2: 600
}
function checkForExit() {
  if (player.x < exit.x2 && player.x > exit.x1 && player.y < exit.y2 && player.y > exit.y1) {
      fill(255, 0, 0);
      rect(0, 0, 800, 600);
      fill(0, 0, 0);
      textSize(72);
      text('YOU WIN!', 200, 300);
  }
}