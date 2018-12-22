void RightTop()
{
  if(mouseX < width/2 && mouseY < height/2)
  {
    println("RightTop");
    Pause();
  } 
}

void RightBottom()
{
  if(mouseX > width/2 && mouseY < height/2)
  {
    println("RightBottom");
    isColored = !isColored;
  } 
}

void LeftTop()
{
  if(mouseX < width/2 && mouseY > height/2)
  {
    println("LeftTop");
    if(mouseX < width/4 && mouseY > height/2)
    {
      println("LeftTopTop");
      if(resolution > 1)
        resolution--;
    }
    if(mouseX > width/4 && mouseY > height/2)
    {
      println("LeftTopBottom");
      resolution++;
    }
  } 
}

void LeftBottom()
{
  if(mouseX > width/2 && mouseY > height/2)
  {
    println("LeftBottom");
    if(mouseX > (width/4 + width/2) && mouseY > height/2)
    {
      println("LeftBottomBottom");
      if(fontResolution > 1)
        fontResolution--;
      mono = createFont("open-sans.ttf", fontResolution);
      textFont(mono);
    }
    else if(mouseX > width/2 && mouseY > height/2)
    {
      println("LeftBottomTop");
      fontResolution++;
      mono = createFont("open-sans.ttf", fontResolution);
      textFont(mono);
    }
  } 
}
