let tree = [];
let counter = 0;
let frameR = 60;
let data = [];
let specie = 1;
let divider = 10;
let trigger = false;
let maxGen = 14;
let delay = 10;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(75);
	strokeWeight(3);
	stroke(150, 210, 90);
	frameRate(frameR);
	createData();
	let rootStart = new createVector(width / 2, height);
	let rootEnd = new createVector(width / 2, height - 200); //-500 (Pi/2)
	let root = new Branch(rootStart, rootEnd, tree, 0);
	line(rootStart.x, rootStart.y, rootEnd.x, rootEnd.y);
	tree[0] = root;
	tree[0].nextGen();
}

function draw() {
	if (trigger) {
		(function myLoop(i) {
			setTimeout(function () {
				if (!tree[i].finished) {
					//background(75);
					tree[i].show();
				}
				i--;
				if (i >= 0) myLoop(i);
			}, delay)
		})(tree.length - 1);
	}
}

function mousePressed() {
	trigger = !trigger;
}

function createData() {
	data[0] = createVector(0.5, 0.5);
	data[1] = createVector(0.75, 0.75);
	data[2] = createVector(0.25, 0.75);
}