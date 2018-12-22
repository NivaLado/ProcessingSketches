import processing.video.*;
import processing.opengl.*;
//Slow Motion BLur effect
Movie movie;
FrameSaver fs;   

PFont mono;
int trigger = 1;
boolean isColored = false;

color pixel;
int asIndex;
int resolution = 8;
int fontResolution = 15;
char[] ascii;

float r,g,b;
 
void setup() {
  size(1416,796);
  background(0);
  movie = new Movie(this, "v8.mp4");
  //fs = new FrameSaver();
  movie.loop();
  fill(0,0,0);
  ascii = new char[256];
  String letters = "MARKMARKMARK";
  for (int i = 0; i < 256; i++) {
    int index = int(map(i, 0, 256, 0, letters.length()));
    ascii[i] = letters.charAt(index);
  }
 
  mono = createFont("open-sans.ttf", fontResolution);
  textFont(mono);
  noStroke();
}

void movieEvent(Movie movie){
  movie.read();
}
 
void draw() {
    //Slow Motion BLur effect
    background(0);
    for (int y = 0; y < height; y += resolution) {
      for (int x = 0; x < width; x += resolution) {
        pixel = movie.get(int(x),int(y));
        r = red(pixel);
        b = blue(pixel);
         
        if(r>140)
          fill(255,20,147); 
        else if(b>140)
          fill(30,144,255);
        else 
          fill(0,0,0);
        
        fill(pixel);
        asIndex = int(brightness(pixel));
        text(ascii[asIndex], x, y);
      }
    }

  //saveFrame("out/image_###.tga");
  //saveFrame("out/image_###.tif");
}

void mousePressed()
{
  //println("X IS : " + mouseX);
  //println("Y IS : " + mouseY);
  LeftTop();
  RightTop();
  LeftBottom();
  RightBottom();
}


void FillWithColor(color pixel)
{
  fill(pixel);
}
