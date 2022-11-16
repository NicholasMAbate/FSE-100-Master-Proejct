function setup() {
  createCanvas(700, 500);
  
}


function draw() {

//coloring game menu
background(' blue');
let c = color(51, 201, 700);
  
fill(c);
rect(200, 600, 400, 600);
let value = hue(c); // Sets 'value' to "0"
  
fill(value);
rect(0, 0, 250, 500);
  
fill('red');
rect(50, 0, 200, 700);
describe('red rect with black outline in center of canvas');
  
  
//coloring game 
textSize(50);
text('Shapes', 70, 50);
fill(0, 1, 153);
describe('black fill with red outline');
  fill(51);
describe('dark charcoal grey rect with black outline in center of canvas');
  
  textSize(50);
text('Drawing Area', 300, 50);
fill(0, 1, 153);
describe('black fill with red outline');
  fill(51);
describe('dark charcoal grey rect with red outline in center of canvas');
  
  textSize(50);
text('1', 85, 150);
fill(0, 1, 153);
describe('black fill with red outline');
  fill(51);
describe('dark charcoal grey rect with red outline in center of canvas');
  
   textSize(50);
text('2', 185, 150);
fill(0, 1, 153);
describe('black fill with red outline');
  fill(51);
describe('dark charcoal grey rect with red outline in center of canvas');
  
   textSize(50);
text('3', 85, 275);
fill(0, 1, 153);
describe('black fill with red outline');
  fill(51);
describe('dark charcoal grey rect with red outline in center of canvas');
  
  square(75, 175, 50);
describe('white square with black outline in mid-right of canvas');
  
  triangle(75, 350, 125, 350, 100, 290);
describe('white triangle with black outline in mid-right of canvas');
  
  circle(200, 200, 50);
describe('white circle with black outline in mid of gray canvas');
  
let a = 3; 
  
  if (a == 0) {
  textSize(30);
text('Choose a Shape Number', 300, 250);
fill(0, 1, 153);
describe('black fill with red outline');
  fill(51);
describe('dark charcoal grey rect with black outline in center of canvas');
} 
  
  if (a == 1) {
    square(325, 125, 300);
describe('white square with black outline in mid-right of canvas');
  }
  
  if (a == 2) {
    circle(475, 275, 300);
describe('white circle with black outline in mid of gray canvas');
  }
  
  if (a == 3) {
    triangle(325, 425, 625, 425, 475, 100);
describe('white triangle with black outline in mid-right of canvas');
  }
  
  if (mouseIsPressed) {
    circle(mouseX, mouseY, 25);
    fill('red');
rect(50, 0, 200, 700);
describe('red rect with black outline in center of canvas');
  }
}

