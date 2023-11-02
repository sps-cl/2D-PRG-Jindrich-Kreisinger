class Meteor extends GameObject{
    constructor(position,speed,size){
        super(position);
        this.speed = speed;
        this.sprite = new Sprite ("meteor", position, size, size);
        this.collider = new CircleCollider(position,size/2); 
    }

    move(){
        super.move();
        if (this.collider.rightEdge < this.minBounds.x){
            this.onSceneExit()
        }
    }
}
