const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let interval = null;

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStoptBtn);

function onStartBtn() {
  interval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor()
  }, 1000);
    startBtn.toggleAttribute('disabled');
}

function onStoptBtn() {
  clearInterval(interval);
  stopBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
