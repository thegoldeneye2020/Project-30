class Polygon {
    constructor(x,y) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      this.body= Bodies.circle(x,y,60,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("pink");
      ellipse(pos.x, pos.y,60);
    }
  };