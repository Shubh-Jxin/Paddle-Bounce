                                                                            var ball,img,paddle;
function preload() {
  ballImg = loadImage('ball.png');
  paddleImg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballImg); 
  ball.velocityX=9;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleImg)
  

}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  ball.bounceOff(paddle);
  
  paddle.collide(edges);
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  
  if(ball.x >=307.5){
     explosion();
  }
  
  if(ball.x > 400){
    textSize(25);
    fill("olive");
    textStyle("bold");
    text("Game Over", 130 , 200)
  }
  
  drawSprites();
  
}

function explosion()
{
  ball.velocityY=random(-8,8);
}

