function setup() {
  createCanvas(800, 600);
}

function draw() {
  // Fondo azul
  background(100, 180, 255);
  // Césped
  noStroke();
  fill(60, 180, 75);
  rect(0, 400, width, 200);
  // Sol amarillo
  fill(255, 220, 0);
  ellipse(700, 100, 120, 120);
  // Montañas
  fill(120, 180, 140);
  triangle(200, 400, 400, 150, 600, 400);
  fill(90, 140, 110);
  triangle(100, 400, 300, 200, 500, 400);
}