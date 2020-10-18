//9/23/20 tale p5.js

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("#0C6829");
  push();
  translate(0,20);
  stroke("#925816");
  strokeWeight(50);
  fill("#E4A441");
  
  let points = 200;
  let r = 20;
  push();
  scale(0.2);
  translate(600,1000);
  
  
  //big shell
  push();
  rotate(-PI/6.0);
  beginShape();
  for (var i=0; i<points; i++){
    var t = map(i, 0, points, 0, 8*PI);
    var x = width/2 + r*cos(t);
    var y = height/2 + r*sin(t);
    vertex(x,y);
    r = r*1.02;
  }
  endShape();
  pop();
  
  scale(0.01);
  translate(180000,130000);
  rotate(PI/2.5);
  strokeWeight(2000);
  //smol shell
  beginShape();
  for (var i=0; i<points; i++){
    var t = map(i, 0, points, 0, 8*PI);
    var x = width/2 + r*sin(t);
    var y = height/2 + r*cos(t);
    vertex(x,y);
    r = r*1.02;
  }
  endShape();
  pop();
  
  push();
  rotate(-PI/6.0);
  translate(-115,35);
  strokeWeight(11);
  line(380,235,260,250);
  pop();
  pop();
}
