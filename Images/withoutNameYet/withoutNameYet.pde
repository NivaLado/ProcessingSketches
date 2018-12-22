import com.hamoid.*;

VideoExport videoExport;

PImage bg;
int  bgW;
int  bgH;

Bubble[] bubles;

void setup(){
  size(894,894,P3D);
  videoExport = new VideoExport(this);
  videoExport.startMovie();
  
  bg = loadImage("bg2.jpg");
  bgW = bg.width;
  bgH = bg.height;
  
  //surface.setResizable(true);
  //surface.setSize(bgW, bgH);
  
  bubles = new Bubble[60000];
  
  for (int i = 0; i < bubles.length; ++i) {
     bubles[i] = new Bubble();
  }
  
  noStroke();

 //image(bg,0,0);
}

void draw(){
 background(50);
  //if (frameCount == 1) {
  //  image(bg, 0, 0);
  //}
 
  for (int i = 0; i < bubles.length; ++i) {
     bubles[i].ascend();
     bubles[i].display();
     bubles[i].top();
  }
  //videoExport.saveFrame();
}

void keyPressed() {
  if (key == 'q') {
    videoExport.endMovie();
    exit();
  }
}
