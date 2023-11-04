class Background extends Positionable {
    constructor(width, height, speed,image) {
        super(new Vector(0, 0));
        this.width = width;
        this.height = height;
        this.image = image
        this.speed = speed; 
        
    }

    move() {
        this.x -= this.speed; 
        if (this.x <= -this.width) {
            this.x = 0; 
        }
    }

    draw(context) {
        context.drawImage(this.image, this.x, 0, this.width, this.height);
        if (this.x < 0) {
            context.drawImage(this.image, this.x + this.width, 0, this.width, this.height);
        }
    }
}