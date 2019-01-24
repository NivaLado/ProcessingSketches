let tree = [];
let frameR = 60;

let specieData = [];
let angleData = [];
let specie = 0;
let angle = 0;

let divider = 10;
let trigger = false;
let maxGen = 7;
let delay = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(75);
    strokeWeight(10);
    //stroke(255);
    stroke(120, 210, 90);
    frameRate(frameR);
    createSpecieData();
    createAngleData();
}

function draw() {

}

async function mousePressed() {
    trigger = !trigger;
    createTree(mouseX, mouseY);
    await iterate();
    tree = [];
}

function createSpecieData() {
    specieData[0] = createVector(0.5, 0.5);
    specieData[1] = createVector(0.75, 0.75);
    specieData[2] = createVector(0.25, 0.75);
    specieData[3] = createVector(0.75, 0.25);
    specieData[4] = createVector(0.4, 0.8);
}

function createAngleData() {
    angleData[0] = createVector(-PI / 2, PI / 2);
    angleData[1] = createVector(-PI / 4, PI / 4);
    angleData[2] = createVector(-PI / 6, PI / 6);
    angleData[3] = createVector(-PI / 8, PI / 8);
    angleData[4] = createVector(-PI / 16, PI / 16);
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

function createTree(x, y) {
    tempRandom();
    let rootStart = new createVector(x, height);
    let rootEnd = new createVector(x, y); //-500 (Pi/2)
    let Tree = new Branch(rootStart, rootEnd, tree, 0); //START
    Tree.look();
    Tree.genezis();
}

function tempRandom() {
    specie = int(random(specieData.length));
    angle = int(random(angleData.length));
    //console.log(specie);
}
