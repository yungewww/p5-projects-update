let obj = [];
let a;
let myName;
let hint;

function setup() {
  createCanvas(400, 400);
  noStroke();
  
  textSize(24);
  textAlign(CENTER, CENTER);
  
  input = createInput("// w //");
  input.position(20, 65);
  
  hint = createElement("p", "Try your own emoji 😆");
  hint.position(20, 75);
  
  button = createButton("Do Not Click");
  button.position(width/2, height/2);
  button.mousePressed(pressed);
}
  
function pressed() {
    a = random(35, 90);
    obj.push(new MyClass(mouseX, mouseY));
    // myName = input.value();
    // input.value('');
}


function draw() {
    background(255);
    for (let i = obj.length - 1; i >= 0; i--) {
        obj[i].show();
        obj[i].move();
        obj[i].bounce();
    }
}


class MyClass {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedx = random(-1, 1);
    this.speedy = random(-1, 1);
    this.letter = char(a);
    this.myName = input.value();
  }
  
  show() {
    // myName = input.value();
    // circle(this.x, this.y, 20);
    text(this.myName, this.x, this.y);
  }
  
  move() {
    this.x += this.speedx;
    this.y += this.speedy;
  }
  
  bounce() {
    if (this.x > width || this.x < 0) {
      this.speedx = -this.speedx;
    }
    if (this.y > height || this.y < 0) {
      this.speedy = -this.speedy;
    }
  }
}
