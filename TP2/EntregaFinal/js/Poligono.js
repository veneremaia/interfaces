class Poligono{

constructor(){
  this.circulos = [];
  this.tamanio = 0;
  this.hLinea = "62";
  this.sLinea = "100%";
  this.lLinea = 50;
  this.cLinea = this.getColorLinea();
  this.centro;
  this.hCentro = "120";
  this.sCentro = "100%";
  this.lCentro = 50;


}

getColorLinea(){
  let color = 'hsl('+this.hLinea+', '+this.sLinea+', '+this.lLinea+'%)';
  return color;
}
//setear el color de las lineas
setColorLinea(valor){
  if (valor==0){
    this.lLinea+=2;
  }
  else{
    this.lLinea-=2;
  }
  this.cLinea = this.getColorLinea();
}

addCirculo(circulo){
this.circulos.push(circulo);
this.tamanio++;
}

setColor(valor){
  if(this.centro!=null){
  this.centro.setColor(valor);
  this.lCentro = this.centro.getLightness();
}
  this.setColorLinea(valor);
      for(let i=0; i<this.tamanio; i++){
        this.circulos[i].setColor(valor);
  }
  this.actualizar();
}
//Borrar un circulo del poligono
borrarCirculo(figura){
  for(let i = 0; i < this.tamanio; i++){
      if((this.circulos[i]==figura)&&(this.tamanio>3)){
      this.circulos.splice(i,1);
      this.tamanio--;
  }
}
this.actualizar();
}


detectarClick(x, y){
  for( let i= 0; i<this.tamanio; i++){
    if(this.circulos[i].detectado(x,y)){
      return this.circulos[i];
    }
    if((this.centro!=null)&&(this.centro.detectado(x,y))){
      return this.centro;
    }
  }
}

trazarLinea(x, y){
  if(this.tamanio>1){
    let circuloAnterior = this.circulos[this.tamanio-2];
    let xA = circuloAnterior.getX();
    let yA = circuloAnterior.getY();
    ctx.strokeStyle = this.cLinea;
    ctx.moveTo(xA,yA);
    ctx.lineTo(x,y);
    ctx.stroke();

  }
}

cerrar(){
if (this.centro==null){
  let primeroCirculo = this.circulos[0];
  let x = primeroCirculo.getX();
  let y = primeroCirculo.getY();
  ctx.strokeStyle = this.cLinea;
  ctx.lineTo(x,y);
  ctx.stroke();
  this.encontrarMedio();
}
}


mover(x, y){
  // setea x e y de todos los circulos de la figura (excepto centro)
  for(let i = 0; i<this.tamanio; i++){
      let c = this.circulos[i];
      this.circulos[i].setCoordenadas(c.getX()+x, c.getY()+y);
  }
  this.actualizar();
}

//setear color de la linea


actualizar(){
  //limpia el canvas
  ctx.clearRect(0, 0, 500, 500);
  let circulo1 = null;
  let circulo2 = null;
  //vuelve a dibujar los nuevos circulos
  for(let i = 0; i<this.tamanio; i++){
    circulo1 = circulo2;
    circulo2 = this.circulos[i];
    circulo2.dibujarCirculo();
    // traza las lineas
    if(circulo1!=null){
      this.trazarLineaMovida(circulo1, circulo2);
    }
  }
  //traza la ultima linea
    if(this.centro!=null){
  this.trazarLineaMovida(circulo2, this.circulos[0]);
  //dibuja el centro verde

  this.encontrarMedio();
  this.centro.dibujarCirculo();
}
}

trazarLineaMovida(circulo1, circulo2){
  ctx.strokeStyle = this.cLinea;
  ctx.moveTo(circulo1.getX(),circulo1.getY());
  ctx.lineTo(circulo2.getX(),circulo2.getY());
  ctx.stroke();
}

encontrarMedio(){
    let x = 0;
    let y = 0;
    for (let i = 0 ; i < this.tamanio; i++){
        x += this.circulos[i].getX();
        y += this.circulos[i].getY();
    }
    x = x/this.circulos.length;
    y = y/this.circulos.length;

    this.centro = new Circulo(x, y, 7, this.hCentro, this.sCentro, this.lCentro, true);
    this.centro.dibujarCirculo();
}
getTamanio(){
  return this.tamanio;
}
getCentro(){
  return this.centro;
}
}
