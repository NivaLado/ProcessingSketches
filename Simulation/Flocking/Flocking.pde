PImage frog;

void setup(){
   size(730,547);
   frog = loadImage("frog.jpg");
}

void draw(){
  //image(frog,0,0);
  //Pixel Representation
  loadPixels();
  frog.loadPixels();
  for (int x = 0; x < width-1; x++)
  {
    for(int y = 0; y < height; y++)
    {
     int loc = x+y*width;
     
     
     //----------Edges
     //int loc2 =  (x+1)+y*width;
     //float b1 = brightness(frog.pixels[loc]);
     //float b2 = brightness(frog.pixels[loc2]);
     
     //float diff = abs(b2 - b1);
     //pixels[loc] = color(diff);
            
     
     //---------------Filter----------------- 
     //float b = brightness(frog.pixels[loc]);
     //if(b>mouseX)
     //pixels[loc] = color(255);
     //else 
     //pixels[loc] = color(0);
     
     
     //---------------Flashlight------------------
     float r = red(frog.pixels[loc]);
     float g = green(frog.pixels[loc]);
     float b = blue(frog.pixels[loc]);
     
     float d = dist(mouseX,mouseY,x,y);
     float factor = map(d,0,100,2,0);     
     
     pixels[loc] = color(r*factor,g*factor,b*factor);
    }
  }
  updatePixels();
}
