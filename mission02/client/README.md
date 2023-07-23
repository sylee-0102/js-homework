# mission 2


```js

const navigation = getNode('.nav');
const visualImage = getNode('.visual img');
const list = getNodes('.nav li');
const nickName = getNode('.nickName');
```
html에 있는 클래스들 가져와서 변수선언하기

</br>

```js

function clickImage(e){
  e.preventDefault();
  
  // 이벤트 걸리는 타겟 당사자의 가장 가까운 li 가져오기
  const target = e.target.closest('li');
  // 이벤트 걸리는 타겟 당사자 가장 가까운 버튼 가져오기
  const button = e.target.closest('button');
  if(!target || !button ) return;
  // 버튼(?)외 영역에 클릭하면 나는 에러 해결
  const index = attr(target,'data-index');
  // bg 컬러 지정
  const bgColor = getNode('body');
  // 클릭하면 위에 타이틀 (h1태그) 변경
  const nameText = data[index-1].name;
  nickName.textContent = nameText;
  // bg 컬러 변경
  let colorA = data[index-1].color[0];
  let colorB = data[index-1].color[1];


  
  list.forEach((li) => removeClass(li,'is-active') );

  addClass(target, 'is-active');

  // data.js에서 필요한 아이들 적재적소에 적용하기
  visualImage.setAttribute('src',`./assets/${data[index-1].src}`);
  visualImage.setAttribute('alt',data[index-1].alt);
  bgColor.style.background = `linear-gradient(to bottom, ${colorA},${colorB})`;

}


navigation.addEventListener('click',clickImage);

```
함수 분리는 시간이슈와 실력이슈로,,,

---

<!-- Quote -->
## 결과화면

<!-- video -->

![완성화면](./assets/homework2.gif)


</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>

