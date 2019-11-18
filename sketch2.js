function setup() {
  createCanvas(800, 600);
  entities = [player, obs1, obs2]
  noStroke()
}
function drawObstacle(obstacle, shapeCallback) {
  fill(obstacle.red, obstacle.green, obstacle.blue);
  shapeCallback(obstacle.x, obstacle.y, obstacle.size);
  obstacle.x = obstacle.x + random(30);
  obstacle.x = obstacle.x - random(30);
  obstacle.y = obstacle.y + random(30);
  obstacle.y = obstacle.y - random(30);
}
function draw() {
  background(100);
  //Draw PLAYER
  drawPlayer();
  //Draw first obstacle: Circle
  drawObstacle(obs1, circle);
  //Draw second obstacle: Square
  drawObstacle(obs2, square);
  drawMousecircle();
  drawExit();

  for (var entity of entities) {

    checkEdges(entity);
  }


  moveplayer()
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
  size: 62
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
function drawMousecircle() {
  fill(50, 86, 10);
  circle(mousex, mousey, 30);
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
function drawPlayer() {
  fill(player.red, player.green, player.blue);
  circle(player.x, player.y, player.diameter)

}

function moveplayer() {
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
}
  function drawExit() {
    fill(255, 0, 0)
    rect(exit.x1, exit.y1, 50, 50)
    fill(0, 0, 0)
    textSize(12)
    text('Exit', 765, 580)
  }