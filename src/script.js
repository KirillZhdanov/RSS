//import cards from './cards.js';
const cards = [ 
  ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'],
  [
    {
      word: 'cry',
      translation: 'плакать',
      image: 'img/cry.jpg',
      audioSrc: 'audio/cry.mp3'
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: 'img/dance.jpg',
      audioSrc: 'audio/dance.mp3'
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: 'img/dive.jpg',
      audioSrc: 'audio/dive.mp3'
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: 'img/draw.jpg',
      audioSrc: 'audio/draw.mp3'
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: 'img/fish.jpg',
      audioSrc: 'audio/fish.mp3'
    },
    {
      word: 'fly',
      translation: 'летать',
      image: 'img/fly.jpg',
      audioSrc: 'audio/fly.mp3'
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: 'img/hug.jpg',
      audioSrc: 'audio/hug.mp3'
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: 'img/jump.jpg',
      audioSrc: 'audio/jump.mp3'
    }
  ],
  [
    {
      word: 'open',
      translation: 'открывать',
      image: 'img/open.jpg',
      audioSrc: 'audio/open.mp3'
    },
    {
      word: 'play',
      translation: 'играть',
      image: 'img/play.jpg',
      audioSrc: 'audio/play.mp3'
    },
    {
      word: 'point',
      translation: 'указывать',
      image: 'img/point.jpg',
      audioSrc: 'audio/point.mp3'
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: 'img/ride.jpg',
      audioSrc: 'audio/ride.mp3'
    },
    {
      word: 'run',
      translation: 'бегать',
      image: 'img/run.jpg',
      audioSrc: 'audio/run.mp3'
    },
    {
      word: 'sing',
      translation: 'петь',
      image: 'img/sing.jpg',
      audioSrc: 'audio/sing.mp3'
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: 'img/skip.jpg',
      audioSrc: 'audio/skip.mp3'
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: 'img/swim.jpg',
      audioSrc: 'audio/swim.mp3'
    }
  ],
  [
    {
      word: 'cat',
      translation: 'кот',
      image: 'img/cat.jpg',
      audioSrc: 'audio/cat.mp3'
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: 'img/chick.jpg',
      audioSrc: 'audio/chick.mp3'
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: 'img/chicken.jpg',
      audioSrc: 'audio/chicken.mp3'
    },
    {
      word: 'dog',
      translation: 'собака',
      image: 'img/dog.jpg',
      audioSrc: 'audio/dog.mp3'
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: 'img/horse.jpg',
      audioSrc: 'audio/horse.mp3'
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: 'img/pig.jpg',
      audioSrc: 'audio/pig.mp3'
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      image: 'img/rabbit.jpg',
      audioSrc: 'audio/rabbit.mp3'
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: 'img/sheep.jpg',
      audioSrc: 'audio/sheep.mp3'
    }
  ],
  [
    {
      word: 'bird',
      translation: 'птица',
      image: 'img/bird.jpg',
      audioSrc: 'audio/bird.mp3'
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: 'img/fish1.jpg',
      audioSrc: 'audio/fish.mp3'
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: 'img/frog.jpg',
      audioSrc: 'audio/frog.mp3'
    },
    {
      word: 'giraffe',
      translation: 'жирафа',
      image: 'img/giraffe.jpg',
      audioSrc: 'audio/giraffe.mp3'
    },
    {
      word: 'lion',
      translation: 'лев',
      image: 'img/lion.jpg',
      audioSrc: 'audio/lion.mp3'
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: 'img/mouse.jpg',
      audioSrc: 'audio/mouse.mp3'
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: 'img/turtle.jpg',
      audioSrc: 'audio/turtle.mp3'
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: 'img/dolphin.jpg',
      audioSrc: 'audio/dolphin.mp3'
    }
  ],
  [
    {
      word: 'skirt',
      translation: 'юбка',
      image: 'img/skirt.jpg',
      audioSrc: 'audio/skirt.mp3'
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: 'img/pants.jpg',
      audioSrc: 'audio/pants.mp3'
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: 'img/blouse.jpg',
      audioSrc: 'audio/blouse.mp3'
    },
    {
      word: 'dress',
      translation: 'платье',
      image: 'img/dress.jpg',
      audioSrc: 'audio/dress.mp3'
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: 'img/boot.jpg',
      audioSrc: 'audio/boot.mp3'
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: 'img/shirt.jpg',
      audioSrc: 'audio/shirt.mp3'
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: 'img/coat.jpg',
      audioSrc: 'audio/coat.mp3'
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: 'img/shoe.jpg',
      audioSrc: 'audio/shoe.mp3'
    }
  ],
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: 'img/sad.jpg',
      audioSrc: 'audio/sad.mp3'
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: 'img/angry.jpg',
      audioSrc: 'audio/angry.mp3'
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: 'img/happy.jpg',
      audioSrc: 'audio/happy.mp3'
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: 'img/tired.jpg',
      audioSrc: 'audio/tired.mp3'
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: 'img/surprised.jpg',
      audioSrc: 'audio/surprised.mp3'
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: 'img/scared.jpg',
      audioSrc: 'audio/scared.mp3'
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: 'img/smile.jpg',
      audioSrc: 'audio/smile.mp3'
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: 'img/laugh.jpg',
      audioSrc: 'audio/laugh.mp3'
    }
  ]
];

