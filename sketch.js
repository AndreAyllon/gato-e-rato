var canvas,gatoImage1,gatoImage2,gatoImage3,gato,rato,ratoImage1,ratoImage2,ratoImage3;
var canvasImages;
function preload() {    
    //load the images here
canvasImages = loadImage("images/garden.png");
gatoImage1 = loadAnimation("images/cat1.png");
gatoImage2 = loadAnimation("images/cat2.png","images/cat3.png");
gatoImage3 = loadAnimation("images/cat4.png");
ratoImage1 = loadAnimation("images/mouse1.png");
ratoImage2 = loadAnimation("images/mouse2.png","images/mouse3.png");
ratoImage3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
rato = createSprite(200,600);
rato.addAnimation("ratoparado",ratoImage1);
rato.scale = 0.15;
gato = createSprite(800,600);
gato.addAnimation("gatoparado",gatoImage1);
gato.scale = 0.2;
}

function draw() {

    background(canvasImages);
    //Write condition here to evalute if tom and jerry collide
    if(gato.x - rato.x < (gato.width - rato.width)/2){
    gato.velocityX = 0;
    gato.addAnimation("gato3",gatoImage3);
    gato.x = 300;
    gato.scale = 0.2;
    gato.changeAnimation("gato3",gatoImage3);
    rato.addAnimation("rato3",ratoImage3);
    rato.scale = 0.15;
    rato.changeAnimation("rato3",ratoImage3);

    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
gato.velocityX = -5;
gato.addAnimation("gato2",gatoImage2);
gato.changeAnimation("gato2",gatoImage2);
rato.addAnimation("rato2",ratoImage2);
rato.frameDelay = 25;
rato.changeAnimation("rato2",ratoImage2);

}

}
