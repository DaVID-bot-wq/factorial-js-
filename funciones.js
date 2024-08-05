// Se agrega un "event listener" al botón con id 'btn-funciones'. 
// Cuando se hace clic en el botón, se ejecuta la función de callback que muestra ejemplos de diferentes tipos de funciones.
document.getElementById('btn-funciones').addEventListener('click', () => {
    // Obtiene el elemento con id 'resultado-funciones' donde se mostrarán los resultados.
    const resultado = document.getElementById('resultado-funciones');
    // Variable para acumular los resultados y mensajes que se mostrarán.
    let mensaje = '';

    // Función normal
    // Definición de una función llamada 'saludo' que toma un parámetro 'nombre' y devuelve un saludo.
    function saludo(nombre) {
        return `Hola, ${nombre}!`; // Devuelve el saludo con el nombre proporcionado.
    }
    // Se añade al mensaje el resultado de llamar a la función 'saludo' con el argumento 'Juan'.
    mensaje += `<h3>Función normal</h3>${saludo('Juan')}<br>`;

    // Función recursiva
    // Definición de una función llamada 'factorial' que calcula el factorial de un número usando recursión.
    //function factorial(n) {
      //  if (n === 0) return 1; // Caso base: el factorial de 0 es 1.
        //return n * factorial(n - 1); // Llamada recursiva: n * factorial de (n-1).
   // }

    
    // Se añade al mensaje el resultado de calcular el factorial de 5.
    //mensaje += `<h3>Función recursiva</h3>Factorial de 5: ${factorial(5)}<br>`;
// Función recursiva para calcular el factorial
function factorial(n) {
    // Caso base: factorial de 0 o 1 es 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Llamada recursiva: n * factorial de (n-1)
    return n * factorial(n - 1);
}

// Ejemplo de uso
console.log(factorial(5)); // Salida: 120

    // Función flecha
    // Definición de una función flecha llamada 'suma' que toma dos parámetros y devuelve su suma.
    const suma = (a, b) => a + b;
    // Se añade al mensaje el resultado de llamar a la función flecha 'suma' con los argumentos 3 y 4.
    mensaje += `<h3>Función flecha</h3>La suma de 3 y 4 es: ${suma(3, 4)}<br>`;

    // Función con closures
    // Definición de una función llamada 'crearContador' que retorna una función que incrementa y devuelve un contador.
    function crearContador() {
        let count = 0; // Variable privada 'count' para almacenar el estado del contador.
        // La función retornada incrementa 'count' y lo devuelve.
        return () => ++count;
    }
    // Se crea una instancia del contador.
    const contador = crearContador();
    // Se añade al mensaje el resultado de llamar al contador varias veces.
    mensaje += `<h3>Función con closures</h3>Contador: ${contador()} ${contador()} ${contador()}<br>`;

    // Uso de funciones predefinidas
    // Se añade al mensaje el resultado de usar algunas funciones predefinidas de JavaScript.
    mensaje += `<h3>Funciones predefinidas</h3>`;
    mensaje += `PI: ${Math.PI}<br>`; // Valor de PI proporcionado por el objeto Math.
    mensaje += `Máximo: ${Math.max(1, 2, 3, 4, 5)}<br>`; // Valor máximo de una lista de números proporcionado por el objeto Math.

    // Muestra el resultado final en el elemento con id 'resultado-funciones'.
    resultado.innerHTML = mensaje;
});


