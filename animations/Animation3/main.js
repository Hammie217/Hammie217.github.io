var balls =[];
var canvas = document.getElementById('myCanvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
var context = canvas.getContext('2d');
var lots=0;
var join=1;
var colors = [
	'#03ff68',
	'#3503ff',
	'#ff9a03',
	'#ff1c03'
];
function WriteLots(){
    if(lots===0){lots=1}
    else{lots=0}
}
function NoJoin(){
    if(join===0){join=1}
    else{join=0}
}
function printMousePos(event) {
    if(lots){
        for (let i = 0; i < 600; i++) {
      var centerX = Math.floor(Math.random() * (canvas.height  + 1));
      var centerY = Math.floor(Math.random() * (canvas.width  + 1));
      var radius =5;
      var dx=0;
      var dy=0;
        var color = colors[Math.floor(Math.random() * colors.length)];
        var mass=523;
      balls.push(new Ball(centerX, centerY, dx, dy, radius, color,mass));
    }}
    else{
    var centerX = event.clientX;     // Get the horizontal coordinate
var centerY = event.clientY;
      var radius =5;
      var dx=0;
      var dy=0;
        var color = colors[Math.floor(Math.random() * colors.length)];
        var mass=523;
      balls.push(new Ball(centerX, centerY, dx, dy, radius, color,mass));
    }
    
}

function Ball(x, y, dx, dy, radius, color,mass) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
    this.color = color;
    this.mass=mass

	this.update = function() {
        //x/y/velocity calculations here
        this.x+=this.dx;
        this.y+=this.dy;//MAKE A SUPER AWESOME GRAVITY SIMULATOR PLANETS THING 
        

        for (let i = 0; i < balls.length; i++) {
            var diffx=balls[i].x-this.x;
            var diffy =balls[i].y-this.y;
            var distSquare = diffx*diffx + diffy*diffy;
                    var dist = Math.sqrt(distSquare);
                    if (this != balls[i]) {
                        if (dist > this.radius + balls[i].radius) {
                        var totalForce = 30*(this.mass+balls[i].mass)/(distSquare*this.mass);
                        this.dx += totalForce * diffx / dist;
                            this.dy += totalForce * diffy / dist;}
                            else{
                                //for no merging just remove the = from >=
                                if((this.mass>=balls[i].mass)&&join){
                                this.mass+=balls[i].mass;
                                balls.splice(i, 1);
                                this.radius=Math.round(Math.pow(this.mass*3/(4*3.14),1/3));
                                }
                            }}
                            
        }

        
        
        this.dy*=0.99;
        this.dx*=0.99;
		this.draw();
	};

	this.draw = function() {
        
        context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      context.fillStyle = this.color;
      context.fill();
      context.strokeStyle = 'none';
      context.stroke();
      context.closePath();
	};
}
function loop(timestamp) {
    var progress = timestamp - lastRender
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < balls.length; i++) {
		balls[i].update();
	}
        
    lastRender = timestamp
    window.requestAnimationFrame(loop)
}
var lastRender = 0
window.requestAnimationFrame(loop)
document.addEventListener("click", printMousePos);