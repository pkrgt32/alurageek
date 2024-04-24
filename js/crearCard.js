import { conexionAPI } from "./dataAPI.js";
const lista = document.querySelector("[data-card]");

function construirCard(imagen,nombre,precio,id) {
  const producto = document.createElement("li");
    producto.innerHTML =`<li class="card">
    
    <img class="card__imajen" src="${imagen}" alt="imagen ${nombre}">
    <div class="card__texto">
        <h2 class="card__texto__nombre">${nombre}</h2>
        <div class="card__texto__foter">
        <p class="card__texto__precio">$${precio}</p>
        <p class="card__texto--id"> id ${id}</p>
        </div>
    </div>
  </li>`
  return producto
}

async function listarCard() {
    const listaAPI = await conexionAPI.listarCard()

    listaAPI.forEach(card => lista.appendChild(construirCard(card.imagen,card.nombre,card.precio,card.id)) );
}

listarCard()