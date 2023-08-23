
import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const delayEl = form.querySelector('[name="delay"]');
  const stepEl = form.querySelector('[name="step"]');
  const amountEl = form.querySelector('[name="amount"]');
  const btn = form.querySelector('button[type="submit"]');

  const basicDelay = parseInt(delayEl.value, 10);
  const step = parseInt(stepEl.value, 10);
  const amount = parseInt(amountEl.value, 10);

  btn.disabled = true;

  let currentDelay = basicDelay;

  for (let i = 1; i <= amount; i+=1) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    currentDelay += step;
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
            // Fulfill
        resolve({ position, delay });
      } else {
            // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

