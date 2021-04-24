
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	bob1 = new Bob(320, 575, 40);
	roof = new Roof(400, 250, 230, 20);
	rope1 = new Rope(bob1.body, roof.body, -80, 0);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");

  roof.display();
  rope1.display();
  bob1.display();
 
  
  drawSprites();
 
}



