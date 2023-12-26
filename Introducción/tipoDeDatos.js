// Cadenas de texto
const nombre = 'Carlos';
const parrafo = 'este es un "parrafo"';
const parrafo2 = "este es un 'parrafo'";

//Numeros
const nuemro = 4;
const numero2 = -4.527;

//Booleanos
const usuarioConectado = false
const mayorQue = 10 > 2;
console.log(mayorQue)

//Arrays - Arreglos
const arreglo = [1, 'texto', false, {propiedad: 'valor'}, [1.2]];
console.log(arreglo)

//Objetos
const persona = {
    nombre: 'Luis', 
    apellido: 'Ríos',
    edad: 17,
    carro: {
        marca: 'Chevrolet',
        color: 'Cyan'
    }
};
console.log(persona.carro.color);

//Funciones
function saludo() {
    console.log('hola')
}

saludo()