import { galleryItems } from "./gallery-items.js";

const galleryMarking = document.querySelector(".gallery");

const galleryElements = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallary__item">
        <a class="gallary__link" href="${original}">
        <img class="gallary__image" src="${preview}" 
        data-source="${original}" 
        alt="${description}"/>
        </a>
        </div>`
  )
  .join("");
galleryMarking.insertAdjacentHTML("beforeend", galleryElements);
galleryMarking.addEventListener("click", imgClick);
function imgClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
  const openImg = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  openImg.show();
}
