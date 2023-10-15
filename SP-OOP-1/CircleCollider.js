class CircleCollider extends Positionable{
    constructor (position, radius){
        super (position);
        this.radius = radius;
    }

    collideWith (other){
        other.collideWithCircle(this)
    }

    collideWithRect (other){
        CollisionDetection.checkRectCircleCollision(other,this);
    }

    collideWithCircle (other){
        CollisionDetection.checkCircleCollision(other,this);
    }

    get leftEdge (){
        return this.x;
    }

    get rightEdge(){
        return this.x + this.radius * 2;
    }

    get topEdge(){
        return this.y;
    }

    get bottomEgde(){
        return this.y + this.radius * 2
    }

    set leftEdge (value){
        this.x = value;
    }

    set rightEdge(value){
        this.x = value - this.radius * 2;
    }

    set topEdge(value){
        this.y = value;
    }

    set bottomEgde(value){
         this.y = value - this.radius * 2;
    }

    get center() {
        new Vector(this.x + this.radius, this.y + this.radius)

    }
}