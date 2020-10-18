//9/27/2020 tale p5.js
// click to see the ripple effect on the pond
function setup() {
  createCanvas(600, 600);
}

var ripples = [];

function draw() {
  background("rgba(0,142,174,0.1)");
  stroke("rgb(100,200,222)");
  strokeWeight(2);
  noFill();
  
  for(let i=0; i<ripples.length; i++){
    ripples[i].drawRip();
  }
}

function mousePressed(){
  ripples[ripples.length] = new Ripple(mouseX,mouseY,1);
}

class Ripple{
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r =r;
  }
  
  drawRip(){
    this.r += 1;
    ellipse(this.x,this.y,this.r);
  }
}
