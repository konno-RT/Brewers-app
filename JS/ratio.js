export function initRatio(){

const selectElement = document.getElementById('amount-select');
const waterDisplay = document.getElementById('water-display');
const finishDisplay = document.getElementById('finish-display');

const slider = document.getElementById('ratio-slider');
const ratioDisplay = document.getElementById('ratio-display');

const weightDisplay = document.getElementById('coffee-weight');

//お湯の量定義

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

//お湯・比率・豆の量を計算

function updateCalculations(){
  const selectedValue = selectElement.value;
  const data = amountData[selectedValue]  || defaultAmount;
  
  //それぞれの表示情報

  waterDisplay.textContent = data.water;
  finishDisplay.textContent = data.finish;
  ratioDisplay.textContent = slider.value;

  //お湯の量と比率定義(文字列を少数の数値に変更)

  const water = parseFloat(data.water);
  const ratio = parseFloat(slider.value);

  //豆の量計算

  if (water > 0 && ratio > 0){
    weightDisplay.textContent = Math.round(water / ratio);
  
  }else{
    weightDisplay.textContent = '0';
  }

}

//セレクトかスライダーで値が変わるごとに更新

selectElement.addEventListener('change',updateCalculations);
slider.addEventListener('input', updateCalculations);


}