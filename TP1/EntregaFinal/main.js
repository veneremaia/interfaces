let ejercicio1 = document.querySelector("#ejercicio1");
let ejercicio2 = document.querySelector("#ejercicio2");
let ejercicio3 = document.querySelector("#ejercicio3");
let ejercicio4 = document.querySelector("#ejercicio4");
let ejercicio5 = document.querySelector("#ejercicio5");
let ejercicio6 = document.querySelector("#ejercicio6");
let ejercicio7 = document.querySelector("#ejercicio7");

document.querySelectorAll('.image').forEach(function(elem) {
  var img = elem.getAttribute('data-img');
  elem.addEventListener("click", function () {
    ejercicioSeis(img);
  });
});

document.querySelectorAll('.imagegrey').forEach(function(elem) {
  var img = elem.getAttribute('data-img');
  elem.addEventListener("click", function () {
    ejercicioSiete(img);
  });
});
ejercicio1.addEventListener("click", ejercicioUno);
ejercicio2.addEventListener("click", ejercicioDos);
ejercicio3.addEventListener("click", ejercicioTres);
ejercicio4.addEventListener("click", ejercicioCuatro);
ejercicio5.addEventListener("click", ejercicioCinco);
ejercicio6.addEventListener("click", function(){ejercicioSeis("image.jpg")});
ejercicio7.addEventListener("click", function(){ejercicioSiete("image.jpg")});
/*
ejercicio3.addEventListener("click", ejercicio3);
ejercicio4.addEventListener("click", ejercicio4);
ejercicio5.addEventListener("click", ejercicio5);
ejercicio6.addEventListener("click", ejercicio6);*/


let matriz = [];

function ejercicioUno(){
  esconderBoton(true);
  esconderBotoneraImagenes(true);
  esconderBotoneraImagenesGris(true);
  let width = 100;
  let height = 100;
  let matriz = [];

cargarMatriz(matriz, width, height);
console.log("Matriz: ")
console.log(matriz);
console.log("Valor maximo: ")
console.log(getMax(matriz, width, height));
console.log("Valor maximo de pares y minimo de impares");
console.log(getMaxMin(matriz, width, height));
console.log("Promedio por fila");
console.log(getPromedio(matriz, width, height));

}


function cargarMatriz(arr, width, height){

  for(let y=0;y<height;y++){
    arr[y] = [];
      for(let x=0;x<width;x++){
      arr[y][x]= Math.floor(Math.random()*100);
    }
  }
}


function getMax(arr, width, height){
  let mayor=0;
  for(let y=0;y<height;y++){
    for(let x=0;x<width;x++){
      if((mayor==0)||(arr[y][x]>mayor)){
        mayor = arr[y][x];
      }
    }
  }
  return mayor;
}


function getPromedio(arr, width, height){
  let prom = [];
  let suma;
  for(let y=0;y<height;y++){
    suma = 0;
    for(let x=0; x<width;x++){
      suma+=arr[y][x];
    }
    prom[y] = suma/width;
  }
  return prom;
}


function getMaxMin(arr, width, height){
  let resultado = [];
  let mayor;
  let menor;
  for(let y=0;y<height;y++){
    mayor=0;
    menor=0;
    if(y % 2){
      for(let x=0;x<width;x++){
        if((menor==0)||(arr[y][x]<menor)){
          menor = arr[y][x];
        }
      }
      resultado[y]= menor;
    }
    else{

      for(let x=0;x<width;x++){
        if((mayor==0)||(arr[y][x]>mayor)){
          mayor = arr[y][x];
        }
      }
      resultado[y]= mayor;
    }
  }
  return resultado;
}



//CANVAS

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

//PINTAR TODO EL CANVAS DE BLANCO
function white(){
  canvas.width=width;
  canvas.height=height;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);
}

//MOSTRAR/ESCONDER BOTON "CAMBIAR"
let divEjercicio4 = document.querySelector(".ejercicio4");
let boton = document.querySelector(".botonCambiar");
let botoneraImagenes = document.querySelector(".ejercicio6");
let botoneraImagenesGris = document.querySelector(".ejercicio7");

function esconderBotoneraImagenesGris(cambio){
  botoneraImagenesGris.hidden = cambio;
}
function esconderBotoneraImagenes(cambio){
  botoneraImagenes.hidden = cambio;
}

function esconderBoton(cambio){
  divEjercicio4.hidden = cambio;
}


function ejercicioDos(){
  white();
  esconderBoton(true);
  esconderBotoneraImagenes(true);
  esconderBotoneraImagenesGris(true);
  ctx.fillStyle = "#000000";
  ctx.fillRect(5, 5, width-10, height-10);
}


function ejercicioTres(){
  white();
  esconderBoton(true);
  esconderBotoneraImagenes(true);
  esconderBotoneraImagenesGris(true);
  let imageData = ctx.createImageData(width-50, height-50);
  let r = 255;
  let g = 0;
  let b = 0;
  let a = 255;
  for(y=0; y<height-50; y++){
    for (let x = 0; x <width-50; x++) {
      setPixel(imageData, x, y, r, g, b, a);
    }
  }

  ctx.putImageData(imageData, 25, 25);
}

