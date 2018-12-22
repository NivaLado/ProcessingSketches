import processing.video.*;
import processing.opengl.*;

Particle[] particles;
PImage img;
PImage img2;
boolean test = true;

void setup() {
    size(200,200);
    surface.setSize(500,700);
    //background(216, 182, 226, 1);
    background(40);
    img = loadImage("1a.jpg");
    img2 = loadImage("1b.jpg");
    noStroke();
    frameRate(60);
}


void draw() {
       
    if(test && img.width > 100)
    {
      println(img.width);
      surface.setSize(img.width, img.height);    
      particles = new Particle [30000];
      for (int i = 0; i < particles.length; i++) {
         particles[i] = new Particle();
      }
      test = false;
    }
    else if (!test)
    {
      for (int i = 0; i < particles.length; i++) {
        particles[i].display();
        particles[i].move();
      }
      //if(frameCount < 605)
      //  saveFrame("out/image_###.png"); //tga
      // else
      //   exit(); 
    }     
}
