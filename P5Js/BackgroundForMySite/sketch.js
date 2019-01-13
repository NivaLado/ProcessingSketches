let img;
let img2;
let img3;
let img4;
let resolution = 2000;
let bubleCounter = -1 * resolution / 2;
let bubles = [];

function preload() {
  mainBackground = loadImage("gris.jpg");
  img = loadImage("gris5.png");
}

function setup() {
  noStroke();
  background(70);
  createCanvas(img.width, img.height);
  for (let i = 0; i < resolution; ++i) {
    bubles.push(new Bubble(i, resolution));
  }
  img.loadPixels();
  //image(mainBackground, 0, 0);
}

function draw() {
  //background(70);
  if (frameCount > 0) {
    for (let i = 0; i < bubles.length; ++i) {
      bubles[i].ascend();
      bubles[i].display();
      bubles[i].bounceY();
    }
  }
}