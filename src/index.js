import "@babel/polyfill";
function imageNotFound() {
    this.src = './img/No_Picture.jpg';
  }
  async function Search(filmNameToSearch) {
    const response = await (fetch(`https://www.omdbapi.com/?s=${filmNameToSearch}&apikey=719a8c2e`).then((res) => res.json()).then((data) => data));
    document.getElementById('noResults').textContent = 'No Search Results for: ';
    if (response.totalResults < 1 || response.totalResults === undefined) {
      document.getElementById('noResults').classList.add('noResults');
      document.getElementById('noResults').textContent += filmNameToSearch;
    } else { document.getElementById('noResults').classList.remove('noResults'); }
  
    const mySwiper = document.querySelector('.swiper-container').swiper;
    mySwiper.removeAllSlides();
    for (let page = 1; page <= Math.ceil(response.totalResults / 10); page++) {
      const everyPageResponse = await (fetch(`https://www.omdbapi.com/?s=${filmNameToSearch}&page=${page}&apikey=719a8c2e`).then((res) => res.json()).then((data) => data.Search));
      for (const el of everyPageResponse) {
        const fullFilmInfo = await (fetch(`https://www.omdbapi.com/?i=${el.imdbID}&apikey=719a8c2e`).then((res) => res.json()).then((data) => data));
        const slide = document.createElement('div');
        const info = document.createElement('div');
        info.id = 'info';
        const rating = document.createElement('p');
        rating.innerHTML = `<i class="far fa-star"></i>${fullFilmInfo.imdbRating}`;
        const title = document.createElement('p');
        title.textContent = el.Title;
        const year = document.createElement('p');
        year.textContent = el.Year;
        title.id = 'movieTitle';
        slide.id = 'movieSearchResult';
        slide.className = 'swiper-slide slides';
        const poster = document.createElement('img');
        poster.src = el.Poster !== 'N/A' ? el.Poster : './img/No_Picture.jpg';
        poster.addEventListener('error', imageNotFound);
        slide.appendChild(poster);
        info.appendChild(title);
        info.appendChild(rating);
        info.appendChild(year);
        slide.appendChild(info);
        mySwiper.appendSlide(slide);
      }
    }
    mySwiper.update();
  }
  
  async function getTextTranslation(textToTranslate) {
    const result = await (fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200509T103234Z.638bfdf0381e6918.57e6fe7dac4b67cca81b2ec2f27c181fc962ad18&text=${textToTranslate}&lang=ru-en`)
      .then((res) => res.json()).then((data) => data.text.toString()));
    return result;
  }
  async function translateAdapter(textToTranslate) {
    textToTranslate = textToTranslate === '' ? 'призрак в доспехах' : textToTranslate;
    const translatedText = await (getTextTranslation(textToTranslate));
    const res = translatedText.toString();
    Search(res);
  }
  
  document.getElementById('searchFilmsBlock').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('searchFilmsInput').value;
    translateAdapter(name);
  });
  