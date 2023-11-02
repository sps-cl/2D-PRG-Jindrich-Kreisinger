class Score extends Positionable{
    constructor(position, font, size){
        super(position);
        this.value = 0;
        this.gont = size + "px" + " " + font
    }
    increase(){
        this.value += 1
    }

    draw (context){
        context.font = this.font
        context.fillText(this.value, this.x, this.y)
    }
}