class Branch {
    constructor(rootStart, rootEnd, generation) {
        this.begin = new createVector(rootStart.x, rootStart.y);
        this.end = new createVector(rootEnd.x, rootEnd.y);
        this.finished = false;
        this.rendered = false;
        this.generation = generation;
        this.pathHistoryL = [];
        this.pathHistoryR = [];
        this.dirL;
        this.dirR;
        this.generation++;
        //console.log(this.generation);
        // if (this.generation <= 1) {
        //     this.nextGen();
        // }
    }

    show() {
        //this.finished = true;
        if (this.generation == maxGen + 1) {
            stroke(231, 76, 60);
        }
        else
            stroke(150, 210, 90);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
        this.rendered = true;
    }

    l() {
        this.dirL = p5.Vector.sub(this.end, this.begin);
        this.dirL.mult(data[specie].x);
        this.dirL.rotate(PI / -9);
        let newEndL = p5.Vector.add(this.end, this.dirL);
        let lBranch;
        lBranch = new Branch(this.end, newEndL, this.generation);
        return lBranch;
    }

    r() {
        this.dirR = p5.Vector.sub(this.end, this.begin);
        this.dirR.mult(data[specie].y);
        this.dirR.rotate(PI / 9);
        let newEndR = p5.Vector.add(this.end, this.dirR);
        let rBranch;
        rBranch = new Branch(this.end, newEndR, this.generation);
        return rBranch;
    }


    // divideBranch() {
    //     let accumL = this.end.copy();
    //     let accumR = this.end.copy();
    //     let stepL = p5.Vector.div(this.dirL, divider);
    //     let stepR = p5.Vector.div(this.dirR, divider);

    //     this.pathHistoryR.push(this.end);
    //     this.pathHistoryL.push(this.end);

    //     for (let i = 0; i < divider; i++) {
    //         this.pathHistoryL.push(p5.Vector.add(accumL, stepL));
    //         this.pathHistoryR.push(p5.Vector.add(accumR, stepR));
    //         accumL = p5.Vector.add(accumL, stepL);
    //         accumR = p5.Vector.add(accumR, stepR);
    //     }

    //     //this._debugDivision();
    // }

    // _debugDivision() {
    //     stroke(255, 0, 0);
    //     strokeWeight(7);
    //     for (let i = 0; i < this.pathHistoryR.length; i++) {
    //         point(this.pathHistoryR[i].x, this.pathHistoryR[i].y);
    //     }
    //     strokeWeight(3);
    // }
}


// const sleep = (milliseconds) => {
//     return new Promise(resolve => setTimeout(resolve, milliseconds))
// }

// POSSIBLE FIX: DONT CREATE NEW BRANCHES UNTILL OLD ONE IS FULLY RENDERED 0_0

// let x = 4;
// if (x == 1) {
//     for (let i = this.pathHistoryR.length - 2; i >= 0; i--) {
//         line(this.pathHistoryR[i + 1].x, this.pathHistoryR[i + 1].y, this.pathHistoryR[i].x, this.pathHistoryR[i].y);
//         line(this.pathHistoryL[i + 1].x, this.pathHistoryL[i + 1].y, this.pathHistoryL[i].x, this.pathHistoryL[i].y);
//     }
// }
// else if (x == 2) {
//     for (let i = this.pathHistoryR.length - 2; i >= 0; i--) {
//         line(this.pathHistoryR[i + 1].x, this.pathHistoryR[i + 1].y, this.pathHistoryR[i].x, this.pathHistoryR[i].y);
//         line(this.pathHistoryL[i + 1].x, this.pathHistoryL[i + 1].y, this.pathHistoryL[i].x, this.pathHistoryL[i].y);
//         sleep(10).then(() => { })
//     }
// }
// else if (x == 3) {
//     (function myLoop(i, pathL, pathR) {
//         setTimeout(function () {
//             line(pathL[i + 1].x, pathL[i + 1].y, pathL[i].x, pathL[i].y);
//             line(pathR[i + 1].x, pathR[i + 1].y, pathR[i].x, pathR[i].y);
//             i--;
//             if (i >= 0) myLoop(i, pathL, pathR);      //  decrement i and call myLoop again if i > 0
//         }, 20)
//     })(this.pathHistoryR.length - 2, this.pathHistoryL, this.pathHistoryR);
// } else {

// }

//let qwe = map(mouseX, 0, width, TWO_PI, TWO_PI + PI);

            // if (this.generation > 8) {
            //     if (random(1) > 0.5) {
            //         lBranch = new Branch(this.end, newEndL, this.branches, this.generation);
            //         this.branches.push(lBranch);
            //     }
            //     else {
            //         rBranch = new Branch(this.end, newEndR, this.branches, this.generation);
            //         this.branches.push(rBranch);
            //     }
            // } else {