// A class constr. for position vector for a walker 

// class Walker {
//     constructor( x, y ) {
//         this.pos = createVector( x, y ); 
//     }

//     update() {
//         this.pos.x = this.pos.x + random(-1, 1); 
//         this.pos.y = this.pos.y + random(-1, 1); 
//     }

//     show() {
//         stroke(255, 100); 
//         strokeWeight(2); 
//         point(this.pos.x, this.pos.y); 

//     }
// }


// class Walker {
//     constructor( x, y ) {
//         this.pos = createVector( x, y ); 
//         this.vel = createVector(1, -1); 
//     }

//     update() {
//         this.pos.add(this.vel); //a.add(b)
//         // this.pos = this.pos + this.vel;  this type of addition can't be done 
//         // this.pos.x = this.pos.x + this.vel.x; 
//         // this.pos.y = this.pos.y + this.vel.y; 
//     }

//     show() {
//         stroke(255, 100); 
//         strokeWeight(2); 
//         fill(255, 100)
//         ellipse(this.pos.x, this.pos.y, 32)
//         // point(this.pos.x, this.pos.y); 

//     }
// }


class Walker {
    constructor( x, y ) {
        this.pos = createVector( x, y ); 
        // this.vel = createVector(1, -1); 
        this.vel = p5.Vector.random2D(); 
        this.vel.mult(random(3)); 
    }

    update() {
        this.pos.add(this.vel); //a.add(b)
        // this.pos = this.pos + this.vel;  this type of addition can't be done 
        // this.pos.x = this.pos.x + this.vel.x; 
        // this.pos.y = this.pos.y + this.vel.y; 
    }

    show() {
        stroke(255, 100); 
        strokeWeight(2); 
        fill(255, 100)
        ellipse(this.pos.x, this.pos.y, 32)
        // point(this.pos.x, this.pos.y); 

    }
}



