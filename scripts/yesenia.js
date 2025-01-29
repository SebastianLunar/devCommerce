console.log("hola")

document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('genero').value;

    const datoUsuario = {
        nombre: nombre,
        edad: edad,
        genero: genero
    };

    console.log(JSON.stringify(datoUsuario));
});
