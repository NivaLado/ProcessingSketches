import ketai.camera.*;

KetaiCamera cam;
int trigger = 1;

void setup() {
    orientation(LANDSCAPE);
    imageMode(CENTER);
    cam = new KetaiCamera(this, displayWidth, displayHeight, 30);
    cam.manualSettings();
   noStroke();
}

void mousePressed()
{
  if (trigger==1)
  {
    cam.read();
    trigger=0;
  }
  else
  {
    trigger=1;
  }
}

void draw() {
    if(cam.isStarted())
            for (int i = 0; i < 100; i++){
            float x = random(width);
            float y = random(height);
            color c = cam.get(int(x),int(y));
            fill(c);
            ellipse(x,y,15,15);
            }
    else
        cam.start();
}

void onCameraPreviewEvent(){
  if(trigger == 1)
    cam.read();
}
