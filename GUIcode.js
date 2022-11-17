//Global Variables
let mainMenu = true;
let matchingGame = false;
let tracingGame = false;
let coloringGame = false;

//main menu variables
        //none for right now

  //matching game variables
let gameScore = 0;
let timerScore = 0;
let timerTime = 60;
let isShapePressed = false;
let mouseIsDown = false;
let squareInsideSquare = false;
let circleInsideCircle = false;
let polygonInsidePolygon = false;
let diamondInsideDiamond = false;
let gameRunning = true;
let alreadyScored = false;


  //matching game position variables
let squareX = 0;
let squarey = 0;
let squareLength = 0;
let triangleX1 = 0;
let triangleX2 = 0;
let triangleX3 = 0;
let triangleY1 = 0;
let triangleY2 = 0;
let circleX = 0;
let circleY = 0;
let circleRadius = 0;
let polygonX = 0;
let polygonY = 0;
let polygonRadius = 0;
let polygonNPoints = 0;
let diamondX1 = 0;
let diamondX2 = 0;
let diamondY1 = 0;
let diamondY2 = 0;

//tracing Game Variables 
let gameRun = true;
let gameEnd = false;
let circleTracingX = 0;
let circleTracingY = 0;

//coloring Game Variables
let listOfShapes = ['triangle', 'circle', 'square'];
let listOfColors = ['red','blue','green','yellow', 'orange']; 
let randomNum = 0;
let shapeColor;
let color;
let gameScoreColor = 0;
let r;
let k;
let change = true;
let fortnite = 0;


function setup() {
  createCanvas(500, 500);
  
  //matching game position calculators 
    //moveable shapes starting position
  let xPositionLeft = (1 / 10) * width;
  let yPositionLeft = (1 / 5) * width;
  let smallShapeSize = (1 / 10) * width;
  let largeShapeSize = (3 / 10) * width;

  squareX = xPositionLeft;
  squareY = yPositionLeft;
  squareLength = smallShapeSize;
  circleX = 1.5 * xPositionLeft;
  circleY = 2 * yPositionLeft;
  circleRadius = smallShapeSize;
  polygonX = 1.5 * xPositionLeft;
  polygonY = 3 * yPositionLeft;
  polygonRadius = (2 / 3) * smallShapeSize;
  polygonNPoints = 6;
  diamondX1 = 75;
  diamondY1 = 425;
  
}

function draw() {
//call functions to determin what game needs to be played 
isMatchingGame();
isTracingGame();
isColoringGame();

  
  //main menu functions 
if(mainMenu == true) {
    background('pink');
  fill('white');
  rect(0, 0, 150, 500);
  
  fill('black'); //all texts and text boxes
  textSize(26);
  text('Main Menu', 255, 30);
  textSize(20);
  text('Exercises', 30, 30);
  textSize(16);
  text('(to play an exercise just hover your\n mouse over the game square)', 200, 60);
  text('Matching Game', 20, 70);
  text('Tracing Game', 20, 210);
  text('Coloring Game', 20, 360);
  
  
  //main menu game buttons
  fill('white');
  square(25, 80, 100);
  square(25, 220, 100);
  square(25, 370, 100);
  
 
}
  
if(matchingGame == true) {
    if (gameRunning == true) {
    //create screen
    background("rgb(176,241,230)");
    fill("grey");
    rect(0, 0, 150, 500);

    //text and buttons
    mainMenuButton();
    textSize(32);
    fill("black");
    text("Shapes", 20, 50);

    textSize(32);
    text("Matching Area", 225, 50);

    textSize(28);
    text("Score: " + gameScore, 170, 90);
    text("Timer: " + timerTime, 350, 90);

    //create shapes
    line(150, 500, 150, 0);
    fill("white");

    //small shapes
    smallSquare();
    smallCircle();
    smallPolygon();
    smallDiamond();

    //large shapes
    squareColor();
    circleColor();
    polygonColor();
    diamondColor();

    //timer and game score
    if (frameCount % 60 == 0 && timerTime > 0) {
      timerTime--;
      if (timerTime < 30) {
        timerScore += 30 - timerTime;
      }
    }
    gameScore = 0 - timerScore;

    //if statements to determin if shape is inside the larger shape
    if (
      overSquare() == true &&
      mouseOnShapeSquare() == true &&
      mousePressed() == true
    ) {
      squareInsideSquare = true;
    }
    if (
      overCircle() == true &&
      mouseOnShapeCircle() == true &&
      mousePressed() == true
    ) {
      circleInsideCircle = true;
    }
    if (
      overPolygon() == true &&
      mouseOnShapePolygon() == true &&
      mousePressed() == true
    ) {
      polygonInsidePolygon = true;
    }
    if (
      overDiamond() == true &&
      mouseOnShapeDiamond() == true &&
      mousePressed() == true
    ) {
      diamondInsideDiamond = true;
    }

    //if statement that updates the score and will end the game if all shapes are correctly matched
    if (
      squareInsideSquare &&
      circleInsideCircle &&
      polygonInsidePolygon &&
      diamondInsideDiamond
    ) {
      gameRunning = false;
    }
    if (squareInsideSquare) {
      gameScore = gameScore + 100;
    }
    if (circleInsideCircle) {
      gameScore = gameScore + 100;
    }
    if (polygonInsidePolygon) {
      gameScore = gameScore + 100;
    }
    if (diamondInsideDiamond) {
      gameScore = gameScore + 100;
    }
  }
  if (gameRunning == false) {
    background("grey");
    fill("black");
    textSize(28);
    text("Final Score: " + gameScore, 150, 90);
    text("Final Time: " + timerTime, 150, 120);
    mainMenuButton();
    if((timerTime >= 50) && (gameRunning == false) && (alreadyScored == false)) {
        gameScore = gameScore + 100;
        alreadyScored = true;
      }
  }
}
//end of matching game but still in draw function 

  //start of coloring draw functioin
if(coloringGame == true) {
  fortnite = fortnite -1;
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
    fortnite = 1;
  }
  if (fortnite <= 0 ) {
    change = false;
  }
  mainMenuButton();
}
  //end of coloring game but still in draw function
  
