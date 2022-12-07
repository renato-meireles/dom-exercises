const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: 'Steak Dinner',
    category: 'dinner',
    price: 36.99,
    img: './images/item-10.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.AInda me fez criar uma aray so pra testar esse infernoooo`,
  },
];

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return ` <article class="menu-item">
          <img src=${item.img} class="photo" alt="${item.title}" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
             ${item.desc}
            </p>
          </div>
        </article>
        `;
  });
  // remove commas in between articles with join('')
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}

const buttonFilter = document.querySelectorAll('.filter-btn');

buttonFilter.forEach(function (buttons) {
  buttons.addEventListener('click', (item) => {
    let filteredArray = newFilter(item);
    displayMenuItems(filteredArray);
  });
});

function newFilter(menuArray) {
  myTarget = menuArray.currentTarget.innerHTML;
  let filter = menu.filter((e) => {
    if (e.category === myTarget) {
      return e;
    }
    if (myTarget === 'all') {
      return e;
    }
  });
  // console.log(filter);
  return filter;
}

// const btnFilter = menu.filter((menuCategory) => {
//   return menuCategory.category == 'lunch';
// });

// console.log(btnFilter);

// if (myTarget == 'breakfast') {
//     menu.filter((e) => {
//       array = e.category == 'breakfast';
//       console.log(array);
//       return e.category == 'breakfast';
//     });

// if ((menuArray.innerHTML = 'breakfast')) {
//   return e.category == 'breakfast';
// } else {
//   return e.category == 'lunch';
// }

// return item.category == 'lunch';
// console.log(newFilter);

// window.addEventListener('DOMContentLoaded', () => {
//   let displayMenu = menu.map((item) => {
//     return item;
//   });
//   console.log(displayMenu);
//   displayMenu.forEach((e) => {
//     let id = e.id;
//     let title = e.title;
//     let category = e.category;
//     let price = e.price;
//     let img = e.img;
//     let desc = e.desc;
//     // new article
//     let article = document.createElement('article');
//     article.setAttribute('class', 'menu-item');
//     sectionCenter.append(article);
//     // image
//     let newImage = document.createElement('img');
//     newImage.setAttribute('src', img);
//     newImage.setAttribute('alt', 'menu item');
//     newImage.setAttribute('class', 'photo');
//     article.append(newImage);
//     // div menu item
//     let div = document.createElement('div');
//     div.setAttribute('class', 'item-info');
//     article.appendChild(div);
//     // div > header
//     let header = document.createElement('header');
//     div.appendChild(header);
//     //Creating both h4
//     let h4one = document.createElement('h4');
//     h4one.textContent = title;
//     header.appendChild(h4one);
//     let h4two = document.createElement('h4');
//     h4two.setAttribute('class', 'price');
//     h4two.textContent = price;
//     header.appendChild(h4two);
//     // creating paragraph
//     let paragraph = document.createElement('p');
//     paragraph.textContent = desc;
//     div.appendChild(paragraph);
//   });
// });
