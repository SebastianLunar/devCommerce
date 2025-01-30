console.log("amor");

const form = document.getElementById("form")
console.log(form);
form.addEventListener("submit", function (e) {
e.preventDefault()
const edad =document.getElementById("edad").value
const name =document.getElementById("name").value
 const ocupasion =document.getElementById("occupation").value
console.log(edad, name, ocupasion);
const onjeto ={
  edad,
name,
ocupasion,
}
console.log(onjeto);

})