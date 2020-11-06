class Paper {
    constructor(x, y) {
      var options = {
          isStatic : false,
          'restitution':0.8,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.width = 70;
      this.height = 70
      this.image = loadImage("paper.png");      
      World.add(world, this.body);
      this.body.debug = true;
    }
    display(){
      var pos = this.body.position;
      
      push();
      //fill("red");
      //ellipseMode(RADIUS);
      //ellipse(pos.x ,pos.y , this.width, this.height);
      imageMode(RADIUS);
      image(this.image,pos.x,pos.y,this.width,this.height);
      pop();
      
    }
  };