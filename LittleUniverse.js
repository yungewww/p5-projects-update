myColors=["#75b9be","#696d7d","#d72638","#f49d37","#140f2d"];

function setup() {
  createCanvas(400, 400);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  translate(width / 2, height / 2);
  
  ball(50);
}

function ball(dia) {
  a = map(mouseX, 0, width, 25, 75);
  
  if (dia > 5){
    circle (0, 0, dia);
    
    for (let i = 0; i < 3; i++) {
      translate (a, dia);
      ball(dia * 0.75);
      rotate(70);
    }
  }
  
  if (mouseX > 200) {
    fill(random(myColors));
  }
  
}
