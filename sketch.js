var zenia;
var tourus;
var Cyclap;
var wall;

var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
  
  
  
  Cyclap=createSprite(50, 100, 50, 50);
  Cyclap.shapeColor=("red");

  tourus=createSprite(50, 300, 50, 50);
  tourus.shapeColor=("red");

  zenia=createSprite(50, 200, 50, 50);
  zenia.shapeColor=("red");

  wall=createSprite(900, 100, 60, 900);
  wall.shapeColor=color(80,80,80);
  drawSprites();
}

function draw() {
  background(0);  

  zenia.velocityX=speed;
  tourus.velocityX=speed;
  Cyclap.velocityX=speed;

  if(wall.x-zenia.x<(zenia.width+wall.width)/2  ){
    zenia.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>100){
      zenia.shapeColor=color(255,0,0); 
    }
    if(deformation<180 && deformation>100){
      zenia.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      zenia.shapeColor=color(0,255,0);
    }
  }

if(wall.x-tourus.x<(tourus.width+wall.width)/2  ){
    tourus.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>100){
      tourus.shapeColor=color(255,0,0); 
    }
    if(deformation<180 && deformation>100){
      tourus.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      tourus.shapeColor=color(0,255,0);
    }
  }

  if(wall.x-Cyclap.x<(Cyclap.width+wall.width)/2  ){
    Cyclap.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>100){
      Cyclap.shapeColor=color(255,0,0); 
    }
    if(deformation<180 && deformation>100){
      Cyclap.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      Cyclap.shapeColor=color(0,255,0);
    }
  }





  drawSprites();
}