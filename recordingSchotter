// 9/23/20 tale p5.js

function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(255);
  stroke(0);
  noFill();

  let s = 30;
  let marginx = 100;
  let marginy = 30;
  let off = 10;
  let x;
  let y;
  let t;
  let rand = 0;
  
  push();
  scale(0.8);
  translate(100,0);
  for (var r=0; r<22; r++){
    for (var c=0; c<12; c++){
      push();
      translate(marginx + c*s, marginy + r*s);
      t = random(-1*rand*r/PI/3,rand*r/PI/3);
      rotate(t);
      rect(-off,0,s,s);
      pop();
      rand = rand + 0.0045;
    }
  }
  pop();
}
