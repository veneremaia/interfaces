class Circulo{

constructor(posX, posY, radio, h, s, l, centro){
  this.posX=posX;
  this.posY=posY;
  this.radio=radio;
  this.h=h;
  this.s=s;
  this.l=l;
  this.centro = centro;
  }

getColor(){
  let color = 'hsl('+this.h+', '+this.s+', '+this.l+'%)';
  return color;
}
 dibujarCirculo(){

  ctx.fillStyle=this.getColor();
  ctx.beginPath();
  ctx.arc(this.posX, this.posY, this.radio,0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

detectado(x, y){
  return this.radio > Math.sqrt(Math.pow(x - this.posX ,2) + Math.pow(y - this.posY, 2));
}
setColorDegrade(valor){

}

setColor(valor){

  if(valor==0){
        this.l+=2;
}
else{
  this.l-=2;
}
    }

getX(){
  return this.posX;
}

getY(){
  return this.posY;
}

getCentro(){
  return this.centro;
}

setCoordenadas(x, y){
  this.posX = x;
  this.posY = y;
}

getLightness(){
  return this.l;
}

}
