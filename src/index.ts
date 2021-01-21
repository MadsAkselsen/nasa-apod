import { DOMElements } from './DOMElements';
import { updateDOM } from './updateDOM';
import { fetchAPIPictures } from './API';
import './index.css';

let nasaDataArray: NasaImageData[] = [];
let favorites: Favorites = {};

export function addToFavorites(itemUrl: string) {
  nasaDataArray.forEach((item) => {
    if (item.url.includes(itemUrl) && !favorites[itemUrl]) {
      favorites[itemUrl] = item;
      // show save confirmation for 2 seconds
      DOMElements.saveConfirmed.hidden = false;
      setTimeout(() => {
        DOMElements.saveConfirmed.hidden = true;
      }, 2000);
      // set favorites in localStorage
      localStorage.setItem('nasaFavorites', JSON.stringify(favorites));
    }
  });
}

export function removeFavorite(itemUrl: string) {
  if (favorites[itemUrl]) {
    delete favorites[itemUrl];
    // set favorites in localStorage
    localStorage.setItem('nasaFavorites', JSON.stringify(favorites));
    updateDOM('favorites', nasaDataArray);
  }
}

export function loadFromLocalStorage(): Favorites {
  if (localStorage.getItem('nasaFavorites')) {
    favorites = JSON.parse(localStorage.getItem('nasaFavorites'));
    return favorites;
  }
}

const loadImages = async () => {
  DOMElements.loader.classList.remove('hidden');
  nasaDataArray = await fetchAPIPictures();
  updateDOM('nasaData', nasaDataArray);
  window.scrollTo({ top: 0 });
  DOMElements.loader.classList.add('hidden');
};

// event listeners
DOMElements.favoritesEl.addEventListener('click', () =>
  updateDOM('favorites', nasaDataArray)
);
DOMElements.loadMoreFavsEl.addEventListener('click', () => loadImages());
DOMElements.loadMoreEl.addEventListener('click', () => loadImages());

// On Load
loadImages();
