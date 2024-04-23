
const url = "http://localhost:3001/producto"

async function listarCard() {
  const conexion = await fetch(url);
  const conexionConbertida = conexion.json();

  console.log(conexionConbertida);
  return conexionConbertida
}

async function enviarProducto(nombre, imagen, precio) {
  try {
    const conexion = await fetch(url, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        imagen: imagen,
        precio: precio,
      }),
    });

    const conexionConvertida = conexion.json();
    return conexionConvertida;
  } catch (error) {
    console.error("Error sending product data:", error);
    
  }
}


export const conexionAPI = {
  listarCard,enviarProducto
}
