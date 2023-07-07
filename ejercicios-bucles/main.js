//Ejercicio Uno
// let numero = parseFloat(prompt("Ingresa valor"));

// for (let index = 1; index <= 10; index++) {
//     let resultado = numero*index;
//   console.log(`El resultado de ${numero} x ${index} es: ` + resultado);
// }

//Ejercicio Dos
// let numeroIngresado = parseFloat(
//   prompt(
//     "Ingrese el numero que quiere guardar o 0 en caso de que quieras finalizar"
//   )
// );
// let arraynumero = [];

// while (numeroIngresado) {
//   arraynumero.push(numeroIngresado);
//   numeroIngresado = parseFloat(
//     prompt(
//       "Ingrese el numero que quiere guardar o 0 en caso de que quieras finalizar"
//     )
//   );
// }
// console.log(arraynumero)

// let numeroIngresado
// let arraynumero = [];

// do {
//     numeroIngresado = parseFloat(
//             prompt(
//               "Ingrese el numero que quiere guardar o 0 en caso de que quieras finalizar"
//             )
//           );
//           if(numeroIngresado){
//             arraynumero.push(numeroIngresado);
//           }
// } while (numeroIngresado);

// console.log(arraynumero)

//Ejercicio Tres 
// let ultimoNumero = arrayDeNumeros[arrayDeNumeros.length - 1]
// console.log(El ultimo numero ingresado fue ${ultimoNumero})

// let numeroIngresado = Number(prompt("Ingrese su numero para adivinar"))
// let contador = 1
// if (numeroIngresado == null || numeroIngresado == " ") {
//     alert("No ingresaste un numero")
// } else {
//     while (numeroIngresado != ultimoNumero && numeroIngresado >= 1 && numeroIngresado <= 100) {
//         contador++
//         if (numeroIngresado > ultimoNumero) {
//             alert("Es mas grande")
//         } else {
//             alert("Es mas chico")
//         }
//         numeroIngresado = Number(prompt("Ingrese un numero para adivinar"))
//     }
//     alert(Ganaste en ${contador} intentos)
// }

// console.log(Lo adivinaste en ${contador} intentos)

//Ejercicio Cuatro
// let numero = parseFloat(prompt("Ingrese el número para encontrar sus divisores"))

// for (let i = 1; i <= numero; i++){
//     if (numero % i === 0 ){
//         console.log("El divisor de este número es ", i)
//     }
// }

//Ejercicio Cinco
// let arrayDeportes = ["Golf", "Tenis","Ciclismo","Futbol","Voley","Hockey","Tiro con arco", "Boxeo", "Esgrima", "Remo"]

// for (let recorrido = 0; recorrido < arrayDeportes.length ; recorrido++){
//     console.log(arrayDeportes[recorrido])
// }

//Ejercicio Seis
// let arrayNumeroSimple = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// for (let recorrido = 0; recorrido < arrayNumeroSimple.length; recorrido++){
//     let resultado = (arrayNumeroSimple[recorrido] * 2)
//     console.log(resultado)
// }

//Pedir explicación
// for (let recorrido of arrayNumeroSimple) {
//   recorrido *= 2
//   console.log(recorrido)

// }

//Ejercicio Siete
// let papa = {
//   nombre: "Diego",
//   edad: 40,
//   altura: 170,
//   colorFavorito: "Azul",
// };

// let mama = {
//   nombre: "Lucero",
//   edad: 38,
//   altura: 165,
//   colorFavorito: "Purpura",
// };

// let hijo = {
//   nombre: "Fernando",
//   edad: 22,
//   altura: 175,
//   colorFavorito: "Verde",
// };

// let hija = {
//   nombre: "Lina",
//   edad: 16,
//   altura: 165,
//   colorFavorito: "Celeste",
// };

// let abuelo = {
//   nombre: "Marcos",
//   edad: 76,
//   altura: 167,
//   colorFavorito: "Marron",
// };

// let familia = [papa, mama, hijo, hija, abuelo];
// for (let recorrido = 0; recorrido < familia.length; recorrido++) {
//   console.log(`Bienvenido ${familia[recorrido].nombre}, tienes ${familia[recorrido].edad} años, tu altura es ${familia[recorrido].altura} y tu color favorito es el ${familia[recorrido].colorFavorito}`);
// }

//Ejercicio Nueve
// let arrayNumero = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// for(let recorrido = 0; recorrido < arrayNumero.length; recorrido++){
//     if(arrayNumero[recorrido] % 2 !== 0){
//         console.log("El número es impar "  + arrayNumero[recorrido])
//     }
// }

//Ejercicio Diez
// let numeroIngresado = parseFloat(
//   prompt(
//     "Ingrese el numero que quiere guardar o 0 en caso de que quieras finalizar"
//   )
// );
// let arrayNumero = [];
// let pares = 0;
// let impares = 0;

// while (numeroIngresado) {
//   arrayNumero.push(numeroIngresado);
//   numeroIngresado = parseFloat(
//     prompt(
//       "Ingrese el numero que quiere guardar o 0 en caso de que quieras finalizar"
//     )
//   );
// }
// console.log(arrayNumero);

// for (let recorrido = 0; recorrido < arrayNumero.length; recorrido++) {
//   if (arrayNumero[recorrido] % 2 !== 0) {
//     impares += arrayNumero[recorrido];
//   } else {
//     pares += arrayNumero[recorrido];
//   }
// }

// console.log(`La suma de impares es: ${impares}`)
// console.log(`La suma de pares es: ${pares}`)

//Ejercicio Once
// let nuevoArray = [5, 6, 2, 6, 8, 10, 7, 6, 89, 12]
// let numMayor = nuevoArray[0]
// for (let i = 1; i<= nuevoArray.length; i++){
//     if(nuevoArray[i] > numMayor){
//         numMayor = nuevoArray[i]
//     }
// }
// console.log("El numero mas grande es: " + numMayor)