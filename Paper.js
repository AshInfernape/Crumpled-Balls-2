class Paper{
    constructor(x , y , r)
    {
        var options = {
            density : 1,
            friction : 0.5,
            restitution : 0.3,
            isStatic : false
        }
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(this.x , this.y , this.r/2 , options)
        this.image = loadImage("images/paper.png");
       // this.body.scale = 0.1;
        World.add(world , this.body);
    }
    display(){

        var paperpos = this.body.position;

        push()
        translate(paperpos.x , paperpos.y);
        ellipseMode(RADIUS)
        strokeWeight(3);
        fill("white");
        ellipse(0,0,this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
    //    super.display()
        pop()
        
                   
    }
}