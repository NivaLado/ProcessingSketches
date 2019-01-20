let tree = [];
let counter = 0;
let frameR = 45;
let data = [];
let specie = 1;
let divider = 10;
let trigger = false;
let maxGen = 15;

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
	tree[0] = root;
}

function draw() {
	if (trigger) {
		for (let i = tree.length - 1; i >= 0; i--) {
			if (!tree[i].finished) {
				tree[i].nextGen();
			}
		}
	}
}

function mousePressed() {
	//background(75);
	trigger = !trigger;
	for (let i = tree.length - 1; i >= 0; i--) {
		if (!tree[i].finished) {
			tree[i].nextGen();
		}
	}
}

function createData() {
	data[0] = createVector(0.5, 0.5);
	data[1] = createVector(0.75, 0.75);
	data[2] = createVector(0.25, 0.75);
}