class Dustbin{
    constructor(x, y, width, height){
    var options = {
        friction : 0.8,
        isStatic : true,
    }
    this.body = Bodies.rectangle(x, y, width, height, options );
    this.width = width;
    this.height = height;
    this.image = loadImage("images/dustbingreen.png");
    World.add(world, this.body);
    }
    
     display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        fill("#1bd1e3");
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        //super.display()
        pop()
    }
    }