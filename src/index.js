import cards from './cards.js';

const CARD_NUMBER = 8;
const startGame = 'Start game';
const REPEAT = 'repeat';
const MENU_ITEM = 'menu-item';
const soundSuccess = './sounds/success.mp3';
const soundError = './sounds/error.mp3';
const soundLose = './sounds/lose.mp3';
const soundCorrect = './sounds/correct.mp3';
const SUCCESSPIC = './img/success.jpg';
const FAILUREPIC = './img/failure.jpg';

function gameText() {
  const cardActions = document.querySelectorAll('div.card-action');
  const startBtn = document.querySelector('.start');
  if (isGamemode && index > 0) {
    startBtn.classList.remove('hide');
    for (const el of cardActions) {
      el.classList.add("hide");
    }
  }
}

document.addEventListener("DOMContentLoaded", function(){
  const elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems, {});
});

function soundClick(filename = './sounds/fly.mp3') {
  const audio = new Audio();
  audio.src = filename;
  audio.autoplay = true;
}

let index; let isGamemode = false;
localStorage.setItem('state', 'false');
class Page {
  createCard(id, pics, translation) {
    const container = document.createElement('div');
    container.className = 'col s12 m6 l3 card-container';
    container.id = id;
    const row = document.querySelector('.row');
    const card = document.createElement('div');
    card.id = `card_${id}`;
    card.className = 'card';
    card.appendChild(this.createCardSide(id, this.createImage(id, pics), id, 'front'));
    container.appendChild(card);
    card.appendChild(this.createCardSide(id, this.createImage(id, pics), translation, 'back'));
    container.appendChild(card);
    row.appendChild(container);
  }
  createCardSide(id, image, word ,side){
    const card = document.createElement('div');
    card.id = id;
    card.className = `card-${side}`;
    const cardimage = document.createElement('div');
    cardimage.id = id;
    cardimage.className = 'card-image';
    const cardAction = document.createElement('div');
    cardAction.className = 'card-action';
    cardAction.id = id;
    const cardActionText = document.createElement('span');
    cardActionText.innerHTML = word.toUpperCase();
    cardActionText.id = id;
    cardActionText.className = 'word';
    cardimage.appendChild(image);
    card.appendChild(cardimage);
    cardAction.appendChild(cardActionText);
    if(side === 'front'){
      const repeatF = document.createElement('img');
      repeatF.src = `./img/${REPEAT}.png`;
      repeatF.id = id;
      repeatF.className = REPEAT;
      cardAction.appendChild(repeatF);
    }
    card.appendChild(cardAction);
    return card;
  }
  createImage(id, pics){
    const image = document.createElement('img');
    image.id = id;
    image.src = pics;
    return image;
  }
  addStart() {
    const body = document.querySelector('body');
    const startButton = document.createElement('button');
    startButton.textContent = startGame;
    startButton.className = 'waves-effect waves-light btn start';
    startButton.type = 'button';
    startButton.classList.add('hide');
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
    card.className = `card ${MENU_ITEM}`;
    const cardimage = document.createElement('div');
    cardimage.id = id;
    cardimage.className = `card-image ${MENU_ITEM} teal`;
    const cardAction = document.createElement('div');
    cardAction.className = `card-action ${MENU_ITEM}`;
    cardAction.id = id;
    const cardActionText = document.createElement('p');
    cardAction.className = MENU_ITEM;
    cardActionText.innerHTML = id.toUpperCase();
    image.id = id;
    image.className = MENU_ITEM;
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
for (let i = 0; i < CARD_NUMBER; i++) {
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
  
  const row = document.querySelector('.row');
  const stars = document.querySelector('.stars');
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains(MENU_ITEM)) {
      stars.innerHTML = '';
      errors = 0;
      soundGame = '';
      document.querySelector('.start').textContent = startGame;
      document.querySelector('.start').classList.add('hide');
    }
    if (event.target.id === a && playlist.length > 0) {
      soundClick(soundCorrect);
      a = playlist.pop();
      event.target.closest('.card-container').classList.add('grayFilt');
      const starwin = document.createElement('img');
      starwin.src = './img/star-win.png';
      stars.prepend(starwin);
      soundGame = `./sounds/${a}.mp3`;
      setTimeout(() => { soundClick(soundGame); }, 2000);
    }
    if (event.target.id !== a && playlist.includes(event.target.id)) {
      soundClick(soundError);
      errors++;
      const starlose = document.createElement('img');
      starlose.src = './img/star.png';
      stars.prepend(starlose);
    }
    if (event.target.id === a && playlist.length === 0) {
      row.innerHTML = '';
      const resultpic = document.createElement('img');

      if (errors === 0) {
        soundClick(soundSuccess);
        resultpic.src = SUCCESSPIC;
      } else {
        soundClick(soundLose);
        resultpic.src = FAILUREPIC;
        const resultErrors = document.createElement('p');
        resultErrors.innerHTML = `Errors: ${errors}`;
        row.appendChild(resultErrors);
      }
      stars.innerHTML = '';
      resultpic.className = 'center';
      row.appendChild(resultpic);
      errors = 0;
      soundGame = '';
      document.querySelector('.start').textContent = startGame;
      document.querySelector('.start').classList.add('hide');
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  });
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('start') && event.target.textContent !== REPEAT) {
    event.target.textContent = REPEAT;
    if (isGamemode && index > 0) {
      gameSound();
    }
  }

  if (event.target.classList.contains(MENU_ITEM)) {
    const { target } = event;
    index = cards[0].indexOf(target.id) + 1;
    document.querySelectorAll('a').forEach((element) => element.classList.remove('active'));
    document.getElementById(event.target.id).classList.add('active');
    if (index === 0) {
      location.reload();
    }

    if (index > 0 && index !== 'undefined') {
      const row = document.querySelector('.row');
      row.innerHTML = '';
      for (let i = 0; i < CARD_NUMBER; i++) {
        page.createCard(cards[index][i].word, cards[index][i].image, cards[index][i].translation);
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
  if (event.target.id !== '' && !event.target.classList.contains(MENU_ITEM) && !isGamemode) {
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
      el.classList.add('hide');
    }
    if (index > 0) { startBtn.classList.remove('hide'); }
  } else {
    bodyColor.classList.toggle('gameBackground');
    isGamemode = false;
    for (const el of cardAction) {
      el.classList.remove('hide');
    }
    if (index > 0) { startBtn.classList.add('hide'); }
  }
});
