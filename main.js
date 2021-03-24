function preload() {
    moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
  }
  
  function setup() {
      canvas = createCanvas(300, 300);
      canvas.center();
  }
  function draw() {
  }
  
  function take_snapshot(){    
    save('myFilterImage.png');
  }