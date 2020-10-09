class Paper{
    constructor(x, y, r){
        var paper_options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r, paper_options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 70, 70);
        pop();
    }
}