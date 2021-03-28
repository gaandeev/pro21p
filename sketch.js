var canvas;
var music;
var block1,block2,block3,block4,ball,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1=createSprite(200,500,50,100);
    block1.shapeColor="red";
    block2=createSprite(350,500,50,100);
    block2.shapeColor="blue";
    block3=createSprite(500,500,50,100);
    block3.shapeColor="green";
    block4=createSprite(650,500,50,100);
    block4.shapeColor="yellow";

    ball = createSprite(random(20,750),100, 40,40);
     ball.shapeColor = "red";
      ball.velocityX = 4; 
      ball.velocityY = 9;
}

function draw() {
    background(180);
     //create edgeSprite
 edges=createEdgeSprites();
  ball.bounceOff(edges);
  if(block1.isTouching(ball) && ball.bounceOff(block1)){
    ball.shapeColor = rgb(0,0,255);
    music.play(); }
  if(block2.isTouching(ball)){
    ball.shapeColor = rgb(255,128,0);
    ball.velocityX = 0;
    ball.velocityY = 0;
    music.stop(); }
 if(block3.isTouching(ball) && ball.bounceOff(block3)){
    ball.shapeColor = rgb(0,0,255);
    music.play(); }
 if(block4.isTouching(ball) && ball.bounceOff(block4)){
    ball.shapeColor = rgb(0,0,255);
    music.play(); }
   
   

      drawSprite();

}
