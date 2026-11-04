export function initStopwatch(){

let startTime = 0;
let elapsedTime = 0;
let timerId = null;

const display = document.getElementById('timer');
const toggleBtn = document.getElementById('toggle');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
  const total = elapsedTime + (timerId ? Date.now() - startTime : 0);
  const m = String(Math.floor(total / 60000)).padStart(2, '0');
  const s = String(Math.floor((total % 60000) / 1000)).padStart(2, '0');
  const ms = String(Math.floor((total % 1000) / 10)).padStart(2, '0');
  display.textContent = `${m}:${s}.${ms}`;
}

toggleBtn.addEventListener('click', () => {

  if (timerId === null) {
    startTime = Date.now();
    timerId = setInterval(updateDisplay, 10);
    toggleBtn.textContent = 'STOP';
  } 

  else {
    clearInterval(timerId);
    elapsedTime += Date.now() - startTime;
    timerId = null;
    toggleBtn.textContent = 'START';
    updateDisplay();
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(timerId);
  timerId = null;
  elapsedTime = 0;
  toggleBtn.textContent = 'START';
  updateDisplay();
});

}