//9/30/2020 tale p5.js
//draw any line on the screen, and it'll flatten to a straight line once mouse is released.

function setup() {
  // put setup code here
  createCanvas(400, 400);
}
let xy = [];
let newxy = Array(100);
let flat = false;

function draw() {
  background("rgba(0,142,174,1)");
  stroke("#ADEFD1FF");
  noFill();
  strokeWeight(4);
  beginShape();
  for (var i = 0; i < xy.length; i++) {
    vertex(xy[i][0], xy[i][1]);
  }
  endShape();
  if(flat){
    flatten();
  }
}

function flatten(){
  for (var i=1; i<xy.length-1;i++){
    xy[i][0] = (xy[i-1][0] + xy[i+1][0])/2;
    xy[i][1] = (xy[i-1][1] + xy[i+1][1])/2;
  }
}

function mouseDragged(){
  flat=false;
  if (xy.length < 100) {
      xy.push([mouseX, mouseY]);
    } else {
      xy.shift();
    }
}

function mouseReleased(){
  flat = true;
}
