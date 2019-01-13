class Particle {
  float x;
  float y;
  color c;
  float vx;
  float vy;

  Particle() {
    x = width*0.5;
    y = height*0.5;
    float a = random(TWO_PI);
    float speed = random(5,10);
    vx = cos(a)*speed;
    vy = sin(a)*speed;
  }

  void display() {
    c = cam.get(int(x),int(y));
    fill(c);
    ellipse(x, y, 7, 7);
  }

  void move() {
    x = x + vx;//random(-5, 5);
    y = y + vy;//random(-5, 5);
    if (y < 0) {
      y = height;
    } 
    if (y > height) {
      y = 0;
    }
    if (x < 0) {
      x = width;
    } 
    if (x > width) {
      x = 0;
    }
  }
}
