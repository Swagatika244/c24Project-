const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;
var playerArcher, computerArcher;
var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  // computerArcher = new ComputerArcher(
  //   width - 340,
  //   computerBase.body.position.y - 180,
  //   120,
  //   120
  // );


  computerArcher= new ComputerArchery(340,270,0);
  playerArcher= new PlayerArchery(width-330,275,0);
 

  //Create an arrow Object
  computerArrow= new ComputerArrow(365,270, 50, 30, computerArcher.angle);
  playerArrow= new PlayerArrow(width-365,275, 50, 30, playerArcher.angle);
  
}

function draw() {
  background('#bfffff');

  Engine.update(engine);

  // Title
  fill("#630436");
  textAlign("center");
  textSize(40);
  textStyle(BOLD);
  text("EPIC ARCHERY", width / 2, 100);
  text("PRESS THE 'SPACE_KEY'", width / 2, height-100);

  fill("#f48737");
  text("UP_KEY", 365, 100+50);
  text("UP_KEY", width-365, 100+50);
  text("DOWN_KEY", 365, height-150);
  text("DOWN_KEY", width-365, height-150);



 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  
  computerArcher.display();
  playerArcher.display();

  //Display arrow();
  computerArrow.display();
  playerArrow.display();
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher
    computerArrow.shoot(computerArcher.angle);
    playerArrow.shoot(playerArcher.angle);


  }
}



