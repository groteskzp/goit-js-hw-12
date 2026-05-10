
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery, createGallery, hideLoader, showLoader, showLoadMoreButton, hideLoadMoreButton } from './js/render-functions';

const form = document.querySelector("form");
const loadMoreBtn = document.querySelector(".load-more-button");
const PER_PAGE = 15;
let page = 1;
let query = "";

const handlerForm = async event => {
    
        event.preventDefault();
        page = 1;
        query = event.currentTarget.elements["search-text"].value.trim();
    
    if (!query) {
            iziToast.warning({ message: "Please enter a search query!" })
            return;
        }
    clearGallery();
    hideLoadMoreButton();
    showLoader();
    try {
        const resource = await getImagesByQuery(query, page);
        const images = resource.hits;
        
        if (images.length === 0) {
            iziToast.error({ message: "Sorry, there are no images matching your search query. Please try again!" });
            return;
        }
        createGallery(images);

        if (page < Math.ceil(resource.totalHits / PER_PAGE)) {
            showLoadMoreButton();
        } else {
            iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
        }
    } catch (error) {
        iziToast.error({ message: error.message })
    } finally {
        hideLoader();
        form.reset();
        }
};


const handlerLoadMore = async () => {
    page++;
    hideLoadMoreButton();
    showLoader();

    try {
        const resource = await getImagesByQuery(query, page);
        
        createGallery(resource.hits);

        const firstItem = document.querySelector(".gallery").firstElementChild;
        if (firstItem) {
            const { height } = firstItem.getBoundingClientRect();
            window.scrollBy({ top: height * 2, behavior: "smooth" });
        }

        if (page < Math.ceil(resource.totalHits / PER_PAGE)) {
            showLoadMoreButton();
        } else {
            iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
        }
    } catch (error) {
        iziToast.error({ message: error.message });
    } finally {
        hideLoader();
    }
};

    
form.addEventListener("submit", handlerForm);
loadMoreBtn.addEventListener("click", handlerLoadMore);
