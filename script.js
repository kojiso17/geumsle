
const userNameIs = document.getElementById("userNameH2");
const USERNAME_KEY = "username";



function showHello() {
  const helloUser = document.getElementById("hello");
  
  userNameIs.innerText = `환영하오.`;
  helloUser.classList.remove("hidden");

}


// 이름값 집어넣으면 h1에서 호출하기
// 누르면 안 보이는 글씨 보이게 하기
function watchWord() {


  const userName = prompt('이름이 무엇이오?'); // 이름 묻는 창

  if (userName == "" || userName == null) {
    const userName = prompt('바르게 적어주세요.');
  } else {
    console.log(userName);
    userNameIs.innerText = `환영하오.  ${userName}`; // '나를 눌러보시오' 대신 input 이름값  입력
    localStorage.setItem(USERNAME_KEY, userNameIs);
    // 이름값 입력하면 숨겨놨던 h1들 나타내기
    helloUser.classList.remove("hidden");
    alert("감사하오");
  }

}

// username이 localStorage에 존재하면 form이 더 이상 나오지 않게 하기
const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  // form 보여주기
} else {
  // form 보여주지 않고 이름이 계속 떠있게 하기
}

// 로그인 버튼 클릭시
// input 내용 받아오기

// 버튼 생성 후 버튼 실행시 inputName의 value 값 가져외기
const userNameHello = document.getElementById("inpName");
const loginButton = document.querySelector("#logBtn")
//const userNameChange = document.getElementById("helloName");

function onloginButton(event) {
  event.preventDefault(); //  새로고침 정지시켜놓기
  //console.log(event);
  console.log(userNameHello.value);

}

//loginButton.addEventListener("click", onloginButton);
