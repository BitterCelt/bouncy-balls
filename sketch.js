var ball = [];
var i = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  noCursor();
  for(var i = 0; i < 50; i++) {
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
  if (i > 49) {
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
      this.posY = 30;
      this.speedY = -this.speedY;
    }

    if (this.posY + 30 > height) {
      this.posY = height - 30;
      this.speedY = -this.speedY + 20;
      if (this.speedX > 0.2) {
        this.speedX -= 0.2;
      } else if (this.speedX < -0.2) {
        this.speedX += 0.2;
      } else {
        this.speedX = 0;
      }
    }

    if (this.posX - 30 < 0) {
      this.posX = 30;
      this.speedX = -this.speedX;
    }

    if (this.posX + 30 > width) {
      this.posX = width - 30;
      this.speedX = -this.speedX;
    }

  }

  this.make = function() {
    fill(this.c);
    strokeWeight(4);
    ellipse(this.posX, this.posY, 60, 60);
  }
}
