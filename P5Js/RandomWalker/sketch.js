let walker = [];
let img;
let color;
let loc;

let prevX, prevY = 0;

function preload() {
  img = loadImage("orange_tree.jpg");
}

function setup() {
  img.resize(img.width/2, img.height/2);
  createCanvas(img.width, img.height);
  background(70);
  noStroke();

  for (let i = 0; i < 1; i++) {
    walker.push( new Walker(random(width), random(height)));
  }

  img.loadPixels();
}

function draw() {
  if(mouseX != prevX || mouseY != prevY)
  {
    if(walker.length < 10)
      walker.unshift(new Walker(mouseX, mouseY));
    else
      walker.pop();
  }

  for(item of walker) {
    item.step();
    item.render();
  }

  prevX = mouseX;
  prevY = mouseY;
}