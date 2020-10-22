
const menuItems = document.querySelectorAll(".item");
const row = document.querySelector(".gallery");
let movies;
const arrowGalleryLeft = document.querySelectorAll(".slider-btn-left");
const arrowGalleryRigth = document.querySelectorAll(".slider-btn-right");
const headerBg = document.querySelector('.container #header-netflix');
const titleHeader = document.querySelector('.title-serie');
const moviesInfo = [
  { titulo: 'Anne With E', 
    img: 'img/bg-movies/anne-with-an-e.jpg',
    cardImg:'serieAnne.jpg' 
  },
  { titulo: 'Dallas Buyers Club',
    img: 'img/bg-movies/dallas-buyers.jpg',
    cardImg:'serie2.jpg' 
  },
  { titulo: 'Parasitos',
    img: 'img/bg-movies/parasite-movie.jpg',
    cardImg:'serie3.jpg'
  },
  { titulo: 'Strangers Things',
    img: 'img/stranger-things.jpg',
    cardImg:'serie4.jpg'
  },

  { titulo: 'Ratched',
    img: 'img/bg-movies/ratched.jpg',
    cardImg:'serie5.jpg'
  },

  { titulo: 'Matilda',
    img: 'img/bg-movies/matilda.jpg',
    cardImg:'serie6.jpg'
  },

  { titulo: 'V De Venganza',
    img: 'img/bg-movies/v-de-venganza.jpg',
    cardImg:'serie7.jpg'
  },

  { titulo: 'La Leyenda Del Jinete Sin Cabeza',
    img: 'img/bg-movies/sleepy_hollow.jpg',
    cardImg:'serie8.jpg'
  },

  { titulo: 'Constantine',
    img: 'img/bg-movies/constantine.jpg',
    cardImg:'serie9.jpg'
  },

  { titulo: 'Luis Miguel',
    img: 'img/bg-movies/luis-miguel-la-serie.jpg',
    cardImg:'serie10.jpg'
  },

  { titulo: 'Milagros Inesperados',
    img: 'img/bg-movies/green-mile.jpg',
    cardImg:'serie11.jpg'
  },

  { titulo: 'Truman Show Historia De Una Vida',
    img: 'img/bg-movies/truman.jpg',
    cardImg:'serie12.jpg'
  },

  { titulo: 'Forrest Gump',
    img: 'img/bg-movies/forrest-gump.jpg',
    cardImg:'serie13.jpg'
  },

  { titulo: 'Los juegos Del Hambre En Llamas',
    img: 'img/bg-movies/juego-hambre.jpg',
    cardImg:'serie14.jpg'
  },

  { titulo: 'Belleza Americana',
    img: 'img/bg-movies/american-beauty.jpg',
    cardImg:'serie15.jpg'
  },

  { titulo: 'Enemigos Publicos',
    img: 'img/bg-movies/public-enemies-John.jpg',
    cardImg:'serie16.jpg'
  },
  
  { titulo: 'Lista De Schindler',
    img: 'img/bg-movies/lista-schindler.jpg',
    cardImg:'serie17.jpg'
  },

  { titulo: 'Orgullo y Perjuicio',
    img: 'img/bg-movies/orgullo-perjuicio.jpg',
    cardImg:'serie18.jpg'
  },

  { titulo: 'Sex Education',
    img: 'img/bg-movies/sex-education.jpg',
    cardImg:'serie19.jpg'
  },

  { titulo: 'Glee',
    img: 'img/bg-movies/glee.jpg',
    cardImg:'serie20.jpg'
  },

  { titulo: 'Merli',
    img: 'img/bg-movies/merli.jpg',
    cardImg:'serie21.jpg'
  },

  { titulo: 'Fifty Shades Freed',
    img: 'img/bg-movies/fithy-shade.jpg',
    cardImg:'serie22.jpg'
  },

  { titulo: 'Dark',
    img: 'img/bg-movies/dark.png',
    cardImg:'serie23.jpg'
  },

  { titulo: 'Boys Over Flowers',
    img: 'img/bg-movies/boys-over-flowes.jpg',
    cardImg:'foto24.jpg'
  },

  { titulo: 'Annabelle',
    img: 'img/bg-movies/anabelle.jpg',
    cardImg:'serie25.jpg'
  },

  { titulo: 'I Am Mother',
    img: 'img/bg-movies/i-am-mother.jpg',
    cardImg:'serie26.jpg'
  },

  { titulo: 'Animal World',
    img: 'img/bg-movies/animal-world.jpg',
    cardImg:'serie27.jpg'
  },

  { titulo: 'Amores Infieles',
    img: 'img/bg-movies/amores-infieles.jpg',
    cardImg:'serie28.jpg'
  },

  { titulo: 'All Saints',
    img: 'img/bg-movies/all-saints.jpg',
    cardImg:'serie29.jpg'
  },

  { titulo: 'Enola Holmes',
    img: 'img/bg-movies/enola-holmes.jpg',
    cardImg:'serie30.jpg'
  },

  { titulo: 'Wonder',
    img: 'img/bg-movies/wonder.jpg',
    cardImg:'serie31.jpg'
  },

  { titulo: 'El Arte Del Amor',
    img: 'img/bg-movies/el-arte-amar.jpg',
    cardImg:'serie32.jpg'
  },

  { titulo: 'Milada',
    img: 'img/bg-movies/milada.jpg',
    cardImg:'serie33.jpg'
  },

  { titulo: 'Alquiler De Padrinos',
    img: 'img/bg-movies/alquiler-padrinos.jpg',
    cardImg:'serie34.jpg'
  },

  { titulo: 'The Stepford Wives',
    img: 'img/bg-movies/slepford.jpg',
    cardImg:'serie35.jpg'
  },

  { titulo: 'Papa Francisco',
    img: 'img/bg-movies/papa-francisco.jpg',
    cardImg:'serie36.jpg'
  },

  { titulo: 'Ransom',
    img: 'img/bg-movies/ransom.jpg',
    cardImg:'serie37.jpg'
  },

  { titulo: 'Conexion De Amor',
    img: 'img/bg-movies/conexion-amor.jpg',
    cardImg:'serie38.jpg'
  },

  { titulo: 'Ventajas De Ser Invisible',
    img: 'img/bg-movies/ventajas-ser-invisible.jpg',
    cardImg:'serie39.jpg'
  },

  { titulo: 'Historia De Un Matrimonio',
    img: 'img/bg-movies/historia-matrimonio.jpg',
    cardImg:'serie40.jpg'
  }

];

