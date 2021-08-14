/*var gameState = "opening";
var logo;
var change;
var change1;
var bg;
var claire;
var player;
var bullet;
var platform;;

var platform2;

var zombie;
var bulletGrp
var zombieGrp
var score=0;
var timer=1100;
var magazine=55;
var resetButton;*/
var about

function preload() {
    changeimg = loadImage("change.png");
    logoimg=loadImage("openingimage.gif")
    aboutimg=loadImage("")
}

function setup() {
  
    createCanvas(windowWidth,windowHeight)
    change = createSprite(width-100,height-70,20,20);
    change.addImage(changeimg)
    change.scale=0.05
    

    platform2=createSprite(68,400,1000,5)
    platform=createSprite(200,280,1000,5)

    platform.visible=false;
    platform2.visible=false;
    
    logo = createSprite(width/2,height/2);
    logo.addImage(logoimg)
    logo.scale= 2

    about=createSprite(50,50,20,20)



   

   // bulletGrp=createGroup();
 //zombieGrp=createGroup()
}

function draw() {
    
    background(0);


    drawSprites();

}


