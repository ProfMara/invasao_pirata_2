class BalaCanhao {
    constructor(x, y) {
        var options = {
            isStatic: true
        };
        this.r = 30;
        this.body = Bodies.circle(x, y, this.r/2, options);
        this.image = loadImage("./assets/cannonball.png");
        World.add(world, this.body);
    }
    atirar() {

    }

    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
        pop();
    }


}