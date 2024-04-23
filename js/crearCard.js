import { conexionAPI } from "./dataAPI.js";
const lista = document.querySelector("[data-card]");

function construirCard(imagen,nombre,precio) {
  const producto = document.createElement("li");
    producto.innerHTML =`<li class="card">
    <img class="card__imajen" src="${imagen}" alt="imagen ${nombre}">
    <div class="card__texto">
        <h2 class="card__texto__nombre">${nombre}</h2>
        <div class="card__texto__foter">
        <p class="card__texto__precio">$${precio}</p>
        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill card__texto__eliminar" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
          </svg>
        </div>
    </div>
  </li>`
  return producto
}

async function listarCard() {
    const listaAPI = await conexionAPI.listarCard()

    listaAPI.forEach(card => lista.appendChild(construirCard(card.imagen,card.nombre,card.precio)) );
}

listarCard()