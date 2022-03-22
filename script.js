
const userNameIs = document.querySelector(".firstPh h2");

console.log(userNameIs);



function checkUserName() {
  const userName = prompt('what is your name?');

  if (userName == "") {
    const userName = prompt('바르게 적어주세요.');
  } else {
    console.log(userName);
    userNameIs.innerText = userName;
    alert("thank you");
  }
}
