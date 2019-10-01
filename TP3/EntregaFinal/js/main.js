document.addEventListener("keydown", detectarEvento);
let fondo = document.querySelector(".fondo");
let personaje = document.querySelector(".personaje");
let vidas1 = document.querySelector(".vidas1");
let vidas2 = document.querySelector(".vidas2");
let vidas3 = document.querySelector(".vidas3");
let gameOver = document.querySelector("#play");
let claseFondo = " fondo";
let objeto = document.querySelector(".objeto");
gameOver.addEventListener("click", again);
let caminando = true;
let jugar = true;
let leftObjeto = 1200;
let topObjeto = 420;
let rightObjeto;
let topNinja = 300;
let rightNinja = 285;
let bottomNinja;
let leftNinja = 100;
//cuenta las vidas del jugador

let unaVida = "vidas1";
let dosVidas = "vidas2";
let tresVidas = "vidas3";
let contador = 3;
let colision = false;
let bajando = false;
let accionNinja;
let accionObjeto;

function again(){
    claseFondo = "fondo ";
    accionObjeto = "objeto aparecer";
    jugar = true;
    contador = 3;
     unaVida = "vidas1";
    dosVidas = "vidas2";
    tresVidas = "vidas3";
    colision = false;
}
gameLoop();

function detectarEvento(e){  
    if(e.key == " "){
        if((!colision)&&(jugar)&&(caminando)){
        caminando = false;
        setTimeout(function(){requestAnimationFrame(revertir);}, 1400);
        }
    }
}

function gameLoop(){
        update();
        draw();

    requestAnimationFrame(gameLoop);
    }

function update(){
    // actualiza la derecha del asteroide
    rightObjeto = leftObjeto + 85;
    // actualiza la parte de abajo del ninja
    bottomNinja = 186 + topNinja;
    // mueve el objeto de forma horizontal
    if(!colision){
    // si el objeto no llego al final del div, sigue moviendose a la izquierda
    if((leftObjeto>0)&&(jugar==true)){
       leftObjeto= leftObjeto-10;
    }
    else{
        // si el objeto ya llego al final del div, vuelve a aparecer a la derecha
        leftObjeto = 1200;
    }
}
    // colision del objeto con el ninja 
    if((leftObjeto<=rightNinja-5)&&(topObjeto<=bottomNinja)&&(rightObjeto>=leftNinja+50)){
        colision = true;    
            //contador para la cantidad de vidas que le quedan.
            if((leftObjeto==rightNinja-35)||(topObjeto<bottomNinja)){
              if(contador>0){
                contador--; 

              }
        }
       
    }
    // hacer subir el div del pernsaje mientras salta    
    if((!caminando)&&(!bajando)){
        topNinja -=4;
        if(topNinja <150){
            bajando = true;
        }
    }
    // hacer bajar el div del personaje mientras salta
    else if(bajando){
        topNinja +=3;
        if(topNinja > 300){
            bajando = false;
        }
    }
    // La accion del personaje es caminar
    if(caminando){
        accionNinja = "personaje caminar";
    }
    // La accion del personaje es saltar
    else {
        accionNinja = "personaje saltar";
    }
    // Si colisiono el personaje con el objeto,se actualizan las vidas.
    if(colision){
        if(contador==2){
            tresVidas = "vidaVacia";
        }
        if(contador==1){
            dosVidas = "vidaVacia";
        }
        if(contador==0){
            unaVida = "vidaVacia";
        }
        // el objeto desaparece
        accionObjeto = "objeto";
        // el personaje se cae
        accionNinja = "personaje caer";
        
        // vuelve a levantar el personaje luego de 1.7 s
       setTimeout(
           function(){
                requestAnimationFrame(levantarse); }, 1200);
                leftObjeto = 1200;
    }
   
    else{
        // si no colisionó, el objeto se muestra en pantalla
        accionObjeto = "objeto aparecer";
    }
    // Si se pierde se aclara el fondo
    if (contador==0){
        claseFondo = "fondo gameOver ";
        accionObjeto = "objeto ";
        jugar = false;
    }

    

}


function levantarse(){
    accionNinja = "personaje caminar";
    colision = false;
    
}

function draw(){
    fondo.className = claseFondo;
    personaje.className = accionNinja;
    objeto.className = accionObjeto;
    personaje.style.top = topNinja + "px";
    objeto.style.left = leftObjeto + "px";
    vidas1.className = unaVida;
    vidas2.className = dosVidas;
    vidas3.className = tresVidas;
    gameOver.hidden = jugar;
}

function salte(){
    caminar.hidden = true;
    saltar.hidden = false;
    setTimeout(function(){requestAnimationFrame(revertir);}, 1500);
   
    caminando = true;
}


function revertir(){
    caminando = true;
  }




/*
function teclaPresionada(e){
        if(e.key == " "){
            caminando(false);
            setTimeout("revertir()", 1500);
        }
        
    
  }


  moverObjeto();


 
 */