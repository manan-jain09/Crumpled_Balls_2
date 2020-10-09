class Dust{
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.dustbinWidth=230;
		this.dustbinHeight=230;
		this.angle = 0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.dustbinHeight, {isStatic:true})
		this.image = loadImage("dustbingreen.png");
	}
	display(){
			var posBottom=this.bottomBody.position;

			push()
			translate(posBottom.x, posBottom.y);
            imageMode(CENTER);
            image(this.image, 0, 0, this.dustbinWidth, this.dustbinHeight);
			pop()
			
	}

}
