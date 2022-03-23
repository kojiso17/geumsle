
const userNameIs = document.querySelector(".firstPh h2");

console.log(userNameIs);


// 이름값 집어넣으면 h1에서 호출하기
function checkUserName() {
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

// 누르면 안 보이는 글씨 보이게 하기
function watchWord() {
  const hello = document.getElementById("hello");
  const hello2 = document.getElementById("hello2")
  hello.style.color = "gold";
  hello2.style.color = "gold";
  userNameIs.style.color = "black";
}



// 로그인 버튼 클릭시


const userNameHello = document.getElementById("helloName");
console.log(userNameHello);

function loginButton() {
  alert("로그인되었습니다.");
  const userNameHello = document.querySelector(".user h1")
  console.log(userNameHello);
  userNameHello.innerText = inputName;
}

const inputName = document.querySelector("inpName");
console.log(inputName);
