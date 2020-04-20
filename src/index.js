 import cards from './cards.js';

 function gameText() {
  const test = document.querySelectorAll('div.card-action');
  const startBtn = document.querySelector('.start');
  if (isGamemode && index > 0) {
    startBtn.removeAttribute('style');
    for (const el of test) {
      el.style.display = 'none';
    }
  }
}

const elems = document.querySelectorAll('.sidenav');
M.Sidenav.init(elems, {});
function soundClick(filename = './sounds/test.mp3') {
  const audio = new Audio();
  audio.src = filename;
  audio.autoplay = true;
}

let index; let isGamemode = false;
localStorage.setItem('state', 'false');
class Page {
  create(id, pics, translation) {
    const container = document.createElement('div');
    container.className = 'col s12 m6 l3 card-container';
    container.id = id;
    const row = document.querySelector('.row');
    const imageFront = document.createElement('img');
    const imageBack = document.createElement('img');
    const card = document.createElement('div');
    card.id = `card_${id}`;
    card.className = 'card';
    // front side of card
    const cardFront = document.createElement('div');
    cardFront.id = id;
    cardFront.className = 'card-front';
    const cardimageFront = document.createElement('div');
    cardimageFront.id = id;
    cardimageFront.className = 'card-image';
    const cardActionFront = document.createElement('div');
    cardActionFront.className = 'card-action';
    cardActionFront.id = id;
    const cardActionFrontText = document.createElement('span');
    cardActionFrontText.innerHTML = id.toUpperCase();
    cardActionFrontText.id = id;
    cardActionFrontText.className = 'word';
    // back side of card
    const cardBack = document.createElement('div');
    cardBack.id = id;
    cardBack.className = 'card-back';
    const cardimageBack = document.createElement('div');
    cardimageBack.id = id;
    cardimageBack.className = 'card-image';
    const cardActionBack = document.createElement('div');
    cardActionBack.className = 'card-action';
    const cardActionBackText = document.createElement('span');
    cardActionBackText.innerHTML = translation.toUpperCase();
    cardActionBackText.id = id;
    cardActionBackText.className = 'word';

    imageFront.id = id;
    imageFront.src = pics;

    imageBack.id = id;
    imageBack.src = pics;

    cardimageFront.appendChild(imageFront);
    cardFront.appendChild(cardimageFront);
    cardActionFront.appendChild(cardActionFrontText);
    cardFront.appendChild(cardActionFront);
    card.appendChild(cardFront);
    container.appendChild(card);

    cardimageBack.appendChild(imageBack);
    cardBack.appendChild(cardimageBack);
    cardActionBack.appendChild(cardActionBackText);
    cardBack.appendChild(cardActionBack);
    card.appendChild(cardBack);
    container.appendChild(card);

    row.appendChild(container);
  }

  addStart() {
    const body = document.querySelector('body');
    const startButton = document.createElement('button');
    startButton.textContent = 'Start game';
    startButton.className = 'waves-effect waves-light btn start';
    startButton.type = 'button';
    startButton.style.display = 'none';
    body.appendChild(startButton);
  }
}
class MainPage {
  create(id, pics) {
    const container = document.createElement('div');
    container.className = 'col s12 m6 l3 card-container';
    container.id = id;
    const row = document.querySelector('.row');
    const image = document.createElement('img');
    const card = document.createElement('div');
    card.id = id;
    card.className = 'card menu-item';
    const cardimage = document.createElement('div');
    cardimage.id = id;
    cardimage.className = 'card-image menu-item teal';
    const cardAction = document.createElement('div');
    cardAction.className = 'card-action menu-item';
    cardAction.id = id;
    const cardActionText = document.createElement('p');
    cardAction.className = 'menu-item';
    cardActionText.innerHTML = id.toUpperCase();
    image.id = id;
    image.className = 'menu-item';
    image.src = pics;
    cardimage.appendChild(image);
    cardAction.appendChild(cardActionText);
    card.appendChild(cardimage);
    card.appendChild(cardAction);
    container.appendChild(card);
    row.appendChild(container);
  }
}
const page = new Page();
const mainPage = new MainPage();
index = 0;
for (let i = 0; i < 8; i++) {
  mainPage.create(cards[0][i], cards[i + 1][index + 1].image);
}

let card;

