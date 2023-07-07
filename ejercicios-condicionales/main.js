// //Ejercicio Uno
// function numMayor(num1, num2) {
//   if (num1 > num2) {
//     return "Número uno es mayor a número dos";
//   } else {
//     return "No aplica";
//   }
// }
// console.log(numMayor(3, 2));

// //Ejercicio Dos
// function numerosIguales(num1, num2) {
//   if (num1 === num2) {
//     return "Ambos números son de igual valor";
//   } else {
//     return "No aplica";
//   }
// }
// console.log(numerosIguales(3, 3));

// //Ejercicio Tres
// function numMenor(num1, num2) {
//   if (num1 > num2) {
//     return "Número uno es mayor a número dos ";
//   } else if (num2 > num1) {
//     return "Número dos es mayor a número uno";
//   } else {
//     return "No aplica, ambos son el mismo número";
//   }
// }

// console.log(numMenor(5, 3));

// //Ejercicio Cuatro
// function mayor(num1, num2, num3) {
//   if (num1 > num2 && num1 > num3) {
//     return `${num1} es mayor a ${num2} y a ${num3}`;
//   } else if (num2 > num1 && num2 > num3) {
//     return `${num2} es mayor a ${num1} y a ${num3}`;
//   } else {
//     return `${num3} es mayor a ${num1} y a ${num2}`;
//   }
// }

// let resultado = mayor(3, 5, 7);
// console.log(resultado);

// //Ejercicio Cinco
// let persona1 = {
//   nombre: "Karen",
//   edad: 19,
//   altura: 1.7,
// };

// let persona2 = {
//   nombre: "Claudia",
//   edad: 50,
//   altura: 1.75,
// };

// if (persona1.altura > persona2.altura) {
//   console.log(persona1.nombre + " es más alto que " + persona2.nombre);
// } else if (persona1.altura < persona2.altura) {
//   console.log(persona2.nombre + " es más alto que " + persona1.nombre);
// } else {
//   console.log(
//     persona1.nombre + " y " + persona2.nombre + " tienen la misma altura"
//   );
// }

// if (persona1.edad > persona2.edad) {
//   console.log(persona1.nombre + " es mayor que " + persona2.nombre);
// } else if (persona1.edad < persona2.edad) {
//   console.log(persona2.nombre + " es mayor que " + persona1.nombre);
// } else {
//   console.log(
//     persona1.nombre + " y " + persona2.nombre + " tienen la misma edad"
//   );
// }

// //Ejercicios Seis
// let nombre = prompt("Ingresa tu nombre");
// let edad = prompt("Ingresa tu edad");
// let altura = prompt("Ingresa tu altura");
// let vision = prompt("Ingresa tu campo de visión");

// if(edad >=18 && altura > 150 && vision >= 8){
//   console.log("Esta capacitado para conducir")
// } else{
//   console.log("No está capacitado para conducir")
// }

// //Ejercicio Siete
// let nombreCliente=prompt ("Ingrese el nombre del cliente")
// let pase = prompt("VIP o normal?")
// let entrada = prompt("Posee usted entrada?")
// let usarEntrada= prompt("Desea usar su entrada?")

// if (nombreCliente === "Karen" || pase === "VIP"){
//   console.log("Su entrada es libre, sea usted bienvenido")
// }else if (entrada === "si" && usarEntrada === "si"){
//   console.log("Usted ha usado su entrada, sea bienvenido")
// }else if(nombreCliente !== "Karen" && pase !=="VIP" && entrada ==="no"){
//   let comprarEntrada = prompt("Desea comprar una entrada")
//   if(comprarEntrada === "si"){
//     let dineroDisponible = prompt("Cuanto dinero tiene disponible")
//     if(dineroDisponible >= 1000){
//       console.log("Venta exitosa, sea ustede bienvenido")
//     }else{
//       console.log("Venta declinada, no cumple con los fondos necesarios")
//     }
//   }else if(comprarEntrada==="no"){
//     console.log("Hasta luego y que tenga un bonito día")
//   }
// }else{
//   console.log("Los valores ingresados son erroneos")
// }

//Ejercicio Ocho 
// function ingresarDatosDNI() {
//   let numero = prompt("Ingrese el número de DNI:");
//   let nombre = prompt("Ingrese su nombre:");
//   let afpellido = prompt("Ingrese su apellido:");
//   let fechaNacimiento = prompt("Ingrese su fecha de nacimiento:");

//   console.log("Número de DNI: " + numero);
//   console.log("Nombre: " + nombre);
//   console.log("Apellido: " + apellido);
//   console.log("Fecha de nacimiento: " + fechaNacimiento);

