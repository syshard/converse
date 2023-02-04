function calcular() {
  //valor inserido
  const inputValue = document.getElementById('inputValue').value;

  //base do valor
  const inputBase = parseInt(document.getElementById('inputBase').value, 10);

  //base da conversão
  const outputBase = parseInt(document.getElementById('inputBase2').value, 10);

  //conversão
  const outputValue = parseInt(inputValue, inputBase).toString(outputBase);

  document.getElementById('output').innerHTML = outputValue;
}

// Verifica se o navegador suporta o Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registrado com sucesso: ', registration);
      })
      .catch(error => {
        console.log('Service Worker falhou: ', error);
      });
  });
}
