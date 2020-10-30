
var monkey , monkey_running ;
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup ;
var score ;
var ground ;
var survivalTime = 0 ;
var score = 0 ;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
 
}



function setup() {
 
  monkey= createSprite(80 , 315 , 20 , 20);
  monkey.addAnimation("moving ", monkey_running);
  monkey.scale = 0.1 ;
  ground = createSprite(400 , 350 , 900 , 10);
  ground.velocityX = -4 ;
 bananaGroup = new Group() ;
  obstacleGroup = new Group();
  

  
}


function draw() {
  background(255);

  if (keyDown("space"))
    {
      monkey.velocityY = -12 ;
      
      
    }
  monkey.velocityY = monkey.velocityY + 0.8 ;
  
  ground.x = ground.width/2;
  monkey.collide(ground);
 
spawnBananas();
  spawnObstacles();
  stroke ("black");
  textSize = 20 ;        
  fill("black");
  text ("score " + score , 300 , 50);
  
  stroke ("black");
  textSize = 20 ;
  fill ("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text ("survival time " + survivalTime , 100 , 50);
  
  drawSprites();
}

function spawnBananas()
{
  if (frameCount%80 === 0 )
    {
      banana = createSprite(400 , 100 , 20 , 20);
      banana.addImage(bananaImage);
      banana.scale = 0.1;
      banana.y = Math.round(random(120 , 200));
      banana.velocityX = -5 ;
      banana.lifetime = 300 ;
      bananaGroup.add(banana);
    }
}
 
function spawnObstacles()
{
  if(frameCount%300 === 0)
  {
  obstacle = createSprite(400 , 330, 100 , 100);
  obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -1;
    obstacle.lifetime = 300 ;
    obstacleGroup.add (obstacle);
  }
}





