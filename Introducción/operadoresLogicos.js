// Operador AND, OR, NOT

// AND

const nombre = 'Luis';
const edad = 13;
const entrada = false;
const permisoPadres = true;

const accesoPermitido = edad >= 18 && entrada;

// OR
const permitirAcceso = (edad >= 18 && entrada) || (permisoPadres && entrada);

// NOT
const variable = true;

console.log(!variable);