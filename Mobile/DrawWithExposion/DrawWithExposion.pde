 import ketai.camera.*;
Particle[] particles;

KetaiCamera cam;
int trigger = 1;
int rec = 0;

void setup() {
    orientation(LANDSCAPE);
    imageMode(CENTER);
    cam = new KetaiCamera(this, displayWidth, displayHeight, 30);
    cam.manualSettings();
    
   particles = new Particle [1100];
   for (int i = 0; i < particles.length; i++) {
     particles[i] = new Particle();
   }
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
    {
      if(rec > 50)
      {
        for (int i = 0; i < particles.length; i++) 
        {
              particles[i].display();
              particles[i].move();
        }
      }
      else
        rec++;
    }
    else
        cam.start();
}

void onCameraPreviewEvent(){
  if(trigger == 1)
    cam.read();
}
