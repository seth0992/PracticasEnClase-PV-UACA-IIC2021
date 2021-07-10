// Ciclo for
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// while
// let i = 0;
// while (i <= 10) {
//   console.log(` While ${i}`);
//   ++i;
// }

// Ciclo con bandera
// let verdadero = true;
// while (verdadero) {
//   console.log("Entre");
//   if (prompt("Deseas salir") === "SI") {
//     verdadero = false;
//   }
// }

// DO While
// let numero = 11;
// do {
//   console.log(numero);
//   numero = numero + 1;
// } while (numero <= 10);

// let num = 5;
// let y = 0;
// y = ++num;
// console.log(y);
// console.log(num);
// ++i
// i++

/// For para recorre un vector
let listaAnimales = ["Perros", "Gatos", "Conejos", "Ratas", "Pájaros"];
// indice de arreglos comienzan en 0

// for (let i = 0; i < 4; i++) {
//   console.log(`Animal: ${listaAnimales[i]}`);
// }

// console.log(listaAnimales.length);
// for (let i = 0; i < listaAnimales.length; i++) {
//   console.log(`Animal: ${listaAnimales[i]}`);
// }

// For in para arreglos y objetos
console.log("For in");
for (let animal in listaAnimales) {
  console.log(`Animal: ${listaAnimales[animal]}`);
}
// for of para arreglos
console.log("For of");
for (let animal of listaAnimales) {
  console.log(`Animal: ${animal}`);
}
