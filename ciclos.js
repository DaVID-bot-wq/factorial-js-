// Se agrega un "event listener" al botón con id 'btn-ciclos'. 
// Cuando se hace clic en el botón, se ejecuta la función de callback que muestra ejemplos de diferentes ciclos e iteraciones.
document.getElementById('btn-ciclos').addEventListener('click', () => {
    // Obtiene el elemento con id 'resultado-ciclos' donde se mostrarán los resultados.
    const resultado = document.getElementById('resultado-ciclos');
    // Variable para acumular los resultados y mensajes que se mostrarán.
    let mensaje = '';

    // Ciclo for
    // El ciclo 'for' itera desde 1 hasta 5, mostrando cada número.
    mensaje += '<h3>Ciclo for</h3>'; // Agrega un encabezado para el ciclo 'for'.
    for (let i = 1; i <= 5; i++) {
        // Muestra el número actual de la iteración dentro de una etiqueta <br> para saltar de línea.
        mensaje += `Número: ${i}<br>`;
    }

    // Ciclo while
    // El ciclo 'while' itera mientras 'j' sea menor o igual a 5, mostrando cada número.
    mensaje += '<h3>Ciclo while</h3>'; // Agrega un encabezado para el ciclo 'while'.
    let j = 1; // Inicializa la variable 'j' en 1.
    while (j <= 5) {
        // Muestra el número actual de la iteración.
        mensaje += `Número: ${j}<br>`;
        j++; // Incrementa 'j' en cada iteración para eventualmente salir del ciclo.
    }

    // Ciclo do-while
    // El ciclo 'do-while' ejecuta al menos una vez y luego itera mientras 'k' sea menor o igual a 5, mostrando cada número.
    mensaje += '<h3>Ciclo do-while</h3>'; // Agrega un encabezado para el ciclo 'do-while'.
    let k = 1; // Inicializa la variable 'k' en 1.
    do {
        // Muestra el número actual de la iteración.
        mensaje += `Número: ${k}<br>`;
        k++; // Incrementa 'k' en cada iteración para eventualmente salir del ciclo.
    } while (k <= 5); // Continúa el ciclo mientras 'k' sea menor o igual a 5.

    // Ciclo for...in
    // El ciclo 'for...in' itera sobre las propiedades enumerables de un objeto.
    mensaje += '<h3>Ciclo for...in</h3>'; // Agrega un encabezado para el ciclo 'for...in'.
    const persona = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' }; // Define un objeto 'persona' con propiedades.
    for (let key in persona) {
        // Muestra cada clave y su valor del objeto 'persona'.
        mensaje += `${key}: ${persona[key]}<br>`;
    }

    // Ciclo for...of
    // El ciclo 'for...of' itera sobre los valores de un iterable, como un array.
    mensaje += '<h3>Ciclo for...of</h3>'; // Agrega un encabezado para el ciclo 'for...of'.
    const frutas = ['manzana', 'plátano', 'fresa']; // Define un array de frutas.
    for (let fruta of frutas) {
        // Muestra cada elemento del array 'frutas'.
        mensaje += `${fruta}<br>`;
    }

    // Uso de break y continue
    // Demuestra el uso de 'break' para salir del ciclo y 'continue' para saltar una iteración.
    mensaje += '<h3>Uso de break y continue</h3>'; // Agrega un encabezado para el uso de 'break' y 'continue'.
    for (let i = 1; i <= 10; i++) {
        if (i === 6) {
            // Mensaje cuando se encuentra el número 6 y se rompe el ciclo.
            mensaje += 'Uso de break: Terminando ciclo<br>';
            break; // Sale del ciclo cuando i es 6.
        }
        if (i % 2 === 0) {
            continue; // Salta la iteración si i es par (número par no se muestra).
        }
        // Muestra números impares.
        mensaje += `Número impar: ${i}<br>`;
    }

    // Muestra el resultado final en el elemento con id 'resultado-ciclos'.
    resultado.innerHTML = mensaje;
});
