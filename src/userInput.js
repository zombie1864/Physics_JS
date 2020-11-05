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
let simBtnCliked = false; 
let pauseBtnCliked = false; 
let G = 0.001; 
let attractorStatus = false; 
let tx
let song 

function preload() {
    song = loadSound('assets/music/sound1.mp3');
}

function setup() { 

    tx = createP("Welcome to Physics_JS - Gravity simulation. Please enter a number for 'number of particles', 'mass of particles' and press Simulate. Deatils regarding each input can be found by hover your mouse over the text field. The lights that you see are collision detection. You can also give a numbers for both the width and height of the canvas. Use the slider to adjust the strength of gravity. At anytime you can pause, clear the canvas, or add a central attractor.").class('instr')
    createCanvas(width, height).class('canvas'); 
    
    num_of_particles = createInput().size(100, 20).class('num_of_particles');
    particles_mass = createInput().size(100, 20).class('particles_mass'); 
    canvas_width = createInput().size(100, 20).class('canvas_width'); 
    canvas_width.changed(updateDim)
    canvas_height = createInput().size(100, 20).class('canvas_height');
    canvas_height.changed(updateDim)
    gravitational_const = createSlider( 0.001, 0.3, G, 0).size(700, 20).class('G_const'); 
    gravitational_const.changed(updateGravity);

    simulateButton = createButton('Simulate').size(100, 20).class('Simulate').style('width', '110px')
    simulateButton.mousePressed( () => {
        if ( num_of_particles.value().length !== 0 && particles_mass.value().length !== 0 ) {
            updateNum(); 
            song.play();
            song.setVolume(0.4); 
            simBtnCliked = !simBtnCliked; 
            pauseBtnCliked = !pauseBtnCliked
        } else {            
            alert('Please input values for both the number of particles and the mass of the particles')
        }
    })
    
    pauseButton = createButton('Pause').size(100, 20).class('Pause');
    pauseButton.parent('pauseButton')

    if (play) {
        pauseButton.mousePressed( () => {
            if ( !pauseBtnCliked && num_of_particles.value().length === 0 && particles_mass.value().length === 0 ) {
                return alert('Please input values for both the number of particles and the mass of the particles')
            }
            play = !play; 
                        
            if ( play && simBtnCliked ) {
                pauseButton.html('Pause')
                song.play()
                loop()
            } else {  
                noLoop()
                pauseButton.html('Play')
                song.stop()
            }

        })
    }

    clearButton = createButton('Clear').size(100, 20).class('Clear'); 
    clearButton.mousePressed( () => {
        song.stop()
        movers = [];
        num = 0; 
        width = 800; 
        height = 500; 
        
        num_of_particles.value('')
        particles_mass.value('')  
        canvas_width.value('')
        canvas_height.value('')
        gravitational_const.value(0.001)
        attractorStatus = false
    }).parent('clearButton'); 
    
    attractorButton = createButton('Attractor').size(115, 20).class('Attractor')
    attractorButton.mousePressed( () => {
        attractorStatus = !attractorStatus; 
        if (attractorStatus) 
        attractor = new Attractor(width / 2, height / 2, 60)
    }).parent('attractorButton'); 
    
    // song = loadSound('../assets/music/sound1.mp3', music)
}

// function music() {
//     song.play();
//     song.setVolume(0.4);
// }

function updateNum() {
    tx.style( 'z-index', '-1')
    num = num_of_particles.value();
    if ( num > 50 ) {
        alert('Invalid input: Please enter a number between 1 and 50'); 
        num.clear()
    }
    massA = particles_mass.value(); 
    if ( massA > 50 ) {
        alert('Invalid input: Please enter a number between 1 and 50')
        massA.clear()
    }
    
    G = gravitational_const.value(); 
    for (let i = 0; i < num; i++) {
        let x_i = random(20, width - 20); 
        let y_i = random(20, height - 20); 
        let m_i = massA; 
        movers[ i ] = new Mover(x_i, y_i, m_i)
    }
    // attractor = new Attractor(width / 2, height / 2, 100)
    
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
    background(random(255)) // did not work 
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
            
        }
            movers[ i ].update(); 
            movers[ i ].show(); 
            movers[ i ].edges();

            if (attractorStatus) {
                attractor.attract(movers[ i ]);
                movers[ i ].attract(attractor)
                attractor.show(); 
            }
    }
} 