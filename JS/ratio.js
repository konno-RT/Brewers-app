export function initRatio (){

const slider = document.getElementById('ratio-slider');
const display = document.getElementById('ratio-display');


slider.addEventListener('input', (event) => {
    display.textContent = event.target.value;
})

}