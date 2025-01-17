export function convertTextToAscii(text) {
    return Array.from(text).map(char => ({
      char,
      ascii: char.charCodeAt(0),
      binary: char.charCodeAt(0).toString(2),
    }));
  }
  
  export function calculateAsciiTotal(asciiResults) {
    return asciiResults.reduce((sum, item) => sum + item.ascii, 0);
  }
  
  document.getElementById('asciiForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const text = document.getElementById('textInput').value;
    if (!text) return;
  
    const asciiResults = convertTextToAscii(text);
    const totalAscii = calculateAsciiTotal(asciiResults);
  
    const resultDiv = document.getElementById('asciiResults');
    resultDiv.innerHTML = `
      <h3 class="text-lg font-semibold">Resultados:</h3>
      <ul class="space-y-2">
        ${asciiResults.map(item => `
          <li>${item.char}: ASCII=${item.ascii}, Binario=${item.binary}</li>
        `).join('')}
      </ul>
      <p class="mt-2">Valor total ASCII: ${totalAscii}</p>
    `;
  });
  