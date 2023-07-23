
const navigation = getNode('.nav');
const visualImage = getNode('.visual img');
const list = getNodes('.nav li');
const nickName = getNode('.nickName');


function clickImage(e){
  e.preventDefault();
  
  const target = e.target.closest('li');
  const button = e.target.closest('button');

  if(!target || !button ) return;

  const index = attr(target,'data-index');
  const bgColor = getNode('body');
  const nameText = data[index-1].name;

  nickName.textContent = nameText;
  
  let colorA = data[index-1].color[0];
  let colorB = data[index-1].color[1];

  
  list.forEach((li) => removeClass(li,'is-active') );

  addClass(target, 'is-active');

  visualImage.setAttribute('src',`./assets/${data[index-1].src}`);
  visualImage.setAttribute('alt',data[index-1].alt);
  bgColor.style.background = `linear-gradient(to bottom, ${colorA},${colorB})`;

}


navigation.addEventListener('click',clickImage);












// by.상호,명화 thanks,,