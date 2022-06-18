
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground, engine, world
function preload(){
	
}
function setup() {
	createCanvas(1000, 800);
       var ball_options = {
		isStatic: false,
		restituion: 0.3,
        friction: 0,
		density: 1.2
	}
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(500,770,1000,20)
    World.add (world, ground)
	leftBody = new Ground(650,700,30,120)
	World.add(world, leftBody)
    rightBody = new Ground (500,700,20,120)
	//Create the Bodies Here.
    ball = Bodies.circle(400, 700, 20, ball_options) 
    World.add (world, ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ellipseMode(RADIUS)
  ellipse (ball.position.x, ball.position.y, 20, 20)
  drawSprites();
  leftBody.display()
  rightBody.display()
  
  

 
 
}

function keyReleased(){
    Matter.Body.applyForce(ball, ball.position,{x:15, y:-27})
}

