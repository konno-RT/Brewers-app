export function initAmount(){

const selectElement = document.getElementById('amount-select');
const outputText = document.getElementById('output-amount');

const textMap = {
  '1.0': '200mL (できあがり 約 170mL)',
  '1.5': '300mL (できあがり 約 260mL)',
  '2.0': '400mL (できあがり 約 350mL)',
  '2.5': '500mL (できあがり 約 440mL)',
  '3.0': '600mL (できあがり 約 520mL)',
  '3.5': '750mL (できあがり 約 660mL)',
  '4.0': '850mL (できあがり 約 750mL)',
};

selectElement.addEventListener('change', (e) => {
  const selectedValue = e.target.value;
  outputText.textContent = textMap[selectedValue] || '';

  if (selectedValue === '') {
      outputText.textContent = defaultText;
  } else {
      outputText.textContent = textMap[selectedValue] || defaultText;
  }
});

}