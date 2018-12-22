int corners = 4;
PVector[] points = new PVector[corners];
PVector current;
PVector previous;
float scale = 0;
int counter = 0;
int trigger = 1;
int inverse = 1;

void setup() {
  size(670, 650);
  strokeWeight(2);
  frameRate(60);
  background(70);
  init();
}

void draw() {
  if(trigger > 3)
  {
    //Translates whole space Around its center
    //Center        Rotation                Scale factor
    translate(
      width  / 2.0  + cos(frameCount / 60.0) * scale, 
      height / 2.0  + sin(frameCount / 60.0) * -scale //Remove - for diff efect
    );
    if(inverse == 1)
      scale = lerp(scale,200,0.01);
    if(inverse == -1)
      scale = lerp(scale,-200,0.01);
    
    strokeWeight( (((sin(frameCount/10.0)+1.0)/3.0)) * 40.0 + 0.5);
  }
  else
    translate(width/2, height/2);
  
  if(trigger > 2)
    rotate(radians(frameCount) * 1.0);

  for (int i = 0; i < 800; i++) {
    render();
  }
  //saveFrame("out/image_###.tga");
}

void init() {
  translate(width/2, height/2);
  current = new PVector(random(width), random(height));
  
  //Point on circumference
  for (int i = 0; i < corners; i++) {
    float angle = i * TWO_PI / corners;
    PVector vectorFromAngle = PVector.fromAngle(angle);
    vectorFromAngle.mult(height / 3);
    points[i] = vectorFromAngle;
    stroke(255,255);
    point(points[i].x, points[i].y);
  }
  
  //Random Points
  // for (let i = 0; i < corners; i++) {
  //   let randomVector = createVector(random(-width/2,width/2),random(-height/2,height/2));
  //   points.push(randomVector);
  // }
}

void mousePressed() {
  trigger++;
  inverse *= -1;
}

void render() {
  float rnd = random(points.length);
  PVector next = points[floor(rnd)];
  if (previous != next && trigger > 1) {
  //if(trigger > 1) {
    current.x = lerp(current.x, next.x, 0.5);
    current.y = lerp(current.y, next.y, 0.5);
    if(counter > 50)
    point(current.x, current.y);
    
    counter++;
    float r = map(cos(frameCount / 60.0), -1, 1, 40, 255);
    float g = map(sin(frameCount / 60.0), -1, 1, 70, 255);
    float b = map(sin(frameCount / 50.0), -1, 1, 10, 95);
    stroke(r, g, b, 150);
  }
  previous = next;
}
