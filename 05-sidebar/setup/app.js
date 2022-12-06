// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

sideBarToggle = document.querySelector('.sidebar-toggle');

sideBarTranslate = document.querySelector('.sidebar');

closeButton = document.querySelector(`.close-btn`);

sideBarToggle.addEventListener('click', function () {
  classListBAR = sideBarTranslate.classList;
  classListBAR.toggle('show-sidebar');
});
closeButton.addEventListener('click', function () {
  classListBAR = sideBarTranslate.classList;
  classListBAR.remove('show-sidebar');
});
