class Particle {
  float x;
  float y;
  
  float vx;
  float vy;

  Particle() {
    x = 0;
    y = 0;
    float a = random(TWO_PI);
    float speed = 5;
    vx = cos(a)*speed;
    vy = sin(a)*speed;
    //println(x);
  }

  void display() {
    color c = movie.get(int(x),int(y));
    c = color(red(c)*2.8/2,green(c)+40,blue(c)*4/2);
    //c = color(red(c),green(c),blue(c));
    fill(c);
    //ellipse(x, y, 2.5, 2.5);
    PShape head = createShape(ELLIPSE, x, y, 2, 2);
    shape(head);
  }

  void move() {
    x = x + vx;
    y = y + vy;
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
