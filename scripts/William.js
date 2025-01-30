document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("boton");
    const mensajesDiv = document.getElementById("mensajes");

    boton.addEventListener("click", () => {
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const comentario = document.getElementById("comentario").value;

        // mensajesDiv.innerHTML = "";

        const mensaje = document.createElement("div");
        mensaje.innerHTML = `
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Apellido:</strong> ${apellido}</p>
    <p><strong>Comentario:</strong> ${comentario}</p>
`;
        mensajesDiv.appendChild(mensaje);
    });
});

