
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var leftSide,bottom,rightSide;
var dustbin,dustbinImg;
var paper,paperImg;




function preload(){
	dustbinImg=loadImage("Images/dustbingreen.png");
	paperImg=loadImage("Images/paper.png")
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 600, 60);
	

  ground = new Ground(650, 680, 1300, 20);
  
  leftSide = new Dustbin(1005, 610, 20, 120);
  bottom = new Dustbin(1080, 660, 120, 20);
  rightSide = new Dustbin(1150, 610, 20, 120);

  
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  
	background("white");
	
	Engine.update(engine);

	ground.display();

	leftSide.display();
	bottom.display();
	rightSide.display();

	image(dustbinImg,1001,510,155,170);

	paper.display();

  
	drawSprites();
   
  }
  
  function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:770, y: -745})
	}
  }