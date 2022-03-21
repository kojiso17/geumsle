
function checkUserName() {
  const userName = prompt('what is your name?');
  if (userName == "") {
    const userName = prompt('바르게 적어주세요');
  } else {
    alert("thank you");
  }

}
