import{r as e}from"./assets/rolldown-runtime-DMWpINJ5.js";import{n as t,r as n,t as r}from"./assets/vendor-D2-Fsq9Z.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(n(),1);async function a(e,n){return(await t.get(`https://pixabay.com/api/`,{params:{key:`55648790-38a13299ea8938e2088d7c8dc`,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0,page:n,per_page:15}})).data}var o=e(r(),1),s=o.default.default??o.default,c=document.querySelector(`.gallery`),l=document.querySelector(`.load-more-button`),u=null,d=document.querySelector(`.loader`);function f(e){let t=e.map(e=>`
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
    </li>`).join(``);c.insertAdjacentHTML(`beforeend`,t),u?setTimeout(()=>u.refresh(),0):u=new s(`.gallery a`,{captionsData:`alt`,captionDelay:250})}function p(){c&&(c.innerHTML=``,u&&=(u.destroy(),null))}function m(){d.classList.add(`is-visible`)}function h(){d.classList.remove(`is-visible`)}function g(){l.classList.replace(`load-more-button-hidden`,`load-more-button`)}function _(){l.classList.replace(`load-more-button`,`load-more-button-hidden`)}var v=document.querySelector(`form`),y=document.querySelector(`.load-more-button`),b=15,x=1,S=``;v.addEventListener(`submit`,async e=>{if(e.preventDefault(),x=1,S=e.currentTarget.elements[`search-text`].value.trim(),!S){i.default.warning({message:`Please enter a search query!`});return}p(),_(),m();try{let e=await a(S,x),t=e.hits;if(t.length===0){i.default.error({message:`Sorry, there are no images matching your search query. Please try again!`});return}f(t),x<Math.ceil(e.totalHits/b)?g():i.default.info({message:`We're sorry, but you've reached the end of search results.`})}catch(e){i.default.error({message:e.message})}finally{h(),v.reset()}}),y.addEventListener(`click`,async()=>{x++,_(),m();try{let e=await a(S,x);f(e.hits);let t=document.querySelector(`.gallery`).firstElementChild;if(t){let{height:e}=t.getBoundingClientRect();window.scrollBy({top:e*2,behavior:`smooth`})}x<Math.ceil(e.totalHits/b)?g():i.default.info({message:`We're sorry, but you've reached the end of search results.`})}catch(e){i.default.error({message:e.message})}finally{h()}});
//# sourceMappingURL=index.js.map