class Roof {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x, this.y, width / 2, 50, { isStatic: true });
        World.add(world, this.body);
    }

    display() {
        rectMode(CENTER);
        fill("yellow");
        rect(this.body.position.x, this.body.position.y, width / 2, 30);
    }
}