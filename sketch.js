var path,boy,apple,cherry,gameover;
var pathImg,boyImg,appleImg,cherryImg,gameoverImg;



function preload(){
   
pathImg.loadImage("path.jpg");
appleImg.loadImage("apple.png");
cherryImg.loadImage("cherry.png");
gameoverImg.loadImage("gameover.png");
boyImg.loadAnimation("man1.png,man2.png");

}


function setup() {
    createCanvas(1200,300);
   
    path=createSprite(100,150);
    path.addImage(path);
    path.velocityX = -5;

    boy=createSprite(70,150);
    boy.addAnimation("manRunning",boyImg)
    boy.scale=0.07




   

 
}

function draw() {
    drawSprites()
 
}