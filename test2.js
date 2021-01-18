'use strict';

//HACER USO DE FECTH

let boton = document.getElementById('boton');
let contenedor = document.getElementById('contenedor');
let users = null;

boton.addEventListener('click', function () {
    fetch('./data.json')
        .then(datos => datos.json())
        .then(datos => {
            users = datos.data;
            mostrarDatos(users)
        })
})

function mostrarDatos(users) {
    //console.log(users)
    users.map((item, i) => {
        /*      let name = document.querySelector('.name')
                let userName = document.querySelector('.userName')
                name.innerHTML = item.name;
                userName.innerHTML = item.username; */

        let name = document.createElement('h1');
        let userName = document.createElement('h3');
        
        name.innerHTML = item.name;
        userName.innerHTML = item.username;
        
        contenedor.appendChild(name);
        contenedor.appendChild(userName);

    })

}