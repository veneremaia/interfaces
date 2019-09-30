document.addEventListener("keydown", detectarEvento);
let fondo = document.querySelector(".fondo");
let personaje = document.querySelector(".personaje");
let vidas1 = document.querySelector(".vidas1");
let vidas2 = document.querySelector(".vidas2");
let vidas3 = document.querySelector(".vidas3");

let objeto = document.querySelector(".objeto");
let caminando = true;
let jugar = true;
let leftObjeto = 1000;
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

gameLoop();

function detectarEvento(e){  
    if(e.key == " "){
        caminando = false;
        setTimeout(function(){requestAnimationFrame(revertir);}, 1400);
     
    }
}

function nada(){

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
    if(leftObjeto>0){
       leftObjeto= leftObjeto-6;
    }
    else{
        leftObjeto = 1000;
    }
}
    // colision del objeto con el ninja 
    if((leftObjeto<=rightNinja-35)&&(topObjeto<=bottomNinja)&&(rightObjeto>=leftNinja+20)){
        colision = true;
        console.log("colisiono");
        if((leftObjeto==rightNinja-35)||(topObjeto==bottomNinja)){
            contador--;
            console.log("holi");
        }
       
    }

   


    
   
    
    if((!caminando)&&(!bajando)){
        topNinja -=4;
        if(topNinja <150){
            bajando = true;
        }
    }
    else if(bajando){
        topNinja +=3;
        if(topNinja > 300){
            bajando = false;
        }
    }

    if(caminando){
        accionNinja = "personaje caminar";
    }
    else {
        accionNinja = "personaje saltar";
    }

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
        accionObjeto = "objeto";
        accionNinja = "personaje caer";
        

       setTimeout(
           function(){
                requestAnimationFrame(levantarse); }, 1700);
      
                leftObjeto = 1000;
                         
    }
    else{
        accionObjeto = "objeto aparecer";
    }


}


function levantarse(){
    accionNinja = "personaje caminar";
    colision = false;
    
}

function draw(){
    personaje.className = accionNinja;
    objeto.className = accionObjeto;
    personaje.style.top = topNinja + "px";
    objeto.style.left = leftObjeto + "px";
    vidas1.className = unaVida;
    vidas2.className = dosVidas;
    vidas3.className = tresVidas;
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