//9/27/2020 tale 
//draw a random triangle
//calculate & draw a circle that would pass through all three points 
//calculate & draw a circumcenter

function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background("#F08080");
  stroke("#FCE3B4");
  noFill();

  var x1 = random(20, width - 20);
  var y1 = random(20, height - 20);
  var x2 = random(20, width - 20);
  var y2 = random(20, height - 20);
  var x3 = random(20, width - 20);
  var y3 = random(20, height - 20);

  strokeWeight(10);
  //points
  point(x1, y1);
  point(x2, y2);
  point(x3, y3);

  strokeWeight(3);
  //lines
  line(x1, y1, x2, y2);
  line(x2, y2, x3, y3);
  line(x1, y1, x3, y3);

  //circumcenter
  var m1 = (y2 - y1) / (x2 - x1);
  var m2 = (y3 - y2) / (x3 - x2);
  var cx = (m1 * m2 * (y1 - y3) + m2 * (x1 + x2) - m1 * (x2 + x3)) / (2 * (m2 - m1));
  var cy = -1 * 1 / m1 * (cx - ((x1 + x2) / 2)) + ((y1 + y2) / 2);

  var r = dist(x1, y1, cx, cy);

  ellipse(cx, cy, r * 2, r * 2);

  stroke("#289DFF");
  strokeWeight(10);
  point(cx, cy);
}

function mousePressed() {
  draw();
}