if(tracingGame == true) {
    if(gameRun == true){  
  background(220);
  textSize(24);
  fill('black');
  text('Tracing Game', 215,30);
  mainMenuButton();
    
    //start of curved line
    fill('green');
  arc(400,250,200,300,TWO_PI,PI);
  arc(225, 250, 200, 400, PI, TWO_PI);
  fill(220);
  arc(225,250,150,350,PI,TWO_PI);
  arc(400,250,150,250,TWO_PI,PI);
    
    fill('purple');
    circleTracingX = mouseX;
    circleTracingY = mouseY;
    circle(circleTracingX,circleTracingY,30);
           
  }
           
  if(gameEnd == true) {
    clear();
    background(0);
    fill('white');
    textSize(40);
    text('GREAT JOB',175, 225);
    mainMenuButton();
  }
  if((mouseX>=475) && (mouseX<=490) && (mouseY>=245) && (mouseY<=250)) {
      gameRun = false;
      gameEnd = true;
      
    }

}
  
}
//end of draw function ^


//functions that determin what game is playing 
function mainMenuButton() {
  fill('green');
  textSize(10);
  text('main menu?', 440, 445);
  square(450,450,50);
  
  if((mouseX >= 450) && (mouseX < 500) && (mouseY > 450) && (mouseY < 500)) {
    mainMenu = true;
    matchingGame = false;
    tracingGame = false;
    coloringGame = false;
  }
}

function isMatchingGame() {
  if((mouseX >= 25) && (mouseX < 125) && (mouseY > 80) && (mouseY < 180) && (mainMenu == true)) {
    mainMenu = false;
    matchingGame = true;   
  }
}

function isTracingGame() {
  if((mouseX > 25) && (mouseX < 125) && (mouseY > 220) && (mouseY < 320) && (mainMenu == true)) {
    mainMenu = false;
    tracingGame = true;
     }
}

function isColoringGame() {
  if((mouseX > 25) && (mouseX < 125) && (mouseY > 370) && (mouseY < 470) && (mainMenu == true)) {
    mainMenu = false;
    coloringGame = true;
  }
}

















//Game Functions
  //coloring Game functions
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


