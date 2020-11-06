
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,paper1;

function preload(){
	dustimg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400,680,800,20);
	paper1 = new Paper(100,650);
	dust1 = new Dustbin(600,660,120,20);
	dust2 = new Dustbin(550,610,20,120);
	dust3 = new Dustbin(660,610,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ground1.display();
  dust1.display();
  dust2.display();
  dust3.display();
  imageMode(CENTER);
  image(dustimg,610,600,150,150);
  paper1.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60,y:-60});
	}
}

