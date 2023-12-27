// Estructura de los condicionales
// if (true){
//     Codigo a ejecutar
// }

//Ejemplo 1
// const usuario = {
//     edad: 17,
//     pais: 'Ecuador',
//     entrada: true,
// };

// if (usuario.edad>18){
//     console.log('Eres mayor de edad y puedes entrar al concierto')
// } else{
//     console.log('Los siento no puedes entrar, porque eres menor de edad')
// };

// // Ejemplo 2 | Combinando operaores
// const usuario = {
//     edad: 19,
//     pais: 'Ecuador',
//     entrada: false,
// };
// if (usuario.edad > 18 && usuario.entrada == true){
//     console.log('Puedes entrar... Adelante!!')
// } else{
//     console.log('Lo siento no puedes entrar :(')
// };

//  // Ejemplo 3 | Anidando condicionales
//  const usuario = {
//     edad: 17,
//     pais: 'Ecuador',
//     entrada: true,
// };

// if (usuario.edad>=18){
//     if (usuario.entrada){
//         console.log('El usuario es mayor de edad y tiene su respectiva entrada')
//     } else {
//         console.log('El usuario es mayor de edad pero no tiene ticket')
//     } 
// } else {
//     console.log('El usuario es menor de edad')
// };

// // Ejemplo 4 | elseif
// const usuario = {
//     edad: 17,
//     pais: 'Argentino',
//     entrada: true,
// };

// if (usuario.pais === 'Ecuador') {
//     console.log('El usuario es ecuatoriano de corazón')
// } else if (usuario.pais === 'Colombia') {
//     console.log('El usuario es colombiano de corazón')
// } else if(usuario.pais === 'EE.UU') {
//     console.log('El ususario es estadounidense')
// } else {
//     console.log('El usuario es de otro pais')
// };