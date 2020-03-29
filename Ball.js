class Ball {
    
    constructor(x,y,d,c){
        this.x = x
        this.y = y
        this.d = d
        this.c = c
        this.speed = 5
        this.dirX=this.direction();
        this.dirY=this.direction();
        this.indicador;
        this.arr;

    }

    draw(){
        push()
        noStroke()
        fill(this.c)
        ellipse(this.x, this.y, this.d)
        this.collisionWall()
        
    }

    move(){

        if(this.dirX===-1 )
        {
            // -X
            this.x+=this.dirX-this.speed
        }
        else{
            // X
            this.x+= this.dirX +this.speed
        }

         if(this.dirY===-1)
        {
            //Y
            this.y+=this.dirY-this.speed
        }
        else       
            //-Y
            this.y+=this.dirY+this.speed
    }

    collisionWall(){
        
        //Colisión en el eje de la X
        if(this.x+floor(this.d/2)+this.dirX+this.speed>=width || this.x-floor(this.d/2)+this.dirX-this.speed<=0)
            this.dirX=-this.dirX;

        //Colisión en eje de la Y
        if(this.y+floor(this.d/2)+this.dirY+this.speed>=height || this.y-floor(this.d/2)+this.dirY-this.speed<=0)
            this.dirY=-this.dirY

    }

    collisionBall(){

        for(let i=0;i<this.arr.length;i++){
           
            var dx = this.x - this.arr[i].x;
            var dy = this.y - this.arr[i].y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < floor(this.d/2) + floor(this.d/2)) {
                
                this.arr[i].dirX=-this.arr[i].dirX
                this.arr[i].dirY=-this.arr[i].dirY

                this.dirX=-this.dirX
                this.dirY=-this.dirY
            }  
        }

    }

    direction(){
        return floor(random(2)) * 2 - 1
    }
}