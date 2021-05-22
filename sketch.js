const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var Stone,Iron,rubber;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    Stone = new stone(100,100,100,100);
    rubber = new Rubber(700,100,50);
    Iron= new iron(500,100,100,100);


}

function draw(){
    background("lightBlue");
    


    plane.display();
    hammer.display();
    Stone.display();
    rubber.display();
    Iron.display();
    Engine.update(engine);
 
}