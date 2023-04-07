let arr = [];
let a;
myColors = ["#75b9be","#696d7d","#d72638","#f49d37","#140f2d", 220];

function setup() {
  createCanvas(400, 400);
  
  textSize(32);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < 50; i++) {
    arr.push(new MyClass());
    a = random(35, 90);
  }
}

function mouseMoved() {
  background(240);

  for (let i = 0; i < arr.length; i++) {
    arr[i].move();
    arr[i].show();
  }
}

class MyClass {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.letter = char(a);
  }

  move() {
    this.x += random(-2, 10);
    this.y += random(-2, 2);
    
    if (this.x > 400) {
      this.x -= 400;
    }
  }

  show() {
    text(this.letter, this.x, this.y);
    fill(random(myColors));
  }
}
