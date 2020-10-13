var zenia;

var wall;

var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
  
  
  
  

  zenia=createSprite(50, 200, 50, 50);
  zenia.shapeColor=("red");

  wall=createSprite(1200, 200, 60, height/2);
  wall.shapeColor=color(80,80,80);
  zenia.velocityX=speed;
  drawSprites();
}

function draw() {
  background(0);  

  
 

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


  





  drawSprites();
}
