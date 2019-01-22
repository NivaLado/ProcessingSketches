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

        if (this.generation <= maxGen) {
            this.generation++;
            this.nextGen();
        }
    }

    show() {
        if (this.generation == maxGen + 1)
            stroke(231, 76, 60);
        else
            stroke(150, 210, 90);

        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
        this.finished = true;
    }

    nextGen() {
        if (this.generation <= maxGen) {
            this.dirL = p5.Vector.sub(this.end, this.begin);
            this.dirR = p5.Vector.sub(this.end, this.begin);

            this.dirL.mult(specieData[specie].x);
            this.dirR.mult(specieData[specie].y);

            this.dirL.rotate(angleData[angle].x);
            this.dirR.rotate(angleData[angle].y);

            let newEndL = p5.Vector.add(this.end, this.dirL);
            let newEndR = p5.Vector.add(this.end, this.dirR);
            let lBranch; let rBranch;
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
            rBranch = new Branch(this.end, newEndR, this.branches, this.generation);
            lBranch = new Branch(this.end, newEndL, this.branches, this.generation);
            this.branches.push(rBranch);
            this.branches.push(lBranch);
            //}
            //this.divideBranch();
            //this.show();
        }
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