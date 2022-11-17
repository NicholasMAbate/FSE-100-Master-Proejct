let listOfShapes = ['triangle', 'circle', 'square'];
let listOfColors = ['red','blue','green','yellow', 'orange']; 
let randomNum = 0;
let shapeColor;
let color;
let gameScoreColor = 0;
let r;
let k;
let change = true;



function setup() {
  createCanvas(500, 500);
  


}

function draw() {

//Screen Stuff
  background('rgb(187,187,187)');
  fill('white');
  rect(0, 0, 100, 500);
  fill('black');
  textSize(18);
  text('Colors', 25, 25);
  textSize(28);
  text('Color the Shape!', 200, 30);
  textSize(14);
  text('chose the matching color to color in the shape', 150, 50);
  textSize(24);
  text('Score: ' + gameScoreColor, 250, 450);
  printAllColors();
  thisColor();
  thisShape();
  if(findShapeColor() == color) {
    gameScoreColor += 100;
    change = true;
    frameCount = 0;
  }
  if (frameCount == 1) {
    change = false;
  }
  
}







function printAllColors() {
  fill('red');
  square(25, 50, 50);
  fill('blue');
  square(25, 125, 50);
  fill('green');
  square(25, 200, 50);
  fill('yellow');
  square(25, 275, 50);
  fill('orange');
  square(25, 350, 50);
}

function findShapeColor () {
  if( (mouseX > 25) && (mouseX < 75) && (mouseY > 50) && (mouseY < 100) ) {
    shapeColor = 'red';
    return shapeColor;
  }
  else if( (mouseX > 25) && (mouseX < 75) && (mouseY > 125) && (mouseY < 175)  ) {
    shapeColor = 'blue';
    return shapeColor;
  }
  else if ( (mouseX > 25) && (mouseX < 75) && (mouseY > 200) && (mouseY < 250)   ) {
    shapeColor = 'green';
    return shapeColor;
  }
  else if ( (mouseX > 25) && (mouseX < 75) && (mouseY > 275) && (mouseY < 325) ) {
    shapeColor = 'yellow';
    return shapeColor;
  }
  else if( (mouseX > 25) && (mouseX < 75) && (mouseY > 350) && (mouseY < 400) ) {
    shapeColor = 'orange';
    return shapeColor;
  }
  else {
    shapeColor = 'white';
    return shapeColor;
  }
    
}





function thisColor() {

  if(change == true) {
  r = random(0, 4);
  k = random(0,3);
}
  for(let j = 0; j <= r; j++) {
      color = listOfColors[j];
  }
  fill(color);
  textSize(22);
  text('This Color !!!', 250, 90);
}

function thisShape() {

  if(change == true) {
  r = random(0, 4);
  k = random(0,3);
  }
  
  fill('white');
  if((k >= 2)) {
    triangle(300, 130, 200, 300, 400, 300);
  }
  else if((k < 2) && (k >= 1)) {
    circle(300, 250, 200);
  }
  else if ((k < 1)) {
    square(200, 150, 200);
  }

}

