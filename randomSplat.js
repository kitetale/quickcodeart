// 9/23/20 tale

function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background("#1E8449");
  let waterColor = "#5DADE2";
  let cx = width/2;
  let cy = height/2;
  let r;
  let x;
  let y;
  let t;
  
  fill(waterColor);
  noStroke();
  
  beginShape();
  for (var i=0; i<720; i++){
    r = random(100,150);
    x = cx + r*cos(i);
    y = cy + r*sin(i);
    vertex(x,y);
  }
  endShape();
}
