class FrameSaver extends Thread {

  boolean running;
  
  public FrameSaver () {
    running = false;
  }
  
  public void start() {
    println("recording frames!");
    running = true;
    
    try{
      super.start();
    }
    catch(java.lang.IllegalThreadStateException itse){
      println("cannot execute! ->"+itse);
    }
  }
  
  public void run(){
    saveFrame("out/image_###.tga");
  }
  
  public void save(){
      saveFrame("out/image_###.tif");
  }
  
  public void quit() {
    println("stopped recording..");
    running = false;  
    interrupt();
  }
}
