
let gameRun = true;
let gameEnd = false;
let circleTracingX = 0;
let circleTracingY = 0;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  if(gameRun == true){  
  background(220);
  textSize(24);
  fill('black');
  text('Tracing Game', 215,30);
  noStroke();
 
    
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
  }
  if((mouseX>=475) && (mouseX<=490) && (mouseY>=245) && (mouseY<=250)) {
      gameRun = false;
      gameEnd = true;
      
    }
}

