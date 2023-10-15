class RectCollider extends Positionable{
    constructor (position,width,height){
        super (position);
        this.width = width;
        this.height = height;
    }

    collideWith(other){
        other.collideWithRect(this)
    }

    collideWithRect(other){
        CollisionDetection.checkRectCollision(this, other);
    }

    collideWithCircle(other){
        CollisionDetection.checkRectCircleCollision(this, other);
    }

    get leftEdge (){
        return this.x;
    }

    get rightEdge(){
        return this.x + this.width;
    }

    get topEdge(){
        return this.y;
    }

    get bottomEgde(){
        return this.y + this.height;
    }

    set leftEdge (value){
        this.x = value;
    }

    set rightEdge(value){
        this.x = value - this.width;
    }

    set topEdge(value){
        this.y = value;
    }

    set bottomEgde(value){
         this.y = value - this.height;
    }
}