//functions of matching game
function polygon(x, y, radius, npoints) {
  //draws polygon
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function diamond(x1, y1, x2, y2) {
  //draws a diamond
  let distanceX = x2 - x1;
  let distanceY = y2 - y1;

  beginShape();
  vertex((1 / 2) * distanceX + x1, y1); //top vertex
  vertex(x1, (1 / 2) * distanceY + y1); //left vertex
  vertex((1 / 2) * distanceX + x1, y2); //bottom vertex
  vertex(x2, (1 / 2) * distanceY + y1); //right vertex
  vertex((1 / 2) * distanceX + x1, y1); //top vertex again to complete outline of shape
  endShape();
}

function improvedDiamond(x1, y1) {
  let centerPointX = x1;
  let centerPointY = y1;
  const distanceX = 50;
  const distanceY = 100;

  beginShape();
  vertex(x1, y1 - (1 / 2) * distanceY);
  vertex(x1 - (1 / 2) * distanceX, y1);
  vertex(x1, (1 / 2) * distanceY + y1);
  vertex(x1 + (1 / 2) * distanceX, y1);
  vertex(x1, y1 - (1 / 2) * distanceY);
  endShape();
}

function improvedDiamondLarge(x1, y1) {
  let centerPointX = x1;
  let centerPointY = y1;
  const distanceX = 75;
  const distanceY = 150;

  beginShape();
  vertex(x1, y1 - (1 / 2) * distanceY);
  vertex(x1 - (1 / 2) * distanceX, y1);
  vertex(x1, (1 / 2) * distanceY + y1);
  vertex(x1 + (1 / 2) * distanceX, y1);
  vertex(x1, y1 - (1 / 2) * distanceY);
  endShape();
}

//basic functions for determining mouse properties
function mousePressed() {
  mouseIsDown = true;

  return mouseIsDown;
}

function mouseReleased() {
  mouseIsDown = false;

  return mouseIsDown;
}

function mouseDragged() {
  if (mousePressed() && mouseOnShapeSquare()) {
    squareX = mouseX;
    squareY = mouseY;
  } else if (mousePressed() && mouseOnShapeCircle()) {
    circleX = mouseX;
    circleY = mouseY;
  } else if (mousePressed() && mouseOnShapePolygon()) {
    polygonX = mouseX;
    polygonY = mouseY;
  } else if (mousePressed() && mouseOnShapeDiamond()) {
    diamondX1 = mouseX;
    diamondY1 = mouseY;
  }
}

//functions for shapemovement

function mouseOnShapeSquare() {
  //square
  if (
    mouseX > squareX - squareLength &&
    mouseX < squareX + squareLength &&
    mouseY > squareY - squareLength &&
    mouseY < squareY + squareLength
  ) {
    isShapePressed = true;
  } else {
    isShapePressed = false;
  }

  return isShapePressed;
}

function mouseOnShapeCircle() {
  //circle
  let d = dist(mouseX, mouseY, circleX, circleY);
  if (d < circleRadius) {
    isShapePressed = true;
  } else {
    isShapePressed = false;
  }
  return isShapePressed;
}

function mouseOnShapePolygon() {
  //polygon
  let d = dist(mouseX, mouseY, polygonX, polygonY);

  if (d < polygonRadius) {
    isShapePressed = true;
  } else {
    isShapePressed = false;
  }

  return isShapePressed;
}

function mouseOnShapeDiamond() {
  //diamond
  let d = dist(mouseX, mouseY, diamondX1, diamondY1);
  if (d < diamondX1 + 30) {
    isShapePressed = true;
  } else {
    isShapePressed = false;
  }

  return isShapePressed;
}

//functions to determin if shape is inside the other shape
function overSquare() {
  if (
    mouseX > 4 * ((1 / 10) * width) - 0.1 * squareLength &&
    mouseX < 4 * ((1 / 10) * width) + 2 * squareLength &&
    mouseY > (1 / 5) * width - 2 * squareLength &&
    mouseY < (1 / 5) * width + 2 * squareLength
  ) {
    return true;
  } else {
    return false;
  }
}

function overCircle() {
  let d = dist(
    mouseX,
    mouseY,
    5.3 * (1.5 * ((1 / 10) * width)),
    1.5 * ((1 / 5) * width)
  );
  if (d < circleRadius) {
    return true;
  } else {
    return false;
  }
}

function overPolygon() {
  let d = dist(
    mouseX,
    mouseY,
    3.25 * (1.5 * ((1 / 10) * width)),
    1.15 * (3.33 * ((1 / 5) * width))
  );
  if (d < (3 / 2) * polygonRadius) {
    return true;
  } else {
    return false;
  }
}

function overDiamond() {
  let d = dist(mouseX, mouseY, 400, 380);
  if (d < 35) {
    return true;
  } else {
    return false;
  }
}

//large shape color
function squareColor() {
  if (squareInsideSquare) {
    fill("green");
    square(4 * ((1 / 10) * width), (1 / 5) * width, 2 * squareLength);
  } else {
    fill("red");
    square(4 * ((1 / 10) * width), (1 / 5) * width, 2 * squareLength);
  }
}

function circleColor() {
  if (circleInsideCircle) {
    fill("green");
    circle(
      5.3 * (1.5 * ((1 / 10) * width)),
      1.5 * ((1 / 5) * width),
      2 * circleRadius
    );
  } else {
    fill("red");
    circle(
      5.3 * (1.5 * ((1 / 10) * width)),
      1.5 * ((1 / 5) * width),
      2 * circleRadius
    );
  }
}

function polygonColor() {
  if (polygonInsidePolygon) {
    fill("green");
    polygon(
      3.25 * (1.5 * ((1 / 10) * width)),
      1.15 * (3.33 * ((1 / 5) * width)),
      (3 / 2) * polygonRadius,
      polygonNPoints
    );
  } else {
    fill("red");
    polygon(
      3.25 * (1.5 * ((1 / 10) * width)),
      1.15 * (3.33 * ((1 / 5) * width)),
      (3 / 2) * polygonRadius,
      polygonNPoints
    );
  }
}

function diamondColor() {
  if (diamondInsideDiamond) {
    fill("green");
    improvedDiamondLarge(400, 380);
  } else {
    fill("red");
    improvedDiamondLarge(400, 380);
  }
}

//remove small shape if it fits
function smallSquare() {
  if (squareInsideSquare != true) {
    fill("white");
    square(squareX, squareY, squareLength);
  }
}

function smallCircle() {
  if (circleInsideCircle != true) {
    fill("white");
    circle(circleX, circleY, circleRadius);
  }
}

function smallPolygon() {
  if (polygonInsidePolygon != true) {
    fill("white");
    polygon(polygonX, polygonY, polygonRadius, polygonNPoints);
  }
}

function smallDiamond() {
  if (diamondInsideDiamond != true) {
    fill("white");
    improvedDiamond(diamondX1, diamondY1);
  }
}







