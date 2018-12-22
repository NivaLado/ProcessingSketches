let points = [];
let current;
let previous;
let scale = 0;
let counter = 0;
let trigger = 1;
let inverse = 1;
let gifLength = 1200;
let canvas;
const corners = 3;

function setup() {
  var p5canvas = createCanvas(windowWidth / 2.8, windowHeight / 1.4);
  canvas = p5canvas.canvas;
  strokeWeight(2);
  background(70);
  init();
  capturer.start();
}

function draw() {
  //background(50);
  if (trigger > 3) {
    //Translates whole space Around its center
    //Center        Rotation                Scale factor
    translate(
      width * 0.5 + cos(frameCount * 0.016) * scale,
      height * 0.5 + sin(frameCount * 0.016) * -scale //Remove/Add - for diff efect
    );
    if (inverse == 1)
      scale = lerp(scale, 200, 0.01);
    if (inverse == -1)
      scale = lerp(scale, -200, 0.01);

    strokeWeight(((sin(frameCount * 0.1) + 1) * 0.33) * 40);
  }
  else
    translate(width * 0.5, height * 0.5);

  if (trigger > 2)
    rotate(radians(frameCount) * 1);

  for (let i = 0; i < 100; i++) {
    render();
  }

  if (frameCount < gifLength)
    capturer.capture(canvas);
  else {
    capturer.stop();
    capturer.save();
  }

}

function init() {
  translate(width / 2, height / 2);
  current = createVector(random(width), random(height));

  //Point on circumference
  for (let i = 0; i < corners; i++) {
    let angle = i * TWO_PI / corners;
    let vectorFromAngle = p5.Vector.fromAngle(angle);
    vectorFromAngle.mult(height / 3);
    points.push(vectorFromAngle);
  }

  //Random Points
  // for (let i = 0; i < corners; i++) {
  // 	let randomVector = createVector(random(-width/2,width/2),random(-height/2,height/2));
  // 	points.push(randomVector);
  // }

  stroke(255, 255);
  for (let item of points) {
    point(item.x, item.y);
  }
}

function mousePressed() {
  trigger++;
  inverse *= -1;
}

function render() {
  let next = random(points);
  if (previous != next && trigger > 1) {
    //if(trigger > 1) {
    current.x = lerp(current.x, next.x, 0.5);
    current.y = lerp(current.y, next.y, 0.5);
    if (counter > 50)
      point(current.x, current.y);

    counter++;
    let r = map(cos(frameCount / 60), -1, 1, 40, 255);
    let g = map(sin(frameCount / 60), -1, 1, 70, 255);
    let b = map(sin(frameCount / 50), -1, 1, 10, 95);
    stroke(r, g, b, 150);
  }
  previous = next;
}