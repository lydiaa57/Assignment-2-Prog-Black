function setup() {
  const canvas = createCanvas(520, 260);
  canvas.parent('eyes-container');
  colorMode(HSB);
  angleMode(DEGREES);
}

function draw() {
  clear();

  // Draws the left eye
  let leftX = 180;
  let leftY = 145;

  let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

  push();
  translate(leftX, leftY);
  fill(255);
  ellipse(0, 0, 90, 90);

  //added eyelashes 
  stroke(0);
  strokeWeight(3);
  line(-25, -42, -34, -58);
  line(0, -42, 0, -58);
  line(25, -42, 34, -58);

  noStroke();
  rotate(leftAngle);
  fill(0);
  ellipse(22, 0, 44, 44);
  pop();

  // Draw the right eye
  let rightX = 340;
  let rightY = 145;

  let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

  push();
  translate(rightX, rightY);
  fill(255);
  ellipse(0, 0, 90, 90);

  // right lashes
  stroke(0);
  strokeWeight(3);
  line(-25, -42, -34, -58);
  line(0, -42, 0, -58);
  line(25, -42, 34, -58);

  noStroke();
  rotate(rightAngle);
  fill(0);
  ellipse(22, 0, 44, 44);
  pop();
}