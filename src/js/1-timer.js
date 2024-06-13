import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import imageUrl from '../img/x-octagon.svg'


const iziToastOptions = {
  message: 'Please choose a date in the future',
  position: 'topRight',
  backgroundColor: '#B51B1B',
  messageColor: '#fff',
  messageSize: '16',
  imageWidth: 302,
  close: true,
  closeOnEscape: true,
  closeOnClick: true,
  progressBar: true,
  progressBarColor: '#b51b1b',
  iconUrl: imageUrl,
  iconColor: '#FAFAFB',
};

const flatpickrOptions = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const userDate = selectedDates[0];
    initTime = userDate.getTime();
    if (initTime > Date.now()) {
      refs.button.removeAttribute('disabled', '');
      refs.button.classList.add('enablet-btn');
    } else {
      iziToast.show(iziToastOptions);
      refs.button.classList.remove('enablet-btn');
      refs.button.setAttribute('disabled', 'true');
    }
  },
};

const refs = {
  calendar: document.querySelector('.flatpickr-calendar'),
  button: document.querySelector('[data-start]'),
  input: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let initTime = 0;

flatpickr('#datetime-picker', flatpickrOptions);

refs.button.addEventListener('click', () => {
  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    const diff = initTime - currentTime; 
    const time = convertMs(diff);
    const timeObj = getTime(time);
    refs.days.textContent = timeObj.days;
    refs.hours.textContent = timeObj.hours;
    refs.minutes.textContent = timeObj.minutes;
    refs.seconds.textContent = timeObj.seconds;
    
  }, 1000)

  refs.button.classList.remove('enablet-btn');
  refs.button.setAttribute('disabled', 'true');
  refs.input.setAttribute('disabled', 'true');
  setTimeout(() => {
    clearInterval(intervalId);
    refs.input.removeAttribute('disabled',);
  }, initTime - Date.now());
  
  
})


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function getTime({days, hours, minutes, seconds}) {
  days = days.toString().padStart(2,'0');
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');
  return {days, hours, minutes, seconds};
}