const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var caixa;
var bloca_const; 

function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var caixa_options = {
    restitution : 0.05,
    frictionAir : 0.01
  }

  var bloco_const_options = {
    restitution : 0.05,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }

  caixa = Bodies.circle(100,10,15,caixa_options);   
  World.add(world,caixa)
  
  bloca_const = Bodies.circle(350,10,20,bloco_const_options);   
  World.add(world,bloca_const)

  ball = Bodies.circle(200,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
 rect(caixa.position.x,caixa.position.y,30); 
 rect(bloca_const.position.x,bloca_const.position.y,80,40); 
}