function shuffle() {
  return Math.random() - 0.5;
}
function gameSound() {
  const playlist = [];
  const gameCard = document.querySelectorAll('.col');
  for (const element of gameCard) {
    playlist.push(element.id);
  }
  playlist.sort((shuffle));
  let errors = 0;
  let a = playlist.pop();
  let soundGame = `./sounds/${a}.mp3`;
  const audio = new Audio();
  audio.src = soundGame;
  audio.autoplay = true;
  document.querySelector('.start').addEventListener('click', () => {
    soundClick(soundGame);
  });
  const soundSuccess = './sounds/success.mp3';
  const soundError = './sounds/error.mp3';
  const row = document.querySelector('.row');
  const stars = document.querySelector('.stars');
  document.addEventListener('click', (event) => {
    if (event.target.id === a && playlist.length > 0) {
      
      a = playlist.pop();
      event.target.closest('.card-container').classList.toggle('grayFilt');
      let starwin=document.createElement('img');
      starwin.src="./img/star-win.png";
      stars.prepend(starwin);
      soundGame = `./sounds/${a}.mp3`;
      soundClick(soundGame);
     
      
    }
    if (event.target.id !== a && playlist.includes(event.target.id)) {
      soundClick(soundError);
      errors++;
      let starlose=document.createElement('img');
      starlose.src="./img/star.png";
      stars.prepend(starlose);
    }
    if (event.target.id === a && playlist.length === 0) {
      
      while (row.firstChild) {
        row.removeChild(row.firstChild);
      }
      let resultpic=document.createElement('img');
     
      if (errors === 0) {
        soundClick(soundSuccess);
        resultpic.src="./img/success.jpg";
      } else {
        soundClick(soundError);
        resultpic.src="./img/failure.jpg";
        let resultErrors=document.createElement('p');
        resultErrors.innerHTML="Errors: "+errors;
        row.appendChild(resultErrors);
      
        
      }
      while (stars.firstChild) {
        stars.removeChild(stars.firstChild);
      }
      resultpic.className='center';
      row.appendChild(resultpic);
      soundGame="";
      document.querySelector('.start').textContent = 'Start game';
      document.querySelector('.start').style.display = 'none';
    }
  });
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('start') && event.target.textContent !== 'repeat') {
    event.target.textContent = 'repeat';
    if (isGamemode && index > 0) {
      gameSound();
    }
  }

  if (event.target.classList.contains('menu-item')) {
    const { target } = event;
    index = cards[0].indexOf(target.id) + 1;
    if (index === 0) {
      const row = document.querySelector('.row');
      while (row.firstChild) {
        row.removeChild(row.firstChild);
      }
      for (let i = 0; i < 8; i++) {
        mainPage.create(cards[0][i], cards[i + 1][index + 1].image);
      }

      return;
    }

    if (index > 0 && index !== 'undefined') {
      const row = document.querySelector('.row');
      while (row.firstChild) {
        row.removeChild(row.firstChild);
      }
      for (let i = 0; i < 8; i++) {
        page.create(cards[index][i].word, cards[index][i].image, cards[index][i].translation);
      }
      const btns = document.querySelectorAll('.start');
      if (btns.length < 1) { page.addStart(); }
      gameText(isGamemode);
      return;
    }
  }

  if (event.target.className !== '' && !event.target.classList.contains('sidenav') && event.target.id !== '') {
    card = event.target.closest('div').parentNode.parentNode;
    if (localStorage.getItem('state') !== 'true') {
      card.classList.toggle('is-flipped');
      localStorage.setItem('state', 'true');
      card.addEventListener('mouseleave', () => {
        if (localStorage.getItem('state') === 'true') {
          card.classList.toggle('is-flipped');
          localStorage.setItem('state', 'false');
        }
      });
    }
    return;
  }
  if (event.target.id !== '' && !event.target.classList.contains('menu-item') && !isGamemode) {
    const sound = `./sounds/${event.target.id}.mp3`;
    soundClick(sound);
  }
});

const switcher = document.querySelector('input');
switcher.addEventListener('click', () => {
  const bodyColor = document.querySelector('body');
  const cardAction = document.querySelectorAll('div.card-action');
  const startBtn = document.querySelector('.start');
  if (switcher.checked) {
    bodyColor.classList.toggle('gameBackground');
    isGamemode = true;
    for (const el of cardAction) {
      el.style.display = 'none';
    }
    if (index > 0) { startBtn.removeAttribute('style'); }
  } else {
    bodyColor.classList.toggle('gameBackground');
    isGamemode = false;
    for (const el of cardAction) {
      el.removeAttribute('style');
    }
    if (index > 0) { startBtn.style.display = 'none'; }
  }
});
