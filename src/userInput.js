let num_of_particles; 
let particles_mass; 
// let mover; 

function setup() {
    createCanvas(800, 500).class('canvas');
    // background(20, 20, 20);
    num_of_particles = createInput().size(100, 20).class('test1');
    particles_mass = createInput().size(100, 20).class('test2'); 
    canvas_width = createInput().size(100, 20).class('test3'); 
    canvas_height = createInput().size(100, 20).class('test4');
    mover = new Mover(150, 150, 25)
    attractor = new Attractor(250, 250, 25)
    // num_of_particles.changed(newText); 
    // particles_mass.changed(newText); 
}

function draw() {
    background(20, 20, 20);
    mover.update(); 
    mover.show(); 
    attractor.attract(mover);
    // mover.attract(attractor); 
    // attraction(mover, attractor); 
    attractor.show(); 
}

// function newText() {
//     console.log(num_of_particles.value());
// }