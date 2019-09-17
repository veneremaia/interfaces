//colorea el canvas.
var canvas=document.getElementById('canvas');
var ctx = canvas.getContext("2d");
canvas.addEventListener("click", clickCanvas);
canvas.addEventListener("mousedown", detectarFigura);
canvas.addEventListener("mousemove", moverFigura);
canvas.addEventListener("mouseup", desclickear);
canvas.addEventListener("mousewheel", modificarTonalidad);
canvas.addEventListener("dblclick",borrarPunto);
document.addEventListener("keydown", teclaPresionada);
document.addEventListener("keyup", teclaSoltada);

let poligonos = [];
let figura = null;
let movible = false;
let presionada = false;
//busco el boton que realizara el evento de CerrarPoligono
let boton = document.querySelector("#cerrarPoligono");
boton.addEventListener("click", cerrarPoligono);

let poligono = new Poligono();
let cerrado = false;


//borrar punto del poligono
function borrarPunto(e){
  figura = null;
  let eX = e.layerX;
   let eY= e.layerY;
   figura = poligono.detectarClick(eX,eY);
    if((figura != null)&&(poligono.getCentro()!=null)){
      poligono.borrarCirculo(figura);
}
}

function teclaPresionada(e){
  if(e.key == "c"){
    presionada = true;
  }
}

function teclaSoltada(e){
  if(e.key == "c"){
    presionada = false;
  }
}

function modificarTonalidad(e){
  if(presionada){
    if((e.deltaY>0)){
    poligono.setColor(0); //aclarar color;
    }
    else{
      poligono.setColor(1);
    }
  }
}



// detecta si donde clickeamos es un circulo tanto verde como rojo
function detectarFigura(e){
  var eX = e.layerX;
  var eY = e.layerY;
  figura = poligono.detectarClick(eX, eY);
  if(figura!=null){
    movible = true;
  }

}
// actualiza las coordenadas
function moverFigura(e){
  if(movible){
  var eX = e.layerX;
  var eY = e.layerY;
  //figura entera
  if(figura.getCentro()){
    var moverX = eX - figura.getX();
		var moverY = eY - figura.getY();
    //setea las coordenadas del centro de la figura
  	figura.setCoordenadas(eX,eY);
    //setea las coordenadas de cada circulo de la figura
  	poligono.mover(moverX,moverY);
    //
  }
  // circulo en particular
   else{
        if(cerrado==true){
     figura.setCoordenadas(eX, eY);
     poligono.actualizar();
   }
    }
  }
}
// setea los valores para que no siga buscando una figura
function desclickear(e){
  movible = false;
  figura = null;
}

// al hacer click dentro del canvas dibuja un circulo rojo y lo une con el anterior si es que existe
function clickCanvas(e){
  if(cerrado == false){
  var eX = e.layerX;
  var eY = e.layerY;
  let circulo = new Circulo(eX, eY, 10, "0", "100%", 50, false);
  circulo.dibujarCirculo();
  poligono.addCirculo(circulo);
  poligono.trazarLinea(eX, eY);
  console.log("Coordenada en x: " + eX);
  console.log("Coordenada en y: " + eY);
}
}


// cierra el poligono si hay mas de 2 circulos creados
  function cerrarPoligono(){
    if(poligono.getTamanio()>=3){
      poligono.cerrar();
      // lo agrego al arreglo de poligonos
      poligonos[poligonos.length-1] = poligono;
      cerrado = true;


    }

}