//   let confirmacion = prompt("¿Los datos ingresados son correctos?");

//   if (confirmacion) {
//     let dni = {
//       numero: numero,
//       nombre: nombre,
//       apellido: apellido,
//       fechaNacimiento: fechaNacimiento,
//     };
//     console.log("Registro exitoso. Los datos ingresados son:");
//     console.table(dni);
//   } else {
//     console.log("Vuelva a intentarlo en 1 mes.");
//   }
// }

// ingresarDatosDNI();

// //Ejercicio Nueve
// let edad = prompt("Ingrese su edad");
// if (edad <= 12 && edad >= 0) {
//   console.log("Eres un infante");
// } else if (edad >= 13 && edad <= 18) {
//   console.log("Eres un adolescente");
// } else if (edad >= 19 && edad <= 45) {
//   console.log("Eres un mayor joven");
// }else if (edad>45 && edad<100){
//   console.log("Eres un anciano")
// }else{
//   console.log(`En realidad tiene ${edad} años?`)
// }

// // Ejercicio Diez
// alert("Piedra, papel o tijera? VAMOS A JUGAR!");
// let jugador1 = prompt("Ingrese su jugada, jugador uno");
// let jugador2 = prompt("Ingrese su jugada, jugador dos");

// if (
//   (jugador1 === "piedra" && jugador2 === "tijera") ||
//   (jugador1 === "tijera" && jugador2 === "papel") ||
//   (jugador1 === "papel" && jugador2 === "piedra")
// ) {
//   console.log(`jugador uno gana con ${jugador1}`);
// } else if (
//   (jugador2 === "piedra" && jugador1 === "tijera") ||
//   (jugador2 === "tijera" && jugador1 === "papel") ||
//   (jugador2 === "papel" && jugador1 === "piedra")
// ) {
//   console.log(`jugador dos gana con ${jugador1}`);
// } else if (
//   (jugador2 === "piedra" && jugador1 === "piedra") ||
//   (jugador2 === "tijera" && jugador1 === "tijera") ||
//   (jugador2 === "papel" && jugador1 === "papel")
// ) {
//   console.log("Hay un empate");
// }else{
//   console.log("Uno de los jugadores está haciendo trampa")
// }

// //Ejercicio Once
// let color = prompt("Ingrese un color ")

// switch(color){

//   case "Blanco":
//     console.log( "Falta de color")
//     break;

//     case "Negro":
//     console.log( "Falta de color")
//     break;

//   case "Verde":
//     console.log( "El color de la naturaleza")
//     break;

//   case "Azul":
//     console.log( "El color del agua")
//     break;

//   case "Amarillo":
//     console.log( "El color del sol")
//     break;

//   case "Rojo":
//     console.log( "El color del fuego")
//     break;

//   case "Marrón":
//     console.log( "El color de la tierra")
//     break;

//   default:
//   console.log( "Excelente elección, no lo teniamos pensado")
//   break
// }

//Ejercicio Doce **PREGUNTAR**
// let operacion = prompt(
//   "Elija la operación que quiere realizar: división, multiplicacion, suma o resta"
// );
// let num1 = parseFloat(prompt("Ingrese el primer numero:"));
// let num2 = parseFloat(prompt("Ingrese el segundo numero:"));

// if (operacion === "multiplicacion") {
//   console.log(num1 * num2);
// } else if (operacion === "suma") {
//   console.log(num1 + num2);
// } else if (operacion === "resta") {
//   console.log(num1 - num2);
// } else if( operacion === "division" ){
//   if (num2 == 0) {
//     console.log("ERROR")
//   }else{
//     console.log(num1/num2)
//   }
// }else{
//     console.log("Operación no valida")
// }

//Ejercicio Trece - 
// function ingresarDatosDNI() {
//     let numero = prompt("Ingrese el número de DNI:");
//     let nombre = prompt("Ingrese su nombre:");
//     let afpellido = prompt("Ingrese su apellido:");
//     let fechaNacimiento = prompt("Ingrese su fecha de nacimiento:");

//     console.log("Número de DNI: " + numero);
//     console.log("Nombre: " + nombre);
//     console.log("Apellido: " + apellido);
//     console.log("Fecha de nacimiento: " + fechaNacimiento);

//     let confirmacion = prompt("¿Los datos ingresados son correctos?");

//     if (confirmacion) {
//       let dni = {
//         numero: numero,
//         nombre: nombre,
//         apellido: apellido,
//         fechaNacimiento: fechaNacimiento
//       }
//       console.log("Registro exitoso. Los datos ingresados son:");
//       console.table(dni);
//     } else {
//       console.log("Vuelva a intentarlo en 1 mes.");
//     }
//   }