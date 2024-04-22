
const url = "http://localhost:3000/probucto"

//consumo de api
async function getProducto (){
    try{
        let fetchProbuctos= await fetch(url)
        let datosProductos = await fetchProbuctos.json()
        crearCard(datosProductos)
    }
    catch(error){
        console.log(error)
    }
}

getProducto()

//crear html 

function crearCard (data){
    const card = document.querySelector("[data-ul]")

  data.forEach(elemento =>{
  const contenido =` <section class="card">
  <img class="card__imajen" src="${elemento.imagen}" alt="">
  <div class="card__texto">
      <h2 class="card__texto__nombre">${elemento.nombre}</h2>
      <div class="card__texto__foter">
      <p class="card__texto__precio">${elemento.precio}</p>
      <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill card__texto__eliminar" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
        </svg>
      </div>
  </div>
</section>`
   card.innerHTML = card.innerHTML + contenido
  })
}
