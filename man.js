class man{
    constructor(){
        var options = {
            isStatic : true
        }
        this.body = Bodies.circle(windowWidth/2, windowHeight-180, 150, options);
        this.image = loadImage("Bestman-01.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 350, 400); 
    }
}