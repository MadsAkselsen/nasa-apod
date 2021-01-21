interface DOMElements {
  resultsNav: HTMLElement;
  favoritesNav: HTMLElement;
  imagesContainer: HTMLElement;
  saveConfirmed: HTMLElement;
  loader: HTMLElement;
  favoritesEl: HTMLElement;
  loadMoreEl: HTMLElement;
  loadMoreFavsEl: HTMLElement;
}

export const DOMElements: DOMElements = {
  resultsNav: document.getElementById('resultsNav'),
  favoritesNav: document.getElementById('favoritesNav'),
  imagesContainer: document.querySelector('.images-container'),
  saveConfirmed: document.querySelector('.save-confirmed'),
  loader: document.querySelector('.loader'),
  favoritesEl: document.getElementById('favoritesEl'),
  loadMoreEl: document.getElementById('loadMoreEl'),
  loadMoreFavsEl: document.getElementById('loadMoreFavsEl'),
};
/* const resultsNav = document.getElementById('resultsNav');
const resultsNav = document.getElementById('resultsNav'); */
