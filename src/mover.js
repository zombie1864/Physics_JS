class Mover {
    constructor(x, y, m) {
      this.mass = m;
      this.pos = createVector(x, y);
      this.vel = p5.Vector.random2D().mult(random(0, 0.2));
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
        let G = 0.04; 
        let strength = G * (this.mass * other.mass) / distanceSq;
        force.setMag(strength); 
        return force
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
      this.acc.mult(0);
    }
    
    changeColor() {
     this.col = color(random(255), random(255), random(255)); 
 }

    show() {
        stroke(255); 
        strokeWeight(2); 
        fill(this.col); 
        ellipse(this.pos.x, this.pos.y, this.r * 2)
    }


    intersects(other) {
        let dis = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y); 
        if (dis < this.r + other.r) {
            return true; 
        } else {
            return false; 
        }
    }
}