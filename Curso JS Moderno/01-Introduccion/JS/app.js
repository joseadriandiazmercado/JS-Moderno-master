//!mostrar un input al inicio de la pagina
// const nombre = prompt('cual es tu nombre?');

// document.querySelector('.contenido').innerHTML  // document.querySelector es para hacer peticiones al documento de html, innerHTML es para remplasarlo 
// = `${nombre} esta aprendiento JS moderno`;     //${variable} y mensaje restante
// console.log('hola');
// console.log('adrian');

// function decir_hola(){
//     console.log('hola');
// }

// console.log(decir_hola);


//!Numero de numeros negativos en una matriz
// let grid = [[3,2],[1,0]]
// const countNegatives = (numerosIterador = [], totalDeNumeros = 0) => {
//         numerosIterador.forEach(arrayInterno => {
//         arrayInterno.forEach(elemento => {
//           if(elemento < 0 ) {
//             totalDeNumeros ++
//             return
//           }
//           return elemento 
//         });
//       });
//       return totalDeNumeros
// }

// countNegatives(grid)

// console.log(countNegatives(grid))
// // console.log(totalDeNumeros)

//!Funcion que convierte de un numero romano a un numero
//substring() es un método para extraer una subcadena de
// //texto de una cadena más grande, dadas las posiciones inicial y final dentro de la cadena.
//!Pendiente
// const numeroRomano = 
// [{ letra: 'I', valor : Number(1)},
// { letra: 'V', valor : Number(5)},
// { letra: 'X', valor : Number(10)},
// { letra: 'L', valor : Number(50)},
// { letra: 'C', valor : Number(100)},
// { letra: 'D', valor : Number(500)},
// { letra: 'M', valor : Number(1000)}]

// const s= 'XXVII'
// let resultado = 0;
// const romanToInt = () => {
//     for(let i = 0; i < s.length; i++){
//         const cadenaTexto = s.substring(i,i + 1)
//         const entrarLetra = numeroRomano.find(o => o.letra == cadenaTexto).valor
//         resultado = resultado += entrarLetra
//     }
//     return resultado
// }
// console.log(romanToInt())




//!El cliente mas ricolino(de plata)
//!suma de arreglos y obtener el valor maximo del mismo
// const accounts = [[1,2,3],[3,2,1]]
// const maximumWealth = (numeros = [], totalDeArreglos = []) => {
//     numeros.forEach(s =>{
//             const sumaArrelogos = s.reduce((antetior, actual) => antetior + actual,0)
//             totalDeArreglos = [...totalDeArreglos, sumaArrelogos]
//     })
//     return Math.max(...totalDeArreglos)
// }
// console.log(maximumWealth(accounts))?



//!Palindrome Linked List
//!Pendiente

//!Realizar comparacion de dos objetos, esto se puede con .revece(), cambio de posicion los valores de los arreglos.
// verficar el valor de todos ellos, 1 == 1 ?, 2 == 1 ?, se obtiene los valores y los resultados y regresar true si cada uno de ellos es igual, false si uno es diferente

// const head = [3,2,2,1];
// let isTrue = false;

// const isPalindrome = () => {
//     console.log(`Este es el original`,head);
//     const comparador = head.reverse();
//     console.log(`Este es el comparador`,comparador)
// }
// isPalindrome(head);



//!Funcion que se mandar a llamar cada segundo durante una session





//!ID unico para cualquier identificador
// const uniqueDato = () => {
//     //Quitar 0. en math
//     const math = Math.random().toString().substring(2)
//     //Date con base 36
//     const date = Date.now().toString(36)
//     return date + math
// }
// console.log(uniqueDato())

let time = 0
const cargarChat = () => {
    time++
    console.log(time)

}


// setInterval(() => {
//     cargarChat();
// }, 1000);
