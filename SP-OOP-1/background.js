<<<<<<< HEAD
class Background extends Positionable {
    constructor(width, height, speed,image) {
        super(new Vector(0, 0));
        this.width = width;
        this.height = height;
        this.image = image
        this.speed = speed; 
        
=======
class Background{
    constructor(width,height,){
        this.width = width;
        this.height = height;
        this.image = document.getElementById("background")
       
>>>>>>> 0bdf87a8396ee2266d7dd3438249550633fc7732
    }

    move() {
        this.x -= this.speed; 
        if (this.x <= -this.width) {
            this.x = 0; 
        }
    }

    draw(context) {
<<<<<<< HEAD
        context.drawImage(this.image, this.x, 0, this.width, this.height);
        if (this.x < 0) {
            context.drawImage(this.image, this.x + this.width, 0, this.width, this.height);
        }
=======
        context.drawImage(this.image,0,0,this.width,this.height) 
        
>>>>>>> 0bdf87a8396ee2266d7dd3438249550633fc7732
    }
}