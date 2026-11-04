export function initAmount(){

const selectElement = document.getElementById('amount-select');
const waterDisplay = document.getElementById('water-display');
const finishDisplay = document.getElementById('finish-display');

const defaultAmount = { water: '0', finish: '0' };

const amountData = {
  '1.0': { water: "200", finish: "170" },
  '1.5': { water: "300", finish: "260" },
  '2.0': { water: "400", finish: "350" },
  '2.5': { water: "500", finish: "440" },
  '3.0': { water: "600", finish: "520" },
  '3.5': { water: "750", finish: "660" },
  '4.0': { water: "850", finish: "750" },
};

selectElement.addEventListener('change', (e) => {
  const selectedValue = e.target.value;

  const data = amountData[selectedValue]  || defaultAmount;

  waterDisplay.textContent = data.water;
  finishDisplay.textContent = data.finish;
});

}