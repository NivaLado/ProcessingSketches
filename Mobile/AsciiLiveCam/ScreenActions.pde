void Pause()
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
