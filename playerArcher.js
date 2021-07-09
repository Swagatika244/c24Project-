class PlayerArchery{
    constructor(x, y, angle){
        this.image=loadImage('playerArcher3.png');
        this.angle=angle;
        this.x=x;
        this.y=y;
        
        
    }

    display(){
   // var angle=this.angle;

        if (keyIsDown( DOWN_ARROW)&& this.angle >-PI/6){
            this.angle-=0.02;
        }
        if (keyIsDown(UP_ARROW) && this.angle <PI/6) {
            this.angle += 0.02;
          }

     push ();
     translate(this.x+50, this.y);
     rotate(this.angle);
     imageMode(CENTER);
     image(this.image, -50, 0, 100,100);
     pop();
    }
}