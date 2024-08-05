// Función para calcular el factorial de un número

function calcularFactorial(n) {
    // Caso base: factorial de 0 o 1 es 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Inicializa el resultado
    let resultado = 1;
    // Bucle para calcular el factorial
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Agrega un "event listener" al botón con id 'calcular'
document.getElementById('btn-factorial').addEventListener('click', () => {
    // Obtiene el valor del input
    const numero = parseInt(document.getElementById('numero').value, 10);
    let mensaje = ' ';
    // Verifica si el número es válido (no NaN y no negativo)
    if (!isNaN(numero) && numero >= 0) {
        // Calcula el factorial usando la función
        const resultado = calcularFactorial(numero);
        // Muestra el resultado en el elemento con id 'resultado'
        document.getElementById('resultado').innerText = `El factorial de ${numero} es ${resultado}`;
    } else {
        // Muestra un mensaje de error si el número es inválido
        document.getElementById('resultado').innerText = 'Por favor, introduce un número entero no negativo.';
    }
});
