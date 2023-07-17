# 네이버 로그인 페이지 구현


---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.


---

```js

function naverLoginId(loginId) {

  // 이메일 유효성 검사 validation
  if (!emailReg(loginId.value)){
    // 통과가 안되면 실행
    loginId.classList.add('is--invalid');
    return;
  }else {
    loginId.classList.remove('is--invalid');
    return true;
  }
}
```
이메일 유효성 검사, 'emailReg'조건이 통과가 안되면 'is--invalid'실행

</br>

```js

function naverLoginPw(loginPw) {

  // 비밀번호 유효성 검사 validation
  if (!pwReg(loginPw.value)){
    // 통과가 안되면 실행
    loginPw.classList.add('is--invalid');
    return;
    // 통과가 되면 
  }else {
    loginPw.classList.remove('is--invalid');
    return true;
  }
}
```
비밀번호 유효성 검사, 'pwReg'조건이 통과가 안되면 'is--invalid'실행
</br>

```js

function naverLoginBtn(loginId, loginPw) {

  const user = {
    id:'asd@naver.com',
    pw:'spdlqj123!@'
  }

  // 유효성 통과한 값과, 지정된 값을 비교
  if (loginId.value === user.id && loginPw.value === user.pw) {
    // true가 나오면 페이지 이동
    window.location.href = 'welcome.html'
    // false일 경우 alert 띄움
  }else if (loginId.value === user.id || loginPw.value === user.pw){
    alert( '넌 잘못됐어. 다시해.' );
  }
}
```
이메일, 비밀번호가 'user'값과 일치했을 경우 다음페이지로 이동,
둘 중 한개의 값이라도 일치하지 않을 경우 alert창 띄우기
</br>

---

<!-- Quote -->
## 결과화면

<!-- Image -->
###### 조건에 맞지않는 아이디 입력
![아이디 잘못 입력했을 때](./images/homework/js-mission01-01.png)

###### 조건에 맞지않는 비밀번호 입력
![비밀번호 잘못 입력했을 때](./images/homework/js-mission01-02.png)

###### emailReg와 pwReg 조건에는 맞지만 user값과 일치하지않을 때
![user값과 일치하지 않을 때](./images/homework/js-mission01-03.png)

###### 모든 조건 통과
![모든 조건 통과](./images/homework/js-mission01-04.png)





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

---

</br>





## 선생님께서 짜주신 코드

```js
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 조건처리 
   - false면 해당 input에 is--invalid 추가
   - true면 해당 input에 is--invalid 제거

2. pw 정규표현식을 사용한 validation
   - false면 해당 input에 is--invalid 추가
   - true면 해당 input에 is--invalid 제거

3. 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
4. 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교


5. 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동

*/


// @ 기호 포함, .포함 이후 2글자 이상
function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

// 최소 6글자 이상, 0~9숫자 1개 이상 포함, 특수기호 1개 이상 포함
function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}



const emailInput = document.querySelector('#userEmail');
const pwInput = document.querySelector('#userPassword');
const loginButton = document.querySelector('.btn-login');

let emailPass = false;
let pwPass = false;

// 태그가 가지고있는 고유한 능력 x 







function handleCheckEmail(){
  
  const value = this.value;
  
  if(emailReg(value)){
    this.classList.remove('is--invalid');
    emailPass = true;
  }else{
    this.classList.add('is--invalid');
    emailPass = false;
  }
}

function handleCheckPw(){
  const value = this.value;

  if(pwReg(value)){
    this.classList.remove('is--invalid')
    pwPass = true;
  }else{
    this.classList.add('is--invalid')
    pwPass = false;
  }
}

function handleLogin(e){
  e.preventDefault();

  if(emailPass && pwPass){

    try{
      
      const id = emailInput.value;
      const pw = pwInput.value;
      
      const getUserId = user.id;
      const getUserPw = user.pw;
  
      if(id === getUserId && pw === getUserPw){
        window.location.href = 'welcome.html';
      }else{
        console.log('정확한 아이디와 비밀번호를 입력해 주세요.');  
      }
    }
    catch(e){
      alert(e.message)
    }
 


  }else{
    console.log('정확한 아이디와 비밀번호를 입력해 주세요.');
  }



}





emailInput.addEventListener('input',handleCheckEmail)
pwInput.addEventListener('input',handleCheckPw)
loginButton.addEventListener('click',handleLogin)

```

