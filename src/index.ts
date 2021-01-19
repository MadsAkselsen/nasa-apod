import { DOMElements } from './DOMElements';
import { updateDOM } from './updateDOM';
import { fetchAPIPictures } from './API';

let nasaDataArray: NasaImageData[] = [];
let favorites = {};

export function addToFavorites(itemUrl: string) {
  favorites = itemUrl;
  console.log('yay, we added to favorites', favorites);
}

const loadImages = async () => {
  nasaDataArray = await fetchAPIPictures();
  updateDOM(nasaDataArray);
};

// On Load
loadImages();
