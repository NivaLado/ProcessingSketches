let tree = [];
let frameR = 60;

let specieData = [];
let angleData = [];
let specie = 1;
let angle = 3;

let divider = 10;
let trigger = false;
let maxGen = 8;
let delay = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(75);
    strokeWeight(3);
    stroke(150, 210, 90);
    frameRate(frameR);
    createSpecieData();
    createAngleData();
    let rootStart = new createVector(width / 2, height);
    let rootEnd = new createVector(width / 2, height - 200); //-500 (Pi/2)
    new Branch(rootStart, rootEnd, tree, 0); //START
    line(rootStart.x, rootStart.y, rootEnd.x, rootEnd.y);
}

function draw() {
    if (trigger) {
        iterate();
    }
}

function mousePressed() {
    trigger = !trigger;
}

function createSpecieData() {
    specieData[0] = createVector(0.5, 0.5);
    specieData[1] = createVector(0.75, 0.75);
    specieData[2] = createVector(0.25, 0.75);
    specieData[3] = createVector(0.75, 0.75);
    specieData[4] = createVector(1, 1);
}

function createAngleData() {
    angleData[0] = createVector(-PI / 2, PI / 2);
    angleData[1] = createVector(-PI / 4, PI / 4);
    angleData[2] = createVector(-PI / 6, PI / 6);
    angleData[3] = createVector(-PI / 8, PI / 8);
}

function w8(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, time);
    });
}

async function iterate() {
    for (let i = tree.length - 1; i >= 0; i--) {
        if (!tree[i].finished) {
            tree[i].show();
        }
        await w8(delay);
    }
}