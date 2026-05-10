import{r as e}from"./assets/rolldown-runtime-DMWpINJ5.js";import{n as t,r as n,t as r}from"./assets/vendor-ijQ7uCl1.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(n(),1);function a(e,n){return t.get(`https://pixabay.com/api/`,{params:{key:`55648790-38a13299ea8938e2088d7c8dc`,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0,page:n,per_page:15}}).then(e=>e.data)}var o=document.querySelector(`.gallery`),s=document.querySelector(`.load-more-button`),c=null,l=document.querySelector(`.loader`);function u(e){let t=e.map(e=>`
    <li class ="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
            <img
            class="gallery-image"
            src="${e.webformatURL}" 
            alt="${e.tags}"
            />
        </a>

        <div class="img-description">
            <div class="stat">
                <h3>Likes</h3>
                <p>${e.likes}</p>
            </div>
            <div class="stat">
                <h3>Views</h3>
                <p>${e.views}</p>
            </div>
            <div class="stat">
                <h3>Comments</h3>
                <p>${e.comments}</p>
            </div>
            <div class="stat">
                <h3>Downloads</h3>
                <p>${e.downloads}</p>
            </div>
        </div>  
    </li>`).join(``);o.insertAdjacentHTML(`beforeend`,t),c&&c.destroy(),c=new r(`.gallery a`,{captionsData:`alt`,captionDelay:250})}function d(){o&&(o.innerHTML=``,c&&=(c.destroy(),null))}function f(){l.classList.add(`is-visible`)}function p(){l.classList.remove(`is-visible`)}function m(){s.classList.replace(`load-more-button-hidden`,`load-more-button`)}function h(){s.classList.replace(`load-more-button`,`load-more-button-hidden`)}var g=document.querySelector(`form`),_=document.querySelector(`.load-more-button`),v=15,y=1,b=``;g.addEventListener(`submit`,async e=>{if(e.preventDefault(),y=1,b=e.currentTarget.elements[`search-text`].value.trim(),!b){i.default.warning({message:`Please enter a search query!`});return}d(),h(),f();try{let e=await a(b,y),t=e.hits;if(t.length===0){i.default.error({message:`Sorry, there are no images matching your search query. Please try again!`});return}u(t),y<Math.ceil(e.totalHits/v)?m():i.default.info({message:`We're sorry, but you've reached the end of search results.`})}catch(e){i.default.error({message:e.message})}finally{p(),g.reset()}}),_.addEventListener(`click`,async()=>{y++,h(),f();try{let e=await a(b,y);u(e.hits);let t=document.querySelector(`.gallery`).firstElementChild;if(t){let{height:e}=t.getBoundingClientRect();window.scrollBy({top:e*2,behavior:`smooth`})}y<Math.ceil(e.totalHits/v)?m():i.default.info({message:`We're sorry, but you've reached the end of search results.`})}catch(e){i.default.error({message:e.message})}finally{p()}});
//# sourceMappingURL=index.js.map