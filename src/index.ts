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

const loadImages = async () => {
  nasaDataArray = await fetchAPIPictures();
  updateDOM(nasaDataArray);
};

// On Load
loadImages();
