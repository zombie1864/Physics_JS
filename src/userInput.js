let num_of_particles; 
let particles_mass; 
let movers = []; 

function setup() {
    createCanvas(800, 500).class('canvas');
    // background(20, 20, 20);
    num_of_particles = createInput().size(100, 20).class('test1');
    particles_mass = createInput().size(100, 20).class('test2'); 
    canvas_width = createInput().size(100, 20).class('test3'); 
    canvas_height = createInput().size(100, 20).class('test4');
    
    for (let i = 0; i < 3; i++) {
        let x = random(width); 
        let y = random(height); 
        let m = random(1, 5); 
        movers[ i ] = new Mover(x, y, m)
    }
    attractor = new Attractor(400, 300, 10)
}

function draw() {
    background(20, 20, 20);
    for (let mover of movers) {
        mover.update(); 
        mover.show(); 
        
        // attractor.update(); 
        attractor.attract(mover);
        mover.attract(attractor)
        attractor.show(); 
    } 


}

// function newText() {
//     console.log(num_of_particles.value());
// }