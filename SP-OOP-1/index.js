let scene = new Scene (1100,700);
let background = new Background(scene.width,scene.height);
let score = new Score(new Vector(scene.width / 2, 50), "Arial", 30);
let player = new Player (new Vector(100, 0), 150);
player.maxBounds = new Vector(scene.width, scene.height * 0.87);

function  randomObstacle (xPos){
    if(Math.random() > 0.5){
        obstacle = new Meteor(new Vector(xPos, scene.height * 0.5), new Vector(-5, 0), 140);          
    }else{
         obstacle = new Cactus( new Vector(xPos, scene.height * 0.7), new Vector(-5, 0), 100,
        100)
    }
    obstacle.minBounds = new Vector (0,0);
    obstacle.maxBounds = new Vector (scene.width,scene.height);
    return obstacle;
}

let obstacle1 = randomObstacle(scene.width);
let obstacle2 = randomObstacle(scene.width * 1.5);

function onObstacle1Exit() {
    obstacle1 = randomObstacle(scene.width);
    obstacle1.onSceneExit = onObstacle1Exit;
}

function onObstacle2Exit() {
    obstacle2 = randomObstacle(scene.width);
    obstacle2.onSceneExit = onObstacle2Exit;
}

obstacle1.onSceneExit = onObstacle1Exit;
obstacle2.onSceneExit = onObstacle2Exit;

let keys = [];

document.onkeydown = function(event) {
    keys[event.key] = true;
}

document.onkeyup =  function (event) {
    keys[event.key] = false;
}

function gameLoop() {
    score.increase();
    if (keys["s"]) player.crouch();
    else player.getUp();
    if (keys["w"]) player.jump();
    player.move();
    obstacle1.move();
    obstacle2.move();
    scene.draw(background,player,obstacle1,obstacle2,score);
    if(player.collideWith(obstacle1) || player.collideWith(obstacle2)){
        return;
    }
    requestAnimationFrame(gameLoop);
}

gameLoop();
