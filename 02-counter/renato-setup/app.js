let counter = 0;

numValue = document.querySelector('#value');
numValue.innerHTML = counter;

numDecrease = document.querySelector('.decrease');
numReset = document.querySelector('.reset');
numIncrease = document.querySelector('.increase');

let colorCheck = (checkCounter) => {
  if (checkCounter > 0) {
    numValue.style.color = 'green';
  } else if (checkCounter < 0) {
    numValue.style.color = 'red';
  } else {
    numValue.style.color = 'black';
  }
};

if (!localStorage.getItem('count')) {
  localStorage.setItem('count', counter);
} else {
  counter = localStorage.getItem('count', parseInt(counter));
  numValue.innerHTML = parseInt(counter);
}

numDecrease.addEventListener('click', function () {
  counter = parseInt(counter) - 1;
  numValue.innerHTML = counter;
  localStorage.setItem('count', counter);
  colorCheck(counter);
});

numReset.addEventListener('click', function () {
  counter = parseInt(0);
  numValue.innerHTML = counter;
  localStorage.setItem('count', 0);
  colorCheck(counter);
});

numIncrease.addEventListener('click', function () {
  counter = parseInt(counter) + 1;
  numValue.innerHTML = counter;
  localStorage.setItem('count', counter);
  colorCheck(counter);
});
