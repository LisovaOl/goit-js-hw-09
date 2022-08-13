import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const ref = {
  startBtn: document.querySelector('button[data-start]'),
  seconds: document.querySelector('span[data-seconds]'),
  minutes: document.querySelector('span[data-minutes]'),
  hours: document.querySelector('span[data-hours]'),
  days: document.querySelector('span[data-days]'),
};

let intervalId = null;
let getTimeData = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  dateFormat: 'F j, Y H:i',
  minuteIncrement: 1, // зброс лічильника і остановка таймера
  onOpen() {
    clearInterval(intervalId);
    ref.seconds.textContent = '00';
    ref.minutes.textContent = '00';
    ref.hours.textContent = '00';
    ref.days.textContent = '00';
  },
  // достаєм дату
  onClose(selectedDates) {
    getTimeData = selectedDates[0].getTime();
    //  провірка дата і disabled
    if (getTimeData < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      ref.startBtn.setAttribute('disabled', true);
      return;
    }
    ref.startBtn.removeAttribute('disabled');
  },
};

flatpickr('input#datetime-picker', options);


ref.startBtn.addEventListener('click', startButton);
ref.startBtn.setAttribute('disabled', true);

function startButton() {
  intervalId = setInterval(() => {
    const deltaTime = getTimeData - new Date().getTime();

    if (deltaTime <= 0) {
      clearInterval(intervalId);
      return;
    }
    // const time = convertMs(deltaTime);
    showTimerOnScreen(convertMs(deltaTime));
  }, 1000);

  ref.startBtn.setAttribute('disabled', true);
}

function showTimerOnScreen({ days, hours, minutes, seconds }) {
  
  ref.days.textContent = `${days}`;
  ref.hours.textContent = `${hours}`;
  ref.minutes.textContent = `${minutes}`;
  ref.seconds.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

