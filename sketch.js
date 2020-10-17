
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject , paperImage;
var ground;
var dustbin1 , dustbin2 , dustbin3;
function preload()
{

}

function setup() {
	createCanvas(800, 700);
   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(470,596.5,10,150);
	dustbin2 = new Dustbin(400,570,200,200);
	dustbin3 = new Dustbin(330,570.5,10,200);

    ground = new Ground(400,680,800,20);
    paperObject = new Paper(100,650,10);
	Engine.run(engine);
  
}


function draw() {
	console.log(dustbin2.x)
	console.log(dustbin2.y)
  rectMode(CENTER);
  background(0);
  paperObject.display();
 dustbin1.display();
 dustbin3.display();
 ground.display();
 dustbin2.display();
 

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:1,y:-5});
	}

}


