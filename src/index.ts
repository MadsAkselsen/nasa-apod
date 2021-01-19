import { DOMElements } from './DOMElements';
import { updateDOM } from './updateDOM';
import { fetchAPIPictures } from './API';

let nasaDataArray: NasaImageData[] = [];

const loadImages = async () => {
  nasaDataArray = await fetchAPIPictures();
  updateDOM(nasaDataArray);
};

// On Load
loadImages();
