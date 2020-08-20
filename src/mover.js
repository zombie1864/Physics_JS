class Mover {
    constructor(x, y, m) {
        this.pos = createVector(x, y); 
        this.vel = p5.Vector.random2D().mult(random(0, 0.2));
        this.mass = m; 
        this.r = sqrt(this.mass); 
    }

    applyForce(force) {
        // let f = p5.Vector.div(force, this.mass)
        // this.acc.add(f); 
        this.acc = force
    }

    attract(attractor) {
        let force = p5.Vector.sub(this.pos, attractor.pos); 
        let distanceSq = constrain(force.magSq(), 25, 2500); 
        let G = 1; 
        let strength = G * (this.mass * attractor.mass) / distanceSq;

        force.setMag(strength); 

        attractor.applyForce(force); 
    }

    edges() {
        if (this.pos.y >= height || this.pos.y < 0) {
            this.vel.y *= -1; 
        } else if (this.pos.x >= width || this.pos.x < 0) {
            this.vel.x *= -1; 
        }

    }

    update() {        
        this.vel.add(this.acc); 
        this.pos.add(this.vel); 
    }

    show() {
        stroke(255); 
        strokeWeight(2); 
        fill(255, 100); 
        ellipse(this.pos.x, this.pos.y, this.r)
    }
}


