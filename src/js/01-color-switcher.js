const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

btnStart.addEventListener('click', getStart);
btnStop.addEventListener('click', getStop);

let intervalId = null;

function getStart() {
  btnStart.disabled = true;
  btnStop.disabled = false;

  intervalId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getStop() {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(intervalId);
}
