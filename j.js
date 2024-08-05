function procesarNumero() {
    const numeroIni = parseInt(document.getElementById('numero-inicial').value);
    const numeroFin = parseInt(document.getElementById('numero-final').value);

    const resultadoElement = document.getElementById('resultado');

    let resultado = '';
    for (let i = numeroIni; i <= numeroFin; i++) {
      resultado += `${i} `;
    }
    resultadoElement.innerText = resultado;
  }