import SimpleLightboxModule from 'simplelightbox/dist/simple-lightbox.modules.js';
import 'simplelightbox/dist/simple-lightbox.min.css';

const SimpleLightbox = SimpleLightboxModule.default ?? SimpleLightboxModule;

const sel = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector(".load-more-button");

let lightbox = null;
const loader = document.querySelector(".loader");

export function createGallery(images) {
    if (!sel) return;

    const markup = images.map((image) => `
    <li class ="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
            <img
            class="gallery-image"
            src="${image.webformatURL}" 
            alt="${image.tags}"
            />
        </a>

        <div class="img-description">
            <div class="stat">
                <h3>Likes</h3>
                <p>${image.likes}</p>
            </div>
            <div class="stat">
                <h3>Views</h3>
                <p>${image.views}</p>
            </div>
            <div class="stat">
                <h3>Comments</h3>
                <p>${image.comments}</p>
            </div>
            <div class="stat">
                <h3>Downloads</h3>
                <p>${image.downloads}</p>
            </div>
        </div>  
    </li>`)
        .join("");

    sel.insertAdjacentHTML("beforeend", markup)
    if (!lightbox) {
        lightbox = new SimpleLightbox(".gallery a", {
            captionsData: 'alt',
            captionDelay: 250,
        });
    } else {
        setTimeout(() => lightbox.refresh(), 0);
    }
}


export function clearGallery() {
    if (!sel) return;
    sel.innerHTML = "";
   
}

// export function showLoader(loaderPoint = sel) {
//     const loader = document.createElement("div");
//     loader.classList.add("loader");
//     loader.classList.add("is-visible");
//     loader.innerHTML =`
//             <span class="loader-dot"></span>
//             <span class="loader-dot"></span>
//             <span class="loader-dot"></span>`;

//     loaderPoint.before(loader);
//     return loader;
// }

// export function hideLoader(loader) {
//     if (loader) {
//         loader.remove();
//     }
// }
export function showLoader() {
    if (!loader) return;
    loader.classList.add("is-visible");
}
export function hideLoader() {
    if (!loader) return;
    loader.classList.remove("is-visible");
}
export function showLoadMoreButton() {
    if (!loadMoreBtn) return;
    loadMoreBtn.classList.remove("is-hidden");


}
export function hideLoadMoreButton(){
    if (!loadMoreBtn) return;
    loadMoreBtn.classList.add("is-hidden");

}