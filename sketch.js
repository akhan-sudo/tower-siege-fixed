const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  block1= new Box(520,235,30,40);
  block2= new Box(550,235,30,40);
  block3= new Box(580,235,30,40);
  block4= new Box(610,235,30,40);
  block5= new Box(640,235,30,40);
  block6= new Box(670,235,30,40);
  block7= new Box(700,235,30,40);
  
  block8 = new Box(550,195,30,40);
  block9= new Box(580,195,30,40);
  block10= new Box(610,195,30,40);
  block11= new Box(640,195,30,40);
  block12= new Box(670,195,30,40);
  block13= new Box(580,155,30,40);
  block14= new Box(610,155,30,40);
  block15= new Box(640,155,30,40);
  block16= new Box(610,115,30,40);

  ground=new Ground(610,260,280,15);
  ground2=new Ground(400,400,800,15);
  ball=new Ball(200,200,20)

  chain=new SlingShot(ball.body,{x:200,y:150})
  Engine.run(engine);
}


function draw() {
  background(0);  

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  ground.display();
  ground2.display();
  ball.display();
  chain.display();



  drawSprites();
}
function mouseDragged(){
  
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  chain.fly();

}