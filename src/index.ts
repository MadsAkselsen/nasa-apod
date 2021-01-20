import { DOMElements } from './DOMElements';
import { updateDOM } from './updateDOM';
import { fetchAPIPictures } from './API';

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

export function loadFromLocalStorage() {
  if (localStorage.getItem('nasaFavorites')) {
    favorites = JSON.parse(localStorage.getItem('nasaFavorites'));
    return favorites;
  }
}

const loadImages = async () => {
  nasaDataArray = await fetchAPIPictures();
  updateDOM('favorites', nasaDataArray);
};

// On Load
loadImages();
