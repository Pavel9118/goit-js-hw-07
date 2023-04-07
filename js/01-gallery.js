import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
console.log(createGalleryMarcup(galleryItems));

const galleryContainer = document.querySelector('.gallery');
const galleryMarcUp = createGalleryMarcup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarcUp);
galleryContainer.addEventListener('click', clickOnGallery);



function createGalleryMarcup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  }).join('');
}

function clickOnGallery(event) {
  event.preventDefault();
 if(!event.target.classList.contains('gallery__image')) {
   return;
 }
  // console.log(event.target.dataset);
  // console.log(event.target.getAttribute("alt"));

  let instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="event.target.getAttribute("alt")" width="800" height="600">
`)

instance.show()
}

