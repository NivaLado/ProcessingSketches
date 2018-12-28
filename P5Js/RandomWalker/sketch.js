let walker = [];
let img;
let color;
let loc;

function preload() {
  img = loadImage("orange_tree.jpg");
}

function setup() {
  img.resize(img.width/2, img.height/2);
  createCanvas(img.width, img.height);
  background(70);
  noStroke();

  for (let i = 0; i < 20; i++) {
    walker.push( new Walker(random(width), random(height)));
  }

  img.loadPixels();
}

function draw() {
  for(item of walker) {
    item.step();
    item.render();
  }
}