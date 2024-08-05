// Se agrega un "event listener" al botón con id 'btn-operadores'. 
// Cuando se hace clic en el botón, se ejecuta la función de callback que realiza varias operaciones y muestra los resultados.
document.getElementById('btn-operadores').addEventListener('click', () => {
    // Obtiene el elemento con id 'resultado-operadores' donde se mostrarán los resultados.
    const resultado = document.getElementById('resultado-operadores');
    // Variable para acumular los resultados y mensajes que se mostrarán.
    let mensaje = '';

    // Operadores de Asignación
    // Asignación y actualización de la variable 'a' con el valor de 'b'.
    let a = 5;  // Variable 'a' inicializada con valor 5.
    let b = 10; // Variable 'b' inicializada con valor 10.
    a += b;     // Asignación de suma: a = a + b. En este caso, a se convierte en 15.
    // Se añade al mensaje el resultado de la operación de asignación.
    mensaje += `<h3>Operadores de Asignación</h3>a += b: ${a}<br>`;

    // Operadores de Comparación
    // Comparaciones entre valores usando diferentes operadores de comparación.
    mensaje += `<h3>Operadores de Comparación</h3>`;
    mensaje += `5 == 5: ${5 == 5}<br>`;           // Igualdad: Compara si 5 es igual a 5. Resultado: true.
    mensaje += `5 === '5': ${5 === '5'}<br>`;     // Igualdad estricta: Compara si 5 es igual a '5' y del mismo tipo. Resultado: false.
    mensaje += `5 != 4: ${5 != 4}<br>`;            // Desigualdad: Compara si 5 es distinto a 4. Resultado: true.
    mensaje += `5 !== '5': ${5 !== '5'}<br>`;      // Desigualdad estricta: Compara si 5 es distinto a '5' o de tipo diferente. Resultado: true.
    mensaje += `5 > 3: ${5 > 3}<br>`;              // Mayor que: Compara si 5 es mayor que 3. Resultado: true.
    mensaje += `5 < 10: ${5 < 10}<br>`;            // Menor que: Compara si 5 es menor que 10. Resultado: true.
    mensaje += `5 >= 5: ${5 >= 5}<br>`;            // Mayor o igual que: Compara si 5 es mayor o igual a 5. Resultado: true.
    mensaje += `5 <= 10: ${5 <= 10}<br>`;          // Menor o igual que: Compara si 5 es menor o igual a 10. Resultado: true.

    // Operadores Aritméticos
    // Realiza operaciones aritméticas básicas.
    mensaje += `<h3>Operadores Aritméticos</h3>`;
    mensaje += `5 + 3: ${5 + 3}<br>`;               // Suma: 5 + 3 = 8.
    mensaje += `5 - 3: ${5 - 3}<br>`;               // Resta: 5 - 3 = 2.
    mensaje += `5 * 3: ${5 * 3}<br>`;               // Multiplicación: 5 * 3 = 15.
    mensaje += `5 / 3: ${5 / 3}<br>`;               // División: 5 / 3 ≈ 1.6667.
    mensaje += `5 % 3: ${5 % 3}<br>`;               // Módulo: 5 % 3 = 2 (residuo de la división).
    mensaje += `5 ** 2: ${5 ** 2}<br>`;             // Exponente: 5 elevado a la potencia de 2 = 25.

    // Operadores Lógicos
    // Realiza operaciones lógicas usando operadores lógicos.
    mensaje += `<h3>Operadores Lógicos</h3>`;
    mensaje += `true && false: ${true && false}<br>`; // AND lógico: true && false = false.
    mensaje += `true || false: ${true || false}<br>`; // OR lógico: true || false = true.
    mensaje += `!true: ${!true}<br>`;                 // NOT lógico: !true = false.

    // Operadores de String
    // Realiza operaciones con strings, como concatenación y repetición.
    mensaje += `<h3>Operadores de String</h3>`;
    mensaje += `"Hola " + "Mundo": ${"Hola " + "Mundo"}<br>`; // Concatenación: "Hola " + "Mundo" = "Hola Mundo".
    mensaje += `"Hola".repeat(3): ${"Hola".repeat(3)}<br>`; // Repetición: "Hola" repetido 3 veces = "HolaHolaHola".

    // Operador Ternario
    // Utiliza el operador ternario para realizar una operación condicional en una sola línea.
    mensaje += `<h3>Operador Ternario</h3>`;
    mensaje += `5 > 3 ? "Mayor" : "Menor": ${5 > 3 ? "Mayor" : "Menor"}<br>`; // Operador ternario: Si 5 > 3 es verdadero, "Mayor"; de lo contrario, "Menor". Resultado: "Mayor".

    // Operador delete
    // Elimina una propiedad de un objeto.
    const obj = { a: 1, b: 2 }; // Objeto con propiedades 'a' y 'b'.
    delete obj.b; // Elimina la propiedad 'b' del objeto.
    mensaje += `<h3>Operador delete</h3>obj: ${JSON.stringify(obj)}<br>`; // Muestra el objeto resultante: {"a":1}.

    // Operador typeof
    // Muestra el tipo de datos de diferentes valores.
    mensaje += `<h3>Operador typeof</h3>`;
    mensaje += `typeof "Hola": ${typeof "Hola"}<br>`;   // Tipo de cadena: "Hola" es del tipo string.
    mensaje += `typeof 123: ${typeof 123}<br>`;         // Tipo de número: 123 es del tipo number.
    mensaje += `typeof true: ${typeof true}<br>`;       // Tipo booleano: true es del tipo boolean.
    mensaje += `typeof []: ${typeof []}<br>`;           // Tipo de array: [] es del tipo object.
    mensaje += `typeof {}: ${typeof {}}<br>`;           // Tipo de objeto: {} es del tipo object.

    // Operador void
    // Ignora el valor de la expresión y siempre devuelve `undefined`.
    mensaje += `<h3>Operador void</h3>`;
    mensaje += `void(0): ${void(0)}<br>`;  // Ignora el valor de la expresión (0), resultando en undefined.

    // Operador in
    // Verifica si una propiedad existe en un objeto.
    const persona = { nombre: 'Juan', edad: 30 }; // Objeto con propiedades 'nombre' y 'edad'.
    mensaje += `<h3>Operador in</h3>`;
    mensaje += `"nombre in persona": ${"nombre" in persona}<br>`; // Verifica si la propiedad 'nombre' existe en el objeto persona. Resultado: true.
    mensaje += `"altura in persona": ${"altura" in persona}<br>`; // Verifica si la propiedad 'altura' existe en el objeto persona. Resultado: false.

    // Operador instanceOf
    // Verifica si un objeto es una instancia de una clase específica.
    const array = [1, 2, 3]; // Array de números.
    mensaje += `<h3>Operador instanceOf</h3>`;
    mensaje += `array instanceof Array: ${array instanceof Array}<br>`; // Verifica si 'array' es una instancia de Array. Resultado: true.

    // Operador de propagación (spread operator)
    // Combina dos arrays usando el operador de propagación.
    const arr1 = [1, 2, 3]; // Primer array.
    const arr2 = [4, 5, 6]; // Segundo array.
    const combinado = [...arr1, ...arr2]; // Combina los dos arrays usando el operador de propagación.
    mensaje += `<h3>Operador de Propagación (Spread)</h3>Combinado: ${combinado.join(', ')}<br>`; // Muestra el array combinado.

    // Muestra el resultado final en el elemento con id 'resultado-operadores'.
    resultado.innerHTML = mensaje;
});


