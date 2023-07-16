


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





















  // console.log(loginId.value,user.id)
  // // 이메일 유효성 검사 validation
  // if (!emailReg(loginId.value)){
    //   // 통과가 안되면 실행
    //   loginId.classList.add('is--invalid');
    //   return;
    // }else {
      //   loginId.classList.remove('is--invalid');
      // }
      
      // let loginPw = document.querySelector("#userPassword");
      // // 비밀번호 유효성 검사 validation
      // if (!pwReg(loginPw.value)){
      //   // 통과가 안되면 실행
      //   loginPw.classList.add('is--invalid');
      //   // 통과가 되면 
      // }else {
      //   loginPw.classList.remove('is--invalid');
      // }

  // // 유효성 통과한 값과, 지정된 값을 비교
  // if (loginId.value === user.id && loginPw.value === user.pw) {
  //   // true가 나오면 페이지 이동
  //   window.location.href = 'welcome.html'
  //   // false일 경우 alert 띄움
  // }else {
  //   alert( '넌 잘못됐어. 다시해.' );
  // }









// return;
//  1. 알럿 조건 강화
//  2. 함수 실행 중단


// 이메일 유효성 검사 validation




// 아이디, 비밀번호 값이 조건을 충족시키지 못했을 경우, is-invalid를 실행함.

/* 1. 변수 이름 선언 : loginID
   2. loginId >  html에 있는 #userEmail을 불러옴
   3. if 아래있는 조건(emailReg)이 틀릴 경우 loginId 변수가 .value (인풋 값 가져오기) 실행됨 
 */

























