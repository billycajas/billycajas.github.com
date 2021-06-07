/*
//DOM
//querySelector

console.log("Hola Mundo");

let links = document.querySelectorAll('a');

links.forEach(function(link){
    console.log(links);
})

let celdas = document.querySelectorAll("td");


celdas.forEach(function(td){
    td.addEventListener("click", function(){
        console.log(this);
    })
})
*/

//Obtener los elementos de la clase .close

let cerrar = document.querySelectorAll(".close");

//Recorrerlos

cerrar.forEach(function(link){

    //Agregar un evento click a cada uno de ellos
    link.addEventListener("click", function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');
        
    //quitar las animaciones
    content.classList.remove("animate__backInDown");
    content.classList.remove("animate__animated");

    //agregar clases para animar su salida
    content.classList.add("animate__backOutDown");
    content.classList.add("animate__animated");

    setTimeout (function(){
        location.href = "/";
    },1000);
    
    return false;

    });
});



