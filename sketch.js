var spaceShipImage;
var bgImage;
var spaceShip;
var alien,alienImage;
var laser,laserImage;

function preload()
{
  bgImage=loadImage("SpaceBg.PNG");
  spaceShipImage=loadImage("plane.PNG");
  alienImage=loadImage("alien2.PNG");
  laserImage=loadImage("laser.PNG");
}


function setup() {
  createCanvas(750, 900);
  
  spaceShip=createSprite(350,600,50,50)
  spaceShip.addImage(spaceShipImage);
  spaceShip.scale=0.3
  
  alienGroup = new Group();
  laserGroup=new Group();
}

function draw() {
  background(bgImage);

if(keyDown(LEFT_ARROW))
{
  spaceShip.x = spaceShip.x-7;
}

if(keyDown(RIGHT_ARROW))
{
  spaceShip.x=spaceShip.x+7;
}

if(keyDown("space"))
{
   createLaser();
}


if(laserGroup.isTouching(alienGroup))
{
 alienGroup.destroyEach();
}


spawnAliens();

  drawSprites();
}

function spawnAliens()
{
 if(frameCount%200===0)
 {
    alien=createSprite(350,20,60,60);
    alien.velocityY = 3.5
    alien.addImage(alienImage);
    alien.x=Math.round(random(20,600));
    alienGroup.add(alien);
 }
}

function createLaser()
{
  laser=createSprite(200, 400, 5, 50);
              laser.addImage(laserImage);
              laser.velocityY=-6;
              laser.x=spaceShip.x;
              laser.scale=0.3;
              laser.lifetime = 80;
              laserGroup.add(laser);
}