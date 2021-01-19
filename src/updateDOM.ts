import { DOMElements } from './DOMElements';
import { addToFavorites } from './index';

export function updateDOM(data: NasaImageData[]) {
  data.forEach(({ hdurl, date, title, url, explanation, copyright }) => {
    // Card Container
    const card = document.createElement('div');
    card.classList.add('card');

    // link
    const link = document.createElement('a');
    link.href = hdurl;
    link.title = 'View Full Image';
    link.target = '_blank';
    // Image
    const image = document.createElement('img');
    image.src = url;
    image.alt = 'NASA Picture of the Day';
    image.loading = 'lazy';
    image.classList.add('card-img-top');
    // card-body container
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    // h5 card-title
    const cardTitle = document.createElement('h5');
    cardTitle.textContent = title;
    cardTitle.classList.add('card-title');
    // add to favorites
    const clickable = document.createElement('p');
    clickable.classList.add('clickable');
    clickable.textContent = 'Add to Favorites';
    clickable.addEventListener('click', () => addToFavorites(url));

    // card-text
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = explanation;
    // text-muted
    const textMuted = document.createElement('small');
    textMuted.classList.add('text-muted');
    // date
    const dateEl = document.createElement('strong');
    dateEl.textContent = date;
    const copyrightInfo = document.createElement('span');
    copyrightInfo.textContent = copyright ? ` ${copyright}` : '';

    // Apend elements to DOM
    DOMElements.imagesContainer.appendChild(card);
    card.append(link, cardBody);
    link.appendChild(image);
    cardBody.append(cardTitle, clickable, cardText, textMuted);
    textMuted.append(dateEl, copyrightInfo);
  });
}
