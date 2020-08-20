let num_of_particles; 
let particles_mass; 
let num; 
let stopped; 
let movers = []; 
let massA; 

function setup() {
    createCanvas(800, 500).class('canvas');
    num_of_particles = createInput().size(100, 20).class('test1');
    num_of_particles.changed(updateNum)
    particles_mass = createInput().size(100, 20).class('test2'); 
    particles_mass.changed(updateMassA)
    canvas_width = createInput().size(100, 20).class('test3'); 
    canvas_height = createInput().size(100, 20).class('test4');
}

function updateNum() {
    num = parseInt(num_of_particles.value());
    for (let i = 0; i < num; i++) {
        let x_i = random(width); 
        let y_i = random(height); 
        let m_i = 1; 
        movers[ i ] = new Mover(x_i, y_i, m_i)
        // for ( let j = 1; j < num; j++) {

        //     let x_j = random(width); 
        //     let y_j = random(height); 
        //     let m_j = 1; 
        //     movers[ j ] = new Mover(x_j, y_j, m_j)
        //     if ( i !== j ) {
        //         movers[ j ].attract( movers[ i ])
        //         movers[ i ].applyForce( force )
        //     }

        // }

        // movers[ i ].update(); 
        // movers[ i ].show(); 
    }
    // attractor = new Attractor(375, 300, 10)
}

function updateMassA() {
    massA = parseInt(particles_mass.value()); 
    attractor = new Attractor(300, 300, massA); 
}

function draw() {
    background(20, 20, 20);
    for (let i = 0; i < movers.length; i++) {
        // movers[ i ].update(); 
        // movers[ i ].show(); 
        // movers[ i ].edges(); 
        for ( let j = 0; j < movers.length; j++) {
            if ( i !== j ) {
                let force = movers[ j ].attract(movers[ i ])
                movers[ i ].applyForce(force); 
            }
            // movers[ j ].update(); 
            // movers[ j ].show(); 
            // movers[ j ].edges();
        }

        movers[ i ].update(); 
        movers[ i ].show(); 
        movers[ i ].edges();

        // mover.update(); 
        // mover.show(); 
        

        // attractor.update(); 
        // attractor.attract(mover_i);
        // mover_i.attract(attractor)
        // attractor.show(); 
        
        // for (let mover_j of movers) {
        //     mover_j.update(); 
        //     mover_j.show(); 
        //     mover_j.edges(); 
        //     // attractor.update(); 
        //     // attractor.attract(mover_j);
        //     // mover_j.attract(attractor)
        //     mover_j.attract(mover_i)
        //     // attractor.show(); 
        // }
    } 


}

// function newText() {
//     console.log(num_of_particles.value());
// }