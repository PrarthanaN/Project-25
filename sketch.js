
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball, box1, box2, box3;
var dustbin, dustbinImg;

function preload()
{
	dustbinImg = loadImage("Images/dustbin.png");
}

function setup() {
	createCanvas(800, 700);
	background(0, 0, 0);
	rectMode(CENTER);
	ellipseMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	 ground = new Ground (width/2, 650, width, 15);

	 box1 = new Dustbin(480, 530, 20, 200);
	 box2 = new Dustbin(580, 632, 200, 20);
	 box3 = new Dustbin(680, 530, 20, 200);

	 paperBall = new Ball(150, 450, 20);

	 dustbin = createSprite(580, 525,);
	 dustbin.addImage(dustbinImg);
	 dustbin.scale = 0.7;
  
	// keyPressed();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  Engine.update(engine);

	ground.display();

	//box1.display();
	//box2.display();
	//box3.display();
	// keyPressed();
	paperBall.display();

  drawSprites();
//   ();

}

function keyPressed(){
	
	if (keyCode === 32){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:50,y:-70 });
	}
	if (keyCode === LEFT_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:-50,y:-70 });
	}
}

