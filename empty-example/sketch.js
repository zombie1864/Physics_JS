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

// let xoff = 0; 
// let yoff = 100; 

let inc = 0.01; // these line of code are for line 136
let start = 0; // these line of code are for line 136
let walker; 

function setup() {
  createCanvas( 400, 400 );
  walker = new Walker(200, 200); 
  // background(20, 20, 20); //different effect when bckground is here 
}

function draw() {
  background(20, 20, 20);
  // ellipse(200, 200, 24, 24)

  // let ranX = random(width)
  // let ranY = random(height)
  // ellipse(ranX, ranY, 24, 24)

  // let x = map(noise(100), 0, 1, 0, width)
  // ellipse(x, 200, 24, 24)    
  
  // let x = map(noise(100), 0, 1, 0, width)
  // let x = map(noise(xoff), 0, 1, 0, width); 
  // xoff += 0.02;
  // ellipse(x, 200, 24, 24)  
  
  // let x = map(noise(100), 0, 1, 0, width)
  // let x = map(noise(xoff), 0, 1, 0, width); 
  // let y = map(noise(yoff), 0, 1, 0, height); 
  // xoff += 0.02;
  // yoff += 0.02;
  // ellipse(x, y, 24, 24)

  // for ( let x = 0; x < width; x++) {
  //   stroke(255); 
  //   point(x, 200)
  // }

  // for ( let x = 0; x < width; x++) {
  //   stroke(255); 
  //   point(x, random(height))
  // }

  // for ( let x = 0; x < width; x++) {
  //   stroke(255); 
  //   point(x, random(height))
  // }
  // noLoop();  
  
  // stroke(255); 
  // noFill(); 
  // beginShape(); 
  //   for ( let x = 0; x < width; x++) {
  //     stroke(255); 
  //     vertex(x, random(height))
  //   }
  // endShape(); 
  // noLoop();  
  
  // stroke(255); 
  // noFill(); 
  // beginShape(); 
  //   for ( let x = 0; x < width; x++) {
  //     stroke(255); 
  //     let y = random(height)
  //     vertex(x, y)
  //   }
  // endShape(); 
  // noLoop();

  // stroke(255); 
  // noFill(); 
  // beginShape(); 
  // let xoff = 0; 
  //   for ( let x = 0; x < width; x++) {
  //     stroke(255); 
  //     let y = noise(xoff) * height
  //     vertex(x, y)
  //     xoff += 0.02; 
  //   }
  // endShape(); 

  // let inc = 0.1; 
  // stroke(255); 
  // noFill(); 
  // beginShape(); 
  // let xoff = 0; 
  //   for ( let x = 0; x < width; x++) {
  //     stroke(255); 
  //     let y = noise(xoff) * height
  //     vertex(x, y)
  //     xoff += inc; 
  //   }
  // endShape(); 

  

  // stroke(255); 
  // noFill(); 
  // beginShape(); 
  // let xoff = start; 
  //   for ( let x = 0; x < width; x++) {
  //     stroke(255); 
  //     let y = noise(xoff) * height
  //     vertex(x, y)
  //     xoff += inc; 
  //   }
  //   endShape(); 
  //   start += inc;
     


  // stroke(255); 
  // noFill(); 
  // beginShape(); 
  // let xoff = start; 
  //   for ( let x = 0; x < width; x++) {
  //     stroke(255); 
  //     let y = height / 2 + sin(xoff) * height / 2
  //     vertex(x, y)
  //     xoff += inc; 
  //   }
  //   endShape(); 
  //   start += inc;


  // loadPixels(); 
  //   for ( var x = 0; x < width; x++) { 
  //     for ( var y = 0; y < height; y++) {
  //       var idx = ( x + y * width ) * 4; 
  //       var r = random(255); 
  //       pixels[ idx + 0 ] = r; 
  //       pixels[ idx + 1 ] = r; 
  //       pixels[ idx + 2 ] = r; 
  //       pixels[ idx + 3 ] = 255; 
  //     }
  //   }
  //   updatePixels(); 

  // walker.update(); 
  // walker.show(); 



  // translate(width / 2, height / 2 ); 

  // let v = createVector(random(-100, 100), random(-100, 100)); 

  // strokeWeight(4); 
  // stroke(255); 
  // line(0, 0, v.x, v.y); 

  // unit vector 

  // translate(width / 2, height / 2 ); 

  // // let v = createVector(random(-100, 100), random(-100, 100)); 
  // let v = p5.Vector.random2D()
  // v.mult(50); // aVec * num ( not dot prod or cross prod )

  // strokeWeight(4); 
  // stroke(255); 
  // line(0, 0, v.x, v.y); 


  // translate(width / 2, height / 2 ); 

  // // let v = createVector(random(-100, 100), random(-100, 100)); 
  // let v = p5.Vector.random2D()
  // v.mult(random(50, 100)); // aVec * num ( not dot prod or cross prod )

  // strokeWeight(4); 
  // stroke(255, 50); 
  // line(0, 0, v.x, v.y); 



  walker.update(); 
  walker.show(); 


}  

