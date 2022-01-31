const username = document.getElementById("username");
const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
form.addEventListener("submit", (e) => {
  let messeges = [];
  if (username.value === "" || username.value == null) {
    messeges.push("Name is Requird");
  }

  if (messeges.length > 0) {
    e.preventDefault();
  }
});
