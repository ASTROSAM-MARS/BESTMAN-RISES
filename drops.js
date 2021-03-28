class drops{
    constructor(){
        var options = {
            isStatic : false, 
            friction : 1
        }
        this.body = Bodies.circle(random(0, windowWidth),random(-150, 0),12, options); 
        this.image = loadImage("bat1.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(0, 57, 245);
        imageMode(CENTER);
        image(this.image,pos.x, pos.y , 100, 100);
    }
    positionUpdate(){
        if(this.body.position.y>windowHeight){
            Matter.Body.setPosition(this.body, {x : random(0, windowWidth), y : random(-150,0)}); 
        }
    }
}