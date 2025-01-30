document.addEventListener('DOMContentLoaded', function(){
const Formulario = document.getElementById("Formulario");
Formulario.addEventListener('submit', async (e) => {
  e.preventDefault();
  const Nombre  = document.getElementById('Nombre').value;
  const Edad = document.getElementById('Edad').value;
  const LugarNacimiento = document.getElementById('LugarNacimiento').value;
    

    if (Nombre === '' || Edad === '' || LugarNacimiento === '' ){
        alert('por favor, completar todos los campos.');
    } else {
        const NuevoResgistro = {
            id: crypto.randomUUID(),
            name: Nombre,
            age: Edad,
            city: LugarNacimiento
        };
        console.log(NuevoResgistro);
        alert(`Nombre: ${Nombre}\nedad: ${Edad}\nLugarNacimiento: ${LugarNacimiento}`);

    }
    console.log('response');
});
});