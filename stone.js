class stone {
    constructor(x,y,width,height)
    {
        var options = {
            restitution : 0.8,
            friction : 0.9,
            density :12,
        }
        this.body = Bodies.rectangle(x,y,20,20,options);
        this.width = 20;
        this.height = 20;
        World.add(world,this.body);
    }
    display()
    { 
       
        push()
			translate(this.body.position.x, this.body.position.y);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("grey");
			
            rect(0,0,this.width,this.height);
	    pop()
     
    }
}
