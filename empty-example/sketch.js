// function setup() {
//   createCanvas( 400, 400 );
// }

// function draw() {
//   background(210,0,200);
//   let v1 = createVector(40, 50);
//   let v2 = createVector(40, 50);
  
//   ellipse(v1.x, v1.y, 50, 50);
//   ellipse(v2.x, v2.y, 50, 50);
//   v1.add(v2);
//   ellipse(v1.x, v1.y, 50, 50);
// } 

// let mover;

// function setup() {
//   createCanvas(400, 400);
//   mover = new Mover(200, 200);
// }

// function draw() {
//   background(0);

//   if (mouseIsPressed) {
//     let wind = createVector(0.2, 0);
//     mover.applyForce(wind);
//   }

//   let gravity = createVector(0, 0.2);
//   mover.applyForce(gravity);

//   mover.update();
//   mover.edges();
//   mover.show();
// }

var xoff = 0; 

function setup() {
  createCanvas( 400, 400 );
}

function draw() {
  background(20, 20, 20);
  // ellipse(200, 200, 24, 24)
  // let ranX = random(width)
  // let ranY = random(height)
  // ellipse(ranX, ranY, 24, 24)
  // let x = map(noise(100), 0, 1, 0, width)
  let x = map(noise(xoff), 0, 1, 0, width)
  xoff += 0.02;
  ellipse(x, 200, 24, 24)
}  