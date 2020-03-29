
let ball 
let arrayBall=new Array() 


function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background('#010720')
	for(let i=0;i<arrayBall.length;i++){
		arrayBall[i].draw();
		arrayBall[i].move();
		arrayBall[i].collisionBall();
	}
	
}


function mouseClicked(){
	
	let colors = color(random(0, 255),random(0, 255),random(0, 255))//Se genera los colores de las pelotas aleatoriamente
	ball=new Ball(mouseX,mouseY,30,colors);//Objeto pelota
	arrayBall.push(ball);//Se agrega al arreglo de pelotas

	for(let i=0;i<arrayBall.length;i++){//Se actualiza el arreglo para que continue el movimiento
		arrayBall[i].indicador=i;
		arrayBall[i].arr=arrayBall;
		
	}
}

