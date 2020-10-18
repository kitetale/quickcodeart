// 9/23/20 tale p5.js

function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background("#008C76FF");
  stroke("#9ED9CCFF");
  let row = 60;
  let col = 60
  let s = random(10,30);
  strokeWeight(3);
  

  //horizontals
  for (var r = 0; r < row; r++) {
    var rowRan = int(random(0,2));
    for(var c = 0; c < col; c++){
      if(c%2==rowRan) line(r*s,c*s,r*s,(c+1)*s);
    }
    var colRan = int(random(0,2));
    for(var c = 0; c < col; c++){
      if(c%2==colRan) line(c*s,r*s,(c+1)*s,r*s);
    }
  }
}

function mousePressed(){
  draw();
}
