let x = 0;
let y = 0;
let spacing = 20;
let speciesPerFrame = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(75);
    strokeWeight(3);
    stroke(255);
}

function draw() {
    for (let i = 0; i < speciesPerFrame; i++) {
        species();
    }
}

function species() {
    // let rnd = int(random(2));
    // switch (rnd) {
    //     case 0:
    //         line(x, y, x + spacing, y + spacing);
    //         break;
    //     case 1:
    //         line(x, y + spacing, x + spacing, y);
    //         break;
    // }

    let rndFloat = random(1);
    if (rndFloat > 0.75)
        line(x, y, x + spacing, y + spacing)
    else
        line(x, y + spacing, x + spacing, y)

    x += spacing;
    if (x > width) {
        x = 0;
        y += spacing;
    }
}