const buttonStartEl = document.querySelector('[data-start]');
const buttonStopEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

buttonStopEl.disabled = true;
let timerId = null;
// console.dir(buttonStartEl);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickButtonStart() {
  buttonStopEl.disabled = false;
  timerId = setInterval(
    () => (bodyEl.style.backgroundColor = getRandomHexColor()),
    1000
  );
  if (timerId) {
    buttonStartEl.disabled = true;
  }
}

function onClickButtonStop() {
  clearInterval(timerId);
  buttonStopEl.disabled = true;
  buttonStartEl.disabled = false;
  //   buttonStartEl.removeEventListener('click', onClickButtonStart);
}

buttonStartEl.addEventListener('click', onClickButtonStart);
buttonStopEl.addEventListener('click', onClickButtonStop);
