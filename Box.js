class Box {
    constructor(x, y, width, height) {
        var options = {
         'restitution':0.8,
          'friction':1.0,
          'density':1.2,
          'isStatic': false
        }
        this.visibility = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(color, border) {
        var pos = this.body.position;
        var angle = this.angle;
        push();
        if (this.body.speed < 5) {
            rectMode(CENTER);
            translate(pos.x, pos.y);
            rotate(angle);
            fill(color);
            stroke(border);
            strokeWeight(4);
            rect(0, 0, this.width, this.height);
            pop();
        } else {
            push();
            World.remove(world, this.body);
            this.visibility = this.visibility - 5;
            tint(255, this.visibility);
            pop();
        }
    }

    score() {
        if(this.Visibility < 0 && this.Visibility > -105){
            score = score + 1;
        }
      }
}