const refs = {
  bodyColor: document.querySelector('body'),
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]'),
};

refs.startButton.addEventListener('click', start);
refs.stopButton.addEventListener('click', stop);

// функція генерування випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// фукнція зміни кольору фону
function changeBackground(color) {
  refs.bodyColor.style.backgroundColor = color;
  console.log(color);
}

let intervalColorChange = undefined;

// Start generate
function start() {
  intervalColorChange = setInterval(randomNumber => {
    getRandomHexColor();
    changeBackground(getRandomHexColor());
  }, 1000);
  refs.stopButton.removeAttribute('disabled');
  refs.startButton.setAttribute('disabled', true);
  console.log('Start generate');
}
// Stop generate
function stop() {
  clearInterval(intervalColorChange);
  refs.startButton.removeAttribute('disabled');
  refs.stopButton.setAttribute('disabled', true);
  console.log('Stop generate');
}
