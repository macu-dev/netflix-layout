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
  },

  { titulo: 'Milagros Inesperados',
  img: 'img/bg-movies/green-mile.jpg'
  },

  { titulo: 'Truman Show Historia De Una Vida',
    img: 'img/bg-movies/truman.jpg'
  },

  { titulo: 'Forrest Gump',
    img: 'img/bg-movies/forrest-gump.jpg'
  },

  { titulo: 'Los juegos Del Hambre En Llamas',
    img: 'img/bg-movies/juego-hambre.jpg'
  },

  { titulo: 'Belleza Americana',
    img: 'img/bg-movies/american-beauty.jpg'
  },

  { titulo: 'Enemigos Publicos',
    img: 'img/bg-movies/public-enemies-John.jpg'
  },
  
  { titulo: 'Lista De Schindler',
    img: 'img/bg-movies/lista-schindler.jpg'
  },

  { titulo: 'Orgullo y Perjuicio',
    img: 'img/bg-movies/orgullo-perjuicio.jpg'
  },

  { titulo: 'Sex Education',
    img: 'img/bg-movies/sex-education.jpg'
  },

  { titulo: 'Glee',
    img: 'img/bg-movies/glee.jpg'
  },

  { titulo: 'Merli',
    img: 'img/bg-movies/merli.jpg'
  },

  { titulo: 'Fifty Shades Freed',
    img: 'img/bg-movies/fithy-shade.jpg'
  },

  { titulo: 'Dark',
    img: 'img/bg-movies/dark.png'
  },

  { titulo: 'Dark',
    img: 'img/bg-movies/dark.png'
  },

  { titulo: 'Boys Over Flowers',
    img: 'img/bg-movies/boys-over-flowes.jpg'
  },

  { titulo: 'Annabelle',
    img: 'img/bg-movies/boys-over-flowes.jpg'
  },

  { titulo: 'I Am Mother',
    img: 'img/bg-movies/i-am-mother.jpg'
  },

  { titulo: 'Animal World',
    img: 'img/bg-movies/animal-world.jpg'
  },

  { titulo: 'Amores Infieles',
    img: 'img/bg-movies/amores-infieles.jpg'
  },

  { titulo: 'All Saints',
    img: 'img/bg-movies/all-saints.jpg'
  },

  { titulo: 'Enola Holmes',
    img: 'img/bg-movies/enola-holmes.jpg'
  },

  { titulo: 'Wonder',
    img: 'img/bg-movies/wonder.jpg'
  },

  { titulo: 'El Arte Del Amor',
    img: 'img/bg-movies/el-arte-amar.jpg'
  },

  { titulo: 'Milada',
    img: 'img/bg-movies/milada.jpg'
  },

  { titulo: 'Alquiler De Padrinos',
    img: 'img/bg-movies/alquiler-padrinos.jpg'
  },

  { titulo: 'The Stepford Wives',
    img: 'img/bg-movies/slepford.jpg'
  },

  { titulo: 'Papa Francisco',
    img: 'img/bg-movies/papa-francisco.jpg'
  },

  { titulo: 'Ransom',
    img: 'img/bg-movies/ransom.jpg'
  },

  { titulo: 'Conexion De Amor',
    img: 'img/bg-movies/conexion-amor.jpg'
  },

  { titulo: 'Ventajas De Ser Invisible',
    img: 'img/bg-movies/ventajas-ser-invisible.jpg'
  },

  { titulo: 'Historia De Un Matrimonio',
    img: 'img/bg-movies/historia-matrimonio.jpg'
  }

];

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
