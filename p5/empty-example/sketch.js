var ellipseX = 100;
var ellipseY = 200;

function setup() {
  // Canvas the canvas
  createCanvas(displayWidth,displayHeight);
  background('Grey');

  // Draw static text
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("Click to change the circle's color!" , width / 2, 50);
}

function draw() {
  // Fill Color
  fill(20, 20, 100);

  if(mouseIsPressed){
    ellipse(mouseX,mouseY, 150, 75);
  }
else {
  line(mouseX,mouseY,100,100);
 }

}