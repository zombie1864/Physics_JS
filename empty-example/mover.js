// class Mover {
//     constructor(x, y) {
//         this.pos = createVector(x, y); 
//         this.vel = p5.Vector.random2D(); 
//         this.vel.mult(random(3)); 
//         // this.acc = createVector(); 
//         // this.acc = p5.Vector.random2D(); 
//         // this.acc.setMag(0.01); 
//     }

//     update() {
//         this.acc = p5.Vector.random2D(); 
//         // this.acc.setMag(0.01); 
//         this.pos.add(this.vel); 
//         this.vel.add(this.acc); 
//         this.vel.limit(5); 
//     }

//     show() {
//         stroke(255); 
//         strokeWeight(2); 
//         fill(255, 100); 
//         ellipse(this.pos.x, this.pos.y, 32)
//     }
// }


// class Mover {
//     constructor(x, y) {
//         this.pos = createVector(x, y); 
//         this.vel = p5.Vector.random2D(); 
//         this.vel.mult(random(3)); 
//         // this.acc = createVector(); 
//         // this.acc = p5.Vector.random2D(); 
//         // this.acc.setMag(0.01); 
//     }

//     update() {
//         let mouse = createVector(mouseX, mouseY); 
//         this.acc = p5.Vector.sub(mouse, this.pos); 
//         this.acc.setMag(0.1); 
        
//         this.vel.add(this.acc); 
//         // this.vel.limit(2); 

//         this.pos.add(this.vel); 
//     }

//     show() {
//         stroke(255); 
//         strokeWeight(2); 
//         fill(255, 100); 
//         ellipse(this.pos.x, this.pos.y, 32)
//     }
// }



class Mover {
    constructor(x, y, m) {
        this.pos = createVector(x, y); 
        this.vel = p5.Vector.random2D(); 
        this.vel.mult(random(3)); 
        // this.acc = createVector(); 
        // this.acc = p5.Vector.random2D(); 
        // this.acc.setMag(0.01); 
        this.r = 16
        this.mass = m; 
    }

    applyForce(force) { //newtonSecondLaw
        // force.div(this.mass)
        let f = p5.Vector.div(force, this.mass)
        this.acc = force
    }

    edges() {
        if (this.pos.y >= height) {
            this.pos.y = height; 
            this.vel.y *= -1; 
        }
    }

    update() {
        // let mouse = createVector(mouseX, mouseY); 
        // this.acc = p5.Vector.sub(mouse, this.pos); 
        // this.acc.setMag(0.1); 
        
        this.vel.add(this.acc); 
        // this.vel.limit(2); 

        this.pos.add(this.vel); 
        this.acc.set(0,0)
    }

    show() {
        stroke(255); 
        strokeWeight(2); 
        fill(255, 100); 
        ellipse(this.pos.x, this.pos.y, this.r)
    }
}


