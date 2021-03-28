const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;
var drop=[];
var a;
var man1;
var thunder, thunIm1, thunIm2, thunIm3, thumIm4;
var ran1;

function preload(){
    thunIm1 = loadImage("thun1.png");
    thunIm2 = loadImage("thun2.png");
    thunIm3 = loadImage("thun3.png");
    thunIm4 = loadImage("thun4.png");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;
    if(frameCount % 20 == 0){
        for(b = 0; b<=10;b++)
          drop.push(new drops());
    }
    man1 = new man();

    
}

function draw(){
    background(0);
    Engine.update(engine);
    for(var a=1; a<=10; a++){
    drop[a].display();
    drop[a].positionUpdate();
    }
    man1.display();
 
   
    if(frameCount % 70 == 0){
        ran = Math.round(random(1,4));
        thunder = createSprite(windowWidth-100, 80);
        thunder.scale  = 0.6;
        switch (ran){
            case 1: 
            thunder.addImage(thunIm1);
            break;
            case 2:
                thunder.addImage(thunIm2);
                break;
                case 3: 
                thunder.addImage(thunIm3);
                break;
                default:
                    thunder.addImage(thunIm4);
        }
        thunder.lifetime = 40;
        }
        
    drawSprites();
    
}  



