
const appContenedor = document.querySelector("#ejercicio_numero_4");
const ejercicio4 = [10, 20, 30, 20, 30, 40, 60];
let suma = ejercicio4.reduce((anterior, actual) => {
    return appContenedor.innerHTML = anterior + actual;
})

console.log(ejercicio4);
console.log(suma);