function setPixel(imageData, x, y, r, g, b, a){
  index= (x + y * imageData.width) * 4;
  imageData.data[index+0] = r;
  imageData.data[index+1] = g;
  imageData.data[index+2] = b;
  imageData.data[index+3] = a;
}
function cambiarDireccion(){
  let boton = document.querySelector(".botonCambiar");
  let cambio = boton.id;
  if (cambio==0){
    ejercicioCuatroHorizontal();
    boton.id = 1;
  }
  else {
    ejercicioCuatro();
  }

}
function ejercicioCuatro(){
  esconderBoton(false);
  esconderBotoneraImagenes(true);
  esconderBotoneraImagenesGris(true);
  boton.id = 0;

  white();

  let imageData = ctx.createImageData(width-50, height-50);
  let r = 0;
  let g = 0;
  let b = 0;
  let a = 255;
  for(let y=0; y<height-50; y++){
    for (let x = 0; x <width-50; x++) {
      setPixel(imageData, x, y, r, g, b, a);
    }
    r+=1;
    g+=1;
    b+=1;

  }

  ctx.putImageData(imageData, 25, 25);

}
function ejercicioCuatroHorizontal(){
  white();

  let imageData = ctx.createImageData(width-50, height-50);
  let r = 0;
  let g = 0;
  let b = 0;
  let a = 255;
  for(let y=0; y<width-50; y++){
    for (let x = 0; x <height-50; x++) {
      setPixel(imageData, y, x, r, g, b, a);
    }
    if(y%2){
    r+=1;
    g+=1;
    b+=1;
    }
  }

  ctx.putImageData(imageData, 25, 25);

}

function ejercicioCinco(){
  white();
  esconderBoton(true);
  esconderBotoneraImagenes(true);
  esconderBotoneraImagenesGris(true);

  let w = width-50;
  let h = height - 50;
  let imageData = ctx.createImageData(w, h);
  let r = 0;
  let g = 0;
  let b = 0;
  let a = 255;
  for(y=0; y<w; y++){
    for (let x = 0; x <h; x++) {
      setPixel(imageData, y, x, r, g, b, a);
    }
    if(y<w/2){
    g+=1;
    r+=1;
    }
    else{
    g-=1;
    r+=1;
    }

  }

  ctx.putImageData(imageData, 25, 25);
}

function ejercicioSeis(src){
  //addBotonImagen();
  white();
  esconderBoton(true);
  esconderBotoneraImagenes(false);
  esconderBotoneraImagenesGris(true);
  let imageData;
  let image = new Image();
  image.src = src;

   image.onload = function() {
    canvas.width=this.width;
    canvas.height=this.height;
    ctx.drawImage(this, 0, 0);
    imageData = ctx.getImageData(0,0, this.width, this.height);
    ctx.putImageData(imageData, 0, 0);
}
}

function getRed(imageData, x, y){
  index = (x + y * imageData.width)*4;
  return imageData.data[index+0];
}

function getGreen(imageData, x, y){
  index = (x + y * imageData.width)*4;
  return imageData.data[index+1];
}

function getBlue(imageData, x, y){
  index = (x + y * imageData.width)*4;
  return imageData.data[index+2];
}

function ejercicioSiete(src){
  white();
  esconderBoton(true);
  esconderBotoneraImagenes(true);
  esconderBotoneraImagenesGris(false);
  let imageData;
  let image = new Image();
  image.src = src;

   image.onload = function() {
    canvas.width=this.width;
    canvas.height=this.height;
    ctx.drawImage(this, 0, 0);
    imageData = ctx.getImageData(0,0, this.width, this.height);
    let r;
    let g;
    let b;
    let a = 255;
    let grey;

    for(let y=0; y<this.height; y++){
      for(let x=0; x<this.width; x++){
        r = getRed(imageData, x, y);
        g = getGreen(imageData, x, y);
        b = getBlue(imageData, x, y);
        grey = (r+g+b)/3;

      setPixel(imageData, x, y, grey, grey, grey, a);
      }
    }
    ctx.putImageData(imageData, 0, 0);
}
}



function getRed(imageData, x, y){
  index = (x + y * imageData.width)*4;
  return imageData.data[index+0];
}

function getGreen(imageData, x, y){
  index = (x + y * imageData.width)*4;
  return imageData.data[index+1];
}

function getBlue(imageData, x, y){
  index = (x + y * imageData.width)*4;
  return imageData.data[index+2];
}

/*
function addBotonImagen(){

}


let width = 300;
let height = 200;
let r = 0;
let g = 0;
let b = 0;
let a = 255;
let ctx = document.getElementById("canvas").getContext("2d");

let imageData = ctx.createImageData(width, height);

for(x=0; x<height; x++){
  for (let y = 0; y <width ; y++) {
    setPixel(imageData, x, y, r, g, b, a);
  }

}

ctx.putImageData(imageData, 15, 30);

function setPixel(imageData, x, y, r, g, b, a){
  index= (x + y * imageData.width) * 4;
  imageData.data[index+0] = r;
  imageData.data[index+1] = g;
  imageData.data[index+2] = b;
  imageData.data[index+3] = a;
}

let grd = ctx.createLinearGradient(150, 45, 35, 15);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(400, 200, 100, 100);


ctx.moveTo(400,200 );
ctx.lineTo(500, 200);
ctx.stroke();
ctx.lineTo(500, 300);
ctx.stroke();
ctx.lineTo(400, 300);
ctx.stroke();
ctx.lineTo(400, 200);
ctx.stroke();
ctx.beginPath();
ctx.arc(450, 150, 50, 0, 2 * Math.PI);

ctx.stroke();

let my_gradient=ctx.createLinearGradient(0, 0, 0, 100);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(1, "white");
ctx.fillStyle = my_gradient;
ctx.fillRect(20, 400, 150, 100);

let imageData;
let image = new Image();
image.src = "image.jpg";


 image.onload = function() {
  ctx.drawImage(this, 0, 0);
  imageData = ctx.getImageData(0,0, this.width, this.heigth);
  ctx.putImageData(imageData, 0, 0);
};
*/
