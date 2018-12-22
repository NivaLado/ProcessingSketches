PImage frog;
Particle[] particles;

void setup(){
   size(1920,1080);
   frog = loadImage("frog.jpg");
   
   particles = new Particle [2000];
   for (int i = 0; i < particles.length; i++) {
     particles[i] = new Particle();
   }
  
   noStroke();
}

void draw(){

  for (int i = 0; i < particles.length; i++) {
    particles[i].display();
    particles[i].move();
  }
  
  //for (int i = 0; i < 100; i++){
  //float x = random(width);
  //float y = random(height);
  //color c = frog.get(int(x),int(y));
  //fill(c);
  //ellipse(x,y,15,15);
  //}
}
