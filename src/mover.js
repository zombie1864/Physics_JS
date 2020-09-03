class Mover {
    constructor(x, y, m) {
      this.mass = m;
      this.vel = p5.Vector.random2D().mult(random(0, 0.2));
      this.pos = createVector(x, y);
      this.acc = createVector(0, 0);
      this.r = sqrt(this.mass); 
      this.col = color(255); 
    }
  
    applyForce(force) {
      let f = p5.Vector.div(force, this.mass);
      this.acc.add(f);
    }
    attract(other) {
        let force = p5.Vector.sub(this.pos, other.pos); 
        let distanceSq = constrain(force.magSq(), 85, 10000); 
        let strength = G * (this.mass * other.mass) / distanceSq;
        force.setMag(strength);  
        return force
    }
  
    edges() {
        if ( ( this.pos.y + this.r ) >= height || this.pos.y <= this.r) {
            this.vel.y *= -1; 
        } else if ( ( this.pos.x + this.r ) >= ( width ) || this.pos.x <= this.r) {
            this.vel.x *= -1;  
        }
    }

    update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
    
    changeColor() {
     this.col = color(random(255), random(255), random(255)); 
    }

    addMass(other) { // THIS NEEDS TO BE WORKED OUT MORE
        let oldMass = this.mass; 
        let newMass = oldMass + other.mass; 
        this.mass = newMass; 
    }

    show() {
        stroke(255); 
        strokeWeight(2); 
        fill(this.col); 
        ellipse(this.pos.x, this.pos.y, this.r * 2)
    }


    intersects(other) {
        let x_1 = this.pos.x + this.r; 
        let y_1 = this.pos.y + this.r;
        let x_2 = other.pos.x + other.r; 
        let y_2 = other.pos.y + other.r; 
        let dis = int(dist( x_1, y_1, x_2 , y_2 )); 

        if (dis <= int(this.r + other.r) ) {
            return true; 
        } else {
            return false; 
        }
    }

    collision(other) {
        let disMag = dist( this.pos.x + this.r, this.pos.y + this.r, other.pos.x + other.r, other.pos.y + other.r ) 
        if ( disMag <= this.r + other.r ) {
            return true; 
        } else { 
            return false; 
        }
    }

    collisionVelChange(other) {
        let x_1 = this.pos.x + this.r; 
        let y_1 = this.pos.y + this.r;
        let x_2 = other.pos.x + other.r; 
        let y_2 = other.pos.y + other.r; 
        let dis = int(dist( x_1, y_1, x_2 , y_2 )); 

        if (dis === int(this.r + other.r) ) {
            other.vel.x *= -1; 
            other.vel.y *= -1; 
            this.vel.x *= -1; 
            this.vel.y *= -1; 
        }
    }

    // particleEdges() {
    //     let diam_1 = this.r * 2
    //     if ( diam_1 === other.pos.y + other.r * 2 )
    // }
}