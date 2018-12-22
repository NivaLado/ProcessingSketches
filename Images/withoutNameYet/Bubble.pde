class Bubble {
  
 float x;
 float y;
 float diameter;
 float speed;
 float size;
 int direction = -1;
 
 color c;
 color col;
 byte lerp = 0;
 
 Bubble() {
   x = random(0,bgW);
   speed = random(6,9);
   size = random(0.01,0.30);
   y = bgH;
   //diameter = 20;
   //col = color(random(0,255),random(0,255),random(0,255));
 }
 
 void ascend(){
  y = y + direction * speed;
  //x = x + random(-2,2);
 }
 
 void display()
 {
   c = bg.get(int(x),int(y));
   
   if(lerp==1)
   {
     if(x>0 && x<333 || x>664 && x<1024)
     c = lerpColor(c, col, 0.3); 
   }
    
     
   fill(c,1000);
   
   switch(3)
   {
     case 1:ellipse(x,y,diameter,diameter);
       break;
     case 2:
        triangle( 
         size*25+x,y-25*size, 
         0+x, y,
         size*50+x,y);
       break;
     case 3 :
        quad(
       size * 25 + x, size * 0 + y, 
       size * 0 + x,  size * 25 + y, 
       size * 25 + x, size * 50 + y, 
       size * 50 + x, size * 25 + y);
       break;
   }
 }
 
 void top()
 {
   if(y< 0 + diameter/2 + 10)
   {
     //lerp = 1;
     //col = color(0,0,100);
     y= 0 + diameter/2 + 10;
     direction*=-1;
   }
   
   if(y > bgH + diameter/2)
   {
     //lerp = 1;
     //if(x>0 && x<333)
     //col = color(255,26,114);

     //if(x>664 && x<1024)
     //col = color(0,255,255);
     
     
     direction*=-1;
   }
   
 }
}
