const menuItems = document.querySelectorAll(".item");
const row = document.querySelector(".gallery");
const movies = document.querySelectorAll(".gallery-item");
const arrowGalleryLeft = document.querySelectorAll(".slider-btn-left");
const arrowGalleryRigth = document.querySelectorAll(".slider-btn-right");
const moviesInfo = [
  { titulo: 'Anne With E', 
    img: 'img/bg-movies/anne-with-an-e.jpg' 
  },
  { titulo: 'Dallas Buyers Club',
    img: 'img/bg-movies/dallas-buyers.jpg'
  },
  { titulo: 'Parasitos',
    img: 'img/bg-movies/parasite-movie.jpg'
  },
  { titulo: 'Strangers Things',
    img: 'img/stranger-things.jpg'
  },

  { titulo: 'Ratched',
    img: 'img/bg-movies/ratched.jpg'
  },

  { titulo: 'Matilda',
    img: 'img/bg-movies/matilda.jpg'
  },

  { titulo: 'V De Venganza',
    img: 'img/bg-movies/v-de-venganza.jpg'
  },

  { titulo: 'La Leyenda Del Jinete Sin Cabeza',
    img: 'img/bg-movies/sleepy_hollow.jpg'
  },

  { titulo: 'Constantine',
    img: 'img/bg-movies/constantine.jpg'
  },

  { titulo: 'Luis Miguel',
    img: 'img/bg-movies/luis-miguel-la-serie.jpg'
  }
]

function addControllersToMenuButtons(butons, controller) {
  butons.forEach(b => b.addEventListener('click', controller));
}

function controllerMenuButton(e) {
  let item = e.target;

  if(item.nodeName == 'I'){
    item = item.parentNode;
  }

  item.classList.add('item-active');
  menuItems.forEach(otherItem => {
   if (otherItem != item)
     otherItem.classList.remove('item-active');
  });
}

function btnSliderLeft(e){
  let element = e.target.nextElementSibling;
  element.scrollLeft += element.offsetWidth;
}

function btnSliderRight(e){
  let element = e.target.previousElementSibling;
   element.scrollLeft -= element.offsetWidth;
}

//add class hover the movies
movies.forEach(movie => {
  movie.addEventListener('mouseenter', () => {
    movie.classList.add('hover');
    movie.addEventListener('mouseleave',() => movie.classList.remove('hover'));
  });
});


addControllersToMenuButtons(menuItems, controllerMenuButton);
addControllersToMenuButtons(arrowGalleryLeft, btnSliderLeft);
addControllersToMenuButtons(arrowGalleryRigth, btnSliderRight);
