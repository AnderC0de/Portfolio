

let test1 = document.getElementById("Logo1");
let test2 = document.getElementById("Logo2");
function Logo(){
    document.getElementById("Logo2").style.margin = "0 0 0 -5%"
    document.getElementById("Logo1").style.margin = "0 0 0 -08%"
}


function Logo2(){
    document.getElementById("Logo2").style.margin = "0 0 0 -45%"
    document.getElementById("Logo1").style.margin = "0 0 0 10%"
}
let Logotipo = document.getElementById("Logotipo");
Logotipo.addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
    Logo()
})
Logotipo.addEventListener("mouseout", function( event ) {
    Logo2()
})
window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;
    
    
          for(var i = 0; i < elements.length; i++) {
          var element = elements[i];
          console.log(element.classList);
  
          if(element.getBoundingClientRect().top + (screenSize*0.1) < screenSize) {
            element.classList.add('visible');
          } else if(element.getBoundingClientRect().top < screenSize)  {
            element.classList.remove('visible');
          }
  
        }
  });

//esto es para aniamr los svg
function Animacion(){
  document.getElementById("branchOne").style.transform = "rotate(-2deg) translate(-4%,-1%)";
  document.getElementById("branchTwo").style.transform = "rotate(-1deg) translate(-1%,-3%)";
  document.getElementById("branchThree").style.transform = "rotate(3deg) translate(1%,-4%)";
  document.getElementById("branchFour").style.transform = "rotate(5deg) translate(2%,-5%)";
  document.getElementById("FaceTop").style.transform = "rotate(-3deg) translate(-3%,-1%)";
}
function Animacion2(){
  document.getElementById("branchOne").style.transform = "none";
  document.getElementById("branchTwo").style.transform = "none";
  document.getElementById("branchThree").style.transform = "none";
  document.getElementById("branchFour").style.transform = "none";
  document.getElementById("FaceTop").style.transform = "none";
}
let infoIMG = document.getElementById("IMG1");
infoIMG.addEventListener("mouseover", function( event ) {
  Animacion()
})
infoIMG.addEventListener("mouseout", function( event ) {
  Animacion2()
})

function Animacion_(){
  document.getElementById("branchOne_").style.transform = "rotate(-1deg) translate(-1%,-1%)";
  document.getElementById("branchTwo_").style.transform = "rotate(-1deg) translate(-1%,-3%)";
  document.getElementById("branchThree_").style.transform = "rotate(3deg) translate(1%,-5%)";
  document.getElementById("branchFour_").style.transform = "rotate(3deg) translate(3%,-5%)";
  document.getElementById("Cursor").style.transform = "translate(-8%,0%)";
  document.getElementById("CloudOne").style.transform = "translate(-3%,0%)";
  document.getElementById("CloudTwo").style.transform = "translate(3%,0%)";
  document.getElementById("Face").style.transform = "translate(0%,06%)";
}
function Animacion_2(){
  document.getElementById("branchOne_").style.transform = "none";
  document.getElementById("branchTwo_").style.transform = "none";
  document.getElementById("branchThree_").style.transform = "none";
  document.getElementById("branchFour_").style.transform = "none";
  document.getElementById("Cursor").style.transform = "none";
  document.getElementById("CloudOne").style.transform = "none";
  document.getElementById("CloudTwo").style.transform = "none";
  document.getElementById("Face").style.transform = "none";
}
let infoIMG2 = document.getElementById("IMG2");
infoIMG2.addEventListener("mouseover", function( event ) {
  Animacion_();
})
infoIMG2.addEventListener("mouseout", function( event ) {
  Animacion_2()
})

function Animacion__(){
  document.getElementById("TheTreeOne__").style.transform = "rotate(-2deg)";
    document.getElementById("TheTreeTwo__").style.transform = "rotate(2deg)";
    document.getElementById("Face__").style.transform = "rotate(-8deg)  translate(-1%,-6.2%)";
    document.getElementById("armTwo__").style.transform = "rotate(-5deg) translate(-5%,1%)";
    document.getElementById("armOne__").style.transform = "rotate(-5deg) translate(-5.2%,1%)";
    document.getElementById("Body__").style.transform = "rotate(-5deg) translate(-5.2%,1%)";
    document.getElementById("Sun__").style.transform = "translate(-3.7%,0.2%)";
}
function Animacion__2(){
  document.getElementById("TheTreeOne__").style.transform = "none";
  document.getElementById("TheTreeTwo__").style.transform = "none";
  document.getElementById("Face__").style.transform = "none";
  document.getElementById("armTwo__").style.transform = "none";
  document.getElementById("armOne__").style.transform = "none" ;
  document.getElementById("Body__").style.transform = "none" ;
  document.getElementById("Sun__").style.transform = "none" ;
}
let ProyectsIMG = document.getElementById("ProyectsIMG");
ProyectsIMG.addEventListener("mouseover", function( event ) {
  Animacion__()
})
ProyectsIMG.addEventListener("mouseout", function( event ) {
  Animacion__2()
})

function Animacion____(){
  document.getElementById("branchOne____").style.transform = "rotate(-7deg) translate(0%,-10.2%)";
  document.getElementById("branchTwo____").style.transform = "rotate(7deg) translate(0%,-2.8%)";
  document.getElementById("Face____").style.transform = "rotate(8deg)  translate(-2.3%,-6.2%)";
  document.getElementById("armTwo____").style.transform = "rotate(-5deg) translate(-2.8%,9.7%)";
  document.getElementById("armOne____").style.transform = "rotate(5deg) translate(02.6%,02.2%)";
  document.getElementById("bodyRight____").style.transform = "rotate(-2deg) translate(-1%,-0.7%)";
}
function Animacion____2(){
  document.getElementById("branchOne____").style.transform = "none";
  document.getElementById("branchTwo____").style.transform = "none";
  document.getElementById("Face____").style.transform = "none";
  document.getElementById("armTwo____").style.transform = "none";
  document.getElementById("armOne____").style.transform = "none" ;
  document.getElementById("bodyRight____").style.transform = "none" ;
}
let ContactIMG = document.getElementById("ContactIMG");
ContactIMG.addEventListener("mouseover", function( event ) {
  Animacion____()
})
ContactIMG.addEventListener("mouseout", function( event ) {
  Animacion____2()
})