let font;
let points = [];
const msg = "Scheduler";
let size = 3;
let r = 10;
let angle = 0;
let t = 0;

function preload() {
  font = loadFont("/fonts/orange-avenue-demo.regular.otf");
}

function buildPoints() {
  points = font.textToPoints(msg, 0, 0, size, {
    sampleFactor: 0.4,
    simplifyThreshold: 0.0,
  });
}

function setup() {
  createCanvas(windowWidth, 150);
  size = Math.min(180, Math.max(110, windowWidth * 0.02));
  buildPoints();
  angleMode(DEGREES);
}

function draw() {
  clear();
  const x = r * cos(angle);
  const y = r * sin(angle);

  let bounds = font.textBounds(msg, 0, 0, size);
  let cx = width / 2 - bounds.w / 2;

  const stripePaddingY = 16;
  const stripeTop = 120 + bounds.y - stripePaddingY;
  const stripeHeight = bounds.h + stripePaddingY * 2;
  noStroke();
  fill(255);
  rect(0, stripeTop, width, stripeHeight);

  stroke(123, 119, 112);
  strokeWeight(1.2);

  translate(cx, 120); 
  for (let i = 0; i < points.length; i++) {
    line(points[i].x, points[i].y, points[i].x + x, points[i].y + y);
  }

  fill(190, 60);
  textSize(size);
  textFont(font);
  text(msg, x, y);

  const increment = 7 * sin(t);
  t++;
  angle += increment;
}

function windowResized() {
  resizeCanvas(windowWidth, 150);
  size = Math.min(180, Math.max(110, windowWidth * 0.02));
  buildPoints();
}
