class Attractor {
    constructor(x, y, m) {
        this.pos = createVector(x, y); 
        this.vel = p5.Vector.random2D();
        this.mass = m; 
        this.r = sqrt(this.mass);
    }

    applyForce(force) {
        this.acc = force
    }

    attract(mover) {
        let force = p5.Vector.sub(this.pos, mover.pos); 
        let distanceSq = constrain(force.magSq(), 25, 2500); 
        let G = 1.2; 
        let strength = G * (this.mass * mover.mass) / distanceSq;

        force.setMag(strength); 

        mover.applyForce(force); 
    }

    update() {        
        this.vel.add(this.acc); 
        this.pos.add(this.vel); 
    }
    show() {
        noStroke()
        fill(255, 0, 100); 
        ellipse(this.pos.x, this.pos.y, this.r);
    }
}