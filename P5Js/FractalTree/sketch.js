let tree = [];
let counter = 0;
let frameR = 60;
let data = [];
let specie = 1;
let divider = 10;
let trigger = false;
let maxGen = 0;
let delay = 5;
let notBorn = true;
let ready = false;
let root;
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(75);
	strokeWeight(3);
	stroke(150, 210, 90);
	frameRate(frameR);
	createData();

	let rootStart = new createVector(width / 2, height);
	let rootEnd = new createVector(width / 2, height - 200); //-500 (Pi/2)
	root = new Branch(rootStart, rootEnd, 0);
	tree[0] = root;
	//line(rootStart.x, rootStart.y, rootEnd.x, rootEnd.y);
}

function draw() {
	if (notBorn) {
		if (maxGen <= 15) {
			for (var i = tree.length - 1; i >= 0; i--) {
				if (!tree[i].finished) {
					tree.push(tree[i].r());
					tree.push(tree[i].l());
				}
				tree[i].finished = true;
				maxGen++;
			}
			tree.sort(compare);
		}
		else
			notBorn = false
	}

	if (trigger) {
		(function myLoop(i) {
			setTimeout(function () {
				if (!tree[i].rendered) {
					//background(75);
					tree[i].show();
					//console.log(i);
				}
				i++;
				if (i <= tree.length - 1) myLoop(i);
			}, delay)
		})(0);

		// for (var i = 0; i < tree.length; i++) {
		// 	tree[i].show();
		// 	//tree[i].jitter();
		// }
	}
}

function compare(a, b) {
	if (a.begin.y > b.begin.y)
		return -1;
	if (a.begin.y < b.begin.y)
		return 1;
	return 0;
}

// function compare2(a, b) {
// 	if ()
// 		return -1;
// 	if (a.begin.y < b.begin.y)
// 		return 1;
// 	return 0;
// }


function mousePressed() {
	trigger = !trigger;
	notBorn = false;
}

function createData() {
	data[0] = createVector(0.5, 0.5);
	data[1] = createVector(0.75, 0.75);
	data[2] = createVector(0.25, 0.75);
	data[3] = createVector(0.75, 0.75);
}