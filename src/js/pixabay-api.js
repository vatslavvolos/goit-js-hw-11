import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function fetchUsers(url) {
  return fetch(url).then(response => {
    if (response.ok) {
      const dataHits = response.json();

      return dataHits;
    } else {
      throw new Error(response.status);
    }
  });
}
