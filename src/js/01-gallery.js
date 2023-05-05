// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryMarkupEl = document.querySelector('ul.gallery');
const addMarkupItemsEl = addMarkupItems(galleryItems);
galleryMarkupEl.insertAdjacentHTML('beforeend', addMarkupItemsEl);

function addMarkupItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
         <a class = "gallery__item" href = "${original}">
         <img class = "gallery__image" src="${preview}" alt="${description}">
         </a>
        `;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
});

console.log(galleryItems);
