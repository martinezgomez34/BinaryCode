export function convertDecimal(number) {
    return {
      binary: number.toString(2),
      octal: number.toString(8),
      hexadecimal: number.toString(16).toUpperCase(),
    };
  }
  
  document.getElementById('numberForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const number = parseInt(document.getElementById('numberInput').value, 10);
    if (isNaN(number)) return;
  
    const { binary, octal, hexadecimal } = convertDecimal(number);
  
    const resultDiv = document.getElementById('numberResults');
    resultDiv.innerHTML = `
      <h3 class="text-lg font-semibold">Resultados:</h3>
      <p>Binario: ${binary}</p>
      <p>Octal: ${octal}</p>
      <p>Hexadecimal: ${hexadecimal}</p>
    `;
  });
  