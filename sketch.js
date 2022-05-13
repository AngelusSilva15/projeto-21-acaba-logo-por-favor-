var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_options={
   isStatic:false
    restitution:0.3
    friction:0,
    desity:1.2
}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Matter.Bodies.circle(x,y, radius, [options], [maxSides])

	Engine.run(engine);
  
}
function keyPressed(){
   if (keyCode === UP_ARROW){
	groudObj.display();
	groudObj=new groud(width/2,670,width,20);
	leftSide = new groud(1100,600,20,120)


   }

}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



