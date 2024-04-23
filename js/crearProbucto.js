import { conexionAPI } from "./dataAPI.js";
const formulario = document.querySelector("[data-formular]");

async function crearProducto(event) {
    event.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    await conexionAPI.enviarProducto(nombre, imagen, precio);

   
}

formulario.addEventListener("submit", event => crearProducto(event) ); 
