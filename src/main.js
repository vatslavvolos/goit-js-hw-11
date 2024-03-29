import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchUsers } from './js/pixabay-api';
import { renderUsers } from './js/render-functions';
const form = document.querySelector('form');
const userList = document.querySelector('.gallery');
const input = document.querySelector('#search');
const loader = document.querySelector('.loader');
const clickHandler = event => {
  if (input.value.trim() === '') {
    iziToast.error({
      title: '',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }
  event.preventDefault();
  loader.classList.remove('is-hiden');
  const searchParams = new URLSearchParams({
    key: '43027125-0c79f762e35459ec2a7d85557',
    q: input.value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `https://pixabay.com/api/?${searchParams}`;

  fetchUsers(url)
    .then(hits => renderUsers(hits.hits, userList, loader))
    .catch(error => console.log(error));
};
form.addEventListener('submit', clickHandler);
