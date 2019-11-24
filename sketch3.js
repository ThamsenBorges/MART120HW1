class Obstacle {
    constructor(rgb, x, y, size, shapeCallback) {
        this.rgb = rgb;
        this.x = x;
        this.y = y;
        this.size = size;
        this.drawCallback = function () {
            fill.apply(null, this.rgb);
            shapeCallback(this.x, this.y, this.size);
        }
        this.move = function () {
            this.x = this.x + random(30) - random(30);
            this.y = this.y + random(30) - random(30);
            if (this.x > 800) {
                this.x = this.x - 800;
            } else if (this.x < 0) {
                this.x = this.x + 800;
            }
            if (this.y > 600) {
                this.y = this.y - 600;
            } else if (this.y < 0) {
                this.y = this.y + 600;
            }
        }
    }
}
    var obstacles;
    function setup() {
      createCanvas(800, 600);
      obstacles = [
        new Obstacle([23, 243, 203], 85, 73, 55, circle),
        new Obstacle([233, 233, 23], 42, 33, 55, square),
        new Obstacle([23, 3, 223], 95, 83, 25, circle),
        new Obstacle([33, 163, 153], 65, 43, 45, square),
        new Obstacle([133, 63, 123], 65, 63, 65, circle)
      ]
      noStroke()
    }
function draw() {
    background(100);
    player.drawCallback();
    player.move()
    for (var obstacle of obstacles) {
        obstacle.drawCallback();
        obstacle.move();
      }
    drawMousecircle();
    drawExit();
    checkForExit();
}
var player = {
    rgb: [255, 204, 0],
    x: 50,
    y: 50,
    diameter: 25,
    drawCallback: function () {
        fill.apply(null, player.rgb);
        circle(player.x, player.y, player.diameter);
    },
    move: function () {
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
        if (this.x > 800) {
            this.x = this.x - 800;
        } else if (this.x < 0) {
            this.x = this.x + 800;
        }
        if (this.y > 600) {
            this.y = this.y - 600;
        } else if (this.y < 0) {
            this.y = this.y + 600;
        }
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
function drawExit() {
    fill(255, 0, 0)
    rect(exit.x1, exit.y1, 50, 50)
    fill(0, 0, 0)
    textSize(12)
    text('Exit', 765, 580)
}