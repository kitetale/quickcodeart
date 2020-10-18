//9/27/2020 tale p5.js
// click to draw line, the longest line will be highlighted in red

function setup() {
  createCanvas(600, 600);
}

let lines = [];
let longIndex = 0;
let longLen = 0;
let enter = true; 

function draw() {
  background(255);
  strokeWeight(3);

  if(enter){
    for(let i=0; i<lines.length; i++){
      if(i!=longIndex){
        stroke(0);
      }else{
        stroke("red");
      }
      let x = lines[i][0];
      let y = lines[i][1];
      let x2 = lines[i][2];
      let y2 = lines[i][3];
      line(x,y,x2,y2);
    }
  }else{
    for(let i=0; i<lines.length-1; i++){
      if(i!=longIndex){
        stroke(0);
      }else{
        stroke("red");
      }
      let x = lines[i][0];
      let y = lines[i][1];
      let x2 = lines[i][2];
      let y2 = lines[i][3];
      line(x,y,x2,y2);
    }
  }
}


function mouseClicked(){
  if(enter){
    lines.push([]);
    var last = lines.length-1;
    lines[last][0] = mouseX;
    lines[last][1] = mouseY;
  }
  else{
    var last = lines.length-1;
    lines[last][2] = mouseX;
    lines[last][3] = mouseY;
    
    var d = dist(lines[last][0],lines[last][1],lines[last][2],lines[last][3]);
    
    if(longLen == 0) longLen = d;
    else{
      if (longLen<d) {
        longLen = d;
        longIndex = last;
      }
    }
  }
  enter = !enter;
}