// build row netflix movies

function buildCardMovie(movies, baseindex=0){
  let  htmlMovieInfo = movies.map((movie, index ) => `<div class="gallery-item">
  <img src="img/${movie.cardImg}" alt="${movie.titulo}" data-set="${baseindex+ index}">
  </div>`).join('');

  return htmlMovieInfo;
}


function renderMovieSection(){
  let sections = ['MyList', 'PopularOnNetflix', 'NewsOnNetflix', 'TrendingOnNetflix'];
  for (let index = 0; index < sections.length; index++) {
    const element = document.getElementById(sections[index]);
    element.innerHTML = buildCardMovie(moviesInfo.slice(index*10, index*10+10), index*10)
  }
}

//menu netflix

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

//carrousel

function btnSliderRight(e){
  let element = e.target.nextElementSibling;
  element.scrollLeft -= element.offsetWidth;
  
}

function btnSliderLeft(e){
  let element = e.target.previousElementSibling;
  element.scrollLeft += element.offsetWidth;
}


//change bg header 

function changeBackgroundHeader(e){
  let elemento;
  elemento = e.target.dataset.set;
  console.log(elemento)

  document.body.style.backgroundImage = `url(${moviesInfo[elemento].img})`;
  titleHeader.innerHTML = `${moviesInfo[elemento].titulo}`;
  titleHeader.style.fontFamily = 'montserratregular';
  if( titleHeader.innerHTML == 'Strangers Things') titleHeader.style.fontFamily = 'Benguiat';
}



renderMovieSection();

movies = document.querySelectorAll(".gallery-item")

//add class hover the movies
movies.forEach(movie => {
  movie.addEventListener('mouseenter', () => {
    movie.classList.add('hover');
    movie.addEventListener('mouseleave',() => movie.classList.remove('hover'));
  });
});

addControllersToMenuButtons(menuItems, controllerMenuButton);
addControllersToMenuButtons(arrowGalleryLeft, btnSliderRight);
addControllersToMenuButtons(arrowGalleryRigth, btnSliderLeft);
addControllersToMenuButtons(movies, changeBackgroundHeader);
