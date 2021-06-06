const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var platform1,platform2;
var block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20,block21,block23,block24,block25;
var  slingshot;
var polygon_Img,polygon;
function preload() {
polygon_Img=loadImage("Polygon.gif");  
}

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(500,470,1000,20);
    platform1 = new Ground(360,350,280,15);
    platform2 = new Ground (790,270,240,15);                                                                  
    block1=new Block(260,340,50 ,55);
    block2=new Block(310,340,50,55);
    block3=new Block(360,340,50,55);
    block4=new Block(410,340,50,55);
    block5=new Block(460,340,50,55);
    block6=new Block(280,300,50,55);
    block7=new Block(330,300,50,55);
    block8=new Block(380,300,50,55);
    block9=new Block(430,300,50,55);
    block10=new Block(300,250,50,55);
    block11=new Block(350,250,50,55)
    block12=new Block(400,250,50,55);
    block13=new Block(330,100,50,55);
    block14=new Block(380,100,50,55);
    block15=new Block(360,50,50,55);
    block16=new Block(720,260,50,55);
    block17=new Block(770,250,50,55);
    block18=new Block(810,250,50,55);
    block19=new Block(850,250,50,55);
    block20=new Block(745,220,50,55);
    block21=new Block(790,220,50,55);
    block22=new Block(830,220,50,55);
    block23=new Block(770,150,50,55);
    block24=new Block(800,150,50,55);
    block25=new Block(780,50,50,55);
    //bird = new Bird(1,48);
    //log6 = new Log(230,180,80, PI/2);
    polygon=Bodies.circle(50,200,20);
    World.add (world,polygon);
    slingshot = new Slingshot(this.polygon,{x:50, y:200});
}

function draw(){
    background ("grey")
    
    Engine.update(engine);
    
   
    
    stroke("black");
    strokeWeight(4);

    fill(0,255,255);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
     fill(221,160,221);
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    fill(173,255,47);
    block10.display();
    block11.display();
    block12.display();
   fill(220,20,60);
    block13.display();
    block14.display();
    block15.display();
    fill(221,160,221);
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    fill(0,255,255); 
    block20.display();
    block21.display();
    block22.display();
    fill(173,255,47);
    block23.display();
    block24.display();
    block25.display();

    ground.display();
    platform1.display();
    platform2.display();
    //bird.display();
    //log6.display();
    slingshot.display();
    text(mouseX+","+mouseY,10,10);  
    imageMode(CENTER) ;
    image(polygon_Img,polygon.position.x,polygon.position.y,40,40);

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
  }
  function keyPressed(){
    if (keyCode===32);
    slingshot.attach(this.polygon);
  }