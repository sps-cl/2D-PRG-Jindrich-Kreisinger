class Scene {
    constructor(width,height,context){
        this.width = width;
        this.height= height;
        this.context = context;
        let canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
        document.body.appendChild(canvas);
        this.context= canvas.getContext("2d");
    }
    draw(...drawables){
        for (let i = 0; i < drawables.length; i++) {
            drawables[i].draw(this.context)
        }
    }
    
}