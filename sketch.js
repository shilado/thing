
// The setup function runs once
function setup() {
  
  createCanvas(800, 600);
  frameRate (20);
  
}

//The draw function runs many times per second. The default rate is 60 frames per second!
function draw() {

	background('#fae');
	fill (0, 255,0);
	var RandomRed = random(0,255);
	var RandomGreen = random(0,255);
	var RandomBlue = random(0,255);
	var newColor = color (RandomRed, RandomGreen, RandomBlue);
	fill (newColor);
	ellipse (mouseX,mouseY, 100, 100);
	fill (0,0,100);
	rect (1, 400, 800, 300);
	
		
	 
}
