const Tabla = document.querySelector("Formulario")

Tabla.addEventListener('submit', async (e) => {
  e.preventDefault();
  const inputNombre = document.getElementById('Nombre').value
  const inputEdad = document.getElementById('Edad').value
  const inputColor = document.getElementById('ColorFavorito').value
  console.log(inputNombre)
})
