import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import imageUrl from '../img/check-circle.svg'
import successImageUrl from '../img/x-octagon.svg';

const inputEl = document.querySelector('.form');
console.log(inputEl);


inputEl.addEventListener('submit', promiseFoo);

function promiseFoo(e) {
  e.preventDefault();

  const delay = e.target.delay.value;
  const status = e.target.state.value

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay)
      }
    }, delay);
  });


  promise
    .then(delay => {
      iziToast.success({
        message: `Fulfilled promise in ${delay}ms`,
        messageSize: '16',
        messageColor: '#fff',
        backgroundColor: '#59a10d',
        position: 'topRight',
        close: true,
        closeOnEscape: true,
        closeOnClick: true,
        progressBar: true,
        progressBarColor: '#326101',
        iconColor: '#fff',
        iconUrl: successImageUrl,
      });
      
    })
    .catch(delay => {
      iziToast.error({
        message: `Rejected promise in ${delay}ms`,
        messageSize: '16',
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        position: 'topRight',
        close: true,
        closeOnEscape: true,
        closeOnClick: true,
        progressBar: true,
        progressBarColor: '#ffbebe',
        iconUrl: imageUrl,
        iconColor: '#fff',
});
    });
  
  console.log(promise);
};