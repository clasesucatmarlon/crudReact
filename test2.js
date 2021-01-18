'use strict';

//HACER USO DE FECTH

let boton = document.getElementById('boton');
let contenedor = document.getElementById('contenedor');
let posts = null;

boton.addEventListener('click', function () {
    fetch('./data.json')
        .then(datos => datos.json())
        .then(datos => {
            posts = datos.data;
            mostrarDatos(posts)
        })
})

function mostrarDatos(posts) {
    console.log(posts)
    posts.map((item, i) => {
        console.log(item)
    })
    
}