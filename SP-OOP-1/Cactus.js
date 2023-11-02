class Cactus extends GameObject{
    constructor(position, speed, width, height){
        super(position);
        this.speed = speed;
        this.sprite = new Sprite ("cactus", position, width, height)
        this.collider = new RectCollider(position, width, height);
    }
    move(){
        super.move;
        if (this.collider.rightEdge < this.minBounds.x){
            this.onSceneExit()
        }
    }
    
}