//9/30/2020 tale p5.js
//loading bar for 5 second followed by an event

function setup() {
  createCanvas(400, 400);
}

let event = false;
let download = false;
let count = 0;

function draw() {
  background("black");

  if (event == false) {
    //text
    noFill();
    stroke(255);
    textFont("Courier");
    textSize(12);
    if (second() % 3 == 0)
      text("Downloading.", width / 2 - 40, height / 2 - 25);
    if (second() % 3 == 1)
      text("Downloading..", width / 2 - 40, height / 2 - 25);
    if (second() % 3 == 2)
      text("Downloading...", width / 2 - 40, height / 2 - 25);

    //bar
    noFill();
    stroke(255);
    var w = 300;
    var h = 20;
    var x = (width - w) / 2;
    var y = height / 2 - h / 2;
    var curv = 20;
    rect(x, y, w, h, curv);

    //filling
    var n = 50;
    fill("rgb(0,255,0)");
    noStroke();
    var fw = 295;
    var time = (millis() / 1000) % 5;
    var cw = map(time, 0, 5, 0, fw);
    var fh = 16;
    var fx = (width - fw) / 2;
    var fy = height / 2 - fh / 2;

    rect(fx, fy, cw, fh, curv);

    if (cw >= 290) {
      event = true;
      download = true;
    }
  }
  //event
  else{
    fill("rgb(255,0,0)");
    var char = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "!",
      "@",
      "$",
      "%",
      ".",
      "-",
      "+",
      "=",
      ">",
      "<",
      "/",
      "&",
      "~",
      "#",
      "(",
      "^",
      "*",
      ")"
    ];
    var num = 21;
    textSize(18);
    textFont("Courier");
    if (download) {
      count = 0;
      var cloc = (millis() / 1000) % 10;
      var val = map(cloc, 0, 10, 0, num * 4);
      for (var i = 0; i < num; i++) {
        for (var j = 0; j < val; j++) {
          var index = Math.floor(random(0, char.length - 1));
          text(char[index], i * 20 - 5, j * 20 - 10);
          if (j >= num / 2) {
            push();
            stroke(255);
            strokeWeight(4);
            fill(0);
            var wid = 200;
            var hei = 100;
            rect(width / 2 - wid / 2, height / 2 - hei / 2, wid, hei);
            pop();
            push();
            textSize(30);
            //fill(255);
            text("HACKING", width / 2 - 62, height / 2 + 10);
            pop();
          }
          count++;
        }
      }
    }

    if (count >= 800) {
      push();
      stroke(255);
      strokeWeight(4);
      fill(0);
      var wid = 200;
      var hei = 100;
      rect(width / 2 - wid / 2, height / 2 - hei / 2, wid, hei);
      pop();
      push();
      textSize(30);
      //fill(255);
      text("COMPLETE", width / 2 - 70, height / 2 + 10);
      pop();
    }
    if (count > 1000) {
      event = false;
      download = false;
      count = 0;
    }
  }
}
