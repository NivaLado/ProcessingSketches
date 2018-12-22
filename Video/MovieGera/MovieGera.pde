import processing.video.*;
import processing.opengl.*;

Particle[] particles;
Movie movie;
boolean test = true;

void setup() {
    size(200,200);
    surface.setSize(500,700);
    //background(216, 182, 226, 1);
    background(70);
    movie = new Movie(this, "v8.mp4");
    movie.loop();
   noStroke();
}

void movieEvent(Movie movie){
  movie.read();
  //surface.setSize(movie.width, movie.height);
}

void draw() {
       
    if(test && movie.width > 100)
    {
      println(movie.width);
      surface.setSize(movie.width, movie.height);    
      particles = new Particle [10000];
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
    }   
    //saveFrame("out/image_###.tga");   
}
