import { DOMElements } from './DOMElements';
import { updateDOM } from './updateDOM';
import { fetchAPIPictures } from './API';

let nasaDataArray: NasaImageData[] = [];
let favorites: Favorites = {};

export function addToFavorites(itemUrl: string) {
  nasaDataArray.forEach((item) => {
    if (item.url.includes(itemUrl)) {
      favorites[itemUrl] = item;
    }
  });
  console.log(favorites);
}

const loadImages = async () => {
  nasaDataArray = await fetchAPIPictures();
  updateDOM(nasaDataArray);
};

// On Load
loadImages();
