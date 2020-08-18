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
    
    for (let i = 0; i < 2; i++) {
        let x_i = random(width); 
        let y_i = random(height); 
        let m_i = random(1, 5); 
        movers[ i ] = new Mover(x_i, y_i, m_i)
        for ( let j = 1; j < 2; j++) {
            let x_j = random(width); 
            let y_j = random(height); 
            let m_j = random(1, 5); 
            movers[ j ] = new Mover(x_j, y_j, m_j)
        }
    }
    attractor = new Attractor(0, 0, 1)
}

function draw() {
    background(20, 20, 20);
    for (let mover_i of movers) {
        mover_i.update(); 
        mover_i.show(); 
        mover_i.edges(); 
        
        attractor.update(); 
        attractor.attract(mover_i);
        mover_i.attract(attractor)
        attractor.show(); 
        for (let mover_j of movers) {
            mover_j.update(); 
            mover_j.show(); 
            mover_j.edges(); 
            attractor.update(); 
            attractor.attract(mover_j);
            mover_j.attract(attractor)
            attractor.show(); 
        }
    } 


}

// function newText() {
//     console.log(num_of_particles.value());
// }