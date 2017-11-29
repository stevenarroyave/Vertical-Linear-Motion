// Johan Steven Ospina Arroyave

let size = 50;
let x = 0;
let y = 0;
let speedX = 0;
let speedY = 0;


function setup() {
  createCanvas(400, 400);
  speedX = random (5);
  speedY = random (5);
}


function draw() {
  background(120);
  console.log(speedX);
  x = x + speedX;
  y = y + speedY;

  if (x > width){
    r = random(255);
    g = random(255);
    b = random(255);
    x = 0;
  }

  if (y > height){
    r = random(255);
    g = random(255);
    b = random(255);
    y = 0;
  }



  fill(255);
  ellipse(x, y, size, size)
}
