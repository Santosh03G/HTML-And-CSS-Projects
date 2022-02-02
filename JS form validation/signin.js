let UserName = document.getElementById("txt-signin-UserName");
let Password = document.getElementById("pass-signin-password");
let form = document.querySelector("form");

function validateInput() {
  //check username is empty
  if (UserName.value.trim() === "") {
    onError(UserName, "User Name cannot be empty");
  } else {
    onSuccess(UserName);
  }

  //password
  if (Password.value.trim() === "") {
    onError(Password, "User Name cannot be empty");
  } else {
    onSuccess(Password);
  }
}

document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();
  validateInput();
});

function onSuccess(input) {
  let parent = input.parentElement;
  let messageEle = parent.querySelector("small");
  messageEle.style.visibility = "hidden";
  parent.classList.remove("error");
  parent.classList.add("success");
}
function onError(input, message) {
  let parent = input.parentElement;
  let messageEle = parent.querySelector("small");
  messageEle.style.visibility = "visible";
  messageEle.innerText = message;
  parent.classList.add("error");
  parent.classList.remove("success");
}
