const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
//var wallPaper;
var backgroundImg;


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  tower = new Tower(150, 10, 160, 310);
  ground = new Ground(10,500,1200,20);
  cannon = new Cannon(100,110,100,50,angle);
  
}

function draw() {
  
  background(0);
  
 image(backgroundImg,300,300,1200,600)

  

  Engine.update(engine);
  ground.display();
  cannon.display();

  tower.display();
 // drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY) 
 
}







