// This is the code that i have before adding collision 
let num_of_particles; 
let particles_mass; 
let num; 
let width = 800; 
let height = 500; 
let movers = []; 
let massA = 1; 

function setup() {
    createCanvas(width, height).class('canvas');
    num_of_particles = createInput().size(100, 20).class('test1');
    num_of_particles.changed(updateNum)
    particles_mass = createInput().size(100, 20).class('test2'); 
    // particles_mass.changed(updateMassA)
    particles_mass.changed(updateNum)
    canvas_width = createInput().size(100, 20).class('test3'); 
    canvas_width.changed(updateNum)
    canvas_height = createInput().size(100, 20).class('test4');
}

function updateNum() {
    num = parseInt(num_of_particles.value());
    massA = parseInt(particles_mass.value()); 
    width = parseInt(canvas_width.value()); 
    for (let i = 0; i < num; i++) {
        let x_i = random(width); 
        let y_i = random(height); 
        let m_i = massA; 
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

// function updateMassA() {
//     massA = parseInt(particles_mass.value()); 
//     // attractor = new Attractor(300, 300, massA); 
// }

function draw() {
    background(20, 20, 20);
    if (width !== 800 || height !== 500) {
        background(100, 0, 200)
        line(width, 0 , width , height)
    }
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