import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderUsers(hits, userList, loader) {
  if (hits.length <= 0) {
    iziToast.error({
      title: '',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  } else {
    userList.innerHTML = '';
    const markup = hits
      .map(hit => {
        return `
      
<li class="list-item">
<a href="${hit.largeImageURL}"><img src="${hit.webformatURL}" alt="${hit.tags}" width="360" height="200"></img></a>
<div class="img-card">
<p class="desc"><b>Likes</b> ${hit.likes}</p>
  <p  class="desc"><b>Views</b> ${hit.views}</p>
  <p  class="desc"><b>Comments</b> ${hit.comments}</p>
  <p  class="desc"><b>Downloads</b> ${hit.downloads}</p>
  <div/>
</li>
`;
      })
      .join('');

    userList.insertAdjacentHTML('beforeend', markup);
    let gallery = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    gallery.on('show.simplelightbox', function () {
      // Do something…

      gallery.refresh();
    });
  }
  loader.classList.add('is-hiden');
}
