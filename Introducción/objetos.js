const persona = {
    nombre: 'Luis',
    edad: 17,
    correo: 'correo@correo.com',
    suscripciones: {
        web: true,
        correo: true,
    },
    coloresFavoritos: ['negro', 'rojo'],
    saludo: function () {
        alert('Hola');
    },

};

// console.log(persona['edad'])

const variable = 'suscripciones';
// console.log(persona[variable])

persona.pais = 'Ecuador';
persona.pais = 'EE.UU'
console.log(persona.pais)

console.log(persona.saludo())