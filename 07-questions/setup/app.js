//using selectors inside the element
// traversing the dom

const questionBtn = document.querySelectorAll('.question');

questionBtn.forEach((e) => {
  // console.log(e);
  const btn = e.querySelector('.question-btn');
  btn.addEventListener('click', function () {
    questionBtn.forEach((item) => {
      if (item !== e) {
        console.log(e);
        item.classList.remove('show-text');
      }
    });
    list = e.classList;
    list.toggle('show-text');
  });
});
