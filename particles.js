class Particles{
    constructor(x,y){
        var options = {
            restitution : 0.4
        }
        this.particles=Bodies.circle(x,y,5,options);
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.particles)

            
    }
    display(){
        var pos=this.particles.position;
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,5,5);
    }

}
  