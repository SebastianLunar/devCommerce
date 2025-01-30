const formulario = document.getElementById("formulario");



formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("Nombre: ",formulario.nombre.value)
    console.log("Edad: ",formulario.edad.value)
    console.log("Comidad Favorita: ",formulario.comidaFavorita.value)


})
