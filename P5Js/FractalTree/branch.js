class Branch {
    constructor(rootStart, rootEnd, branches, generation) {
        this.begin = new createVector(rootStart.x, rootStart.y);
        this.end = new createVector(rootEnd.x, rootEnd.y);
        this.finished = false;
        this.branches = branches;
        this.generation = generation;
        this.pathHistoryL = [];
        this.pathHistoryR = [];

        this.dirL;
        this.dirR;
    }

    show() {
        if (!this.finished) {
            if (this.generation >= maxGen - 1)
                stroke(231, 76, 60);
            else
                stroke(150, 210, 90);

            if (this.generation == 1)
                line(this.begin.x, this.begin.y, this.end.x, this.end.y);

            let x = 4;
            if (x == 1) {
                for (let i = this.pathHistoryR.length - 2; i >= 0; i--) {
                    line(this.pathHistoryR[i + 1].x, this.pathHistoryR[i + 1].y, this.pathHistoryR[i].x, this.pathHistoryR[i].y);
                    line(this.pathHistoryL[i + 1].x, this.pathHistoryL[i + 1].y, this.pathHistoryL[i].x, this.pathHistoryL[i].y);
                }
            }
            else if (x == 2) {
                for (let i = this.pathHistoryR.length - 2; i >= 0; i--) {
                    line(this.pathHistoryR[i + 1].x, this.pathHistoryR[i + 1].y, this.pathHistoryR[i].x, this.pathHistoryR[i].y);
                    line(this.pathHistoryL[i + 1].x, this.pathHistoryL[i + 1].y, this.pathHistoryL[i].x, this.pathHistoryL[i].y);
                    sleep(10).then(() => { })
                }
            }
            else if (x == 3) {
                (function myLoop(i, pathL, pathR) {
                    setTimeout(function () {
                        line(pathL[i + 1].x, pathL[i + 1].y, pathL[i].x, pathL[i].y);
                        line(pathR[i + 1].x, pathR[i + 1].y, pathR[i].x, pathR[i].y);
                        i--;
                        if (i >= 0) myLoop(i, pathL, pathR);      //  decrement i and call myLoop again if i > 0
                    }, 20)
                })(this.pathHistoryR.length - 2, this.pathHistoryL, this.pathHistoryR);
            } else {
                line(this.begin.x, this.begin.y, this.end.x, this.end.y);
            }
            this.finished = true;
        }
    }

    nextGen() {
        if (this.generation <= maxGen) {
            this.generation++;
            this.dirL = p5.Vector.sub(this.end, this.begin);
            this.dirR = p5.Vector.sub(this.end, this.begin);

            this.dirL.mult(data[specie].x);
            this.dirL.rotate(PI / -9);
            this.dirR.mult(data[specie].y);
            this.dirR.rotate(PI / 9);

            let newEndL = p5.Vector.add(this.end, this.dirL);
            let newEndR = p5.Vector.add(this.end, this.dirR);
            let lBranch; let rBranch;
            if (this.generation > 10) {
                if (random(1) > 0.5) {
                    lBranch = new Branch(this.end, newEndL, this.branches, this.generation);
                    this.branches.push(lBranch);
                }
                else {
                    rBranch = new Branch(this.end, newEndR, this.branches, this.generation);
                    this.branches.push(rBranch);
                }
            } else {
                lBranch = new Branch(this.end, newEndL, this.branches, this.generation);
                rBranch = new Branch(this.end, newEndR, this.branches, this.generation);
                this.branches.push(rBranch);
                this.branches.push(lBranch);
            }

            this.divideBranch();
            this.show();
        }
    }

    divideBranch() {
        let accumL = this.end.copy();
        let accumR = this.end.copy();
        let stepL = p5.Vector.div(this.dirL, divider);
        let stepR = p5.Vector.div(this.dirR, divider);

        this.pathHistoryR.push(this.end);
        this.pathHistoryL.push(this.end);

        for (let i = 0; i < divider; i++) {
            this.pathHistoryL.push(p5.Vector.add(accumL, stepL));
            this.pathHistoryR.push(p5.Vector.add(accumR, stepR));
            accumL = p5.Vector.add(accumL, stepL);
            accumR = p5.Vector.add(accumR, stepR);
        }

        //this._debugDivision();
    }

    _debugDivision() {
        stroke(255, 0, 0);
        strokeWeight(7);
        for (let i = 0; i < this.pathHistoryR.length; i++) {
            point(this.pathHistoryR[i].x, this.pathHistoryR[i].y);
        }
        strokeWeight(3);
    }
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}