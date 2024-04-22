
const url = "http://localhost:3000/probucto"

async function listarCard() {
  const conexion = await fetch(url);
  const conexionConbertida = conexion.json();

  console.log(conexionConbertida);
  return conexionConbertida
}

export const conexionAPI = {
  listarCard
}
