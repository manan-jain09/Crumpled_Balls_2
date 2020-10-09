const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper, paperObject;
var dustbin, dust;
var engine, world;


function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;
	
	

	ground = new Ground(width / 2, height - 20, width, 20);
	dustbin = new Dustbin(width - 200, height - 40);
	paper = new Paper(200, 450, 23);
	dust = new Dust(width - 200, height - 120);

	
	Engine.run(engine);
  
}


function draw() {
  background("skyblue");
  Engine.update(engine);

  drawSprites();

  rectMode(CENTER);
  paper.display();
  ground.display();
  dustbin.display();
  dust.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:110,y: -130});
	}
}

