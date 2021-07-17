// Practicas JS
// 1. Escriba una función que reciba dos números y devuelva el mayor
function Numeros(num1, num2) {
  return Math.max(num1, num2);
}

// console.log(Numeros(60, 20));

function mayor(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 < num1) {
    return num2;
  } else {
    return "Son iguales";
  }
}
// console.log(mayor(60, 20));
// 2. Escriba una función que dados 3 números devuelva el signo de la multiplicación de los 3
function signoMulti(num1, num2, num3) {
  let resultado = num1 * num2 * num3;
  if (resultado > 0) {
    return "+";
  } else if (resultado < 0) {
    return "-";
  } else {
    return "Neutro";
  }
}

// console.log(signoMulti(0, 6, 20));

// 3. Escriba una función que orden 3 numero de mayor a menor

// 4. Escriba una función que reciba un idioma ('es', 'en') y devuelva <hola mundo!> en el idioma correspondiente
function Idioma(lenguaje) {
  if (lenguaje === "es") {
    return "Hola Mundo";
  } else {
    return "Hello word";
  }
}

console.log(Idioma("en"));
