let num_of_particles; 
let particles_mass; 
let num; 
let width = 800; 
let height = 500; 
let movers = []; 
let massA = 1; 
let dis; 
let movers_i; 
let movers_j; 
let pauseButton; 
let clearButton; 
let play = true; 
let G = 0.001; 


function setup() {
    clear(); 
    createCanvas(width, height).class('canvas'); 
    num_of_particles = createInput().size(100, 20).class('test1');
    num_of_particles.changed(updateNum)
    particles_mass = createInput().size(100, 20).class('test2'); 
    particles_mass.changed(updateNum)
    canvas_width = createInput().size(100, 20).class('test3'); 
    gravitational_const = createSlider( 0.001, 0.3, G, 0).size(700, 20).class('G_const'); 
    gravitational_const.changed(updateGravity);
    canvas_width.changed(updateDim)
    canvas_height = createInput().size(100, 20).class('test4');
    canvas_height.changed(updateDim)
    pauseButton = createButton('Pause').size(100, 20).class('Pause');
    pauseButton.parent('pauseButton')
    if (play) {
        pauseButton.mousePressed( () => {
            play = !play; 
            if ( play ) {
                pauseButton.html('Pause')
                loop()
            } else {  
                noLoop()
                pauseButton.html('Play')
            }
        })
    }
    clearButton = createButton('Clear').size(100, 20).class('Clear'); 
    clearButton.mousePressed(() => {
        movers = [];
        num = 0; 
        num_of_particles = createInput().size(100, 20).class('test1'); 
        particles_mass = createInput().size(100, 20).class('test2');  
        num_of_particles.changed(updateNum)
        particles_mass.changed(updateNum)
    })
    clearButton.parent('clearButton'); 
}

function updateNum() {
    clear()
    num = parseInt(num_of_particles.value());
    massA = parseInt(particles_mass.value()); 
    G = gravitational_const.value(); 
        for (let i = 0; i < num; i++) {
            let x_i = random(20, width - 20); 
            let y_i = random(20, height - 20); 
            let m_i = massA; 
            movers[ i ] = new Mover(x_i, y_i, m_i)
        }
            attractor = new Attractor(width / 2, height / 2, 100)

}

function updateDim() {
    width = parseInt(canvas_width.value()); 
    height = parseInt(canvas_height.value()); 
    for (let i = 0; i < num; i++) {
        let x_i = random(20, width - 20); 
        let y_i = random(20, height - 20); 
        let m_i = massA; 
        movers[ i ] = new Mover(x_i, y_i, m_i)
    }
}

function updateGravity() {
    G = gravitational_const.value(); 
}

function draw() {
    clear()
    if (width !== 800 && height !== 500) {
        background(100, 0, 200)
        line(width, 0 , width , height)
        line(0, height , width , height)
    } else {
        background(20, 20, 20);
    }
    for (let i = 0; i < movers.length; i++) {
        movers_i = movers[ i ];
        for ( let j = 0; j < movers.length; j++) {
            movers_j = movers[ j ]
            if ( i !== j ) {
                let force = movers[ j ].attract(movers[ i ])
                movers[ i ].applyForce(force); 
            }
            if ( i !== j && movers_i.intersects(movers_j) ) {
                movers_i.changeColor(); 
                movers_j.changeColor(); 
                // movers_i.collisionVelChange(movers_j); 
                // movers_i.collisionVelChange(); 
                // movers_j.collisionVelChange(); 
                // movers_i.addMass(movers_j);
                
            }
            
            // if ( i !== j && movers_i.collision(movers_j) ) {
            //     movers_i.collisionVelChange(); 
            //     movers_j.collisionVelChange(); 
            // }
        }
        movers[ i ].update(); 
        movers[ i ].show(); 
        movers[ i ].edges();

        attractor.attract(movers[ i ]);
        movers[ i ].attract(attractor)
        attractor.show(); 
    }
    
} 

