var Jaxon, JaxonRun;
var BackgroundImg;


function preload(){
  //imagens pré-carregadas
  BackgroundImg = loadImage("path.png")
  JaxonRun = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  Backgr0und = createSprite(200,200)
  Backgr0und.addImage("path", BackgroundImg);
  Jaxon = createSprite(200, 350, 10, 10);
  Jaxon.addAnimation("Running_Man", JaxonRun);
  Jaxon.scale = 0.05
}

function draw() {
  background(0);
  Backgr0und.velocityY = 2;
  if(Backgr0und.y > 400){
    Backgr0und.y = Backgr0und.height/8;
  }
  Jaxon.x = World.mouseX
  drawSprites();
}
