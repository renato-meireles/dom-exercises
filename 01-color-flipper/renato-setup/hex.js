documentBody = document.querySelector('main');
colorText = document.querySelector('.color');
btnChanger = document.querySelector('.btn');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// function makeNewHex() {
//   const color = [];
//   for (i = 0; i < 6; i++) {
//     let randomColor = Math.floor(Math.random() * hex.length);
//     color.push(hex[randomColor]);
//   }
//   let newColor = color.join('');
//   return newColor;
// }

function makeNewHax() {
  hax = '#';
  for (i = 0; i < 6; i++) {
    hax += hex[Math.floor(Math.random() * hex.length)];
  }
  return hax;
}

btnChanger.addEventListener('click', function () {
  hexColor = makeNewHax();
  documentBody.style.backgroundColor = `${hexColor}`;
  colorText.innerHTML = `${hexColor}`;
});

colorText.innerHTML = `white`;
