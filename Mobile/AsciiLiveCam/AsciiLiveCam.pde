import ketai.camera.*;
KetaiCamera cam;

PFont mono;
int trigger = 1;
boolean isColored = false;

color pixel;
int asIndex;
int resolution = 10;
int fontResolution = 10;
char[] ascii;
 
void setup() {
  orientation(LANDSCAPE);
  cam = new KetaiCamera(this, displayWidth, displayHeight, 30);
  cam.manualSettings();

  background(255);
  fill(0);
  noStroke();
 
  ascii = new char[256];
  String letters = "WMONLkrti";
  for (int i = 0; i < 256; i++) {
    int index = int(map(i, 0, 256, 0, letters.length()));
    ascii[i] = letters.charAt(index);
  }
 
  mono = createFont("open-sans.ttf", fontResolution);
  textFont(mono);
}
 
void draw() {
  if(cam.isStarted())
  {
    background(255);
    for (int y = 0; y < height; y += resolution) {
      for (int x = 0; x < width; x += resolution) {
        pixel = cam.get(int(x),int(y));
        if(isColored)
          FillWithColor(pixel);
        asIndex = int(brightness(pixel));
        text(ascii[asIndex], x, y);
      }
    }
  }
  else
     cam.start(); 
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

void onCameraPreviewEvent(){
  if(trigger == 1)
    cam.read();
}

void FillWithColor(color pixel)
{
  fill(pixel);
}
