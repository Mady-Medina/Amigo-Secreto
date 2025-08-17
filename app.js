// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let amigoNuevo = document.getElementById("amigo").value;

    if (amigoNuevo == ""){
        alert("Por favor, inserte un nombre.");
    }else{
        amigos.push(amigoNuevo);
        document.getElementById("amigo").value = "";
    }

    actualizarAmigos();

}

function actualizarAmigos(){

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    cantAmigos = amigos.length

    for(let i = 0; i < cantAmigos; i++){
        let nuevoLi = document.createElement("li");
        nuevoLi.textContent = amigos[i];
        listaAmigos.appendChild(nuevoLi);
    }

}

function sortearAmigo(){

    if (amigos.length != 0 ){
        let indice = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = document.getElementById("resultado");

        let listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = "";
        amigoSorteado.innerHTML = `El amigo secreto sorteado es: ${amigos[indice]}`;

    }

}