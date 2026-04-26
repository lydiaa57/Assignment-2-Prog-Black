let balls = []; let num = 10;

function setup() {
  createCanvas(700, 400);
  
  for (let i=0; i<num; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(200, 400);
    balls[i] = new Circle(x, y, r);
  }
  
}

function draw() {
  background(255);
  
  for (let i=0; i<num; i++) {
    balls[i].update();
    balls[i].display();
  }
  
}