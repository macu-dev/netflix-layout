const menuItems = document.querySelectorAll(".item");
const row = document.querySelector(".gallery");
const movies = document.querySelectorAll(".gallery-item");
const arrowGalleryLeft = document.querySelectorAll(".slider-btn-left");
const arrowGalleryRigth = document.querySelectorAll(".slider-btn-right");

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


movies.forEach(movie => {
  movie.addEventListener('mouseenter', () => {
    movie.classList.add('hover');
    movie.addEventListener('mouseleave',() => movie.classList.remove('hover'));
  });
});


addControllersToMenuButtons(menuItems, controllerMenuButton);
addControllersToMenuButtons(arrowGalleryLeft, btnSliderLeft);
addControllersToMenuButtons(arrowGalleryRigth, btnSliderRight);
