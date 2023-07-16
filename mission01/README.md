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


function naverLoginPage() {

  let loginId = document.querySelector("#userEmail");
  let loginPw = document.querySelector("#userPassword");

  if (!naverLoginId(loginId)){
    return;
  }

  if (!naverLoginPw(loginPw)) {
    return;
  }

  naverLoginBtn(loginId, loginPw);

}


function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

```






