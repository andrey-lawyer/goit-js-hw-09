import Notiflix from 'notiflix';

// const dalayEl = document.querySelector('[name = delay]');
// const stepEl = document.querySelector('[name = step]');
// const amountEl = document.querySelector('[name = amount]');
const formSubmitEl = document.querySelector('.form');
function createPromise(position, delay) {
  const DELAY = delay;
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, DELAY);
  });
}

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  console.log(delay.value, step.value, amount.value);

  const dalayNumber = Number(delay.value);
  const stepNumber = Number(step.value);
  const amountNumber = Number(amount.value);
  let dalayAdd = dalayNumber;
  for (let i = 0; i < amountNumber; i += 1) {
    createPromise(i + 1, dalayAdd)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    dalayAdd += stepNumber;
  }
}
formSubmitEl.addEventListener('submit', handleSubmit);
