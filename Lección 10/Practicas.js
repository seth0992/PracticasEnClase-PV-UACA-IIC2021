// 1. Escriba una función que reciba una variable y diga si la variable es string o no.
function valor(dato) {
  if (typeof dato === "string") {
    return "Es string";
  } else {
    return "No es string";
  }
}
// console.log(valor("Hola"));

function EsString(dato) {
  return typeof dato === "string" ? "Es String" : "No es String";
}
// console.log(EsString("Hola"));

// 2. Escriba una función que revise si un string está vacío o no. ('')
function Condicion(DatoR) {
  if (DatoR === "") {
    // que es empty o que contiene??
    return "Vació";
  } else {
    return "Con contenido";
  }
}

// console.log(Condicion(""));

function StringVacio(dato) {
  return dato.length === 0 ? true : false;
}
// console.log(StringVacio(""));

//3. Escriba un string con nombre y apellido juntos y lo separe en un arreglo de strings con el nombre de primero y el apellido de segundo. str.split(' ') 'Jeremy Elizondo' => ['Jeremy', 'Elizondo']
function NombreC(NCompleto) {
  // let Nombre = [];
  // Nombre = NCompleto.split(" ");
  // return Nombre;
  return NCompleto.split(" ");
}

// console.log(NombreC("Jeremy Elizondo")[1]);

// 4. Escriba una función que extraiga solo los primeros n caracteres de un string utilizando .slice() -> recibe dos argumentos, el primero es la posición y el segundo la cantidad de caracteres a sacar
function extraerPrimeraLetra(dato, cantidadLetras) {
  return dato.slice(0, cantidadLetras);
}

// console.log(extraerPrimeraLetra("Jeremy", 4));

// Escriba una función que reciba nombre y apellido y devuelva las iniciales. String.charAt() -> "Jeremy Elizondo" --> JE

function inciales(dato) {
  // "Jeremy Elizondo"
  let arrNombre = dato.split(" ");
  let inicialesString = ` ${arrNombre[0].charAt(0)}${arrNombre[1].charAt(0)}`;
  return inicialesString;
  // console.log(inicialesString);
}

function inciales2(dato) {
  return ` ${dato.split(" ")[0].charAt(0)} ${dato.split(" ")[1].charAt(0)}`;
}
// console.log(inciales2("Braseth Elizondo"));

// Escriba una función que ponga la primera letra en mayúscula -> Ejemplo "hola mundo" -> "Hola mundo".
function saludo(dato) {
  return `${dato.split(" ")[0].charAt(0).toUpperCase()}${dato
    .split(" ")[0]
    .slice(1)} ${dato.split(" ")[1]}`;
}

function saludo2(dato) {
  return dato.charAt(0).toUpperCase() + dato.slice(1);
}

console.log(saludo("hola mundo"));
console.log(saludo2("hola mundo"));

//Escriba una función que reciba un contador, y un valor y cree un arreglo con la cantidad de valores que dice el contador. llenar(3, 'b') => ['b', 'b', 'b']
function contadorRep(n, valor) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    // arr[i] = valor;
    arr.push(valor);
  }
  return arr;
}

console.log(contadorRep(3, "b"));
