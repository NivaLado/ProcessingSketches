class Bubble {
    constructor(counter, resolution) {
        bubleCounter++;
        this.x = counter * (width / resolution);
        this.y = 0;
        this.size = random(0.05, 0.05);
        this.diameter = 10;
        this.direction = 1;
        this._setupSpeed();
    }

    ascend() {
        this.y = this.y + this.direction * this.speed;
        //this.x += random(-0.2, 0.2);
    }

    display() {
        let color = img.get(this.x, this.y);
        fill(color);

        switch (3) {
            case 1: ellipse(this.x, this.y, this.diameter, this.diameter);
                break;
            case 2:
                triangle(
                    this.size * 25 + this.x, this.y - 25 * this.size,
                    0 + this.x, this.y,
                    this.size * 50 + this.x, this.y);
                break;
            case 3:
                quad(
                    this.size * 25 + this.x, this.size * 0 + this.y,
                    this.size * 0 + this.x, this.size * 25 + this.y,
                    this.size * 25 + this.x, this.size * 50 + this.y,
                    this.size * 50 + this.x, this.size * 25 + this.y);
                break;
        }
    }

    bounceY() {
        if (this.y < 0 + this.diameter / 3) {
            this.y = 0 + this.diameter / 3;
            this.direction *= -1;
        }
        if (this.y > height + this.diameter / 3) {
            this.direction *= -1;
        }
    }

    _setupSpeed() {
        this.speed = noise(bubleCounter) * 5;
        //if (this.speed > -0.25 && this.speed < 0.25)
        //    this.speed = 0.25;

        //bubleCounter / 100;
        //(bubleCounter + 1000) / (1000 / bubleCounter * 5 * 2);// * cos(bubleCounter);
        //noise(bubleCounter) * 5;
    }
}