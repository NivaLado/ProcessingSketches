class Walker {
    constructor(x, y) {
        this.x = int(x);
        this.y = int(y);
        this.test = 0;
    }

    step() {
        for (let i = 0; i < 100; i++) {
            this.x += int(random(-2, 2));
            this.y += int(random(-2, 2));
            this.render();
        }
    }

    render() {
        if (this.x > width)
            this.x = 0;
        if (this.x < 0)
            this.x = width;
        if (this.y > height)
            this.y = 0;
        if (this.y < 0)
            this.y = height;

        let q = img.get(this.x, this.y);
        stroke(red(q), green(q), blue(q));
        strokeWeight(2);
        point(this.x, this.y);
    }
}

// loadPixels();
// img.loadPixels();
// for(let y = 0; y < height; y++) {
//     for(let x = 0; x < width; x++) {
//     loc = (x + y * width) * 4;
//     let q = img.get(x, y);
//     pixels[loc + 0] = red(q);
//     pixels[loc + 1] = green(q);
//     pixels[loc + 2] = blue(q);
//     pixels[loc + 3] = 255;
//     }
// }
// img.updatePixels();
// updatePixels();