var ball = [];
var i = 0;


function setup() {
  createCanvas(windowWidth,windowHeight);

  noCursor();

  for(var i = 0; i < 25; i++) {
    ball[i] = new bouncer();
  }

}

function draw() {
  background(100);
  for(var i = 0; i < ball.length; i++) {
    ball[i].bounce();
    ball[i].make();
  }
  if (mouseIsPressed) {
    strokeWeight(1);
    noFill();
    ellipse(mouseX, mouseY, 60, 60);
  }
  line(mouseX-5,mouseY,mouseX+5,mouseY);
  line(mouseX,mouseY+5,mouseX,mouseY-5);
}

function mouseReleased(){
  if (i > 24) {
    i = 0;
  }
  ball[i].posX = mouseX;
  ball[i].posY = mouseY;
  ball[i].speedY = mouseY - pmouseY;
  ball[i].speedX = mouseX - pmouseX;
  i++;

}

function bouncer() {
  this.posX;
  this.posY;
  this.speedX;
  this.speedY;
  this.gravity = 1;
  this.c = color(random(255), random(255), random(255));

  this.bounce = function() {

    this.posX += this.speedX;
    this.speedY += this.gravity;
    this.posY += this.speedY;

    if (this.posY - 30 < 0) {
      this.speedY = -this.speedY;
    }

    if (this.posY + 30 > height) {
      this.speedY = -this.speedY;
    }

    if (this.posX - 30 < 0) {
      this.speedX = -this.speedX;
    }

    if (this.posX + 30 > width) {
      this.speedX = -this.speedX;
    }

  }

  this.make = function() {
    fill(this.c);
    strokeWeight(4);
    ellipse(this.posX, this.posY, 60, 60);
  }
}
