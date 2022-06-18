class Ground {
    constructor(x,y,w,h){
      var options = {isStatic: true}
      this.x = x
      this.y = y
      this.width = w
      this.height = h
      this.body = Bodies.rectangle(x,y,w,h,options)
      World.add(world, this.body);
    }
    display()
    {
    var p = this.body.position
    push ()
    translate (p.x,p.y)
    rectMode(CENTER)
    fill ("yelllow")
    rect (0,0,this.width,this.height)
    pop ()
    }
}