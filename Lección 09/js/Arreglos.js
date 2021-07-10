let listaAnimales = ["Perros", "Gatos", "Conejos", "Ratas", "Pájaros"];

// Arreglos la posibilidad de saber el tamaño
// console.log(listaAnimales.length);

//Añadir elementos al arreglos
// Método push y el pop
listaAnimales.push("Pez");
// console.log(listaAnimales);

// Remover el ultimo elemento uso pop
listaAnimales.pop();
// console.log(listaAnimales);

// Unir dos arrelgos
let listaAnimales2 = ["Lombriz", "Elefante", "Vaca"];

listaAnimales = listaAnimales.concat(listaAnimales2);
console.log(listaAnimales);

// splice
// var x = listaAnimales.splice(2);
// console.log(x);

// slice
// console.log(listaAnimales.slice(1, 4));

// console.log(listaAnimales.sort()); // ordena
// console.log(listaAnimales.reverse()); // al revés
