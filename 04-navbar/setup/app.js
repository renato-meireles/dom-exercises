// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navtoggle = document.querySelector('.nav-toggle');

// console.log(navtoggle);

const links = document.querySelector('.links');

navtoggle.addEventListener('click', function () {
  classList = links.classList;
  if (!classList.contains('show-links')) {
    classList.add('show-links');
  } else {
    classList.remove('show-links');
  }
});
