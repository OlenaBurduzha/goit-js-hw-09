const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');


startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStoptBtn);

function onStartBtn() {
interval = setInterval(()=> {
         body.style.backgroundColor=getRandomHexColor()
     }, 1000)
}

function onStoptBtn() {
    clearInterval(interval)  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}