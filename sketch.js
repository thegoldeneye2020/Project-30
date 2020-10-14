const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var shot,polygon;
var engine, world;


function preload()
{
	
}



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  ground=new Ground(350,250,190,20);
  box1=new Box(330,220);
  box2=new Box(289,220);
  box3=new Box(371,220);
  box4=new Box(412,220);
  box5=new BOX(393,179);
  box6=new BOX(352,179);
  box7=new BOX(311,179);
  box8=new Box(374,138);
  box9=new Box(333,138);
  box10=new BOX(353,97);
platform=new Ground(100,390,3000,20);
  polygon=new Polygon (50,200);
 shot= new SlingShot(polygon.body,{x:100,y:200});

 dustbin=new Dustbin(725,310,130,130);
  Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background("orange");  
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
 shot.display();
  polygon.display();
dustbin.display();
 platform.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function  mouseReleased(){
  shot.fly();
}

function keyPressed(){
  if(keyCode===32){
shot.attach(polygon.body);
  }
}