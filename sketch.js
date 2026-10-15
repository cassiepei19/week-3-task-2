let beat, analyzer; 
// Load sound file before canvas loads so it is ready
function preload() {
    beat = loadSound('RatAtat_155.mp3');
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
    erase();
    ellipse(width / 2, height / 2, 220, 220);
    noErase();

    // Get the average (root mean square) amplitude
    let rms = 0;
    if (analyzer.getLevel()) {
        rms = analyzer.getLevel();
    }

    fill(127);
    stroke(0);

    // Draw an ellipse with size based on volume
    ellipse(width / 2, height / 2, 10 + rms * 200, 10 + rms * 200);
}
