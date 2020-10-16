const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

const diameter = 50;

let bob1, bob2, bob3, bob4, bob5;
let rope1, rope2, rope3, rope4, rope5;
var roof;

function setup() {
	createCanvas(800, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(width / 2, 100);

	bob1 = new Bob(width / 2 - diameter * 2, 500);
	bob2 = new Bob(width / 2 - diameter, 500);
	bob3 = new Bob(width / 2, 500);
	bob4 = new Bob(width / 2 + diameter, 500);
	bob5 = new Bob(width / 2 + diameter * 2, 500);

	rope1 = new Rope(bob1.body, roof.body, -diameter * 2, 0);
	rope2 = new Rope(bob2.body, roof.body, -diameter, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, +diameter, 0);
	rope5 = new Rope(bob5.body, roof.body, +diameter * 2, 0);
	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
	frameRate(50);
	background(0);

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	noStroke();
	roof.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	if(mouseIsPressed){
		Body.setPosition(bob1.body, {x: mouseX, y: mouseY});
	}
}