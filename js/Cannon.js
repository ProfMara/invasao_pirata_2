class Canhao {
    constructor(x, y, width, height, angle) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.canhaoImg = loadImage("assets/canon.png");
        this.canhaoBaseImg = loadImage("assets/cannonBase.png");
    }
    display() {
      
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.canhaoImg, 0, 0, this.width, this.height);
        pop();
        image(this.canhaoBaseImg, 70, 20, 200, 200);

    }


}