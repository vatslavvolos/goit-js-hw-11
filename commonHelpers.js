import{i as l,S as u}from"./assets/vendor-f3f87f24.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(r){if(r.ep)return;r.ep=!0;const e=a(r);fetch(r.href,e)}})();function d(o){return fetch(o).then(t=>{if(t.ok)return t.json();throw new Error(t.status)})}function m(o,t,a){if(o.length<=0){l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"});return}else{t.innerHTML="";const s=o.map(e=>`
      
<li class="list-item">
<a href="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}" width="360" height="200"></img></a>
<div class="img-card">
<p class="desc"><b>Likes</b> ${e.likes}</p>
  <p  class="desc"><b>Views</b> ${e.views}</p>
  <p  class="desc"><b>Comments</b> ${e.comments}</p>
  <p  class="desc"><b>Downloads</b> ${e.downloads}</p>
  <div/>
</li>
`).join("");t.insertAdjacentHTML("beforeend",s);let r=new u(".gallery a",{captionsData:"alt",captionDelay:250});r.on("show.simplelightbox",function(){r.refresh()})}a.classList.add("is-hiden")}const f=document.querySelector("form"),p=document.querySelector(".gallery"),i=document.querySelector("#search"),c=document.querySelector(".loader"),h=o=>{if(i.value.trim()===""){l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"});return}o.preventDefault(),c.classList.remove("is-hiden");const a=`https://pixabay.com/api/?${new URLSearchParams({key:"43027125-0c79f762e35459ec2a7d85557",q:i.value,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;d(a).then(s=>m(s.hits,p,c)).catch(s=>console.log(s))};f.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
