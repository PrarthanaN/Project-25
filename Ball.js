class Ball{
    constructor(x, y, radius){
        var ball_options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, ball_options);
        this.image = loadImage("Images/paperBall.png")
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(255, 0, 255);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius + 35, this.radius +35);
        pop();

    }
}
