class enemy{
    constructor(x,y,width,height){
        var options={
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Matter.Bodies.rectangle(x,y,50,50,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("jpg/enemy.png")
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
    
}