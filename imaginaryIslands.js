//9/26/2020 tale  p5.js
//generative map of an imaginary islands

function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  var land = "#FFDAC1";
  var sea = "#6FACC8";

  for (var r = 0; r < height; r++) {
    for (var c = 0; c < width; c++) {
      if (noise(c / 100, r / 100) < 0.4) {
        set(c, r, color(land));
      } else set(c, r, color(sea));
    }
  }
  updatePixels();
}
