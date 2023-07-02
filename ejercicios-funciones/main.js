//Ejercicio Uno
function saludar(nombre) {
  let saludo = "Hola " + nombre + " se bienvenido al mundo de la programación";
  return saludo;
}

let saludoFinal = saludar("karen");
console.log(saludoFinal);

//Ejercicio Dos
function multiplicar(num1, num2) {
  let resultado = num1 * num2;
  return resultado;
}

console.log(multiplicar(3, 4));

//Ejercicio Tres
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.log(areaTriangulo(5, 3));

function perimetroTriangulo(ladoUno, ladoDos, ladoTres) {
  return ladoUno + ladoDos + ladoTres;
}

console.log(perimetroTriangulo(4, 5, 6));

//Ejercicio Cuatro
function calcularPrecio(precio, cantidadProducto) {
  let precioInicial = precio * cantidadProducto;
  if (cantidadProducto >= 10 && cantidadProducto < 20) {
    let descuentoUno = (precioInicial * 10) / 100;
    return descuentoUno;
  } else if (cantidadProducto >= 20) {
    let descuentoDos = (precioInicial * 20) / 100;
    return descuentoDos;
  } else {
    return `No aplica decuento, el precio es ${precioInicial}`;
  }
}

console.log(calcularPrecio(50000, 22));

//Ejercicio Cinco
function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return "Eres mayor de edad";
  } else return "Eres menor de edad";
}

console.log(esMayorDeEdad(18));

//Ejercicio Seis
function calcularImpuesto(ingresoAnual) {
  if (ingresoAnual <= 10000) {
    return (ingresoAnual * 10) / 100;
  } else if (ingresoAnual > 10000 && ingresoAnual <= 20000) {
    return (ingresoAnual * 15) / 100;
  } else if (ingresoAnual > 20000) {
    return (ingresoAnual * 20) / 100;
  } else {
    return "Usted no requiere de pagar impuestos";
  }
}

console.log(calcularImpuesto(22000));

//Ejercicio Siete
function verificarDia(dia) {
  switch (dia) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "Es dia laboral";
      break;

    case 6:
    case 7:
      return "Es fin de semana";
      break;

    default:
      return "El numero ingresado no es correcto";
  }
}

console.log(verificarDia(11))
