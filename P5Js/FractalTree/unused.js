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