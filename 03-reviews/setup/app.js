// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

// buttons
previous = document.querySelector('.prev-btn');
next = document.querySelector('.next-btn');

// infos
author = document.querySelector('#author');
job = document.querySelector('#job');
info = document.querySelector('#info');
author = document.querySelector('#author');
image = document.querySelector('img');
random = document.querySelector('.random-btn');

// textContent

let index = 0;

// for (i = 0; i <= index; i++) {
//   newName = reviews[i].name;
//   newJob = reviews[i].job;
//   newImg = reviews[i].img;
//   newText = reviews[i].text;
//   // console.log(newName, `\n`, newJob, `\n`, newImg, `\n`, newText);
//   author.textContent = newName;
//   job.textContent = newJob;
//   info.textContent = newText;
//   image.src = newImg;
// }

next.addEventListener('click', function () {
  index++;
  if (index > reviews.length - 1) {
    index = 0;
  }
  showPerson(index);
  console.log(index);
});

previous.addEventListener('click', function () {
  index--;
  if (index < 0) {
    index = reviews.length - 1;
  }
  showPerson(index);
  console.log(index);
});

showPerson = function (index) {
  author.textContent = reviews[index].name;
  job.textContent = reviews[index].job;
  image.src = reviews[index].img;
  info.textContent = reviews[index].text;
};
showPerson(index);

random.addEventListener('click', function () {
  index = Math.floor(Math.random() * reviews.length);
  showPerson(index);
});