console.log(cards);
let elems = document.querySelectorAll('.sidenav');
M.Sidenav.init(elems, {});
function soundClick(filename="./sounds/test.mp3") {
    var audio = new Audio(); 
    audio.src = filename; 
    audio.autoplay = true; 
  }
  /*
  id1=["cry","dance","dive","draw","fish","fly","hug","jump"];
  pics1=["./images/cry.jpg","./images/dance.jpg","./images/dive.jpg","./images/draw.jpg","./images/fish.jpg","./images/fly.jpg","./images/hug.jpg","./images/jump.jpg"];
  let t="./sounds/"+id1[1]+".mp3";
  function cardsInit(id,pics){ 
    for(let i=0;i<8;i++){
        const div = document.createElement('div');
        div.className = 'column';
        div.id=id[i];
        document.body.append(div);
        const key=document.createElement("div");
        key.className="col s12 m6 l3";
        key.id=id[i];
        const card =document.createElement('div');
        card.id=id[i];
        card.className= 'card';
        const cardimage=document.createElement('div');
        cardimage.id=id[i];
        cardimage.className='card-image';
        const row=document.querySelector('.row');
        const image=document.createElement('img');
        image.id=id[i];
        //image.src="https://materializecss.com/images/sample-1.jpg";
        image.src=pics[i];
        cardimage.appendChild(image);
        card.appendChild(cardimage);
        key.appendChild(card);
        div.appendChild(key);
        row.appendChild(div); 
        }
}
cardsInit(id1,pics1); */
let index;
    
    //document.getElementById(id[1]).onclick=function(){ soundClick(t);};
   
   class Page{
     constructor(){
     
     }
     create(id,pics,translation){
     
        const container=document.createElement("div");
        container.className="col s12 m6 l3 card-container";
        container.id=id;
        const row=document.querySelector('.row');
        const imageFront=document.createElement('img');
        const imageBack=document.createElement('img');
        const card =document.createElement('div');
        card.id="card_"+id;
        card.className= 'card'; 
        //front side of card
        const cardFront =document.createElement('div');
        cardFront.id=id;
        cardFront.className= 'card-front';  
        const cardimageFront=document.createElement('div');
        cardimageFront.id=id;
        cardimageFront.className='card-image';
        const cardActionFront=document.createElement('div');
        cardActionFront.className='card-action';
        cardActionFront.id=id;
        const cardActionFrontText=document.createElement('p');
        cardActionFrontText.innerHTML=id.toUpperCase();
        //back side of card
        const cardBack =document.createElement('div');
        cardBack.id=id;
        cardBack.className= 'card-back';  
        const cardimageBack=document.createElement('div');
        cardimageBack.id=id;
        cardimageBack.className='card-image';
        const cardActionBack=document.createElement('div');
        cardActionBack.className='card-action';
        const cardActionBackText=document.createElement('p');
        cardActionBackText.innerHTML=translation.toUpperCase();

        imageFront.id=id;
        imageFront.src=pics;
        
        imageBack.id=id;
        imageBack.src=pics;

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
       
        console.log(id +" "+pics);
     }

   }
   let test=new Page();
   index=1;
   for(let i=0;i<8;i++){
   test.create(cards[index][i].word,cards[index][i].image,cards[index][i].translation);}
  /*
   var card=document.querySelector('.card');
   let flag=localStorage.getItem('state');

document.addEventListener( 'click', function(event) {
  console.log(event.currentTarget.id);
  if(event.target.classList.contains("card-action")){
     card = event.target;
  event.target.parentNode.parentNode.classList.toggle('is-flipped');
  localStorage.setItem('state','true');}
});
*/let card,cardID="cry";


   document.addEventListener("click",(event)=>{
    if(event.target.closest('div').classList.contains("card-action")){
    card = event.target.closest('div');
    localStorage.setItem('flip',card.id);
    cardID=localStorage.getItem('flip');
    console.log(cardID);
    card.parentNode.parentNode.classList.toggle('is-flipped');
    localStorage.setItem('state','true');
    return;}
    //console.log(event.target.id);
    if(event.target.id!==""){
    let test="./sounds/"+event.target.id+".mp3";
   soundClick(test);
   
    
  
 }
 if(event.target.id==="menu-item"){
  let target=event.target;
    console.log(target.innerHTML);
    if(index>0&&index!=="undefined"){
    index=cards[0].indexOf(target.innerHTML)+1;
    const row=document.querySelector('.row');
    while (row.firstChild) {
      row.removeChild(row.firstChild);
      }
    for(let i=0;i<8;i++){
      test.create(cards[index][i].word,cards[index][i].image);
    }
    alert(cards[0].indexOf(target.innerHTML)); 
  }
}
});
document.getElementById(cardID).addEventListener( 'mouseleave', function(event) {
  console.log(card.parentNode.id);
   if(localStorage.getItem('state')==="true"){
     card.parentNode.parentNode.classList.toggle('is-flipped');
   localStorage.setItem('state','false');}
 });