
const userNameIs = document.querySelector(".firstPh h2");

// 이름값 집어넣으면 h1에서 호출하기
// 누르면 안 보이는 글씨 보이게 하기
function watchWord() {
  const hello = document.getElementById("hello");
  const hello2 = document.getElementById("hello2")
  hello.style.color = "gold";
  hello2.style.color = "gold";
  //userNameIs.style.color = "black";

  const userName = prompt('what is your name?');

  if (userName == "") {
    const userName = prompt('바르게 적어주세요.');
    userNameIs.innerText = userName;
  } else {
    console.log(userName);
    userNameIs.innerText = userName;
    alert("thank you");
  }

}



// 로그인 버튼 클릭시
// input 내용 받아오기

// 버튼 생성 후 버튼 실행시 inputName의 value 값 가져외기
const userNameHello = document.getElementById("logintext");
const loginBtn = document.getElementById("inpBtn")

function loginButton() {
  alert("로그인되었습니다.");

  console.log(userNameHello);
}
