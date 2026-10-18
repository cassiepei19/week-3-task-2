let beat, analyzer; 
// Load sound file before canvas loads so it is ready
function preload() {
    beat = loadSound('beat.mp3');
}

function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent('myContainer');

  analyzer = new p5.Amplitude();
  analyzer.setInput(beat);
}

function mousePressed() {
    if (beat.isPlaying()) {
        beat.stop();
    } else {
        beat.loop();
    }
}


function draw() {
    background(255);
    
    // Get the average (root mean square) amplitude
    let rms = 0;
    if (analyzer.getLevel()) {
        rms = analyzer.getLevel();
    }

    fill(245,165,201);
    stroke(164,75,131);

    // Draw an ellipse with size based on volume
    rectMode(CENTER);
    rect(width / 2, height / 2, 10 + rms * 200, 10 + rms * 200);
}
