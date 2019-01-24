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
        this.look();
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

            rBranch = new Branch(this.end, newEndR, this.branches, this.generation);
            lBranch = new Branch(this.end, newEndL, this.branches, this.generation);
            this.branches.push(rBranch);
            this.branches.push(lBranch);
        }
    }

    genezis() {
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    look() {
        if (this.generation == maxGen + 1) {
            stroke(231, 76, 60);
            strokeWeight(9 - map(this.generation + mouseY, 0, maxGen + height, 0, 8));
        }
        else {
            //stroke(255 - map(this.generation, 0, maxGen, 0, 150));
            stroke(150, 210, 90);
            strokeWeight(9 - map(this.generation, 0, maxGen, 0, 5));
        }
    }
}

//Make width of root depend on it height no only generation