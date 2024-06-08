import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';




// Parametrs
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    console.log(selectedDates[0], 'тут варто обробляти вілідацію дати');
  },
};




/**
 * Converts number of milliseconds to unit of time
 * @param {Number} ms
 * @returns
 */
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



const inputEl = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('[data-start]');

let userSelectedDate = null;

flatpickr(inputEl, options);


inputEl.addEventListener('input', (event) => {

  userSelectedDate = event.target.value
  console.log(userSelectedDate);

})

buttonEl.addEventListener('click', () => {
  const days = document.querySelector('[data-days]');
  const hours = document.querySelector('[data-hours]');
  const minutes = document.querySelector('[data-minutes]');
  const seconds = document.querySelector('[data-seconds]');

  const currentTime = Date.now()
  // console.log(currentTime);

  // const intervalId = setInterval(() => {
  //   console.log(seconds.textContent);
  // }, 1000)

})