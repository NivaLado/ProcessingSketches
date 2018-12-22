class Particle {
  float x;
  float y;
  
  float vx;
  float vy; 
  int size= 1; 
  
  int bounced = 0;

  Particle() {
    x = width/2  + random(-20,20);
    y = height/2 + random(-20,20);
    //x = 0;
    //y = 0;
    //x = width/2;
    //y = height/3;
    float a = random(TWO_PI);
    float speed = 1;
    vx = cos(a)*speed;
    vy = sin(a)*speed;
    //println(x);
  }

  void display() {
    color c = img.get(int(x),int(y));
    //c = color(red(c)*2.8/2,green(c)+40,blue(c)*4/2);
    c = color(red(c),green(c),blue(c));
    
    if(bounced %2!=0)
    {
        c = img2.get(int(x),int(y));
        c = color(red(c),green(c),blue(c));
    }
    //c = color(30);
    
    fill(c);
    //ellipse(x, y, 2.5, 2.5);
    PShape head = createShape(RECT, x, y, 1, 1);
    shape(head);
  }

  void move() {
    x = x + vx;
    y = y + vy;
    
    if (y < 0) {
      y = height;
      bounced++;
    } 

    if (y > height) {
      y = 0;
      bounced++;
      size++;
    }
    if (x < 0) {
      x = width;
      bounced++;
      size++;
    } 

    if (x > width) {
      x = 0;
      bounced++;
      size++;
    }
    
  }
}
