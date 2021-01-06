var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
movingRect= createSprite(200,300,40,50);
movingRect.shapeColor= "cyan"
fixedRect= createSprite(400,200,50,80);
fixedRect.shapeColor= "cyan";
}

function draw() {
  background("black"); 
  movingRect.x= World.mouseX;
  movingRect.y = World.mouseY; 
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
      fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
      movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2 && 
      fixedRect.y - movingRect.y < movingRect.width/2 + fixedRect.width/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
  movingRect.shapeColor="cyan";
  fixedRect.shapeColor="cyan";  
  }
  drawSprites();
}