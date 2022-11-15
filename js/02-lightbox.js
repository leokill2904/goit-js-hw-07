import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryMarking = document.querySelector(".gallery");
const galleryElements = galleryItems
  .map(
    ({ preview, original, description }) =>
      ` <a class="gallery__item"
        href="${original}">
        <img class="gallery__image"
        src="${preview}"
        alt="${description}"/>
        </a>`
  )
  .join("");

galleryMarking.insertAdjacentHTML("beforeend", galleryElements);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
