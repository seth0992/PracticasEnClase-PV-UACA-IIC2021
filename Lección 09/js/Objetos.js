let nombre = "Jeremy";
let edad = 28;
let pais = "CR";
let idioma = "Español";

// Objetos
let jeremy = {
  nombre: "Jeremy",
  edad: 28,
  pais: "CR",
  idioma: "Español",
  videojuegos: ["Mario", "Pokemon", "Mortal kombat"],
  direccion: {
    provincia: "Puntarenas",
    canton: "Corredores",
    distrito: "Canoas",
  },
  biografia: function () {
    return `nombre: ${this.nombre}, edad: ${edad}`;
  },
};

// console.log(jeremy); // mostrando al objeto
// console.log(jeremy.nombre); // mostrando un atributo del objeto
// console.log(jeremy["edad"]); // mostrando un atributo del objeto

console.log(jeremy.videojuegos);
console.log(jeremy.videojuegos[2]);
console.log(jeremy.direccion.canton);
console.log(jeremy.biografia());
