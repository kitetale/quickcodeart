function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  strokeWeight(3);

  line(mouseX, mouseY, 150, 450);
  line(mouseX, mouseY, 450, 450);

  var m1 = (mouseY - 450) / (mouseX - 150);
  var m2 = (mouseY - 450) / (mouseX - 450);
  var dist1 = dist(mouseX, mouseY, 150, 450);
  var dist2 = dist(mouseX, mouseY, 450, 450);
  let a;
  let deg;

  if (m1 * m2 == -1) a = PI / 2;
  //acutes only
  //else a = atan(abs((m1-m2)/(1+m1*m2)));
  else a = acos((Math.pow(dist1, 2) + Math.pow(dist2, 2) - Math.pow(300, 2)) / (2 * dist1 * dist2));
  deg = a / PI * 180;

  fill("yellow");
  noStroke();
  text("Angle: " + round(deg, 3), mouseX - 30, mouseY - 10);
}
