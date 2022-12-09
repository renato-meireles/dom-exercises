const tabBtn = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const content = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabBtn.forEach((btn) => {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
    // hide other articles
    content.forEach(function (article) {
      article.classList.remove('active');
    });
    const element = document.getElementById(id);
    console.log(element);
    element.classList.add('active');
  }
});
