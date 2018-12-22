PFont mono;
PImage img;
int trigger = 1;
boolean isColored = false;
PrintWriter output;

color pixel;
int asIndex;
float resolution = 354/47;
int fontResolution = 20;
char[] ascii;

float r,g,b;
 
void setup() {
  size(354,147);
  background(0);
  fill(0,0,0);
  ascii = new char[256];
  img = loadImage("1.jpg");
  String letters = "_H";
  output = createWriter("positions.txt"); 
  for (int i = 0; i < 256; i++) {
    int index = int(map(i, 0, 256, 0, letters.length()));
    ascii[i] = letters.charAt(index);
  }
 
  mono = createFont("open-sans.ttf", fontResolution);
  textFont(mono);
  noStroke();
  render();
}

void draw() {

}

void render()
{
    background(0);
    for (int y = 0; y < height; y += resolution) { 
      for (int x = 0; x < width; x += resolution) {
        color pixel = img.get(int(x),int(y));
        r = red(pixel);
        b = blue(pixel);

        fill(255);
          
        asIndex = int(brightness(pixel));
        text(ascii[asIndex], x, y);
        output.print(ascii[asIndex]);
      }
      output.println();
    }
    isColored = true;
    updatePixels();
    redraw();
    output.flush(); // Writes the remaining data to the file
    output.close(); // Finishes the file
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

void wharWidthTest()
{
  int test = 0;
  for (int x = 0; x < width; x += resolution) {
        println(test);         
        test++;
   }
}
